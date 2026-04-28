---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-data-analysis-24296803
url: "https://www.linkedin.com/learning/python-data-analysis-24296803"
duration_minutes: 223
duration: 3h 43m
level: Intermediate
updated: 1/9/2025
learners: 101584
skills:
  - Python (Programming Language)
  - Data Analysis
  - Statistical Data Analysis
exercise_files: true
github: "https://github.com/LinkedInLearning/complete-guide-to-python-data-analysis-4571000/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Data Analysis Skills]]'
  - '[[Advance Your Python Skills for Data Science]]'
prev_courses:
  - '[[Using Tableau to Discover Powerful Business Insights]]'
  - '[[Data Science Foundations- Python Scientific Stack -CoderPad-]]'
next_courses:
  - '[[Data Science Foundations- Data Mining in R]]'
  - '[[More Python Tips, Tricks, and Techniques for Data Science]]'
path_nav: '[{"path":"Develop Your Data Analysis Skills","position":5,"total":10,"prev":"Using Tableau to Discover Powerful Business Insights","next":"Data Science Foundations- Data Mining in R"},{"path":"Advance Your Python Skills for Data Science","position":4,"total":6,"prev":"Data Science Foundations- Python Scientific Stack -CoderPad-","next":"More Python Tips, Tricks, and Techniques for Data Science"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
  - skill/statistical-data-analysis
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20Data%20Analysis.md)

![Python Data Analysis](https://media.licdn.com/dms/image/v2/D4D0DAQGSYAIAZElfSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733965184177?e=2147483647&amp;v=beta&amp;t=OXv45ZLLtcgntIsvH0mJG8ztMyetqZ0fUfscSXvDt50)

# Python Data Analysis

> Data science has transformed the way that government and industry leaders look at both specific problems and the world at large. Curious about how data analysis works in practice? In this course, instructor Michele Vallisneri explains what it takes to get started with data science using Python. Michele demonstrates how to set up your analysis environment and provides a refresher on the basics of w

> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803) | 3h 43m | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (5 videos)
- **2. 1. Python Data Structures** (5 videos)
- **3. 2. Project: Finding Anagrams** (4 videos)
- **4. 3. NumPy** (5 videos)
- **5. 4. Project: Weather Data** (6 videos)
- **6. 5. pandas** (5 videos)
- **7. 6. Project: Baby Names** (5 videos)
- **8. 7. Importing and Wrangling Data with pandas** (6 videos)
- **9. 8. Summarizing and Visualizing Data** (5 videos)
- **10. 9. Introduction to Data Modeling** (6 videos)
- **11. 10. Project: COVID-19 Data** (4 videos)
- **12. Conclusion** (1 videos)

### 1. Introduction

#### From data to insight with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=0)** - [Instructor] Python is an excellent tool for data analysis because it's friendly, pragmatic, and powerful.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=6)** But what I like the most about Python is that it can be a lot of fun.
>
> **[0:10](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=10)** Whether you're interested in data analysis for work, school, or for your own personal interest, Python can make it enjoyable.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=18)** We will start this course by looking at tools for data analysis with three rapid tutorials, each followed by a practical project.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=26)** We will review Python data structures and their manipulation in the core language.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=30)** Then we will switch to the three typical phases of a data analysis project, importing and wrangling data to prepare for your analysis, summarizing and visualizing to explore and understand the dataset, and building statistical models to explain the data.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=48)** Hi, I'm Michele Vallisneri.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/from-data-to-insight-with-python?u=76281980&t=51)** Let's get started with a complete guide to Python data analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), make (1)
> **Code Keywords:** switch (1), let (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before you take this course, you'll want to have a basic working knowledge of programming in Python.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=7)** Although we will review the aspects of Python that are essential to any data analysis task, I will not teach you every feature that we will need.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=15)** It will also be helpful to have an understanding of basic mathematical and statistical concepts, such as logic operations, functions, averages, minima and maxima, and so on.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=28)** In the future, as you move from basic data analysis into data science, you will need a deeper knowledge of mathematics and statistics and a familiarity with the particular field that you are studying.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=39)** However, a strong programming foundation and being able to rely on a robust tool such as Python will make it easier for you to learn mathematics and statistics, not just by studying and reading, but also by practical experimentation.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=54)** Nowadays, in addition to many resources on the web and in the literature, you can rely on assistance from large language models.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=62)** They seem to know a lot about programming and even about data analysis libraries.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=67)** I encourage you to take full advantage of them.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/what-you-need-to-know?u=76281980&t=71)** However, the basic knowledge and context that you will learn here will help you ask the right questions and identify cases where the neural network is just making things up.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### What is new in this update
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=0)** - [Instructor] The first part of this course, which covers the core language NumPy and pandas, is an update to my Python data analysis course, and it reflects the most recent changes and improvements in the core language and in the libraries.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=14)** The second part of this course is entirely you.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=16)** It is based on my real-world experience in analyzing data, and it covers the typical workflow of data analysis in Python.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=24)** In addition, this updated course was created using GitHub Codespaces where you have all that you need to experiment without complex installation or tools on your computer.
>
> **[0:34](https://www.linkedin.com/learning/python-data-analysis-24296803/what-is-new-in-this-update?u=76281980&t=34)** I have also created five CoderPad interactive challenges in which you will be able to demonstrate your new skills on the same data sets that we analyzed.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Set up: Using Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=0)** - [Instructor] The exercise files for this course are collected in a GitHub repository organized by chapter.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=8)** You can clone the Git repository or download the files to your computer using the code button.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=14)** From that same button, you can also start an online codespace, a full development environment hosted in the cloud.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=23)** That's what I recommend you do to follow along with this course.
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=27)** Here, I have one going already named Glorious Winner, but I'll create a new one.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=33)** If you're not logged into GitHub yet, you will be prompted to log in or create a free GitHub account.
>
> **[0:41](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=41)** And the first time you open a codespace, it will take a few minutes to set up.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=48)** You now have control over a virtual Linux machine in the cloud, which connects to an instance of Microsoft Visual Studio Code in your browser.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=58)** This is a powerful editor and programming environment.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=62)** This virtual machine is pre-installed with the Python distributions with all the packages that we need.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=67)** The editor is preloaded with extensions that will help our work in Python.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=73)** Let me close the terminal at the bottom and focus on the files in Explorer on the left.
>
> **[1:18](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=78)** These are all our exercise files organized by chapter, along with all the data files that we will analyze.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=86)** To follow along with each video, you will click on the corresponding Jupyter Notebook file.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=92)** The notebook opens in the editor on the right, and it is prefilled with the code that we will be running organized in cells.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=101)** Before I can run code, I need to select a Python executable kernel on the top right.
>
> **[1:48](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=108)** In this course, we will always use the default Python 3.12.
>
> **[1:55](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=115)** To select the cell, I click into it, or I use the arrows to go up and down within the notebook.
>
> **[2:03](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=123)** To run the code in a cell, I hit Shift + Return on the keyboard.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=128)** The cell output will appear just below it.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=131)** Jupyter Notebook will happily display figures as well as text.
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=138)** Some cells may take a few seconds to run, but they're usually pretty fast.
>
> **[2:23](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=143)** To edit the content of a cell, I select it, then hit Return.
>
> **[2:29](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=149)** We'll mouse click inside the cell.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=151)** Then I can edit its content and run it again.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=158)** The notebook is automatically saved with your code and the resulting output.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=163)** You can learn more about using notebooks in many tutorials on the web.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=167)** The completed folder within each directory holds the completing notebooks in the state that we have after we've gone through them in each video.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=176)** If you should happen to close this browser window, don't worry.
>
> **[3:01](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=181)** The codespace is automatically saved in the cloud and you can get it back from the repository.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=188)** You can also restart the codespace from here if you return to the course after a pause.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=195)** GitHub codespaces work on mobile devices, but if you can, I recommend that you practice along with this course on a laptop or desktop computer.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=206)** If you wish to create your own copy of the repository, you can do so by forking the repository on the top right of the GitHub screen.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=214)** Then if you start a codespace from the fork, you'll be able to commit the changes that you make in the codespace.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=221)** For that, you'd use the Source Control tab.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=227)** You're, of course, free to download the code and use your own Python installation instead.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/set-up-using-codespaces?u=76281980&t=233)** In that case, you will need to install all the packages listed in the requirements.txt file within the repository.

> [!info]- Semantic Content
>
> **Tools:** github (5), jupyter (2), visual studio (1), terminal (1)
> **CLI Commands:** python (5), git (1), make (1)
> **Exercise Files:** exercise files (2), download the (2)
> **Code Keywords:** let (1), return. (1), case, (1)
> **UI Navigation:** click on (1), select the (1)
> **Prerequisites:** set up (1), install (1)
> **File Paths:** requirements.txt (1)
> **Versions:** python 3 (1)

#### CoderPad challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=14)** The challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=30)** The code challenge has four areas: Instructions in the top left.
>
> **[0:34](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=34)** A code editor for your answer in the top right.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=37)** Another code editor where you see how your code is used in the bottom right.
>
> **[0:41](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=41)** And a console for output in the bottom left.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=44)** You can use these drag handles to allocate space as you like.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=51)** To get even more horizontal space, you can collapse the course's table of contents on the left.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=57)** A challenge has instructions that include the description of what you need to do with the parameters and desired results.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=65)** Here we are told that we need to find the largest number in the list and we need to provide the function find_largest, that takes a list, as discussed in the parameters, and returns the maximum, as discussed in the result.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=79)** You create your answer in the top right code editor.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=82)** There are comments in the starting code showing where to put your solution.
>
> **[1:28](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=88)** We can just use the built-in function max.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=92)** When you click Test my code, you see a message indicating whether your code return the correct result.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=97)** Here it did.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=100)** But if your code is not successful, you can ask for help.
>
> **[1:46](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=106)** The show_expected_result and show_hints variables determine whether you see the expected result.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=117)** And possibly some hints.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=120)** Changes variables to control the output.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/coderpad-challenges?u=76281980&t=124)** Good luck with the challenges in this course.

> [!info]- Semantic Content
>
> **Code Identifiers:** find_largest (1), show_expected_result (1), show_hints (1)
> **Code Keywords:** function (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Python Data Structures

#### Warmup with Python loops
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=0)** - [Instructor] We begin every video by importing the standard set of Python modules that we will need throughout this course.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=7)** This cell does that, so we execute it by selecting it with a cursor and pressing Shift + Return.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=15)** If you've written computer code before, you must be familiar with loops.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=19)** They occur in many different computing problems, and they allow us to automate repetitive operations.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=25)** They're also a good topic to start a quick review of the Python code language.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=29)** We see loops in a concrete example.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=32)** Consider a combinatorial problem of breaking $1 U.S.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=36)** into all possible combinations of coins.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=39)** For instance, four quarters, two quarters and five 10 cent dimes, and so on.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=45)** Now, if we have to add coins up to $1, we can use at most $1 coin, two 50 cent coins, four quarters, and so on.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=56)** We can also mix different values.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=60)** You can already see how we're going to need several nested loops to figure out all the combinations.
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=66)** We start with a very simple-minded strategy.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=68)** For each face value, we enumerate all possible quantities, zero to one $1 coins, zero to two half dollar coins, and so on.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=79)** So we'll need six nested loops.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=82)** Luckily, Python will keep track of them.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=85)** The basic structure of a loop in Python is for variable in iterable.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=92)** We follow that with a block of code that we are repeating with a variable taking on the values provided by the iterable.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=100)** But what is an iterable?
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=101)** We can think of it as a black box that keeps providing new values until it runs out.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=107)** A simple example is a Python list.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=111)** Perhaps the most commonly used iterable is range, which provides integer values from a start value to an end value, exclusive of the end value.
>
> **[2:01](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=121)** This means that range 0 to 10 counts from zero to nine.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=128)** There are many reasons for this convention.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=130)** For instance, by looking at the end value, we see immediately the total number of elements, in this case, 10.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=137)** In the end, we just have to accept this as one of the building assumptions of the language.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=142)** Range has a couple more interesting features.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=145)** If we omit the start value, it is assumed to be zero.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=150)** And also we can provide a step argument to move through the range in increments larger than one.
>
> **[2:37](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=157)** When we do that, we also need to specify the initial value to avoid confusion.
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=162)** Let's go back to our dollar and build out our nested loops.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=167)** We need from zero to one $1 coins, which means that the first range object will be range two.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=174)** We write it here as 1 + 1.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=177)** We then proceed with other coins, one loop for each.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=180)** Each nested loop is indented with respect to its parent.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=184)** We do this with a tab.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=188)** Inside the innermost loop, we will check whether the total amount is $1.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=193)** If so, we had the combination to a list, which we initialize as the empty list.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=199)** So let's try this out.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=206)** Very good.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=207)** The first few combinations seem to check out fine.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=210)** It turns out that there are 293 ways to get $1 out of change.
>
> **[3:36](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=216)** This is the solution to the problem that we post.
>
> **[3:40](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=220)** However, in this analysis, it often happens that the solution raises a new question.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=224)** For instance, how many ways to make $2 out of change, or three?
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=229)** Does the number of combination increase linearly or quadratically?
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=233)** What we need to do is to take the code we wrote and generalize it to answer those questions.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=240)** Before we do so, we make a couple of changes to our code to make it faster and easier to generalize.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=247)** This is an example of refactoring.
>
> **[4:10](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=250)** The first change is that we will not loop by count, but by value using the step argument.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=258)** For instance, instead of the loop over quarters from zero through four, we will loop over the values.
>
> **[4:28](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=268)** The second change is to recognize that we don't actually need the innermost loop.
>
> **[4:33](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=273)** As long as the total up to that point is less or equal $1, then we can always make up the difference with pennies.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=281)** So we write one fewer loop.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=286)** This looks all right.
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=288)** We're almost done.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=289)** Now we can take our code and make it into a function find_combinations by replacing the value 100 everywhere with a variable argument.
>
> **[4:59](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=299)** We also wrap our computation with def and return statements as appropriate for a function.
>
> **[5:07](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=307)** So let's see how we can make 2 and $3.
>
> **[5:12](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=312)** You may be curious to know how fast this number grows.
>
> **[5:16](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=316)** A Matplotlib plot should give us an idea.
>
> **[5:22](https://www.linkedin.com/learning/python-data-analysis-24296803/warmup-with-python-loops?u=76281980&t=322)** In fact, this number grows approximately as the fifth power of the total value.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), python (5)
> **Code Keywords:** let (3), function (2), return. (1), case, (1)
> **Definitions:** is an  (2), means that (2), is a  (1)
> **Analogies:** for instance (4), think of it as (1)
> **Code Identifiers:** find_combinations (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Tuples, lists, and the slicing syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=0)** - [Instructor] That was a good warmup about loops.
>
> **[0:02](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=2)** We now move on to review lists and tuples, which are perhaps the quintessential Python data structures.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=9)** They're very useful on their own, but they're also foundational for data science because they set the standard interface for accessing elements and ranges of elements, but they're all in an index.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=19)** Python calls that slicing.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=22)** The same interface is used in NumPy, the most important Python library to manipulate large amounts of numerical data.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=30)** So about lists, as you know, they provide a way to store an arbitrary number of Python objects, such as strings, floating point numbers, other lists, or any other object, and to access them using a numerical index.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=44)** In Python, lists are denoted by brackets, and their elements are separated by commas For instance, the tree of nephews from the Disney universe.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=56)** The length of a list is obtained with len.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=61)** The empty list is written with an empty set of brackets, and obviously it has length zero.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=69)** Individual list elements can be accessed by index, starting with zero for the first element and ending at the length of the list minus one.
>
> **[1:20](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=80)** For instance, the first nephew is Huey, so the last nephew would be at index two.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=89)** If we look beyond the end of the list, we get an error.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=95)** We can also index from the end, starting at minus one and going back.
>
> **[1:42](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=102)** The last nephew is Louie, and the penultimate nephew is Dewey.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=110)** This bracket indexing notation can also be used to reassign elements.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=114)** Let's do it for all these ducks with a simple loop.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=120)** An important point is that lists do not need to have homogeneous content, such as all strings or all numbers.
>
> **[2:07](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=127)** We can mix it up.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=129)** We can have a list consisting of a number, another list, and a string.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=136)** We can verify that an element exists in a list using the in operator.
>
> **[2:23](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=143)** Huey alone does not belong in nephews, but Huey Duck does.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=150)** To add a single element at the end of a list, we use append.
>
> **[2:34](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=154)** You see that here, we're using Python in an object-oriented way by accessing a method, specifically append, of the list object.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=163)** It sounds sophisticated, but it's actually very natural.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=167)** To add multiple elements in one go, we use extend.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=174)** To concatenate two lists, we use a plus.
>
> **[3:01](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=181)** Last, we can insert elements at any position in a list using the insert method.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=189)** We have seen how to build up lists, now let's break them down.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=192)** We can delete elements either by their index, with del.
>
> **[3:18](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=198)** So we took out Scrooge, or by their value, with remove, and so we took out Uncle Donald.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=209)** We may want our list sorted, and we can do this in place modifying an existing list with sort, or we can make a new sorted list out of an existing one with sorted.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=227)** This demonstrates also how to sort backwards.
>
> **[3:51](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=231)** It's very easy to loop over a list.
>
> **[3:54](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=234)** We don't even need indices for that.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=238)** Moving on to slices.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=240)** Beyond working with individual list elements, we can manipulate them in contiguous groups.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=245)** We'll take a numerical example, the first few squares of the natural numbers.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=251)** The convention to select the slice in Python is the same as for loops.
>
> **[4:15](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=255)** The first index is included, the last is not.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=259)** It pays to imagine that the indices sit on the edges of the elements.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=265)** So if we want the first two squares, we'd write a slice that goes from zero to two.
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=272)** There are a few more tricks and shortcuts that we can use in slicing.
>
> **[4:35](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=275)** We can omit the starting index to start at the beginning.
>
> **[4:39](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=279)** We can omit the ending index to include elements to the end.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=284)** We can omit both to get a copy of the entire list.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=289)** We can move through the indices in steps.
>
> **[4:53](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=293)** And finally, we can use negative indices to count from the end.
>
> **[4:59](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=299)** One last trick is reversing a list using a negative step.
>
> **[5:05](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=305)** We also use slices to reassign a subset of items or to delete them.
>
> **[5:15](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=315)** At this point, I think I've ruined my list of squares.
>
> **[5:18](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=318)** Now for tuples, which look like lists, but with parenthesis instead of brackets.
>
> **[5:26](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=326)** Tuples are sometimes described as immutable versions of lists.
>
> **[5:30](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=330)** Once a tuple is defined, we cannot modify its element, so add new ones.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=334)** This is a feature, not a bug.
>
> **[5:35](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=335)** It ensures the integrity and makes it possible to use tuples as keys in dictionaries or indices.
>
> **[5:42](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=342)** Nevertheless, we can perform the same indexing and slicing tricks as for lists, just not assignment.
>
> **[5:51](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=351)** One context in which one sees tuples often in Python is triple unpacking, where Python statements or expressions are automatically evaluated in parallel over a tuple.
>
> **[6:01](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=361)** For instance, we assign multiple variables at once.
>
> **[6:06](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=366)** And the parenthesis can even be omitted when there's no room for ambiguity.
>
> **[6:11](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=371)** Tuples appear also when we iterate over multiple variables at once.
>
> **[6:15](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=375)** For example, using the enumerate iterator, which lets us loop over list index and list elements together.
>
> **[6:23](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=383)** One final useful trick is unpacking a tuple to pass it to a function that requires multiple arguments.
>
> **[6:32](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=392)** That's done with an asterisk.
>
> **[6:35](https://www.linkedin.com/learning/python-data-analysis-24296803/tuples-lists-and-the-slicing-syntax?u=76281980&t=395)** Conversely, the asterisk or star operator can also be used to define functions with a variable number of arguments which then are collected into a single tuple.

> [!info]- Semantic Content
>
> **CLI Commands:** python (9), make (1)
> **Code Keywords:** interface (2), let (2), delete (2), finally, (1), pass (1)
> **Analogies:** for instance (3), such as (2), imagine (1), for example (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Dictionaries and sets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=0)** - [Instructor] The other super important data structure in Python is the dictionary or dict.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=5)** While lists and tuples give us a way to retrieve values by their numerical index, dictionaries associate values to unique keys.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=14)** Dicts are written with curly braces separating items with commas.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=20)** Each item is given as key colon value.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=24)** For instance, here are the capitals of some of my favorite countries.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=29)** The length of a dictionary is obtained with len, and the empty dictionary is denoted by empty braces.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=37)** Just as we do with lists, values are accessed with a bracket notation, but instead of a number, we're going to use a key, which is usually a string.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=46)** The same notation can be used to add items to a dictionary.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=52)** Trying to access a non-existent item results in a key error.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=57)** To avoid that, we can check beforehand whether an item exists in a dictionary using the in operator.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=65)** Combined two dictionaries, we can unpack them within the same braces using the double star unpacking operator, which works in a similar way to the star operator for lists.
>
> **[1:18](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=78)** If keys are repeated, the last one is used.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=82)** We can also update a dict in place using another dict.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=86)** Similarly to lists, we can delete items by key.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=92)** In fact, keys do not need to be strings.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=95)** Any Python object that is hashable may be used as a name.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=99)** Hashable means that Python can convert the object to a number.
>
> **[1:43](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=103)** That's true for strings, numbers, and tuples, but not for lists.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=112)** We can see the internal representation of the keys with hash.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=118)** Looping over a dictionary is very similar to looping over a list.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=122)** However, there are three different kinds of loops you may want to write.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=125)** Over keys, over values, and over both together.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=130)** The pairs are known as items.
>
> **[2:13](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=133)** The most straightforward syntax loops over the keys, but we can also write this more explicitly.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=141)** Here are the keys of this dictionary.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=144)** This is a special iterable object, much like range, which can however be turned into a list.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=151)** The other two dict looping constructs are over values or over keys and values together using tuple unpacking.
>
> **[2:41](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=161)** Values and items are also special iterable objects.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=169)** Beginning in Python 3.6 for the C Python interpreter and Python 3.7 for the very language, the order of insertion is preserved for dicts.
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=178)** This means that when we loop over keys or items, we get them in the order in which we originally inserted them.
>
> **[3:05](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=185)** That's not the case in previous version of Python.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=188)** So the standard library defined a special object, ordereddict, to preserve the order.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=192)** That's not necessary now.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=195)** There is, however, another specialized dictionary data structure that is very useful.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=199)** That is the defaultdict, which you set up to return a default value instead of an error when an item has not been set.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=209)** Our default will be, I don't know.
>
> **[3:32](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=212)** Now let me add the original capitals into this object and demonstrate that, what's the capital of Canada?
>
> **[3:40](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=220)** I don't know.
>
> **[3:42](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=222)** Dicts are very important in Python since they underlie many aspects of the language itself, such as the methods and attributes of classes which are stored internally in dicts.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=233)** And the interface by which we access dict values using keys is also adopted in the Python data analysis library Pandas, so it's good to be familiar with it.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=244)** Last, I want to mention sets.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=247)** You can think of them as bags of items.
>
> **[4:10](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=250)** These can be of any immutable types and they're never duplicated.
>
> **[4:16](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=256)** So adding Africa twice does nothing.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=260)** You can check if an item exists in a set.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/dictionaries-and-sets?u=76281980&t=264)** You can add an item, you can remove it, and you can loop over a set, but there's no indexing.

