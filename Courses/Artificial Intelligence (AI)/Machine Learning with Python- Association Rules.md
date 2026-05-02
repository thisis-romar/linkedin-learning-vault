---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-association-rules
url: "https://www.linkedin.com/learning/machine-learning-with-python-association-rules"
duration_minutes: 87
duration: 1h 27m
level: Intermediate
updated: 4/25/2024
learners: 207068
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: false
github: "https://github.com/LinkedInLearning/machine-learning-with-python-association-rules-3209139/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGqEROTjtWi6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245316436?e=2147483647&amp;v=beta&amp;t=R3fI7ZkwTMXbt5LGImFayQOPzqqlXGbp6e5uBeBMVt4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop with Python for AI and Machine Learning]]'
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
prev_courses:
  - '[[Machine Learning with Python- k-Means Clustering]]'
  - '[[Machine Learning with Python- k-Means Clustering]]'
next_courses:
  - '[[Advanced Python Projects- Build AI Applications]]'
  - '[[Machine Learning with Python- Logistic Regression]]'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":5,"total":6,"prev":"Machine Learning with Python- k-Means Clustering","next":"Advanced Python Projects- Build AI Applications"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":3,"total":9,"prev":"Machine Learning with Python- k-Means Clustering","next":"Machine Learning with Python- Logistic Regression"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20Association%20Rules.md)

