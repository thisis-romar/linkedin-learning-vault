---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-decision-trees
url: "https://www.linkedin.com/learning/machine-learning-with-python-decision-trees"
duration_minutes: 74
duration: 1h 14m
level: Intermediate
updated: 4/23/2024
learners: 207068
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
  - Decision Trees
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF5DDnnvDIQiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652891297458?e=2147483647&amp;v=beta&amp;t=DTaqIbbpDj86GHOC8bSWAzfTgEXGbBGU8qCiHperQwg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop with Python for AI and Machine Learning]]'
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
  - '[[Machine Learning with Python Professional Certificate by Anaconda]]'
prev_courses:
  - '[[Machine Learning with Python- Foundations]]'
  - null
  - '[[Machine Learning with Python- Foundations]]'
next_courses:
  - '[[Machine Learning with Python- Logistic Regression]]'
  - '[[Machine Learning with Python- k-Means Clustering]]'
  - '[[Machine Learning with Python- Logistic Regression]]'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":2,"total":6,"prev":"Machine Learning with Python- Foundations","next":"Machine Learning with Python- Logistic Regression"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":1,"total":9,"prev":null,"next":"Machine Learning with Python- k-Means Clustering"},{"path":"Machine Learning with Python Professional Certificate by Anaconda","position":3,"total":6,"prev":"Machine Learning with Python- Foundations","next":"Machine Learning with Python- Logistic Regression"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/decision-trees
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20Decision%20Trees.md)

