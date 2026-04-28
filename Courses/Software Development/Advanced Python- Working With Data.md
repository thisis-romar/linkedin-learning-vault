---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-working-with-data
url: "https://www.linkedin.com/learning/advanced-python-working-with-data"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 8/15/2024
learners: 21520
skills:
  - Python (Programming Language)
  - Data Management
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-working-with-data-4312001/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHbBRqu7lDW8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260657260?e=2147483647&amp;v=beta&amp;t=fFGaBqQ24gVxJcQyKxRB8rhls85NIr71EKpUrRY478k"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Advanced Python- Classes and Functions]]'
  - '[[Python Statistics Essential Training]]'
next_courses:
  - '[[Python Data Structures- Stacks, Deques, and Queues]]'
  - '[[Advanced Python- Working with Databases]]'
path_nav: '[{"path":"Master Your Python Skills","position":3,"total":11,"prev":"Advanced Python- Classes and Functions","next":"Python Data Structures- Stacks, Deques, and Queues"},{"path":"Master Python for Data Science","position":2,"total":8,"prev":"Python Statistics Essential Training","next":"Advanced Python- Working with Databases"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/python-programming-language
  - skill/data-management
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Working%20With%20Data.md)

![Advanced Python: Working With Data](https://media.licdn.com/dms/image/v2/D4E0DAQHbBRqu7lDW8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260657260?e=2147483647&amp;v=beta&amp;t=fFGaBqQ24gVxJcQyKxRB8rhls85NIr71EKpUrRY478k)

# Advanced Python: Working With Data

> Data science is one of the fastest-growing areas of technology today. And whether you work with large data sets or just need to process spread sheet files, Python is a great language to use when working with data-intensive applications. In this course, Joe Marini gets you started on working with data in Python, highlighting some of the most useful built-in features of the language. Using a real da

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data) | 2h 5m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (4 videos)
- **2. 1. Built-In Data Functions** (7 videos)
- **3. 2. Collection Classes** (6 videos)
- **4. 3. Serializing Data in Python** (6 videos)
- **5. 4. Python Logging** (3 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Python and Data: Made for each other
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=0)** - [Joe] One of the most popular, fastest growing disciplines in the world of technology today is data science, and the Python programming language is at the center of it all.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=9)** Hi, I'm Joe Marini.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=10)** I've been building software professionally for some of the best known companies in Silicon Valley for more than 30 years.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=16)** In this course, we're going to start learning about some of the built-in features that make Python a great language to use when working with data-intensive applications.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=24)** We'll see how to perform common data operations like sorting and filtering, determining basic information like minimum and maximum values, and how to read and write data to and from other formats like CSV files used by spreadsheets and JSON for interchange with other systems and programs.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-data/python-and-data-made-for-each-other?u=76281980&t=43)** Come join me in my course and take a look at what Python can already do to help you make sense of your data.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (2)
> **Env Vars:** csv (1), json (1)
> **Speakers:** - [joe] (1)

#### Getting Set Up
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=0)** - [Instructor] This course is intended for developers who are already familiar with the basics of Python and want to learn about some of the features related to working with data.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=9)** You don't need to be a deep expert on the language in order to take this course, but you do need to have an understanding of the basics like how to write functions, use variables, and so on.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=18)** There are a couple of different ways you can work with the example code in this course.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=23)** I've set up a GitHub repository with the examples and you can find it at this link.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=29)** The course is organized into two separate folders.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=32)** The Finished folder contains all of the code examples in their finished state, so you can compare your code against them as you work through the course.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=41)** The Start folder contains the code examples in their beginning state, and this is the folder I will be working in throughout the course as we build towards the Finished state for each example.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=52)** If you want to download the examples and work with them locally on your computer, then that's easy enough to do.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=58)** You can just go over here to the code menu in the local tab and you can clone the repository or download a ZIP file and use your favorite code editor to work on them.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=68)** You'll just need to make sure that you have Python installed on your computer, at least version 3.10 in order to use the examples.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=75)** But this repository has also been set up with a GitHub Codespace, so you can just work directly online with nothing to install.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=84)** So all you need to do is fork a copy of the repository into your own GitHub account and then fire up a codespace here in the code menu.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=94)** There's nothing to install.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=95)** You'll get a complete environment and you'll be ready to go.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=98)** Now, you can see I've already done that, right?
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=99)** I've already got my codespace set up.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=101)** What you'll do is you'll click on this plus menu here and create your own codespace.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=106)** So I'm going to be using the codespaces in this course.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=109)** Either way works fine, but I'm going to be using codespaces throughout the course.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=112)** All right, so let me open up my codespace and show you what it looks like.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=118)** And when you create your own codespace, it's going to take a few moments to spin up, okay, so just be patient.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=124)** So when the codespace starts, you'll see a browser-based version of Visual Studio Code.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=129)** And here in the files list are all the files that you're going to need in the course.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=135)** You also have a built-in terminal, which if I go to the menu over here and the view menu, I'll bring up the terminal, and the terminal is how we'll run some of the examples.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=145)** And I can check to see if Python is already installed and sure enough, there it is, all right.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=152)** You're also going to want to make sure that you have the Python and Pylance extensions installed.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=158)** So over here, this little four boxes is the extensions.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=162)** And if I scroll down in my list, you'll see that here's Python and Pylance.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=166)** Now, this is my own codespace so I have a bunch of extensions installed and you don't need to worry about these.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=171)** All you need to worry about are Python and Pylance and you can find them in the marketplace if you don't already have them.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=177)** Just go up to this search box, type in Python.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=181)** It should be the first result that comes up.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=182)** It's this one here from Microsoft.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=184)** You can see it's got a ton of downloads.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=186)** And if you want to install this one, in fact, this is the only thing that you'll need to install because it will automatically install Pylance and Jupyter and a couple of other things to give you a great Python development experience.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=198)** So once you've done that, you're pretty much ready to go.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/getting-set-up?u=76281980&t=201)** All you need to do is open Start menu, go into chapter one and you're ready to start coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), find (2), make (2)
> **Prerequisites:** install (5), set up (3), you'll need (1)
> **Tools:** github (3), terminal (3), visual studio (1), jupyter (1)
> **UI Navigation:** click on (1), go to (1), scroll down (1)
> **Exercise Files:** download the (1), zip file (1)
> **Code Keywords:** let (1)
> **Env Vars:** zip (1)
> **Versions:** version 3 (1)

#### The sample data set
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=0)** - [Narrator] I've included a sample data set to work with in this course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=3)** Now, not all of the examples are going to use it, but it's a significant set of data that represents a real world use case of working with data using Python.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=13)** So the data set that we'll be working with comes from the US Geological Survey, and contains information about all of the measured earthquakes around the world.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=23)** And this here is the homepage for the USGS Earthquake Information Service.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=29)** So I'm going to scroll down here and I'm going to click on this little real-time notifications link.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=33)** And when I do that, that takes me to the data feed page.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=36)** If I scroll down a little bit, and if, by the way, you can just go right to this link if you want to.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=41)** So you can see here that there are some real-time data feeds about earthquake information in different formats.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=48)** So there's an ATOM data feed and we've got some spreadsheet data over here.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=53)** But the one that we're going to be using is this one, the GeoJSON Summary Feed.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=58)** So let's go ahead and click on that link.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=61)** And that will take us to this page, which is the information page that describes the GeoJSON data format and provides several links to the actual earthquake data.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=74)** And you can see that the data is available in several different feeds.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=78)** So we have for the past hour, right?
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=79)** We have the past day, here's the past week, and the past month.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=84)** And it's several subsets organized by the size of the earthquake.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=88)** So we've got significant earthquakes all the way down to everything, right?
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=91)** So I'm going to click on one of these data feeds and you can see it's just raw JSON data.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=97)** Okay, so let's click back.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=99)** All right, so now if we scroll down a little bit, this section right here describes the format of the data.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=106)** And it starts with a description of the data in this metadata field.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=110)** So when it was generated, here's the URL to the data, the title of the data set, the number of earthquakes, and so on.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=119)** And so we're going to skip over this B box item 'cause we're not going to be using it.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=125)** And then there's an array of data, somewhat confusingly called "features", which is where the detailed earthquake data itself is contained.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=134)** Now we're not going to be using all of these fields.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=137)** But that's okay.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=137)** You can see that there's plenty of data here for you to explore on your own.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=141)** And you can click each of these links to get more information about that particular data field.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=147)** All right, so let's go take a look at the actual data set that I've included with the course.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=153)** And you can see here in the list, I've got this 30DayQuakes.json file.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=158)** So I'm going to go ahead and click on this.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=161)** And this data, I've downloaded it from the website, so we can use it locally.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=165)** It represents all of the measured earthquakes for the past 30 days.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=170)** And remember, if you go look at this link now, the data is obviously going to be different for you because I captured this at a specific point in time.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=178)** And you can see it's a pretty large data file.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=180)** It has almost 12,000 earthquakes in it.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=183)** And if we look at the first item, we can see it had a magnitude of 1.54.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=189)** It was someplace in California.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=191)** And let's see if we see the felt reports.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=193)** Looks like nobody reported feeling it.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=195)** Down here, we have the geometry of where the quake happened.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-sample-data-set?u=76281980&t=199)** So we're going to be using this data throughout the course and we'll be looking at a variety of ways to use Python to parse this data set and get some insights out of it.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), scroll down (3)
> **Code Keywords:** let (4), if, (1), this. (1)
> **Env Vars:** usgs (1), atom (1), json (1), url (1)
> **CLI Commands:** python (2)
> **File Paths:** 30dayquakes.json (1)
> **Versions:** 1.54 (1)
> **Tools:** atom (1)
> **Speakers:** - [narrator] (1)

#### Tour of CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=16)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=25)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=34)** The code challenge has four areas.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=37)** In the top left, you'll see instructions.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=39)** There's a code editor here in the top right for you to write your answer.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=44)** There's another code editor down here in the bottom right where you see how your code will be used.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=51)** And there's a console for output in the bottom left.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=54)** You can use these drag handles to allocate space as you like as you're working with the challenge.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=61)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=68)** Each challenge has instructions that include a description of the challenge and the challenge's parameters and the desired result.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=77)** Depending on the challenge, you will see some additional information in the instructions, such as an explanation of the parameters that your code will be given, along with some examples of what the expected output might look like.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=89)** So create your answer in the top right code editor.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=93)** There are comments in the starting code showing where to put your solution.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=98)** And when you click test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=105)** So let's go ahead and try that.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=107)** I'll click on test my code, and you can see that I'm clearly returning the wrong answer.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=111)** So I get a message saying, "Hey, something isn't working."
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=114)** It shows you what my code returned.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=116)** Now if your code isn't successful, you can ask for help.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=120)** And the way that you do that is by modifying these two variables, show expected result and show hints.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=127)** So I'm going to change each of these to true.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=132)** All right, and then I'll execute my code again.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=136)** All right, in this case, you can see that my code is still wrong, and it shows that my code returns zero, but the expected result was 19.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=145)** And then, I'm given a hint to help me along with the challenge.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=149)** Now, the code editor in the lower right shows you how your code is going to be used.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=154)** And in some cases, you can change that code to experiment with different cases.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=160)** Let's go ahead and return the right answer.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=163)** So I'm going to return max(numbers).
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=167)** All right, and now when I run this code, right, we can see that the answer is now correct, and 19 sure is the largest.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=177)** I'll make the largest 25, and I'll change some of these other numbers.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=179)** I'll make this one a six.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=181)** And let's run it again.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=184)** And now we can see that my code is, again, returning the right answer.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=187)** Now, regardless of whether your answer is successful, you're going to see messages here in the console output in the lower left.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=195)** And if any of the messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/tour-of-coderpad-24353435?u=76281980&t=201)** When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Built-In Data Functions