> [!info]- Semantic Content
>
> **CLI Commands:** python (9)
> **Code Keywords:** super (1), delete (1), let (1), interface (1)
> **Definitions:** means that (2), known as (1), is a  (1)
> **Versions:** python 3 (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Comprehensions
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=0)** - [Instructor] When working with data in Python, there are many cases when we want to iterate over a list or dict, perform an operation on every element, and then collect all the results into a new list or dict.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=12)** We can certainly do that with a for loop.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=15)** For instance, we can compute the first 10 squares, starting with an empty list, and adding elements to the list in the body of the loop.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=24)** But we can do better. We can be more Pythonic.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=28)** Python offers a great feature comprehensions that lets us write shorter, more easily readable code.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=35)** In essence, the comprehension will be a compressed version of the for loop.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=40)** Let's go through the steps.
>
> **[0:43](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=43)** We want a list, so we have brackets.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=46)** In front, we have the body of the loop, the square.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=50)** In the back, we write the looping construct for variable in iterable.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=58)** Here, it's a range.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=61)** The result is the same as writing out the loop, but we managed to express the same meaning in a very readable and very efficient way.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=70)** We can also filter the list of elements that we are creating, adding an if close.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=77)** For instance, we may want to collect only the squares that are divisible by four.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=83)** Again, quick and readable.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=86)** In Python 3, comprehensions largely replace the map and filter built-in functions, which are important in so-called functional languages, but did not really belong in Python.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=98)** The syntax for a dictionary comprehension is also rather intuitive.
>
> **[1:43](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=103)** For instance, let's create a dictionary that will get us the square of an integer from the integer itself.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=109)** It's a dictionary, so we need braces.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=112)** In front, we have the key colon value pair.
>
> **[1:56](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=116)** In the back, the looping construct.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=119)** We can also add an if close if we want, but I don't need one here.
>
> **[2:06](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=126)** Dict comprehensions are sometimes used to transpose an existing dict.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=130)** Let's go back to our capitals, which we wrote as a dictionary index by country.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=136)** Here's the transpose.
>
> **[2:20](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=140)** Countries indexed by capital.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=144)** Sometimes you see a naked comprehension with the body and loop without the brackets.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=150)** That's called a generator expression, and it's useful to generate a sequence and immediately consume the elements one by one without ever storing them in a list or dict.
>
> **[2:41](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=161)** For instance, to take the sum of the first 10 squares, we may write the interior part of our earlier list comprehension and feed it directly to the Python built-in sum.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=173)** Doing this saves memory and time, which is important if you deal with large amounts of data.
>
> **[2:59](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=179)** Comprehensions are incredibly useful when we manipulate lists, dicts, and sets of data.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=186)** Here's a summary of their syntax.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=189)** In addition to lists and dicts, you can also use them for sets and tuples.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=195)** Once you start taking advantage of comprehensions, you're now going to stop.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=199)** You start doing all sorts of acrobatics, such as nested comprehensions to make a list of lists, which you can think of as a matrix, or a single comprehension with nested loops to flatten the matrix into a list.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=218)** The only difference is that we have only one set of brackets.
>
> **[3:43](https://www.linkedin.com/learning/python-data-analysis-24296803/comprehensions?u=76281980&t=223)** Nowadays, comprehensions are a key part of the core Python language.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (1)
> **Analogies:** for instance (4), such as (1)
> **Code Keywords:** let (3)
> **Versions:** python 3 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Data classes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=0)** - [Instructor] Let us look at Python data structures from the perspective of a data scientist or a data analyst.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=7)** What are the options to store tabular data, such as a table of famous people with their names and birthdays?
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=17)** A list of Python dicts is certainly a possibility.
>
> **[0:21](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=21)** It's easy to access the columns by the key and to query the rows using comprehensions.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=30)** For instance, famous people with a birthday on July 15.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=35)** Another possibility are tuples, or even better, the namedtuples from the collections module in the Python starter library.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=44)** With these, we create a specialized tuple that associates labels with columns.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=51)** The syntax to create a person is intuitive.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=58)** We can also meet the labels.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=61)** The columns can be accessed with a dot notation of Python object attributes.
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=66)** Although regular tuple indices would also work.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=71)** We can convert these tuples from and to a dictionary using ** unpacking, and the namedtuple method asdict.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=83)** If you're wondering about the underscore is there to avoid confusion in case you really want to use asdict as a label.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=91)** Python 3.7 introduced an alternative to tuples and dicts for storing records, dataclasses, in the module dataclasses.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=101)** In a dataclass, we list the fields in order and specify their type, such as int or string.
>
> **[1:48](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=108)** We can also provide a default value.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=112)** This is how we would set up a person record with name, last name, and birthday.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=119)** The syntax to initialize a dataclass is intuitive and we can either use or omit the labels.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=128)** As with tuples, we access fields by name.
>
> **[2:13](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=133)** So far, this is very similar to namedtuple, however, dataclass is a full Python class, so we can define methods that operate on the fields, just as we do in any Python class.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=145)** The first compulsory variable in a method refers to the particular instance of the class.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=150)** For instance, a person.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=153)** Let's do methods that return a person's full name by combining name and last name, and that provide a prettier printout.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=167)** Let's see them in operation.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=173)** Dataclasses have a number of other useful features, such as freezing, so that fields cannot be changed, sorting, which works by comparing fields in their order or with a custom comparison function, and special computed fields.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=191)** Here, I encourage you to stop the video for a moment and experiment in your notebook with this variance.
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=202)** One thing that we have not seen is how the type of a field, such as string, is used with dataclasses.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=209)** In fact, by default, it's not.
>
> **[3:32](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=212)** But it is made available to third-party packages, for instance, to validate data entry.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=218)** An excellent package for that purpose is Pydantic.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=224)** To use it, we replace the standard dataclass decorator with its equivalent in Pydantic.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=232)** We also write a custom validator for the birthday, which we'll try to convert it to a Python datetime object, and raise an exception if that's not possible.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=244)** Here are two examples of failed validation.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=249)** Pydantic is a very sophisticated and powerful package with many features.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=253)** It's also compatible with many data analysis and data science packages.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=258)** If your project requires substantial data validation, it'll pay to dig into Pydantic.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-24296803/data-classes?u=76281980&t=265)** This completes our overview of basic data structures in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (2), class. (2), type, (1), class, (1)
> **CLI Commands:** python (9)
> **Analogies:** such as (4), for instance (3), similar to (1)
> **Definitions:** is a  (2), refers to (1)
> **Versions:** python 3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Project: Finding Anagrams

#### Overview: Finding anagrams
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=0)** - [Instructor] In chapter one, we have reviewed Python loops, data containers, and comprehensions.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=6)** We will get some practice with these elements of the core language in a simple, practical project, finding anagrams in the English dictionary.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=14)** As you know, two words are anagrams of each other when their letters can be rearranged to turn one word into the other.
>
> **[0:21](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=21)** For instance, stop can be anagrammed into post, spot, tops, pots, and opts.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=29)** We'll use this simple strategy.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=32)** We define the signature of a word as the sorted list of its letters including duplicates.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=39)** So the signature of Python would be hnopty.
>
> **[0:43](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=43)** Two words are anagrams of each other if they have the same signature.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=48)** Thus, we are going to make a Python dict of all the words in a dictionary indexed by the signature.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=54)** Looking up if a word has an anagram would then be as simple as computing its signature and looking it up in the dict.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-finding-anagrams?u=76281980&t=61)** Let's begin.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1)
> **Code Keywords:** let (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Loading dictionaries from text files
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=0)** - [Instructor] We begin by loading a dictionary from a file.
>
> **[0:03](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=3)** The repository contains the 1934 English dictionary that is distributed with many Unix systems.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=9)** We will load it into a list.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=12)** In Python, we talk of idioms when we think of code constructs that have become the preferred way to achieve a certain goal.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=18)** One example is looping through all the lines of the text files.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=22)** For that, we open the file for reading and use the file as a notable in a for loop, which has the result of giving us the lines one by one.
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=31)** For the moment, we will just collect all the lines into a list.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=36)** We get more than 200,000 words.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=39)** Let's look at the first 10.
>
> **[0:41](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=41)** Very good.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=42)** I do see two problems, though, every word ends in the new line character, and also some words are capitalized, which will interfere with our signature scheme.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=52)** We can fix both issues using Python string methods.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=56)** To strip leading and trailing white space, including new lines, we can apply strip.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=62)** And to switch the entire string to lowercase, we use the method lower.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=68)** We now have something more interesting to do in the body of the loop.
>
> **[1:14](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=74)** Ah, I do see a duplicate, which comes from the A appearing both in uppercase and lowercase.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=81)** One way to get rid of that is to build not a list, but a set.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=86)** So once again, we iterate through the file, but we replace the initial empty list with an empty set, and we replace the method append with add.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=99)** Given that the body of the loop is just one line, we can do it more idiomatically with a comprehension.
>
> **[1:48](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=108)** Finally, to get the list in alphabetical order, we can just wrap the set in the Python built-in sorted.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=117)** We are now ready to make anagrams.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=120)** By the way, if you want to try a different language, such as French, you just need the right dictionary.
>
> **[2:07](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=127)** Now, Python strings are natively Unicode, meaning that they can handle international character sets transparently.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=135)** We need some accents for the French language.
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=138)** The characters are encoded internally using multiple bytes, either one, two, or four, as needed.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=145)** The only care that we need to take is to tell Python which encoding to use for the files we read and write.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=151)** The Unicode standard includes multiple encodings that map character sets to their representations in bytes.
>
> **[2:39](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=159)** We just need to know the right one.
>
> **[2:41](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=161)** The most common are UTF-8 and UTF-16, but a few legacy encodings are also useful.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=169)** And indeed, the French dictionary included in your exercise files was written using ISO 8859, known also as Latin-1.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-dictionaries-from-text-files?u=76281980&t=177)** So all we need to do is to tell Python to open the file with that Latin-1 encoding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), make (1)
> **Code Keywords:** let (1), switch (1), finally, (1)
> **Env Vars:** utf (2), iso (1)
> **UI Navigation:** open the (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Finding anagrams
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=0)** - [Narrator] We pick up our project where we left it In the last video.
>
> **[0:03](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=3)** We have made a sorted list of lowercase words.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=7)** Now remember our strategy of comparing signatures.
>
> **[0:10](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=10)** A signature is the sorted list of the component letters.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=14)** We need a function to make signatures.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=19)** Taking again, the string aaron as an example, let's see what happens if we sort it, which we can do with a built-in sorted.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=25)** We get a sorted list of the letters.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=28)** We can use this as a signature to verify, say that Elvis lives.
>
> **[0:34](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=34)** Or at least it lives, as anagram of Elvis.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=38)** Unfortunately, David Bowie does not.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=42)** For convenience, we will collate the list of characters back into a single signature string.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=48)** The way this is achieved in Python looks a little strange.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=51)** Since we need to call a method join on the string that specifies the connector.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=60)** The connector that we want is really the empty string.
>
> **[1:03](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=63)** (keyboard clatters) Finally, we make a function that performs this operation in general, and not just on aaron.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=72)** Our strategy is based on building a python dictionary of words indexed by signatures.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=77)** That is the keys will be signatures, and the values will be sets of words.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=82)** We'll call it words_by_signature.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=86)** We can make it with loop.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=91)** This works fine, but we should improve on this awkward and repetitious code.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=96)** The problem is that if a signatory is not already in the dictionary, then we need to create a set with a single word.
>
> **[1:42](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=102)** But if it is there, we need to add a new word to the existing set.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=107)** We can avoid this complication by using a default dict that will automatically initialize a signature with an empty set.
>
> **[1:55](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=115)** The argument to default dict must be a function that makes the default value.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=119)** We call it a factory sometimes.
>
> **[2:01](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=121)** So in this case, set will do.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=124)** If you call it without parameters, you just get the empty set.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=129)** Perfect. This code is much nicer.
>
> **[2:14](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=134)** We can save some memory and CPU by removing all signatures that correspond to a single word.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=141)** Every word is an anagram of itself, but that's not very interesting.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=145)** A dict comprehension will do the job.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=148)** Remember to iterate on both key and value, we use dict items.
>
> **[2:34](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=154)** And we use an if clause to select the non-trivial anagram set.
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=162)** So finding the anagrams of python is as simple as looking for its signature in our dictionary.
>
> **[2:50](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=170)** We can do this with a simple function. Works fine.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=176)** What about my name? Nothing.
>
> **[2:59](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=179)** I didn't really expect one.
>
> **[3:02](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=182)** But perhaps we shouldn't get an error when no anagram is found.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=186)** How about we just return the empty set?
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=189)** We can do that by catching the exception and doing otherwise.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=195)** (keyboard clicks) That works fine.
>
> **[3:18](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=198)** Now that we have set up this machinery, there are many interesting investigations we could do.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=203)** For instance, we could find the longest anagrams, which we get by sorting the signatures by length.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=209)** We can use sorted, but we need to tell it to sort by length, not alphabetical order, and to reverse the result.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=219)** We can wrap this list into comprehension to see the actual anagrams.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=225)** The longest have 22 letters.
>
> **[3:48](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=228)** Looking at this list, I must say that these are all compound medical words that are not very creative.
>
> **[3:54](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=234)** They really mean the same thing.
>
> **[3:59](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=239)** How about the set of anagrams with the most words?
>
> **[4:03](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=243)** For this, we sort the dict values instead of the keys.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=246)** The two longest groups have 10 elements, though some of these words are not easily recognizable.
>
> **[4:15](https://www.linkedin.com/learning/python-data-analysis-24296803/finding-anagrams?u=76281980&t=255)** Well done.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), finally, (1), case, (1), this, (1)
> **CLI Commands:** make (3), python (3), find (1)
> **Code Identifiers:** words_by_signature (1)
> **Env Vars:** cpu (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### Solution: Find palindromes
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=0)** - [Instructor] We need to find all palindromes of length seven or above in the dictionary.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=6)** We know that two palindromes will also be anagrams, so we loop over all sets of anagrams, which we find in the anagrams_by_signature input.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=17)** One way to consider all pairs of words is to use itertools.combinations.
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=27)** To test if the words are palindromes we can just reverse the order of one of them and check for equality.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=38)** Then we make a list of the palindromes we found.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=44)** Remember that we need to return sets, hence the braces.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=50)** Let's try this out.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=54)** Hmm, what's wrong?
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=57)** I see, I forgot to check the length.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-find-palindromes?u=76281980&t=65)** Perfect.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** anagrams_by_signature (1)
> **Speakers:** - [instructor] (1)


### 4. 3. NumPy