![Machine Learning with Python: Decision Trees](https://media.licdn.com/dms/image/v2/C4E0DAQF5DDnnvDIQiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652891297458?e=2147483647&amp;v=beta&amp;t=DTaqIbbpDj86GHOC8bSWAzfTgEXGbBGU8qCiHperQwg)

# Machine Learning with Python: Decision Trees

> Decision trees are one of the most common approaches used in supervised machine learning. Building a decision tree allows you to model complex relationships between variables by mimicking if-then-else decision-making as a naturally occurring human behavior. In this course, instructor Frederick Nwanganga gives you an overview of how to collect, explore, and transform your data in preparation for bu

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees) | 1h 14m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Making decisions with Python](#making-decisions-with-python)
  - [What you should know](#what-you-should-know)
  - [The tools you need](#the-tools-you-need)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Decision Trees**](#1-decision-trees) (6 videos)
  - [What is a decision tree?](#what-is-a-decision-tree)
  - [How is a classification tree built?](#how-is-a-classification-tree-built)
  - [How do classification trees measure impurity?](#how-do-classification-trees-measure-impurity)
  - [How is a regression tree built?](#how-is-a-regression-tree-built)
  - [How to prune a decision tree](#how-to-prune-a-decision-tree)
  - [Why and when to use a decision tree](#why-and-when-to-use-a-decision-tree)
- [**2. Working with Classification Trees**](#2-working-with-classification-trees) (3 videos)
  - [How to build a classification tree in Python](#how-to-build-a-classification-tree-in-python)
  - [How to visualize a classification tree in Python](#how-to-visualize-a-classification-tree-in-python)
  - [How to prune a classification tree in Python](#how-to-prune-a-classification-tree-in-python)
- [**3. Working with Regression Trees**](#3-working-with-regression-trees) (3 videos)
  - [How to build a regression tree in Python](#how-to-build-a-regression-tree-in-python)
  - [How to visualize a regression tree in Python](#how-to-visualize-a-regression-tree-in-python)
  - [How to prune a regression tree in Python](#how-to-prune-a-regression-tree-in-python)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with decision trees](#next-steps-with-decision-trees)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making decisions with Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=0)** - [Fred] [[Decision Trees]] are one of the most popular and easy to use approaches in supervised machine learning.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=7)** So how does a decision tree get built?
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=10)** When should I use one?
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=11)** Can they get too large and complicated?
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=14)** If so, how do I make them more concise?
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=17)** Hi, I'm Fred Nwanganga, I'm a data scientist, teacher, and author with a passion for AI and machine learning.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=25)** In this course, I introduce what a decision tree is.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=29)** I explain the mechanics of how decision trees are pruned.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=33)** I discuss when decision trees are most useful, and when they are not.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/making-decisions-with-python?u=76281980&t=38)** Finally, I walk through the process of building, visualizing, and optimizing a classification tree, as well as a regression tree in [[Python (Programming Language)|Python]], let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (1), python (1)
> **Speakers:** - [fred] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=7)** First, I assume that you have a fundamental understanding of what machine learning is, specifically supervised machine learning.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=17)** If you don't, I recommend that you review my introductory [[LinkedIn]] Learning course, [[Machine Learning with [[Python (Programming Language)|Python]]- Foundations]].
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=25)** Second, it will be helpful if you have some entry level knowledge coding in Python I will assume that you know how to import a Python package, refer to attributes of an object and call the methods of an object.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=38)** Next, it would also be helpful if you have some familiarity with the [[Pandas (Software)|pandas]] and scikit-learn packages.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=46)** If you don't, no worries.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=48)** I will explain exactly what I'm doing when we do use these packages in the course.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=53)** Finally, I do assume that you know how to use the Jupyter Notebook interactive Python environment.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-you-should-know?u=76281980&t=60)** Specifically, I assume that you know how to create a code cell as well as how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [The tools you need](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=0)** - [Man] Before working through the exercises in this course, I want to make sure that you have the tools you need, to be successful.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=7)** The first thing you want to make sure to do, is install or verify that you have the latest version, of [[Python (Programming Language)|Python]] 3.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=14)** I'll be working in Python 3.8.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=16)** So if you have the latest version of Python 3, you should be able to run my code.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=21)** However, if you're still on Python 2, you may run into some difficulty.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=26)** Second, my code will be written and executed, using Jupyter Notebooks.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=32)** The Jupyter Notebook, is a great platform for combining live code, descriptive text about the code, visualizations, and equations in one simple-to-use interface.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=43)** Luckily, everything you need, which includes the latest version of Python 3, and the Jupyter Notebooks environment, is available by installing Anaconda.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=53)** Anaconda is a package manager, an environment manager, a Python distribution, and a collection of over 7,500 open-source packages.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=63)** It is free and easy to install, and it offers free community support.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/the-tools-you-need?u=76281980&t=70)** You can install Anaconda, by going to the address provided here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6), make (2)
> **Tools:** jupyter (3), anaconda (3)
> **Versions:** python 3 (4), python 2 (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [man] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=5)** This means that you can follow along with any of the code examples in the lessons.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=10)** I recommend that you do so.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=12)** The best way to become proficient in building decision tree models in [[Python (Programming Language)|Python]] is to practice doing it yourself.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=20)** The exercise files are organized into folders that correspond with the chapters of the course.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=26)** Within each folder are data files and two notebooks for each of the code lessons.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=32)** Let's take a look at an example.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=37)** As you can see, folder 02 has a data file called loan.CSV.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=43)** It also has two notebooks for the chapter two lesson videos.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=47)** The 02B notebook is the beginning notebook.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=51)** This is the notebook you should code in when following along with the lesson videos.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=56)** The 02E notebook is the ending notebook.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=60)** It is a completed version of the beginning notebook for your reference.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=64)** There are several ways to launch a notebook.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=67)** One approach is to launch the Anaconda Navigator, click on Launch Jupyter Notebook, then navigate to the notebook you want and launch it.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=77)** Let's do this together.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=82)** Depending on how fast or how resourced your computer is, this may take a while, or it may happen very quickly.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=90)** Now that we have Anaconda Navigator open, let's click on Launch Notebook.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/using-the-exercise-files?u=76281980&t=96)** Then we go to the folder, find the exercise files, and now we can launch our notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (2), navigate to (1), go to (1)
> **Tools:** anaconda (2), jupyter (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** python (1), find (1)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** loan.csv (1)
> **Env Vars:** csv (1)


### 1. Decision Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a decision tree?](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=0)** - [Instructor] A decision tree is a machine learning approach that uses an inverted tree-like structure to model the relationship between independent variables and a dependent variable.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=10)** [[Decision Trees]] are a supervised machine learning approach.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=13)** This means that we can use a decision tree to predict future outcomes.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=18)** Because of their versatility and ease of use, decision trees are one of the most widely used machine learning approaches.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=26)** Just like a tree has a trunk which is connected to leaves by branches, a decision tree is a collection of decision nodes which are connected to other decision nodes or leaf nodes by branches.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=38)** We can also think of a decision tree as a collection of questions, responses, and outcomes.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=44)** To illustrate this point, let's assume we are thinking of getting a new job.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=49)** For us, the choice of whether or not to accept a new job offer hinges on certain key considerations.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=56)** Let's assume that the most important consideration is salary, specifically we only accept a job offer if the job pays more than $80,000 a year.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=66)** In a decision tree, this first consideration or question is represented as a decision node.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=72)** Since the answer to this question is the most indicative of whether or not we will accept an offer, it is the first decision node in our tree and is thus known as the root node.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=84)** The possible responses to the question are represented by a branch for yes and a branch for no.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=90)** And depending on the answer, we either accept a job or reject it.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=95)** The outcome of each response, accept or reject, is represented by a leaf or terminal node.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=101)** Now let's assume that commute time is also an important consideration as to whether we accept a job offer or not.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=109)** Specifically, even if a job pays more than $80,000 a year, we may not be willing to take it if the commute is longer than an hour from where we live.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=119)** In a decision tree, we model this by adding a second decision node to the tree.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=124)** We now have two decision nodes to possibly consider before getting to the leaf nodes of accept or reject.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=131)** Next, let's assume that paid time off is also very important to us.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=136)** Specifically, we would accept an offer that pays less than $80,000 a year as long as it offered more than four weeks of paid leave.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=145)** We model this question with a third decision node.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=149)** We now have three decision nodes to possibly consider before getting to the leaf nodes of accept or reject.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=156)** As more considerations come to mind, we can add them as subsequent decision nodes which would increase the size of our tree.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=164)** However, if we decide that these three considerations are adequate, then this tree serves as a predictive model for whether or not we will accept a given job offer.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=175)** This structure of a decision tree can be interpreted as a set of rules or guiding principles.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=181)** For example, if we provide this model to a recruiter, they could easily follow the logic of this tree from the root node to the leaf node to figure out whether any given job offer would be acceptable to us or not.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=194)** Now imagine for a moment what your job acceptance decision tree could look like.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=199)** I'm sure it would have more decision nodes than this one.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=203)** I previously mentioned that decision trees are one of the most widely used machine learning approaches.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=210)** A major reason for this is the ease with which decision trees can be translated into simple and understandable if-then-else rules.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=219)** This makes them well suited for situations where transparency is important for legal or compliance purposes and for situations where the decision logic needs to be shared with non-technical stakeholders.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=232)** As a supervised machine learning approach, decision trees can be used to solve both classification problems and regression problems.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=241)** If our dependent variable is a categorical or discreet value such as color, true or false, yes or no, then the type of tree we build is called a classification tree.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=253)** However, if our dependent variable is a continuous value, such as age, income, temperature, then the type of tree we build is called a regression tree.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/what-is-a-decision-tree?u=76281980&t=263)** In this course, we will use both types of trees.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (5)
> **CLI Commands:** node (8)
> **Definitions:** is a  (4), is called (2), means that (1), known as (1)
> **Analogies:** such as (2), just like (1), for example (1), imagine (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [How is a classification tree built?](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=0)** - [Instructor] Classification trees are built using a process known as recursive partitioning.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=5)** The basic idea behind this process is to repeatedly split data into smaller subsets in such a way that maximizes the homogeneity or similarity of items within each subset.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=18)** To illustrates how recursive partitioning helps us build a classification tree, let's imagine that we work for a small commercial bank and that we have historical data for 30 personal loans issued by our bank.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=30)** Each loan record includes the annual income of the borrower, the amount that was borrowed, and the outcome of the loan, which is represented here by the default column.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=41)** Note that the income and loan amount columns are what we call the independent variables or predictors while the default column is a dependent variable or class.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=51)** Each of the 30 loans previously issued by our bank can be represented in terms of the dependent and independent variables this way using a scatter plot.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=62)** From the plot, we can see that of the 30 loans in the dataset, 16 ended in default, the red triangles, and 14 were paid back in full, the green circles.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=75)** Recall that the idea behind recursive partitioning is to repeatedly split data into smaller subsets in such a way that maximizes the similarity of items within each subset.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=88)** So the first thing we need to do here is to figure out how best to split this data into two so that we have partitions or subsets that maximize the similarity or purity of outcomes.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=101)** Using two axis parallel lines, we scan both axes to determine where to split the data.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=108)** By visual inspection, we find that splitting on the loan amount of $40,000 gives us the best split.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=116)** Based on the split, we get 14 loans of $40,000 or less to the left and 16 loans of more than $40,000 to the right.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=125)** Splitting the data this way gives us the two partitions with the most homogeneity of loans in favor of one of the two outcomes.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=133)** Any other axis parallel line we could have drawn would result in partitions with less purity or homogeneity.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=140)** Notice that I use the terms homogeneity, similarity, and purity to represent the same idea.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=147)** This initial split creates the logic for the root node of our classification tree, which is shown here.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=154)** It simply asks the question, did a customer borrow $40,000 or less?
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=160)** To create the branches and the next set of nodes, we make some generalizations or simplifying assumptions.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=166)** Of the loans which were more than $40,000, 10 resulted in default while six were paid back in full.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=174)** In other words, 63% of the loans, or 10 out of 16 loans, in this partition resulted in default.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=183)** Because default is the dominant outcome in this partition, we will assume or generalize that any future loans that are for more than $40,000 will also result in default.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=195)** As you can see, some of the loans in the partition, the red circles, do not conform to our assumption.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=201)** We refer to these as the misclassified examples in the training data.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=206)** Our goal should be to have very few of these.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=209)** The assumption we made for this partition determines the structure of the first branch and leaf node in our classification tree.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=217)** Now let's take a look at the other partition.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=221)** Of the loans which were $40,000 or less, eight out of 14, or 57% were paid back in full while six resulted in default.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=231)** Because not default is the dominant outcome in this partition, we generalize that any future loans that are $40,000 or less will also be paid back in full.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=242)** As expected, we also have some misclassified examples in this partition.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=248)** These are the green triangles.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=250)** The generalization we made for this partition determines the structure of the second branch and leaf node in our classification tree.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=259)** We can stop the recursive partitioning process here or we can decide to keep trying to create purer partitions within the data.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=268)** For instance, we know that within the left partition, we misclassified six of the 14 examples.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=274)** To reduce the number of misclassified examples, we need to further partition the data.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=280)** Using two axis parallel lines, we scan to determine where to split this partition.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=286)** By visual inspection, we find that splitting on an annual income of $20,000 gives us the best split.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=294)** Of the eight customers who borrowed $40,000 or less and earn more than $20,000 a year, seven paid their loan back in full and one defaulted.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=306)** Because not default is the dominant outcome in this partition, we generalize that any future customers who earn more than $20,000 a year and borrow $40,000 or less will also pay back their loan in full.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=322)** In similar fashion, we generalize that any future customers who earn less than $20,000 a year and borrow $40,000 or less will default on their loan.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=334)** Note that each of the partitions now only have one misclassified example.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=339)** They are much purer.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=342)** These two new partitions and the generalizations we made for them result in a structural change to our classification tree.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=350)** The tree will now include a new decision node which branches into two new leaf nodes.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=357)** We can continue the recursive partitioning process in an attempt to create smaller and more homogenous partitions, or we can stop here.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-classification-tree-built?u=76281980&t=366)** Generally, classification tree [[Algorithms]] continue the recursive partitioning process until all of the instances within the partition are of the same class or value, or all the features in the dataset have been exhausted, or when some user-defined condition has been satisfied.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** node (4), find (2), make (1)
> **Definitions:** known as (1), is a  (1), in other words (1)
> **Analogies:** imagine (1), for instance (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### [How do classification trees measure impurity?](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=0)** - [Instructor] Classification trees are built using a process known as recursive partitioning.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=5)** The objective of recursive partitioning is to create child partitions that are purer than their parents.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=11)** Classification tree [[Algorithms]] use a mathematical formula to quantify the degree of impurity within a partition.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=19)** Two of the most commonly used measures of impurity are entropy and Gini.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=24)** Entropy is the preferred measure of impurity for the C5.0 decision tree algorithm.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=30)** It is a concept that is borrowed from information theory.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=33)** And when applied to [[Decision Trees]], represents a quantification of the level of randomness or disorder that exists within a partition.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=43)** A partition with low entropy is one in which most of the items have the same value or outcome, while a partition with high entropy is one that has no dominant outcome.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=55)** The entropy of a partition S, with C possible outcomes or labels, is calculated as shown here.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=62)** To understand how this formula works, let's walk through an example.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=67)** Given the following orange partition with two possible outcomes, red triangle and green circle.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=75)** To calculate the entropy of the partition, we first multiply the negative proportion of examples that belong to the triangle class by the binary log of the proportion itself.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=87)** How do we get 0.53?
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=89)** Well, I'm glad you asked.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=91)** There are 30 examples in the partition, and 16 of them belong to the triangle class.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=96)** Therefore, the proportion of examples in the triangle class is 16 divided by 30, which is 0.53.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=104)** Next, we multiply the negative proportion of examples that belong to the circle class by the binary log of the proportion itself.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=112)** And how do we get 0.47?
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=114)** 14 out of 30 examples belong to the circle class.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=118)** 0.47 is 14 divided by 30.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=123)** Adding the two [[Microsoft Products|products]] yields 0.997.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=127)** This is the entropy of the orange partition.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=130)** So how does the classification tree algorithm use entropy to decide where to split the data during the recursive partitioning process?
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=139)** Let's assume that a classification tree algorithm is considering where to split this data in order to create pure partitions.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=148)** One of the choices it has to make is whether a split on loan amount of $40,000 is the best split it could make.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=156)** To figure this out, the algorithm starts by calculating the entropy of the left partition, which yields 0.986.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=164)** Then it calculates the entropy of the right partition, which yields 0.951.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=170)** The gray partition accounts for 47% of the data, while the yellow partition accounts for 53%.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=179)** The combined entropy of both partitions after the split is a weighted sum of their individual entropy values, which is 0.47, times the entropy of the left partition, 0.986, plus 0.53 times the entropy of the right partition, 0.951.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=199)** This comes out to 0.967.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=202)** 0.967 is the combined entropy of the left and right partitions after the data is split on loan amount of $40,000.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=213)** Notice that the entropy of the orange partition prior to the split is 0.997.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=219)** And that the combined entropy of the gray and yellow partition is 0.967.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=225)** This reduction in entropy that occurs as a result of the split is known as information gain.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=232)** It is the difference between the entropy of the partition before the split and the combined entropy of the partitions after the split, which is 0.03.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=243)** So what does all of this mean?
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=245)** Well, imagine that a classification tree algorithm is considering different split values for loan amount, as shown here.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=254)** It'll first calculate the information gain that occurs as a result of each potential split.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=261)** Then it'll choose the split that results in the largest information gain or reduction in entropy.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=268)** That is the best split.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=270)** This example uses information gained by way of entropy to determine the best split.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=276)** As previously mentioned, entropy is a preferred impurity measure for the C5.0 decision tree algorithm.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=284)** Another common impurity measure is Gini.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=287)** It is a measure of statistical dispersion.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=290)** Gini is the preferred measure of impurity for the CART decision tree algorithm.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=296)** One way to think of Gini is as a measure of how often a particular example in a partition would be incorrectly labeled if it were randomly labeled based on the distribution of labels in the partition.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=310)** Similar to entropy, the greater the degree of randomness or impurity within the partition, the higher the Gini impurity value.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=319)** And the smaller the degree of randomness or impurity within a partition, the lower the Gini impurity value.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=326)** The Gini impurity measure of a data partition S, with C possible outcomes or labels, is calculated as shown here.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-do-classification-trees-measure-impurity?u=76281980&t=335)** Similar to entropy, a classification tree algorithm that uses Gini as a measure of impurity will evaluate several splits, and choose the one that results in the largest reduction in Gini.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Decision Trees]] (1), [[Microsoft Products|Products]] (1)
> **Versions:** 0.53 (3), 0.47 (3), 0.967 (3), 0.997 (2), 0.986 (2)
> **Definitions:** is a  (4), known as (2)
> **Analogies:** similar to (2), imagine (1)
> **CLI Commands:** make (2)
> **Env Vars:** cart (1)
> **Speakers:** - [instructor] (1)