#### Using built-in functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=0)** - [Instructor] We are going to start off by taking a look at some of the built-in functions that Python already has for working with data.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=7)** And these are functions that you can just use out-of-the-box, without having to install any additional libraries or modules.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=14)** Python provides basic functions for some very common operations related to working with data, such as the min and max functions, which identify the smallest and largest value in a given data set; the any and all functions, which can be used to determine whether any or all of the items in a data set match a certain criteria.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=35)** Then there's the sum function, which as you've probably guessed, is a quick way to add up a set of data values.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=43)** Then of course, there are the sorted and sort functions, which are used to sort data in a particular order.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=49)** There's the filter function, which is used to selectively determine which values to remove and which ones to keep in a data set.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=57)** And of course, there's the map function, which is used to transform values from a dataset into different kinds of values.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=65)** So we'll take a closer look at each of these functions throughout this chapter and how they can be used to operate on data sets.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-data/using-built-in-functions?u=76281980&t=72)** And as you can see, there's quite a bit that Python can do right away just using some of the built-in functions in the language.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** function (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Finding min and max values
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=0)** - [Instructor] In this example, we'll see how to use the min and max functions to find the smallest and largest data values in a given data set.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=9)** And so here I am in my GitHub repository.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=11)** And remember, you're going to want to make a fork of this in your own GitHub.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=16)** And I've already got a codespace up and running so you'll need to make one of your own codespaces.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=21)** So I'm going to bring up my codespace.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=25)** All right.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=25)** Once my codespace is up and running, I'm going to go into the Start folder.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=29)** And in chapter one, I'm going to open the minmax file.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=33)** So here at the top of my code, I have two lists, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=37)** One is a set of numbers and the other is a set of string.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=41)** So let's use the min function to find the smallest value in each of these lists.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=47)** So I'll print out the result, and I'm going to use an f-string to do this.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=51)** And I'll just simply write, "The minimum value is," and I'll call the min function on the values list.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=64)** And I'll do the same thing, make a copy of that line, and I'll call the min value on the strings list.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=73)** Okay?
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=74)** And then let's do the same thing for the max function.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=77)** So I'll just make a copy of these two lines and paste, and just call max in both cases.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=86)** All right.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=88)** And let's go ahead and run what we have.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=90)** Now remember, we can do this a couple of ways.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=92)** I can open up the built-in terminal here in Visual Studio Code, and I can go into my Start folder, and I can go into chapter one, and then I'm going to run using the python command, the python command, I'll call minmax.py.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=110)** And there you can see the output.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=112)** Of course, you can also, if you have the Python extensions installed in VS Code, you can just right click and choose Run Python File in Terminal.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=120)** That also works.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=122)** But here in the results, you can see that the smallest number in the list is 1.6 and the large number is 6.1.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=131)** And then we got these two string results.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=133)** Now, what does it mean to have a small and large string value?
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=138)** In this case, the min and max functions are using the alphabetic order of each word to determine what is small and what is large.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=147)** But what if we wanted to use a different property of the strings to measure what small and large mean?
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=153)** To do this, both functions, let us define what's called a key function.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=158)** And this function's job is to return a value that can be used in the min or max calculation.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=164)** So for example, if we wanted to find the shortest and longest strings, we would specify a key function that returned the length of each string.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=172)** So let's go ahead and close this terminal.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=175)** And what I'm going to do is I'm going to copy these two lines, and I'll paste it down here in the key area.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=187)** And I'll need to use strings on both of these.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=192)** And I want min and max for this example.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=196)** All right, so then what I'm going to do is I want to key off the length of each string.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=200)** So what I'm going to do is specify the key function, and I'm going to call the built-in len function in Python, so that returns the length of each string.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=210)** And I'll do the same thing here.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=214)** Okay, so now let's run this again, right?
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=220)** And now you can see that the smallest length string is 1, and the longest length string is 18.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=228)** So that's different than the results we got here.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=229)** These were alphabetical.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=231)** These are an order of their length, okay?
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=233)** So now let's take what we've learned and apply it to our earthquake data set.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=238)** So close this.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=242)** All right, first I'm going to uncomment these two lines that open the JSON file, and load the JSON code.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=249)** Now, if we go back and look at the data, right?
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=253)** So remember that inside the features list, each one of these seismic events has a magnitude property, okay?
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=261)** So let's find the smallest and largest earthquakes as measured by magnitude.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=267)** Let's go back to my code.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=270)** So I'm going to do a couple of things.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=271)** First, I'm going to print out the title of the data set.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=276)** And so you can see here that I've loaded the JSON code into this data variable, and that gives me this dictionary, right?
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=282)** So inside here I'm going to operate on the metadata and the title properties.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=287)** So I have to index into that dictionary using metadata, and then title.
>
> **[4:56](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=296)** And then I'm going to follow that up with the number of earthquakes.
>
> **[5:01](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=301)** So I'm going to print the length of the features list, right?
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=309)** Because remember, this list right here contains all the earthquakes.
>
> **[5:13](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=313)** All right.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=314)** Now I'm going to define a function called getmag.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=317)** And this will take a specific earthquake and return the magnitude.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=323)** So I'm going to write some code that says that the magnitude is equal to the passed in data item, and I'm going to get the properties, and I'm going to look at the magnitude field of each one, right?
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=340)** And again, if we look here, so here in each one of these features, there's a properties, and then the first properties is magnitude.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=349)** So that gives me the magnitude value.
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=350)** Now, that might be null, so I have to check to see if magnitude is None, because if it is, then I'm going to set magnitude equal to 0.
>
> **[6:03](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=363)** Otherwise, I'm going to return a floating point value.
>
> **[6:10](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=370)** Do it that way.
>
> **[6:12](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=372)** I'm going to convert magnitude to a floating point value, okay?
>
> **[6:16](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=376)** So now I just need to use the min and max functions to find each value using getmag as the key provider.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=387)** All right?
>
> **[6:28](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=388)** So I'll print out the minimum, and I'm going to look at the data, and I'm going to look at the features list.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=400)** And my key function is going to be the getmag function, right?
>
> **[6:48](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=408)** And then I'll do the same thing for max.
>
> **[6:53](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=413)** So this will give us the min and max seismic items.
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=419)** And then I'll just go back up here, and I'm going to comment out the previous examples, so that they don't get in the way.
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=427)** All right.
>
> **[7:08](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=428)** So now let's run our updated code.
>
> **[7:14](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=434)** Okay?
>
> **[7:15](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=435)** And we can see that here, we've got the title, all right?
>
> **[7:21](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=441)** And here we have the number of events.
>
> **[7:24](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=444)** So that's these two lines right here.
>
> **[7:25](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=445)** Print the title and print the length of the data set.
>
> **[7:29](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=449)** And then we get the minimum value, right?
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=452)** So here we have 1, this one is the magnitude of -1.31, okay?
>
> **[7:37](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=457)** So that's the smallest magnitude.
>
> **[7:39](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=459)** And then we look at the next JSON output and we see here that the magnitude is 6.3, all right?
>
> **[7:46](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=466)** So we've got our smallest and largest earthquakes.
>
> **[7:49](https://www.linkedin.com/learning/advanced-python-working-with-data/finding-min-and-max-values?u=76281980&t=469)** So you can see that the min and max functions are pretty flexible in that you can use them for basic data types, but they can also be used with more complex data structures by using the key function to provide a value to measure them with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (10), this. (2), case, (1), this, (1)
> **CLI Commands:** find (5), python (5), make (4)
> **Tools:** terminal (3), github (2), visual studio (1), vs code (1)
> **Env Vars:** json (4)
> **Versions:** 1.6 (1), 6.1 (1), 1.31 (1), 6.3 (1)
> **UI Navigation:** open the (2)
> **Definitions:** is a  (2)
> **File Paths:** minmax.py (1)

#### Data utility functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=0)** - [Instructor] Now let's take a look at some of the useful utility functions that Python provides.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=4)** Specifically the any, all and sum functions.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=9)** And so here in chapter one, I'm going to open up the utility.py file.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=14)** And once again, here are my sample code.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=16)** I have a list of integer values already defined.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=19)** The any function can be used to see if any value in a given sequence evaluates to a Boolean true value.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=28)** And remember that for integers, any non-zero value evaluates to a true Boolean.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=34)** The all function is similar except that it determines whether all of the values in a sequence are true.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=41)** And then finally, the sum function will add up all the values in a sequence.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=46)** Okay? So let's give each of these a try.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=48)** I'm going to print out any and I'm just going to call it on the values array.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=54)** And then I'll do the same thing.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=57)** I'm just going to paste this down here and call all instead, right?
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=63)** And then I'll call sum on the values list.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=68)** Right?
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=69)** Now in this particular list, it's easy to see that you know, yes, in fact there are values that are Boolean true, right?
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=77)** So when I run this in the terminal, right, you can see that yes, there's at least one of the values evaluates the true.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=86)** Now, the second function, all returns false, right?
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=90)** And that's because there's a zero right here at the front of the list, right?
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=94)** So if I take this zero out and save this and then I run it again, right?
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=100)** Well, now you can see that the result is true because now all of these values are true, right?
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=105)** And then you can see the result of the sum function down here.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=108)** So sum just adds them all up and we get the result of 15, right?
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=112)** Okay.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=113)** So we can use these functions with more complex data structures, but unfortunately, unlike the min and max functions that we used in a previous video, they don't let us specify a callback to easily provide a value from the data.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=127)** But that's okay.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=128)** We can easily improvise this using Python.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=131)** So let me close this terminal.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=135)** All right.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=136)** So let's take a simple example.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=138)** All right?
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=139)** Are there any earthquake reports that were felt and reported by more than 25,000 people?
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=146)** Okay, so let's go back to the data structure here in my 30 day quakes.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=151)** And if we scroll down, you'll see that there's a felt property, okay?
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=155)** Which can be null, which means that nobody felt that particular earthquake.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=158)** So we have to take that into account.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=160)** So what I'm going to do is write an expression that will iterate over each of the events and inspect this felt property right here.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=169)** All right?
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=170)** So what I'm going to do is first I'm going to uncomment this code to load our data, all right?
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=178)** And so now I'm going to write print and I'm going to call the any function.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=183)** 'Cause we want to know if there were any reports that were more than 25,000.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=187)** And then my expression is going to be, I'm going to have a quake variable and that's going to represent an individual quake.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=194)** So I have to look inside the properties, and use double quotes for that.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=200)** So I'm going to look inside the properties and I'm going to get the felt property, right?
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=208)** So if that value is not none, all right?
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=214)** Let me just collapse this down so we have more room.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=217)** So if that value is not none and the quake properties felt is greater
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=233)** than 25,000 for quake in
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=243)** and we're going to call this on the entire features list.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=248)** All right?
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=248)** So this iterator is going to go over each one of these items inside this features array.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=256)** And I'm going to get a quake variable each time, right?
>
> **[4:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=259)** And I'm checking to make sure that the felt is not null and it's greater than 25,000.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=263)** Okay?
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=264)** So behind the scenes this will create a generator that loops over each element in the list and evaluates the expression.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=270)** All right?
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=271)** So let's go ahead and let's comment out these previous guys.
>
> **[4:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=277)** All right?
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=278)** And now let's run our example.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=281)** So let's go ahead and go into chapter one.
>
> **[4:51](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=291)** And I'm going to run the utility.py file, okay?
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=300)** And sure enough, we can see that the result is true, yes, that there was at least one quake that was reported by at least 25,000 people.
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=310)** Okay? All right, let's keep going.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=311)** Let's answer the question, how many quakes were felt by more than 500 people?
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=318)** So let me some room here.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=323)** All right.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=326)** So in this case, I'm going to use a loop expression and I'm going to print out, in this case, I want to know how many, so I want to hear the term, how many, I think sum, right?
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=336)** So I'm going to sum up, and I'm going to just copy this.
>
> **[5:39](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=339)** So quake properties felt is not none and quake properties dot felt.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=345)** So I'm going to copy this, paste that in.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=349)** But in this case, I'm interested in being greater than or equal to 500, okay?
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=355)** And I'm going to write for quake in data features.
>
> **[6:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=363)** All right?
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=364)** So if this expression evaluates to true, right?
>
> **[6:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=368)** This one right here, then that's going to come back with a Boolean value of one, right?
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=373)** Which has an integer value.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=375)** Otherwise it will be zero, which means false.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=377)** So that's how I'm going to be able to sum up each one of these, right?
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=380)** So I'll add a one for yes and add a zero for no.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=385)** All right.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=385)** And then let's try another one.
>
> **[6:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=388)** How many quakes had a magnitude of six or larger?
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=393)** All right, so once again, we're going to use the sum function.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=396)** So I'm just going to copy this expression here and paste it.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=399)** And in this case, okay, we want to know how many quakes had a magnitude.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=403)** So I'm going to need to look at the magnitude property.
>
> **[6:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=405)** So I'll change that.
>
> **[6:48](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=408)** And then I want to know if it was six or larger.
>
> **[6:51](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=411)** So I'm going to check to see if the magnitude was greater than or equal two six, okay?
>
> **[6:56](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=416)** So let's go ahead and run this now.
>
> **[6:58](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=418)** So let's go back down to our terminal and we'll run this again.
>
> **[7:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=424)** Alright, now we can see that there are 12 quakes that were felt by at least 500 people.
>
> **[7:10](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=430)** And there were five quakes that were magnitude six or larger.
>
> **[7:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-utility-functions?u=76281980&t=435)** And here again, we can see that just by using some of the built-in Python functions we're able to build some useful queries on our data to answer some questions that we have.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (7), case, (4), finally, (1), try. (1)
> **CLI Commands:** python (3), make (1)
> **Tools:** terminal (3)
> **File Paths:** utility.py (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Sorting data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=0)** - [Instructor] Sorting is probably one of the most common operations performed on data, and we're going to take a closer look at that in this example.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=7)** So here in my code space, I'm going to click on the sorting.py file.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=13)** And in my example code, I have two lists, right?
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=15)** One with integers and one with names.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=19)** There are two functions built in for sorting in Python.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=22)** There's the sorted function, and then there's the sort function.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=27)** So let's take a look at each one and I'm going to collapse this down to get some more room.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=31)** All right, the sorted function is a top-level built-in function in Python and you can use it on any sequence of values.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=38)** It returns a new list of sorted data and does not touch or change the original list.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=45)** Okay?
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=46)** So let's try that out on our numbers.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=48)** So I'm going to write result1 is equal to, and I'm going to call sorted on the numbers list and then I'll just print that out.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=61)** The list object itself also has a sort function, which sorts that list in place.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=66)** So it doesn't return a new list, it just changes the actual list in place.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=70)** So I'm going to call on the names list.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=73)** I'm going to call the sort function.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=75)** And in this case, I'm going to use the reverse property, or the reverse argument, and I'm going to set that to true 'cause I wanted to go in reverse order and I'm going to print out that result.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=88)** All right, so we've got two sorting operations.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=92)** Let's open up the terminal.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=94)** Right control back tick, and I'm going to go into my start folder in chapter one.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=105)** All right, and let's run this example.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=107)** I'll run Python sorting.py and sure enough, you can see in the output we've got two sorted lists.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=115)** So the numbers are now sorted in ascending order, right?
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=118)** Smallest number to the largest number.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=121)** And then the names list is in reverse order.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=124)** It goes alphabetic last, all the way down to alphabetic first.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=128)** Okay?
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=129)** And of course, we can use the sorting functions on more complex data just like we did earlier in the min and max functions by specifying a key function.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=140)** And I think you can see where this is going, we're going to try this on our earthquake data.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=144)** So let's go ahead and close that terminal, and let's comment out these two previous examples.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=152)** All right, so first I'm going to uncomment the code that loads our JSON data.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=158)** All right.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=159)** And you can also see that I have the same function that I defined in an earlier example that retrieves the magnitude value from a given earthquake structure.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=170)** Okay, now I just need to use the sort function to sort the data.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=176)** And in this case, I'm going to sort on the magnitude value in descending order.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=182)** So I'll write data, and I'm going to sort the features list in there, right, and again, just to refresh the memory, if we look at the quakes, right, the features is what contains all the earthquakes.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=197)** Okay?
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=198)** So I'm going to have to sort this guy in place.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=203)** All right?
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=203)** So we'll sort him by calling the sort function, in this case I'm going to specify the key is my get magnitude function.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=212)** There we go, get mag.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=215)** And we'll set reverse equal to true.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=221)** All right?
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=222)** And then I'm going to print out the first 10 entries, which obviously are going to be the earthquakes that had the largest magnitudes.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=231)** So I'll write for i in range to 10, and I'm going to print out, I'll print out data features and then I have to index into that list with i.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=248)** And then once I have that item, I have to get the properties of that item and then I have to get the name of the place.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=258)** All right, and if we look at the data again, you can see that there is a place.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=263)** Where is that?
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=264)** There's the tight, that's not it.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=266)** Right here, so the name of the place, I'm going to print out the name of the place, the top 10 largest earthquakes ordered by the place name.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=274)** Okay?
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=275)** So let's go ahead and save this and let's go back to the terminal, and let's try this one more time.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=285)** So I'll run sorting.py and sure enough, you can see that the result lists the top 10 quakes from this data set, and a lot of them appear to be in the Pacific, right?
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=297)** We've got New Zealand, Indonesia, Vanuatu, and let's see, oh, yep, California makes the list.
>
> **[5:03](https://www.linkedin.com/learning/advanced-python-working-with-data/sorting-data?u=76281980&t=303)** So you can see how easy it is to sort complex data just by using the built-in sort function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (10), case, (2)
> **File Paths:** sorting.py (3)
> **CLI Commands:** python (3)
> **Tools:** terminal (3)
> **Definitions:** is a  (2)
> **Env Vars:** json (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### Data filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=0)** - [Instructor] Sometimes when you're working with a large dataset, you want to be able to focus on a subset of the overall data.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=7)** In other words, you want to be able to filter out the data that's not interesting and keep the data that is.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=13)** So in this example, we're going to see how to use the filter function to achieve this.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=17)** We're here in Ch_1, let's open up filtering.py.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=21)** And here in my example code, I have a couple of functions, along with some predefined sequences of data, okay?
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=27)** I've got a couple of sequences, this one's numbers, and this one is random letters, and I'm going to use the filter function to refine each of these datasets.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=38)** The filter function works by specifying two arguments.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=42)** The first is a function that returns true or false, depending on whether a particular data item should be retained or dropped, and then the second argument is the dataset to operate on, right?
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=53)** So the filter function calls that second argument, that callback, with each item in the sequence so it can be tested against whatever logic you've specified and whether it should be retained or dropped.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=65)** So, for example, if I wanted to filter all of the even numbers out of this dataset, I could use this filterEvens function right here that I've already defined, which returns false if a given number is even, and true if it is odd, okay?
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=85)** So let's go ahead and write that function.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=88)** I'm going to write odds =, and I'm going to create a new list by using the list function because the filter function actually creates an iterator.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=98)** So I'm going to use the list function to just exhaust that iterator and create a new list.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=103)** So I'm going to call the filterEvens function on the nums list, all right?
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=111)** And similarly, suppose I wanted to filter out the uppercase characters from this string, right?
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=120)** I could then use another function like this filterUppers function, which tests to see if a given character is uppercase or not, and again it returns false if it's uppercase, and true if it's not.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=133)** So I can call this lowers.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=137)** And once again I'll create a list, and I'm going to call filter, and I'm going to call filterUppers on my chars list.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=147)** All right, and then I'm going to print out each one.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=150)** So I'll print out odds, I will print out lowers.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=157)** All right, so let's go ahead and run this.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=161)** So into the terminal and into Start/Ch_1.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=166)** And let's see what's in here.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=171)** All right, it's called filtering.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=172)** So I'm going to run python on the filtering example.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=178)** And sure enough, you can can see in the result that all the odd numbers are now remaining, the evens are gone.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=183)** And sure enough, all of the uppercase letters are now gone from the characters, all right?
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=188)** So let's try using this on our massive earthquake dataset, all right?
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=194)** So let's close the terminal and let's comment out the previous example, and let's load our JSON, right?
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=203)** So this might surprise you, okay?
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=205)** But not all of the seismic events in the dataset are actually earthquakes.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=210)** So if I click on this, right?
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=214)** Some of these seismic events are actually the result of explosions or other events that are picked up by the seismic recording sensors.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=225)** So I'm going to use the filter function to see how many of these events are not true earthquakes.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=232)** So I'm going to define a filter function, right?
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=236)** I'm going to call it notAQuake, all right?
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=241)** And it's going to take a quake as an argument.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=244)** And so I'm going to check to see if the quakes, I'm going to look in the properties and I'm going to look at the type, okay?
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=253)** And if we look at the dataset, if I scroll down, you'll see that there's a, where is it?
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=258)** Type is right here, right?
>
> **[4:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=259)** And type is going to usually be earthquake, but it might not be, right?
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=262)** It might be something else.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=263)** So I'm going to check to see if "type" == "earthquake".
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=273)** And if it is equal to earthquake, I'm going to return false, otherwise, I'm going to return true.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=283)** All right, now I just need to filter this dataset with the filter function.
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=290)** So I'll name the result events, and I'll create a new list.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=294)** And I'm going to filter out, I'm going to call notAQuake, and I'm going to call that on, remember, we loaded this into the data variable, so I'll pass in the data, I'm going to pass in the features list, all right?
>
> **[5:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=313)** And then I'm going to print the results.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=315)** So I'm going to print out the total non-quake events.
>
> **[5:22](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=322)** And that's going to be the length of the events list that I just created, right?
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=331)** And I'm going to print out the first 10.
>
> **[5:33](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=333)** So I'll make a little loop here and I'll print out the events, and I'm indexing it to each one.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=345)** And each one of those is going to be a quake, so that means that there's a properties, and I'm going to print out the type.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=354)** All right, so let's save this.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=357)** And let's go ahead and open up our terminal one more time.
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=362)** And let's go into Ch_1, and I'm going to run the filtering example.
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=373)** And sure enough, we can see that there are 187 events that are not earthquakes out of the, what?
>
> **[6:21](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=381)** Almost 12,000 total, right?
>
> **[6:23](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=383)** And as we're printing each one, you can see we got explosion, we got quarry blast, right?
>
> **[6:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=388)** Well, I guess those are different from explosions for some reason.
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=392)** So now we know that there are are events in here that are not necessarily earthquakes, right?
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=397)** They're seismic events, but they're not earthquakes.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-working-with-data/data-filtering?u=76281980&t=399)** So we're going to come back to this a little later in the course, but for now, you can see just how easy it is to perform data filtering using just the built-in Python features.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), let (11), this. (3), pass (2), this, (1)
> **Code Identifiers:** filterevens (2), filteruppers (2), notaquake (2)
> **CLI Commands:** python (2), make (1)
> **Tools:** terminal (3)
> **Definitions:** in other words (1), is a  (1), means that (1)
> **UI Navigation:** click on (1), scroll down (1)
> **File Paths:** filtering.py (1)
> **Env Vars:** json (1)