#### NumPy overview
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=0)** - [Instructor] In this chapter, we introduce NumPy, a powerful library that supports large multidimensional arrays with a vast collection of mathematical functions to operate on them efficiently.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=12)** NumPy is a fundamental part of the Python ecosystem, and it provides the foundation for many data analysis and numerical libraries in applications, including SciPy for mathematics, Matplotlib for plotting, pandas and statsmodels for statistics, scikit-learn for machine learning, and scikit-image for image processing.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=33)** NumPy is also crucial in interfacing with compiled code in C, C++, or Fortran.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=40)** In addition, if you learn NumPy, you will be able to use deep learning frameworks such as PyTorch and JAX, which share the same array interface, as well as specialized array libraries that are interoperable with NumPy.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=54)** For instance, CuPy to work with arrays on fast GPUs, Dask to spread arrays across computers, Xarray for arrays with labels, and by PyData/Sparse for sparse arrays with many zeros and efficient memory layout.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=70)** So let's talk about how NumPy arrays are different from Python containers.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=75)** Python variables are often described as labels.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=79)** They are not little copies in computer memory ready to receive a value.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=83)** Rather, the values are independent objects with their own space and memory, and Python variables are just names associated with the values.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=92)** So you can have more than one variable referring to the same object.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=96)** This mechanism is very flexible, and it makes it possible to have lists and dictionaries with heterogeneous elements.
>
> **[1:43](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=103)** In fact, you can think of a list as a numbered sequence of labels.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=107)** However, this scheme is not very efficient when we need to deal with many values of the same type.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=114)** In that case, you want to reserve space in memory and store all the values side by side, and that's exactly what a NumPy array is.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=122)** Organizing data in this way is both faster and more memory efficient, and it's also necessary to interface Python with other languages such as C or Fortran, which count on data being laid out in memory in this fashion.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=135)** Here I'm showing you a schematic representing one dimensional and two dimensional NumPy arrays.
>
> **[2:20](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=140)** The actual data items sit side by side in memory, and they all have the same size.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=145)** We identify them by one index in the case of a one dimensional array, two indices for a two dimensional array, and so on.
>
> **[2:34](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=154)** The index ranges from zero to N minus one, where N is the dimension of the array.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=160)** In the case of a two dimensional array, the dimension, of course, can be different.
>
> **[2:44](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=164)** Since, as we said, all the data items in an array need to have the same size, NumPy needs to be precise about identifying data types, in fact, more precise than Python.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=177)** While Python has just one type of integer and one type of floating point number, NumPy has several.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=184)** NumPy identifies different types of integers depending on the number of bits that each of them takes up in memory, int8, int16, int32, int64.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=195)** The most common of these is int64.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=199)** There are also unsigned versions of these integers.
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=202)** As for floating point numbers, we have float16, 32, 64, and on some platforms, float128.
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=211)** The most common floating point type is float64, a double precision floating point number, which is also the same as a standard Python float.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=221)** There are other more specialized types such as booleans, true or false, bytes, unicode strings, void, which is used for record arrays, and object, which is an effective pointer to arbitrary Python objects.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=236)** The underscores in their names are there to differentiate the types from the python built-in types.
>
> **[4:03](https://www.linkedin.com/learning/python-data-analysis-24296803/numpy-overview?u=76281980&t=243)** So let's see NumPy arrays in action.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10)
> **Code Keywords:** interface (2), let (2), type. (1), case, (1)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** jax (1)
> **Speakers:** - [instructor] (1)

#### Creating NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=0)** - [Instructor] Let's get started with NumPy arrays.
>
> **[0:03](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=3)** The easiest way to get one is to load it from a file.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=6)** NumPy recognizes several file formats.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=9)** These include, of course, simple text files.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=12)** I have prepared one for you that describes a very well known lady.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=15)** The file is called monalisa.txt.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=18)** Let's have a look at its contents.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=22)** So we see that each line is a sequence of integers and we have 200 lines all together.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=29)** NumPy will load this file without any trouble.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=33)** The result is a two-dimensional array.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=36)** When we display it, NumPy omits some rows and columns so it fits on the screen.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=42)** We can query this object for the number of dimensions.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=46)** Two, since it's an array.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=48)** For the shape, 200 by 134.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=51)** For the total number of elements and the number of bytes in memory.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=58)** And for the type of the array elements.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=61)** An eight byte floating point number.
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=66)** Okay, so clearly this is an image and we can use the matplotlib function imshow to display a two dimensional and NumPy array as an image.
>
> **[1:18](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=78)** Although we should probably use a better color map, gray scale.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=83)** I have also prepared a color version of the painting and I have saved it in NumPy's native binary format, which works across platforms.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=92)** Let's load it up.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=95)** The NumPy comment is np.load as opposed to load text.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=101)** This is now a 3D array, where the last dimension is used to store red, green, and blue components.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=109)** Imshow understands this without any problem.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=114)** Now that we know how to load a NumPy array, how about making one ourselves?
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=120)** This sway is from a Python list or a nested list of lists.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=125)** NumPy automatically sets a data type that can fit all the elements that we provide.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=132)** The shape is three by three and the D type is int64.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=137)** Another common operation is creating an empty array.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=141)** Let's do a one-dimensional array, a vector.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=144)** We use NumPy zeros with the shape and the data type.
>
> **[2:29](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=149)** D is a shorthand for an eight byte float.
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=152)** We can also do a two-dimensional array, a matrix, by giving the shape eight by eight is a tuple.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=160)** Here we give the data type more explicitly as flow64, but it's really the same thing.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=167)** All the array metadata are as expected.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=173)** It is sometimes useful to make an array of zeros in the shape of another existing array, using zeros like.
>
> **[3:01](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=181)** Otherwise, we can make an empty array.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=184)** Here, the memory is allocated but not initialized, so we may get some random looking values or sometimes just zeros.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=195)** We can also create an array of regularly spaced numbers.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=199)** For that, we use np.linspace and specify the extreme, for instance, zero and one, as well as the total number of elements.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=208)** We can't show a 1D array as an image, but we can certainly plot it with matplotlib.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=214)** I will use a thick marker specified by lowercase o.
>
> **[3:40](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=220)** Another way to make a regularly spaced array is with arange, an extension of Python range that is not limited to integers.
>
> **[3:48](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=228)** Know that the end of the range is still excluded just as it would be in range.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=235)** NumPy can also give us arrays of random numbers.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=238)** We just need to specify the shape.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=241)** By default, we get numbers uniformly distributed between zero and one.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=247)** Matplotlib can show us that this looks suitably random.
>
> **[4:12](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=252)** The np.random submodule offers a lot more, for instance, randomrandint, to get integers in a specified range.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=260)** Or random.standard_normal to get normally distributed numbers.
>
> **[4:26](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=266)** It's always good to show those with a simple matplotlib histogram.
>
> **[4:31](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=271)** To close this video, let me show you how to save an array to file.
>
> **[4:35](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=275)** Np.save will create a cross-platform binary file.
>
> **[4:39](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=279)** The file ending is conventionally NPY, but it doesn't need to be.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=285)** On the other hand, savetxt will create a readable ASCII table.
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=291)** It's all there.
>
> **[4:53](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=293)** I'll leave you with a one page cheat sheet covering creating arrays from files out of zeros and from random numbers.
>
> **[5:02](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=302)** The cheat sheets from this chapter are collected in the document numpy.pdf in your exercise files.
>
> **[5:09](https://www.linkedin.com/learning/python-data-analysis-24296803/creating-numpy-arrays?u=76281980&t=309)** But of course there are many good tutorials about NumPy on the web and the official documentation is also excellent.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), include, (1), function (1), type. (1), default, (1)
> **Definitions:** is a  (4), is called (1), is an  (1)
> **CLI Commands:** make (3), python (2)
> **Env Vars:** npy (1), ascii (1)
> **Analogies:** for instance (2)
> **File Paths:** monalisa.txt (1)
> **Code Identifiers:** standard_normal (1)
> **Exercise Files:** exercise files (1)

#### Indexing NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=0)** - [Instructor] Let's see how we can access individual elements and ranges of elements in NumPy.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=6)** We will demonstrate on our good old friend Mona Lisa.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=9)** So I will start by loading that array.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=13)** This is a three dimensional NumPy array with dimensions that correspond to height 1,198 pixels with 804 pixels and color, the red, green, and blue components.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=29)** The syntax to get an individual pixel is just an extension of Python list indexing, except that we include multiple indices among brackets.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=39)** For instance, a point roughly in the middle would be on row 600 and column 400, and we'll grab the red component.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=48)** Since version two of NumPy, the D type of the element is displayed explicitly.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=53)** Here, it's an eight bit integer.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=56)** It's usually possible to use these values interchangeably with Python objects.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=61)** Should you want to convert the NumPy number to a standard python object, you can do it with the constructor's int and float.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=71)** Back to the picture.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=72)** If we wish to look at pixels at the bottom right corner, we may count back from the boundary of the array just as we would do for a list.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=81)** This will be the same as computing the actual indices.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=85)** If we try to index elements beyond the boundaries, we get an index error as we should, and of course, we can use indexing to assign values to the elements.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=98)** Once you get used to multi-indexing, you have the temptation of trying it on nested Python lists, but it doesn't work there.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=105)** Let me demonstrate with a very uninspired list.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=110)** Yes, that doesn't work.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=112)** To work with a list of lists, we first need to extract an entire row, and then the element from that.
>
> **[2:01](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=121)** Slicing also works in a very similar way to Python lists.
>
> **[2:06](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=126)** For instance, we could grab a section in the middle of the painting.
>
> **[2:13](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=133)** We can omit either the starting or the ending index that will default to the beginning or the end respectively.
>
> **[2:20](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=140)** To grab the entire range across the dimension, we use a lonely colon.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=145)** There is an even shorter hand for multiple food slices.
>
> **[2:29](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=149)** The lips is sign.
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=152)** We can also specify a step such as every 20th pixel.
>
> **[2:36](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=156)** This of course, reduces the resolution of the picture.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=160)** Now, see the black dot in the middle?
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=162)** It's there because earlier we assign zero to all three color channels for pixel 600, 400.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=169)** That single pixel was invisible at high resolution, but it's one of those selected by the slice with steps of 20.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=176)** How about slicing backwards?
>
> **[3:01](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=181)** That works too and creates a reflection.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=184)** If we mix slicing and indexing, we reduce the emotionality of the array.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=191)** This is a single row.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=193)** Since this is now a vector, a one dimensional array, we can't show it as an image, but we can still plot it.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=201)** It's quite random looking.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=203)** Note that fixing one of the indices is not the same thing as asking for a slice of one, which will preserve that dimension.
>
> **[3:35](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=215)** Slicing can also be used on the left side of an assignment statement.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=219)** We can do that to modify elements in bulk and kind of deface our painting.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=226)** Here, I assign the same value to all array elements in this slice, but I can also set them with another array of the right shape.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=233)** Instead of boring gray, we'll make some noise.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=240)** NumPy arrays support also an especially useful form of indexing that is not available with lists.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=245)** This is known as fancy indexing.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=247)** That is, using arrays to index other arrays.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=251)** To demonstrate, let me grab my low resolution grayscale Mona Lisa.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=260)** I'm going to threshold this image by zeroing out all the pixels with gray values darker than approximately 50%.
>
> **[4:27](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=267)** So first I need to figure out which ones they are.
>
> **[4:31](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=271)** The result of this condition is a two dimensional Boolean array with the same size as monalisa_bw.
>
> **[4:38](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=278)** I use this Boolean array to select the dark pixels alone and modify only those.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=286)** So here's the thresholded image.
>
> **[4:50](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=290)** Finally, I want to point out another very important difference between lists and NumPy arrays.
>
> **[4:56](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=296)** Whenever you slice a list, you are making a copy of it.
>
> **[5:02](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=302)** Say, I have a simple list of six elements.
>
> **[5:05](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=305)** I take a slice of the first four.
>
> **[5:07](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=307)** Now, assigning to the slice does not modify the original list.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=314)** By contrast, a slice of a NumPy array is a new array object that points to the same area of memory with modified bookkeeping to represent the different boundaries.
>
> **[5:25](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=325)** So if I modify the slice, say, to make it darker, here's my slice.
>
> **[5:33](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=333)** A vertical segment from 300 to 500.
>
> **[5:38](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=338)** Here's making it darker by dividing all the color values by three.
>
> **[5:45](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=345)** And here's the original image showing that modifying the slice also affected the original memory area.
>
> **[5:53](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=353)** If you want a true copy instead, pointing to new memory, which can be modified without effect in the original, you have to make that copy explicitly.
>
> **[6:04](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=364)** Also, fancy indexing will also create a new array with independent memory.
>
> **[6:11](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=371)** Again, here's a quick cheat sheet on slicing and number.
>
> **[6:16](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-numpy-arrays?u=76281980&t=376)** As you see, it starts the same as vital lists, but adds the complication of multiple dimensions and the powerful idea of fancy indexing using other arrays.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), make (3)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Analogies:** for instance (2), picture (2), such as (1)
> **Code Keywords:** let (3), finally, (1)
> **Code Identifiers:** monalisa_bw (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Doing math with NumPy arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=0)** - [Instructor] NumPy is very good at math.
>
> **[0:03](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=3)** While interpreted languages such as Python have a reputation of being slow, we can do math very fast in Python as long as we write code that operates on entire arrays.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=13)** That's because the loops that are needed to perform math over the array are then implemented in compiled C within the NumPy library.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=22)** So how do we do math with arrays?
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=23)** Let's start by creating a one-dimensional vector of equally spaced real values between say, zero and five times pi.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=32)** We wish to compute the sine of all those values.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=35)** The regular function in the math library, one, two.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=40)** Instead, we use the NumPy function of the same name.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=47)** The result is another NumPy array with the same shape as X.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=55)** Here's a plot.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=57)** NumPy has a function for pretty much everything you can find in the standard math library.
>
> **[1:04](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=64)** The NumPy functions are known as universal functions, and they operate element-wise across entire arrays.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=71)** They include arithmetics, logical operations, trigonometry, hyperbolic functions, exponentials and logarithms, checking for infinity and for not a number, rounding, and much more.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=86)** We created a plot of a function by giving two vectors to matplotlib so that it would use one for the x-axis and one for the y-axis.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=96)** The Y range was set automatically.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=99)** By repeating the plot statement, we can show multiple functions together.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=104)** Matplotlib will automatically cycle through colors so that we can distinguish the curves.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=109)** So let's try our sine together with a cosine in a logarithm.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=117)** To see which is which we add labels and request a legend.
>
> **[2:03](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=123)** There are many more options in matplotlib regarding the style of the lines and the formatting of the plot.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=128)** We'll see more in the rest of this course, and you can look up many examples and docs online.
>
> **[2:14](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=134)** We can also perform operations that involve more than one array.
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=138)** Everything goes smoothly if we match array shapes.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=145)** By contrast, operations between arrays of different shapes will generally fail.
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=152)** NumPy doesn't know what to do.
>
> **[2:34](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=154)** There is one important exception, which is known as broadcasting.
>
> **[2:39](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=159)** With broadcasting, NumPy tries to make sense of operations between arrays of different dimensions.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=166)** The simplest case, which is rather intuitive, is adding a single number to an entire array, which adds it to every element.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=174)** So we would say that the addition of the number is broadcast through the array.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=180)** To make an example in two-dimensions, we'll use our friend Mona Lisa again.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=186)** The image is 200 rows by 134 columns.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=190)** I can multiply every column by a different number by making a vector of length 134.
>
> **[3:17](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=197)** In this case, NumPy matches the second dimension of the array with a single dimension of the vector, broadcasting the values along the rows.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=208)** My vector will be a gradient that modifies the luminosity of the columns across the image.
>
> **[3:37](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=217)** Let's see the images side by side.
>
> **[3:40](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=220)** Here I've used matplotlib's subplot to make a one by two arrangement.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=226)** What about the other way around?
>
> **[3:48](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=228)** If I make a vector of length 200, you'd think we could apply it on the left to multiply every row by a single value, but that does not work.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=240)** What happens with broadcasting is that NumPy matches array shapes starting from the last dimension on the right, expanding missing dimensions into size of one, and broadcasting along all dimensions of size one.
>
> **[4:15](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=255)** So to match the rows of the image with those of the gradient, we need the y grad to have shape 201, which we can do with the slicing syntax and with NumPy new axis.
>
> **[4:30](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=270)** So we turn the vector into a two-dimensional array.
>
> **[4:34](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=274)** Now, NumPy can broadcast along the second dimension and apply the same multiplication along each row.
>
> **[4:42](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=282)** Since Python version 3.5, Python includes a special matrix multiplication operator, which is the @ symbol.
>
> **[4:50](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=290)** It is put to good use by NumPy.
>
> **[4:53](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=293)** In fact, it means different things for different array shapes.
>
> **[4:57](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=297)** For two vectors of the same size, it returns the top product.
>
> **[5:02](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=302)** Whereas the standard multiplication sign would perform an element by element product.
>
> **[5:08](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=308)** The @ symbol can also denote a matrix by vector product.
>
> **[5:13](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=313)** Here, a two by three array multiplying a three vector.
>
> **[5:18](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=318)** The @ symbol can also denote matrix by matrix multiplication.
>
> **[5:24](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=324)** NumPy supports many other useful operations, including manipulations to reshape and combine arrays, statistical operations, linear algebra, logical operations, sorting, searching, counting, and fast Fourier transforms.
>
> **[5:40](https://www.linkedin.com/learning/python-data-analysis-24296803/doing-math-with-numpy-arrays?u=76281980&t=340)** We see some of them in action in the weather data project and in the rest of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (4), find (1)
> **Code Keywords:** function (4), let (3), case, (2)
> **Definitions:** known as (2)
> **Versions:** version 3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Special arrays: Records and dates
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=0)** - [Instructor] In the last video for this chapter, I want to show you two NumPy features that are not always covered in tutorials but are still very useful.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=8)** The first is record arrays, which allow us to mix different data types and give descriptive names to fields.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=15)** We see a much more powerful version of this in the Pandas library, but sometimes it's good to use it within NumPy.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=23)** The other feature is datetime objects, which as the name says, can encode a date and a time.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=30)** I will load a simple example of a record array, which I have saved in the NumPy format.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=38)** This is a partial David Bowie discography.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=40)** Each entry shows a record's name, date of release, and top rank in the UK charts.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=47)** The data type is a list, which shows the name and D type of each field.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=52)** For title, it's U32, which denotes a Unicode string of length 32.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=58)** For release date, it's M8D, which denotes a NumPy datetime object with the precision of a day.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=67)** There's an eight because the datetime objects are eight bytes.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=71)** Finally, the top rank is an eight byte integer.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=75)** Oh, and if you're wondering about the less than symbols, those refer to the endianness of the data types, the order in which the bytes are stored in memory.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=85)** A less than sign denotes little endian numbers.
>
> **[1:30](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=90)** This table, which you can also find in the NumPy cheat sheet, shows the most common NumPy data types, their memory usage, and the data type string.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=100)** Do remember that in NumPy, all strings have fixed length and that assigning a longer string than the defined length will truncate it.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=109)** We'll cover the datetime and timedelta D types in a moment.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=114)** But back to David Bowie and record arrays.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=117)** We could also load his discography from a text file.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=122)** That takes a little more work because we have to specify the D type of every field as well as the field delimiter.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=129)** Here, it's a comma.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=132)** But the result is the same.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=135)** So once we have a record array, what can we do?
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=138)** Each record looks like a Python tuple, and we can extract or modify the elements as we would for a tuple using two indices.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=147)** But we can also use the dictionary interface using field names.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=153)** Using the field names on the entire array will give us a view of a column.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=158)** To create a record array in Python code, we have to provide the data records as tuples, and we need to be careful about describing the data types.
>
> **[2:48](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=168)** For a discography, it would look like this.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=171)** Now, for dates and times in NumPy.
>
> **[2:55](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=175)** The D type that we need is called datetime64, to avoid confusion with the datetime object in the Python standard library and to remind us that each element takes 64 bits.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=187)** We initialize datetime objects from strings, and we can give as much detail as we want.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=193)** The string format is ISO A601, which goes from larger to smaller units.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=199)** That is from year to month to day, and so on.
>
> **[3:25](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=205)** So here are three dates of increasing precision.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=209)** We can also create a NumPy datetime from a standard library datetime object.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=214)** We specify a granularity of D to avoid setting the time at exactly midnight.
>
> **[3:40](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=220)** The Python datetime module has a lot of functionality that can be useful before we bring data into NumPy.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=226)** For instance, if we need to pass a generic string format, we can do so by specifying the format itself.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=235)** NumPy datetime objects can be compared, and they can be subtracted, resulting in a time delta object.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=244)** Here it's specified in minutes.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=247)** The nice thing about these datetime64 objects is that they work across NumPy.
>
> **[4:12](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=252)** For instance, we can use the NumPy function diff, which computes the difference between successive array elements to see how long it took David to come up with each new record.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=264)** It seems that 'Ziggy Stardust' was especially quick.
>
> **[4:29](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=269)** Another example of using standard NumPy functions with datetime64 is making a range of date.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=276)** Consistently with the usual convention in Python, the last day in the range is excluded.
>
> **[4:43](https://www.linkedin.com/learning/python-data-analysis-24296803/special-arrays-records-and-dates?u=76281980&t=283)** This completes a quick overview of NumPy.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (1)
> **Code Keywords:** finally, (1), interface (1), this. (1), module (1), pass (1)
> **Env Vars:** u32 (1), m8d (1), iso (1), a601 (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** for instance (2)
> **Cross-References:** in the last (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Project: Weather Data

#### Overview: Analyzing weather
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=0)** - [Instructor] In this chapter, we are going to experiment with NumPy on a real world use case, analyzing weather data from NOAA, the National Oceanic and Atmosphere Administration.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=13)** The GHCN Daily is an integrated database of daily climate summaries from land surface stations across the globe.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=23)** Summaries in this case means variables, such as the minimum and maximum temperatures, the total precipitation, and so on.
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=31)** Digging through the portal, we find the location of the data files.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=37)** From here, we will download the station list and use it to locate data for a station.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=42)** We will load data, fill missing values, and smooth time series.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-weather?u=76281980&t=47)** Finally, we will create a visualization of daily temperatures inspired by the "New York Times" weather plots.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), finally, (1)
> **Env Vars:** noaa (1), ghcn (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Loading station and temperature data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=0)** - [Instructor] Before loading the data, it's always a good idea to start by looking at the documentation.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=5)** Browsing through the file listing at the noaa repository we see a readme.txt.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=11)** We'll start there.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=13)** The readme file is also included in this chapters directory.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=17)** It describes the content of the repository, the format of the weather data files, which have an ending DLY, and which contain data for a single station formatted with fixed width columns.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=36)** Lots of detail here.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=42)** Next, the readme file describes the format of a file ghcnd stations.txt.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=49)** That gives us the location, elevation, and ID for each station in the network.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=54)** We'll start with this station's database.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=61)** For your reference, I have copied the description of the files format into this notebook.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=67)** To load a fixed width text file such as this, we can use numpy genfromtext.
>
> **[1:14](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=74)** It needs rather precise information.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=77)** We specify the width of each field in the parameter delimiter.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=81)** We can direct the widths from the table above, but we need to increase them to include the spaces between columns.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=87)** Next, we provide names for each column and we specify the D type of each column.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=94)** We'll need a string of 11 characters, three double precision floats, and a few more strings.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=101)** And last, with auto strip, we instruct numpy to remove leading and trailing spaces from all the strings it passes.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=110)** The result of running his is a numpy record array with more than a hundred thousand entries.
>
> **[1:56](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=116)** Thankfully, numpy shows us only a few lines at the top and bottom.
>
> **[2:01](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=121)** By plotting longitude against latitude, we get an idea of the impressive global coverage of the database.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=128)** We need to make the dots small so that they are not too crowded.
>
> **[2:13](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=133)** Even so, the US and Europe are just masses of ink or colored pixels.
>
> **[2:19](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=139)** How about stations in California?
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=142)** We can use fancy indexing with a boolean condition to downselect our dataset.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=150)** Coverage is still impressive.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=153)** What if we need a specific station?
>
> **[2:36](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=156)** Fancy indexing, again, comes to the rescue.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=158)** We select all stations for which it is true that the name field equals Pasadena.
>
> **[2:45](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=165)** There's only one.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=167)** There must be more stations whose name begins with Pasadena.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=171)** We can find them using the string function starts with which in numpy sits without string functions in the submodule numpy.char.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=180)** So there are several.
>
> **[3:01](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=181)** We will stay with the first station that we found for Pasadena, which belongs to the HCN network and is likely to have more data.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=189)** I've copied the Pasadena file into this repository.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=193)** So let's have a look at the first few lines.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=196)** It's rather messy, but we recognize the station ID at the beginning of each line, followed by year and month, the name of an element, such as a minimum or maximum temperature, and 31 data points, one for each day of the month.
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=211)** Each data point consists of a value and a flag which we will mostly ignore.
>
> **[3:36](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=216)** We could use genfromtext again, but I don't want to waste your time setting it up.
>
> **[3:42](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=222)** So I prepared a small Python module, get weather, which takes care of parts in the file, and returning consecutive daily values for a year.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=230)** For simplicity, we will forget about February 29th in leap years.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=236)** The module uses the library Pandas to clean and reform data, but it returns pure numpy arrays.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=244)** After we introduce Pandas later in this course, I encourage you to go back and look at getweather.pi and see what I did there to pass the file.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=253)** So we import that module and look at the help text.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=258)** Seems straightforward enough.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=260)** Let's try it on Pasadena.
>
> **[4:22](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=262)** Requesting TMIN and TMAX, the minimum and maximum temperature.
>
> **[4:28](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=268)** Excellent.
>
> **[4:30](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=270)** We see that the result is a numpy record array with two double precision fields, TMIN and TMAX.
>
> **[4:37](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=277)** The values are in degrees Celsius.
>
> **[4:40](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=280)** Some measurements are missing, and they're represented as nan, not a number.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-station-and-temperature-data?u=76281980&t=286)** This function will be a great foundation for our work in the rest of this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), function (2), let (2), this, (1), pass (1)
> **Env Vars:** tmin (2), tmax (2), dly (1), hcn (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Documentation:** the readme (2), the documentation (1)
> **File Paths:** readme.txt (1), stations.txt (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Cross-References:** later in (1)

#### Cleaning weather data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=0)** - [Instructor] We pick up where we left and load temperature data for Pasadena, California.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=8)** This is a time series, a sequence of values organized chronologically, usually with equal cadence, that is the same time interval between every two consecutive samples.
>
> **[0:21](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=21)** To get a sense of the data, one of them begins by computing its average value and its extreme, the minimum and the maximum.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=30)** With NumPy, we use mean, min, and max.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=35)** But wait, we get nans. What's going on here?
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=39)** Some values are missing from the data file, and indeed they're represented as nans.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=45)** I can see some here.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=47)** Now, the mean of a sequence that includes a nan is going to be, well, a nan.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=53)** In fact, how many values are missing?
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=59)** The NumPy function is nan, creates a Boolean array of nans.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=65)** We can then count the instances of true values here by using a neat trick.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=71)** If it were arithmetic with Booleans in Python, they are converted to integers with false counting as zero and true as one.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=79)** It follows that we can count the trues in a Boolean array by obtaining its sum with numpy_sum.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=86)** 15 days.
>
> **[1:28](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=88)** What can we do?
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=89)** Missing values are so common that NumPy offers versions of its functions that simply ignore them, nanmin and nanmax, for instance.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=100)** This works, but for some applications, we do need an uninterrupted series of numbers.
>
> **[1:46](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=106)** We could just set the nans to the average of the column.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=110)** This is yet another application of fancy indexing because we want to modify only the nan elements.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=120)** This works, and we can tell which values we change because they have more digits than all the others, which were encoded with limited precision in the GHCN file.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=130)** This integrated dataset can now be plotted without discontinuities.
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=138)** A more powerful approach to restoring missing values is interpolation.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=142)** We use neighbor values to compute a plausible number for the values that are missing.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=148)** Let me demonstrate in a toy problem.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=150)** Let's say we measure a function Y defined as an integer X between zero and eight, except for some of the values.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=160)** By interpolating, we can compute values for the series at smaller X intervals.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=166)** We first define the desired X values using numpy.linspace.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=171)** And then to interpolate with NumPy, we use numpy.interp, which takes three arguments: the desired X values, the existing X values, and the existing Y data.
>
> **[3:03](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=183)** This yields linear interpolation, which is in effect fitting straight segments between the existing data points.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=191)** I will plot the new interpolated data and superimpose the original points in orange to show that interpolation at an existing location yields the same value.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=203)** For more sophisticated interpolation schemes, you can look at what's available in the scientific computation library SciPy, and specifically in SciPy interpolate.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=214)** Let's use interpolation to fill missing values in the Pasadena temperature data.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=219)** I need to load the data again since we fixed it using mean values.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=224)** Here, now it's broken again.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=226)** To interpolate, we select the good data points, those that are not nan.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=232)** Then we make an array of the X's for which we want values, all days from 1 to 365, and then we apply np.interp.
>
> **[4:03](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=243)** It seems to work well.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=246)** We celebrate by generalizing our Pasadena center code so that it can fill up holes in any array by interpolating it.
>
> **[4:15](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-weather-data?u=76281980&t=255)** And finally, we can plug the interpolated temperature series in all their glory.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), finally, (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1), defined as (1)
> **Code Identifiers:** numpy_sum (1)
> **Env Vars:** ghcn (1)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Smoothing and plotting time series
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=0)** - [Instructor] So now, we know how to load temperature data from any station, how to compute basic summaries such as mean, min, and max, and how to integrate missing data points using interpolation.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=13)** Here's the code we need.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=16)** In the last video, we looked at data for Pasadena.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=19)** Let's move to even sunnier skies now by looking at weather in the town of Hilo in big island, Hawaii.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=25)** We'll use a custom loader, and we fill the missing data for both T-min and T-max.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=33)** Once more, tupple unpacking is very useful.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=38)** To summarize the data, we obtain the yearly average, which gives us a sense of a typical value for T-min and the min and max which span the range of variation of these measurements.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=51)** We can plot these values on top of the time series.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=54)** The matplotlib function, XH line for axis, horizontal line, plots a horizontal lines that spans the entire graph, just what we need.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=65)** Another common way to measure range of variation of a time series is to compute the standard deviation defined as the square root of the variance.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=73)** If you need a refresher, Wikipedia will help.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=77)** We then plot the time series, the mean and values one standard deviation above and below the mean.
>
> **[1:24](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=84)** Most of the time, the temperatures are included in this range.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=89)** Given that this is Hawaii, it's also interesting to look at the precipitation.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=94)** The rainy season, which starts in November, is evident.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=100)** Looking at the data this way is very informative, but we also see a lot of noise and rapid variations between one day and the next, which can obscure underlying trends.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=109)** To remove the noise, we can smooth the data, so that we see the slower long-term behavior below the oscillations.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=118)** The simplest approach to smoothing is replacing each value with the average set of its neighbors, including itself.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=128)** With numpy, we can do so with numpy convolve which slides a mass across a vector of data, multiplying the elements of the mask with the elements of the vector and summing the map.
>
> **[2:20](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=140)** We're going to use a very simple constant mask, normalized, so that it sums to one.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=145)** If you think about it, the resulting convolution vector is going to be shorter than the original because at the boundaries, we cannot perform the full convolution.
>
> **[2:36](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=156)** So here's my mask. Let's try it out.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=160)** We'll plot the original temperature series as dots and the smoothed series as a continuous line.
>
> **[2:48](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=168)** This works fine.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=169)** We are reducing the quick oscillations while emphasizing the underlying, slower trend.
>
> **[2:55](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=175)** By specifying that the convolution mode is valid, we are accepting that the result is indeed a shorter vector than the original time series.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=184)** By contrast, if the mode is same, we get the full output vector, but we observe anomalies at the beginning and the end.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=193)** As the mask slides over the boundary of the data, effectively, it is multiplying zeros.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=201)** With a little more work, we could pat the data, the boundaries, using measurements from the previous and following year.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=208)** But for simplicity, we'll just use shorter time series.
>
> **[3:32](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=212)** Here's a function that performs the smoothing with a constant mask of arbitrary length.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=219)** So we plot TMIN and TMAX together for Hilo.
>
> **[3:43](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=223)** This is an interesting plot.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=225)** I'd like to see it for other cities.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=227)** So we take our code and generalize it to a function.
>
> **[3:51](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=231)** We get the data, and for both TMIN and TMAX, we fill in missing values, smooth, and plot.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=238)** We'll also add a title and reasonable limits for the access.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=244)** Let's try this out.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=245)** We can try to plot multiple years to see if the Hawaii climate is stable.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=251)** In fact, for such nice weather, I can reduce the plotting range.
>
> **[4:16](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=256)** Now, let's compare cities in different climates.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=258)** Let's say, Pasadena, New York, San Diego, and Minneapolis.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=265)** To make a 2x2 array of plots, I use matplotlibs subplot which takes the shape of the array in the number between one and the maximum index over the figures.
>
> **[4:37](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=277)** So I loop over cities using the enumerate iterator, which returns pairs consisting of a numerical index and the list item.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=285)** This is a very Pythonic construction.
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=291)** This is a very informative, comparative plot.
>
> **[4:55](https://www.linkedin.com/learning/python-data-analysis-24296803/smoothing-and-plotting-time-series?u=76281980&t=295)** If you could choose based on the weather alone, where would you live?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3)
> **Env Vars:** tmin (2), tmax (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Weather charts
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=0)** - [Instructor] We're going to conclude our experimentation by making a quick but impressive weather visualization that showcases the power and flexibility of NumPY and Matplotlib.
>
> **[0:10](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=10)** A visualization is inspired by the New York Times weather chart shown here, and it'll present daily minimum and maximum, the purple band.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=18)** In the context of their normal range, dark gray, and of the historical records, light gray.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=25)** By the way, let me show you how to add images to a Jupyter Notebook.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=29)** If I double click on the cell containing the New York Times visualization, we see that it's just a markdown cell with a small chunk of HTML, which in this case refers to a file in the current directory, but we could also use a full URL.
>
> **[0:43](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=43)** A shift+enter in the cell and it goes back to showing the image.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=48)** So let's make a plot.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=50)** We will again use Pasadena as an example, but you will be able to do your own city if it's represented in the noaa data sets.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=57)** And since we want records across many years, we need all the data that we can get.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=62)** The Get Weather module lets us query for one year of data at a time, so we'll call it repeatedly and collect the results with the list comprehension.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=72)** Once we have that, we can stack up the one dimensional arrays so they become the rows of a two dimensional array using NumPY vstack.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=82)** So we have 114 years.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=85)** The results can be visualized with mat show.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=89)** We use a color bar to provide a reference to the mapping of values to color, and we can specify the extent to get more informative labels on the axis.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=100)** We see some missing data, the white patches, and we see that the middle of the year is generally warmer.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=107)** We can also observe that winter and summer minimum are getting warmer toward the end of the century.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=113)** For simplicity, we will forego filling nans and use nan robust functions.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=119)** We want the record temperatures for every day of the year.
>
> **[2:03](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=123)** This means that we can use NumPY nan min on the teaming data and specify axis zero so that the minimum will be taken across each row of 114 years.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=136)** Then we do the same for TMAX using NumPY nan max.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=141)** So let's see the records.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=144)** Now for the normals.
>
> **[2:26](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=146)** In the New York Times visualization, the normal temperature range for each day of the year is defined as the average of the low and high from 1981 to 2010.
>
> **[2:37](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=157)** So we build another stacked array with this reduced range.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=163)** And again, we take means across rows.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=166)** So axis is zero.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=171)** Let's have a look.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=173)** We are ready to get this plot together.
>
> **[2:55](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=175)** We'll do Pasadena in 2020.
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=178)** To plot a field band, we use matplotlibs fill between, which needs X axis coordinates and the lower and upper lines that delimit the band.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=189)** For the X axis coordinate, I will use the day of the year from one through 365.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=196)** The colors that I picked are my best approximation to the New York Times graphic.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=203)** In the title, I'd like to show the average temperature for the year.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=207)** I will compute it as the average of the mean minimum and mean maximum temperatures.
>
> **[3:33](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=213)** And to build a string for the title, I can use the very convenient formatted string literal introduced in Python three six.
>
> **[3:42](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=222)** If we start a string with an F before the quotes, we can include variable names in braces, which will be replaced by the values.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=230)** We can also specify format and instructions that we would use in the string format interface.
>
> **[3:57](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=237)** For instance, two decimal digits for the average temperature.
>
> **[4:03](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=243)** Here it is.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=245)** This is the best way to build up strings that include values.
>
> **[4:10](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=250)** Okay, let me put everything together in a function and white plot.
>
> **[4:16](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=256)** If you wish, you can stop the video here and review the details.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=264)** And here's New York in 2022.
>
> **[4:28](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=268)** NumPY is extremely powerful and flexible.
>
> **[4:31](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=271)** You should learn about it in depth.
>
> **[4:34](https://www.linkedin.com/learning/python-data-analysis-24296803/weather-charts?u=76281980&t=274)** Coupled with matplotlib, it offers a direct route to beautiful and informative visualizations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (1), interface (1), function (1)
> **Env Vars:** html (1), url (1), tmax (1)
> **Definitions:** refers to (1), means that (1), defined as (1)
> **CLI Commands:** make (1), python (1)
> **Tools:** jupyter (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Solution: Temperature anomaly
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=0)** - [Instructor] We need to compute the temperature anomaly in New York for all years in the dataset.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=7)** The anomaly is defined from averages along a year, so I'll be using NumPy mean along the second axis, which has length 365.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=23)** In fact, I need another mean between the minimum and the maximum.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=32)** Next, I need my reference, which is the mean between 1945 and 1955.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=44)** We are told that these are rows 65 to 75, and I don't need the access keyword since we're averaging over everything.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=59)** Then I round and return.
>
> **[1:03](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=63)** Oh, I actually need to subtract this reference mean from my result first.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=70)** Let's test.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-temperature-anomaly?u=76281980&t=73)** Perfect.