#### [How is a regression tree built?](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=0)** - [Instructor] Similar to classification trees, regression trees are built using a process known as recursive partitioning.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=7)** For regression trees, the objective of recursive partitioning is to create successive child partitions that have less variability than their parent.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=16)** To illustrate how recursive partitioning helps us build a regression tree, let's imagine that we work for a placement agency and that we just received the results of an income survey conducted by our agency.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=28)** Each survey response includes the age of the worker, their level of education or highest degree earned, and their annual salary.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=37)** Note that age and education level are the independent variables, or predictors, while salary is the dependent variable.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=45)** Each of the survey responses can be represented on the scatter plot this way in terms of the dependent variable, annual salary, and one of the independent variables, age.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=57)** Recall that for regression trees, the idea behind recursive partitioning is to repeatedly split data into smaller subsets in such a way that minimizes the variability of values within each subset.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=71)** So the first thing a regression tree algorithm does is figure out how best to split this data into two so we have partitions or subsets that minimize variability the most.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=84)** One of the measures that regression tree [[Algorithms]] rely on to figure out the best split is the sum of squared residuals, or SSR.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=92)** A residual is the difference between an observed data point and a reference data point such as the mean.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=98)** The formula for computing the SSR of a partition with n values is shown here where Y-hat is the mean of the values in the partition and Y-i is each value in the partition.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=112)** The SSR of a partition quantifies the overall difference between the values in the partition and the average of the values in the partition.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=122)** A partition with high SSR implies that the values in the partition are dissimilar or very different from the mean.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=130)** This is a partition that poorly explains the data.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=134)** A partition with low SSR implies that the values in the partition are similar or close to the mean.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=142)** This is a partition that explains the data well.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=145)** So how does a regression tree algorithm use SSR to determine the best split?
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=151)** Well, I'm glad you asked.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=153)** Let's assume that the first split the algorithm evaluates is where age is equal to 27.5.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=163)** This is the halfway point between the data points for age 25 and those for age 30.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=170)** The values in the left partition are 16.8, 43.9, and 50.4.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=177)** The average of these values is 37.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=181)** Recall that a residual is the difference between an observed data point and a reference data point.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=188)** The reference data point in this example is the average value.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=191)** So the residuals are the differences between each value and the mean.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=196)** To get the SSR, we square the residuals and add them.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=201)** This comes out to 635.2.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=205)** Using the same approach for the right partition, we get an SSR of 13106.9.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=214)** They combined some of squared residuals for both partitions if the data was split by age equal to 27.5 is the sum of the left SSR and the right SSR, which is 13742.1.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=231)** In order to determine the split that reduces variability the most, the regression tree algorithm evaluates the SSR based on each possible split, and chooses the one with the lowest SSR, which is the split where age is equal to 40.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=248)** This initial split creates the logic for the root node of our regression tree, which is shown here.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=256)** It asks the question, is a worker 40 years old or younger?
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=262)** To create the branches and the next set of nodes, the regression tree algorithm makes some generalizations or simplifying assumptions based on the data in the two partitions.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=274)** The first generalization it makes is based on the left partition.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=278)** It's estimates that if a worker is 40 years old or younger, then the annual salary will be 44,503, which is the average of the left partition.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=292)** The second generalization the regression tree algorithm makes is based on the data in the right partition.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=298)** It estimates that if a worker is older than 40, then their annual salary will be 77,990, which is the average of the right partition.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=310)** Depending on the data or some user defined criteria, the regression tree algorithm could stop the recursive partitioning process here, or it could keep partitioning the data into smaller subsets with less variability.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-is-a-regression-tree-built?u=76281980&t=325)** If the algorithm continues with the recursive partitioning process, the structure of the regression tree will continue to evolve as more partitions are created within the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** ssr (12)
> **Versions:** 27.5 (2), 16.8 (1), 43.9 (1), 50.4 (1), 635.2 (1)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** similar to (1), imagine (1), such as (1)
> **CLI Commands:** node (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [How to prune a decision tree](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=0)** - [Instructor] The basic idea behind recursive partitioning is to repeatedly split data into smaller subsets in such a way that maximizes the homogeneity or similarity of items within each subset.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=15)** Generally, this process continues until all of the instances within a partition are of the same class or value or all the features in the dataset have been exhausted or when some user-defined condition has been satisfied.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=31)** Usually, if we allow a tree to grow uninhibited until it meets the first two criteria, it may be too large or it may overfit against the training data.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=41)** Overfitting occurs when a decision tree fits our data too perfectly.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=46)** A tree that overfits does a great job explaining the data in the training set but performs poorly when given new or test data.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=56)** To avoid overfitting, we have to carefully manage the size of a decision tree during or after the recursive partitioning process.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=65)** this process is known as pruning.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=68)** Pruning helps a decision tree to generalize well, which means that it will likely perform well when presented with previously unseen data.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=78)** We can limit the size of a decision tree during the recursive partitioning process by setting criteria that need to be met at each split point.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=88)** These criteria can be in the form of the maximum number of features to be considered for each split, the maximum number of decision nodes to allow for the tree or the minimum number of data points to allow in each partition.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=102)** This approach to pruning is known as pre-pruning.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=106)** Pre-pruning is appealing in that prevents unnecessary branches and nodes from being created, which saves compute cycles.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=115)** However, pre-pruning could stop tree growth too early.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=120)** This means that the tree may not get a chance to learn certain patterns in the data.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=125)** An alternative pruning approach is post-pruning.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=129)** As the name suggests, the idea here is to allow the decision tree to grow as large as it can and then reduce its size afterward.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=140)** With regards to compute time, post-pruning is not as sufficient as pre-pruning, however, it does provide the benefits of being more effective in discovering important patterns within the data.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=154)** There are several approaches to post-pruning.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=157)** One of the most popular is known as cost complexity pruning or weakest link pruning.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=164)** To help explain our cost complexity pruning works, let's imagine that we work for a placement agency and that we just received the results of an income survey conducted by our agency.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=178)** Each survey response includes the age of the worker, their level of education or highest degree earned and their annual salary.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=185)** Limiting our focus to age and annual salary, each of the survey responses can be represented on a scatterplot this way.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=195)** Recall that the idea behind recursive partitioning is to repeatedly split data into smaller subsets in such a way that maximizes the homogeneity or similarity of items within each subset.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=210)** If we allow the recursive partitioning process to continue uninhibited on this data, it would partition on every possible age value and we would end up with partitions that look like this.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=224)** This would result in a decision tree that looked like this.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=229)** This decision tree fits our data too perfectly and has likely overfit.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=236)** A better decision tree for our data is one that is based on fewer than the maximum number of partitions, like one of these shown here.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=245)** We can think of these sub-trees of pruned version of the previous one.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=250)** The question then is how do we choose the best sub-tree to use?
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=256)** This is where cost complexity pruning comes in.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=259)** The first step in the process is to calculate the sum of squared residuals or SSR for each sub-tree.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=267)** For more information on how to compute the SSR for a tree, watch the previous video in this course sequence, titled "How is a regression tree built?"
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=276)** Notice that the larger the tree gets, the lower its SSR.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=281)** This means that the larger the tree is, the better job it does at explaining the relationship between the independent variables and the dependent variable.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=291)** However, we also know that the larger the tree is, the more likely it is to overfit against our data.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=299)** To account for this, a better metric for which sub-tree to choose is the tree score or cost complexity measure.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=308)** The cost complexity measure for a tree is the sum of squared residuals for the tree plus the tree complexity penalty.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=316)** The tree complexity penalty compensates for the number of leaf nodes in the tree.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=321)** It is a product of the complexity parameter, a user-defined parameter and the number of leaf nodes in the tree.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=329)** As a side note, because the decision tree used in this illustration is a regression tree, we use the sum of squared residuals in calculating the tree score.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=340)** If we were working with a classification tree, we would use entropy or gini instead of SSR to calculate the tree score.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=349)** If we set the alpha, the complexity parameter, to 1,000, the tree score for each sub-tree will be as shown here.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=358)** This means that we will choose the first sub-tree because it has the lowest tree score.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=364)** As you may have noticed, the choice of alpha has a significant impact on which tree ends up having the lowest tree score.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=373)** For example, if we reduce the value of alpha to 100, we get different tree scores for each tree.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=380)** This means that we would choose this sub-tree instead because it now has the lowest tree score.
>
> **[6:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=387)** Higher values for alpha favor simpler trees, while smaller values for alpha favor more complex trees.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=395)** The question then is how do we decide on a value for alpha?
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=401)** The simple answer is that alpha is a hyperparameter and we use a process known as hyperparameter tuning to find the best value.
>
> **[6:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=410)** Conceptually, finding the best alpha value involves training several sub-trees based on different values for alpha, then choosing the sub-tree that performs the best on the test data.
>
> **[7:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-decision-tree?u=76281980&t=425)** The alpha for this tree is the best value for alpha.