#### Data transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=0)** - [Instructor] Data doesn't always come in the form that you would like it to.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=3)** So you might find yourself in a situation where you need to transform the data from one format into another.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=10)** Python provides a function that can help with this.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=12)** It's called the map function.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=14)** The map function creates an iterator that takes one or more sequences of values and produces a new sequence by applying a given function to each value in the original sequences.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=27)** So let's try a couple of simple examples and I'm going to open up my transform.py file.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=35)** All right, so let's imagine that I've got a couple of sample data sets here, right.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=40)** So down here, if I scroll down I've got a couple of sequences, right.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=44)** This one here is numbers, actually.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=46)** Well, they're both numbers, okay.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=48)** And so let's imagine that I wanted to convert each of the numbers in this nums sequence to the square of the original number that's in the list.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=59)** All right. So I can easily do this with the map function.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=62)** So I'm going to create a new sequence called squares and I'm going to use the list function to create a new list.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=69)** And I'm going to use the map function to do this.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=71)** So the first argument to the map function is the function that I want to be applied to each item in the list.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=78)** And you can see if I scroll up I already have a function here called squarefunc and it returns the number that's given to the second power, right.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=88)** So its square is the number.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=90)** So I'm going to call the squarefunc and I'm going to use the nums list and then I'll just print out the result.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=99)** So the map function's going to call that squarefunc with each item and we can go ahead and run this to see what happens.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=106)** So I'll save this and I'm just going to right click and choose run in the terminal.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=113)** And the output shows the resulting list, right.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=116)** It contains all of the original numbers multiplied by themselves.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=120)** Now that's kind of cool but map actually gets a little bit more powerful than this.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=124)** So suppose I wanted to convert each of the numbers here in the grades sequence into a letter grade, right.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=133)** You know, A, B, C, and so on.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=135)** So I have a function here called toGrade and that takes an argument, right, a number, and you can see that it uses a series of if and elif statements to assign a letter based upon the range that the given value falls into.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=150)** So more than 90, you get an A, right.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=152)** Between 80 and 90 you get a B, and so on.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=155)** So let's go back to the code.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=157)** Make this smaller for a second.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=160)** So I'm going to do something similar.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=162)** In this case, I'm going to make a new sequence called grades and actually I'm going to call that lettergrades because I already have the grades.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=173)** So lettergrades, actually, you know what.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=175)** Here's what I'm going to do.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=176)** First, I'll just sort it in place.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=178)** I'll just simply assign grades the result of the sorted function.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=185)** There we go. Okay.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=186)** And then I'll make a new list called letters and I'm going to make a list function.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=192)** And then I'm going to call map again.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=195)** And this time I'm going to call the toGrade function and I'll pass in the grades.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=200)** So now I have a sorted list of letter grades and I'll just print out the result.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=208)** So let's go comment out the previous example and let's go back to our terminal.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=218)** All right, and let's run this again.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=221)** And now you can see that I've got a list of sorted letter grades.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=226)** Now the map function gets even more useful when we want to reshape a data set into a different form.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=233)** So let's go back and look at the earthquake data.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=240)** And let's close the terminal.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=241)** All right, so if we look at the earthquake data we've been working with, there's quite a few of these properties and fields that we're not making use of, right.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=250)** So we can use the map function to create a data set that doesn't contain the fields that we don't care about.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=257)** So let's go back to the code and let's comment out the previous example and then let's load our data.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=266)** So what we're going to do first is, let's use the filter function to reduce the data set down to just the largest magnitude events, okay, those that are larger than six.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=278)** So uncomment this function.
>
> **[4:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=280)** And remember we saw how to use the filter function in a previous video.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=285)** So that's this code is going to do here.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=287)** It's going to filter down the list so only large seismic events are left.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=292)** So now we're going to create a function that simplifies our data structure to just include a few properties, okay, the place, the magnitude, and the date of each quake.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=305)** So what I'm going to do is write a function called simplify and that's going to take a quake as an argument, all right.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=314)** And I'm going to return a new JSON data structure, and that JSON data structure is going to have a place in it.
>
> **[5:20](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=320)** And that is going to be the quake's properties.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=326)** And I'll just use the existing place, okay.
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=331)** And then I'll have the magnitude and that is going to be the properties that's going to be the mag property.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=344)** And then there's going to be the date.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=346)** And what I'm going to do is if I scroll back up here you'll see that I've imported both the pretty print and the JSON modules.
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=355)** What I'm going to do is create a date.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=357)** In order to do that I'm going to have to import the datetime module, right.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=365)** Let's scroll back down.
>
> **[6:08](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=368)** So for the date what I'm going to do is create a string representation of the date.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=374)** So let's do that first, right.
>
> **[6:16](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=376)** Then I'm going to call the datetime module.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=379)** I'm going to use the date class and I'm going to call fromtimestamp.
>
> **[6:24](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=384)** And again, if you look inside the quakes, right, we have, where's the time?
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=390)** So this right here, this property is the number of milliseconds from the start of the Unix epoch which represents the time and date of this quake.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=400)** So what I need to do is get that value.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=403)** So I'm going to pass into from timestamp, I'm going to pass in the quake's properties and I'm going to call, see, get the time property.
>
> **[6:54](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=414)** And I've got to divide that by 1000 'cause I don't want to use milliseconds.
>
> **[6:58](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=418)** I want to use seconds.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=420)** Okay. And so now I'm going to return that.
>
> **[7:02](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=422)** I've already got my filtered results right here, right, in the results list.
>
> **[7:09](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=429)** So I'm just going to call this again, all right.
>
> **[7:18](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=438)** So I'm going to type results and I'm going to create a new list and I'm going to map.
>
> **[7:27](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=447)** I'm going to call the simplify function on the original results.
>
> **[7:33](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=453)** So here's where I get all the filtered data and then I'm going to take that result and put it back in the same variable.
>
> **[7:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=461)** Okay. And then I'm going to use this module here called pprint, right.
>
> **[7:47](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=467)** This will pretty print a JSON structure for me so I don't have to do a whole lot of coding here.
>
> **[7:54](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=474)** I'm just going to call pprint.pp and I'm going to pass it the results JSON.
>
> **[8:02](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=482)** All right. Okay.
>
> **[8:04](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=484)** So we've simplified the list, right.
>
> **[8:06](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=486)** We've gotten only the big magnitude items and then we've simplified the data structure to get rid of all those fields we don't need.
>
> **[8:13](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=493)** And then we're going to print the results out.
>
> **[8:14](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=494)** So let's go into the terminal and this is the transform function.
>
> **[8:26](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=506)** So I'm going to call python transform.
>
> **[8:31](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=511)** And sure enough, here in the output you can see that the new data structure is much simpler than the original, right.
>
> **[8:37](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=517)** All the other fields are now gone.
>
> **[8:39](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=519)** I only have place, magnitude, and date.
>
> **[8:41](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=521)** Right, place, magnitude, and date.
>
> **[8:44](https://www.linkedin.com/learning/advanced-python-working-with-data/data-transformation?u=76281980&t=524)** And the new data set is much easier to read and it only contains the data that I care about.

> [!info]- Semantic Content
>
> **Code Keywords:** function (24), let (16), pass (4), this. (3), module (3)
> **CLI Commands:** make (4), python (2), find (1)
> **Env Vars:** json (5)
> **Cross-References:** go back to (3), previous video (1)
> **Tools:** terminal (4)
> **Code Identifiers:** tograde (2)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Analogies:** imagine (2)

#### Solution: Build a data summary
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=0)** - [Instructor] All right, let's take a look at my solution for this challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=8)** And remember, it's not important that your code be exactly the same as mine.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=12)** There's usually multiple ways to solve challenges like this.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=15)** And the important thing to do is just learn from other people's examples.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=19)** This challenge consists of four parts.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=21)** So there were four different results we needed to calculate and we'll go through each one of them.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=26)** So the first part was to find the total number of earthquakes or well, seismic events.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=32)** And this was a bit of a trick question because that data is contained right within the first part of the file.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=39)** So I just used the count data field inside the metadata to get the total number of quakes.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=45)** Of course, if you wanted to use the length function to get the length of the features array itself, that's also fine.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=52)** Okay, so moving on.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=53)** The second part was to find out how many events were felt by at least 100 people.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=60)** So this part of the solution calls for the use of the filter function and my filter, which is defined in this little utility function called feltreport, it just gets rid of any seismic events where the value of the felt property is not at least 100.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=80)** So after I filtered out all of the events that don't meet that criteria, I just get the length of the resulting list and that tells me how many events were felt by at least 100 people.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=92)** All right, let's move on.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=93)** So the third value we had to calculate was the name of the place that had the seismic event that was felt by the most number of people.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=105)** So when you hear the word most, that usually means the max function.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=110)** And so I used the max function and I defined a key function named getfelt, which is down here.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=117)** So that gets the value of the felt property and returns it or returns zero if that value is none.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=125)** So that will give me the event that has the most number of feltreports, and then I just have to get the title property, which gives me the name of the place.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=134)** And then the fourth value we had to calculate was related to the third, which was to find the actual number of felt reports for the most felt event.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=143)** And since we already have the most felt event, so all we need to do now is get the actual value from the felt property inside the property's array.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=153)** And that gives us the actual number of reports, in addition to the name of the place, which we calculated in part three.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=160)** All right, well, let's go ahead and run the code to make sure it actually works.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=164)** So I'm going to click on test my code, and sure enough, we have 11,745 total events.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=171)** 28 of them were felt by at least 100 people.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=174)** This quake here in Utah was the most felt one in this dataset, which was by a little over 33,000 people.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=183)** Okay, so that's my solution.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-build-a-data-summary-24354353?u=76281980&t=184)** Take a few moments, compare your code to mine and see how you did.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), this. (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2. Collection Classes

#### Overview of collection classes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=0)** - [Instructor] Python ships with a basic set of data types for working with collections of data and you've probably already used some or all of these in your work at some point.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=10)** In this chapter, we're going to learn about some of the more specialized and useful collection types and how they build on the basic collection classes to help solve different kinds of programming problems.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=21)** As a quick refresher, recall that Python has four basic collection data types.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=26)** There's the list, which is a sequence of data types and is declared using square brackets with each data item separated by a comma.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=34)** A close relative of lists are tuples, which are defined with parentheses and are also comma-separated.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=41)** However, lists can be changed once they are created because they're mutable, whereas tuples are not.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=46)** Next is the set, which is an unordered collection of distinct values defined using curly braces and like lists, sets can be changed once they're created, and then finally is the dictionary, which is a set of key value pairs.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=60)** In addition to these basic collection types, Python's collection modules provide several more and these are the namedtuple, which makes it easier to work with tuple objects by giving names and meaning to each item's position in the tuple, an improved dictionary class called defaultdict, Counters, which can track the number of distinct values added to them and a somewhat interesting collection class known as a deque, which acts as a double-ended list.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-collection-classes?u=76281980&t=88)** As we go through the chapter, we'll learn more about each of these types and see useful examples of how they can be applied in your Python projects.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### Named tuples
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=0)** - Let's start by looking at the namedtuple.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=3)** Suppose I wanted to define a data structure to represent a geometric point on a typical X and Y axis.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=11)** Now, I could easily do this by defining a regular tuple, right, with two elements, the X and the Y values of the point.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=17)** And to access these values, I can use positional argument indexes to get each one.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=23)** Now this may seem all fine and good but as my program becomes more complex, this kind of code easily loses its meaning and becomes harder to read especially if I don't keep the names of all the point variables clear and meaningful.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=37)** I could just define a Python class and give it member properties for X and Y and then write getter and setter functions for the properties.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=45)** But that seems a little much for a relatively simple data structure.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=50)** Namedtuple helps solve this problem by assigning meaning to each of the values along with the tuple itself.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=57)** And they also provide some helpful functions for working with them.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=60)** So let's go over to the Code and see how they work.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=65)** All right, so here in VSCode, I'm going to open up namedtuple.py in my code space.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=70)** And you can see I've already imported the collections module, which is where they are defined.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=75)** So let's start with a simple example.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=77)** I'll create a namedtuple by using the namedtuple factory method to create one to represent a Point structure and I'm going to call it Point.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=87)** And to do this, I'm going to use the collections.namedtuple() function.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=94)** So I'm going to give it a name for the tuple and I'm going to call it a Point.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=98)** So this is kind of like a lightweight way of defining a class almost.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=102)** And then inside this string, I'm going to give it the names of the fields that I want that tupple to have, right?
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=108)** So my point is going to have two properties, X and Y.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=111)** Now to create a new Point object, I just use the name as a regular constructor almost.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=118)** So I'll declare a point named p1 and I'll construct it using this new namedtuple that I've got.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=125)** And we'll give that values of 10 and 20 and then we'll make another one.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=132)** And this one will have 30 and 40.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=134)** And then I'll print out p1 and p2.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=141)** All right, so let's go ahead and run what we have.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=143)** So I'm going to open the terminal and let's go into start folder into chapter two.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=153)** And let's run this.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=158)** And you can see that when I run the code, right we have two points and their data is printed in a nice readable style.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=166)** But what's really nice about this is that now I can refer to the members of the point by name, right?
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=172)** So let's go back up to the code.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=175)** And what I'm going to do is I'm going to print also, I'm going write p1.x and p1 dot and you'll see as I'm typing the type, right I hit the period and I'm also getting statement completion.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=188)** So the Python extension is reading the structure of my namedtuple and it realizes that I've got these two properties.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=196)** So that's another benefit of using these.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=198)** So let's save, and now let's run again.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=202)** And you can see now that I can access them just using the names of the properties.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=206)** So this makes my code much easier to read and maintain.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=212)** Namedtuple also have some interesting helper functions.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=214)** So there's the replace() function that lets me create a new instance of the namedtuple while replacing specified fields with a new value, right?
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=224)** So let's go up to the code.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=226)** What I'm going to do is for point one I'm going to assign that to value of p1 and I'm going to call the replace() method.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=235)** And I'm going to replace the x property with a new value.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=238)** In this case, it's going to be a hundred, right?
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=240)** And then I'll just print out p1 again.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=244)** So now let's run.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=248)** And now you can see that I've got a new point, right?
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=251)** With x is equal to 100 now.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=254)** So namedtuple can really help make your code more readable when what you really need is the lightweight immutable class.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=262)** Now keep in mind though, they do have limitations, right?
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=265)** Such as you can't use default argument values.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=268)** There's some other limitations for working with these.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=270)** But if the data that you're working with has a large number of optional properties, it might be better to go with a regular class.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-working-with-data/named-tuples?u=76281980&t=278)** Otherwise, using a namedtuple is sort of like defining a lightweight class for those instances where a regular class would be too much and you just want to make your code more readable and easier to maintain.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (2), class. (2), module (1), this, (1)
> **CLI Commands:** make (3), python (2)
> **File Paths:** namedtuple.py (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)