> [!info]- Semantic Content
>
> **Code Keywords:** return. (1), let (1)
> **Speakers:** - [instructor] (1)


### 6. 5. pandas

#### pandas overview
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=0)** - [Instructor] Pandas has gained broad acceptance in the Python community as the leading data analysis library in the data science stack.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=8)** It's especially useful for statistics, but also to prepare data for visualization and machine learning.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=15)** While NumPy works with arrays, pandas deals with data tables, which are known in the library as data frames.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=23)** The main difference is that array rows, columns and elements are identified by integers, while data frame rows and columns can be indexed by strings, dates, floating point numbers, and other python objects.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=38)** In fact, any data frame column can be promoted to act as the index.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=45)** That is just one of many table manipulations that are possible.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=49)** In addition, pandas can read and write many common data formats.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=54)** It provides a consistent way to handle missing data.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=57)** It implements powerful database operations such as joins, and it can even make plots.
>
> **[1:04](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=64)** Historically, pandas used NumPy to store data behind the scenes.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=69)** But since version 2.0, pandas has introduced Apache Arrow as an alternative backhand.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=75)** Arrow handles missing data, strings, and categorical data more efficiently than NumPy.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=81)** It's optimized for memory efficiency and performance, and it supports data formats that are interoperable with many other data science libraries and applications.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-overview?u=76281980&t=91)** If you want to do data analysis or data science with Python, I really recommend pandas.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1), apache (1)
> **Code Keywords:** implements (1)
> **Versions:** version 2 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### pandas DataFrames and Series
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=0)** - [Instructor] The central object in pandas is the DataFrame, a data table with named and typed columns and with an index that identifies the rows.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=11)** The default index is just a range of numbers, but it can be any type of data.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=16)** Index sample in this slide where the DataFrame columns are name, date of birth, and city, the index could be the Social Security number or an alphanumerical employee ID.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=29)** A series is effectively a single column from a DataFrame with its own index.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=36)** It is the index that makes DataFrames and Series more powerful than NumPy arrays.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=42)** For instance, we can combine two Series indexed by timestamps even if the indices are only partially overlapping.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=51)** Pandas a will figure out which entries we can actually compute.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=56)** The easiest way to make a pandas DataFrame is to load it from a file.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=62)** We start with a simple text file, Nobels.csv, which contains a list of Nobel laureates.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=69)** With a year and discipline in which they were awarded their prize as well as their date of birth.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=75)** Pandas reads CSV, reads this without breaking a sweat.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=81)** We do need to provide names for the columns since the file itself doesn't have them.
>
> **[1:28](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=88)** Read CSV has many other options including specifying separators other than commas, skipping columns or rows, converting dates and more.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=98)** Now that we have a DataFrame, let's examine it.
>
> **[1:42](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=102)** The method info gives us basic information, including the number of non-null values in each column, the Dtype of each column, and the total memory usage.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=114)** The method head prints the first few rows.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=118)** While tail print the last few rows, we have a total of a thousand records and we see that the columns are indeed year, discipline, nobelist, and date of birth.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=135)** The columns have pyarrow Dtypes, which are more powerful than the NumPy or Python counterparts.
>
> **[2:23](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=143)** Unlike NumPy and Python, integers support a null value which can be used for missing data.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=151)** Unlike NumPy, pyarrow strings have variable length.
>
> **[2:35](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=155)** Unlike Python, those strings are stored continuously and efficiently in memory.
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=162)** Last, pyarrow types for dates and times are more extensive than those in NumPy.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=169)** In this case, while reading the CSV file, the arrow library elected to use the memory efficient date32 with the precision of a day.
>
> **[2:59](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=179)** As I mentioned, the index plays a very important role for DataFrames.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=184)** This DataFrame has the default integer index ranging from zero to a thousand.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=191)** We look at indexing in detail in the next video.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=194)** To grab individual DataFrame columns, we can use the Python dictionary syntax.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=201)** We can also use class attribute syntax with a dot.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=207)** Either way, the result is a pandas series.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=210)** The series inherits the name and Dtype of the column and the index of the whole DataFrame.
>
> **[3:36](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=216)** If we need a naked array of the values, we get that with the property values.
>
> **[3:43](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=223)** This now is an arrow object, but we can also turn it into a NumPy array.
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=229)** The method is to NumPy.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=232)** Sometimes it's useful to get a list or actually an array of all the unique values in a column.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=241)** Other times, it's useful to have counts of the times each value appears.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=247)** This accounting confirms that the three scientists were awarded two prizes.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=253)** Linus Pauling for chemistry and peace, Marie Curie for physics and chemistry.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=259)** John Bardeen for physics twice, and Frederick Sanger and Barry Sharpless for chemistry twice.
>
> **[4:26](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=266)** To select records we can use also fancy indexing, building a Boolean expression that involves the columns, let's say prices in physics after 2019.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=281)** We can also use the convenient, if not very Pythonic query interface, which takes the Boolean condition as a string.
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=288)** We have to mind our quotes here as it were, making sure that we use single quotes for the query and double quotes for the values inside it or vice versa.
>
> **[5:01](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=301)** Don't worry about the warning, which has to do with the internal workings of pyarrow.
>
> **[5:07](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=307)** Sometimes it's not evident how we should write a filter in operation, with either a fancy indexing or a query.
>
> **[5:15](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=315)** For instance, if we seek all the nobelists from the Curie family, we will be tempted to write something like this, checking whether Curie is in the string nobelist.
>
> **[5:27](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=327)** This, however fails rather spectacularly.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=334)** Instead, we need to find the pandas string method contains, which produces the Boolean array that we need.
>
> **[5:45](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=345)** The selection confirms the incredible winning streak of the Curie family.
>
> **[5:49](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=349)** Marie, her husband Pierre, and daughter Irene.
>
> **[5:53](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=353)** Let me show you how to create a DataFrame yourself.
>
> **[5:57](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=357)** First of all, you could make one from a NumPy record array, for instance, the David Bowie discography that we use that as an example in chapter four.
>
> **[6:08](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=368)** This is almost too easy since we already have all the information that we need in the right place, and we just need to pass the record array to pandas DataFrame.
>
> **[6:21](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=381)** The resulting DataFrame uses NumPy for storage.
>
> **[6:24](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=384)** If we want a more efficient arrow backend, we can use convert Dtypes.
>
> **[6:30](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=390)** Starting from scratch, instead, we may build the DataFrame from a list of dictionaries, which means that we need to repeat the column names over and over.
>
> **[6:40](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=400)** Or from a list of tools by providing names for the columns.
>
> **[6:47](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=407)** Otherwise, we can build a DataFrame column by column rather than record by record from a dictionary of NumPy vectors or lists.
>
> **[6:57](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=417)** It's also possible to use name tools or data classes.
>
> **[7:02](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=422)** I leave you with a one page cheat sheet covering the basics of DataFrame metadata, as well as selecting columns and rows.
>
> **[7:09](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=429)** The cheat sheets from this chapter are collected in the document pandas-cheatsheet.PDF in the exercise files.
>
> **[7:16](https://www.linkedin.com/learning/python-data-analysis-24296803/pandas-dataframes-and-series?u=76281980&t=436)** But of course, there are many good tutorials about pandas on the web, and the official documentation is also excellent.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), case, (1), interface (1), pass (1)
> **CLI Commands:** python (4), make (2), find (1)
> **Env Vars:** csv (3), pdf (1)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Analogies:** for instance (3)
> **File Paths:** nobels.csv (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Indexing in pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=0)** - [Instructor] We have seen how to load and create data frames and how to select records based on Boolean conditions.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=7)** However, for anything more complex than a simple selection, you want to use pandas indices.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=13)** You will also need to use indices wherever you need to modify values within a data frame.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=19)** So let's load up our Nobels list database again.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=24)** Here, the index is the default integer range.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=28)** We can instead use the nobel here.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=32)** To elevate the column to serve as index, we use the set index method, which creates a new data frame.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=40)** The data frame is now shown with the year at the front of each record.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=45)** And here's the index itself.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=48)** Pandas indices do not need to have unique values, and that's a feature, not a bug, because we may very well want to select all Nobels awarded in a given year.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=60)** The pandas indexing notation is a bit surprising.
>
> **[1:04](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=64)** To select all the records with a given index, we use .lock followed by the index value in brackets, not by parenthesis.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=75)** We can also add a column name just as if we were selecting a cell in a NumPy array.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=82)** The result is a series.
>
> **[1:24](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=84)** In addition to selecting individual index values, .lock allows for slices.
>
> **[1:30](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=90)** In a break from Python usage, the range is inclusive of its end value.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=96)** If we choose the years of the Great War, 1914 to 1918, then 1918 appears in the selection.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=104)** This makes sense though, because if the indices are not integers, it will be very unclear what is included in a Python style index.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=113)** We are not limited to numerical indices.
>
> **[1:56](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=116)** We could index by discipline.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=119)** We can only request a slice of indices if the index itself is sorted.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=125)** That's achieved with the method sort index.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=129)** Fancy indexing, that is indexing with an array, also works.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=136)** And if you want NumPy style position based indexing, you can get it with .ilock.
>
> **[2:23](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=143)** And then slices are exclusive as in NumPy.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=148)** Here are the first 10 records, whatever they are in the data frame in its current order.
>
> **[2:35](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=155)** This is still far from the end of the story.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=158)** Pandas supports multiple indices known as multi-indexes.
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=162)** For instance, we could have a data frame that's indexed by year and by discipline.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=169)** Here's the multi-index.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=171)** If you need individual levels, you can use get level values, years and disciplines respectively.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=180)** Now, armed with this multi-index, we can select records by both year and discipline by passing a tuple to .lock.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=190)** Using only the first level of the index results in a new data frame with a simple index.
>
> **[3:18](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=198)** Slicing with multi-indexes can get confusing because it's hard to tell the lock indexer, which rows and which columns we are really interested in.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=208)** Your best bet is to use pandas index slice and then also specify the columns that you need or use a column for all of them.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=218)** So here, we requested years from 1901 to 1910, specifically for chemistry.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=225)** If we want all years, but a single discipline, we just use a column.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=230)** And again, request all columns.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=233)** Multi-indexing is powerful, but it can be confusing and sometimes you'll have to resort to trial and error or ask Stack Overflow or even ChatGPT.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=244)** Here's a one page summary of basic indexing in pandas.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/indexing-in-pandas?u=76281980&t=249)** It's included in the PDF cheat sheet.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** python (2)
> **Code Keywords:** let (1)
> **Env Vars:** pdf (1)
> **Documentation:** stack overflow (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Math and plotting in pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=0)** - [Instructor] We have seen how to load and create data frames and how to select roles, but we have not done much with the values in the table.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=8)** Many data analysis tasks require that we perform computations on the data and visualize the data.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=13)** Let's try that with Pandas.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=16)** We will use a data set consisting of global population health and wealth statistics from the amazing Gapminder website.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=25)** Gapminder is a Swedish foundation created by the late statistician, Hans Rosling, to promote a fact-based worldview and to fight misconceptions about global development.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=38)** I have prepared a comma separated file with a selection of Gapminder data.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=45)** The data set includes a number of global statistics.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=48)** For a country and a year, we get population, life expectancy, the percentage of children born alive who survived to age five, the average number of babies preferred by a woman, and the early domestic product per person in 2017 dollars.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=65)** We also get the geographical region.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=68)** We can ask Pandas to compute simple statistics on all the fields.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=72)** The method describe does that.
>
> **[1:16](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=76)** We see that there are almost 42,000 records in the datasets for years ranging from 1800 to 2023.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=85)** This summary gives us the minimum, maximum, mean, and standard deviation for all fields, as well as the 25th, 50th, and 75th percentiles, which represent the typical range of variation for a quantity.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=99)** Hans Rosling stresses that life expectancy improves with wealth and that the correlation is even clearer if we look at the logarithm of GDP per person per day.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=112)** We don't have a column in the database with that information, but it's very easy to compute it.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=117)** I divide the GDP per capita by the average number of days in a year, and I use a Nampa Universal function, which works fine with Pandas to get the logarithim.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=130)** By assigning values to a new column name, a new column is created in the data frame.
>
> **[2:18](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=138)** To see global trends as a function of time or to examine individual countries, it makes sense to index by year and by country.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=147)** Pandas has its own plotting interface, which was designed to display multiple variables together.
>
> **[2:34](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=154)** We want to show life expectancy as a function of logarithmic cost domestic product, so we select data for 1960 with lock and then generate a scatterplot of those two variables.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=167)** The situation in 1960 is pretty clear with a clear correlation between the two variables across all countries.
>
> **[2:55](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=175)** To compare with the more recent year in the same plot, we need to grab a mat plot lib axis object, from the first plotting function and pass it to the second.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=188)** We also change colors and label the two clouds of points.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=194)** In 2015, everyone is richer and can look forward to a longer life.
>
> **[3:20](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=200)** Being rich is still helpful, but we observe a flattening or life expectancy for the richest countries.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=207)** The trend is the same for other statistical indicators such as survival to age five.
>
> **[3:36](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=216)** The data frame index by country lets us make easy plots of the chronological evolution of an indicator such as life expectancy for a country, such as Italy.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=226)** Before we plot, we sort the index, the result may be jumbled otherwise.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=235)** The style of programming where I concatenate methods one after the other is in fact quite a dramatic for Pandas, if not for Python.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=245)** One may even say that Pandas speaks its own Python dialect.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=249)** Here's a comparative plot for three countries.
>
> **[4:17](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=257)** Italy caught up with the United States in 1960 and China is now coming closer despite the disasters 1960 famine.
>
> **[4:27](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=267)** Another interesting and important correlation is between fertility rate and survival to age five.
>
> **[4:33](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=273)** To look at the question globally, we can compute the average fertility rate overall records, but it doesn't mean much since it mixes data from many different years.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=284)** We can use the Pandas group by functionality to segment the data frame by year before computing the average.
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=292)** The result is a series index by year, which shows the average fertility rate as a function of time.
>
> **[5:01](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=301)** I will plot the series against the time series of survival to age five.
>
> **[5:06](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=306)** The plot methods allows us to add a second axis on the right to show the range of a second variable.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=314)** This plot shows forcefully that high natality is a consequence of infant mortality and that women have many fewer children when they believe they will survive.
>
> **[5:24](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=324)** On a smaller scale, we see the post 1950 baby boom.
>
> **[5:29](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=329)** To gain even more insight, we can create a pivot table that segments the fertility means by both year and geographical region.
>
> **[5:40](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=340)** And Pandas offers a quick way to plot such a pivot table.
>
> **[5:44](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=344)** We see that the drop in fertility came after the baby boom for Africa, America, and Asia.
>
> **[5:51](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=351)** Europe was already low and decreasing since the beginning of the century.
>
> **[5:57](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=357)** Here's the corresponding plot for age five survival.
>
> **[6:02](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=362)** Africa is now roughly where Europe was in 1950.
>
> **[6:07](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=367)** Using Pandas built-in plotting functions is the quickest way to make insightful statistical illustrations, but for maximum flexibility, you can always use the standard mapplotlib functions, which are fully customizable on Pandas series.
>
> **[6:22](https://www.linkedin.com/learning/python-data-analysis-24296803/math-and-plotting-in-pandas?u=76281980&t=382)** Mapplotlib will recognized column names and will try to use the index as the X coordinate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), require (1), let (1), interface (1), pass (1)
> **CLI Commands:** make (2), python (2)
> **Definitions:** is a  (3)
> **Env Vars:** gdp (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Database operations in pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=0)** - [Instructor] Pandas is not a database.
>
> **[0:02](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=2)** It's a library to manipulate structured data and, specifically, tables in memory.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=8)** Unlike a database, it does not provide persistent storage, and it does not support concurrency and access control.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=16)** However, it does implement some of the functions of a database.
>
> **[0:21](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=21)** As we have seen, we can select records by imposing conditions on the index or on the fields.
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=27)** For a database, this will be called a query.
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=31)** In this video, we'll show you how Pandas performs another operation typical of databases, merging tables by matching indices or fields.
>
> **[0:41](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=41)** For a database, that's called a join.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=46)** We are going to experiment with the dataset from [kaggle.com](https://kaggle.com) containing all the Oscars awarded since the inception of the Academy Awards in 1928.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=55)** Since we want to explore merging tables, I have split the data set into a few pieces.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=61)** We'll put them back together.
>
> **[1:03](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=63)** The first two pieces are tables of actors and actresses that have been nominated for a movie.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=71)** We see that we have fields for the year of the award, for the award category, the name of the film, and the name of the performer.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=83)** In the initial years of the Oscars, there was a single actor category, but then it got split into leading and supporting roles.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=92)** Same story for the actresses.
>
> **[1:35](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=95)** The simplest way to combine these tables is to concatenate them, which we do with pandas concat.
>
> **[1:43](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=103)** Then we can re-sort the table by year and category and reset the index, which otherwise would have duplicated entries.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=113)** Another file hosts a table of the years in which each movie was filmed.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=120)** We can use the data in this table to add the year of production into the table of nominations.
>
> **[2:07](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=127)** That's not super interesting because the production year is usually the year before the award, but it will show you how to merge tables horizontally, aligning the rows based on the film name.
>
> **[2:19](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=139)** We use the pandas function, merge, and we specify that we want to match records by film name.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=148)** This works great, but there is a subtlety that we should consider.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=153)** The standard form of merge returns only records for which a key is found in both tables.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=160)** If we artificially remove some records from the movie table, here I'm using iloc, the corresponding nominations disappear from the merge.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=171)** It will be better for us if the year was left empty, but the records survived, and that's what we get if we ask for a left merge with the keyword how.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=184)** More generally, there are four possibilities for merge, which are illustrated in this simple Venn diagram.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=192)** If we want only the records for which we found the key in both tables, that's called an inner merge, and that's the default in pandas.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=201)** If we want all the records in the left array match with records from the right when one with the right key is present, that's a left merge.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=210)** Vice versa, that would be a right merge.
>
> **[3:33](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=213)** Last, if we want all records for the left and all those on the right match when possible, that's an outer merge.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=221)** So here, if we try a right merge, we would have records for all the movies that had no nominations for best actor.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=230)** We will use an inner merge, the default.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=235)** By the way, this is a many-to-one merger because multiple nominations for the same movie are matched with the same record from the movie's table.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=244)** This happens automatically.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=246)** There are many fun things we can do with this data set.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=249)** For instance, we could see which actor had the most nominations by counting the frequency of their names.
>
> **[4:17](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=257)** Clearly, Meryl Streep, but for how many did she actually get an Oscar?
>
> **[4:23](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=263)** For that, we need a table of all awards, yet another file.
>
> **[4:29](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=269)** It turns out that Meryl Streep had three Oscars.
>
> **[4:33](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=273)** Did anybody do better?
>
> **[4:35](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=275)** Hmm, counting the frequency of names in the award table doesn't help because some prizes don't go to actors and actresses.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=285)** We can achieve what we need instead by merging the two series of counts for nominations and awards, using the indexes of names as the key.
>
> **[4:57](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=297)** All the non-acting awards will disappear, given that this is an inner merge.
>
> **[5:02](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=302)** So Katharine Hepburn actually did one better than Meryl Streep, even if she was nominated less.
>
> **[5:10](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=310)** This type of merge by index, inner, and one-to-one is so common, that in pandas, it can also be achieved by concatenating tables horizontally.
>
> **[5:21](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=321)** That's axis equals one.
>
> **[5:25](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=325)** Let's look at the movies with the most awards.
>
> **[5:29](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=329)** Three are tied with 11, and let's see what awards they got.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=334)** For that, we merge the awards table with the counts using the film name as the key.
>
> **[5:42](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=342)** Since the film is a column in the award table, but it's the index for the series of counts, we need to tell pandas merge.
>
> **[5:51](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=351)** After the merge, we limit the output to the largest counts.
>
> **[5:57](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=357)** These big films have only one acting award among all of them.
>
> **[6:02](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=362)** I wonder why.
>
> **[6:07](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=367)** One last merge.
>
> **[6:09](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=369)** By first selecting the category of acting awards only, we can see which actors won awards together.
>
> **[6:18](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=378)** Indeed, a couple of movies in 2023 and 2024 had quite some luck in that respect.
>
> **[6:25](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=385)** Pandas merges are best learned by experimentation.
>
> **[6:29](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=389)** I'm sure that once you do a few, you'll find them popping up everywhere in your data analysis work.
>
> **[6:36](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=396)** This concludes our overview of pandas.
>
> **[6:38](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=398)** There's a lot more that you can do with it, and there's a lot more to learn than I can cover in this course.
>
> **[6:45](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=405)** I tried instead to give you a feel for what is possible and practical.
>
> **[6:49](https://www.linkedin.com/learning/python-data-analysis-24296803/database-operations-in-pandas?u=76281980&t=409)** I encourage you to start working on a data set that interests you and to pick up more techniques and knowledge using the many resources available on the web.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1), function (1), default. (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Project: Baby Names

#### Overview: Analyzing baby names
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=0)** - [Instructor] In this chapter, we are going to practice using Pandas with an intriguing real-world use case.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=6)** We will analyze the US Social Security baby name catalog, which lists the names given to male and female newborns for every year since 1880.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=17)** This is a very simple data set, but it's great fun to play with, and it has been mined, analyzed, and visualized in many publications and websites.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=28)** We will use the social security data to track the popularity of names across all years, and to extract the 10 most popular names in a year.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-analyzing-baby-names?u=76281980&t=35)** All of this with Pandas, of course.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Loading name datasets
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=0)** - [Instructor] You can download the social security name dataset from their website.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=5)** We'll use the national data file, which gives you a Zip archive containing files for each year since 1880.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=12)** I have already unpacked them in your exercise files in this chapter's directory under names.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=23)** However, you could unzip a file in Python using the zip file standard library module.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=32)** Jupyter lets us browse the contents of the names directory.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=36)** Let's see, what are these files like?
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=39)** We open one of them in read mode and print out the very first few lines.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=45)** It's a very simple comma-separated format, name, sex, and the number of babies born that year with that name.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=55)** Pandas read_csv shouldn't have any problem, except that the CSV reader used the first record, Olivia, to name the columns.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=67)** We will instead set the column names explicitly, better.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=72)** We will load all the tables and concatenate them into a single data frame.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=77)** To avoid confusing data from different years, we can prepare the individual data frames by adding a new column that specifies the year.
>
> **[1:25](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=85)** To do that on the fly, directly on the output of read_csv, we can use data frame assign.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=93)** Here's an example.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=97)** Excellent.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=98)** Maybe you have guessed that I arranged to load each file with a one-liner so that we can use comprehension to concatenate the data frames.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=107)** There are several things happening here, so let's look at this carefully.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=111)** We loop over all years between 1880 and 2024, excluded.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=117)** We build up the file name using an fstring and feed that to read_csv.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=124)** We had the column specifying the correct year from the loop variable and we pass all the resulting data frames to Pandas concat.
>
> **[2:13](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=133)** In fact, there are no brackets here, so we're using a generator expression, which concat accepts quite happily.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=141)** It's a very efficient way to build the data frame.
>
> **[2:26](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=146)** It's all there, more than 2 million entries.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=150)** If we want to squeeze out the last drop of performance, we can make sure that all the types are backed by pyarrow.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=160)** And instead of CSV, we will save this data frame to the very efficient arrow feather format.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/loading-name-datasets?u=76281980&t=166)** It's compact and loads incredibly fast.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (1), pass (1)
> **CLI Commands:** unzip (1), python (1), make (1)
> **Code Identifiers:** read_csv (3)
> **Env Vars:** csv (2)
> **Exercise Files:** exercise files (1), zip file (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Comparing name popularity
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=0)** - [Instructor] We are ready to start analyzing the data.
>
> **[0:02](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=2)** Let's load it up.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=5)** We wish to examine the changing popularity of a name.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=9)** So we can index the data to make that easier.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=12)** We'll use a multi-index, indexing on sex first, then name, then year.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=17)** We will also sort the index.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=22)** Getting the data set for any given name is, then, a simple exercise of indexing with the loc.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=29)** This series is ready to plot.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=32)** Notice how matplotlib automatically uses the index to set the x-axis.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=38)** Mary and John had peaks in the 1920s and then again in the 1950s or '60s.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=46)** It makes sense to consider the frequency of a name as a fraction of the number of babies born in a year.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=52)** To get that, we use groupby to group the unindexed frame by sex and year and sum the number column.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=62)** This gives us the total number of births indexed by sex and year, which is itself an interesting thing to plot.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=70)** We see the baby boomers coming on stage in the '50s and '60s.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=75)** We can now create a new column in all years indexed set to the relative frequency of a name in a year.
>
> **[1:24](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=84)** Let's look at Mary and John again.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=87)** As a percentage of all babies, Mary and John have steadily lost popularity.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=92)** In 1880, more than 8% of all baby boys was a John.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=97)** Let's make a generic function plot name to make this kind of plot and another function to plot a few names together.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=105)** We'll be interested in absolute numbers and percentages of births.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=111)** For instance, let's compare Michael, John, David and Martin, or for girls, Emily, Anna, Claire and Elizabeth.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=124)** Another interesting investigation is to compare variants of the same name.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=129)** Let's take the two spellings of Claire, the older version, Clara, and Italian and Irish spellings, Chiara and Ciara.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=142)** Notice how matplotlib does its best to put the legend out of the way.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=147)** Claire is dominant, but Clara is having a resurgence.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=151)** Notice the purple spike just after 2004 when the singer Ciara release her first album.
>
> **[2:39](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=159)** We can make a slightly different cumulative or stack plot that adds up the counts on top of each other.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=167)** For that, we need a different table where the rows are the Claire variants and the columns are years.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=174)** First, indexing gives us the data we need.
>
> **[2:59](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=179)** Notice we're using a fancy index to get all the Claires.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=184)** Now, pandas' data frames have methods stack and unstack, which can switch labels from columns to the index and vice versa.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=194)** Using unstack will give us a table from this series.
>
> **[3:20](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=200)** We have unstacked stacked level two of the index, so we got new columns from the years.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=207)** Using unstack on level one of the index, the name, would've given us a transposed table.
>
> **[3:36](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=216)** Stack does the inverse operation, bringing us back to a series with a three level multi-index, except that now we are swapped around the index levels.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=226)** But let's go back to the unstacked table.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=230)** This is just what we need.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=232)** We may as well lose the index label for sex, which doesn't do anything.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=236)** We do that with droplevel.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=238)** And while we're massaging this table, we may as well replace the missing values with zeros, which we do with the fillna.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=246)** We are chaining operations, leaving one on each line.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=249)** Some pandas pros really like this style.
>
> **[4:12](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=252)** The backslashes at the end of each line are needed so that Python sees the whole expression as a single line.
>
> **[4:21](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=261)** We should be good now.
>
> **[4:23](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=263)** Let's go to matplotlib's stack plot.
>
> **[4:27](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=267)** Ah, matplotlib, which still lives in the NumPy universe, cannot quite handle the PyArrow integers.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=276)** The error we get is about applying a specific NumPy function to a type that is not understood.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=284)** No big deal.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=285)** We just convert everything to NumPy integers using astype.
>
> **[4:50](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=290)** The column names give us labels for the x-axis, while the index makes a suitable legend, quite nice and informative, except perhaps for the garish default colors chosen by matplotlib.
>
> **[5:04](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=304)** Surely we can do better by selecting a different colormap.
>
> **[5:08](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-name-popularity?u=76281980&t=308)** And here it is, a history of Claires.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), switch (1)
> **CLI Commands:** make (4), python (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Compiling top tens
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=0)** - [Instructor] In this video, we will create yearly top tens for male and female names.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=6)** We once again load the data for all years, but this time we index it slightly differently, by sex and year only.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=15)** We'll keep the names as a data column.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=18)** We now build up our query by chaining Pandas methods.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=23)** Getting boys in 2000 is a simple matter of a multi-index lock.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=28)** Then we get the most popular names by sorting the DataFrame on number in descending order.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=35)** Then Head gives us the top 10.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=39)** In 2023, Liam was king, followed closely by Noah.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=45)** How about girls?
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=47)** It's Olivia and Emma.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=50)** Let's build up a table to compare the top 10 names over multiple years.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=55)** We only need the names, so we get rid of the index and of the number column.
>
> **[1:03](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=63)** Working from this example, let us create a generic function to return the top 10 for each year.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=71)** Now, to form a table, we collect the series as the columns as the DataFrame, labeled by year.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=79)** We use a dictionary comprehension to structure the data.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=83)** We see that Liam took over from Noah, but Noah kept a decent second place.
>
> **[1:30](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=90)** Oliver rose rapidly, while William is now losing favor.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=97)** For females, Olivia has overtaken Emma.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=101)** And maybe Charlotte is on its way up.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=105)** Let's take the 2023 top 10 and plot their progress across the history of the database.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=112)** For that, I first need to reindex the DataFrame to grab individual names more easily.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=120)** So we loop over the top 10, request the corresponding name from our DataFrame and plot the resulting history.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=131)** This is interesting.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=132)** All the top female names have surged quite recently, except for Evelyn, and to some extent Emma and Charlotte.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=142)** Looking at males, William and James are classics, but the rest are recent discoveries.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=150)** How about all-time favorites?
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=152)** We get there quickly by selecting females, say, grouping by name, summing the numbers, and sorting by value.
>
> **[2:41](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=161)** I will use a chaining style to code this up.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=166)** So Mary and Elizabeth.
>
> **[2:48](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=168)** Compare with the modus totals of the 2023 top 10.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=173)** We see if they have staying power.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/compiling-top-tens?u=76281980&t=176)** Plotting histories for the overall top 10 names shows that they gained their spots in the first half of the 20th century and lasted through decades.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Unisex names
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=0)** - [Instructor] We need to find the top unisex names in 2023.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=5)** Doing so will require a decent amount of pandas manipulations, which I'm sure you could achieve in different ways.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=12)** What I'm going to show you is just one possibility.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=15)** First, setting an index of sex and name will help us.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=26)** Next, we separate the boys and the girls.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=35)** You may have guessed that a merge operation will give us records for unisex names.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=44)** We need to rename the two columns with a number of names that come from the left and the right data frames.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=57)** Next, we compute the total frequency of the names, as well as the boys to girls ratio.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=68)** This will be our factor to condition.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=73)** You see that we use a logical and to combine the two pieces.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=79)** We use the resulting Boolean array to down select the data frame.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=87)** Last, we sort.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=93)** And we skim off the top.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=97)** Let's try this out.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=100)** Oops. What did I do wrong here?
>
> **[1:43](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=103)** I see.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=104)** I need to apply my condition on the ratio of the numbers and not on the entire data frame.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-unisex-names?u=76281980&t=112)** Here we go.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Importing and Wrangling Data with pandas