> [!info]- Semantic Content
>
> **Definitions:** means that (5), known as (4), is a  (4)
> **Env Vars:** ssr (4)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Why and when to use a decision tree](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=0)** - [Man] In order to know when to use a decision tree, we need to understand its strengths and weaknesses.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=6)** In terms of strengths, [[Decision Trees]] are simple to understand and interpret.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=11)** The logical structure of a tree is intuitive, and easy to follow.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=15)** This means we can easily create business rules, based on the structure of a tree.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=20)** Unlike some other approaches, which work better with either discreet, or continuous features, decision trees are able to handle both types of data, very well.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=29)** In other words, decision trees are useful, for both classification and regression problems.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=36)** Decision trees also do very well, in handling missing, noisy and outlier data.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=41)** This means we don't need to pre-process our data much, before we can use it to build a decision tree model.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=47)** During each stage of the recursive partitioning process, the feature that reduces impurity the most is chosen.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=54)** This means that unimportant features, are ignored by the tree.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=58)** As a result, feature selection is not necessary, when working with decision trees.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=64)** Decision trees do well on most problems, even if it makes slightly erroneous assumptions, about the nature of the data that is used to build it.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=73)** Decision trees are useful on both small and large data sets.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=77)** However, similar to other non-parametric models, the predictive accuracy of a decision tree, tends to improve as it encounters more training examples.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=88)** There are some weaknesses inherent with decision trees, as well.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=93)** The recursive partitioning process tends to be biased, toward features with a large number of unique values, when using entropy as a measure of impurity.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=103)** Decision trees can be rather unstable, because small changes in data can result in large changes, in the structure of the tree.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=112)** This limitation is mitigated by using decision trees, as part of an ensemble.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=118)** Decision trees are non-parametric models.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=121)** This means that they make very few assumptions, about the data.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=125)** A decision tree attempts to describe the training data, as closely as possible.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=130)** If not properly remediated, they can easily over fit against the training data.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=136)** Decision trees can also under fit, if the pruning process is overly aggressive.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=142)** Decision trees are limited to axis-parallel splits.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=146)** This means that you can only split data, horizontally or vertically, during the recursive partitioning process.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=153)** This limits the usefulness of decision trees, in certain problem domains.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=158)** While decision trees are easy to understand, very large trees can be rather difficult to interpret.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=165)** Decision trees tend to be biased, if the training data suffers from class imbalance.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/why-and-when-to-use-a-decision-tree?u=76281980&t=170)** To mitigate this, we often have to balance the training data, before trying to fit a decision tree to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (16)
> **Definitions:** means that (3), in other words (1)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [man] (1)