#### Default dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=0)** - [Instructor] Just about every non-trivial Python program uses dictionaries in some way.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=5)** They are a great way to associate data values with unique keys for fast lookup.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=12)** The collections module provides two interesting dictionary subclasses to help out with some common scenarios where a regular dictionary would need unnecessary code.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=21)** And one such example is the default dict which we'll examine in this example.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=27)** It's a fairly common scenario to use dictionaries to keep track of data such as the result of counting operations.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=33)** And so here in my code you can see I have a list of different kinds of fruit and I want to be able to count the number of each kind of fruit in the list.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=42)** So I have some code, right, that creates a dictionary and then iterates over the list and uses the dictionary to keep track of the count of each type of fruit.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=51)** Now, the code that I have right now is going to produce an error when I try to run it.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=55)** Okay?
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=56)** So let's see.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=57)** I'm going to run this in the terminal, and sure enough there is my error, right?
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=61)** So why am I getting this key error?
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=62)** The reason this is happening is because I'm trying to modify the value of this key before it's been initially added to the dictionary.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=72)** Now ordinarily, right, you would just go back and fix this problem and you would do something like this.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=76)** You would say, well, if the fruit is already in the fruit counter keys, then you can increment the count
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=89)** otherwise you have to initialize it.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=93)** So that would be fruit counter, right?
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=96)** Fruit equals one, right?
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=100)** And so now when I run this again, well, I don't get the error anymore, but I'm not outputting anything.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=106)** But you can see that the error is gone.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=108)** So everything works, but this initial condition is only going to be executed one time for each fruit and it adds unnecessary visual noise to the code.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=118)** So to reduce the code and make it more readable we can just define a default dict instead.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=124)** So let me close this terminal and let's go and change this code.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=128)** So in order to use the default dict you have to import it from the collections module which you can see I've already done up here.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=134)** And then I can create the default dict object.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=141)** Now, when I create a default dictionary, it requires me to specify something called a factory function which essentially acts as the creator of whatever the default value is.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=152)** So I'm going to specify that I'm going to use an integer.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=155)** So this code basically says if I try to access a key that doesn't already exist just create a default value for me using this object as the constructor, which in this case is an integer.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=168)** And since creating a new int object initializes the value to zero, I can now just access any key and increment it without having to check to see if it's already there.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=177)** So let's go ahead and remove the checking code I put in earlier.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=183)** All right, and so now I've got my original code back.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=186)** The only difference is that I'm now using a default dict instead of a regular dict.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=190)** And I'm going to go ahead and run this.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=193)** I'm going to print out the results while I'm at it.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=195)** So I'll print out the root counter.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=201)** All right, so let's go ahead and run this.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=205)** And sure enough, you can see that it's working now.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=207)** So here's my default dictionary, and you can see I've got counts of all the different fruits that are in the dictionary.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=213)** So you can also define your own factory method too.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=217)** So let me make this a little bit smaller.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=219)** So if I wanted the initial value to start off at a different level, I can just use a Lambda function for that.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=226)** So instead of having my default dictionary start off with just an integer, I can say I'm going to specify a Lambda function and make that a hundred.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=233)** All right.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=234)** And now if I run this again, right now, you can see that the count is starting off at a hundred for each of these fruit types, right?
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=242)** So we've got 103, 101, and so on.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=244)** Now, this factory object doesn't need to be a built-in class like an int or a string, it could be any custom object you want.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=251)** So default dict is really useful but you have to be careful when you use it because any key that you didn't explicitly add to the dictionary will be assigned a default value when you try to access it.
>
> **[4:23](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=263)** So if you have a situation where the fact that a key is missing from the dictionary is an important indicator, then default dict is probably not the right collection to use.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-working-with-data/default-dictionaries?u=76281980&t=273)** In other situations, however, it can make your code simpler and easier to read and test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (3), function (3), module (2), lambda (2)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (2)
> **Definitions:** is an  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Counters
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=0)** - [Instructor] As I mentioned earlier, one of the common uses of dictionaries is to keep track of the count of individual items.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=7)** The collections module supplies a counter class which is basically a dictionary subclass for counting hashable objects.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=16)** Now, you might be saying, well, wait a minute.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=17)** We saw how to do this earlier with the default dict class, right?
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=21)** And that's true but counters have some nice additional features for working with numbers of items.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=27)** So let's open up the counter code here in our start folder in chapter two, and we have two lists of student names for two different classes.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=39)** Now, counters can be initialized in a variety of ways, and in this case I'll create two of them using the name lists, right?
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=48)** So I'm going to write C1 and I'm going to create a new counter, and I'm going to initialize it with the values from class one.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=58)** And then I'll do the same thing with C2 and that's going to be a counter for class two.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=64)** So let's try a few operations.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=67)** Now, since a counter is a dictionary I can use a key to get a value from the list.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=75)** So let's see how many students named James are in class one.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=80)** So to do that, I'm going to print out C1, and I'm going to use James as the key.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=87)** Okay?
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=88)** We can also see how many students there are in the class by using the sum function to add up all of the values in the counter.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=98)** So recall that we learned about the sum function earlier, and I'm going to sum up in class one, all of the values.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=108)** All right?
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=110)** And so I'm going to print that, and I'm going to print that followed by students in class one.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=119)** I don't actually need that space.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=121)** All right?
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=122)** Counters can also be combined together to have their values added to each other.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=129)** So for example, if I wanted to combine these two classes I can do that by using the update function and I'll add the second, the students in the second class to the first class.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=140)** So to do that, I use the update function and then I'm just going to update class one with class two.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=147)** And then we can print the sum of the values again to see the newly defined totals.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=156)** Let's copy this line and paste it there.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=159)** So let's pause here and run what we already have.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=163)** So we've got a couple of initialization statements that make new counters.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=167)** Then we see how many people named James are in the first class.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=171)** We count the number of students in class one.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=173)** Then we combine the two classes into class one and then we check the count again.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=178)** So let's go ahead and run this.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=180)** So I'm going to open my terminal and let's go into start chapter two.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=189)** And this is the counter example.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=190)** So I'll run Python counter, and you can see that there are two people named James in the first class.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=197)** Is that right?
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=199)** Yeah, there's one.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=199)** Oh, yep, there's two.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=201)** Okay.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=201)** And you can see that there's 12 people in the first class before we do the update.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=206)** And then after we do the update you can see that there's now 24 people in class one.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=211)** All right, let's keep on going.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=215)** So go ahead and collapse this down.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=218)** All right.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=220)** There's a convenience function called most common that will print out the top most common items in the counter.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=227)** So for example, if I print and class one I'm going to call most common, and I'm going to look for the three most common names in the two classes.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=244)** Now, if I leave the argument blank it will print all the keys in the dictionary but I can limit it here just to the top three keys.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=250)** So when I run this again let's bring up this code and let's run it again.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=257)** And now we can see that we have the top three most common names.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=261)** So when we combine the two classes now we have three people named James, we've got two people named Frank and one person named Bob.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=269)** So just like I can add two counters together I can also subtract one counter from the other.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=275)** So let's change the code to use the subtract function to subtract off the class two name list.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=284)** All right?
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=284)** So what I'm going to do here is write C1 dot subtract and I'm going to subtract off class two.
>
> **[4:58](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=298)** Okay, there we go.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=300)** And then once I do that, once again, we'll print out the most common, and this time we'll just limit it to the first most common thing, and when I run the code again.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=314)** All right, so now you can see that the list has changed, right?
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=318)** So Frank and Bob are gone.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=319)** And now since we're back down just to class one again remember there were only two Jameses in there and so now we have two people named James in that class.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=327)** Okay, so let's try one more operation.
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=331)** We're going to use the ampersand operator to calculate the intersection of the two counters.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=338)** So in other words, this is going to tell us which items are present in both of the counters.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=344)** So I'll do that by writing print, and then I'm going to write C1 and then ampersand, C2.
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=350)** This will do an intersection operation and it will print out the result.
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=355)** All right, so let's go ahead and run that.
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=358)** And we can see that when we run this, what's common between the two classes is that the names James and Frank are common to both of the classes.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-working-with-data/counters?u=76281980&t=369)** So if you need a dictionary to help keep track of a number of different items along with a set of operations for working on the data or multiple sets of data then the counter class just might fit the bill for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (6), class. (4), module (1), class, (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), in other words (1)
> **Tools:** terminal (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### The deque class
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=0)** - [Instructor] The last collection class that we will take a look at in this chapter is called a deque.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=5)** Now, the name may look like it says dq, but it's actually pronounced deck, and it's a sort of a hybrid object between a stack and a queue.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=13)** In fact, the name itself basically stands for double-ended queue.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=17)** That's where the de comes from.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=19)** And you can use them to append or pop data from either side.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=23)** And they're designed to be memory efficient when accessing data from either end.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=28)** Deques can be initialized to either be empty or get their initial data from any existing iterable object.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=35)** In this case, I'm using a string.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=37)** They can also be specified to have a maximum length.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=40)** To add data to a deque, you use the append method to add items on the end or the right side and appendleft to add items to the beginning.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=50)** And similarly, items can be removed using either pop or popleft.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=55)** Deques also support a rotate function which can operate in either direction.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=59)** The rotate function takes a parameter indicating how many items to rotate and defaults to one.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=65)** Positive numbers rotate to the right.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=67)** Negative numbers rotate to the left.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=69)** All right, so let's exercise the deque a little bit with a few examples.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=73)** Okay, so here in my codespace, I'm going to open up the deque and you can see I've already imported the collections and string modules.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=79)** So let's create a new deque using all lowercase letters.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=84)** And to do that, I'll just simply create a new collections.deque object and I'm going to initialize that to string.ascii_lowercase.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=95)** So that gives me all the lowercase letters.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=97)** And then let's print out the number of items in the deque because it supports using the len function on it.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=104)** So I'm going to print out that the Item Count is and that's going to be the length of d.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=115)** Deques can also be iterated over, right?
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=117)** They support iteration.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=119)** So you can loop over each of the items the same way you would do with any other iterable.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=124)** So I can write code that looks like this.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=125)** I can write for elem in d.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=130)** And in this case, what I'll do is just convert each element to an uppercase.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=139)** That's a couple good examples to get started.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=140)** So let's go ahead and try this out.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=142)** So here in my terminal, let's go into start chapter two and let's run the deque example.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=153)** All right, so let's scroll back up.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=155)** So sure enough, we can see that there's 26 items in the deque, which makes sense, there's 26 letters.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=161)** And you can see that as we're iterating over each letter, we're converting it to uppercase.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=167)** Okay, we can also pop items from either side.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=170)** So let's try that. Let me clear this.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=175)** Okay, so let's try popping some elements.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=179)** So we'll pop from the right and then we'll also pop from the left.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=185)** And, of course, we can also add items to each side, so let's append and we'll put a number on there.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=192)** And let's also append the left as well and we'll put number one on there.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=199)** And then let's go ahead and print out our deque to see what's in there.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=203)** So let's go ahead and run the changes.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=207)** And when we run the changes, right, we can see that A and Z have been removed because of the pop and the popleft and they've been replaced with the numbers one and two because of the append and the appendleft.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=220)** Okay, let's try one more thing.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=222)** Let's try rotating the deque.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=224)** First, we'll print the deck in its current state, so we'll print d, and then we'll rotate it and let's rotate it one position and then let's print it again.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=240)** Okay, and so let's run that code.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=245)** And sure enough, you can see that when we run this, now the number two is on the front of the deque after we rotate it one space towards the right because the deque wraps around and places the end value on the front.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=260)** So before we do the rotation right, one is here and two is here, and then we rotate everybody to the right.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=265)** So that way, two goes to the beginning and now y is at the end.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=269)** So the deque object is really versatile.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-working-with-data/the-deque-class?u=76281980&t=271)** So if you have a use case where you need to be able to operate on both ends of a list and perform operations like this rotation for example, then this just might be what you need.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (3), case, (2), this. (2), from. (1)
> **Definitions:** is called (1), stands for (1)
> **Code Identifiers:** ascii_lowercase (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Classify event types
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=0)** - [Instructor] All right, so for this challenge, we needed to build a classification of the different event types contained within our earthquake dataset.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=14)** And for my solution, I decided to use the defaultdict collection class.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=20)** And I made this decision for two reasons.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=22)** First, I needed to count the number of each event, and I wanted an easy way to associate the event type with the count.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=32)** Now, the dictionary class gives us an easy way to do that, and the defaultdict class makes it even easier by declaring an object that uses integers as the default type.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=44)** So my code starts with declaring a new defaultdict that uses integers as the value type.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=52)** And then I just process each event in a loop and use the event type as the key into the dictionary.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=63)** And I increase the count for each type as I come across them.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=67)** So when the loop completes, each key in the dictionary represents the event type, and the associated value is the count for that type.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=77)** Then I convert the defaultdict into a regular dictionary and return the result because the challenge required that the function return a dictionary object.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=89)** So now if you solved this challenge using a regular dictionary with a little bit more code, that's totally fine.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=94)** So don't worry about that.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=95)** I just decided to use the defaultdict because it makes the code a little bit easier.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=100)** So, okay, let's go ahead and test the code and make sure we got the right answer.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=107)** All right, and we can see that... Let's see.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=110)** So the number of earthquakes was 11,558.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=115)** There were 85 explosions, 81 quarry blasts.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=120)** Not really sure why that's different from an explosion, but I guess it is.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=123)** And then there were 17 ice quakes, which just sounds pretty cool.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=127)** And then there were four other events.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=129)** Not sure what they were, but they were just called other events.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=132)** There were four of those that resulted in seismic readings.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=136)** All right, so if you got the same result, then congratulations, you completed the challenge.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-classify-event-types-24354354?u=76281980&t=140)** Take a few moments, and review your code and compare it to mine.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), let (2), class. (1), type, (1), function (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Serializing Data in Python

