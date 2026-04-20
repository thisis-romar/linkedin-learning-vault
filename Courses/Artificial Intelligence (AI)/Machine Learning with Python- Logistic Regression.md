---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-logistic-regression
url: "https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 4/29/2024
learners: 207068
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
  - Logistic Regression
exercise_files: false
github: "https://github.com/LinkedInLearning/machine-learning-with-python-logistic-regression-3211129/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHCaIAahatY6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245442931?e=2147483647&amp;v=beta&amp;t=jIdzp5-QT8j6P4PzTQgzBa-k8Qjhva10k_DgyvttfaA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Develop with Python for AI and Machine Learning
  - Advance Your Skills as a Machine Learning Specialist
  - Machine Learning with Python Professional Certificate by Anaconda
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/logistic-regression
status: not-started
created: 2026-04-20
---

![Machine Learning with Python: Logistic Regression](https://media.licdn.com/dms/image/v2/D4D0DAQHCaIAahatY6A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245442931?e=2147483647&amp;v=beta&amp;t=jIdzp5-QT8j6P4PzTQgzBa-k8Qjhva10k_DgyvttfaA)

# Machine Learning with Python: Logistic Regression

> Are you looking for a practical way to use machine learning to solve complex real-world problems? Logistic regression is an approach to supervised machine learning that models selected values to predict possible outcomes. In this course, Notre Dame professor Frederick Nwanganga provides you with a step-by-step guide on how to build a logistic regression model using Python. Learn hands-on tips for 

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression) | 1h 19m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Frederick Nwanganga]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/machine-learning-with-python-logistic-regression-3211129/codespaces)

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)
- Logistic Regression

## Table of Contents

### Introduction

#### Classifying data with logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=0)** - Logistic regression is one of the simplest and most commonly-used classification approaches in machine learning.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=8)** It allows us to model the relationship between a set of predictors and the probability of a categorical response.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=16)** Not only is it great for prediction; it also allows us to make statistical inference.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=22)** Hi.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=23)** I'm Fred Nwanganga.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=24)** I'm a data scientist, teacher and author with a passion for AI and machine learning.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=30)** Welcome to "Machine Learning with Python: "Logistic Regression."
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=35)** In this course, I explain what regression analysis is, the anatomy of a regression model, and common types of regression.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=44)** I also discuss when logistic regression is most useful, and when it's not.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=51)** Finally, I walk through the process of importing, exploring and preparing data for logistic regression, as well as how to build, evaluate and interpret a logistic regression model in Python.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/classifying-data-with-logistic-regression?u=76281980&t=67)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - logistic (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=8)** First, I assume that you have a fundamental understanding of what machine learning is, specifically supervised machine learning.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=19)** If you don't, I recommend that you review my introductory LinkedIn Learning course, [[Machine Learning with Python- Foundations]].
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=28)** Second, it would be helpful if you have some entry-level experience with coding in Python.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=35)** I will assume that you know how to import a Python package, refer to the attributes of an object, and call the methods of an object.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=44)** Next, it would also be helpful if you have some familiarity with the pandas and sklearn packages.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=53)** If you don't, no worries.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=55)** I will explain exactly what I'm doing when we do use external packages in the course.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=61)** Finally, I do assume that you know how to use the Jupyter notebook interactive Python environment.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-you-should-know?u=76281980&t=69)** Specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (1), finally, (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=5)** This means that you can follow along with any of the code examples in the lessons.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=11)** I recommend that you do so.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=13)** The best way to become proficient in building logistic regression models in Python is to practice doing it yourself.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=22)** This course is delivered using Codespaces, a development environment that is hosted in the cloud.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=30)** The exercise files are available on GitHub and organized by branches.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=37)** Within each branch is a data file and two notebooks a beginning and an ending notebook.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=44)** Let's take a look at an example.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=48)** The files in the 03_01 branch are what we use in the first video of the third chapter.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=58)** As you can see within the SRC folder we have a data file called Loan CSV.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=68)** We also have two notebooks for the lesson videos.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=72)** The 03b notebook is the beginning notebook.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=76)** This is the notebook you should code in when following along with the lesson videos.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=81)** The 03e notebook is the ending notebook.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=85)** It is a completed version of the beginning notebook.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=89)** Just for your reference.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-the-exercise-files?u=76281980&t=91)** Now, let's get a quick word from LinkedIn Learning about using Codespaces for this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (2)
> **Env Vars:** src (1), csv (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a codespace is directly from one of our course's GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click code and then create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork, you can click on the fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit create fork.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=267)** I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the commit button and I'll ask it to go ahead and stage the changes.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=328)** And then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit okay.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=337)** That way, it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=350)** Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional course specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/using-github-codespaces-with-this-course?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Regression

#### What is regression?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=0)** - [Instructor] Regression or regression analysis refers to a family of machine learning algorithms that are used to quantify the size and strength of the relationship between two or more numerical values.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=14)** Regression is one of two major categories of supervised machine learning.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=19)** The other is known as classification.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=22)** Classification problems are supervised machine learning problems where the dependent variable is categorical or qualitative.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=32)** For example, a machine learning model that predicts whether a tumor is benign or malignant is a classification model.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=40)** The values benign or malignant are categorical.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=45)** In contrast to classification, regression problems are supervised machine learning problems where the dependent variable is continuous or quantitative.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=55)** For example, a machine learning model that predicts the annual sales numbers for a particular product based on advertising spend is a regression model.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=66)** Annual sales is a continuous value.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=69)** It has an infinite number of possible values between the lower and upper bounds.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=76)** To further illustrate how regression analysis is used, let's assume that we work for a bike rental company and are trying to build a machine learning model that estimates how many bikes to deliver to a location to meet anticipated customer demand.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=93)** To build such a model, we need some historical data or what is known as ground truth data.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=100)** Suppose that over the last month, our company kept a record of the average daily temperature and the number of bikes rented.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=109)** Shown here is a 10 day sample of that data.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=114)** To build a regression model using this data, we could assume that the average daily temperature has a direct impact on the number of bikes rented.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=125)** As a result, we will designate the column that holds the average daily temperature as the independent variable.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=133)** Because our objective is to predict the number of rentals based on temperature, the rentals column would serve as the dependent variable.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=144)** Using the independent and dependent variables as input, a regression algorithm would attempt to estimate a function, F of X beta, that models the relationship between the values of the independent variable and the values of the dependent variable.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=162)** The estimated function is what we refer to as a regression model.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=167)** With a regression model, we can do one of two things.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=172)** The first is prediction.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=174)** If we know the estimated daily temperature for any given day, we can simply pass it to our regression model and it'll predict the number of bikes it expects customers to rent on that day.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=188)** Regression models are also useful for inference.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=192)** With a regression model, we can approximate the impact that a unit change in a predictive variable would have on the response.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-regression?u=76281980&t=201)** For example, we can use our bike rental model to answer a question such as how many more or how many fewer bikes would customers rent if the average daily temperature rose by one degree?

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), known as (2)
> **Code Keywords:** function (2), let (1), pass (1)
> **Analogies:** for example (3), such as (1)
> **Speakers:** - [instructor] (1)