### 2. Working with Classification Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [How to build a classification tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=0)** - [Instructor] In this exercise, we'll use a sample loans data set to build a classification tree that predicts whether a borrower will default or not default on a new loan.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=11)** Before we get started, note that this video is the first in a three video sequence, that explains how to build, visualize, and prune a classification tree.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=22)** We start by importing the [[Pandas (Software)|Pandas]] package.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=25)** Then we import the data into a data frame called loan and preview it to make sure that the input worked as expected.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=35)** Now that we have our data, let's try to understand it.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=38)** First, we get a concise summary of the structure of the data by calling the info method of the data frame.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=49)** From the summary, we can tell that there are 30 instances in the dataset by looking at the range index.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=55)** We can also tell that there are three features in the dataset.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=59)** Looking at the D type column of the summary, we see that the income and loan amount columns hold integer values while the default column holds text, AKA object.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=70)** Next, we get summary [[Statistics]] for the data by calling the described method of the data frame.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=82)** From the statistics, we see that the minimum income value in the data is five.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=87)** While the maximum value is 34.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=90)** Note that these values are in the thousands.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=93)** So what we're seeing here is $5,000 and $34,000.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=99)** Likewise, the average loan amount is $51,967.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=105)** Next, let's also visually explore the data by creating a few plots.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=111)** To ensure that our plots show up in line, we run the map plot lib in line command.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=116)** Then, we import two packages, mapplotlib pyplot and the seaborne package.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=124)** The first plot we create is a boxplot.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=127)** This is a plot to show the difference in annual income between those that did not default, which is no, and those that did default, which is yes The plot shows that those that did not default on their loans tend to have a higher annual income.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=144)** Next, let's create another boxplot to show the difference in loan amount between those that did not default on their loans and those that did.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=154)** This chart shows that those that defaulted on their loans tend to have borrowed a little slightly more than those that did not.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=163)** Finally, let's create a scatter plot to look at the relationship between income and loan amount.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=171)** This chart doesn't show a clear linear relationship between those two variables.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=176)** There isn't much we can really infer from it, so we can move on now.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=180)** Before we build our classification tree though, we need to split the data into training and test sets.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=186)** Prior to doing so, we must first separate the dependent variable from the independent variables.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=193)** Let's start by creating a data frame called Y for the dependent variable, which is default.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=205)** Then we also do the same and create a second data frame called X for the independent variables, income and loan amount.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=216)** Now that we have our two data frames, we need to now build our model.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=220)** We can now split our data, before we do so, we have to import the train test split function from the SK learn model selections package.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=229)** Using this, we can split the data, the X and Y data frames, into X_train X_test, Y_train and Y_test.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=237)** Note that here we set train size to 0.8.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=240)** This means we want 80% of the original data to become the training data, while 20% becomes the test data.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=248)** We also set stratify as y which means we want the data splits using stratified random sampling based on the values of y.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=257)** Finally, we set random state to 1234, simply so we get the same results every time we do the split.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=268)** Now that our data is split, the shape attribute of the X_train and X_test data frames tell us how many instances, or records, are in each data frame.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=278)** We can see that we have 24 instances in the training set and six instances in the test set.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=286)** To build a classification tree in [[Python (Programming Language)|Python]], we need to import the decision tree classifier class from the SK learn tree sub package.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=295)** We then instant sheet an object from the class.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=299)** We call the object classifier.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=303)** Now that we have an object, we can build or fit a classification tree model using the training data.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=317)** To evaluate and estimate the future performance of our model, we can now see how this model fits against the test data.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=325)** To do so, we pass the test data to the score method of the model.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=330)** This returns the accuracy of the model against the test data.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=340)** Hmm, a classification tree is only able to accurately explain 50% of the relationship between the independent variables and a dependent variable within the test data.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=353)** That's no better than a coin toss.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=355)** We can do better.
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=356)** Over the course of the next two videos, we will visualize this tree then attempt to improve its performance.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-classification-tree-in-python?u=76281980&t=363)** I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **Warnings:** note that (3)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (2)
> **Env Vars:** aka (1)
> **Versions:** 0.8 (1)
> **Speakers:** - [instructor] (1)