#### Overview of serialization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=0)** - [Lecturer] In order to work on a set of data, you usually first have to obtain the data from somewhere.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=5)** And then of course, once you've completed your operations on the data, you usually need to save it back out again and store the results.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=13)** This process is called serialization.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=16)** It's the process of reading and writing data from and to a datastore.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=21)** The datastore can be anything.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=23)** It can be a local file, or a database, or a network stream.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=27)** It doesn't really matter.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=29)** In this chapter, we're going to use some of the built-in Python methods, or taking a set of data and serializing it to and from a couple of common file formats.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=40)** In this case, JSON or JavaScript Object Notation, and Comma Separated Values or CSV files.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=48)** There's also a third common format called xml, but that's beyond the scope of this course, so we're just going to focus on JSON and CSV.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=56)** Comma Separated Value files are a popular way of storing data because it's one of the formats used by spreadsheet programs like Microsoft Excel, and Apple Numbers, and Google Sheets, and so on.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=69)** JSON is also a popular data storage and interchange format, and it's the format that we've been using throughout this course.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-serialization?u=76281980&t=77)** By the end of this chapter you'll be able to use Python to read and write data from both of these common file formats.

> [!info]- Semantic Content
>
> **Env Vars:** json (3), csv (2)
> **CLI Commands:** python (2)
> **Code Keywords:** case, (1)
> **Definitions:** is called (1)
> **Speakers:** - [lecturer] (1)