![Machine Learning with Python: Association Rules](https://media.licdn.com/dms/image/v2/D4D0DAQGqEROTjtWi6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245316436?e=2147483647&amp;v=beta&amp;t=R3fI7ZkwTMXbt5LGImFayQOPzqqlXGbp6e5uBeBMVt4)

# Machine Learning with Python: Association Rules

> Join instructor Frederick Nwanganga as he introduces a practical, easy-to-understand approach to using machine learning to solve real-world problems and provides step-by-step guidance on how to do this in Python. Frederick focuses specifically on association rules and how you can apply them for market basket analysis. He explains what association rules are and goes over two popular algorithms, the

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-association-rules) | 1h 27m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Association rule mining](#association-rule-mining)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Association Rules**](#1-association-rules) (6 videos)
  - [What are association rules?](#what-are-association-rules)
  - [Frequent itemset generation](#frequent-itemset-generation)
  - [The Apriori algorithm](#the-apriori-algorithm)
  - [The FP-Growth algorithm](#the-fp-growth-algorithm)
  - [Evaluating association rules](#evaluating-association-rules)
  - [Why and when to use association rules](#why-and-when-to-use-association-rules)
- [**2. Discovering Patterns with Association Rules**](#2-discovering-patterns-with-association-rules) (4 videos)
  - [How to collect data for association rule mining](#how-to-collect-data-for-association-rule-mining)
  - [How to generate frequent itemsets](#how-to-generate-frequent-itemsets)
  - [How to create association rules](#how-to-create-association-rules)
  - [How to evaluate association rules](#how-to-evaluate-association-rules)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Association rule mining](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=0)** - [Fred] Every day, large amounts of transaction data are generated as consumers purchase goods and services online and in person.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=10)** Market basket analysis or affinity analysis is a process of identifying and extracting meaningful patterns from transaction sets.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=20)** Association rules are used to describe these patterns.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=25)** Hi, I'm Fred Nwanganga.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=27)** I'm a data scientist, teacher, and author with a passion for AI and machine learning.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=33)** Welcome to Machine Learning with [[Python (Programming Language)|Python]] Association Rules.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=38)** In this course, I explain what an association rule is and how to more efficiently create them using frequent item sets.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=48)** I also explain how to evaluate association rules using several data driven measures of interest in this.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=55)** I discuss when association rules are most useful and when they're not.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=61)** Finally, I walk through the process of important transactions, generating frequent item sets, creating association rules, and evaluating association rules in Python.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=74)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [fred] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=1)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=9)** First, I assume that you have a fundamental understanding of what machine learning is, specifically unsupervised machine learning.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=19)** If you don't, I recommend that you review my introductory [[LinkedIn]] learning course, [[Machine Learning with [[Python (Programming Language)|Python]]- Foundations]].
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=28)** Second, it would be helpful if you have some entry level experience with coding in Python.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=35)** I will assume that you know how to import a Python package, refer to the attributes of an object and call the methods of an object.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=44)** Next, it would also be helpful if you have some familiarity with the [[Pandas (Software)|pandas]] package.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=51)** If you don't, no worries.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=52)** I will explain exactly what I'm doing when we do use external packages in the course.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=60)** Finally, I do assume that you know how to use the Jupiter Notebook interactive Python environment.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=66)** Specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=5)** This means that you can follow along with any of the code examples in the lessons.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=11)** I recommend that you do so.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=13)** The best way to become proficient in using association rules in [[Python (Programming Language)|Python]] is to practice doing it yourself.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=22)** This course is delivered using [[Codespaces]], a development environment that is hosted in the cloud.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=31)** The exercise files are available on [[GitHub]] and are organized by branches.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=38)** Within each branch is a data file and two notebooks, a beginning and an ending notebook.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=46)** Let's take a look at an example.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=49)** The files in the 02_01 branch are what we use in the first video of the second chapter.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=58)** As you can see, within the source folder, we have a data file called groceries.csv.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=66)** We also have two notebooks for the lesson videos.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=71)** The 02b notebook is the beginning notebook.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=75)** This is the notebook you should code in when following along with the lesson videos.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=81)** The 02 notebook is the ending notebook.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=84)** It is a completed version of the beginning notebook just for your reference.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=90)** Now, let's get a quick [[Microsoft Word|word]] from [[LinkedIn]] Learning about using Codespaces for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (2), [[Python (Programming Language)|Python]] (1), [[GitHub]] (1), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** groceries.csv (1)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] Code Spaces.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=9)** [[Codespaces]] is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands on practice that mirrors [[Software Development]] in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a Codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting Started with GitHub CodeSpaces page.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on Create Codespace on Main.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a Codespace it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the Codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a Codespace is directly from one of our courses GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click code and then "Create Codespace on Main."
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous Codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=151)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two im the third video.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index [[HTML]] file right here.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes like say 0703E, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the Codespace.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=255)** To create your own fork, you can click on the fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit Create Fork.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=267)** I have my own copy of this repository, and if I want to I can start a new Codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=279)** This fork version is almost exactly like the original repository but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the commit button and I'll ask it to go ahead and stage the changes and then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit okay.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run, get [[Fetch]].
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=338)** That way it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional core specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Codespaces]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** click on (3), switch to (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 1. Association Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [What are association rules?](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=0)** - Every day, large amounts of consumer transaction data are generated as goods and services are bought and sold in stores and online.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=11)** This database of transactions is commonly referred to as market basket data.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=18)** Each transaction in market basket data consists of a distinct set of items that were purchased together.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=27)** Any distinct set of zero or more items within the transaction set is known as an item set.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=35)** In this example, the items watermelon, avocado and apple form an item set.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=43)** It is an item set with a length of three.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=46)** This is also referred to as a three item set.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=51)** Strawberry is also an item set.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=54)** It's an item set with a length of one or a one item set.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=59)** In order to identify interesting and related patterns in a transaction set, we can analyze the co-occurrence of item sets within the data.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=69)** This process is commonly known as market basket analysis or affinity analysis.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=78)** The result of market basket analysis is a set of rules that describe item set patterns.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=85)** These rules are known as association rules.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=89)** Association rules have been around for decades.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=93)** However, they became increasingly popular as a result of the rise of online shopping during the late 1990s and early 2000s.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=104)** They have been vastly studied over the years with countless improvements proposed by several researchers.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=113)** To illustrate how association rules work, let's consider this market basket data set of five transactions.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=121)** Each transaction represents their entirety of an individual customer's purchase.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=128)** Customer A bought fruit, bread, and cereal and customer B bought fruit, milk, cereal and eggs.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=139)** The amount or quantity of items purchased is not important.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=143)** All we care about is that a particular item was purchased.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=148)** With an association rule, we can describe the relationship between two items sets within a data set this way.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=157)** This rule states that customers who bought bread and cereal also purchased milk.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=164)** It suggests that a strong relationship may exist between the sales of bread, cereal, and milk.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=173)** The item set on the left side of the rule is the condition that needs to be met.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=179)** It is known as the antecedent of the rule.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=182)** The item set on the right side of the rule is the expected result of meeting the condition.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=188)** It is known as the consequence of the rule.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=192)** Note that the left and right item sets that make up an association rule are disjoint.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=199)** This means that they are distinct and have no items in common.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=205)** By using association rules to define the patterns in market basket data we can gain valuable insight into consumer behavior.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=215)** With this insight we can answer important business questions such as what [[Microsoft Products|products]] should be displayed together in the store, what products could be discounted together in order to increase sales and what products should be recommended to customers as part of a cross selling strategy.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=237)** It's important to note that association rules are not only useful for market basket analysis, they can also be applied in other domains.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=248)** For example, if we collect data on the symptoms exhibited by patients as part of a randomized drug trial, we could use association rules to identify potentially dangerous drug interactions.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=264)** We can use association rules to describe any set of events that occur together at discreet intervals.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=272)** A note of caution when it comes to association rules.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=277)** Association rules do not imply causality.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=280)** They simply highlight the co-occurrence of events or items within a data set.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=288)** Understanding causality requires domain knowledge and further research into how items or events interact with each other over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **Definitions:** known as (4), is an  (1), is a  (1), means that (1)
> **Warnings:** note that (2), caution (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - every (1)

#### [Frequent itemset generation](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=0)** - [Instructor] By using association rules to analyze the patterns in market basket data, businesses can gain invaluable insight into customer behavior.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=13)** However, not all rules are created equal.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=17)** For the most part, association rules can be classified into three major categories.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=25)** The majority of our association rules are trivial.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=29)** Trivial rules are rules that provide insight that is already well-known by those familiar with the domain.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=38)** For example, a rule that shows that customers who buy pencils often also buy erasers does not really provide meaningful new insight.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=49)** Sometimes, the association rules we generate can be classified as inexplicable or seemingly inexplicable.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=57)** These are rules that defy rational explanation, need more research to understand, or do not suggest a clear course of action.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=67)** For example, a rule that suggests that customers who buy shirts are more likely to also buy backpacks does not provide clear insight and requires a little bit more research to understand.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=81)** It's important to note that most association rules you generate will fall under the trivial or inexplicable umbrellas.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=90)** Association rules can also be classified as actionable.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=95)** Actionable rules are rules that provide clear and useful insights that can be acted upon.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=102)** They sometimes are rules that initially seemed inexplicable, but then turn out to be actionable after some research.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=111)** For example, we may discover that the rule that suggests that customers who buy shirts are more likely to also buy backpacks is strongest during the Back to School Shopping season.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=125)** This provides some context to categorize this rule as actionable.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=131)** In response to this insight, a department store could decide to adjust the placement of these two items within the store or offer a special during certain periods of the year.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=144)** It often takes skill and patience to identify truly actionable rules.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=152)** To determine which rules are potentially actionable, we need to first identify which rules are significant or interesting, and limit our focus to those alone.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=164)** One measure of the significance of a rule is how often the rule occurs.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=169)** The frequency of a rule is measured using a metric called support.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=176)** Also known as coverage, the support of a rule is a fraction of transactions that contain the rule.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=186)** To illustrate how to calculate support, let's consider this market basket dataset of five transactions.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=194)** The support of the rule milk, given bread, cereal is 2/5, which is 0.4.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=204)** Five is a number of transactions in the dataset and two is a number of transactions with bread, cereal, and milk.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=213)** The support value of 0.4 means that 40% of all transactions in our dataset include bread, cereal, and milk.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=225)** Note that the support of a rule is actually the support of the itemset, so the direction of the rule or the order in which items appear does not really matter.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=238)** For example, the support of the rule milk, given bread, cereal is the same as the support of the rule bread, cereal, given milk.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=249)** We use support as a way to identify strong rules.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=253)** This is because rules with low support are rules that don't occur a lot.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=259)** They may occur simply by chance and are typically not actionable.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=265)** That being said, it's important to also note that sometimes, weak association rules have interest in applications.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=275)** For example, we could look at rules with low support to identify items that are rarely purchased together.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=283)** For the most part, our objective will be to narrow our focus to association rules that meet a minimum support threshold that we set.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=294)** There are several ways to do this.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=297)** One approach, known as a brute force approach, is to calculate the supports for every possible rule that can be created from our dataset.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=307)** As you can imagine, this can be a rather expensive process.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=312)** For a dataset with p distinct items, there exists three to the p, minus two to the p plus one, plus one possible rules with a length of two or more.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=326)** Therefore, if we had a dataset with just 20 distinct items we would have 3,484,687,250 rules to evaluate.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=341)** That is a lot of rules.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=345)** Instead of creating all possible rules, a better approach is to only create rules based on frequent itemsets.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=353)** This is known as a frequent itemset generation approach.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=358)** A frequent itemset is an itemset with a support value at or above a user-defined threshold.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=366)** For instance, if the support threshold is set to 0.5 or 50%, a frequent itemset is defined as a set of items that occur together in at least 50% of all transactions in the database.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=382)** Using the frequent itemset generation approach, we can reduce competition complexity by only creating rules from frequent itemsets.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=392)** With this approach for a dataset with p distinct items, we can generate up to two to the p minus one possible frequent itemsets, excluding the null set.
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=406)** Therefore, for a dataset with 20 distinct items, we have 1,048,575 possible candidate itemsets to evaluate.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=419)** That is better than the brute force approach, but still a lot.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=424)** Thankfully, there are ways to further reduce the computational complexity of frequent itemset generation.
>
> **[7:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=432)** One approach is to reduce the number of candidate itemsets we create by leveraging what is known as a Apriori principle.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=442)** This is what the Apriori algorithm does.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=446)** Another approach is to compress the data by storing the candidate itemsets in an advanced data structure, such as a frequent pattern tree or FP tree.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=457)** This is what the FP-growth algorithm does.
>
> **[7:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=461)** We cover the details of how these two approaches work in the next two videos.