#### [How to visualize a classification tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is a second in a three video sequence that explains how to build, visualize, and prune a classification tree.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=11)** So if you have not done so, watch the previous video for a detailed explanation of the prior code.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=17)** Now that we've trained a classification tree, let's visualize it to get a better understanding of the tree logic.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=24)** First, we make sure that we import the tree object from the sklearn package.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=30)** The figure_method of Pyplot allows us to specify the size of our tree.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=35)** Feel free to adjust this to see how it impacts the size of your tree.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=41)** Finally, we use the plot_tree method of the tree object to visualize the tree.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=47)** The first argument we pass to this method is the classification tree model itself, model.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=53)** Then we specify the independent variables as a list.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=57)** Next, we specify the possible values of the dependent variable as a list in ascending order, No and Yes.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=65)** Finally, we specify that we want the nodes of the Tree color filled.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=72)** Let's run the code.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=74)** Now we have our tree.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=77)** Let's take some time to understand the structure of this classification tree.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=82)** We see that the root node asks the question is income less than or equal to $14,500?
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=90)** This means that the first splits that the classifier made during the recursive partitioning process is that income equal to 14.5.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=99)** The fact that income variable was used as the first split, let's us know that it is the most important variable within the dataset in predicting the outcome.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=110)** The branch to the left of each node is for the Yes response, while the branch to the right is for the No response.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=117)** Within each node, we get a value for the Gini impurity score.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=122)** Gini is a measure of the degree of impurity in the partition.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=126)** The smaller this value is, the more homogenous the items in a partition are.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=131)** We also see the number of items or samples within each partition.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=136)** Notice that this value decreases as we work our way down the tree towards the leaf nodes.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=142)** This is expected since the primary objective of recursive partitioning is to create smaller, more homogenous subsets of the data.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=151)** The next information in each node, value, indicates the count of items within each class.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=158)** This is the item distribution.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=160)** For example, in the root node there are 14 items with a value of No and 10 with a value of Yes.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=168)** The Noes are the majority, which is why the class value is equal to No.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=174)** This means that if our classification tree were just one node, the root node, it would label every loan as not default.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=183)** Notice how the Gini impurity values change in relation to the item distributions.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=189)** As one class dominates, the Gini value tends toward zero.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=195)** One of the benefits of [[Decision Trees]] is that they are pretty good at ranking the effectiveness of independent variables and predicting the values of the dependent variable.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=207)** This is known as feature_importance.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=210)** We can visualize the feature_importance of the independent variables as follows.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=215)** First, we assign the feature importances on the score attribute of the model to a variable, which we call Importance.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=223)** The attribute returns an array of the important scores of each independent variable.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=229)** Next, we create a [[Pandas (Software)|Pandas]] Series called feature_importance by using the importance array as the values and the independent variable names as the index.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=240)** Finally, we plot the series.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=244)** Let's take a look at it.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-classification-tree-in-python?u=76281980&t=245)** From the plot, we see that the income variable is more important than the loan amount in predicting whether a borrower will default on their loan or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** node (7), make (1)
> **Code Identifiers:** feature_importance (3), figure_method (1), plot_tree (1)
> **Definitions:** is a  (2), means that (2), known as (1)
> **Versions:** 14.5 (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [How to prune a classification tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=0)** - [Instructor] Before we get started, know that this video is a third in a three video sequence.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=6)** That explains how to build, visualize and prune a classification tree.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=10)** So if you have not done so, watch the previous two videos for a detailed explanation of the prior code.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=17)** Now that we've trained and visualized a classification tree, let's look into what we can do to improve its performance by pruning.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=25)** [[Decision Trees]] are prone to overfitting.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=28)** One telltale sign that a tree has overfit is if it has a high accuracy score on the training data with a low accuracy score on the test data.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=39)** Let's start by getting our trees accuracy on the training data.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=43)** To do this we pass the training data to the score method of the model.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=50)** A model is a hundred percent accurate on a training data.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=54)** That's suspicious.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=56)** Let's get a second opinion from the test data.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=58)** Similarly, we pass the test data to the score method of the model.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=65)** Our model is 50% accurate on the test data.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=67)** Our model has definitely overfit on the training data and needs to be pruned.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=73)** There are two ways to prune a decision tree.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=76)** One is to set parameters that manage its growth during the recursive partitioning process.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=82)** This is known as pre-pruning.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=84)** Another approach is to allow the tree to fully grow on impeded and then gradually reduce its size in order to improve its performance.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=94)** This is known as post-pruning.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=96)** In this tutorial, we will use a pre-running approach.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=100)** This means that we need to figure out the best combination of values for the parameters of the tree that will result in the best performance.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=109)** This is known as hyper parameter tuning.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=113)** The psyche learned package scikit-learn provides several parameters we can tune during this process.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=120)** We will limit ourselves to three of them.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=123)** We start by creating a dictionary which we call grid that holds the values of the parameters we want to try out.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=135)** The first parameter is max depth.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=138)** This sets the maximum depth of the decision tree.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=141)** We will try setting the value to two, three, four and five to see which is the best.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=152)** The next parameter is min sample split.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=155)** This sets the minimum number of items we can have in the partition before it can be split.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=161)** Studies show that a value between one and 40 is best.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=165)** We will try setting the value to two, three, and four.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=172)** Next is the min samples leaf parameter.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=175)** This sets the minimum number of items we have in a leaf node.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=179)** Studies show that the best values are between one and 20.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=183)** We will try setting the value to one, two, three, four, five, and six.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=193)** The gridsearch CV class from the scikit-learn model selection sub package allows us to perform a great search to find the best parameter values for our tree.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=203)** We import the class then we instantiate a decision tree classifier object and then we pass the object to a new grid search CV object, which we call GCV.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=215)** We also pass the parameter grid to the object.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=223)** We then pass the training data to the fit method of GCV so it evaluates each hyper parameter combination in grid.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=234)** The best estimator attributes of GCV returns the classifier with the best combination of hyper parameters for our data, let's get that.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=246)** We then fit a classification tree on the training data using this classifier.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=254)** The output shows that the best combination of hyper parameters is max depth set at two and min samples leaf set at six.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=265)** Now we can reevaluate how well our model fits the training data by passing the training data to the score method of the model.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=275)** We see that the accuracy has gone down from a hundred percent to 87.5%.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=281)** Let's see how the model fits the test data as well.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=286)** Now, the model's accuracy on the test data has risen from 50% to 83.3% that is much better.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=296)** Finally, we can visualize our prune model.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-classification-tree-in-python?u=76281980&t=300)** Our prune tree is much smaller than the one we started off with but it generalizes much better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1)
> **Definitions:** known as (3), is a  (2), means that (1)
> **Env Vars:** gcv (3)
> **CLI Commands:** node (1), find (1)
> **Versions:** 87.5 (1), 83.3 (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Regression Trees

[↑ Back to Table of Contents](#table-of-contents)

#### [How to build a regression tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=0)** - [Instructor] In this exercise, we'll use a sample income data set to build a regression tree that predicts the salary of a worker based on their age and education level.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=11)** Before we get started, know that this video is the first in the three video sequence that explains how to build, visualize, and prune a regression tree.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=22)** We start by importing the [[Pandas (Software)|Pandas]] package.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=25)** Then we import the data into a data frame called income and preview it to make sure that the import worked as expected.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=34)** Now that we have our data, let's try to understand it.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=38)** First, we get a concise summary of the structure of the data by calling the info method of the data frame.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=49)** From the summary, we can tell that there are 30 instances in the data set by looking at the range index.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=56)** We can also tell that there are three features in the data set.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=59)** Looking at the D type column of the summary, we see that the age column holds integer values.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=65)** The education column holds text, AKA object, and the salary column, holds floating point or decimal values.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=73)** Next, we get summary [[Statistics]] for the numeric columns by calling the described method of the data frame.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=84)** From the statistics, we see that the minimum salary value in the data is 16.8 while the maximum value is 118.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=94)** Note that these values are in the thousands.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=97)** So what we're seeing here, is $16,800 and $118,000.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=104)** We also see that the minimum median and maximum age values are 24, 45, and 65 respectively.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=112)** Next, let's also visually explore the data by creating a few plots.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=118)** To ensure that our plots show up in line, we run the map plot lib in line command.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=122)** Then we import pie plot from the map plot lib package as well as a seaborne package.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=129)** The first plot we create is a box plot that shows the distribution of salary by education level.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=141)** The chart shows that those with a high school diploma tend to earn the least while those with a professional degree, tend to earn the most.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=151)** Next let's create another box plot to show the distribution of age by education level.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=158)** This chart doesn't show much separation between the groups.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=161)** However, we do see that those with professional degrees tend to be a bit older than the [[Representational State Transfer (REST)|rest]] of the workers in the data set.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=171)** Finally, let's create a scatter plot to look at the relationship between salary and age.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=178)** The chart shows somewhat of a linear relationship between these two variables.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=183)** This means that generally, the older a worker is, the higher their salary.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=190)** Now that we've done some initial data exploration let's prepare our data for modeling by splitting it into training and test sets.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=199)** Prior to doing so, we must first separate the dependent variable from the independent variables.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=205)** Let's start by creating a data frame called Y for the dependent variable, which is salary.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=216)** Then we create a second data frame X, for the independent variables, age and education.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=227)** Next, we import the train test split function from the SK learn model selections package.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=233)** Then we split the X and Y data frames into X_train X_test Y train and Y test.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=239)** Note that we set train size to 0.6.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=242)** This means we want 60% of the original data to become the training data.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=246)** While 40% becomes the test data.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=248)** We also set stratify to the education column in X, which means we want the data split using stratified random sampling based on the values of the education column.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=259)** Finally, we set random state to 1234.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=262)** Simply so we get the same results every time we do the split.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=269)** The shape attribute of the X_train and X_test data frames tell us how many instances or records are in each data set.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=279)** From the results, we can see that we have 18 instances in the training set and 12 instances in the test set.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=287)** The psyche learn package we intend to use to fill out regression trees does not support non-numeric values, like the education column in our data.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=297)** As a result, we have to dummy code the education columns in the X_train and X_test data frames.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=303)** Before we dummy code X_train let's preview it using the head method.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=311)** To dummy code X_train, we pass it to the Pandas get dummy function and preview the updated data frame.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=327)** Notice that each of the categorical values in the education column are now columns, each with a dichotomous value of zero and one.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=338)** Let's dummy code and preview the test data set X_test as well.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=344)** We are done with [[Data Preparation]].
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=346)** We can now build our model.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=348)** To build the regression tree in [[Python (Programming Language)|Python]], we need to import the decision tree regressor class from the SK learn tree sub package.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=355)** We then instantiate an object from the class.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=358)** We call the object, regressor.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=365)** Using the regressor object, we can fit a regression tree on the training data.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=376)** To evaluate and estimate the future performance of a model, let's see how well it fits against the test data.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=384)** To do so, we pass the test data to the score method of the model.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=389)** This returns the R squared of the model on the test data.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=397)** The R squared value we get here tells us that our model is only able to explain 58.5% of the variability and the response values of the test data.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=408)** We can do better.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=409)** Another way to evaluate a regression tree is to evaluate how accurate it is.
>
> **[6:54](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=414)** This means comparing the predicted values against actual values or getting the mean absolute error of the predictions.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=421)** Before we can get the mean absolute error, we need to get the models predicted response values for the test data.
>
> **[7:08](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=428)** We assign these results to a variable called y_test_pred.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=435)** Next, we import the mean absolute error function from the SK learn metrics of package and calculate the mean absolute error between the actual response values y_test and the predicted response values y_test_pred.
>
> **[7:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=453)** What does this mean?
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-build-a-regression-tree-in-python?u=76281980&t=454)** The mean absolute error implies that going forward, we should expect the salary values our regression tree predicts, to be off the mark by an average of plus or minus 13,542.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Statistics]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Data Preparation]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** y_test_pred (2), y_test (1)
> **Versions:** 16.8 (1), 0.6 (1), 58.5 (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), means that (1)
> **Warnings:** note that (2)
> **Env Vars:** aka (1)
> **Speakers:** - [instructor] (1)