#### Serializing data as CSV
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=0)** - [Instructor] For this example, we're going to take a subset of our JSON data and save it to the comma-separated values format.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=7)** You can find the documentation for the CSV module here on the Python website if you're interested in reading it on your own time.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=15)** But the process is actually pretty simple and straightforward.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=18)** So let's just jump over to the code and see how that works.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=21)** So here in my Ch_3 start folder, I'm going to click on the serialize_csv function.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=29)** And what we're going to do is create a CSV file that contains just a few columns of data out of all the properties that our massive earthquake structure holds.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=39)** So first, to limit the size of this file for the purposes of this demo, we're going to filter out all of the earthquakes that are smaller than magnitude five.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=49)** And you can see I'm using the filter function here that we learned about earlier in the course to reduce the size of the dataset, right?
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=56)** So next, we need to create the column headers and the row structure to hold the data.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=62)** So I'm going to create a variable named header, and that's going to contain Place, Magnitude, Link, and Date.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=80)** And I'm also going to make a variable that's going to hold the rows for the data.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=86)** Then I'm going to fill out the rows list with the data from the array that we just built that only contains the largequakes.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=94)** All right, so let's go ahead and do that.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=96)** So for each quake in largequakes, first I'm going to create a date.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=106)** And the date, what I'm going to use is the datetime module, and I'm going to use the date class, and I'm going to call from timestamp, all right?
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=117)** And from timestamp accepts a seconds value, not a milliseconds value.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=123)** And inside the quakes structure, we have this data.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=126)** It is basically, let's see, it's quake and it's in the properties, and it's the time property.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=139)** And, whoops, that's got to be in quotes, and I need to divide that by 1000.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=146)** And I'm actually going to convert this to an integer.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=153)** All right.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=154)** And let's go ahead and put on a separate line to make it more readable.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=160)** All right, so first I create the date, and then I'm going to append to the rows.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=167)** I'm going to put in, it's got to be a sequence because each row is going to be a sequence of data.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=174)** So I'm going to have quake, and I'm going to have properties, and place, right?
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=183)** That's this column right here, okay?
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=186)** So properties and place, all right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=189)** Then I'm going to have quake, and that's going to be followed by the magnitude.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=199)** So properties and magnitude, all right?
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=205)** And, oh, that's one extra thing right there.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=210)** And then finally, well not finally, we have to do the link, right?
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=215)** So that's going to be quake, and that is going to be in the properties, and that is going to be the url property.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=228)** And then finally, we have the date.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=231)** All right, oh, no, it's thedate, not date, thedate.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=235)** There we go.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=238)** All right, so this will now add all the data in those four columns, right?
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=245)** To our rows, matching all of our headers.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=248)** So we have the place, the magnitude, the URL link, and the date that we just calculated from the timestamp.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=255)** So once the data has been put into the rows, now I can use the CSV module functions to create and write the CSV file.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=265)** So what I'm going to do is write with, and then I'm going to open the file, and I'm going to call it largequakes.csv.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=276)** And I'm going to open that in write mode.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=281)** And I'm going to operate on that, I'm going to call it the csvfile variable.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=287)** All right, so that will open up the file for writing, and I'm going to create a CSV writer object with my file and then specify that the delimiter is a comma.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=297)** So I'll make a variable called writer, and that's going to become a csv.writer object.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=305)** And that's going to take my file, and the delimiter is going to be a comma.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=315)** Then I just need to use the writer object to save out the data.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=319)** So on the writer object, I'm going to call writerow.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=327)** And the first row I'm going to write out is this header row right here, so that we have all the headers at the top of the file.
>
> **[5:35](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=335)** So I'll write out header.
>
> **[5:39](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=339)** And then I'm going to use the writer object, and this time, I'm going to call writerows, multiple, and I'm going to pass in the rows structure, the list of rows that we've already created, all right?
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=349)** That's really all there is to it.
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=350)** So here I list, I filter out my data, I get my header in place, I initialize my rows to be empty.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=357)** And then for each one of the pieces of data, I'm going to add this sequence of values in each row.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=365)** And then once I've done that for all the quakes, I just simply write out all the rows into the CSV file.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=371)** So let's go ahead and run this.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=375)** Let's go into Start/Ch_3.
>
> **[6:21](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=381)** All right, and there's serialize_csv.
>
> **[6:24](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=384)** So I'm going to run this.
>
> **[6:24](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=384)** And when I run this, you're going to see a CSV file appear over here in the list.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=390)** So python serialize_csv.py.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=396)** And sure enough, there it is, right?
>
> **[6:38](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=398)** There's the file just showed up.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=399)** So let's go ahead and open that file up.
>
> **[6:44](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=404)** And we can see, make this a little bit smaller.
>
> **[6:49](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=409)** All right, so here's the data in the file, right?
>
> **[6:51](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=411)** So here's our headers, right?
>
> **[6:53](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=413)** Place, Magnitude, Link, and Date.
>
> **[6:55](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=415)** And you can see that here's the name of the place.
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=419)** All of the magnitudes are at least magnitude five, so none of the smaller quakes.
>
> **[7:04](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=424)** So that keeps the data files somewhat manageable, right?
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=427)** And the data is in the right format.
>
> **[7:09](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=429)** So we have the link, right?
>
> **[7:11](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=431)** And we have the date here at the end.
>
> **[7:14](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=434)** And sure enough, we can just go ahead and select this guy, not including the date, obviously.
>
> **[7:21](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=441)** So we'll copy that, and we'll paste it, and put it into a new tab.
>
> **[7:26](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=446)** And sure enough, there we have the information about that particular quake.
>
> **[7:30](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-csv?u=76281980&t=450)** So now, we have the ability to work with our data in a spreadsheet if we want to do so.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (3), finally, (3), function (2), this. (2)
> **Env Vars:** csv (7), json (1), url (1)
> **CLI Commands:** make (4), python (2), find (1)
> **Code Identifiers:** serialize_csv (3)
> **File Paths:** largequakes.csv (1), serialize_csv.py (1)
> **UI Navigation:** click on (1), open the (1)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)