> [!info]- Semantic Content
>
> **Definitions:** known as (4), is a  (4), means that (1), is an  (1), defined as (1)
> **Analogies:** for example (5), imagine (1), for instance (1), such as (1)
> **Versions:** 0.4 (2), 0.5 (1)
> **Warnings:** note that (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [The Apriori algorithm](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=0)** - Frequent itemset generation is a useful approach in limiting our focus to just those rules which are potentially actionable.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=9)** While more efficient than the brute force approach, it is still computationally expansive.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=15)** There are two common ways to reduce computational complexity during the process.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=21)** One approach is to compress the data by storing the candidate itemsets in an advanced data structure, such as a frequent pattern tree or FP tree.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=32)** That is what the FP growth algorithm does.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=35)** The other approach is to reduce the number of candidate itemsets we create by leveraging the Apriori principle.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=43)** This is what the Apriori algorithm does.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=47)** The Apriori principle states that if an itemset is frequent, then all of its subsets must be frequent as well.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=56)** To illustrate this concept, let's consider these itemset ladders which shows the 2-itemsets, 3-itemsets, 4-itemsets, and the 5-itemset that we can create from itemsets, A, B, C, D, and E.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=73)** If itemsets C, D, E is found to be frequent, then according to the Apriori principle, all subsets of C, D, E, which are highlighted in green, are also frequent.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=89)** The converse of the Apriori principle also applies.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=94)** If an itemset is found to be infrequent, then its supersets must also be infrequent.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=103)** This means that if itemset A is found to be infrequent, then all of its supersets shown here in red are also infrequent.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=115)** In other words, once we establish that A is infrequent, we do not have to bother evaluating the 15 itemsets that follow, because we know that they also will be infrequent.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=132)** In general, frequent itemset generation using the Apriori algorithm occurs in two stages, In the first stage, the algorithm generates new candidate itemsets.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=147)** Then, it eliminates candidate itemsets that do not meet the support threshold in the second stage.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=154)** To illustrate how the Apriori algorithm works, let's consider these 10 transactions from a corner fruit vendor.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=164)** To keep things simple, we use letters of the alphabet to represent each of the seven fruit items in the data set.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=173)** To begin, the apiary algorithm generates candidate 1-itemsets from the transaction set.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=181)** Note that a 1-itemset is simply an itemset with a length of one.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=188)** Next, the algorithm makes a pass through the data set to get the count for each candidate itemset.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=197)** Let's assume that we set up support threshold to 0.2, or 20%.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=203)** This means that each itemset must occur at least twice in the data to be frequent.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=210)** Based on the support threshold, the algorithm eliminates the 2-itemsets that don't meet our criteria, itemsets F and G.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=219)** The remaining five 1-itemsets are considered frequent.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=225)** Next, the algorithm generates candidate 2-itemsets based on the frequent itemsets from the previous iteration.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=234)** Then it makes a pass through the dataset to get a count for each candidate itemset.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=241)** Based on the support threshold, it eliminates itemset BE.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=246)** The remaining nine 2-itemsets are frequent.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=251)** The process repeats for the 3-itemsets with candidate generation and pruning.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=259)** This time, it eliminates 2-itemsets, and keeps five.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=266)** Next, the algorithm uses the frequent itemsets from the previous iteration to generate candidate 4-itemsets.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=276)** All three 4-itemsets are infrequent, so the process terminates.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=283)** There are no new frequent itemsets to generate.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=287)** We only need to create association rules from these 19 frequent itemsets.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=295)** The advantage of the Apriori principle is evident when we realize that we only created and evaluated 27 itemsets in the process.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=307)** This is in contrast to the 127 candidate itemsets we could have created.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=314)** A whopping 79% reduction in the number of candidate itemsets generated.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), in other words (1)
> **Versions:** 0.2 (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - frequent (1)

#### [The FP-Growth algorithm](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=0)** - [Instructor] Frequent item set generation is a useful approach in limiting our focus to just those rules which are potentially actionable.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=9)** While more efficient than the brute force approach it is still computationally expensive.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=16)** There are two common ways to reduce computational complexity during the process.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=22)** One approach is to reduce the number of candidates item sets that we create by leveraging the Apriori principle.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=31)** That is what the Apriori algorithm does.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=34)** The other approach is to compress the data by storing the candidate's item sets in an advanced data structure, so that the frequent pattern tree or FP-tree.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=47)** This is what the FP growth algorithm does.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=51)** To illustrate how the FP growth algorithm works, let's consider these 10 transactions from a corner fruit vendor.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=60)** To begin, the algorithm does some pre-processing.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=65)** The first step is to get a count of each item listed in descending order of count as shown here.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=72)** Let's assume our support threshold is set at 0.2 or 20%.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=78)** This means that each item set must occur at least twice in the data to be frequent.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=84)** Based on the support threshold, the algorithm eliminates the two items that don't meet our criteria, strawberries and pears, from the transaction set.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=96)** Next, the algorithm source the transaction set based on the frequency of occurrence of each item.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=104)** For example, in the first transaction, orange now comes before apple because orange occurs eight times while apple occurs seven times.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=115)** Similarly, in the second transaction, the order is now apple, watermelon, then avocado.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=124)** To keep things simple, let's use the letters of the alphabet to represent each of the five remaining fruits items in the ordered transaction set.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=135)** After the pre-processing stage, the FP growth algorithm reads each transaction in the data and encodes its path using a compact data structure called an FP-tree.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=149)** After reading the first transaction, a new set of nodes labeled a: 1 and b: 1 are created.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=158)** Note that each node is labeled with the name of an item and the running counts of how often the item occurs in the path.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=167)** After reading the second transaction, a new set of nodes b, c, and d are created.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=174)** Each node gets a count of one.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=177)** Note that even though the first two transactions have b in common, their paths are disjoint because they do not share a common prefix.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=188)** However, the third transaction does share a common prefix, a, with the first so the algorithm increments that count for node a.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=198)** Then it creates a new set of nodes, c, d, and e, each with a count of one.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=206)** The outcome is similar after the fourth transaction is read.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=211)** New nodes d and e are created, while the count for a is incremented.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=218)** The items in the fifth transaction share a common prefix, a, b with the first, so the FP growth algorithm updates the count for nodes a and b.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=229)** Then it extends the path to include c.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=233)** The algorithm continues encoding new paths until every transaction has been read and mapped onto the FP-tree, which ends up looking like this.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=244)** To extract frequent item sets from the FP-tree, the FP growth algorithm explores the tree in bottom up fashion.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=254)** Given the tree shown here, the algorithm will first extract frequent item sets ending in e, then in d, c, b and finally a.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=267)** For example, to find all frequent item sets that end with e, the algorithm looks at all prefixed paths ending in e.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=278)** Because some of the nodes were created from transactions that do not include e, the counts have to be updated as shown here.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=288)** For example, nodes b and c include a path b, c, d that does not include e.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=297)** Therefore, the counts for b and c were adjusted from two to one.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=303)** Recall that our support threshold is set at 0.2 or 20%.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=309)** Since there are three nodes for e, the item set e is considered frequent because its count meets or exceeds the minimum support threshold of two.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=320)** Next item sets d, e is considered by looking at all prefixed paths with d and e.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=328)** There are two paths with both d and e in the tree so item sets d, e is considered frequent.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=337)** Next comes item sets c, e.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=340)** There are also two paths with both c and e.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=345)** So the item set is also considered frequent.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=350)** Item sets b, e is considered next by looking at all prefixed paths ending in b and e.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=358)** There is only one path with both b and e.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=362)** This item set is not frequent since it does not meet the minimum support threshold of two.
>
> **[6:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=369)** The FP growth algorithm continues this process for all remaining item sets ending in e, which are a, e, c, d, e, a, d, e, b, c, e, a, c, e, and a, c, d, e.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=385)** After extracting the frequent item sets that end in e, the algorithm proceeds to extract the frequent item sets that end in d by processing the paths within the FP-tree that end in d.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=401)** Then it extracts the frequent item sets that end in c, in b, and finally, those that end in a.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=412)** When this process is complete, we end up with the 19 frequent item sets shown here.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=421)** Note that these are the exact same frequent item sets we ended up with by using the Apriori algorithm in the previous video.
>
> **[7:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=432)** The FP growth algorithm does have certain advantages over the Apriori algorithm.
>
> **[7:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=439)** For one, it does not require the creation of candidates item sets.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=445)** Instead, it extracts frequent item sets directly from an FP-tree, which is much faster.
>
> **[7:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=453)** Secondly, unlike the Apriori algorithm whose runtime grows exponentially depending on the number of unique items in the transaction set, the run time of the FP growth algorithm only experiences a linear increase in run time with respect to the number of unique items in the data.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=475)** Finally, because the FP-tree algorithm encodes transactions using a tree like data structure, transactions with common suffixes share a similar path which allows the data to be compressed.
>
> **[8:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=492)** This means that the FP growth algorithm typically uses less storage than the Apriori algorithm.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (3)
> **Warnings:** note that (3)
> **Versions:** 0.2 (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=0)** - [Instructor] Association rules are very powerful.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=4)** They can reveal interest in and previously hidden patterns within very large datasets.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=10)** However, not all rules are created equal.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=15)** For the most part, association rules can be classified as either trivial, inexplicable, or actionable.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=24)** Most of the rules we generate will be trivial or inexplicable.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=29)** Identifying which rules are actionable is not a trivial task, no pun intended.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=37)** It often requires considerable time and effort.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=41)** With the awareness that one person's trash is another person's treasure, we must decide what criteria to use when evaluating the association rules we create.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=55)** These criteria will vary from person to person.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=59)** Luckily, there are several objective data driven metrics that provide us with some guidance as we go through this process.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=68)** We saw one of them in a previous video.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=72)** It was called support.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=74)** Recall that the support of a rule is a fraction of transactions that contain the rule.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=81)** We use support as a way to identify strong rules.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=86)** This is because rules with low support are rules that don't occur a lot.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=90)** They may occur simply by chance and are typically not actionable.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=97)** Another metric that often is used to quantify the strength of an association rule is confidence.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=105)** The confidence of a rule is the predictive power or accuracy of the rule.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=112)** The confidence of a rule is the support of the rule divided by the support of the antecedent.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=119)** Recall that the antecedent x is the left side of a rule while the consequent y is the right side.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=129)** The possible values for confidence range from zero to one.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=134)** To illustrate how to calculate the confidence of a rule, let's consider this market basket dataset of five transactions.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=143)** The confidence of the rule milk given bread, cereal is 0.4 divided by 0.6, which yields 0.67.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=155)** Do you get how we got these numbers?
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=158)** Let me explain.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=160)** 0.4 is a support of the rule.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=163)** Two out of the five transactions include bread, cereal and milk.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=168)** They are transactions, C and D.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=171)** 0.6 is the support of the antecedent, which is bread, cereal.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=177)** There are three transactions that contain the item set bread, cereal.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=182)** This means that the support of bread, cereal is three divided by five, which is 0.6.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=189)** A confidence of 0.67 can be interpreted to mean that of all the transactions where both bread and cereal were purchased, 67% of them also included the purchase of milk.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=205)** The next metric is lift.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=209)** The lift of a rule is the increased likelihood of the rule occurring relative to its typical rate of occurrence.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=218)** Lift tells us how much more the antecedent and consequents occur together in contrast to how often they occur independently.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=228)** In other words, lift is the strength of association.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=233)** We compute the lift of a rule by dividing the confidence of the rule by the support of the consequent of the rule.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=242)** Lift values range from zero to infinity where a value of one indicates independence between the antecedent and the consequent.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=253)** The lift of the rule milk given bread, cereal is 0.67 divided by 0.8, which yields 0.84.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=264)** 0.67 is the confidence of the rule and 0.8 is the support of the consequent.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=273)** We can interpret a lift of 0.84 to mean that customers who bought bread and cereal are 16% less likely to also buy milk.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=285)** We subtracted the lift value from one to get the reduction in likelihood.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=291)** This is because our lift value is less than one.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=295)** If the lift value were more than one, we would interpret it as a multiplier of likelihood.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=301)** For example, if our lift value were 2.4, this would mean that customers who bought bread and cereal are 2.4 times more likely to also buy milk.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=315)** Leverage is similar to lift and can be thought of as a normalized value for lift.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=321)** It shows the difference between the observed frequency of a rule and the frequency that would be expected if the antecedent and consequent were independent.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=334)** Leverage values range from negative one to one where a value of zero indicates independence between the antecedent and the consequent.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=345)** The leverage of a rule is calculated as a support of the rule minus the product of the support of the antecedent and the support of the consequent.
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=356)** The leverage of the rule milk given bread, cereal is negative 0.08.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=364)** Because the leverage value is negative and relatively small, we interpret the leverage value to mean that customers who buy bread and cereal are slightly less likely to also buy milk.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=378)** Note that this is consistent with the lift score.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=382)** If the leverage value were positive, then it would indicate an increased likelihood.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=389)** The next metric is known as conviction.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=393)** Conviction quantifies how dependent the consequent is on the antecedent.
>
> **[6:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=399)** It is also related to lift.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=402)** Similar to lift, conviction values range from zero to infinity where a value of one indicates independence between the antecedent and the consequent.
>
> **[6:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=415)** The higher the conviction, the more likely it is that the consequent is dependent on the antecedent and vice versa.
>
> **[7:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=425)** Conviction is calculated as one minus the support of the consequent divided by one minus the confidence of the rule.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=435)** The conviction of the rule milk given bread cereal is 0.61.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=441)** We interpret the conviction value to mean that the rule milk given bread, cereal would be correct 39% more often if the consequent were dependent on the antecedent.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=457)** In other words, the consequent is not that dependent on the antecedent.
>
> **[7:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=464)** The final metric we look at is called Zhang's metric.
>
> **[7:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=469)** It quantifies the degree of association or dissociation between the antecedent and the consequent.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=477)** The possible values for Zhang's metric range from negative one to one, which represent perfect association and perfect dissociation respectively.
>
> **[8:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=490)** Zhang's metric is useful in identifying items that should not be placed next to each other even if they had been purchased together previously.
>
> **[8:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=500)** The formula for Zhang's metric is rather involved and is shown here.
>
> **[8:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=507)** The Zhang metric for the rule milk given bread, cereal is negative 0.33.
>
> **[8:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=514)** This indicates a moderate dissociation between milk and both bread and cereal.
>
> **[8:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=522)** Because these item sets are dissociated, the takeaway would be to separate them in the store.
>
> **[8:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=529)** Doing so would have a moderate impact on purchase patterns for both item sets.