#### The anatomy of a regression model
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=0)** - [Instructor] By quantifying the size and strength of the relationship between two or more numerical values, regression models allow us to predict or forecast an output value based on a set of input values.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=15)** The anatomy of a regression model is made up of three components.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=19)** The first is a continuous value.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=22)** We intend to predict.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=23)** Why?
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=24)** This is the dependent variable and it's also known as the response variable.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=30)** The second component is a collection of one or more numeric variables X, that we intend to use to predict the response variable.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=40)** These are known as the predictors or independent variables.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=46)** The third component is a set of coefficient beta which describe the relationships between the predictors and the response variable.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=56)** To help motivate our understanding of the anatomy of a regression model, let's assume that we work for a bike rental company and would like to build a regression model that estimates how many bikes to deliver to a location to meet anticipated customer demand.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=74)** Suppose that what is shown here is a sample of the historical data that we intend to build a model with, the column with the values that we're trying to predict rentals, represents the first component, Y, of a regression model.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=91)** This is the response.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=93)** It is known.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=94)** The second component, X, of a regression model is represented by the temperature column.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=100)** This is a predictor.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=102)** This is also known.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=105)** The third component of a regression model, beta, is unknown.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=110)** It is estimated based on the values of both the predictor and the response.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=116)** How does a regression algorithm estimate these values?
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=120)** An illustration would help.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=123)** If we create a scatter plot of the historical data with the predictor on the X-axis and the response on the Y-axis, we get a plot that looks like this.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=134)** Regression models are parametric models.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=137)** Parametric models require that we make assumptions about the nature of the data in order to choose the right function to model the data.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=147)** If we make the assumption that the relationship between the predictor and the response is linear then we use a linear regression algorithm to find a straight line like this one, that best fits the data.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=161)** Mathematically, the equation for the line of best fit is usually written in this format.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=168)** The goal of a linear regression algorithm is to estimate the optimal values for beta given a set of X and Y values.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=177)** The position and slope of the line vary depending on the values for beta.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=184)** Beta zero is a intercept and it impacts the position of the line on the Y-axis.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=191)** Increasing the value shifts the line upwards and reducing the value shifts the line downwards.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=198)** Beta one is the slope, and it impacts the line's angle of tilt.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=204)** A positive value implies an upward slope, while a negative value implies a downward slope.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=211)** As you can imagine, there are infinite possible values for beta zero and beta one with each combination resulting in a different line.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=222)** Linear regression algorithms often use an approach known as ordinary lease squares or OLS to estimate the optimal values for beta zero and beta one.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=233)** The mechanics of OLS are beyond the scope of this course.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/the-anatomy-of-a-regression-model?u=76281980&t=238)** However, the general idea is that the optimal beta values are ones that result in a line with the least sum of squared distances or residuals between the observed data and corresponding points on a linear regression line as shown here.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), known as (3)
> **Code Keywords:** let (1), this. (1), require (1), function (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** ols (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Common types of regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=0)** - [Instructor] Depending on the nature of our data and the type of value we want to predict, we can use one of several forms of regression.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=9)** Let's assume once again that we work for a bike rental company and are trying to build a regression model that estimates how many bikes will be rented based on weather conditions.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=21)** If our historical data consists of a single predictor variable X, and we assume that the relationship between the predictor variable and the response Y is linear, then we use simple linear regression to model this relationship.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=37)** The line equation for this approach is beta0 + beta1 X as shown here.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=44)** Simple linear regression is useful when we only have one predictor variable in our Ground truth data.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=51)** However, we often have to consider several predictors in order to reliably estimate the values of a response variable.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=60)** To accomplish this, we use a different type of linear regression to model the relationship.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=68)** If we have more than one predictor variable X and assume that the relationship between the predictor variables and the response Y is linear, then we use the approach known as multiple linear regression to model the relationship.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=84)** The multiple linear regression line equation is beta0 + beta1 X1 + beta2 X2, up to beta-p Xp, where P is a number of predictors we intend to consider.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=101)** With linear regression, their linear relationship between the predictor and the response, implies that a constant change in the predictor variable leads to a constant change in the response variable.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=115)** Let's consider the regression line shown here, that models the relationship between the average daily temperature and the number of bikes that customers rent.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=125)** According to the regression line, a constant change in temperature will lead to a constant change in the number of bikes rented.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=134)** In other words, if delta1 is equal to delta2, then delta3 will also be equal to delta4.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=143)** Linear regression also assumes that the values of the response variable are normally distributed, and that they can vary indefinitely in either direction, with no fixed zero value.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=157)** However, we know that these two assumptions are not quite true in this scenario.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=164)** For example, the value of the response variable cannot be negative.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=170)** Customers cannot rent a negative number of bikes.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=175)** A more appropriate expectation of our data is that that a constant change in the predictor variable would result in a geometric or exponential change in the response variable.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=187)** For example, a 10-degree change in temperature would more likely result in the doubling or tripling of the number of bikes rented as shown here.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=199)** In other words, delta3 is not equal to delta4, even though delta1 is equal to delta2.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=209)** To model a response variable, that is never zero, and that varies exponentially in response to a constant change in a predictor variable, we need a different type of regression technique.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=221)** If we assume that the relationship between the predictor variable X, and the response Y is exponential or log linear, then we use the approach known as Poisson Regression to model the relationship.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=236)** The Poisson Regression line equation is shown here.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=240)** Notice that it is very similar to the linear regression equation with the difference being that instead of estimating Y, we estimate the log of Y.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=251)** Poisson Regression is especially useful when our predictor is positive and the response variable is a count that ranges in value from zero to infinity.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=262)** For example, we can use Poisson Regression to predict the number of people who buy tickets to a concert based on predictors such as ticket price, time of year, and the number of people who follow the band on social media.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=279)** Now let's consider a slight variation to the bike rental scenario.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=284)** What if instead of trying to predict how many bikes customers would rent, we decide to predict whether a given customer will or will not rent an E-bike based on their age.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=298)** A scatter plot of the historical data for this type of problem could look like this.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=303)** The response values are binary and not continuous, like in the previous scenario.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=309)** A linear regression model would fit this data poorly, so would a Poisson Regression model.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=317)** To model this type of relationship, we need a technique that allows us to create an S-shaped curve like this one that is bounded on both ends.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=328)** This type of curve is known as a sigmoid curve.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=333)** If we assume that the relationship between the predictor variable X and the response Y is binary or dichotomous, then we use the approach known as Logistic Regression to model the relationship.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/common-types-of-regression?u=76281980&t=348)** The Logistic Regression line equation is shown here.