#### [How to visualize a regression tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is the second in a three video sequence that explains how to build, visualize and prune a regression tree.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=11)** So if you have not done so, watch the previous video for a detailed walkthrough of the code and the cells above.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=19)** Now that we've trained on regression tree, let's visualize it to get a better understanding of the tree logic.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=25)** First, we make sure that we import the tree object from the sklearn package.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=30)** The figure method of Pyplot allows us to specify the size of our tree, feel free to adjust this to see how it impacts the size of your tree.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=39)** Next, we'll use the plot tree method of the tree object to visualize the tree.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=45)** The first argument we pass to this method is the regression tree model itself.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=51)** Then we specify the dummy coded independent variables as a list.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=63)** Finally, we specify that we want the nodes of the tree color field.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=73)** Because of the depth, and number of nodes in our tree, it's a bit difficult to make out the details of the tree.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=80)** For illustrative purposes alone, let's limit the tree visualization to the first three nodes in the tree.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=88)** To do this, we set the max depth argument in the plot tree method to one.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=100)** Now we have a clearer view of the top set of nodes.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=104)** Let's take a moment to understand the structure of the tree based on what we have here.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=108)** We can interpret the root node as asking the question, is a worker 34 years old or younger?
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=116)** If so, branch to the left, else branch to the right.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=120)** The fact that the age variable was used as a first split, lets us know that it is the most important variable within the data set in predicting the salary of a worker.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=131)** Know that the branch logic and the next two nodes are a bit peculiar.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=136)** For example, the right branch evaluates whether education professional is less than or equal to 0.5.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=143)** To understand what is happening here, recall that we had to dummy code original education values to either zero or one.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=151)** So if a worker has a professional degree, the value will be one and zero if they don't.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=157)** With that in mind, we can interpret this branch logic as asking the question, does a worker not have a professional degree?
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=164)** If yes, branch to the left, else branch to the right.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=169)** I know, it does sound a bit odd.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=172)** So we can ask the opposite question and reverse the direction of the responses.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=176)** In other words, we can ask, does a worker have a professional degree, if so, branch through right, else branch to the left.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=185)** Within each node, besides the branch logic, we also get a value for the MSE or mean squared error.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=193)** This can be interpreted as a measure of the degree of impurity, or variability in a partition.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=200)** The smaller this value is, the closer the values are to the mean.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=204)** Conversely, the larger this value is, the further the values are to the mean.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=211)** We also see the number of items or samples within each partition.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=216)** Notice that this value decreases as we work our way down the tree towards the leaf nodes.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=222)** This is expected since the primary objective of recursive partitioning is to create smaller, more homogenous subsets of the data.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=231)** The last information in each node value is the mean of the values in a particular partition.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=237)** This is the predicted value of the regression tree.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=241)** For example, if the regression tree were just one node, the root node, the tree would predict that all worker salaries was $65,367.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=253)** The average of all this error is in the training data.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=256)** One of the benefits of [[Decision Trees]] is that they are pretty good at ranking the effectiveness of independent variables in predicting the values of the dependent variable.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=268)** This is known as feature importance.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=271)** We can get the feature importance of each independent variable from the feature importances on the score attributes of our model.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=282)** We get back an array of important scores for each independent variable.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=287)** To put these scores in context, let's connect them to the feature names and visualize the scores.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=293)** To do this, the first thing we do is create a Pantha series called feature importance by using the importance array as the values and the independent variable names as the index.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=309)** Then we sort the series by value and plot it.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=314)** From the plot, we see that the age variable is the most important in predicting salary.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-visualize-a-regression-tree-in-python?u=76281980&t=321)** While the education masters feature is the least important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1)
> **CLI Commands:** node (5), make (2)
> **Definitions:** is a  (1), in other words (1), known as (1)
> **Analogies:** for example (2)
> **Env Vars:** mse (1)
> **Versions:** 0.5 (1)
> **Cross-References:** previous video (1)
> **Warnings:** note that (1)