> [!info]- Semantic Content
>
> **Versions:** 0.67 (4), 0.6 (3), 0.4 (2), 0.8 (2), 0.84 (2)
> **Definitions:** is a  (2), in other words (2), means that (1), known as (1), is called (1)
> **Analogies:** similar to (2), for example (1)
> **Cross-References:** previous video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Why and when to use association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=0)** - [Narrator] In order to know when to use association rules, we need to understand their strengths and weaknesses.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=7)** In terms of strengths, association rules are very good with [[Big Data]]: the larger the better.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=15)** The more occurrences there are of a particular rule within a dataset, the more interesting the rule is, and the more likely it is that the rule is actionable.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=27)** The simple if/then syntax of an association rule makes it very easy to understand and communicate.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=35)** The left hand side of a rule, which is known as antecedent, is the condition that needs to be met, while the right hand side of the rule, which is known as a consequence, is expected result of meeting the condition.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=50)** Association rules are very useful for [[Data Mining]] tasks, such as discovering unexpected or previously hidden patterns within a dataset.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=60)** While commonly used for market basket analysis, association rules are useful in identifying patterns of co-occurrence in a wide variety of domains.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=72)** Association rules have been used to identify frequently occurring patterns of DNA and protein sequences in cancer cells.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=81)** They have also been used to find patterns of medical claims that occur in combination with fraudulent credit card use, and they have also been used to identify patterns of behavior that proceed customer changes to cable TV subscriptions.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=100)** There are some weaknesses inherent with association rules as well.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=104)** Association rules are not very useful when working with small datasets.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=110)** The fewer the number of occurrences of a rule, the less interesting it is.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=116)** This is because rules that occur infrequently could simply occur by chance and are typically not actionable.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=125)** It is sometimes difficult to properly separate true insight from common sense when evaluating association rules.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=134)** Most rules generated during association rule mining are trivial or inexplicable.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=142)** Identifying rules which are truly actionable often requires domain knowledge and a significant amount of effort.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=152)** Because one person's trash is another's treasure, the insight derived from association rules can be very subjective.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=162)** If care is not taken, one can easily draw misleading or incorrect conclusions from random patterns in the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Data Mining]] (1)
> **Definitions:** known as (2)
> **CLI Commands:** find (1)
> **Env Vars:** dna (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 2. Discovering Patterns with Association Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [How to collect data for association rule mining](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=0)** - [Instructor] Market basket analysis or affinity analysis is a process of identifying patterns and extracting meaningful insight from transaction sets.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=11)** Association rules are often used for market basket analysis because they allow us to discover, quantify and analyze the co-occurrence of items within a set of transactions.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=23)** In this video, you will learn how to import and explore a transaction set for association rule mining in [[Python (Programming Language)|Python]].
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=32)** Note that this video is a first in a four video sequence that also teaches you how to generate frequent item sets, how to create association rules and how to evaluate association rules in Python.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=48)** I would also like to highlight that the Python packages we use in these four tutorials, CSV, Mlxtend, [[Pandas (Software)|Pandas]] and NumPy have all been pre-installed for you as part of your [[Codespaces]] environment.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=66)** The data that we're going to analyze is market basket data collected from a local grocery store over a 30 day period.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=75)** The data is stored in CSV format as shown here on the screen.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=81)** Each row in the data represents a set of items purchased by a customer during a store visit which we refer to as a transaction.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=91)** As expected, the number of items in each transaction varies so we cannot simply bulk import this data into a tabular data structure, such as a Pandas data frame as is.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=104)** Instead, we need to import the data one row at a time.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=110)** To do this, we first need to import the reader object from the CSV package.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=116)** I've prewritten this code for you so let's go ahead and run it.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=122)** Next, we iterate over each line in the input file which is called groceries.csv and append it to a list called groceries.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=133)** So I've also prewritten this code.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=135)** My code begins with an empty cell called groceries, empty list, sorry, called groceries.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=141)** Then I open up the CSV file in read mode and then I iterate through every single row in the CSV file and append what I read into the empty groceries list.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=154)** So let's run that code.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=156)** Now let's preview the first five elements in the groceries list to make sure that the import worked as expected.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=163)** So I'm going to go ahead and type groceries, the name of our list, and I'm going to use slice notation to get the first five rows.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=172)** I'm going to say zero to five.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=177)** There you have it.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=178)** So the first transaction is citrus fruit, semi-finished bread, margarine, and ready soups and the fifth one is other vegetables, whole milk, condensed milk, long life bakery product, okay?
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=191)** Now that we've imported the transactions into a list, we need to encode them and represent the data in a sparse format before we can generate frequent item sets.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=202)** To transform our data, we first need to import the transaction encoder class from the Mlxtend.preprocessing package.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=211)** The MLxtend package provides several functions and objects for pre-processing transaction data, generating frequent item sets and creating association rules.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=222)** We are going to be using this package extensively in this tutorial.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=226)** So let's go ahead and import the package that we need.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=232)** Then we instantiate an object called encoder from the transaction encoder class.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=238)** So we're going to start with encoder, to know the object, and the class is transaction encoder.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=247)** Okay, so we're going to call that to instantiate the object.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=250)** So let's run that.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=253)** Using the encoder object, we call the fit method to extract the unique labels in the transaction set and we also use the transform method to one-hot encode the transactions into a Boolean NumPy array.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=268)** So we're going to start with, we're going to call our array transactions.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=272)** So transactions.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=275)** I'm going to now use the encoder object, call the fit method for the encoder object.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=281)** Within the fit method, I'm going to pass our groceries list to it.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=285)** I'm going to now chain another method called transform, and within this method, I'm also going to pass groceries to this method.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=296)** And once I do that, I want to preview to make sure that my data comes out the way I expect it to come out.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=303)** Okay, so we're good to go.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=305)** So let's run that, and now we see our result.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=309)** So we have a Boolean NumPy array of our transactions.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=314)** Next, we need to convert the transactions into a Pandas data frame.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=318)** This requires that we first import the Pandas package so let's do that.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=323)** Then we passed the Boolean array and item names to Pandas data frame constructor function to create a new data frame called item sets.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=333)** Okay, so we're going to call it item sets.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=336)** Going to use pd, which is the alias for our package.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=340)** Call the data frame constructor function.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=343)** Within the function, I'm going to pass our transactions.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=350)** Then specify the column names, columns is equal to.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=354)** So I'm going to use the encoder.column attributes, column_attribute for subject called columns.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=366)** Okay, so let's go ahead and run that.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=371)** So we can now preview the first five rows in the item sets dataframe by calling the head method.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=377)** So itemsets.head.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=384)** There you have it.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=386)** What we now have is a Pandas dataframe of our transactions.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=391)** We can also get a concise summary of the structure of the item sets dataframe by calling the info method.
>
> **[6:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=398)** So let's do that, itemsets.info.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=407)** All right, by looking at this output, let's look at the range index value of the summary.
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=411)** We can tell from the range index that there are 9,835 transactions in the dataset.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=419)** The columns value tells us that there are 169 features or unique items in this dataset.
>
> **[7:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=429)** There you have it.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=431)** We successfully imported a transaction set into our environment.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=437)** In the next video, I will illustrate how to generate frequent item sets from the transaction set, which we imported in this video.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=446)** See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Python (Programming Language)|Python]] (3), [[Codespaces]] (1)
> **CLI Commands:** python (3), make (2)
> **Env Vars:** csv (5)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** groceries.csv (1)
> **Code Identifiers:** column_attribute (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### [How to generate frequent itemsets](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=0)** - [Instructor] In this video, you will learn how to generate frequent itemsets in [[Python (Programming Language)|Python]] using the apriori, fpgrowth and fpmax [[Algorithms]].
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=13)** Note that this video is a second in a four video sequence that also teaches you how to import and explore transactions, how to create association rules and how to evaluate association rules in Python.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=30)** If you have not done so, watch the previous video for a detailed explanation of the prior code.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=38)** Before we begin, let's run the code we created in that video to get our environment up to speed.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=47)** So I'm going to go up here and click on Run All.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=53)** Now that we have our transactions in a compatible format which is one-hot encoded [[Pandas (Software)|pandas]] DataFrame, let's limit our focus to the frequent itemsets.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=64)** The mlextend.frequent_pattern sub-package provides three functions for generating frequent itemsets.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=72)** They are apriori, fpgrowth and fpmax.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=77)** All three functions have similar syntax, so we're going to limit our illustration to the apriori function.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=85)** Let's import the function.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=89)** The apriori function takes several arguments.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=93)** The first one is the pandas DataFrame of the transactions we wish to analyze.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=99)** The second is the minimum support threshold of the itemsets we consider frequent.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=107)** This value specifies how often an itemset must occur in the transaction set in order to warrant our attention.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=116)** Let's assume that we only want to focus our attention on itemsets that occur at least five times a day.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=124)** Given that our data is for 30 days and our dataset has 9,835 transactions, this means that we need to set our minimum support threshold to five times 30 divided by 9,835.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=141)** This is approximately equal to 0.015.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=147)** So let's use this minimum support threshold in our data.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=151)** So we're going to say frequent_itemsets is equal to apriori so we're going to call the apriori function and we're going to pass through it a few things.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=163)** The first is our itemsets data.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=167)** Then we're going to specify the minimum support which we have here as 0.015.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=176)** Then use columns is equal to true.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=186)** By default, the apriori function returns the numeric column indices of the items in the transaction set.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=194)** For ease of interpretation, we did set the use columns argument within the function to true.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=201)** This tells the function to return item names instead of integer values.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=207)** Let's see what we got.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=214)** So from the output, we can tell that there are 180 itemsets with a minimum support value of 0.015.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=224)** To get a better sense of which itemsets have the lowest or highest support values, let's sort of this data in descending order of support.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=235)** So we're going to start with our DataFrame frequent_itemsets.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=239)** We're going to use this sort_values method.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=243)** Within that, I'm going to specify which column to sort by which is support.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=248)** And I'm going to say that the support should be sorted in ascending order false, which means in descending order.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=260)** Now we see that whole milk, other vegetables, roll/buns, soda and yogurt are the five most frequently bought items in the store.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=272)** One of the benefits of working with pandas DataFrames is that we can easily transform and filter our results to meet our needs.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=280)** For example, let's assume that we are only interested in frequent itemsets with a length greater than two.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=289)** We start by getting the length of the items in the itemsets column as follows.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=297)** So we're going to call this length.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=301)** So we're going to call it object and we're going to get it from the frequent itemsets DataFrame.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=306)** So here I'm going to specify which column I want so which is itemsets and I'm now going to convert that to a string and get the length.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=319)** Then we can create a logical filter based on the length of the itemsets.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=324)** So let me come down here.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=326)** I'm now going to create a filter, call it rows is equal to length greater than two.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=334)** So let's run that.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=338)** Finally, we apply the filter to the frequent itemsets in DataFrame.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=343)** So I'm going to call frequent_itemsets.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=348)** Going to specify rows as our filter.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=352)** Let's run that.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=355)** Now we see the six frequent itemsets with a length greater than two.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=364)** We can also use a described method of a pandas DataFrame to get a big picture view of the distribution of values in the data.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=371)** For example, to get a statistical summary of the support values by itemset length, we can do the following.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=379)** So here I'm going to start with my DataFrame frequent_itemsets.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=385)** Next I'm going to groupby, I'm going to group by length.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=392)** Then I'm going to specify which column I want to get statistical summary from which is support.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=401)** Then I'm going to use a .describe describe method.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=407)** Okay let's make sure everything is good to go and then we can run that.
>
> **[6:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=414)** So now we get a statistical summary that the count column from this tells us that the majority of the transactions that are considered frequent are two item purchases.
>
> **[7:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=426)** That's 101 of them.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=427)** While the mean and 50% columns tell us that the transactions with the length of one typically have higher support values than those with a length of two or three.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=441)** In this tutorial, we only use apriori frequent itemset generation function.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=448)** Note that if you want to try out the fpgrowth or the fpmax functions, you simply need to import them as shown here.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=457)** Once you're done with that, you can now generate frequent itemsets using the applicable function just as we've done here.
>
> **[7:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=466)** In Chapter One, we explored the apriori and fpgrowth algorithms in detail.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=474)** We did not cover fpmax.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=477)** Fpmax is a variant of fpgrowth which focuses on obtaining maximal itemsets and itemsets X is set to be maximal if it is frequent and there exists no frequent superset containing X.
>
> **[8:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=494)** In other words, if we consider X to be a maximal itemset, it cannot be a subset of another frequent itemset.
>
> **[8:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=505)** With our frequent itemsets now successfully imported or generated sorry, the next step is to create association rules.
>
> **[8:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=515)** That is what we're going to do in the next video.
>
> **[8:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=519)** See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (2)
> **Code Identifiers:** frequent_itemsets (4), frequent_pattern (1), sort_values (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **CLI Commands:** python (2), make (1)
> **Versions:** 0.015 (3)
> **Analogies:** for example (2), picture (1)
> **Cross-References:** previous video (1), in the next (1)
> **Warnings:** note that (2)

#### [How to create association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=0)** - [Instructor] In this video, you will learn how to create association rules from frequent itemsets in [[Python (Programming Language)|Python]].
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=8)** Note that this video is a third in a four video sequence that also teaches you how to import and explore transactions, how to generate frequent itemsets and how to evaluate association rules in Python.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=22)** If you have not done so, watch the previous two videos for a detailed explanation of the prior code.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=31)** Before we begin, let's run the code we created in the last two videos to get our environment up to speed.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=41)** The next step in our market basket analysis process is to create association rules that describe the co-occurrence of itemsets within the transaction set.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=54)** The association_rules function in the mlxtend.frequent_patterns subpackage allows us to create these rules.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=63)** Let's import it.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=65)** The association_rules function takes several arguments.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=69)** The first is a frequent itemset.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=73)** The next is the metric we intend to use to filter the rules for significance.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=79)** This can either be "support", "confidence", "lift", "leverage" or "conviction".
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=85)** Let's assume that we want to limit our focus to rules that have a confidence of 0.25 or more.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=93)** To do this, we set the metric argument to "confidence" and the min_threshold argument to 0.25.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=101)** So let's do that.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=102)** So we're going to create rules is equal to association_rules function.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=109)** We're going to pass with our frequent_itemsets.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=113)** I want to say the metric is equal to confidence.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=124)** We're going to set the min_threshold to 0.25.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=133)** Okay, let's make sure everything looks good.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=135)** Then we can run this.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=139)** Let's see what rules we generated.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=141)** So we're just going to call the rules.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=150)** So we see that there are 78 association rules that meet our criteria.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=156)** Each rule is made up of an antecedent and a consequent.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=160)** For each rule, we get metrics that tell us the support of the antecedent and the support of the consequent.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=168)** We also get metrics that tell us the support, confidence, lift, leverage, and conviction of each rule.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=178)** Because our rules are returned as a [[Pandas (Software)|pandas]] DataFrame we can easily transform and filter the data to find what we need.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=187)** For example, let's say we're only interested in rules that include 'rolls/buns' in the antecedent.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=196)** We start by creating a logical expression as a filter.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=202)** So let's do that.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=204)** So we're going to call this rows.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=209)** I'm going to say rows from our rules DataFrame.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=213)** We're going to specify the column antecedents.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=219)** I'm going to say the antecedent is equal to and we're going to use a curly brace, say rolls/buns.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=232)** All right, I think we are good.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=233)** All right, let's run that.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=237)** All right, so note that the entries in the antecedents and consequents columns are of type frozenset, which is why we include the curly braces around the item names.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=249)** The next step is to apply the filter to the rules DataFrame.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=254)** So let's come in here and all we have to do is specify rules the DataFrame and we filter by rows.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=263)** Let's run that.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=266)** We get one rule that matches our criteria.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=270)** As you can imagine, we can create a similar filter with the consequent.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=275)** So let's do the same thing.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=278)** So now we're going to say rows, our filter is going to be rows under rules, going to specify consequent, consequents.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=289)** And we say the consequents are have to be equal to, right?
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=293)** Let's say here rolls/.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=301)** And this apply this rule, let's say rows.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=307)** So we can see our result.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=310)** Let's run that.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=313)** This time, we get three rules that match our filter.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=317)** Note that in the previous two examples, we only match rules with 'rolls/buns' alone as the antecedent or the consequent.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=326)** If our goal is to match all rules with 'rolls/buns' and any other item in the antecedent for example, we would need to convert the antecedent column to a string, vectorize the string and use the contains() method in the following way.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=344)** So let's walk through that.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=346)** So we're going to now create our filter rows.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=351)** We're going to say our rows filter is based on the rules DataFrame.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=357)** Going to specify antecedents, right?
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=361)** That's the column we want.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=363)** Going to convert the antecedents column to a string because it's a frozenset.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=371)** Then we're going to vectorize using the str method and then we're going to say contains() method.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=378)** And within this we're going to say contains rolls/buns.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=384)** Let's get down here and let's now apply the filter.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=392)** Let's look at everything looks good.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=394)** So let's run that.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=397)** So now we see that there are five rules which 'rolls/buns' anywhere in the antecedent.
>
> **[6:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=405)** We can also filter our rules by the length of the antecedent or consequent.
>
> **[6:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=410)** For example, to match only rules with an antecedent length more than one, we do the following.
>
> **[6:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=418)** So we create another filter called rows.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=420)** I'm going to say rows is equal to our DataFrame rules.
>
> **[7:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=426)** Now we're going with antecedents, right?
>
> **[7:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=428)** So we're going to say antecedents.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=431)** We're going to say antecedents.str, which is a vectorize.
>
> **[7:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=436)** Then we get length.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=438)** I say length has to be greater than one, okay?
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=442)** I say rules.
>
> **[7:23](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=443)** Going to apply the filter based on rows.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=446)** Let's make sure everything looks good.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=448)** Very good. So now we can run that.
>
> **[7:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=452)** So this time around we get 16 rules that match our criteria.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=457)** We can also filter our rules based on the values in any of the numeric columns.
>
> **[7:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=462)** For example, let's assume that we only want to see rules that have a lift of more than two, a leverage score of more than 0.01 and a conviction score of more than 1.4.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=475)** We can write this as follows.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=477)** So we're going to start off again with the name of our filter rows.
>
> **[8:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=481)** We're now going to say, okay, let's create a set of filters in here.
>
> **[8:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=486)** So the first one is rules.
>
> **[8:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=488)** I'm going to say the rules DataFrame.
>
> **[8:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=489)** The column that we want is lift.
>
> **[8:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=492)** I'm going to say lift has to be greater than two.
>
> **[8:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=497)** So that's the first expression.
>
> **[8:19](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=499)** The next one we're going to say use the ampersand as an and, create another expression so say rules.
>
> **[8:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=507)** We want the column leverage and we want leverage to be greater than 0.01.
>
> **[8:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=518)** That's the next one.
>
> **[8:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=519)** The third one, we're going to say we want rules again.
>
> **[8:46](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=526)** This time around we want conviction.
>
> **[8:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=531)** And one, conviction; two, be greater than 1.4, okay?
>
> **[8:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=539)** And then now we apply the filter to the rules DataFrame, let say rows.
>
> **[9:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=545)** Alright, so let's make sure everything looks good.
>
> **[9:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=549)** So we have our rules.
>
> **[9:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=551)** We say lift is greater than two, rules leverage more than 0.01 and rules conviction more than 1.4.
>
> **[9:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=561)** Looks good. So let's run that.
>
> **[9:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=564)** So this time around, there are three rules with a lift of more than two, a leverage score of more than 0.01 and a conviction score of more than 1.4.
>
> **[9:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=575)** As you can imagine, the examples that I'm showing you here are just a tip of the iceberg, right?
>
> **[9:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=581)** You can slice and dice the rules DataFrame in as many ways as you can imagine.
>
> **[9:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=587)** So feel free to do this.
>
> **[9:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=590)** So now that we've successfully created association rules and know how to filter them, the next step is to figure out which rules are potentially interested.
>
> **[10:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=602)** In the next video, I illustrate how to evaluate association rules based on some of the metrics we learned about in chapter one.
>
> **[10:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=613)** See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **Versions:** 0.01 (4), 1.4 (4), 0.25 (3)
> **Code Identifiers:** association_rules (3), min_threshold (2), frequent_patterns (1), frequent_itemsets (1)
> **Analogies:** for example (4), imagine (3)
> **CLI Commands:** make (3), python (2), find (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (3)
> **Cross-References:** in the last (1), in the next (1)

#### [How to evaluate association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=0)** - In this video, you will learn how to use several data driven objective measures of interest in this, to evaluate association rules in [[Python (Programming Language)|Python]].
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=11)** Note that this video, is a fourth, in a four video sequence, that also teaches you how to import and explore transactions, how to generate frequent item sets, and how to create association rules in Python.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=26)** If you have not done so, watch the previous three videos, for a detailed explanation, of the prior code.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=34)** Before we begin, let's run the code we created in the last three videos, to get our environment, up to speed.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=43)** So I'm going to go up here to run all, click on that.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=49)** So now that we've created association rules, and know how to filter rules, based on different criteria, let's take a look at how to evaluate them, based on the associated metrics.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=62)** A quick way to get a big picture view of the metrics, is with summary [[Statistics]].
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=68)** We do this, by calling the describe method, of the rules data frame.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=74)** So let's call that.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=76)** So rules is our data frame.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=78)** I'm going to call the describe method.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=81)** Let's run that.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=85)** This summary statistics provide us with the mean, standard deviation, minimum, maximum and some percentile values for the association rule metrics.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=96)** From the summary, we can tell that a typical rule, has a lift of 1.76, and that the lift values range from 0.99 to 3.04.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=108)** Lift tells us how much more the antecedent and consequent occur together, in contrast to how often they occur independently.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=118)** In other words, lift is the strength of association.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=122)** Lift values range from zero to infinity, where a value of one indicates independence between the antecedent, and the consequent.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=132)** Let's take a look at the top five rules by lift.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=137)** So we're going to start with our rules that are set.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=140)** We're going to sort values, within our sort method.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=145)** We're going to specify what column.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=146)** So we're going to sort by lift, and we are going to sort where ascending is equal to false.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=155)** And then we are going to call the head method.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=157)** So only return the first five rows.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=160)** So I think everything looks good.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=162)** Let's run that.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=164)** The first rule has a lift score of 3.04.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=168)** We interpret this to mean that customers who bought beef, are 3.04 times more likely to also purchase root vegetables.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=177)** Note that lift values above one indicate an increased likelihood, while lift values below one, indicate a reduced likelihood.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=187)** Leverage is similar to lift.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=189)** And can be thought of, as a normalized value for lift.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=194)** Leverage values range from negative one to one, where a value of zero, indicates independence between the antecedent and the consequent.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=204)** Let's take a look at the top five rules by leverage.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=208)** So we're going to also start with our rules.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=211)** I'm going to say sort values.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=214)** We're going to sort this time by leverage.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=219)** I'm going to say ascending, is equal to force as well.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=224)** I'm going to get the head, so we can get the top five rules.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=231)** The first rule has a leverage score of 0.026.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=236)** We interpret this to mean that customers who bought root vegetables, are also likely to purchase other vegetables.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=243)** This is expected behavior.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=245)** However, the second rule, which tells us that customers who bought whole milk, are 1.5 times or 50% more likely to also purchase other vegetables, is a bit suspect.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=258)** Rules that include highly purchased items such as whole milk, can be deceiving.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=264)** So we should also look at the conviction of association rules.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=269)** Conviction quantifies how dependent, the consequent is on the antecedent.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=276)** It is also related to lift.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=278)** However, unlike lift, conviction it's sensitive to rule direction.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=284)** This means that conviction of A-B, is not equal to the conviction of B-A.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=290)** Conviction values range from zero to infinity, where a value of one indicates independence between the antecedent and the consequent.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=299)** Let's take a look at the top five rules by conviction.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=305)** So we want to start with rules again, sort values, sort by conviction.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=320)** Sort as false, the head.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=328)** So we see that the first rule has a conviction of 1.54.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=333)** This means that the rule, tropical fruits yogurt, yields whole milk would be correct or would be incorrect, 54% more often, or 1.5 times as often, if the consequent was independent of the antecedent.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=351)** The higher the conviction, the more likely it is that the consequent, is dependent on the antecedent.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=360)** Besides the metrics returned by the association rules function, Zhang's metric is another useful metric that we should also take into consideration, when evaluating rules.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=371)** It ranges in value from negative one to one, which represents perfect association, and perfect dissociation respectively.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=381)** Zhang's metric is useful in identifying items that should not be placed next to each other, even if they have been purchased together previously.
>
> **[6:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=390)** The calculation is rather involved, and I show that here.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=394)** So to create, to use Zhang's metric, we have to actually create a function.
>
> **[6:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=399)** And I've also pre-written the function.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=402)** The code for the function here for you.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=404)** So let's go ahead and run that function.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=407)** So next we can assign the result of the function, to a new column called Zhang, in the rules data frame as follows.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=416)** So we're going to go in here.
>
> **[6:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=418)** So we're going to say rules.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=420)** I call this new column, Zhang.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=427)** And Zhang is equal to Zhang metric of rules.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=435)** So let's run this, and see what we have.
>
> **[7:24](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=444)** So now we have a new column on the right, that has a Zhang metric for every single rule.
>
> **[7:29](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=449)** So let's take a look at the top five rules by Zhang metric.
>
> **[7:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=453)** So we're going to say rules, going to sort values, just turn around.
>
> **[7:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=459)** We're going to say Zhang, ascending is equal to false, Go look at head.
>
> **[7:53](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=473)** Okay, I think we're good to go.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=477)** The first rule has a Zhang metric score of 0.708.
>
> **[8:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=482)** This indicates a pretty strong positive association between beef and root vegetables.
>
> **[8:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=490)** This tells us, that if we were to separate beef from root vegetables in our store, there could be an impact, to how much of both are purchased.
>
> **[8:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=500)** In other words, pairing beef and root vegetables for promotional purposes, is a good choice.
>
> **[8:27](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=507)** Looking at rules that have a low Zhang metric is also very useful.
>
> **[8:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=512)** Let's take a look at the bottom five rules by Zhang metric.
>
> **[8:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=516)** So we going to start with rules, we going to sort values, we going to sort by Zhang, I'll say that a head.
>
> **[8:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=531)** So the first rule has a Zhang Metric score of negative 0.007.
>
> **[8:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=538)** This indicates a slight dissociation, between bottled beer and whole milk.
>
> **[9:05](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=545)** This tells us that if we were to separate bottled beer from whole milk in the store, there would likely not be an appreciable impact on purchase patterns for both items.
>
> **[9:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=557)** This means that it would be a bad choice, to pair these two items together, for promotional purposes.
>
> **[9:25](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=565)** Congratulations.
>
> **[9:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=566)** If you've been following along, through all four videos, that means that you've successfully imported transactions, generated frequent item sets, created association rules, and evaluated the rules.
>
> **[9:43](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=583)** Recall that when it comes to association rules, one person's trash, could be another person's treasure.
>
> **[9:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=592)** This means that it really is up to you, which metrics and which rules to focus on.
>
> **[9:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=598)** Have fun with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Statistics]] (2)
> **Versions:** 3.04 (3), 1.5 (2), 1.76 (1), 0.99 (1), 0.026 (1)
> **Definitions:** means that (5), is a  (3), in other words (2)
> **Analogies:** picture (1), similar to (1), such as (1)
> **CLI Commands:** python (2)
> **Warnings:** note that (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=0)** - [Instructor] Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=2)** You now know what an itemset is, how frequent itemsets are generated, how association rules are created, how they are evaluated, and how to use them.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=14)** You've also learned how to import transactions, generate frequent itemsets, create association rules, and evaluate association rules in [[Python (Programming Language)|Python]].
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=26)** The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=36)** Specifically, it should serve as a launchpad for solving more complex, unsupervised machine learning problems using association rules.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=47)** Here are a few recommended next steps.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=51)** Association rules are one of many unsupervised machine learning models we can build in Python.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=58)** I encourage you to continue to explore other [[LinkedIn]] Learning courses that illustrate the use of different types of machine learning models.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=68)** As a starting point, you can check out my other courses in the Machine Learning with Python series on LinkedIn Learning.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=76)** Besides courses that explore other models, I also encourage you to explore LinkedIn Learning courses that highlight the importance of [[Ethics]] in [[Data Collection]] and use.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=88)** An example of such a course is [[[[Data Ethics]]- Watching Out for Data Misuse]].
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=95)** If you are interested in broadening your skillset into other languages, such as R, then also check out my book, "Practical Machine Learning in R."
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=107)** Finally, I recommend that you continue to practice what you've learned, find new problems to solve, find interest in datasets on which to practice your new skills.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=120)** The journey into the world of machine learning with Python is a lifelong one.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=127)** Thanks for coming along with me on this journey.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=130)** I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (3), [[Ethics]] (1), [[Data Collection]] (1), [[Data Ethics]] (1)
> **CLI Commands:** python (4), find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/machine-learning-with-python-association-rules-3209139/codespaces)

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- k-Means Clustering]] | **5 of 6** | [[Advanced Python Projects- Build AI Applications]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning with Python- k-Means Clustering]] | **3 of 9** | [[Machine Learning with Python- Logistic Regression]] →

## Appears In

- [[Develop with Python for AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Advanced Nlp With Python For Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)