#### Overview: The structure of data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=0)** - [Instructor] So far, we've been casual in the way we speak about data.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=5)** As we move into the second part of this course, we should get more precise with our terminology.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=11)** The word data is plural.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=13)** That's appropriate because we're usually interested in the variability of our observations.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=18)** We need to establish how things are different from each other.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=23)** So a data set is like a catalog or a collection.
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=27)** For instance, for a planetary scientist, the data set of interest would be the planets of the solar system.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=33)** The data set consists of cases, the planets, and each case has attributes called variables.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=40)** For instance, the mass of the planet, or the period of its orbit around the sun.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=46)** It is standard practice to organize data in a data frame, in effect a table where each row or record refers to one case and each column or field to one variable.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=59)** It is not by chance that the Pandas table object is also called a data frame.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=65)** Variables can be quantitative, represented by a number, or categorical, a description that can be put in words selected from a fixed set of levels.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=77)** Usually, quantitative variables are given as pure numbers with standard units described in the codebook or data dictionary for the data frame.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=87)** Likewise, the codebook would describe the levels that are available for a categorical variable.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=94)** This arrangement, known as case variable organization, is very simple, but it can accommodate many different sorts of data.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=104)** It is also affected directly in the data structures used by statistical software.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-the-structure-of-data?u=76281980&t=110)** In our case, Pandas.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), known as (1)
> **Analogies:** for instance (2)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Importing data with pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=0)** - [Instructor] We have already used pandas read_csv to load simple text tables into pandas.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=6)** In this video, we look in detail at the task of importing textual data.
>
> **[0:10](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=10)** We'll continue with example of planets.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=13)** Let's have a look at the file planets.csv included in the exercise files.
>
> **[0:19](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=19)** We see that all values are indeed separated by commas and that each line is a case, a record.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=26)** The names of the columns or variables is given in the first line.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=30)** Some values include commas as thousands separators and they are enclosed in quotes.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=37)** A simple pandas code does a good job with this.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=42)** However, looking at the structure of the data frame, we see that some columns that should be numbers have become strings instead, probably because of the commons, and that the date FirstVisited is also a string rather than a date.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=58)** Luckily, pandas has options for that.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=61)** We can specify the thousands separator and we can tell pandas explicitly that the FirstVisited column holds dates.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=70)** For consistency, we can also require that the Diameter and MeanTemperature fields should be floats and that Rings and MagneticField should be categories since they have only two possible values.
>
> **[1:28](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=88)** Perfect. This is now a very clean, accurately encoded table.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=94)** It would've been harder to load this file using the PyArrow backend since in that case, read_csv does not support thousands or par states.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=105)** We can, however, convert the data frame to PyArrow types after loading.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=111)** Let me show you a couple of common variants of read_csv that you may need in everyday code.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=117)** If the columns are separated by spaces rather than commas, as in this file, we use sep to specify the separator.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=128)** Here, /s+ means any number of space like characters, and we need a row string starting with an R so that Python does not try to interpret the backslash.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=142)** If the column names were missing in the first row, as in the file Planets-noheader.csv, we need to tell that to read_csv, so it won't try to use the first row as names for the columns.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=158)** Here, we did not tell it, and now we do.
>
> **[2:42](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=162)** Even better, we provide the column names ourselves.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=166)** Pandas read_csv has many other useful options, such as skipping rows at the top and bottom, reading a fixed number of rows, selecting columns.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=177)** There are options about parsing dates and floating numbers.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=180)** We may also provide a custom Python function to parse specific columns, and a lot more.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=187)** These options are mirrored in the writing function to CSV.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=192)** For instance, we can specify the separator.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=196)** We can instruct pandas to write out null values instead of skipping them.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=201)** That's generally a good idea.
>
> **[3:24](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=204)** We can omit the index or we can omit the header or we can change the date format and so on.
>
> **[3:35](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=215)** There's no substitute for the documentation.
>
> **[3:37](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=217)** Although these days, you can also ask for help from your favorite large language model.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=224)** This table summarizes the most useful read_csv options.
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/importing-data-with-pandas?u=76281980&t=229)** It's included in the pandas cheat sheet PDF document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), function (2), continue (1), this. (1)
> **Code Identifiers:** read_csv (6)
> **File Paths:** planets.csv (1), planets-noheader.csv (1)
> **CLI Commands:** python (2)
> **Env Vars:** csv (1), pdf (1)
> **Analogies:** such as (1), for instance (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)