#### [How to prune a regression tree in Python](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is the third in a three-video sequence that explains how to build, visualize and prune a regression tree in [[Python (Programming Language)|Python]].
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=11)** If you have not done so, watch the previous two videos for a detailed walkthrough of the code in the cells above.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=19)** Now that we've trained and visualized a regression tree, let's look into what we can do to improve its performance by pruning.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=27)** [[Decision Trees]] are prone to overfitting.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=30)** One telltale sign that a tree has overfit is if it performs well on the training data but very poorly on the test data.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=38)** Let's evaluate our tree to see if it overfit on the training data.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=43)** To do this, we pass the training data to the score method of the model.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=49)** Our model is able to explain 99% of the variability in the training data.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=56)** Let's see how it does on the test data.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=59)** Similarly, we pass the test data to the score method of the model.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=64)** Our model is only able to explain 59% of the variability in the test data.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=71)** It has overfit the training data and needs to be pruned.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=75)** There are two ways to prune a decision tree.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=78)** One is to set parameters that manage its growth during the recursive partitioning process.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=83)** This is known as pre-pruning.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=85)** Another approach is to allow the tree to fully grow unimpeded and then gradually reduce its size in order to improve its performance.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=94)** This is known as post-pruning.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=96)** In this tutorial, we will use the post-pruning approach.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=101)** The specific strategy we will use is known as cost complexity pruning.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=105)** The primary objective in cost complexity pruning is finding the right parameter, known as alpha.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=112)** The right alpha is the one that performs the best with the test data.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=118)** To get a list of effective alpha values to choose from, we start by passing the training data to the cost complexity pruning path method of our previously instantiated regressor object.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=130)** Then we extract a list of the effective alphas.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=140)** The list of effective alphas go from zero all the way to 222.77.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=148)** The larger the value for alpha, the smaller the tree will be.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=153)** The maximum value of alpha represents a tree with just one node.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=158)** We do not want that one.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=160)** We remove it from our list of effective alphas.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=169)** That's better.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=171)** Next, we train and evaluate several trees using different values for alpha.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=177)** We start by creating two empty lists: train scores and test scores to store the results of our model evaluation.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=185)** Then we loop through all the alpha values in our list of effective alphas.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=190)** For each alpha, we instantiate a regressor with the alpha, fit a regression tree to the training data, evaluate the tree's performance on the training and test datasets and append the results to the train scores and test scores list.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=207)** Let's run that.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=210)** With that information, we can now plot the training and test scores against different values of alpha.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=220)** The plot shows that when alpha is zero, the tree overfits.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=227)** The training score is at its highest.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=229)** As alpha increases, more of the tree is pruned, which results in reduced training scores.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=236)** The test scores behave a little differently.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=240)** As alpha increases, the test score initially increases.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=244)** Then it starts to decline as well.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=247)** The best alpha is the one that corresponds with the highest test score.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=251)** By a visual inspection alone, this seems to fall somewhere between 10 and 20.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=257)** Let's get a list of these test scores.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=263)** The test scores are listed in the same order as the effective alphas in the ccp_alpha's list.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=271)** To get the value for the best alpha, we first get the index of the highest test score and I use the index to select the corresponding alpha from the ccp_alpha's list.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=291)** We see that the best alpha for the regression tree is 14.8.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=296)** Finally, we fit a regression tree on the training data pruned using the best alpha.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=305)** Let's get the model's R squared on the training data.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=309)** We see that the R squared on the training data has gone down from .99 to .877.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=317)** Now, let's get the model's R squared on the test data as well.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=322)** We see that the R squared on the test data has gone up from .585 to .757.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=330)** Finally, we can visualize our pruned regression tree.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/how-to-prune-a-regression-tree-in-python?u=76281980&t=334)** Our new regression tree is smaller on the one we started off with but it performs better on the test data, which means that it now generalizes better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Decision Trees]] (1)
> **Definitions:** known as (4), means that (1)
> **CLI Commands:** python (1), node (1)
> **Code Identifiers:** ccp_alpha (2)
> **Versions:** 222.77 (1), 14.8 (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with decision trees](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=0)** - [Frederick] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=1)** You now know what a decision tree is, how it's built, and when to use one.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=7)** You've learned how to build, visualize, and prune a classification tree, as well as a regression tree in [[Python (Programming Language)|Python]].
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=15)** The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=23)** Specifically, it should serve as a launchpad for solving more complex, supervised machine learning problems using [[Decision Trees]].
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=33)** Here are a few recommended next steps.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=36)** Decision trees are one of many supervised machine learning models we can build in Python.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=41)** I encourage you to continue to explore other [[LinkedIn]] Learning courses that illustrate the use of different types of machine learning models.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=49)** One such course is Machine Learning with Python, [[k-means clustering]].
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=55)** Besides courses that explore other models, I also encourage you to explore courses that highlight the importance of [[Ethics]] in [[Data Collection]] and use.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=64)** An example of such a course is [[Data Ethics]], Watching Out for Data Misuse.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=70)** If you're interested in broadening your skillset into other languages, such as R, then also check out my book, "Practical Machine Learning in R."
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=80)** Finally, I recommend that you continue to practice what you've learned.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=86)** Find new problems to solve, find interest in data sets on which to practice your new skills.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=92)** The journey into the world of machine learning with Python is a lifelong one.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=97)** Thanks for coming along with me on this journey.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-decision-trees/next-steps-with-decision-trees?u=76281980&t=101)** I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Decision Trees]] (2), [[LinkedIn]] (1), [[k-means clustering]] (1), [[Ethics]] (1)
> **CLI Commands:** python (4), find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [frederick] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)
- Decision Trees

## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- Foundations]] | **2 of 6** | [[Machine Learning with Python- Logistic Regression]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
**1 of 9** | [[Machine Learning with Python- k-Means Clustering]] →

### In [[Machine Learning with Python Professional Certificate by Anaconda]]
← [[Machine Learning with Python- Foundations]] | **3 of 6** | [[Machine Learning with Python- Logistic Regression]] →

## Part of

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Appears In

- [[Develop with Python for AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]
- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Advanced Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees

---

[↑ Back to top](#)