#### Serializing data as JSON
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=0)** - [Instructor] Throughout the course, we've been using the load function in the JSON module to load our dataset from a JSON file.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=8)** But you can also use the JSON module to easily save data in the JSON format, both into a string and into a file.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=16)** For this example, we're going to take our earthquake dataset and simplify it by getting rid of many of the data fields that we're not using, and then serializing the data out.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=26)** So let's go ahead and in the Start folder in chapter three, let's open up serialize_json.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=32)** And you can see I've already got some code here.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=34)** So my code starts off by loading our earthquake data from the data file, just as we've been doing so far in the course.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=42)** Then to make the dataset easier to use, I'm going to filter out all of the quakes that are not larger than magnitude 6, right?
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=52)** So just for the purposes of this demo.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=54)** This should only leave us with a handful of data points just to make the example more compact.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=59)** So once I have the smaller dataset, I'm going to transform it into a reduced set of properties, right?
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=65)** Because again, if you look at this data file, you can see there all these properties, right?
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=69)** And we're not using a lot of these guys.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=71)** So let's make this dataset a lot easier to use.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=76)** Right, so what we're going to do is define a function.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=80)** And I'm going to use the map function which we learned about earlier in the course, okay?
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=85)** So here's what we're going to do.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=89)** I'm going to write largequakes is equal to, I'm going to make a new list, and I'm going to use the map function.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=98)** And I'm going to map the function.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=101)** I'm going to call a function called simplequake, and I'm going to operate on the largequake's dataset.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=110)** So the simplequake function will take the complex JSON structure and make a more compact one.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=117)** We're only going to keep the place, magnitude, and link properties, and we'll use the time property to calculate a date.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=125)** So now I have to actually define that function.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=128)** So I'll define the function, I'll call it simplequake.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=133)** And it takes one argument, which will be an individual quake, and I'm going to return a new JSON object.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=140)** And inside that object, I'm going to have a place property, and that's going to be the properties, place of the original.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=155)** And then I'm going to have a magnitude.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=158)** And just to make things simple, I'm going to copy this, and that's going to be the magnitude property.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=167)** And then there's going to be the link, and I'll paste.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=172)** And once again, that's going to be the URL property.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=177)** And then I'm going to have a date property.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=180)** And I'm going to calculate this.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=182)** I'm going to create a string.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=184)** And the string is going to convert, I'm going to use the datetime module and the date class.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=191)** And I'm going to call fromtimestamp.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=194)** And fromtimestamp is going to operate on, I'm going to convert this to an integer, and I need the properties, I need the time property from the quake data.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=207)** And that is going to be divided by 1,000, because that's milliseconds, right?
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=213)** And I don't want milliseconds, I want seconds for the fromtimestamp function.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=218)** So let me go ahead and save that.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=220)** So after we've modified the JSON data structure, we can now serialize it out, okay?
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=226)** And there's two ways to do that.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=228)** First, I'm going to use the dumps function, which is the opposite of the load function.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=233)** It takes an existing JSON structure and places it into a string format.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=239)** So I'm going to write str.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=243)** And in the JSON module, I'm going to use the dumps function.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=248)** And the dumps function is going to take the data structure that I want to operate on, right?
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=253)** Which is largequakes.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=255)** I'm going to say that I want to sort the keys, so that's going to be set to True.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=260)** And then I'm going to set the indent level to be 4.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=264)** And then I'm going to print out that string.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=268)** So let's go ahead and run what we have.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=270)** So what we have here is we filter out anything smaller than a magnitude 6.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=275)** We have a function that simplifies the JSON structure down.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=278)** So we filter out everything that's not big.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=281)** And then we map the complex structure to the simple one.
>
> **[4:45](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=285)** And then we put it into a string, and print out the string.
>
> **[4:48](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=288)** So let's bring up our terminal, and we'll go into chapter three, and we'll run the serialize_json example.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=305)** And sure enough, let me go ahead and make this bigger.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=307)** You can see that when I run this, right?
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=309)** Now in the output we have the resulting JSON structure has been saved into a string.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=314)** It's much simpler than the original big JSON file that we have.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=318)** And it's being pretty printed out by the dumps function.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=323)** Now that's putting it into a string.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=324)** We can also save the data to a JSON file.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=327)** So let's try that next.
>
> **[5:29](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=329)** So let's go ahead, and I'm going to open a file, and I'm going to call the file largequakes.json.
>
> **[5:43](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=343)** And we'll open that in write mode.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=346)** And I'll call that outfile.
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=350)** And then I'm going to use the JSON module's dump function.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=353)** So dumps dumps to a string.
>
> **[5:55](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=355)** The dump function goes to a file or some other streamable object.
>
> **[5:59](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=359)** So I'm going to dump out largequakes.
>
> **[6:03](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=363)** I'm going to use the outfile as the destination.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=365)** Once again, I'm going to sort the keys, and I'm going to set the indent equal to 4.
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=373)** All right?
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=375)** Okay, let's go ahead and comment out that previous example, and let's go down to our terminal, and run this code.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=389)** All right, so let's run it.
>
> **[6:31](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=391)** All right.
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=392)** And now you can see that this new file called largequakes.json has appeared in the folder here.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=397)** So let's go ahead and click on that, and let's shrink down the terminal.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=403)** And you can see that our code has now been output, well, not the code, it's our data.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=410)** So our JSON file has been created, and the content of the JSON file is now our simplified JSON structure, right?
>
> **[6:57](https://www.linkedin.com/learning/advanced-python-working-with-data/serializing-data-as-json?u=76281980&t=417)** So by combining the data manipulation functions like filter and map with the serialization functions in the JSON module, it's pretty straightforward to modify a dataset and save it as JSON.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (14), module (6), this, (2), this. (1)
> **Env Vars:** json (19), url (1)
> **CLI Commands:** make (7)
> **Tools:** terminal (3)
> **File Paths:** largequakes.json (2)
> **Code Identifiers:** serialize_json (2)
> **Cross-References:** earlier in (1)
> **UI Navigation:** click on (1)

#### Deserialization of data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=0)** - [Instructor] Now that we've seen how to save data to a csv file, in this example, we're going to do the opposite.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=6)** We're going to load information from an existing csv file into a json structure.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=12)** And this process is sometimes called deserialization.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=16)** We're going to use one of the CSV files that was created in an earlier exercise.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=20)** So if you haven't already done the exercise where we save data to a csv file, go back and do it now, so you'll have the file to work on in this example.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=29)** So here I have the output from the previous exercise called largequakes.csv.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=35)** So let's view that file again, and inside, remember, there's four columns of data, right?
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=40)** There's the name of the place, the magnitude, date and the link to the event on the usgs website.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=47)** So we're going to use the same csv module to read this data as we use to write the data in the first place.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=55)** So let's open up the deserialize code, and what we're going to do, you can see in my start code, I've already defined a variable called result which is going to hold the results of the deserialized data.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=67)** So the first thing we need to do is open the file for reading, and then store that file reference in a variable.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=74)** So I'm going to write with open, and we're going to open up largequakes.csv, and we're going to open it up for reading as the csvfile.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=90)** So then what we need to do is create a reader object that will read the data.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=96)** So I'll type reader, and on the csv module, there is a reader class, and I'm going to pass in the csv file that we just opened.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=109)** So now that opens the file for reading, and to actually read the data, all we have to do is iterate over each row in the reader using a regular loop because this csv reader returns an iterable.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=122)** So I'm just going to write; for row in reader.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=128)** And then for the moment, let's just print each row, just so we can see that it's working, right?
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=136)** So let's pause here and just run what we have.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=140)** So let's go to the terminal, and in chapter three, we're going to run the deserialize.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=151)** Okay, and you can see that when I run this, this is good news, right?
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=154)** We can see that the data's being printed out.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=156)** So this is all the data that's inside the csv file, okay?
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=161)** So since things seem to be working, let's keep on going, right?
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=165)** So let's close this.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=168)** So let's comment out this print statement, all right?
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=171)** So what we're going to do now is create a simple json object to represent each row, and then add it to the result list.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=179)** So on my result, I'm going to append, and I'm going to create a new json object each time through.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=187)** And so my json's going to have a place, and that's going to be the data that's in row index zero, and then the magnitude.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=201)** And that's going to be row index one.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=207)** And then we're going to have the date, and that's in row index two.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=215)** And then finally we have the link which is in row index three, all right?
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=222)** So pretty simple and straightforward, right?
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=225)** So once all of this is finished, we're going to take advantage of the pretty print module, which you can see I've imported up here.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=233)** And we're going to just pretty print out the resulting data as we've read it in, okay?
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=238)** So let's go ahead and run this.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=239)** So let's go back to the terminal, and let's run our code.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=250)** Alright, so now, we can see that all of our data is being read in, okay, here's all the json data, ah, but there's a problem, if you scroll all the way to the top, you'll notice that we processed the headers as if they were a data row.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=269)** Now we don't want to do that, right?
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=271)** We would like to just skip over the first row, but I don't want to hard code that because some data files may not contain headers while others do.
>
> **[4:41](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=281)** So what's the solution in this case?
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=284)** Well, it turns out that the csv module has an object called a sniffer that we can use to detect whether or not a file has headers as the first row, so let's go ahead and close down this terminal.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=300)** So here's how it works.
>
> **[5:02](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=302)** What we're going to do is create a sniffer, and that's going to be a csv sniffer class object, right?
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=314)** Then we need to give it some data to work on to figure out if the file contains headers.
>
> **[5:19](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=319)** So we're going to read in the first 1k of the file, and we're going to call that a sample.
>
> **[5:25](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=325)** So we're going to, well, csvfile.read, and we'll read in the first 1k of the file.
>
> **[5:32](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=332)** And then we have to seek back to the beginning because otherwise the reader's going to start from the position where we last read to.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=340)** So now I can ask the sniffer, if it thinks that the file contains headers, and it uses an internal algorithm to figure this out by examining the data.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=349)** So I can write if sniffer.has_header, and I'll give the sample that we just read in, okay?
>
> **[5:59](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=359)** Now, if the file does have header information, then I just need to skip over the first row, which I can do by using the built-in python function called next, right, which is just reads the next value of any iterator which the reader is.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=375)** So it's going to skip over the first row, so now let's go back and run this code again.
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=380)** All right, so let's go back to the terminal, and let's go ahead and run the code.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=390)** All right, let's make the terminal bigger, and let's skip up to the top.
>
> **[6:36](https://www.linkedin.com/learning/advanced-python-working-with-data/deserialization-of-data?u=76281980&t=396)** And sure enough, this time you can see that the first row containing the header information has been skipped.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), module (4), this. (2), class, (1), pass (1)
> **Tools:** terminal (5)
> **File Paths:** largequakes.csv (2)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (1), go to (1)
> **Code Identifiers:** has_header (1)
> **Env Vars:** csv (1)

#### Challenge: Create a CSV file
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=0)** - Time for another programming challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=7)** All right, for this challenge, we are going to create a CSV file that contains the 40 most significant seismic events contained within our JSON data file, right?
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=20)** So here, let me open up the starting point.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=23)** So here's your challenge.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=24)** You're going to create a CSV file with the following information.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=28)** It's going to have the 40 most significant seismic events ordered by the most recent.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=33)** There's going to be a header row that contains the Magnitude, the Place, the Felt Reports, the Date and a Google Map link which you're going to create.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=45)** And the date should be in the format of the four digit year followed by two digit month and two digit day. Okay?
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=52)** So I'm going to show you the resulting CSV file so you can see what the output is going to look like, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=60)** So here in my finished chapter, I just ran this, my finished code.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=64)** So if we click on this you can see that I've got my header row right?
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=68)** Magnitude, Place, Felt Reports, Date, and the link and it's ordered by significance, okay?
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=76)** And you'll see that there's a Google Map link to where the seismic event happens.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=80)** Let's go ahead and bring one of these up.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=82)** So we have to CTRL+click on it to get it to work.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=85)** And when I do that, you can see that this one happened just near a town called Magna in Utah which apparently is near Salt Lake City.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=96)** So you can see that it has the location right there of the seismic event. Okay?
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=100)** So if we go back and we look at the original data, let's go back. All right?
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=106)** And remember, so let's open up the file.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=112)** So remember that the URL property is not pointing to a Google Map link, okay?
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=119)** So you're going to have to figure out how to make a Google Map link as part of this challenge.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=124)** And also notice that the 40 events in the result here, it's not by Magnitude, okay?
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=130)** It's ordered by the Date column.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=133)** So you can see here's one, it goes from March, right?
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=136)** And you see March 18th.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=138)** Then we've got, you know, March 17th and then the 14th and it's going all the way back down.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=143)** And then the last one is in February of 2020. Okay?
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=147)** So order it by the Date column.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=149)** And remember that you what you want to look at is if we go back to the code for the data that's the significance value right here, okay?
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=158)** So that's the data you're going to want to look at.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=160)** And if you want a hint on how to do this, then stick around for a few seconds and I'll give you a hint. All right?
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=167)** Otherwise, just go ahead and stop the video here and give the challenge a try and I will be back in the next video to discuss my solution. Okay?
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=177)** All right. So do you want the hint?
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=179)** Hey, are you sure you really want the hint?
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=181)** I'm going to give it to you.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=182)** Here's the hint.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=183)** So in order to make the Google Map link, you're going to need to take a look at this page on the Google Maps documentation to figure out how to make a link to a Google Map using Longitude and Latitude, right?
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-data/challenge-create-a-csv-file?u=76281980&t=199)** So now that you have the hint, go ahead, try the challenge and then we'll take a look at my code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2)
> **Env Vars:** csv (3), json (1), ctrl (1), url (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** click on (2)
> **Speakers:** - time (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a CSV file
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=5)** - [Instructor] All right, let's examine the code for my solution.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=8)** Okay, so our task in this challenge was to create a CSV file containing the 40 most significant seismic events in our data file, ordered by most recent date, along with certain columns of data.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=23)** And we had to make a Google Map link.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=24)** All right, so if we look at my solution, remember we had to like find the most significant events, which is not the magnitude, right?
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=33)** We had to look at the sig property.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=35)** So I have a function named getsig, which returns the value of the sig field in the data, or zero if that field is null.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=44)** Then my code uses the sorted function to sort all of the quake data by the significance field from largest down to smallest.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=55)** Now remember, I'm only interested in the top 40 events, so I'm going to use Python's slicing notation here just to get the first 40 of all the almost 12,000 events in the data.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=66)** So that gives me a much smaller data set to work with.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=70)** And because we want the results to be sorted by the most recent, I then resort the remaining 40 items by using the time property of the data structure.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=82)** Okay?
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=83)** So I'm defining an inline lambda function here to just return the value of the time, and then that sorts by time.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=90)** So first, we sort by significance, then we sort by the time.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=93)** So now I have the 40 most significant events, sorted by most recent events first.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=99)** That was first part of the challenge.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=101)** Now I need to create a CSV output file, and write out all the data.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=107)** So I define an array of the column header names, right?
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=111)** That's another part of the challenge.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=113)** And then I have an array to hold the data rows.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=117)** Next, I have a loop which iterates over each item in the sorted list.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=123)** So first, I convert the time property into a date by using the datetime module, and calling the fromtimestamp function.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=132)** And remember, I've got to divide by a thousand because the data inside the JSON is in milliseconds, and this function expects seconds, not milliseconds.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=142)** Then I need to build a Google Map link using the latitude and longitude properties stored in the geometry section of the event data.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=152)** So if we go back and look at the data, you'll see that down here, outside of the actual earthquake data, there's a section called geometry, and it gives me the latitude and the longitude, and they're reversed.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=164)** So this one comes first, then this one.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=168)** So if we go back to the code, we'll see that what I'm doing is I'm getting the latitude and the longitude, and then I'm using this template string right here to create a Google Map link.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=181)** And if you look at the documentation for the Google Maps link, if we scroll down, you'll see that there's a search operation, and this is the URL that you can use to build link with.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=193)** So I do that, I plug in the latitude and the longitude, and I realize that was a bit challenging.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=198)** So if you didn't get that part, don't worry about it.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=200)** So then we built the link, and once I have those values, it's just a matter of inserting the data into the rows.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=208)** So for each row, I append, you know, the magnitude of the place, so on and so forth.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=212)** I do that for each one of the events.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=214)** Once I've got all my data rows, I open up the file, I use the csv.writer object to write out the data, and then I'm done.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=223)** All right, so, that's my code.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-data/solution-create-a-csv-file?u=76281980&t=225)** How does that compare to yours?

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), lambda (1), module (1)
> **Env Vars:** csv (2), json (1), url (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Python Logging

#### Overview of logging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about the logging features available in Python, and why you'd want to use them.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=6)** So logging is an important tool in the development process, and particularly when you're working with data because it enables your code to record events as the program executes for later analysis.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=18)** So, you can think of logging as sort of like the black box of an airplane, right?
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=23)** It's always recording data about how things are functioning, and if something unexpected happens, you can use the log to go back and help diagnose the issue.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=32)** It's not always possible, or feasible, to use a regular debugger to step through your program's code to help analyze and solve problems in real time.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=43)** So for example, the code might be running on a remote server which makes it difficult to debug locally, particularly when you're working with large amounts of data.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=51)** It can be useful to have logs of transactions that can be searched through later on in order to trace down the root causes of problems.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=59)** In addition, some kinds of errors and issues only happen on occasion during the program's lifetime.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=66)** So, logging makes it easy to categorize various events that occur while your program executes, which can help when you're trying to track down the origin of a problem, and even if you don't use logging for debugging, it can provide a useful audit trail of a program's execution for business analysis purposes.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=85)** It's also very straightforward to customize the output format of logging data, so you can record information in as detailed or as simple form as you need.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=95)** You know, logging is a little bit like flossing, right?
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=97)** Like everyone knows they should do it, but not everyone does it as often as they probably should.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-data/overview-of-logging?u=76281980&t=102)** So by the end of this chapter, you'll see how easy logging is in Python, and why you'll never again wonder why you need to use it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Basic logging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=0)** - [Instructor] To use Python's logging features, you need to import the logging module into your app.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=6)** To send information to the log output, there are individual functions for each kind or level of message, and there are five different methods to use for recording log messages.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=18)** There's debug, info, warning, error, and critical.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=24)** Each of these methods corresponds to a particular type of message, which are used to indicate different types of status of the application.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=31)** Debug messages are typically used to provide diagnostic information that's useful when you're trying to track down a problem.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=39)** So information messages are usually used to indicate that a particularly interesting operation was able to complete normally.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=46)** Warning messages indicate something unexpected happened or that a more serious problem might be approaching, such as running out of storage space or the inability to communicate with a remote server.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=58)** Error messages indicate that a particular operation was unable to successfully complete.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=65)** And critical messages indicate that the program has suffered a serious error and might not be able to continue running.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=72)** Now, by default, the logging module only outputs warning messages and greater, but you can configure this using the basicConfig function and setting the level argument to the minimum logging level that you require.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=88)** So let's see how all of this works in real code.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=91)** All right, so here are my code, I've opened up the basiclog_start file, and I'm going to go ahead and add the logging module.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=99)** So let me go ahead and import logging.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=103)** All right, so let's try out the logging functions to output some text to the log.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=109)** So what I'm going to do is I'm going to do logging., I'm going to do debug first, and I'll just write, "This is debug-level message."
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=126)** And then I'll just make a few copies.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=128)** So we'll try out a few more.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=131)** So we'll do info, and we'll do warning, and error, and critical.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=143)** And then we'll just make each of these changes.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=147)** So that's info, that's warning, error.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=161)** All right, so let's go ahead and just save that and let's try this out.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=165)** So let's go into our terminal and we'll go into Ch_4, right?
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=174)** And this is the basic log example.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=176)** So let's go ahead and run basiclog.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=180)** And you can see that right now, the logging messages are being put out to the terminal right here, right?
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=186)** And only the messages for warning, error, and critical were displayed.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=192)** But remember, we can change that by using the basicConfig function to set the default logging level.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=198)** So let's make that change.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=200)** Right here in the code, I'm going to write logging.basicConfig, and I'm going to set the level argument equal to logging.DEBUG.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=216)** Okay, so now let's run the code again.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=221)** And now, you can see that the difference is that all of my messages are being put out, right?
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=225)** So before, I had warning, and error, and critical, and now, debug and info have also been output as well, right?
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=233)** It's worth pointing out, by the way, that this basicConfig function only gets executed once before logging starts.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=241)** So once you start logging, then subsequent calls to basicConfig won't have an effect, all right?
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=247)** So you have to set it one time and then it'll just remember that setting, so on.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=252)** And again, notice that the log output is being sent to the standard output here on the terminal.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=258)** Now, in a production environment, that's obviously not what we would want.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=261)** We would want that log sent to a separate file.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=265)** And again, we can control that with the basicConfig function.
>
> **[4:29](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=269)** So what I'm going to do is add a filename parameter.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=273)** And filename, I'm going to specify the file to log information to.
>
> **[4:37](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=277)** So I'll just simply call that output.log.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=282)** And it's kind of a typical convention to name your log file with .log, all right?
>
> **[4:48](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=288)** So let's go ahead and run this a couple times and then we'll run it again.
>
> **[4:53](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=293)** And you can see here that my little output.log file got created in the sidebar here, all right?
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=299)** So each time the program is run, the log output is appended onto the most recent content of the file, so it continues to grow.
>
> **[5:07](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=307)** But again, you can control that with the basicConfig by specifying a filemode.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=311)** If you don't specify the argument, then the file is opened and appended to by default.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=317)** But if I go ahead and specify filemode, right?
>
> **[5:22](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=322)** I can use filemode="w", and that means that that's going to rewrite the file each time, all right?
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=330)** So here's what I'm going to do, before I run this again, let me go ahead and click on output.log, and you can see it ran several times, right?
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=336)** It's growing each time.
>
> **[5:37](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=337)** So let me close that.
>
> **[5:39](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=339)** And now I've specified filemode as w.
>
> **[5:42](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=342)** And also, let's write a formatted string to the log just to make sure that we see some changes.
>
> **[5:48](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=348)** So I'm going to write logging.info, let me put that down here.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=356)** So I'm going to write logging.info and I'm going to write an f string, "Here's a variable and and integer," why not?
>
> **[6:07](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=367)** Sure. Okay.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=369)** And I'm going to put in some string.
>
> **[6:13](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=373)** Oops, no, it's going to be in here.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=375)** I'll have some variable is equals "string", and y=10.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=385)** And we'll put in x and we'll put in y.
>
> **[6:31](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=391)** All right.
>
> **[6:32](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=392)** Okay, so now we've got the filemode set to rewrite each time.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=397)** So let's go ahead and close the terminal.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=400)** And, oh, actually, I need the terminal to run it.
>
> **[6:46](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=406)** So let's go ahead and run.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=410)** Okay, so we ran it.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=412)** And now you can see that the content was rewritten, right?
>
> **[6:55](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=415)** And here's my variables inserted into the string, right?
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=419)** So the, the content is now going to be, each time I run this, it's going to be entirely replaced.
>
> **[7:03](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=423)** Okay, now you might be looking at this log file and thinking that the information here is pretty basic.
>
> **[7:09](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=429)** And you know what?
>
> **[7:10](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=430)** It kind of is.
>
> **[7:11](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=431)** You might want to have information, such as timestamps, and filenames, and other custom data in your log messages.
>
> **[7:17](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=437)** Now the logging module has you covered.
>
> **[7:20](https://www.linkedin.com/learning/advanced-python-working-with-data/basic-logging?u=76281980&t=440)** And we'll take a look at customizing the logging features in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), module (4), function (4), continue (1), default, (1)
> **Code Identifiers:** basicconfig (7), basiclog_start (1)
> **Warnings:** warning (7)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (5)
> **UI Navigation:** in the sidebar (1), click on (1)
> **Analogies:** such as (2)
> **Env Vars:** debug (1)

#### Custom logging
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=0)** - [Instructor] The Python logging module is very flexible, and it makes it easy to customize the message output depending on your needs and this way, you're not stuck with a single message format.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=10)** So the basic config function takes two arguments.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=13)** There's format and there's date format.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=17)** The format argument specifies a string that controls the precise formatting of the output message that is sent to the log, and the date format argument is used in conjunction with the format argument.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=28)** So if the format argument contains a date specifier, then the date format argument is used to format the date string using the same kind of date formatting strings that you would pass to say the strftime function.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=41)** The table that I'm showing you here, lists some of the formatting tokens you can use in the format argument.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=49)** Now, this is not an exhaustive list, okay?
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=52)** But I've included the most common ones that you're likely to use, and they're pretty self-explanatory.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=56)** So for example, the top one there, the asctime token is a human readable time format, the filename and funcName tokens are for the file, and function names where the log message originated and so on.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=69)** So let's switch over to our editor, and try some of these out.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=73)** Right here in my code space, I'm going to open up custom log start.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=77)** And you can see I've already got some code in here that's specifying an output file, and a logging level of debug.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=85)** And I've got a couple of logging calls already.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=88)** So if we just run what we have right now, let's go ahead and try that.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=97)** And I'm going to run customlog, right?
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=100)** So when I run that, you can see, sure enough, the output log shows up.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=104)** And let's go ahead and click on it.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=107)** So you can see that this is the output format that we've seen so far, right?
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=110)** There's the logging level, and then there's this root keyword that's from the root program, and then my custom messages, okay?
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=117)** So let's define a custom format.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=120)** So I'm going to go back to my code.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=123)** So what I'm going to do is I'm going to define a format string, all right?
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=131)** So I'll write fmtstr is equal to, and I'm going to put in percent asctime, s, and then a colon, and then I'm going to put another one in here called percent, levelname, s, another colon;
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=155)** and then I'm going to put in percent, and then funcName followed by an S, and then Line colon, and then a percent, and then inside parenthesis I'm going to put lineno with a d, that's going to be an integer.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=176)** And then finally a percent with a message and followed by an s, okay?
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=183)** So this is going to put out a custom format.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=186)** So it's going to show the date and time, the logging level, the function where it was called from the line number, and whatever message I'm supplying.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=192)** And now I need to specify this in my call to basic config.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=197)** So I'll put in format equals fmtstr.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=206)** All right, so now let's run our updated code.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=209)** So I'll run this again, okay?
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=213)** And let's go ahead and look at our log.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=217)** So here's the original information that we put in the first time, but now, right?
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=222)** The log output has the date and time, it's got the logging level, right?
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=226)** It has my module, the line number in the code where the message was called from.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=232)** And by the way, it says module because I don't have a function that I'm calling it from.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=235)** It's just the top level code, and then the message.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=239)** So let's get a little bit fancier.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=241)** I'm going to add another function to my code.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=243)** Let's go back and do that.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=246)** So I'm going to define another function, and it's not going to really do anything except log.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=254)** So I'll write logging.debug.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=258)** "This is debug level log message."
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=267)** So I'm also going to define a date formatting string because I don't like this date format right here.
>
> **[4:33](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=273)** All right, I'm going to format it a different way.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=275)** So let me add that.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=279)** I'm going to call it datestr, and I'm going to set that to percent month with a slash, and then percent today, and then a slash and percent capital Y for year, and then a space.
>
> **[4:56](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=296)** And then I'm going to do percent capital I slash, percent capital M slash, percent capital S.
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=304)** Actually not use, let's not use slashes.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=305)** Let's use colons for this one, right?
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=310)** And then a space, and then a percent P for AM, PM.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=315)** And then I need to add this to my basic config call.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=318)** So that is going to be, date format is going to be datestr.
>
> **[5:29](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=329)** And then I need to call my new function.
>
> **[5:31](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=331)** So I'll just simply call another function down here to make sure that it executes.
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=336)** All right, so now let's run this updated program, smaller, so we see it.
>
> **[5:42](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=342)** Alright, so now we have our formatting date string, right?
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=345)** We're calling another function.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=346)** That function is doing some logging output.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=349)** Let's try this again.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=351)** Let's go back to the log file.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=353)** And so now you can see that the date formatting is different.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=356)** Here's what it looked like before I changed it.
>
> **[5:59](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=359)** Here's my new date format, right?
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=360)** It's got AM and PM.
>
> **[6:01](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=361)** It's got, you know, the month, day, and year.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=364)** And it has different information, so here I'm calling it from the top level module at line 20.
>
> **[6:08](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=368)** You can see that this debug message was called from my another function at line number seven.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=375)** So now I've got much more detailed information in my output log.
>
> **[6:20](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=380)** So there's one more thing I want to show.
>
> **[6:21](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=381)** And that's how to embed custom data into the log message.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=385)** So suppose my program had access to information such as the current username or their IP address, and I wanted that data to be part of the log message.
>
> **[6:35](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=395)** So each one of the logging functions takes a parameter named extra.
>
> **[6:41](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=401)** Let's close the log here.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=403)** Now that extra parameter can be set to a dictionary object that contains key value pairs to be included in the output.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=412)** So once again, I'll make another variable, and I'm going to call that extdata.
>
> **[6:57](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=417)** And I'm just going to make this a dictionary, right?
>
> **[6:59](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=419)** And I'm going to, I'm going to have user, and this could have come from anywhere, right?
>
> **[7:03](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=423)** And I'm going to have the user be, you know me, joemorini@[example.com](https://example.com), all right?
>
> **[7:13](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=433)** So now I'm going to modify my format string to include a placeholder for this data.
>
> **[7:19](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=439)** I'm just going to put that right at the front here.
>
> **[7:21](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=441)** It's going to say User colon, and then I need you to put in percent, user,
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=452)** and so this parameter right here needs to match the key of the dictionary, right?
>
> **[7:38](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=458)** So I can have this dictionary have a lot of different values, and then I just have to embed those values in my format string right here.
>
> **[7:44](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=464)** And then now I need to add the extra parameter to each of my login calls.
>
> **[7:49](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=469)** So for example, I'm going to put in comma, extdata, oh no, I'm sorry, extra equals, and that's going to be extdata.
>
> **[8:00](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=480)** So I'll put that in here, copy that, paste that, and we'll put it into my function up here.
>
> **[8:13](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=493)** Alright, so now I've got my extra data going in.
>
> **[8:17](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=497)** And one more time, actually, let's delete the existing logs so that we start from scratch.
>
> **[8:21](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=501)** So let's go ahead and run this again.
>
> **[8:25](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=505)** Right, there's my log.
>
> **[8:27](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=507)** And now, you can see I've got my custom data being embedded in my logging output.
>
> **[8:31](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=511)** So that should give you a sense of how powerful and useful the python logging module is.
>
> **[8:37](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=517)** And once you start using it, you'll start to think yourself, why have I not been using since the entire time?
>
> **[8:42](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=522)** And it's really particularly useful when you're working with large amounts of data because you know you can log out specific parts of data at different times and dates, you can tag it certain ways, so you can easily search the log later.
>
> **[8:54](https://www.linkedin.com/learning/advanced-python-working-with-data/custom-logging?u=76281980&t=534)** It's just really useful when working with data, so if you're not already using the logging feature, you should really strongly consider using it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (13), module (5), from. (2), pass (1)
> **CLI Commands:** make (3), python (2)
> **Analogies:** for example (2), such as (1)
> **Code Identifiers:** funcname (2)
> **Cross-References:** go back to (2)
> **URLs:** [example.com](https://example.com) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=0)** - [Joe] Well, that brings us to the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=3)** Congratulations on completing the course, and I hope you enjoyed learning about Python's built-in functions and features for working with data.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=11)** We've only just scratched the surface of what this great language can do when it comes to data processing, however, so I hope you take some time to explore some of the other great courses here in the library that cover this rapidly growing area of computing.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=24)** I hope to see you again in another one of my courses soon.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-data/next-steps?u=76281980&t=27)** Until then, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-working-with-data-4312001/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Management

## Path Context

### In [[Master Your Python Skills]]
← [[Advanced Python- Classes and Functions]] | **3 of 11** | [[Python Data Structures- Stacks, Deques, and Queues]] →

### In [[Master Python for Data Science]]
← [[Python Statistics Essential Training]] | **2 of 8** | [[Advanced Python- Working with Databases]] →

## Appears In

- [[Master Your Python Skills]]
- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Data Management
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)