> [!info]- Semantic Content
>
> **Definitions:** known as (4), is a  (2), in other words (2)
> **Code Keywords:** let (3), this, (1), this. (1)
> **Analogies:** for example (3), such as (1)
> **Speakers:** - [instructor] (1)


### 2. Logistic Regression

#### What is logistic regression?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=0)** - [Instructor] Logistic regression is a supervised machine learning technique that models the relationship between one or more predictors, and the probability of a categorical response.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=11)** To help motivate our understanding of how logistic regression works, let's suppose that we intend to build a regression model that predicts whether a particular customer will or will not rent an e-bike, as a function of their age.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=26)** A sample of the historical data that we use to such a model could look something like this.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=32)** If we plot this data, we get a scatter plot that looks like this.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=36)** Note, that the response values yes and no, a categorical values, they are not continuous values as we normally expect for regression problems.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=47)** To deal with this, instead of modeling the response values directly, logistic regression models the probability of a particular response value.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=58)** In this example, a logistic regression algorithm would model the probability that the value of the response variable rent is yes given an age value, because the probability of an event goes from zero to one, if we represent yes as one and no as zero, the objective now becomes predicting the probability of one given an age value.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=84)** Notice, by approaching the problem this way, the response is no longer categorical, it has become continuous.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=92)** The logistic regression algorithm uses a nonlinear function, known as a logistic function to fit a curve to the data.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=100)** The curve is bounded on both ends by zero and one, and is known as a sigmoid curve.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=107)** Similar to other regression algorithms, the logistic regression algorithm uses a series of mathematical transformations to find the better coefficients, that result in a curve that best fits the data.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=120)** The process it uses is known as maximum likelihood estimation or MLE.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=126)** The mechanics of how MLE works is beyond the scope of this course.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=132)** Using the curve of best fit, we can visually estimate the probability of an event for any given X, by projecting from the x-axis to the y-axis.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=144)** For example, according to the fitted curve, the probability of a 35 year old renting an e-bike is essentially 0%, while the probability of a 45 year old renting an e-bike is 100%.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=159)** To convert these predicted probability values to a categorical response, logistic regression algorithms use what is known as a cutoff threshold.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=170)** In this example, response values at or above the threshold are interpreted as yes, while response values below the threshold are interpreted as no.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=182)** So we can interpret the prediction for a 35 year old customer as no, and that of a 45 year old customer as yes.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=190)** It's important to note that while most logistic regression models use 0.5 as a default cutoff, we can adjust this threshold depending on our data, and how conservative we want to be with our interpretation.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=207)** In the example shown here, with a threshold set at 0.9, our response of 0.8 would still be interpreted as no.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=217)** Logistic regression is a very popular technique for solving classification problems.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=223)** Depending on the characteristics of the response variable, the logistic regression model we build will likely fall into one of three subcategories.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=232)** The most common type of logistic regression is binomial logistic regression.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=238)** This type of model is useful in predicting outcomes that only have two possible values, such as yes or no, true or false, one or zero.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=249)** Most problems fall into this category.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=252)** Our e-bike rental example is one of them.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=256)** The second type of logistic regression is known as multinomial logistic regression.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=261)** These types of models are useful when our response has more than two possible values.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=269)** For example, a multinomial logistic regression model would be useful in predicting which one out of three medical conditions a patient is at the highest risk for.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=281)** With multinomial logistic regression, we typically break down the problem by modeling the probability of each response value independently.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=291)** Then we choose the one with the highest probability.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=295)** The third type of logistic regression is ordered logistic regression.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=300)** This approach is very similar to multinomial logistic regression with one key difference, the response values have a logical order.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=310)** An example of an ordered response is a Likert scale of one to five.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/what-is-logistic-regression?u=76281980&t=316)** An ordered logistic regression model would be useful in predicting the rating or the number of stars, a student would give to a LinkedIn learning course based on the number of coding examples in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this. (2), let (1), this, (1), for. (1)
> **Definitions:** known as (4)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Versions:** 0.5 (1), 0.9 (1), 0.8 (1)
> **Env Vars:** mle (2)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Making predictions with logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=0)** - [Narrator] Logistic regression is most often used to solve classification problems because that allows us to predict the probability of a categorical value Y for any given X.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=12)** For example.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=13)** Suppose that we have a logistic regression function like this that models the probability of a customer renting an e-bike as a function of their age.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=24)** By doing the math, we can predict that the probability of a 35 year old customer renting an e-bike is 14.8%.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=33)** If we use a 50% cutoff threshold then we interpret the prediction of 0.148 as no.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=41)** According to this model, a 35 year old customer is unlikely to rent an e-bike.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=47)** Statistically speaking, modeling the value of a variable with a restricted range, such probability can be challenging.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=57)** It is also rather difficult to properly interpret the non-linear relationship that exists between predictors and the response as represented by the logistic function.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=69)** So instead of using the logistic function, most logistic regression algorithms actually model the Log Odds of the response as a linear combination of the predictors as shown here.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=83)** In this equation, P is a logistic function and the Log Odds of the logistic function is known as a Logit, unlike probability, which ranges from zero to one, Log Odds values range from negative infinity to positive infinity, they are not bounded on either side.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=106)** The idea of odds, Log Odds and probability can sometimes be confusing.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=113)** To help clear up some of the confusion, let's explore the relationship between all three measures.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=120)** Odds ratios are commonly used in domains such as horse racing, sports, epidemiology, and gambling.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=129)** In sports, instead of stating the probability of winning, people will often talk about the odds of winning.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=136)** The odds or odds ratio of an event is a probability that the event will occur expressed as a proportion of the probability that the event will not occur.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=147)** So if the probability of an event is P, then the odds of the event is P divided by one minus P.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=155)** To illustrate, let's suppose that out of 10 basketball games, team A won eight and team B won two.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=164)** Based on these results, we can say that the probability of team A winning a game against team B is eight divided by 10 or 80%.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=175)** Conversely, the probability of team A losing a game to team B is 20%.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=182)** Note that this is also the probability of team B winning a game against team A.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=189)** In terms of odds, we say that the odds of team A winning a game against team B is four to one, which is 0.8 divided by 0.2.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=201)** In other words, team A's odds of winning is four times that of Team B.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=207)** Taking the log of the odds of an event gives us the Logit function.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=214)** To go from Log Odds to odds, we exponentiate.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=218)** And to go from odds to probability, we divide the odds by one plus the odds.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=225)** Notice that this is the Logistic Function.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=229)** As I mentioned earlier, instead of modeling the probability of a response, most logistic regression algorithms model the Log Odds of the response as a linear combination of the predictors.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=243)** The scikit-learn Python package which we will use later in this course, uses this approach.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=251)** So if we train a model in Python that estimates the probability of a customer renting an e-bike as a function of their age, the function would look like this.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=262)** To predict the probability of a 35 year old customer renting an e-bike, the model would first calculate the Log Odds of the event which is negative 1.75.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=274)** To get the odds, it exponentiates the Log Odds, which turns out to be 0.1738.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=282)** Finally, it divides the odds by one plus the odds to get a probability of 0.148.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/making-predictions-with-logistic-regression?u=76281980&t=290)** As you can see, we end up with the same probability: 14.8% as we did earlier in the video when we used the logistic function directly.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (2), this. (1), finally, (1)
> **Versions:** 14.8 (2), 0.148 (2), 0.8 (1), 0.2 (1), 1.75 (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** python (2)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### Interpreting the coefficients of logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=0)** - [Instructor] Logistic regression is most often used to solve classification problems because that allows us to predict the probability of a categorical value Y for a given X.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=12)** However, instead of simply predicting an outcome, we sometimes want to understand the quantitative impact that a unit change in X has on Y.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=23)** This is known as inference.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=26)** To infer meaning from a model, we need to understand what a beta coefficients mean.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=33)** The way we interpret the beta coefficients depends on whether a predictor X is continuous like age or categorical like gender.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=44)** Let's start with this scenario where the predictor is continuous.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=48)** The equation for such a model is shown here.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=52)** Because the predictor age is a continuous variable, we interpret the beta zero coefficient of -5.95 as a log odds of a customer of age zero renting an e-bike.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=66)** To understand the intuition behind this interpretation, simply substitute the value zero for age in the equation.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=74)** This gives us -5.95.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=77)** Since we are not particularly interested in the log odds of babies renting e-bikes, we'll ignore the beta zero coefficient for the remainder of this analysis.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=87)** The beta one coefficient is the change in log odds as a result of a unit change in X.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=95)** For this model, a beta coef-, one coefficient of 0.12 tells us that the log odds of renting an e-bike increases by 0.12 for each unit change in age.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=109)** As you can tell, this is not a natural way to communicate this type of information.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=116)** Let's interpret the beta one coefficient in terms of odds instead.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=121)** To do so, we'll exponentiate.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=124)** Now we can interpret the exponentiated beta one coefficient of 1.13 to mean that for every unit change in age, the odds of renting an e-bike increases by 13%.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=139)** In other words, if we knew the odds of a 30 year old renting an e-bike, then the beta one coefficient tells us that the odds of a 31 year old renting an e-bike would be 13% higher than that of the 30 year old.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=157)** Note that we arrived at 13% or 0.13 by subtracting one from 1.13.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=166)** We did this because exponents beta one is greater than one.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=171)** If exponent beta one were less than one, we would've subtracted it from one instead.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=178)** For example, if exponent beta one was 0.84, we would interpret the coefficient to mean that for every unit change in age the odds of renting an e-bike decreases by 16%.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=194)** We may be tempted to also interpret the beta coefficient in terms of probability by dividing exponent beta one by one plus exponent beta one, which gives us 0.53.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=208)** However, this value is not the constant change in probability as a result of a unit change in X nor is it the percentage at which the probability changes as a result of a unique change in X.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=224)** Because the relationship between X and the probability of Y is non-linear the amount of the probability changes due to a unique change in X is dependent on the value of X.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=238)** To understand the relationship between the beta coefficient and probability, we need to look at the value of the beta one coefficient.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=248)** What we can infer from the coefficient is that regardless of the value of X, if beta one is positive, then increase in X will result in an increase in the probability of Y.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=263)** Conversely, if beta one is negative, then increase in X will result in a decrease in the probability of Y.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=273)** Now, let's go one step further and look at how we interpret the beta one coefficient for a categorical predictor.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=281)** This time, let's assume we have a logistic regression model like this one, that models the probability of a customer renting an e-bike as a function of their gender.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=292)** Generally, when we use categorical predictors in regression analysis, the algorithm dummy codes the values of the predictor into binary form as zero and one.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=304)** For example, instead of a categorical variable called gender with values, male and female, we end up with a dichotomous variable with values zero and one.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=314)** Where zero means male and one means female.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=319)** Because the predictor gender is a categorical variable and because the value of the variable is zero for males, we interpret the beta zero coefficient of -0.17 as the log odds of a male customer renting an e-bike.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=337)** To understand the intuition behind this interpretation, simply substitute the value zero for gender in the equation and we end up with -0.17.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=349)** The beta one coefficient of 0.6 is the change in log odds between males and females in terms of renting an e-bike.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=359)** As we came to realize previously, interpreting coefficient in terms of log odds is rather clumsy.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=367)** Let's look at the odds instead.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=370)** If we exponentiate beta zero, we get 0.84.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=376)** This means that according to our model, the odds of a male customer renting an e-bike is 0.84.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=384)** Because this value is less than one, it means that men are less likely than women to rent an e-bike.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=392)** If we exponentiate beta one, we get 1.82.
>
> **[6:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=398)** This means that according to our model, the odds of a female customer renting an e-bike in comparison to a male customer is 1.82 to one.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=409)** In other words, women are 82% more likely to rent an e-bike than men.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=416)** Similar to the interpretation for a continuous predictor, if beta one is positive, then we can infer that being female, which is denoted by X equal to one, increases the probability of renting an e-bike.
>
> **[7:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=432)** Conversely, if beta one were negative, then we would infer that being female would decrease the probability of renting an e-bike.
>
> **[7:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=443)** The inference we make based on probability will always be consistent with that of the odds ratio.
>
> **[7:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=451)** As a result, we often do not attempt to interpret the coefficients in terms of probability.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/interpreting-the-coefficients-of-logistic-regression?u=76281980&t=457)** Odds are enough.