#### Cleaning data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=0)** - [Instructor] In addition to simple ASCII tables, Pandas supports many other formats: JSON, using web applications, HTML and XML, which we may scrape directly from my website, Microsoft Excel spreadsheets, HDF, the hierarchical format for scientific data, the very efficient binary formats from the Apache Software Foundation, such as Feather and Parquet, proprietary statistic software formats such as SaaS, Stata, and SPSS, SQL databases, and finally, the internal binary Python format, Pickle.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=42)** In some cases, you need to install other packages to support that functionality.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=47)** I've indicated those packages in this table, but Pandas itself will tell you if you need them.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=53)** This list is not exhaustive.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=54)** Other formats are supported by third party packages, so it's always worth Googling or asking your favorite large language model.
>
> **[1:04](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=64)** In this video, we'll concentrate on a few useful formats, but our considerations will apply more generally.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=71)** Let's first talk about saving.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=73)** Say we did the work of loading a very clean table.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=79)** How can we save it and preserve all this detail?
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=83)** The simplest way to do so is with Python's serializing capability known as pickling.
>
> **[1:30](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=90)** to_pickle will save, read_pickle will load back.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=96)** Occasionally, you may find that Pickles are not compatible across different versions of Python or Pandas, so this format is best used internally within an application rather than to exchange data with others.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=110)** Personally, I like the very efficient and portable formats developed by the Apache Arrow project, Feather and Parquet.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=119)** For large data files, this can be several times faster than Pickle and many times faster than text.
>
> **[2:06](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=126)** So we can save with to_feather and read with read_feather, similarly for Parquet.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=135)** Let's move on to JSON, the native JavaScript data format.
>
> **[2:20](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=140)** This is, strictly speaking, a text format, but it is meant more for machine reading and writing than for people.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=147)** In addition, the JSON syntax is very close to Python lists and texts.
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=152)** We'll use a simplified version of the planet's dataframe to exemplify JSON reading.
>
> **[2:37](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=157)** The important point is that there are different ways to organize a dataframe using dicts and lists, and therefore JSON.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=167)** Perhaps the most straightforward way is having one dict for each record.
>
> **[2:52](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=172)** This is also what we would need, for instance, in the JavaScript plotting library, D3.js.
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=178)** So have a look at this file, Planets-records.json.
>
> **[3:03](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=183)** Pandas has no problems loading this.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=187)** To write out this variant of JSON, we'd use to_json with the option orient='records'.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=196)** If you have an explicit index, you'd probably use a dictionary of dictionaries as in the file, Planets-index.json.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=206)** To parse this, you need to tell Pandas with orient='index'.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=214)** Otherwise, you end up getting the transpose of the table.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=218)** To reduce file size, a JSON file may be organized to separate labels, both the index and the column, and condense the values in a list of lists as in file Planets_split.json.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=233)** This is known as a split orientation.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=236)** And again, we can load it by telling Pandas that's what we have.
>
> **[4:02](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=242)** Other JSON options are similar to Read CSV, for instance, to set how dates and floats are parsed.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=249)** Missing values are always rendered as null in JSON, which is mapped back to the correct missing data value in Pandas.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=258)** Last, I want to show you how Pandas can parse HTML.
>
> **[4:23](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=263)** We look at a page from Wikipedia about athletics at the 2024 Summer Olympics.
>
> **[4:31](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=271)** There are several tables here.
>
> **[4:38](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=278)** You don't even need the file.
>
> **[4:40](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=280)** You can just provide a URL to Pandas.
>
> **[4:43](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=283)** But for convenience, I have dumped the page and included the file in the repository.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=289)** If we just use Read HTML, Pandas tries to parse all the tables in the webpage, and we get back a list of dataframes.
>
> **[5:01](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=301)** But we can use match to look for a specific word and thus select a subset of tables.
>
> **[5:08](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=308)** We could also use an HTML attribute such as ID, but that doesn't help us with these Wikipedia tables.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=314)** In this page, by looking for rank, we get a table of medals listed by country.
>
> **[5:22](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=322)** Parsing options are similar to Read CSV.
>
> **[5:26](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=326)** For instance, we can indicate which columns should provide the index.
>
> **[5:31](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=331)** And we can remove the last row since we know how to make our own totals.
>
> **[5:35](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=335)** You can imagine how useful it can be to grab data on the internet and get it into Pandas for analysis.
>
> **[5:41](https://www.linkedin.com/learning/python-data-analysis-24296803/cleaning-data?u=76281980&t=341)** However, as we'll see in the next video, HTML data often needs significant cleaning and reorganization.

> [!info]- Semantic Content
>
> **Env Vars:** json (9), html (5), csv (2), ascii (1), xml (1)
> **Analogies:** such as (3), for instance (3), similar to (2), imagine (1)
> **CLI Commands:** python (4), apache (2), find (1), make (1)
> **Code Keywords:** let (2), finally, (1), this. (1), this, (1)
> **Code Identifiers:** to_pickle (1), read_pickle (1), to_feather (1), read_feather (1), to_json (1)
> **File Paths:** d3.js (1), planets-records.json (1), planets-index.json (1), planets_split.json (1)
> **Definitions:** known as (2)
> **Cross-References:** in the next (1)

#### Filtering, reshaping, and tidying data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=0)** - [Instructor] To demonstrate cleaning and reorganizing data, we look at another table from the Wikipedia Paralympic page, specifically the table of medals in the 23 events for men.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=13)** We locate it with rate HTML using the name of one of the medalists as a match.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=20)** Now this Wikipedia HTML tables are made for display, not for data transfer.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=26)** So there are several things here that we need to fix.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=30)** First, we know that some records have no data that comes from HTML table dividers.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=37)** We drop those records with dropna.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=42)** Next, I'm bothered by the word details attached to every event name.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=48)** We get rid of that with appenda string function that selects a slice within each value.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=55)** So we cut out the last eight characters.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=59)** Before we get to work on separating athletes and countries and normalizing the performance values, we recast this data frame following the principles of tidy tables.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=73)** Tidy tables were popularized by Hadley Wickham and the basic idea is that each variable forms and column and each observation forms a row.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=83)** Tidy data is easier to manipulate, filter, and summarize using tools like Pandas in Python and it's easier to plot and visualize.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=93)** The problem with that data frame is that if we wish to find an athlete, we need to look in three separate columns, gold, silver, and bronze.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=104)** Furthermore, the type of medal won by an athlete is not a variable, but it is encoded by the column in which we find the athlete.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=113)** We want to recast the table so that each medal and athlete will get a separate record.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=120)** The pandas data frame method melt is just what we need.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=125)** Let's focus on the athletes first.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=128)** We want the values from three columns, gold, silver, and bronze to be condensed into a single column athlete.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=136)** And we want the names of those columns, gold, silver, and bronze to become another column, medal.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=145)** With pandas melt, the columns listed under ID VARs are preserved and play the role of an index.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=153)** The value VARs are the columns that provide the values and their column names are saved in the new column, VAR name.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=163)** So you see that the first record in the original table, here, becomes three records in the melted version.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=171)** Let's try that out.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=176)** Excellent. Now every athlete gets his own row.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=180)** We'll do the same for the performance results, the times, heights, and lengths.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=186)** And you see where this is going.
>
> **[3:08](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=188)** Now we need to merge these two tables, but first we need to remove those annoying dot one from the medal column.
>
> **[3:16](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=196)** The panda string function replace works fine here.
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=202)** So here's the merge. We merge on both event and medal.
>
> **[3:29](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=209)** What's left to do?
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=210)** We need to separate athlete and country and to do that, we notice that the athlete field, actually, includes a unicode non-breaking space between the two.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=221)** We can then split the strings on that.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=224)** To do so, we use the string function split, followed by get.
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=229)** Get perhaps is not the most obvious naming for taking an element in a two pole, so you'll have to remember it.
>
> **[3:57](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=237)** Now we have athlete and country. Are we quite done?
>
> **[4:02](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=242)** Well, the relay events have different formatting without the non breaking space and it's not easy to split those because some countries are one word and some are two.
>
> **[4:14](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=254)** So we will define a custom function to extract the country, taking different paths for individual and relay events.
>
> **[4:22](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=262)** We could get a proper table of countries, but since this is Python and we prize pragmatism, we write our code only for the countries we actually have.
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=272)** Now for the relay events records only, we apply this function to the athlete column and assign the result back to the column itself.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=284)** Okay, now for the result field, let's see what values it takes.
>
> **[4:50](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=290)** The parenthesis just give higher precision for the results, so we may as well get rid of them.
>
> **[4:56](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=296)** For that, we'll use a regular expression that matches anything within parenthesis.
>
> **[5:01](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=301)** It's outside the scope of discourse for me to explain regular expressions, but you can learn more about them in the LinkedIn learning course by Kevin Skoglund, or from many resources on the web.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=314)** We also get rid of PTS or M for meters.
>
> **[5:17](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=317)** We can figure out the units based on the event.
>
> **[5:22](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=322)** All that's left to do is to split off the two letter annotations that denote records such as PB, AR.
>
> **[5:30](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=330)** For that, we need to chain three string methods, splitting at the space, taking all the resulting items except for the first and joining them back into a string.
>
> **[5:42](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=342)** Here we go, OR, WR, AR and NR are Olympic, world, continental and national record.
>
> **[5:52](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=352)** PB is personal best and SB is season's best.
>
> **[5:58](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=358)** Beautiful.
>
> **[5:59](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=359)** Our table is fully cleaned up and tidied up.
>
> **[6:02](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=362)** We can celebrate by asking a few questions from the data.
>
> **[6:06](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=366)** We ask, "Which gold medals were also Olympic records?"
>
> **[6:11](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=371)** Just six of them.
>
> **[6:14](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=374)** We ask, "How many bronzes were personal bests or season bests?"
>
> **[6:19](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=379)** See the logical and, and the logical or, that we used to combine these conditions.
>
> **[6:27](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=387)** Well, we're down to those athletes.
>
> **[6:30](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=390)** And which male athletes won the most medals in individual events?
>
> **[6:35](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=395)** If you follow the 2024 Olympics, you'd know already.
>
> **[6:40](https://www.linkedin.com/learning/python-data-analysis-24296803/filtering-reshaping-and-tidying-data?u=76281980&t=400)** It's Grant Fisher and Noah Lyles.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), match. (1), var (1)
> **Env Vars:** html (3), var (1), pts (1)
> **CLI Commands:** python (2), find (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Simulating data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=0)** - [Instructor] Sometimes you need to develop a data analysis application before you have access to the data.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=5)** In that case, a good approach is creating fake data with the right structure and realistic content.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=11)** Then you can use that to populate your tables and test your algorithms.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=15)** However, making these records by hand can be very time-consuming.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=20)** Of course, the Python ecosystem can help with that.
>
> **[0:23](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=23)** The Faker package is a popular library to generate random, realistic-looking fake data, such as names, addresses, dates, and more.
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=31)** Let's have a look at what it can do.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=35)** Note, there's a lot of detail in this code, so it may help you to occasionally stop the video and parse the code to make sure we understand what's happening.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=44)** We start by creating an instance of the Faker class.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=48)** Then we can call its methods to make up a person, a name, address, date of birth, city, and state.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=57)** To make this a bit more interesting, we're going to create a database of imaginary musical performers of their songs and of the songs rankings in a weekly billboard.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=68)** We start with an imaginary performer.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=70)** In addition to name and date of birth, we put together a city and state of birth, and we pick a random genre from a list using random element.
>
> **[1:20](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=80)** Here's an artist that's a Python dictionary.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=83)** We collect 100 random artists in a DataFrame.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=87)** The index is just a simple ordinal range.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=91)** That's just fine as a unique ID, which we will use to link to other tables.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=96)** So we'll name the index explicitly artist_id.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=100)** Now for imaginary songs, we'll include a random artist, a random title of up to 20 characters, the date of release in the last two years, and the appropriate genre.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=113)** Well, yes, I agree that the title could be more incisive.
>
> **[1:56](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=116)** Let's try another one.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=117)** Maybe better.
>
> **[1:59](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=119)** I'll make a table with 500 songs.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=122)** And again, I'll adopt the a automatically generated index.
>
> **[2:07](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=127)** Now we're get into the weeds a bit.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=129)** I'd like to create a history of plays, say on the radio for each song.
>
> **[2:14](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=134)** The history will start from the release date, continue for a random number of weeks, and so that's how I compute the end date.
>
> **[2:24](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=144)** I will create a range of dates that covers the weeks.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=148)** We use the Pandas function date_range.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=150)** A frequency parameter of W-MON gets us a Monday every week.
>
> **[2:36](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=156)** We simulate a very simple history, declining linearly from a random initial value, and multiplying by random coefficients between 0.8 and 1.2 to add some noise.
>
> **[2:48](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=168)** If you want to play with this, you can get as fancy as you wish.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=173)** Great. Let's pull all of this together.
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=178)** Looks good.
>
> **[3:00](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=180)** I'll make such a history for each song.
>
> **[3:03](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=183)** The index from each history will be useful because it gives us the number of weeks since the release of the song, so we'll turn it into a regular column with reset_index and change its name to week.
>
> **[3:20](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=200)** We will concentrate on the last year only, downselecting our table using a Boolean condition.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=206)** We also need to sort this table by date, earliest first, and by number of plays, largest first, because we want to get the top 10 each week.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=218)** To collect all the top 10s, we group by date, take the first 10 records, and then set the data as index.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=227)** We can then use loc to get the top 10 for a given week.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=233)** With another groupby operation.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=235)** We can compute the rank of each top 10 song every week.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=240)** Finally, we merge with a song and artists tables using a song_id and artist_id to get titles and performers.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=249)** Remember that those IDs are actually in the index of the tables so merge, we'll need options to reflect that.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=259)** We are done.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=260)** We have all the top 10s in a DataFrame with titles and artists.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=265)** So we may ask, is there any performer who has been as the top of the billboard more than once?
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=272)** Oh yes.
>
> **[4:33](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=273)** Tammy Morris took four first spots with two songs, "Nor Control Attack" and "Whose of Small Send."
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=284)** Let's save our work.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=285)** Not all the Pandas output formats can save multiple tables together.
>
> **[4:50](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=290)** Pickles are always an option, and so is one format that we did not discuss in detail, HDF5.
>
> **[4:58](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=298)** With HDF5, the DataFrame method to HDF keeps app appending tables to the same file.
>
> **[5:05](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=305)** You can give a key, which is how the individual tables are found in the file.
>
> **[5:10](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=310)** In fact, HDF5 files can have a hierarchical structure similar to a file system.
>
> **[5:17](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=317)** To read the tables back into the Pandas, we'd use HDFStore with a simple dictionary syntax.
>
> **[5:26](https://www.linkedin.com/learning/python-data-analysis-24296803/simulating-data?u=76281980&t=326)** And that is all for a foray in faking data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), class. (1), continue (1), function (1)
> **CLI Commands:** make (5), python (2)
> **Code Identifiers:** artist_id (2), date_range (1), reset_index (1), song_id (1)
> **Env Vars:** hdf5 (3), mon (1), hdf (1)
> **Versions:** 0.8 (1), 1.2 (1)
> **Analogies:** such as (1), similar to (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)

#### Solution: Country rankings
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=0)** - [Instructor] So we need to return a table of the top four countries in athletics, ranked by medal count.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=8)** This is complicated enough that I will do it in steps, returning a partial result every time.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=14)** CoderPad will continue to scold me, but too bad.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=20)** First, I will group by medals.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=30)** The array is called medals, and counts the occurrence of each country's name.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=40)** Let's try this.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=42)** Good. This gets me a series with a multi-index.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=46)** Remember, we can move a level of the index to columns using unstack.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=53)** Removing the first level, here it goes.
>
> **[0:57](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=57)** Better. Good progress.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=60)** I also want to get rid of those NaNs.
>
> **[1:03](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=63)** They should be zeros.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=67)** Next, we compute totals for each country by summing over the columns.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=79)** Good.
>
> **[1:20](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=80)** Last, we sort.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=87)** And we take the first few.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-country-rankings?u=76281980&t=92)** Perfect. Well done.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1), this. (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 9. 8. Summarizing and Visualizing Data

#### Overview: Exploring data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=0)** - [Instructor] Once we have imported our dataset and we are satisfied that it is clean and refactored, it's time to start exploring it, summarizing it, and visualizing it.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=11)** We'll be trying to understand the typical values and the range of variation of our variables, and to identify which variables are correlated.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=20)** In this chapter, we will again work with datasets from the Gapminder project.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=25)** Let's have a look at the dataset.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=30)** For all the countries in the world and for years starting in 1900, the dataset encodes a few basic trends: the approximate population, the expected lifetime, the percentage of children surviving to age five, the average number of babies per woman, and the gross national product divided by population.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=52)** The unit is 2017 equivalent dollars.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=55)** We also look at the second dataset that describes the distribution of incomes in China and in the USA in 1965 and 2015.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=70)** The Gapminder website includes a number of beautiful and powerful visualizations.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-exploring-data?u=76281980&t=77)** We will use Python to reproduce some of them.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Env Vars:** usa (1)
> **Speakers:** - [instructor] (1)

#### Summarizing quantitative data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=0)** - [Instructor] To understand the dataset, we begin by summarizing it.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=5)** That is, we quantify both the typical trends of the variables and the variations around them.
>
> **[0:11](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=11)** In short, the distribution of the data.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=14)** In this video, we'll look at a few simple ways to summarize the distribution of a numerical variable.
>
> **[0:21](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=21)** We'll examine Gapminder data that describes the distribution of incomes in China and in the US in 1965 and 2015.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=30)** These distributions are not very accurate, but they will be sufficient for our example.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=37)** For each country and year, we have 1,000 entries corresponding to a sample of 1,000 representative people.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=44)** One way to describe the variation of a variable is by quantifying its range.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=50)** However, focusing on these extremes, the minimum and the maximum, is usually not very insightful.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=58)** It's also imprecise, given that our set is a limited sample of a population rather than a complete census.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=65)** Both minimum and maximum are statistics, descriptive numbers that we compute from the data and that summarize the data.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=75)** Of course, another very important statistic is the mean, computed by summing up all the data points and dividing them by the number of points.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=86)** In symbols, we write a sum of the data points, xi, divided by how many we have.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=93)** In Pandas, we just type mean.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=97)** We can use groupby with the index variables to compute the statistics separately for each country and year.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=104)** The variance is a measure of variation tied closely to the mathematical concept of normal distribution To compute it, we obtain divisions from the mean, square them, and take the average.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=118)** And for a technical reason, we actually divide by the number of points minus 1.
>
> **[2:03](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=123)** In Pandas, it's just var.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=128)** The standard deviation is the square root of the variance.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=132)** Taken together with a mean, it gives a pretty good idea of the center and spread of a distribution.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=141)** In Pandas, it's std.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=145)** Next, the quantile.
>
> **[2:27](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=147)** The quantile is a statistics that describes the value for which we know that a certain percentage of the data points lie below.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=158)** We computed with quantile.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=160)** Taken together, the 25th and 75th quantiles specify a coverage interval that includes 50% of the data points.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=169)** The 50th quantile is known as the median.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=174)** From this table, we say that in 2015, approximately half of the Chinese population made less than $2,800, and approximately 25% made less than 1,800.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=189)** Last, the inverse of the quantile consists in finding the percentage of the population at which a given value or score lies.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=199)** To find it, we need to go outside Pandas to SciPy stats.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=206)** And to compute a non-Pandas statistic we group by, we use apply.
>
> **[3:33](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=213)** In China in 1965, no one in our sample made $5,000 a year.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=219)** By contrast, it was a very low income in the States in 2015.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=225)** 4.5%.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=227)** The Pandas method, describe, returns several summary statistics at once.
>
> **[3:54](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=234)** Between 1965 and 2015, China made great strides, but it still had some way to go.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=241)** We see this clearly if we take USA 2015 values as a reference and use them to normalize, to divide the other entries.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=251)** Very good.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-quantitative-data?u=76281980&t=253)** In the next video, we move on to plotting these distributions.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1)
> **Code Keywords:** var (1)
> **Env Vars:** usa (1)
> **Versions:** 4.5 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Visualizing distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=0)** - [Instructor] We continue to analyze the income distributions in the US and in China be plotting them.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=6)** Hans Rosling argues convincingly that the logarithm of daily income is the number that's really descriptive of the lifestyle available to a person anywhere in the world.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=18)** So we compute that and plotted alongside yearly income.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=24)** The summary statistics that we described in the last video are brought together visually in a box plot, a PANDAS plot of kind box.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=35)** The box itself extends from the 25th to the 75th quantiles with the line at the median.
>
> **[0:43](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=43)** The so-called whiskers have a complicated definition.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=46)** They're the minimum and maximum values in the dataset, but only if those do not stray too far from the 25th and 75th quantiles.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=56)** Precisely, not more than one and a half times the inter-quantile range between them.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=62)** If they do stray out, they're considered outliers and they're plotted individually.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=68)** That's what we see in the US income data for some wealthy individuals.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=72)** Remember, these are just representative points, not actual people.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=77)** To compare China and the US in 1965, we reset the index of the dataset and we tell PANDAS to stratify the plot by year and country, the scales here are so different that we don't see much.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=94)** It's better to make box plots of the logarithm of the income.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=100)** From this plot, we understand that both countries improved between 1965 and 2015.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=107)** In 2015, China is not too far from the US of 1965.
>
> **[1:53](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=113)** Remember that the log 10 of zero means $1 and a log 10 of two, $100.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=120)** A much richer visualization of a distribution is a histogram, which divides the data into a set of continuous bins of equal width, and then for each bin shows a rectangle with high proportional to the number of data points that belong there.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=137)** This shows that in 1965, most people in China had daily incomes slightly below a dollar.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=145)** We can enhance the histogram by marking the locations of a few descriptive statistics using vertical lines, XV line in map plot label.
>
> **[2:35](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=155)** To distinguish between one line and the other, we use different line styles.
>
> **[2:41](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=161)** So here we showing the mean, the median, and the 25th and 75th quantiles.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=167)** A density plot is effectively a smooth histogram, which associates an estimated frequency with every value on the X axis.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=177)** Here I'm comparing the histogram and the density plot, so I have normalized the histogram by setting density equal true.
>
> **[3:05](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=185)** Then the area under the curves is the same for both.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=190)** Remember that the smooth line is just an approximation.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=194)** It's also dependent on the scale of the smoothing, which is chosen automatically by which we can set directly.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=201)** Let's compare histograms for China and the US using log income.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=206)** In 1965, there is basically no overlap.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=210)** The poorest Americans are richer than the richest Chinese.
>
> **[3:35](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=215)** In 2015, the situation is very different.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=218)** Both the Chinese and the Americans are richer, but there's also significant overlap, and of course there are many more Chinese than Americans.
>
> **[3:47](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=227)** To see how that may affect our understanding of the data, we rescale the histograms using the respective populations.
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=235)** To do that, we need an array of weights of the same length of the data that we are plotting.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=241)** This is complicated enough to do that I'm going to show you to you step by step.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=246)** So here's the data that I need to histogram.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=251)** I also need the main gapminder dataset to get populations, and here's the population of China in 2015.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=259)** This query produces a series of length one, I actually need a single value, so I take the first and only record.
>
> **[4:28](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=268)** I will multiply that value by an array of once and divide by the length of the series.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=276)** This weight means that every sample will represent approximately 1.4 million people.
>
> **[4:42](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=282)** Finally, my weighted histogram.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=286)** I can repeat this for the two countries together.
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=291)** Rosling points out correctly that there's a lot of purchasing power at the richer end of the Chinese population, so corporations will do well to tap that market.
>
> **[5:03](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=303)** You may have noticed that PANDAS plots are rather drab.
>
> **[5:07](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=307)** Of course, you're free to fine tune them using Matplotlib.
>
> **[5:11](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=311)** An alternative is using the plotting functions of the Seaborn library, which pays much more attention to presentation.
>
> **[5:20](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=320)** Later in this course, I will introduce another plotting package, Plotly, which has the added advantage of allowing interactivity.
>
> **[5:28](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=328)** In Seaborn, the names and options of the plotting functions are slightly different than in PANDAS or Matplotlib.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=334)** However, it's easy to Google them or to ask your favorite AI assistant.
>
> **[5:40](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=340)** Let's look at 2015.
>
> **[5:43](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=343)** Here are box plots and density plots, respectively.
>
> **[5:46](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=346)** Picking two of Seaborn's figure styles.
>
> **[5:50](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-distributions?u=76281980&t=350)** Seaborne plots are rather elegant.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), extends (1), finally, (1)
> **Env Vars:** pandas (4)
> **Cross-References:** in the last (1), later in (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Versions:** 1.4 (1)
> **Speakers:** - [instructor] (1)

#### Comparing quantitative variables
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=0)** - [Instructor] Plotting two variables together helps us identify possible relations between them.
>
> **[0:05](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=5)** Do they rise and fall together?
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=7)** Is it possible that changes in one may cause or be caused by changes in the other?
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=13)** We often pick one column in a dataset as the explanatory variable, and see if indeed it explains the variation in a response variable.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=22)** Let's once again load the gapminder dataset.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=28)** For data with timestamps, the simplest thing to do is to plot a variable using the date as the explanatory variable.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=35)** That is, to plot a time series.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=38)** I will focus on my country of birth, Italy, and show you a time series of population.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=45)** So here's the restricted dataset, and here's a scatterplot of population against year.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=52)** The rate of change of the population doesn't change very much across two centuries.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=58)** The same plot will be different for China or India, especially after 1950.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=65)** Here I am superimposing two plots by reusing the matplotlib axis returned by the first one.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=72)** Going back to Italy, let's look at income per person in 2017 equivalent dollars, again, as a time series.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=81)** We will actually plot the logarithm of the income by specifying logy=True.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=89)** Here one can see a big dip during World War II, and in the top corner, a dip after the 2008 financial crisis, and a smaller one for COVID-19.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=101)** All in all, the last 20 years in Italy have been rather disappointing.
>
> **[1:46](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=106)** What if we plot log income against the variable related to quality of life, such as life expectancy?
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=114)** We see that they are generally correlated with some turnarounds.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=120)** We can get a better sense of those by adding color, which is mapped to the year.
>
> **[2:07](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=127)** An important point, whenever you use color to communicate information, you should be mindful of colorblindness.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=136)** The matplotlib color map varied this, was designed to be safe for various types of color deficiencies.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=145)** Plot in a time series of life expectancy confirms that dips happened with the two wars, and a much smaller dip in 2020 with COVID-19.
>
> **[2:37](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=157)** Plots on a monitor or on paper are intrinsically two dimensional, so it's hard to go beyond showing two variables.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=166)** In addition to exposition, white position, and color, which we just use to encode the year, we can also encode variables using the size of markers, the shape, the contour, and perhaps their texture.
>
> **[3:02](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=182)** All these dimensions are sometimes called scales.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=187)** We will reproduce a classic Gapminder plot.
>
> **[3:10](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=190)** We take the entire world in 2015 and plot log income, life expectancy, and population using the size of the markers.
>
> **[3:20](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=200)** This size argument S specifies the areas in point squared, so we need to scale the population column appropriately.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=210)** Here it is.
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=211)** To make it a bit clearer, we set a white contour for the markers.
>
> **[3:37](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=217)** We can then use color to distinguish between continents.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=221)** For that, we need to map the region column to a color name and pass the resulting Pandas series to scatter.
>
> **[3:48](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=228)** Here's the map and here's the colorful plot.
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=233)** Last, we'll emphasize a single country by changing the edge color.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=238)** The USA has a black circle around the green.
>
> **[4:03](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=243)** This is very pretty and very promising, but to understand how things are changing across the century, we can animate this plot by creating a function that takes a year as an argument and passing that function to a Jupyter widget.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=259)** In this case, we will use a simple slider ranging from 1950 to 2023 to select a year.
>
> **[4:28](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=268)** And a dropdown selector to decide which country should be emphasized.
>
> **[4:34](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=274)** Here's the generic plotting function, here's the Jupyter Library pywidgets, and here's the interactive plot where we set the argument's year and country equal to a widget.
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=292)** Now the slider gives us interactivity.
>
> **[4:55](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=295)** The progress of all countries is evident in income and life expectancy, but especially so for Asia.
>
> **[5:04](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=304)** Orange, which now hosts more than half of the world's population.
>
> **[5:18](https://www.linkedin.com/learning/python-data-analysis-24296803/comparing-quantative-variables?u=76281980&t=318)** Indeed, interactivity is now a further element that we can exploit to visualize that effectively.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), this, (1), pass (1), case, (1)
> **Env Vars:** covid (2), usa (1)
> **Tools:** jupyter (2)
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Summarizing and visualizing categorical data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=0)** - [Instructor] We move on to categorical variables, those that take a value from a finite, discrete set.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=6)** How do we describe variation in categorical variables?
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=9)** Well, of course, with tables.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=12)** We switch from Gapminder to the Whickham dataset discussed by Kaplan in his excellent textbook "Statistical Modeling."
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=20)** The table records interviews with women in Whickham, England in 1973 who were asked if they were smokers.
>
> **[0:29](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=29)** The interviews were followed up 20 years later.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=32)** When it was recorded, if the women were still alive.
>
> **[0:36](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=36)** The categorical variables in this case, smoker and outcome, are both binary, yes or no.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=45)** Here are the first five rows of the dataset.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=49)** Using value counts, we can tally the explanatory and response variable separately.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=56)** Smoker is the explanatory variable.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=59)** Outcome is the response.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=62)** This doesn't tell us much.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=65)** Other than that all the groups are represented fairly well, smokers and non-smokers, women who survived for 20 years and those who didn't.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=75)** If we want to see the values as fractions of the total number of records, we add normalize equals true.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=82)** These fractions are known in statistics as proportions.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=87)** We are looking for an association.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=89)** That is, we wish to evaluate a claim that the groups of smokers and non-smokers are different with regards to their longevity.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=98)** So we break down the proportion of outcomes by smoker group, using group by.
>
> **[1:46](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=106)** The resulting series has a two level multi-index.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=110)** To organize the proportions in a table, we move the inner index to a column using unstack.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=118)** This stable in fact is a bit surprising.
>
> **[2:01](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=121)** It seems that smoking improves the chance of being alive 20 years later.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=128)** The problem is that we're not controlling for other variables such as age.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=132)** If smokers are younger on average at the beginning of the study, then it stands to reason that more of them will be alive after 20 years no matter what.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=142)** To investigate this puzzle, we use the method that statisticians call stratification.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=148)** We divide the people in the table, our cases, into age groups.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=153)** The pandas function to do this is cut, and we get to pick the boundaries of the bins.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=160)** We see that the result is another categorical variable, age group.
>
> **[2:46](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=166)** Let's see the counts in each group.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=169)** We see the young and middle aged women in 1973 are equally represented.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=174)** Older women, less so.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=177)** This time, we will first group the data by age group and then by smoker status.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=184)** In each age group, non-smokers have a better life expectancy.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=189)** So this data represent an example of Simpson's paradox, a phenomenon in probability in statistics in which a trend appears in several different groups of data, but disappears or reverses when these groups are combined.
>
> **[3:24](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=204)** Let's plot.
>
> **[3:26](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=206)** We start by plotting counts separately for our response and explanatory variables.
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=211)** This is a bar plot.
>
> **[3:33](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=213)** The bars could also be horizontal.
>
> **[3:37](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=217)** For that, we switch the kind from bar to bar H.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=221)** We could even use a pie chart.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=224)** Now let's try to break up the visualization so we show the outcome by smoker status.
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=229)** We have already created a table group by outcome.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=236)** Here it is.
>
> **[3:58](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=238)** We can plot that as bars.
>
> **[4:01](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=241)** We can also do a stacked histogram by specifying stacked equals two.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=247)** This plot illustrates the original suspicious finding that smoking improves the outcome.
>
> **[4:14](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=254)** So let's do stratification.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=258)** We first create a table, group by age group, and then plot with bars.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=264)** This is a decent first try, but the multi-labels on the x-axis make this confusing and difficult to parse.
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=272)** We can do better by plotting only the fraction of people who are alive.
>
> **[4:37](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=277)** We select them using lock.
>
> **[4:40](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=280)** We plot with bars again.
>
> **[4:42](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=282)** And here, we do see that in every age group, non-smokers have a slight edge in outcomes.
>
> **[4:48](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=288)** That is Simpson's paradox at work.
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-and-visualizing-categorical-data?u=76281980&t=292)** This completes our tour of summarizing and visualizing distributions with pandas and Matplotlib.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (2), case, (1), function (1), try, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 10. 9. Introduction to Data Modeling