> [!info]- Semantic Content
>
> **Versions:** 0.84 (3), 5.95 (2), 0.12 (2), 1.13 (2), 0.17 (2)
> **Definitions:** is a  (2), in other words (2), means that (2), known as (1)
> **Code Keywords:** let (5), function (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Why and when to use logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=0)** - [Narrator] In order to know when to and when not to use logistic regression, we need to understand its strengths and weaknesses.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=8)** In terms of strengths, similar to other regression methods, logistic regression models are easy to train.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=16)** They do not require hyper parameter tuning.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=19)** Logistic regression models are efficient in that they are not computationally expensive.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=26)** Unlike some other machine learning algorithms, the predictive variables we use to train a logistic regression model do not have to be scaled before being used.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=36)** The predictive value and the coefficients of a logistic regression model are easy to understand and interpret.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=45)** Logistic regression models work best with continuous predictive variables, however they can handle a reasonable number of categorical predictors as well.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=56)** There are some weaknesses inherent in logistic regression models.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=61)** Logistic regression models tend to underperform when there are multiple or non-linear decision boundaries within the data.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=72)** As a parametric model, logistic regression requires that we make assumptions about the form of the data before beginning the modeling process.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=81)** For example, we have to decide which type of regression to use based on the assumed relationship between the predictors and the response variable.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=93)** As a result of the assumptions we make in logistic regression, our model may not be able to capture some of the complex or subtle patterns in the data.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/why-and-when-to-use-logistic-regression?u=76281980&t=104)** Logistic regression is sensitive to outliers and cannot deal with missing data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** similar to (1), for example (1)
> **Code Keywords:** require (1)
> **Speakers:** - [narrator] (1)


### 3. Classifying Data with Logistic Regression

#### How to explore data for logistic regression in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=0)** - [Speaker] Logistic regression is one of the simplest and most commonly used classification approaches in machine learning.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=8)** It is a supervised machine learning approach that allows us to model the relationship between a set of predictors and the probability of a categorical response.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=19)** In this video, you will learn how to import and explore data prior to building a logistic regression model in Python.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=28)** Note that this video is the first in the four video sequence that also teaches you how to prepare data, train a logistic regression model, evaluate the model, and interpret the model in Python.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=43)** I would also like to highlight that the Python packages we use in these four tutorials Pandas, Matplotlib, Seaborn, NumPy and SKLearn have all been pre-installed for you as part of your code spaces environment.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=60)** Let's get started.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=61)** The first thing we're going to do is import our data.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=65)** Before we import our data, we must first import the Pandas package.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=70)** So, I've pre-written that code for you.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=72)** So, let's go ahead and run that cell.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=75)** So, now that we have imported our package, now we can import our data into a data frame called loan.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=81)** So we're going to go ahead and import our data.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=83)** We're going to call the data frame loan, and I'm going to use the read_csv function from Pandas.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=91)** So, I'm going to use the alias PD.read_csv.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=96)** So, I have that here.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=98)** I'm going to specify that the name of the file is loan.csv.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=103)** So, I think everything looks good.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=105)** So, I'm going to run the code.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=107)** To verify that the import worked as expected, let's use the head method of the pandas data frame to preview the data.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=115)** So, our data frame is called loan.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=116)** So, we're going to use, type loan.head, that's the method and let's run that.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=123)** All right.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=124)** So, our dataset has three columns.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=127)** The first two, income and loan amount, are the predictors or independent variables.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=132)** While the last one, default, is the response or dependent variable.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=137)** In this exercise, we're going to use this loans data to train a logistic regression model to predict whether a borrower will default or not default on a new loan based on their income and the amount of money they intend to borrow.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=154)** Now that we have our data, let's go ahead and try to understand it.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=159)** First, let's get a concise summary of the structure of the data by calling the info method of the loan data frame.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=167)** So once again, we start with loan.info Okay, that is the method.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=172)** So, let's run that.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=174)** By looking at the range index value from the summary, we can tell that there are 30 instances or rows in the dataset.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=183)** The data columns, value, which we see here, shows that the dataset consists of three features or columns.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=190)** Looking at a D type column within this section, we see that the income and loan amount columns hold integer values which is int64, while the default column holds text which here is listed as object.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=204)** Next, let's get a summary, some summary statistics for the numeric features in the data.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=210)** This time we're going to use a describe method of the data frame.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=214)** So, we're going to say loan, sorry about that, that's loan.describe.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=223)** So, let's run that.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=226)** So, we don't need this cell.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=228)** I added that mistakenly, so I'm going to delete that cell.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=231)** All right, so from the statistics, we can see the average standard deviation, minimum and maximum values, for both the income and loan amount variables.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=241)** We also get the 25th, 50th and 75th percentile values for both variables.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=247)** Note that the values are in the thousands.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=249)** So, the minimum and maximum income values are $12,000 and $34,000 respectively.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=257)** All right. So, now that we've described our data structurally and numerically with the summary statistics, let's describe our data visually as well.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=267)** So, we're going to start with some box plots.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=270)** So, before we create the plots, we must first import a couple of packages.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=274)** The first is the Matplotlib package and the second is the Seaborn package.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=279)** So, I have pre-written that code for you, as well.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=282)** So, let's run that.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=284)** Okay.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=285)** So, let's start by creating a box plot that highlights the difference in annual income between those that did not default on their loan, which is no, and those that did default on their loan, which is yes.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=297)** So, we're going to call our object ax.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=301)** So, we're going to start with ax, and we're going to use Seaborn, so, the alias is sns.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=306)** So, we're going to start with sns., so we're going to do a box plot, so boxplot, and our data is loan, and within our boxplot function we're going to specify the x as the, x axis will be default, and the y axis, we're going to specify as income.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=334)** Okay, I think we have everything we need.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=336)** So, we have our data as loan, we have our x axis as default, and we have the y axis as income.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=345)** So, let's run that.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=347)** And, let's see what we have here.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=350)** So, the chart shows that those that did not default on their loans tend to have a higher annual income than those that did default on their loans.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=360)** So next, let's create another box plot to highlight the difference in amount borrowed between those that did not default on their loans and those that did.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=371)** So, we're going to do something very similar.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=373)** So, we're going to say ax = sns.boxplot.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=380)** All right. So, our data again is loan.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=385)** Our x is default.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=391)** This time, our y is little different.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=394)** Our y, this time, is loan amount.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=397)** Loan amount.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=400)** All right.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=401)** So, let's make sure we have everything we need.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=402)** So, we have our data as loan, we have x as default and we have y as loan amount.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=409)** Let's run our code.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=412)** All right, so this time around we see that the charge shows that those that defaulted on their loan tend to have borrowed more money than those that did not default.
>
> **[7:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=423)** We can see that from the plot.
>
> **[7:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=425)** Next, let's look at some scatter plots to see what that provides, what insight we can derive from those.
>
> **[7:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=433)** So, if we recode the default feature values, no and yes, to zero and one, we can use a scatter plot to get a slightly different perspective of our data.
>
> **[7:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=443)** So, what we're going to do here, we need the NumPy package.
>
> **[7:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=447)** So, I've pre-written that import for you, as well.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=450)** So, let's go ahead and run that.
>
> **[7:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=452)** So, we're going to import NumPy as np.
>
> **[7:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=455)** Now, we can create a scatter plot that describes the relationship between the annual income of borrowers and loan outcomes.
>
> **[7:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=464)** So, within our code cell, we're going to start again with ax as our object name.
>
> **[7:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=469)** So, we're going to start with sns, and this time around we're going to say scatter plot.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=474)** All right.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=475)** So, here we're going to do something a little different.
>
> **[7:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=478)** We're going to specify the x and say x is equal to the loan, which is the data frame, and we're going to index the income for the income column, right?
>
> **[8:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=488)** So, that's what we're going to specify as our x.
>
> **[8:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=493)** Okay.
>
> **[8:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=494)** So, the next line of code, I am going to type, just let me bring this back here, I am going to type the y, a Y is np.where.
>
> **[8:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=509)** So, because we're going to recode it, so, we're going to say np.where, loan default, which is the column, so, we're going to index for that, when it's equal to no return zero else one.
>
> **[8:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=532)** And, we're going to specify another argument, which we call s, which is going to be the size of the dots in the scatter plot.
>
> **[9:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=541)** So, let's make sure we have everything we need.
>
> **[9:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=543)** So, we're going to say the x is loan, is the income column, y is recoded, is the default column recoded where if the default columns value is no, we recode that as zero, else it should be one.
>
> **[9:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=558)** And we specify the s argument, which is the size of the point in our scatter plot, and we say the size we're going to go for is 150.
>
> **[9:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=568)** So, let's go ahead and run that.
>
> **[9:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=572)** So, now we can see a scatter plot that shows income on the x axis, and on the y axis, we see a recoded set of values for default.
>
> **[9:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=582)** Okay. So, we can also describe this relationship between the amount borrowed and loan outcomes.
>
> **[9:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=587)** So, let's do that as well.
>
> **[9:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=589)** So, ax, So, this is going to be similar, sns.scatterplot.
>
> **[9:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=597)** All right.
>
> **[9:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=598)** So, x equal to loan.
>
> **[10:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=601)** This time we're doing the same thing.
>
> **[10:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=602)** So, we're going to say, actually, this time around we're going to say it's loan amount because the other one was income.
>
> **[10:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=609)** So, we're going to say loan amount as the x axis, on the y, we're going to do the recode just like we did before.
>
> **[10:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=621)** So, where loan default, if default is equal to no, then return zero, return one, and then we're going to specify the s is equal to 150 as well.
>
> **[10:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=645)** So, let's make sure we have everything we need here.
>
> **[10:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=648)** So, we have x equal to loan amount, and then y is recoding the loan, the default column, and no, return zero, else, return one.
>
> **[11:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=660)** I think we're good to go.
>
> **[11:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=661)** So, let's run that.
>
> **[11:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=663)** All right.
>
> **[11:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=664)** So, now we have two scatter plots.
>
> **[11:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=666)** Looking at these two charts, we can easily imagine a sigmoid curve, which we learned about in our tutorial videos earlier that fits the data.
>
> **[11:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=676)** This kind of tells us that the logistic regression function would model the relationship between the predictors, income and loan amount, and the response, default, pretty well.
>
> **[11:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=688)** So, there you have it.
>
> **[11:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=689)** We successfully imported the dataset, then we explored the data structurally, numerically and graphically in order to better understand it.
>
> **[11:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=701)** In the next video I will illustrate how to prepare this data before we can use it to train a logistic regression model.
>
> **[11:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-explore-data-for-logistic-regression-in-python?u=76281980&t=710)** See you on the other side.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), default, (6), function (3), default. (3), delete (1)
> **CLI Commands:** python (3), make (3)
> **Code Identifiers:** read_csv (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** just like (1), imagine (1)
> **Warnings:** note that (2)
> **File Paths:** loan.csv (1)
> **Cross-References:** in the next (1)

#### How to prepare data for logistic regression in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=0)** - [Instructor] In this video, you will learn how to split data into training and test sets prior to training a logistic regression model in Python.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=10)** Note that this video is the second in a four-video sequence that also teaches you how to import and explore data, train a logistic regression model, evaluate the model, and interpret the model in Python.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=24)** If you have not done so, watch the previous video for a detailed explanation of the prior code.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=31)** Before we begin, let's run the code we created in that video to get our environment up to speed.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=39)** So I'm going to go to the top here and click on run all.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=46)** All right.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=47)** So our code is done running the previous code.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=51)** So our primary objective in this step is to split our data into training and test sets.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=58)** The training set will be used to train the model, while the test set will be used to evaluate the model.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=64)** Before we split the data, we first need to separate the dependent variable from the independent variables.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=71)** Let's start by creating a Pandas Series called y for the dependent variable.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=77)** So I'm going to come in here.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=82)** Here I'm going to say y is equal to loan and I'm going to now specify the column I want which is default to create a series.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=93)** Okay? So I'm going to run that.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=95)** All right, then we create a Pandas DataFrame called X for the independent variables.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=103)** So X is equal to loan, this time, we have income, and we also have loan amount.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=118)** Notice that I use the two square brackets because this is a DataFrame, X is a DataFrame and y is a series.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=127)** Next, we import the train_test_split function from the sklearn.model_selection sub-package.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=133)** So I've pre-written this code for you so let's go ahead and run that.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=138)** All right, using the train_test_split function, we can split X and y into X_train, X_test, y_train, and y-test.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=149)** Know that within the train_test_split_function we will set train size to 0.7.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=154)** This means we want 70% of the original data to be assigned the training data, while 30% is assigned to the test data.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=163)** We'll also set stratify as y, which means that we want the data split using a stratified random sampling approach based on the values of y.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=175)** Finally, we're going to set the random state's argument to one, two, three.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=179)** We do this so that we get the same results every time we do this split.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=186)** So let's go ahead and write our code.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=189)** So we're going to get four variables returned from the train_ test_split function.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=193)** So the first is X_train.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=196)** So this holds the independent variables for the training data.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=200)** Then we have X_test, which are the independent variables for the test data.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=206)** We have y_train, so you can imagine, that's the dependent variable for the training data and y_test, which is also the dependent variable for the test data.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=218)** And so this is going to be equal to train_ test_split, and within our function we are going to specify X, specify y.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=233)** We're going to say train_size is equal to 0.7, like we mentioned earlier.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=241)** We're going to specify stratify is equal to y, got it?
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=249)** And random_state is equal to one, two, three.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=254)** Let's make sure we have everything we need in our code before we run it.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=259)** So X, we have y, we have train_size 0.7, we have stratify is equal to y and random_state is equal to 1, 2, 3.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=267)** So let's run our code.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=269)** After the data is split, the newly created X_train and X_test data sets hold the independent variables for the training and test sets, respectively, while the y_train and y_test data sets hold the dependent variable for the training and test sets, respectively.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=286)** We can refer to the shape attribute of any of the newly created data sets to know how many instances or records are in each.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=295)** Let's look at the training data.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=299)** All right, so for our training data we're going to say X_ train.shape.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=308)** So let's run that.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=311)** So the result that we get here, 21 and two, is a tuple that holds a number of rows and columns in the X_train DataFrame.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=319)** It tells us that 21 out of the 30 instances in the loans data were assigned to the training set.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=327)** Let's go to test_set as well.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=328)** So we're going to go and do that same thing here.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=331)** X underscore test.shape, so the shape attribute gives us nine and two.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=339)** So these results tell us that nine out of the 30 instances in the loans data were assigned to the test set.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=349)** Okay?
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=350)** So in this video, we successfully split the historical data into training and test sets.
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=356)** We also verified how many instances or rows are in each set.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=363)** The next step is to train and evaluate our logistic regression model.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=368)** That is what we'll do in the next video.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-prepare-data-for-logistic-regression-in-python?u=76281980&t=371)** See you on other side.