#### Overview: Understanding data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=0)** - [Instructor] In this chapter, we will focus on the task of understanding the meaning of data by modeling.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=7)** Given a data set with multiple variables, we seek to capture the way in which the variation in one or more response variables is caused by the variation of one or more explanatory variables.
>
> **[0:20](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=20)** A model can be seen as a function that takes explanatory variables as input and outputs response variables.
>
> **[0:28](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=28)** The model will depend on a number of parameters which are usually not known in advance.
>
> **[0:34](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=34)** So to fit a model to the data, we apply to the explanatory variables for each case in our data frame, and we compare the response variables as predicted by the model with the corresponding observed variables.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=51)** We then modify the parameters of the model until the difference, the residual between the predicted and observed values, is minimized in a precise mathematical sense.
>
> **[1:04](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=64)** Once we have fit a model, it becomes useful for two different goals.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=69)** First, its parameters may reveal important qualities of the population and the study.
>
> **[1:16](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=76)** Second, we can use the model to predict the response value for sets of explanatory variables that we have not yet observed.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=86)** Perhaps they're in the future.
>
> **[1:28](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=88)** To choose between alternative models, we can compare the goodness of fit, which is usually a single number derived from the residuals.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=99)** This is known as in sample goodness of fit, because it tells us how well the model does on the data that was used to fit it.
>
> **[1:48](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=108)** Doing so will tend to overstate goodness of fit, especially with very complex models, the fit will tailor the model to the specific data set that we got rather than the general characteristics of the data.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=124)** There are mathematical techniques that can adjust in sample goodness of fit by accounting for the complexity of the model.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=131)** Alternatively, we can set apart some of the data, excluding it from the fit, and then evaluators for those testing data.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=141)** Doing so is known as out of sample goodness of fit, and it provides a more accurate measure of performance.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-understanding-data?u=76281980&t=148)** But enough talk, let's get to our data and to Python.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), let (1)
> **Definitions:** known as (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Fitting models to data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=0)** - [Instructor] To demonstrate model fitting, we return to our gapminder data.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=6)** We will take the year 1985 and study the relation of child survival rates and number of babies per woman.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=16)** We tell Pandas explicitly that the region is a categorical variable.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=22)** Let's make a quick scatter plot as we learn to do in chapter eight.
>
> **[0:26](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=26)** We map the continents to colors and populations to areas of markers, and since we'll use this plot repeatedly, let's make it into a function.
>
> **[0:39](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=39)** We immediately observe that the numbers of babies per woman decreases with the probability of their survival.
>
> **[0:45](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=45)** This makes sense in a sad, pragmatic way.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=49)** We will fit models using the extensive Python package stats models where we'll only sketch the surface of what stat models can do, and we will default to its OLS method, which is found in the formula.api module.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=67)** OLS stands for Ordinary Least Squares.
>
> **[1:12](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=72)** Least squares means that models are fit by minimizing the sum of square differences between model predictions and observations.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=81)** Ordinary means that the model coefficients appear linearly in the model formulas, so they multiply the explanatory variables or functions of the explanatory variables.
>
> **[1:34](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=94)** For ordinary least squares, the best fit parameters can be found using the formulas of linear algebra.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=100)** You can learn about that in any course or textbooks of statistics.
>
> **[1:46](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=106)** However, the nice thing about python and stat models is that you don't even need to remember them.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=114)** In stats models, we specify models using formulas in the teal denotation introduced by Chambers and Hasty in 1992 for the language S.
>
> **[2:05](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=125)** The formulas go like response variable, tilde, model terms.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=131)** And the simplest possible linear model is just a numerical constant which is denoted one in a tilde formula.
>
> **[2:19](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=139)** Once the model is defined, we fit it and see the result in parameters.
>
> **[2:26](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=146)** There's only one.
>
> **[2:28](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=148)** The conventional number for this concept parameter is intercept.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=153)** The intercept is in fact just the mean of the data points.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=158)** Applying the model to our data, which we do with predict, returns the intercept for every case, kind of boring.
>
> **[2:47](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=167)** Still, we can plot this prediction against the original data and evaluate the goodness of fit, clearly not the greatest, since we do not capture any variation.
>
> **[2:58](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=178)** A slightly more complicated model involves separate constants for every continent.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=184)** In tilde notation, we include the categorical variable on the right hand side of the equation.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=192)** We get one common constant, they intercept, plus offsets for all the groups, minus one of them.
>
> **[3:19](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=199)** To get all the groups, we write the constant as minus one.
>
> **[3:25](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=205)** These parameters are in fact the same as the means of the data grouped by region.
>
> **[3:32](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=212)** Plotting this shows that each constant set the average for a continent.
>
> **[3:38](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=218)** However, Asia for one, has a huge variability here that begs to be explained.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=224)** Moving to more sophisticated models, we add child survival.
>
> **[3:49](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=229)** We use its value directly, so we call it a main term of the model.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=236)** Here, the fifth parameter, H5 surviving, tells us that for every additional percent of surviving children, the number of babies per woman, decreases by .15.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=247)** The constants are now larger, and they have a different meaning.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=251)** They give us the number of babies per woman for a hypothetical five-year survival rate of 0%.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=258)** At least visually, our fit is improving.
>
> **[4:22](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=262)** If we wish to have a different slope for every region, we can replace the main term with an interaction term between H5 surviving and region.
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=272)** That's denoted by a colon until the notation.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=276)** When we do that, we see that the fact of survivor rates is weaker in Africa than in the other continents.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=285)** And here's the plot of the predictions, where now the slope is different for every continent.
>
> **[4:51](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=291)** India and China, the two larger orange circles seem to be outliers with respect to the fit.
>
> **[4:57](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=297)** Perhaps we can account for them by including another main term for population.
>
> **[5:05](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=305)** The best fit parameter here looks very small because population is in millions, but basically one additional billion people reduces the number of babies per woman by two.
>
> **[5:15](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=315)** The prediction is spot on for India, but a bit too low for China.
>
> **[5:21](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=321)** Here's a quick cheat sheet for setting up models in the tilde notation, which is used in Python stats models, but also statistical languages such as RNS.
>
> **[5:31](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=331)** The one thing we haven't demonstrated explicitly is a so-called interaction where two explanatory variables enter the model multiply together.
>
> **[5:40](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=340)** We also haven't seen that we can include a function of an explanatory variable.
>
> **[5:46](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=346)** Well done. We've learned quite a bit.
>
> **[5:48](https://www.linkedin.com/learning/python-data-analysis-24296803/fitting-models-to-data?u=76281980&t=348)** In the next video, we'll discuss how we can evaluate the goodness of fit of a model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), module (1), case, (1)
> **CLI Commands:** python (3), make (2)
> **Definitions:** is a  (2), means that (2), stands for (1)
> **Env Vars:** ols (2), rns (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Model evaluation and selection
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=0)** - [Narrator] When we analyze data, we often have many different choices in setting up a model, how do we pick the best?
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=7)** Let's resume things where we left them in the last video, with the Gapminder 1985 data and our dataset plotting function, we also add another function to plot the predictions of the models.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=22)** We consider three different fits, one constant for every region, constants by region plus H5 surviving, and the most complex fit we set up so far, which includes constants by region, H5 survival, group by region, and population.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=42)** Let's see these three in action.
>
> **[0:49](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=49)** Visually, it looks like the most complex model does best, but we should dig into details.
>
> **[0:56](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=56)** The first thing to do is to compare the residuals.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=60)** This is how we compute them manually, but we can also get them from the fit object.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=68)** Histogramming all these residuals together shows that the distribution of errors for the group constant fit is a bit broader, but not by much, and that the other two models are very similar.
>
> **[1:21](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=81)** To distill the comparison into a single number, we can look at the mean squared error of the residuals, which is conveniently available in the fit object.
>
> **[1:32](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=92)** This is in a sense the typical error, and it includes a very simple correction for the complexity of the model.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=99)** These numbers though, are similar and even the best model has a typical error of one child per woman, not great.
>
> **[1:47](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=107)** Beyond the mean square there, there are various more sophisticated ways the statisticians have devised to evaluate goodness of fit.
>
> **[1:56](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=116)** Explaining the mathematics is outside the scope of this course, but we can still try them out.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=122)** One is the R square statistic, which qualitatively describes the fraction of data variation that is explained by the fit.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=132)** For a perfect model, R squared would reach one.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=136)** Again, the R squared for three models are similar.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=141)** With the most complex model perhaps winning.
>
> **[2:25](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=145)** The R square statistic, however, does not take into account the number of fit parameters, so it'll not penalize over fitting.
>
> **[2:33](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=153)** A model that is very good on the data used to train it but not predictive.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=160)** The F statistic includes such a correction.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=163)** The F statistic measures how much each fit parameter contributes to R squared compared to an explanatory variable that has nothing to do with the dataset, in fact, which takes random values.
>
> **[2:57](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=177)** If F is zero, the model explains nothing for a fit of one, the model explains about half of the variation and the larger DF, the greater the explanatory power of the model.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=192)** With this statistic, we see that the intermediate model, surviving fit, seems to hit the sweet spot.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=203)** Step models can compute many measures of goodness of fit.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=207)** Asking for a summary of a fit, we collect them in a nice tabular format.
>
> **[3:34](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=214)** The table includes also the best fit parameters and there estimated errors.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=219)** The table is where you'd go after you've taken a nice course in statistics, but before you go off and study a lot of math, let me show you a pragmatic approach to goodness of fit that is typical of machine learning.
>
> **[3:54](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=234)** The idea is to evaluate out of sample goodness of fit.
>
> **[3:57](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=237)** That is, we exclude some of the data from the fit to test the true predictive power of the model.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=244)** We start by shuffling our data.
>
> **[4:07](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=247)** The Pandas method sample is really meant to draw a number of random rows, but if we set the number to the length of the dataset, the effect will be the same as shuffling.
>
> **[4:19](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=259)** Then we take 90% of the data for training and the rest for testing.
>
> **[4:25](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=265)** Let's train our three models on the training data.
>
> **[4:33](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=273)** The best fit parameters are a bit different than in the original fit, and so are the mean square errors of the residuals.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=281)** We need to compute them by hand for the test data.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=286)** Here we see that the testing means square error is actually lowest for surviving fit.
>
> **[4:52](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=292)** The same result we found with the F statistic.
>
> **[4:55](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=295)** To get accurate results, it's best to repeat from many different random partitions of the dataset and take the average.
>
> **[5:04](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=304)** This is a very pragmatic, straightforward approach.
>
> **[5:07](https://www.linkedin.com/learning/python-data-analysis-24296803/model-evaluation-and-selection?u=76281980&t=307)** I recommend it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Testing hypotheses with Monte Carlo
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=0)** - [Instructor] In this chapter, we have seen how modeling can help us understand data by giving us estimates of model parameters.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=7)** This understanding is necessarily imperfect, because models are never faithful representations of reality.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=15)** Nevertheless, they can be very useful.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=17)** But we can also ask a different type of question, a question about the real property of an underlying population to which we have access only through a sample, for instance, the number of voters in a district that support a certain politician.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=33)** This number really exists, and we could compute it if we could ask any single voter, and if they replied, of course.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=42)** But in practice, we will have access only to a limited sample, say 1,000 randomly chosen voters.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=48)** So our estimate is going to be uncertain, but how uncertain?
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=52)** Statistics offers sophisticated mathematical methods to tackle these kinds of questions.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=58)** Since, however, this is not a course about statistics, what I want to show you is that we can get answers with a little mathematics by resorting to simulations based on random numbers.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=68)** Physicists call this Monte-Carlo, because it's very much like gambling.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=73)** So imagine a very important election is taking place in your city, pitting incumbent mayor, Mr. Brown, against a local celebrity chef, Mrs. Green.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=83)** You work for the local newspaper, and you're asked to poll your co citizens for their vote.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=89)** To make things easy for you, we assume you can reach every voter by phone and that every poll voter replies truthfully.
>
> **[1:37](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=97)** Laboriously, you call 1,000 voters and ask for their voting intention.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=101)** Here's a file of their answers.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=104)** And here are the measured proportions of vote for the two candidates.
>
> **[1:49](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=109)** It seems that Brown will remain mayor.
>
> **[1:52](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=112)** However, the proportion is going to depend on the specific sample that we drew, how much.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=118)** Let's simulate 1,000 voter sample when the true proportion is 51 to 49.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=124)** NumPy has a very handy function for this, random choice.
>
> **[2:11](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=131)** We tell you the votes, and we get the result that's a little different as you expect.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=137)** If we do it again, we'll get again a different number.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=142)** So let's repeat the simulation many times, 2,000, and collect Brown's share.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=150)** Plotting a histogram of this sampling distribution, we see that the two share of 51% may result in infractions between roughly 48 and 54 in a sample of 1,000.
>
> **[2:43](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=163)** This means also that if you observe a majority of 51% for Brown in the sample, the winner may very well be Green.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=171)** Computing summary statistics shows that the error is about 1.5%, and the interquartile range is 50 to 52.
>
> **[3:02](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=182)** Indeed, that means that a true Brown majority of 51% could lead to a poll where Green is a winner about 25% of the times.
>
> **[3:12](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=192)** Journalists must be careful.
>
> **[3:14](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=194)** The fun thing is that once we simulate, it's easy to verify our intuition.
>
> **[3:21](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=201)** For instance, we could check that the slightly stronger true majority for Brown, 55, would almost never result in a poll that is uncertain.
>
> **[3:31](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=211)** And we can show that the larger poll of 10,000 voters would be more precise than a poll of 1,000.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=219)** Statisticians make precise statements about the uncertainty of polling by giving confidence intervals.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=225)** They will say, "Given the sampling, 95% of the times, "the true value would fall within this range."
>
> **[3:53](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=233)** How do we get that?
>
> **[3:55](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=235)** A 95% confidence interval means that we can be wrong 5% of the time.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=240)** We split that equally between too high and too low.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=244)** So we look for the true vote fraction for which the lowest 2.5% of the sampling distribution lies below .51.
>
> **[4:15](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=255)** 55 is a bit too high.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=258)** 54 is right.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=260)** And we look for the true vote fraction for which the highest 2.5% of the sampling distribution lies above .51.
>
> **[4:29](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=269)** That's not 47, that's about 48.
>
> **[4:34](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=274)** So the 95% confidence interval for a finding of 51% in a 1,000 voter poll is between 48 and 54%.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=285)** This is a simple analysis, but it gives you a good sense of how professional pollsters actually estimate their errors, except they have to deal with the complications of reality, such as the fact that any polling may over represent some segments of the population and under represent others.
>
> **[5:00](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=300)** This would be a selection bias, as well as the fact that voters may not respond thoughtfully.
>
> **[5:05](https://www.linkedin.com/learning/python-data-analysis-24296803/testing-hypotheses-with-monte-carlo?u=76281980&t=305)** This would be a response bias.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (2)
> **Code Keywords:** let (2), function (1), this, (1)
> **Analogies:** for instance (2), imagine (1), such as (1)
> **Versions:** 2.5 (2), 1.5 (1)
> **CLI Commands:** make (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### A taste of machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=0)** - [Instructor] If you're taking this course, there's a good chance you're thinking about moving on to big data and machine learning.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=6)** That's a technology of huge importance to the world today.
>
> **[0:09](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=9)** It's also a huge subject, covered by many excellent courses in the LinkedIn library, so all I want to do here is to give you a small taste of machine learning using the tools that we have discussed and using the very comprehensive scikit-learn library.
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=27)** The name machine learning is in fact very descriptive.
>
> **[0:30](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=30)** It's the science of getting computers to learn from data.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=35)** Machine learning covers many different tasks and use cases.
>
> **[0:40](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=40)** Perhaps the most straightforward application of supervised learning is classification.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=47)** We teach an algorithm to analyze an input and assign it to one of a few predefined classes by providing a number of examples, inputs that are already labeled.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=59)** The algorithm will then try to guess the correct label for a set of unlabeled examples.
>
> **[1:05](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=65)** That would be inference.
>
> **[1:07](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=67)** Once more, we will use our Gapminder data and focus on 2023.
>
> **[1:14](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=74)** We'll try to answer a simple enough question.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=77)** Can we tell the continent of a country just by looking at the macro variables of population, life expectancy, child survival, babies per woman, and GDP per capita?
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=89)** We collect these explanatory variables into a Pandas DataFrame, and we make a series from the response variable, which will be our class label, the continent.
>
> **[1:41](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=101)** We want the series to be categorical.
>
> **[1:44](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=104)** A categorical variable can be turned into numerical codes as needed by the scikit-learn algorithm.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=111)** These are the codes.
>
> **[1:54](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=114)** We have already seen the standard modus operandi of machine learning.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=118)** Divide your dataset into training data and testing data, use the training data to train a model or algorithm, and then use the testing data to verify performance.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=130)** scikit-learn conveniently provides a function to the divided dataset into training and testing.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=137)** We will use a classifier known as decision tree.
>
> **[2:22](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=142)** This is an algorithm that splits data into branches, based on the explanatory variables, creating a tree-like model of decisions.
>
> **[2:31](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=151)** Here's an example where we need to distinguish between breeds of dogs.
>
> **[2:36](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=156)** At each node, we are making a decision based on a variable, and we follow different branches based on that, until we find a leaf that matches the input to a class.
>
> **[2:48](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=168)** The point of machine learning is that we don't know what decisions we need to make, which branches.
>
> **[2:53](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=173)** We have to learn them from examples.
>
> **[2:56](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=176)** The machine learning algorithm adjusts the branching point of the decision tree until the labels predicted for the examples match the actual labels, or at least they match them as well as possible.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=191)** So we create our decision tree classifier object and we train it.
>
> **[3:15](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=195)** It only takes a moment.
>
> **[3:18](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=198)** We use the trained tree to assign labels to our test examples.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=203)** These are integer numbers, but we can match them back to categories.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=208)** Let's see how we did.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=210)** Several predictions are indeed correct, but some are just wrong.
>
> **[3:35](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=215)** In fact, scikit-learn tells us that 69% of the predictions are correct.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=221)** We could have computed this ourselves.
>
> **[3:44](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=224)** scikit-learn can give us a much more detailed report, which answers questions that may be important in practical use cases.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=232)** A look at Africa, specifically, to explain what these are.
>
> **[3:57](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=237)** The precision number says that out of all the times the classifier chose Africa, 83% were correct.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=245)** The recall number says that out of all the examples from Africa, 87% were correctly identified.
>
> **[4:13](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=253)** The f1-score is an average of these two, and the support is a number of test dataset examples from Africa.
>
> **[4:21](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=261)** Finally, the averages at the bottom are taken across classes, without weights, and by waiting for the number of examples in each class.
>
> **[4:30](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=270)** We can also plot the confusion matrix, which shows which two levels, the rows, ended up in which estimated class.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=281)** We want the diagonal here to light up, clearly.
>
> **[4:45](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=285)** We see that the classifier did okay with Africa and Europe, but it found it hard to distinguish between America and Asia.
>
> **[4:53](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=293)** Also, some countries in Asia and Oceania ended up classified into Africa.
>
> **[4:57](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=297)** Can we do better?
>
> **[4:59](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=299)** There are many different classification algorithms of various degrees of sophistication.
>
> **[5:04](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=304)** One step up from a tree is a random forest, which combines multiple decision trees to improve classification accuracy and to control overfitting.
>
> **[5:14](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=314)** The algorithm builds multiple trees during training and using voting, or averages, to combine their outputs during inference.
>
> **[5:22](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=322)** In scikit-learn, we only have to change, then, the definition of our model, but we train it in exactly the same way.
>
> **[5:32](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=332)** Here's the prediction.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=334)** The accuracy went up a few percent, but the confusion matrix is similar.
>
> **[5:40](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=340)** This is probably limitation of the data themselves.
>
> **[5:43](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=343)** People can thrive or fail to, in similar ways, in different places on earth.
>
> **[5:49](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=349)** I was glad to serve you this machine learning appetizer.
>
> **[5:52](https://www.linkedin.com/learning/python-data-analysis-24296803/a-taste-of-machine-learning?u=76281980&t=352)** It's a fascinating discipline, and I know that if you're interested, you will find many excellent resources on LinkedIn Learning in the literature and all websites.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), function (1), let (1), finally, (1)
> **CLI Commands:** make (2), find (2), node (1)
> **Definitions:** is an  (2), is a  (2), known as (1)
> **Env Vars:** gdp (1)
> **Speakers:** - [instructor] (1)

#### Solution: Gapminder model fit
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=0)** - [Instructor] Okay, so we need to find a model for the babies_per_woman variable that has a sufficiently high explanatory power as measured by the F statistic.
>
> **[0:12](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=12)** Let's set up a formula.
>
> **[0:18](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=18)** We'll use the region and age5_surviving.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=22)** I define a model, fit it, and return the resulting object.
>
> **[0:33](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=33)** Test.
>
> **[0:35](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=35)** Okay, this is almost right.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=37)** The F value is not quite there, so this may take some experimentation.
>
> **[0:43](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=43)** We could add a second explanatory variable, but the result is actually worse.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=52)** In fact, we find that using a different function of the age5_surviving variable is just what we need.
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=62)** How about the second power, the square?
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-24296803/solution-gapminder-model-fit?u=76281980&t=66)** Perfect.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (1), function (1)
> **Code Identifiers:** babies_per_woman (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 11. 10. Project: COVID-19 Data

#### Overview: COVID-19 data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=0)** - [Instructor] In this chapter, we are going to practice what we learned so far in terms of wrangling, summarizing, visualizing, and modeling data using a very rich dataset from the Our World in Data Project: the COVID-19 dataset.
>
> **[0:16](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=16)** COVID-19 was one of the most significant global events of recent history, affecting almost every person on the planet.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=24)** The dataset offers the opportunity to study the pandemic's progress and its societal impact in real time.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=32)** This dataset gathers metrics from authoritative organizations like the WHO, CDC, and National Health Ministries, and it includes data from nearly every country in the world.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=44)** To reduce the size of the file, I kept only some of the variables of the original dataset.
>
> **[0:51](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=51)** Looking at the dataframe shows several familiar macroeconomic indicators as well as a few COVID-specific measurements.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=59)** In the next three videos, we'll work to summarize, visualize, and model this dataset, and there will be wrangling throughout.
>
> **[1:08](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=68)** For visualizations, we'll use a modern plotting package, Plotly, which can make interactive JavaScript-based plots that can be exported very easily to webpages.
>
> **[1:19](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=79)** To give you a taste of what Plotly can do, let's look at the impact of the first year of the pandemic in Europe.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=87)** I down select the dataset by choosing countries in Europe and the date of December 31st, 2020.
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=96)** Here it is.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=98)** A choropleth plot is a map where the colors of geographic features, here countries, are mapped to a variable.
>
> **[1:48](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=108)** This is very impressive with so little code.
>
> **[1:51](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=111)** The interactivity allows us to zoom and pan and to get dataset specific information as we hover.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=120)** In the spectrum of visualization packages, Plotly is less about exploring data than about presenting them to others in a clear and coherent fashion.
>
> **[2:10](https://www.linkedin.com/learning/python-data-analysis-24296803/overview-covid-19-data?u=76281980&t=130)** Let's get started with our dataset.

> [!info]- Semantic Content
>
> **Env Vars:** covid (3), cdc (1)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Summarizing COVID-19 data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=0)** - [Instructor] Let's start our analysis of the COVID-19 dataset.
>
> **[0:06](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=6)** We will look at cumulative quantities such as total cases and total deaths at the end of the pandemic.
>
> **[0:14](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=14)** Grouping by country, and asking for the last value gets us variables in 2024 indexed by country.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=24)** Maybe the most obvious question we can ask of the data is which country had the most cases?
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=31)** PANDAS offers a convenient built-in method and largest to see the largest entries in a series.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=38)** Here it is, the United States on the top.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=42)** As printed, this series looks a bit vanilla and it's not so easy to parse.
>
> **[0:48](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=48)** We get a cleaner look by converting it to a dataframe.
>
> **[0:52](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=52)** Even better, we can apply some styling to the numbers using style format.
>
> **[0:59](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=59)** I like this very readable look.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=61)** I will make generic functions to apply to series and dataframes, and I will stick those functions into PANDAS, adding methods to the series and data frame classes.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=73)** These methods are written as anonymous Lambda functions.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=77)** This trick is known as monkey patching, which is not entirely nice, but sometimes it's just too easy not to do.
>
> **[1:26](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=86)** Here it is at work.
>
> **[1:29](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=89)** So it's clear that the US had the most cases.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=93)** What about the most deaths though?
>
> **[1:36](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=96)** Let's look at those and compare.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=98)** The method enlarges generalizes nicely to a dataframe if we pick a column to sort by, again the US, you may be thinking that the US had such a large number of cases and deaths just because it has a larger population than other countries.
>
> **[1:55](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=115)** That's a good point.
>
> **[1:57](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=117)** We should then look at cases and deaths per million people of population.
>
> **[2:02](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=122)** We add columns for those new variables to our data frame and make the table again.
>
> **[2:08](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=128)** Ah, this changes the picture significantly.
>
> **[2:12](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=132)** With a few smaller countries looking definitely worse.
>
> **[2:17](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=137)** Dividing deaths by cases gives us the death rate.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=141)** Let's create that column on the fly using the method assign on the dataframe, the death rate needs to be shown with at least one decimal, so I changed the style.
>
> **[2:32](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=152)** Given to the nice method.
>
> **[2:35](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=155)** Peru has a very high death rate compared to other countries.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=160)** Perhaps Peru had special challenges in healthcare access.
>
> **[2:45](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=165)** The other reason may be that the cases were under-reported, but the deaths were not.
>
> **[2:51](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=171)** In fact, for some countries, both the number of cases and deaths due to Covid may be suspect, cases may go unreported depending on the testing on healthcare logistics.
>
> **[3:04](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=184)** While the criteria for Covid-attributed deaths may be different in different countries.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=189)** To sidestep these limitations and get a sense of the true impact of the pandemic across the world, the data set includes numbers for excess deaths, which are calculated by comparing cumulative deaths from all causes during the pandemic, with a projected baseline of expected deaths based on previous years.
>
> **[3:27](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=207)** These statistic captures not only deaths directly attributed to COVID-19, but also those that may have occurred due to healthcare disruptions, changes in behavior and other pandemic-related factors.
>
> **[3:39](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=219)** We look at the normalized total excess deaths, computed per million people.
>
> **[3:45](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=225)** Note that this number, however, is not available for all the countries.
>
> **[3:50](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=230)** So the top 10 again, and this confirms Peru as a country that was heavily and in fact it's the only country where the excess deaths are less than their reported Covid deaths.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=244)** The statistic highlights a few other countries that had severe damage, including Russia, Bolivia, and other Central American countries.
>
> **[4:14](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=254)** There are many more summaries and explorations you can do.
>
> **[4:18](https://www.linkedin.com/learning/python-data-analysis-24296803/summarizing-covid-19-data?u=76281980&t=258)** Do try a few.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), lambda (1)
> **Env Vars:** covid (2), pandas (2)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), picture (1)
> **Definitions:** known as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Visualizing COVID-19 data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=0)** - [Instructor] Ready to visualize?
>
> **[0:02](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=2)** We load our dataset and compute the normalized cumulative quantities.
>
> **[0:08](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=8)** We left our exploration with the countries that showed the most estimated excess deaths.
>
> **[0:15](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=15)** What do these countries have in common?
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=17)** It's a question for modeling, but one that we can begin to explore by plotting.
>
> **[0:22](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=22)** So is population predictive?
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=25)** Is a continent especially bad?
>
> **[0:27](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=27)** We plot those variables against excess deaths, encoding their values with horizontal position, X, and color, respectively.
>
> **[0:38](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=38)** We don't seem to see much correlation here.
>
> **[0:41](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=41)** To improve this plot, we exclude points without a defined excess death rate.
>
> **[0:46](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=46)** We drop now so that the axes are scaled right, and we ask Plotly to use country names when we hover around the point.
>
> **[0:55](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=55)** Then it will be clear which point is which country.
>
> **[1:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=60)** What about income?
>
> **[1:02](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=62)** That's not very predictive, either, and surely vaccinations may be indicative.
>
> **[1:10](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=70)** They're not.
>
> **[1:11](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=71)** Most of the deaths occurred before vaccinations were available.
>
> **[1:15](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=75)** It seems we're not getting anywhere.
>
> **[1:17](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=77)** Let's take a different tack and plot total cases as a functional date grouped and colored by country.
>
> **[1:27](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=87)** This plot certainly has lots of color, but it's hard to see much here, other than the large number of cases in the US and in China from 2023.
>
> **[1:40](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=100)** So let's focus on the first two years by setting the range of the plot.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=105)** Plotly is smart enough to accept dates given as strings.
>
> **[1:50](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=110)** Better, but I would say that the trends are obscured by the different times at which the pandemic began in each state.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=118)** Let's fix that.
>
> **[2:00](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=120)** We find a date at which each country reached at least five total cases.
>
> **[2:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=126)** Ah, this is a bit tricky to do in Pandas.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=129)** It didn't work to do the easy thing, group the data by country and then apply our condition.
>
> **[2:16](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=136)** A group series doesn't support that.
>
> **[2:19](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=139)** This is the kind of problem in Pandas where you need to search the internet extensively to find a solution.
>
> **[2:26](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=146)** Sometimes it's easier to just go around it, so you can then filter first, then group by country, and take the first role.
>
> **[2:37](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=157)** This works.
>
> **[2:38](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=158)** From this dataset, we need only date and country, and we use the country's index.
>
> **[2:44](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=164)** We will call this the T0 of the pandemic for each country.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=169)** Next, for each role, we compute the time elapsed from the appropriate T0.
>
> **[2:55](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=175)** Since the COVID-19 data frame and the T0 series are both indexed by country, Pandas will now match each row to the correct T0.
>
> **[3:05](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=185)** Very good.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=186)** We'd better convert this time deltas to integers, though, otherwise we may have trouble plotting.
>
> **[3:11](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=191)** We use a method from the Pandas daytime accessor DT to extract the day from the time delta, and we assign the resulting value to new column.
>
> **[3:22](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=202)** Okay, we are ready to plot using this new time variable.
>
> **[3:28](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=208)** Ah, pandemics develop exponentially, at least at the start, so it's appropriate to plot these numbers logarithmically by setting log_y equals True.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=221)** We're getting there, and interactivity helps us make sense of this plot, but I still think there are too many traces and too much is happening here.
>
> **[3:51](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=231)** Effective visualization often requires a careful selection of what we wish to show.
>
> **[3:56](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=236)** We will concentrate on larger countries, more than 50 million people, and over the first six months of the epidemic.
>
> **[4:04](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=244)** Here's the plot.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=246)** This is almost publication ready.
>
> **[4:11](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=251)** We can compare different countries by looking for the traces and hovering over them.
>
> **[4:17](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=257)** We will recolor by continent.
>
> **[4:20](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=260)** We will add the country name to the tool tip that you get when you hover.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=264)** We will change the color scheme and the labels along the axis.
>
> **[4:30](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=270)** We can see here from the color that the number of cases grew very rapidly in Europe and perhaps fastest in the US, whereas it was more slow in Africa.
>
> **[4:39](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=279)** Again, this would be correct for countries in which testing was not too incomplete.
>
> **[4:44](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=284)** France here is strange.
>
> **[4:46](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=286)** Maybe cases were reported differently.
>
> **[4:49](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=289)** We can provide more context by showing straight lines corresponding to the number of cases, doubling every two, five, and 10 days.
>
> **[4:58](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=298)** We compute the data points for those lines manually using an exponential formula.
>
> **[5:04](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=304)** From day zero to day 150, the initial number of cases, five, is multiplied by two with an exponent given by the number of doublings, so that's 150 divided by the doubling times.
>
> **[5:18](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=318)** We add those lines to the plot using add_scatter, and we also annotate those lines using update_layout with the annotations keyword.
>
> **[5:27](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=327)** I will admit that I've picked the coordinates of these annotations manually.
>
> **[5:34](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=334)** This is beautiful.
>
> **[5:35](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=335)** We write it out to an HTML file.
>
> **[5:39](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=339)** Then we can download the file, which is pure HTML, and look at it in our browser.
>
> **[5:50](https://www.linkedin.com/learning/python-data-analysis-24296803/visualizing-covid-19-data?u=76281980&t=350)** This is ready for inclusion on a website or within a dashboard or anywhere you need it, and interactivity is preserved.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (3)
> **Env Vars:** html (2), covid (1)
> **Code Identifiers:** add_scatter (1), update_layout (1)
> **Definitions:** is a  (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Modeling COVID-19 data
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=0)** - [Instructor] In this video, we will try to explain the number of total deaths from Covid using an ordinary linear regression on a variety of explanatory variables.
>
> **[0:10](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=10)** Here's our dataset again.
>
> **[0:13](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=13)** As we already discussed in this chapter, it would be more representative to look at the number of excess deaths, since differences in the reporting of total deaths may distort the picture.
>
> **[0:24](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=24)** However, the total excess value is only available for a smaller number of countries, too few to fit the model accurately.
>
> **[0:32](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=32)** We will augment the dataset by adding the normalized number of deaths, and look at all values at the end of the dataset in 2024.
>
> **[0:42](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=42)** The final recorded incidence was about 1,000 per million.
>
> **[0:47](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=47)** With a standard deviation of approximately another 1,000.
>
> **[0:50](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=50)** This is the variation that we are looking to explain.
>
> **[0:54](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=54)** We can also look at it in a histogram, where we'll try a number of different explanatory variables.
>
> **[1:01](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=61)** Most of these are self-explanatory, in fact, but let me tell you that extreme poverty is the percentage of humans with income or consumption per person below about $2 in 2017 dollars, and the human development index is a summary measure of lifespan, health, education, and standard of living.
>
> **[1:23](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=83)** Trying a couple of models randomly gives us very high mean square residuals, and low F value statistics.
>
> **[1:33](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=93)** Let me remind you that models here are set using the tilde denotation, where the outcome variable goes on the left, and the explanatory variables that we are considering on the right.
>
> **[1:45](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=105)** After we fit, we can look at square residual, MSC (indistinct), we can look at the R squared and F statistics, and we use the F statistic to find the best model.
>
> **[1:58](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=118)** Not the model with the least residuals, but the model with the most explanatory power.
>
> **[2:04](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=124)** We can't just start from one explanatory variables and add all the others in sequence.
>
> **[2:09](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=129)** This surely will keep producing the residuals, but it will weaken the explanatory power of the fit.
>
> **[2:15](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=135)** Instead, we will systematically try every combination of the explanatory variables.
>
> **[2:21](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=141)** We can do this with either tools combinations, which returns all the combination, the subsets of a given length.
>
> **[2:30](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=150)** So here's a function to fit the model given as a list of variables.
>
> **[2:35](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=155)** We build the tilde formula by joining strings with pluses.
>
> **[2:39](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=159)** This works fine.
>
> **[2:40](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=160)** Next, we iterate over the number of variables and all the combination of that length using a double (indistinct) comprehension.
>
> **[2:49](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=169)** Isn't it lovely?
>
> **[2:50](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=170)** From each fit, we collect the F statistic.
>
> **[2:54](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=174)** To find the best model in the dictionary, we use max over the dictionary keys, providing a custom key function, get, that will access the value.
>
> **[3:06](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=186)** Median age.
>
> **[3:07](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=187)** That's very interesting.
>
> **[3:09](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=189)** Older countries had more deaths.
>
> **[3:13](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=193)** In fact, from the summary of the fit, we see that one additional year in the median aged increased deaths per million, by almost 100.
>
> **[3:23](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=203)** Makes sense.
>
> **[3:25](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=205)** We may ask if the explanation have changed during different phases of the pandemic.
>
> **[3:30](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=210)** To find out, we'll divide up the dataset by the year.
>
> **[3:33](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=213)** The date column can provide the year if we use the method dot year in the data frame accessor DT.
>
> **[3:41](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=221)** And here's a function to select values for each country at the end of a given year.
>
> **[3:46](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=226)** Finally, we iterate the fitting over all the combinations of variables.
>
> **[3:52](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=232)** It turns out that median age is a very predictive variable that works best alone, at least within the limits of this dataset.
>
> **[4:00](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=240)** Only the first year of the pandemic, we see that the human development index is a better predictor.
>
> **[4:05](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=245)** Interesting.
>
> **[4:06](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=246)** The fit coefficient there is positive.
>
> **[4:09](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=249)** In that first year, it was the countries with the highest development index that had the most deaths.
>
> **[4:16](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=256)** Could it be just because of a bias in the reporting, which was more accurate in more developed countries?
>
> **[4:22](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=262)** Perhaps that's the case.
>
> **[4:24](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=264)** If we look instead at excess deaths, although the data set is smaller, the sign of the regression is reversed.
>
> **[4:32](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=272)** More developed countries had fewer deaths.
>
> **[4:36](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=276)** This completes our exploration of the COVID-19 dataset, but you can certainly continue on your own.
>
> **[4:41](https://www.linkedin.com/learning/python-data-analysis-24296803/modeling-covid-19-data?u=76281980&t=281)** There's a lot here that can be learned and understood.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), self (1), finally, (1), case. (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Env Vars:** msc (1), covid (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 12. Conclusion

#### Extending your Python data analysis skills
> [LinkedIn Learning](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=0)** - [Instructor] We've reached the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=3)** Congratulations on following along through some rather challenging material.
>
> **[0:07](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=7)** My goal in this course was to show you how standard Python, NumPy, and pandas can be used as robust and flexible tools for many data analysis applications.
>
> **[0:17](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=17)** And now we can use them together to acquire, summarize, visualize, and model real-world data sets.
>
> **[0:25](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=25)** You can continue on your road to mastery with the many excellent courses in the LinkedIn Learning library.
>
> **[0:31](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=31)** The LinkedIn Learning AI coach will recommend the course that's most useful for you.
>
> **[0:37](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=37)** If you like the style of this course, you may enjoy my other course on Python: Programming Efficiently.
>
> **[0:44](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=44)** And if you're an engineer or scientist or a student of those disciplines, you could check out my course on Python for engineers and scientists.
>
> **[0:53](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=53)** If you like to learn on books, I recommend "Think Python" by Allen Downey.
>
> **[0:58](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=58)** now in its third edition, and the "Python Data Science Handbook" by Jake VanderPlas.
>
> **[1:06](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=66)** If you get stuck, you can get help in internet forums.
>
> **[1:09](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=69)** You'll find that Python has a very helpful and supportive community.
>
> **[1:13](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=73)** Or ask your favorite large language model, but be sure to check the answer with a critical eye.
>
> **[1:20](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=80)** And finally, be Pythonic.
>
> **[1:22](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=82)** Python is an expressive and elegant language, and it's worth taking the time to find the most direct and inspired solutions to your programming problems.
>
> **[1:31](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=91)** Many have said that what's best about Python is that it's a language that makes you happy.
>
> **[1:38](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=98)** I agree.
>
> **[1:39](https://www.linkedin.com/learning/python-data-analysis-24296803/extending-your-python-data-analysis-skills?u=76281980&t=99)** So go out and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), find (2)
> **Code Keywords:** continue (1), finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Michele Vallisneri]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/complete-guide-to-python-data-analysis-4571000/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Statistical Data Analysis

## Path Context

### In [[Develop Your Data Analysis Skills]]
← [[Using Tableau to Discover Powerful Business Insights]] | **5 of 10** | [[Data Science Foundations- Data Mining in R]] →

### In [[Advance Your Python Skills for Data Science]]
← [[Data Science Foundations- Python Scientific Stack -CoderPad-]] | **4 of 6** | [[More Python Tips, Tricks, and Techniques for Data Science]] →

## Appears In

- [[Develop Your Data Analysis Skills]]
- [[Advance Your Python Skills for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis
- [[Python Functions for Data Science]] — Python (Programming Language), Data Analysis
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)