> [!info]- Semantic Content
>
> **Code Identifiers:** y_train (3), train_test_split (2), test_split (2), y_test (2), train_size (2)
> **Code Keywords:** let (9), function (4), finally, (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** python (2), make (1)
> **Versions:** 0.7 (3)
> **Cross-References:** previous video (1), we mentioned (1), in the next (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** imagine (1)

#### How to build a logistic regression model in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=0)** - [Narrator] In this video you will learn how to train a logistic regression model in Python and how to evaluate the model's performance against a test data set.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=11)** Know that this video is a third in a four-video sequence that also teaches you how to import, explore, and prepare data for logistic regression as well as how to interpret the results of a logistic regression model in Python.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=26)** If you have not done so, watch the previous two videos for a detailed explanation of the prior code.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=34)** Before we begin, let's run the code we created in the last two videos to get our environment up to speed.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=42)** So I'm going to go up to the top and click on, 'Run All'.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=49)** Okay, so our previous code is done running.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=53)** So we are going to use the logistic regression class from the SKLearn.linear model sub-package to train our model.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=63)** Let's import this.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=67)** We can now instantiate a new object called classifier from the logistic regression class.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=73)** So we're going to create a new object called 'classifier' and I'm going to say classifier=LogisticRegression.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=83)** That is a class we just imported.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=86)** So let's run that.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=87)** To train a model, we pass the training data, which is X train and Y train, to the fit method of the classifier object.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=97)** So I'm going to call it model = classifier.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=103)** And so classifier.fit, I'm going to call the fit method.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=108)** And within the method we pass two arguments, such as X train and we're going to pass Y train as well.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=117)** Okay, I think we're good to go.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=119)** So let's run that.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=121)** So recall that there are nine instances, or rows in the test set.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=126)** To predict labels for the test instances, we pass the independent variables of the test set, which is X test to the predict method of the model, the model we just trained.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=138)** So let's go in here and say model.predict and we're going to pass to it X_test.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=150)** So let's run that.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=153)** So the output list of predictions made by the model in the order in which the instances appear in the test set.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=160)** So you can see that what we have here is an array an umpire array that has yes, yes, yes, and then no, based on the prediction.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=168)** To evaluate how accurate our model is, we pass the test data, which is X test and Y test to the score method of the model.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=178)** So let's come down here and say model.score.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=183)** So within this method, we're going to pass x_test and we're also going to pass y_test.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=192)** The result tells us that our logistic regression model is able to correctly predict eight out of nine, or 89% of the labels in the test set.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=205)** The accuracy of a model only gives us a one-dimensional perspective of performance.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=210)** To get a broader perspective, we need to generate a confusion, or error matrix, of the model's performance.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=219)** To do this, we need to import the confusion matrix function from the SKLearn.metrics sub-package.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=226)** So let's run that again.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=228)** Then we pass the dependent variable from the test set, which are the actual labels, and the models predicted labels to the confusion matrix function.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=238)** So let's type in confusion_matrix.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=241)** That's the function that we want to run.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=243)** And we're going to pass through it Y test and the model's prediction.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=249)** So model.predict, and going to say X_test, okay?
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=256)** So make sure we have everything we need.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=257)** So confusion matrix, the first argument is Y_test, the actual labels and then the second argument are the predicted labels.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=266)** So let's run that.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=268)** And we get an array.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=270)** So the array we get is a 2X2 array that shows how many instances the model predicted correctly, or incorrectly, as either yes or no.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=281)** So to make things easier to look at, I created a little visual, a little table illustration of the confusion matrix.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=290)** So looking at the illustration, we see that the first row of the matrix shows that of the four instances that were actually 'no', the model predicted three of them as 'no', but one of them as 'yes'.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=303)** The second row of the matrix shows that of the five instances that were actually 'yes', the model predicted all five correctly as 'yes'.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=315)** So now that we've successfully trained and evaluated a logistic regression model, the next step is to interpret the model.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=324)** In the next video, I illustrate how to do exactly that.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-build-a-logistic-regression-model-in-python?u=76281980&t=330)** See you on the other side.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (10), function (3), import, (1), this. (1)
> **CLI Commands:** python (2), make (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** x_test (1), y_test (1), confusion_matrix (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### How to interpret a logistic regression model in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=0)** - In this video, you will learn how to interpret the coefficients of a logistic regression model in Python.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=7)** Know that this video is the fourth in a four video sequence that also teaches you how to import, explore, and prepare data for logistic regression as well as how to train and evaluate a logistic regression model in Python.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=24)** If you have not done so, watch the previous three videos for a detailed explanation of the prior code.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=32)** Before we begin, let's run the code we created in the last three videos to get our environment up to speed.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=40)** So I'm going to go up to the menu and click on Run All.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=45)** All right, so now that we've built a logistic regression model, and evaluated the performance of the model on the test data, we can now interpret the model's output.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=57)** Specifically, the model coefficients.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=60)** The relationship between the dependent and independent variables in the logistic regression model is generally represented as follows: So we have here the logit as a linear combination of the predictors.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=74)** In this representation, the left hand side of the equation is known as a logit, or the log odds of the probability of an outcome or Class P.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=83)** Beta 0 is the intercept.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=87)** Beta 1 to beta N are the coefficients of the independent variables X1 to Xn.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=94)** To get the intercept, or beta zero, we refer to the intercept underscore attributes of our model.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=101)** So let's go ahead and get that.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=104)** So our model is called 'model.'
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=107)** And we get the intercepts underscore attributes.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=111)** Okay, so let's run that.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=115)** So we get 15.467.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=119)** To get the other model coefficients, Beta 1 and beta 2, we refer to the coef underscore attributes of our model.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=127)** So model dot coef underscore.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=131)** So let's run that.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=134)** Okay. The model coefficients correspond to the order in which the independent variables are listed in the training data.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=141)** So the first one there corresponds to income, and the second corresponds to loan amount.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=146)** This means that the equation for our logistic regression model can be written as shown here.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=152)** To make our coefficients easier to work with, let's convert them from a two-dimensional array to a one-dimensional array, and round the values to two decimal places.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=166)** So we're going to say log odds.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=171)** We're going to say np dot round.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=172)** So numpy dot round.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=174)** I'm going to use a round function from numpy.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=177)** And I get the model dot coef.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=180)** And so for the model dot coef, notice that what we had before was a two-dimensional array.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=186)** So I'm just going to index the first dimension and I'm going to round two decimal places, and I'm going to output this so we can see what our data looks like.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=198)** Okay, so log odds.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=199)** Good to go.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=201)** So now, we have the same thing that we had before with a little bit cleaner.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=206)** So we now have a one-dimensional array, and our values are rounded.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=210)** So the first one is negative 1.02, and the second is 0.15.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=217)** So next, let's create a pandas DataFrame using the coefficient values and the column names from the training data as row indexes.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=227)** So we're going to create a pandas DataFrame.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=229)** So pd.DataFrame.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=231)** I'm going to use a DataFrame constructive function.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=235)** So within the function, I'm going to pass a few things.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=238)** So the first is, I'm going to specify a dictionary where I'm going to say 'log odds.'
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=246)** In here I'm going to say that's going to be equal to log of odds.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=250)** So the value that we had from our previous cell.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=255)** And then we're going to say the index, which is the row index is going to be the column names from X.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=265)** Okay, so make sure we have everything we need here.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=268)** So we have our DataFrame constructive function.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=271)** We specify the values.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=273)** Log odds is column.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=275)** And I'm going to use the log odds values that we created in the previous code cell.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=279)** And in the index or the roll column names I'm going to use X dot columns value for those values.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=286)** And so now we have this.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=288)** So the first coefficient tells us that when all other variables are held constant, right, it's the income one, a $1 increase in the borrowers income decreases the log odds that they will default on their loan by 1.02.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=306)** Likewise, the second coefficient tells us that a $1 increase in the amount a customer borrows increases the log odds that they will default on their loan by 0.15 when all other variables are held constant.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=321)** As we discussed, in the tutorial videos, interpreting the coefficients in terms of log odds is a bit confusing.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=329)** A more intuitive approach would be to look at them in terms of odds.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=335)** To get to odds, we need to exponentiate the coefficients so we can interpret our results in terms of odds instead.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=343)** So let's do something similar here.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=345)** So we're going to first of all create the odds.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=348)** So I'm going to say odds is equal to np dot round.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=354)** And I'm now going to use np dot exp function to exponentiate our log odds from our previous calculation and I'm going to round to two decimal places.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=366)** Okay, so now I'm going to use the pd.DataFrame constructive function just like we did before.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=373)** I am going to specify the column odds.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=380)** The value would be odds, and then I am going to specify that the index should be X, sorry, X dot columns.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=392)** All right, so make sure we have everything we need.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=395)** So the first line, we convert our log odds to odds exponentiating, and then we also round it.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=402)** And in the second line of code we use a DataFrame constructive function from pandas to create a new DataFrame.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=409)** So our results are more pleasant to look at.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=413)** So let's run our code.
>
> **[6:55](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=415)** All right, so we have something similar, but this time around our results are in odds.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=420)** So the first coefficient tells us that for every $1 increase in a borrower's income, the odds that they will default on their loan reduces by 64%, which is one minus 0.36.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=435)** When all other variables are held constant.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=438)** Earning more money decreases the odds of default.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=442)** The second coefficient tells us that assuming all other variables are held constant, for every dollar increase in the amount borrowed, the odds that a borrower will default on their loan increases by 16%.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=457)** This time it's 1.16 minus one.
>
> **[7:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=461)** Borrowing more money increases the odds of default.
>
> **[7:46](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=466)** We can also interpret the second coefficient as saying that for every dollar increase in the amount borrowed, the odds that a borrower will default on their loan increases by a factor of 1.16, assuming all other variables are held constant.
>
> **[8:04](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=484)** There you have it.
>
> **[8:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=485)** You've successfully, in Python, import historical loan data.
>
> **[8:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=491)** You've explored the data both numerically and graphically.
>
> **[8:16](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=496)** You prepared the data.
>
> **[8:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=498)** Trained and evaluated a logistic regression model using the data.
>
> **[8:24](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/how-to-interpret-a-logistic-regression-model-in-python?u=76281980&t=504)** And now you've learned how to interpret the coefficients of the model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (7), default. (2), import, (1), pass (1)
> **Versions:** 1.02 (2), 0.15 (2), 1.16 (2), 15.467 (1), 0.36 (1)
> **CLI Commands:** python (3), make (3)
> **Definitions:** known as (1), is called (1), means that (1), is a  (1)
> **Cross-References:** in the last (1), we discussed (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=0)** - [Frederick] Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=2)** You now know what linear regression, Poisson regression, and logistic regression are.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=9)** You've learned how logistic regression works, how it makes predictions, how to interpret its coefficients, and when to use it.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=18)** You also know how to import, explore, and prepare data for logistic regression in Python.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=26)** Finally, you learned how to train, evaluate, and interpret a logistic regression model in Python.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=34)** The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=44)** Specifically, it should serve as a launching pad for solving more complex supervised machine learning problems using logistic regression.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=56)** Here are a few recommended next steps.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=59)** Logistic regression is one of many supervised machine learning models you can build in Python.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=65)** I encourage you to continue to explore other LinkedIn Learning courses that illustrate the use of different types of machine learning models.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=74)** As a starting point, you can check out my other courses in the Machine Learning with Python series on LinkedIn Learning.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=82)** Besides courses that explore other models, I also encourage you to explore LinkedIn Learning courses that help you understand some of the issues around algorithmic bias and fairness in AI.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=96)** An example of such a course is [[Foundations Of Responsible Ai]].
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=101)** If you are interested in broadening your skillset into other languages such as R, then also check out my book Practical Machine Learning in R.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=112)** Finally, I recommend that you continue to practice what you've learned.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=117)** Find new problems to solve, find interest in datasets on which to practice your new skills.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=125)** The journey into the world of machine learning with Python is a lifelong one.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=131)** Thanks for coming along with me on this journey.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-with-python-logistic-regression/next-steps?u=76281980&t=134)** I'll see you next time.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (2)
> **Code Keywords:** continue (3), finally, (2), import, (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [frederick] (1)


## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- Decision Trees]] | **3 of 6** | [[Machine Learning with Python- k-Means Clustering]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning with Python- Association Rules]] | **4 of 9** | [[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]] →

### In [[Machine Learning with Python Professional Certificate by Anaconda]]
← [[Machine Learning with Python- Decision Trees]] | **4 of 6** | [[Machine Learning with Python- k-Means Clustering]] →

## Part of

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Appears In

- [[Develop with Python for AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]
- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Artificial Intelligence (AI), Machine Learning, Logistic Regression
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)