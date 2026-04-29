---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: django-essential-training-25094632
url: "https://www.linkedin.com/learning/django-essential-training-25094632"
level: Intermediate
updated: 12/16/2024
learners: 2830
skills:
  - Python (Programming Language)
  - Django
exercise_files: true
github: "https://github.com/LinkedInLearning/django-esst-2894047/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFTuPPdaSLTcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733262351081?e=2147483647&amp;v=beta&amp;t=XLe1gkFdRncIi5ol51Ol3-FzcGdvmqaoleeCVU3tSCA"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a Django Developer]]'
next_courses:
  - '[[Django- Forms]]'
path_nav: '[{"path":"Become a Django Developer","position":1,"total":4,"prev":null,"next":"Django- Forms"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/python-programming-language
  - skill/django
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Django%20Essential%20Training.md)

![Django Essential Training](https://media.licdn.com/dms/image/v2/D4E0DAQFTuPPdaSLTcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733262351081?e=2147483647&amp;v=beta&amp;t=XLe1gkFdRncIi5ol51Ol3-FzcGdvmqaoleeCVU3tSCA)

# Django Essential Training

> Django is a robust and powerful framework with a lot of moving parts. Django is one of the most robust and useful frameworks out there. With Python's popularity increasing and new features being released (such as extensive async support), Django will likely increase even more its presence at many top-quality companies. Although starting a new project can be quite easy, there is a lot to uncover. T

> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632) | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Starting Your Django Project]]** (4 videos)
- **[[#2. Django Built-In User Management]]** (3 videos)
- **[[#3. How Django Interacts with Databases]]** (6 videos)
- **[[#4. Building Dynamic Webpages]]** (6 videos)
- **[[#5. Building Robust Front-Ends in Django]]** (5 videos)
- **[[#6. Django Forms: Validation Shouldn’t Be Hard]]** (5 videos)
- **[[#7. Working with Existing Data]]** (4 videos)
- **[[#8. Using Django to Store and Display User-Specific Data]]** (5 videos)
- **[[#9. Login, Logout, and Signup Are Simple]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is Django?
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=0)** - [Instructor] Who doesn't want to build applications super fast with a great structure and simple framework?
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=6)** We also need phenomenal security and user authentication built in to make sure we have a reliable system.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=12)** One of the best frameworks for doing this is Django.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=16)** Django is an open source framework for building web apps quickly and with very little code.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=22)** In this course, we'll cover the essentials and we'll build a working application from start to finish.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=30)** We go through signup, login, creation and deletion of content, the whole flow.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=35)** I'm Leticia Portella.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=36)** I'm an oceanographer that fell in love with programming and after teaching myself how to program, I've been working as a software engineer for many years.
>
> **[0:45](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=45)** Join me in this LinkedIn Learning course as we dive into Django and start building your first application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** super (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### What you need to start a Django project
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=0)** - [Leticia] There are a few things you need to get the most out of this course.
>
> **[0:04](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=4)** You will need a Python 3.8 virtualenv, and you must install Django 3.2, but should also work with later versions of Django.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=13)** This is a simple install.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=15)** You'll just install Django and you'll get the latest version.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=18)** We also need an editor.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=20)** I'll use VS Code, and a browser, I'll use Chrome, but feel free to choose the tools you think are best for you.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=28)** You might want to have at least some familiarity with HTTP and an idea of its methods.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=34)** This will help you have a solid foundation and understand everything even better.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=40)** And finally, we're going to host our exercises on GitHub, so you can check it out.
>
> **[0:45](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=45)** If you need a refresher on any of this, check out some courses here in the library.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3)
> **Code Keywords:** finally, (1), this, (1)
> **Versions:** python 3 (1), 3.2 (1)
> **Tools:** vs code (1), github (1)
> **CLI Commands:** python (1)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Speakers:** - [leticia] (1)

#### Utilizing the Django documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=0)** - [Instructor] Django has one of my favorite features a framework can have, it has an extensive and impressive documentation.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=8)** Django was created within a newspaper, so from the get go, their documentation was a major focus of its developers.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=15)** It has been known for having one of the best documentations for a framework out there.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=20)** And an important part of working with Django is getting yourself familiarized with it and knowing how to leverage all its potential in your favor.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=30)** One of the most important skills we can develop while programming is getting the information you need to complete a task.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=37)** That's why we designed some challenges that will stimulate you to go beyond what we learn in the classes.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=44)** The idea is that you put that nice brain to work and really try to get the answers by using the resources available in the Django documentation.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=52)** If you can't figure it out, don't worry, we have videos where I'll solve the challenges, but I highly recommend you to try to find the answers even after you know where it should be, and read what's written in there.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=65)** It might sound silly, but getting yourself familiarized with the way the docs frame the answers will be extremely beneficial to you and your career.
>
> **[1:15](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=75)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Documentation:** the docs (1)
> **Speakers:** - [instructor] (1)

#### Using Codespaces in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=0)** - [Instructor] You can choose where you want to do this course, but one cool feature we have available now is that you can do our entire course in your browser using GitHub Codespaces.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=11)** To do that, you can access the link of the course on GitHub.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=16)** Then you can come here, click on Code, then you can come to this plus button and create a new codespace online.
>
> **[0:26](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=26)** Okay, so it may take a little while, but GitHub will open a new tab on your browser and create the environment for you.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=35)** If you're familiar with, you'll see that it looks very much like the VS Code workspace that you can install in your own computer, but everything is online and accessed through your browser.
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=48)** You can see here that the files are on the left side, and in the center, will be able to edit the files, and down below, we have a terminal we can access the machine.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=61)** Let's make sure our environment is installed correctly.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=64)** If we type python --version, we'll see here that we have Python installed with version 3.10.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=74)** We can also use pip freeze to see which packages are installed.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=80)** In my case here, you can see that I don't have Django installed, so I can use pip to install it.
>
> **[1:26](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=86)** So pip install Django.
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=90)** Okay, we can see that we successfully install Django 5.1, which is the latest version I have available.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=98)** Awesome.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=99)** We're all ready to start, and you can do this in Codespaces or your computer, but you are ready to go.

> [!info]- Semantic Content
>
> **CLI Commands:** pip (3), python (2), make (1)
> **Tools:** github (3), vs code (1), terminal (1)
> **Prerequisites:** install (4)
> **Code Keywords:** while, (1), let (1)
> **Versions:** version 3 (1), 5.1 (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Starting Your Django Project

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating a new Django project
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=0)** - [Instructor] With Django, we can have a whole project working in a matter of minutes.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=5)** We can start our project by using a Django command called django-admin, and then a sub-command, startproject, then the name of our project, smartnotes, and then . to indicate we want to create the project in this folder.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=24)** Okay, so this command creates two things, a manage.py file and a folder called smartnotes, the same name we gave our project.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=36)** The manage.py file will be the entry point of your project.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=40)** With it, you'll be able to run your project server, manually work with the database, and much more.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=47)** If you look inside the smartnotes folder, you'll notice that all the files here are related to the configuration of your project.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=57)** The two main files you'll use here are the urls.py file, where you're going to configure, well, the URLs of your project, and the settings.py.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=69)** Let's take a quick look into the settings.py.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=73)** You can see here that there is a lot of global variables being defined.
>
> **[1:18](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=78)** For instance, the DEBUG = True here tells Django that we are working in a development environment.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=85)** Because we're in this safe development environment, it can return much more information when something goes wrong than it would in a production environment.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=96)** You don't really have to understand everything it has right now.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=99)** We'll get to it eventually.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=101)** The only thing you need to know is that this is where you have the base of your project.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=107)** As magic as this sounds, you already have everything you need to run your project.
>
> **[1:53](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=113)** You can use python, then the file manage.py, and the command runserver to create a server using the default configurations we have right here.
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=127)** We can see here that there is some warnings in red, but you don't have to worry about it for now.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=132)** You can also see that we're using Django version 3.2, and that the configuration file being used is the smartnotes.settings.
>
> **[2:22](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=142)** This means that this server is using this settings.py inside the smartnotes folder as the basis of it.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=152)** You can also see that it gives a link to a webpage hosted in the port 8000 of your localhost.
>
> **[2:39](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=159)** This means that your project is up and running on your computer, and you can access it by using your browser.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=166)** Let's click here and see what happens.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=169)** Yes, you can see here that it'll open a webpage with the default layout.
>
> **[2:55](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=175)** This means that you have successfully created and ran your first Django project.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=180)** Congratulations!

> [!info]- Semantic Content
>
> **File Paths:** manage.py (3), settings.py (3), urls.py (1)
> **Definitions:** means that (3), is a  (1)
> **Code Keywords:** let (2)
> **CLI Commands:** python (1)
> **Ports:** port 8000 (1)
> **Env Vars:** debug (1)
> **Versions:** version 3 (1)
> **Analogies:** for instance (1)

#### The model view template
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=0)** - [Instructor] When dealing with big software projects, we need to make sure we are not creating a mess.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=6)** The way we do this is to compartmentalize our project into smaller sections that have clear boundaries from day one.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=14)** That's why Django created the concept of apps.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=18)** Let's create one to understand it better.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=21)** We'll use again the Django admin command to create a new app called home.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=27)** (keyboard clacks) You can see now that we have two folders, smart notes, which is our settings folder and Home, which is the Django app we just created.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=39)** Every time we create an app, we need to add it to the settings file so that it knows that that folder is part of the project we are running.
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=48)** Let's open the settings.py file and add the name of our app in the installed apps variable.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=57)** In order to make things a bit more organized, I always leave a small comment separating this app created by us from those that were already installed by default.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=70)** Okay.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=72)** Now that we have our project started, our app configured, it's time to create our first view.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=79)** Let's go to the home, then go to the views file and write our first function.
>
> **[1:26](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=86)** As you can see, this is a pre-configured file.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=89)** So we need to create our functions here.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=93)** Let's import from django.http import HttpResponse.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=101)** We can delete this, and, now, we create def home.
>
> **[1:46](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=106)** It receives a request, and it return an HTTP response with a simple message, "Hello, world".
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=118)** As you can see, this function is saying that every time it receives a request, it will return a response with the text "Hello, world".
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=127)** Okay, but how does it know when to send requests to this function?
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=131)** Well, that's why we have the urls.py file.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=135)** We can go back now to the smart notes, urls.py, and import this file there so we can have access to this function.
>
> **[2:25](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=145)** So from home, let's import views, and, now, here, inside the URLs patterns, we're going to add a new path.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=155)** Let's call it home, and let's say views.home.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=161)** Okay, so let's run our server again and see what happens if we go to the local host 8000.
>
> **[2:50](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=170)** Yeah, so now, instead of that beautiful page we had, because we have something implemented and not just the default configuration, we start to receive a 404, which makes sense because we never implemented anything here.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=186)** However, because we have the debug equals true on the settings file, Django will list the endpoints that this project has available, and guess who is there?
>
> **[3:17](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=197)** Yes, our home endpoint we just created.
>
> **[3:21](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=201)** Now, if we go to local host home, we can see that we have the "Hello, world," being displayed, amazing, right?
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=211)** Let's take a moment here to understand what's happening.
>
> **[3:34](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=214)** When a person goes to the home endpoint, they're making a request to that path.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=221)** Django will go to the urls.py file to see if it's ready to receive a request at this path, since it is, it will go to the views file.
>
> **[3:52](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=232)** Finally arriving to the function we defines.
>
> **[3:55](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=235)** Since the function received a request, it can then respond with a message, "Hello, world".
>
> **[4:03](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=243)** Django uses a common pattern as the way of structuring its project called Model View Template Framework or MVT.
>
> **[4:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=252)** Views are responsible for handling requests and responses.
>
> **[4:17](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=257)** In this video, you have learned that views can be as simple as functions and can respond with something as simple as pure text.
>
> **[4:26](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=266)** There are yet two additional layers for us to get familiarized with, right?
>
> **[4:32](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=272)** This additional layers will allow us to increase our project's complexity while being simple tools to work with.
>
> **[4:39](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=279)** The model Layer handles the data and how it's stored, and we'll see more about it in Chapter 3.
>
> **[4:47](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=287)** The template layer allow us to render the information coming from the database into lovely HTML pages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), default. (1), delete (1), this, (1)
> **UI Navigation:** go to (5), open the (1)
> **File Paths:** urls.py (3), settings.py (1)
> **Env Vars:** http (1), mvt (1), html (1)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Minimum working page
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=0)** - [Instructor] Okay, it's time to learn how to return HTML pages by using the amazing Django template language.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=8)** Let's start by creating a folder called templates inside our app folder.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=14)** And inside this folder, we'll also create another folder with the same name as our app, so let's call it home.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=22)** This might seem weird, but it will allow us to quickly identify where a template is located, even if we don't know in which app we are on.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=32)** This is a typical organization pattern for Django templates.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=37)** Inside this folder, let's create a file called welcome.html.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=43)** And inside it, we're going to add a basic HTML page.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=50)** So, an html tag.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=52)** Let's add a header with a title.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=56)** So, SmartNotes.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=59)** And then a body with just one, Welcome to SmartNotes.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=72)** Okay, so now we can go back to the views file and change our base function.
>
> **[1:18](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=78)** Instead of using the HttpResponse, we'll use the function render from the Django shortcuts that's already imported here.
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=88)** To use this function, we need to pass three parameters, the original request, the name of the template, and empty brackets.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=103)** I know there is a warning here in the terminal that sounds a bit scary, but don't worry, this is normal and we'll get to it later.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=111)** Let's save this file and check the home endpoint again.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=116)** And voila, our beautiful HTML is now being rendered.
>
> **[2:01](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=121)** You might be wondering why we left the empty brackets behind, right?
>
> **[2:06](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=126)** Although we are writing an HTML page, Django is actually using a template framework to create the final HTML page that we see in the browser.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=137)** We can use the brackets at the end of the function as a way of passing down information from the view to the template.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=146)** So let's import the datetime module and pass today's date into the dictionary with a key called today, datetime.today.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=161)** We can then modify our template to receive a variable called today by defining it between double brackets.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=171)** Today is {{today}}.
>
> **[2:56](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=176)** Let's save it and try it again.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=180)** There it is.
>
> **[3:02](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=182)** This is why we're not using pure HTML, but actually a backend framework for defining templates called Django template language, or DTL.
>
> **[3:14](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=194)** The HTML file we wrote will pass through the DTL mechanism and it'll insert the variables passed on the dictionary of the render function down to the template.
>
> **[3:26](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=206)** This looks simple now, but DTL allow us to use sophisticated programming logic for creating dynamic HTML pages with very little effort.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (5), pass (3), module (1)
> **Env Vars:** html (8), dtl (3)
> **Exercise Files:** template (8)
> **Definitions:** is a  (2)
> **File Paths:** welcome.html (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Warnings:** warning (1)

#### Creating your first Django template
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=0)** - [Instructor] Earlier, we talked why apps are a good way to organize our project.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=5)** Let's take a minute to understand a bit more why this type of modularization is such an important concept.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=13)** As you've seen, an app is a small library that is contained inside your Django project.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=20)** We can have as many apps as we want.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=23)** However, as the project grows, if we don't take care of it, things can start to get messy, and things will fly between the apps.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=32)** That's why we need to understand what we need to do to make good Django apps.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=38)** Good software projects should be well modularized, and your Django project should be no different.
>
> **[0:45](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=45)** That's why each app should be self-contained, which means that everything you need for that app should live inside it.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=54)** That's why we created the photo template inside it.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=59)** The ideal app is one where you can delete the folder and do nothing else, the Django project just continue to work perfectly.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=69)** So far, we're almost there, but there's still one thing that we need to do to clean things up.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=76)** When we created our first endpoint, we had to import the views file from home into the urls file in the smartnotes folder.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=87)** This creates a dependency that wouldn't allow us to quickly delete the home app.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=92)** Let's make things a bit more organized.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=96)** Okay, so first thing is to create another urls file inside the home app.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=103)** In here, we're going to create a file very similar to the one we have on the smartnotes app.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=120)** And let's add the same endpoint that we had in the previous file, views.home using the home function.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=132)** Okay, so now comes the fun part.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=135)** In the smartnotes, let's get the urls file.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=140)** We can delete the dependencies that we implemented here.
>
> **[2:24](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=144)** And now, from the django.urls, we're also going to import the include function.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=152)** Now, what we need to do is add an import path, but instead of using a function, we're going to use the include function here to pass that file as a string.
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=165)** So path, let's leave it open for now, and then let's include the home.urls file.
>
> **[2:55](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=175)** Let's save this.
>
> **[2:57](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=177)** And if we go back to the browser.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=181)** Yes, as you can see here, nothing changed, except the fact that now, if we delete the whole app, this won't give any errors, because the app is not being imported on this smartnotes urls file.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=198)** There, with just a couple of tweaks, we eliminated a dependency, and your project is following good standards of Django applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (4), function (4), self (1), else, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 2. Django Built-In User Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Django admin: Easily visualizing and creating data
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=0)** - [Instructor] Even though Django is typically known for the easy in which we can create endpoints, one of the most powerful features is the Django Admin Interface.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=11)** It provides an interface so that site administrators, like you and me, can easily view and manipulate data.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=18)** Let's check out how that works.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=21)** Are you wondering what you need to get it?
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=23)** Nothing.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=24)** The system comes by default.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=27)** When you open the localhost 8000, you can see that, besides the home endpoint we created, the admin/ endpoint is also available.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=38)** Let's open it.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=42)** As you can see, this is a login interface, but what now?
>
> **[0:46](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=46)** We didn't create any authentication system, right?
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=49)** Wrong.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=50)** Django has the entire authentication system ready to go.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=54)** The only thing we need to do is to make sure our database is properly configured.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=61)** Let's go back, and, remember, when we had this red message while running the runserver?
>
> **[1:08](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=68)** This message is letting us know that our project has some database changes that weren't applied yet.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=76)** The way Django knows if the database is behind the system changes is through a couple of files called Migrations.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=84)** Migrations explain what kind of changes a database need to perform, such as create a new table, establish a new relationship, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=94)** Django already has the migrations for the authentication system ready, so what you need to do is apply them to the database, and we do this by using the command migrate that will actually change the database.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=108)** So what we can do now is run the command migrate.
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=114)** Okay.
>
> **[1:55](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=115)** You can see here that the changes made are all regarding the admin and the auth apps.
>
> **[2:02](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=122)** We don't see these apps because they come from Django by default, but they are there and they're ready to be used.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=131)** You shouldn't worry too much about migrations now, we'll learn a lot about them in future classes.
>
> **[2:18](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=138)** Since now our database is up to speed with Django, what we need is to create a superuser that will have all the powers that it can in this Django project.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=149)** We do this by running the command createsuperuser.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=155)** It's pretty straightforward.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=157)** Let's make the username admin, I'm going to leave the email address empty, and then add admin as a password.
>
> **[2:47](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=167)** As you can see, Django already has a couple of checks to guarantee we are creating secure passwords.
>
> **[2:55](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=175)** You can bypass it for now, as I will, just because this is happening while we are developing this project locally.
>
> **[3:02](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=182)** Never bypass it in production environments.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=184)** Security must always be your number one priority, and Django is here to help you.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=192)** Okay, now we can go back to the localhost 8000 admin.
>
> **[3:16](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=196)** Well, first, let's run the server again.
>
> **[3:20](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=200)** Okay.
>
> **[3:20](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=200)** Now we can go back to the admin interface.
>
> **[3:24](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=204)** admin, admin, Log in.
>
> **[3:29](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=209)** And there you go.
>
> **[3:32](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=212)** Now you have full access to the Django Admin Interface.
>
> **[3:36](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=216)** And as you can see, we don't have any red messages now while we run the runserver, because our database is completely up to speed with the project.
>
> **[3:47](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=227)** There you go.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (5), default. (1), default, (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Migrations: Making database changes easy
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=0)** - [Instructor] The Django admin interface allow us to quickly and easily access data that exists in the database.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=7)** This means that Users and Groups, you can see here, are actually tables in our database.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=14)** If we open the Users table, we can see that we already have one record.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=19)** The admin user we created using the createsuperuser command.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=24)** This is the one you're logged with right now.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=28)** The interface also allow us to quickly filter the data by some of the characteristics of users.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=34)** We can search for a user by staff status, superuser status, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=40)** You can also search by a characteristic on the search bar here.
>
> **[0:46](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=46)** Let's create a new user, shall we?
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=48)** We have to go here on Add User, then add a username, and let's add a password, admin, admin, Save.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=59)** As you can see here, we can't bypass the password check on the interface, so we actually need a really good password here.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=69)** And let's click Save.
>
> **[1:11](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=71)** Perfect. Now we have the user created.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=74)** As you can see, to create a user, we just need the username and password, but there is more to it, such as personal information, permissions, et cetera.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=85)** All this complex authentication user was created by Django by default, we just need to use it.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=93)** One thing that I would like you to notice is that the password is encrypted, and that's why you're seeing a bunch of random characters here.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=101)** By using Django's authentication system, you are also guaranteeing that your system is correctly and safely storing passwords.
>
> **[1:50](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=110)** If we go back to the list of users, you can see now that we have the user we created.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=116)** We can also select it and delete the selected user.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=123)** As you are deleting data, Django prompts a second screen with the data you're deleting, so you can confirm that you want to perform this action.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=131)** So let's click Yes, I'm sure.
>
> **[2:14](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=134)** And there, we successfully deleted that user.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=139)** If we go back to the homepage, we can also see that the interface lists the actions we made in the system, such as the creation and deletion of a user.
>
> **[2:30](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=150)** As you can see, the admin interface is a nice and safe space to directly access data in the database.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=157)** If your system doesn't require inputs from users, like a blog for instance, you can use this interface to create all the data you want and use the views to display it.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=169)** It's simple and powerful.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (4), default, (1), delete (1), require (1)
> **Analogies:** such as (2), for instance (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### User authentication in two simple steps
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=0)** - [Instructor] So far, you've learned that Django comes with a powerful authentication system already ready to be used.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=7)** Now let's learn how to use it.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=10)** First, let's go back to our home app and create a second template.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=16)** Let's call it authorized.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=20)** And in here, let's create a simple HTML that has a title, you are in a restricted area.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=31)** Now we can go back to the views file and create a very similar function to home.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=37)** But this time we're going to display the authorized template, def authorized request.
>
> **[0:46](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=46)** Then it's going to return render request.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=51)** Now, let's add the home/authorized.html and empty square brackets.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=60)** Yeah, so now we have exactly the same thing, and here comes the wonderful Django simplicity.
>
> **[1:07](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=67)** In here, let's import from django.contrib.auth.decorators.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=76)** Let's import login_required.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=79)** So now we can add this function as a decorator to our authorized function.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=85)** That's it, that's all we need to do to block the access of this webpage if a user is not logged in.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=92)** To finalize, let's go to the urls.py and add this as a path.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=98)** So let's call it authorized.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=103)** And views.authorized.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=107)** Now we can go back and try to access the authorized endpoint.
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=114)** There you go, we can see the template we created.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=118)** This is only possible because we're logged in via the Django admin interface.
>
> **[2:04](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=124)** If we go back to the admin and log out.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=130)** And try to re-access the authorized area, you see here that we get a 404, meaning that this page was not found.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=140)** Why is that?
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=141)** Because we're not logged in.
>
> **[2:23](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=143)** The complex authentication system just required a single line of code.
>
> **[2:28](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=148)** However, a 404 is really not a nice flow.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=152)** We want the user to know that they need to be logged in to access this page.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=157)** The ideal flow is that we redirect them to the login page.
>
> **[2:42](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=162)** To do this, we need to go back to the views file and add a perimeter called login_url.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=169)** And let's pass this as slash admin.
>
> **[2:53](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=173)** If we go back and try to access it again.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=178)** And there it is.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=180)** Since we are not locked in, Django understand that it needs to redirect me to the login URL, which for now was defined as the admin endpoint.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=189)** How amazingly simple was to add authentication to this endpoint?

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (3), interface (1), this, (1), pass (1)
> **Cross-References:** go back to (4)
> **Exercise Files:** template (3)
> **File Paths:** home/authorized.html (1), urls.py (1)
> **Code Identifiers:** login_required (1), login_url (1)
> **Env Vars:** html (1), url (1)
> **UI Navigation:** go to (1)
> **Definitions:** defined as (1)


### 3. How Django Interacts with Databases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to ORMs
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=0)** - [Instructor] So far, you've gotten familiarized with the user models, which were completely defined by Django.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=6)** Now, it's time to understand how to create your own models and how the structure of creating models work.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=14)** Django uses an object-relational mapping system or ORM to handle database communication and changes.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=22)** What you need is to write class models that will then be transformed by migrations into database tables.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=30)** Each class, known as a model, is a database table, and each class attribute is a column.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=38)** The way we transform a model into a database table is by the creation of migrations.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=44)** Migrations will have the step-by-step transformation that a database must do to apply the changes made in the code.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=52)** You've seen that we use the command Migrate to apply migrations to a database.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=57)** Similarly, we can use the command MakeMigrations to create migrations based on the current code.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=64)** The process of using a class, defining a model, creating a migration, and applying the migration and the changes to the database is the ORM's job, and Django's ORM is known for being one of the best ORMs for Python and SQL databases.

> [!info]- Semantic Content
>
> **Env Vars:** orm (3), sql (1)
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** class, (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Creating your first model
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=0)** - [Instructor] It is time for us to learn how to create a new model using Django ORM.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=5)** Let's create a new app specifically for our notes.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=9)** So django-admin start app notes.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=14)** Okay, remember now we have to go to the settings and make sure that our new app is added in the INSTALLED_APPS variable.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=23)** Okay, now we can go back to this new app and open the models.py file.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=30)** Here is the file where we can create the models that we'll use in this app.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=35)** So let's create a new class called Notes that we'll inherit from models.Model.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=42)** This way, Django knows that this is a model that will have effect on the database, et cetera.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=49)** It's time for us to think what attributes we want in our note.
>
> **[0:53](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=53)** Well, first we can add a title.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=56)** A title is a short text, so we can use the type CharField, which is a limited text field.
>
> **[1:03](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=63)** CharField has a parameter called max_length, and we should set it to a value.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=69)** Let's say 200.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=72)** This means that our title can't be over 200 characters.
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=77)** We also need the note itself.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=79)** And the note shouldn't have a limit.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=82)** So instead of using CharField, we can use the type TextField.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=87)** As you can see, TextField doesn't require a max length, differently from CharField.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=93)** We also want to know when this note was created.
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=95)** So we can add a field call created that is going to be a DateTimeField.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=102)** Because we don't really want to worry about this field being correctly populated, we can add a perimeter called auto_now_add equals to True.
>
> **[1:52](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=112)** This means that every time a note is created, this field will be correctly populated with the time that this note was created.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=120)** So we don't really have to worry about it.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=123)** There, our notes model is done.
>
> **[2:06](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=126)** Every note we create will have at least a title, a text, and a date.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=132)** Amazing.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=133)** So what do we need to do now?
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=135)** I hope you guessed it right, we need to create migrations.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=139)** Luckily, this is super easy to do.
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=141)** Let's type python manage.py makemigrations.
>
> **[2:28](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=148)** Let's see what happened here.
>
> **[2:30](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=150)** There is a new folder called migrations, and inside of it, there's a new file called 001_intial.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=157)** Every first migration of an app will be named like this.
>
> **[2:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=162)** If you open this, you can see that this is just a list of operations that instructs the database what needs to be done.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=171)** So far, we haven't changed anything in the database.
>
> **[2:54](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=174)** We just created the set of instructions.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=178)** So everything continues as it is.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=181)** What we need to do now is apply the migrations so we can run python manage.py migrate, and we're done.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=190)** The changes were applied to the database and we have a shiny new table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), require (1), super (1), this. (1), this, (1)
> **Definitions:** is a  (4), means that (2)
> **File Paths:** manage.py (2), models.py (1)
> **CLI Commands:** python (2), make (1)
> **Code Identifiers:** max_length (1), auto_now_add (1)
> **Env Vars:** orm (1), installed_apps (1)
> **UI Navigation:** go to (1), open the (1)
> **Cross-References:** go back to (1)

#### Using admin for data creation and manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=0)** - [Instructor] We've already created a table for notes, but if you're curious enough to go to the Django admin interface, you'll notice that nothing really changed.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=9)** Why is that?
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=10)** The same way we didn't have to create the user model, it was just there, we didn't have to configure it to appear on the Django interface.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=18)** When we are creating a new model, we need to do it ourselves.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=23)** So, let's go back to the notes app and open a file called admin.py.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=28)** This is where we're going to add which models can be displayed, and thus modified, via the Django admin interface.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=37)** First, let's create a class and call it NotesAdmin.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=42)** This class should inherit from admin.ModelAdmin.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=49)** Let's add pass here because we don't want any additional configuration on this admin model.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=57)** Now, what we need to do is import from this folder, let's import models, and on the bottom of the file, we're going to register that that model is attached to this admin model.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=72)** So, let's write admin.site.register, then models.Notes, and NotesAdmin.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=82)** Okay, that's it.
>
> **[1:23](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=83)** Let's go back to the admin and refresh it.
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=88)** There you go.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=89)** Now we can see that the notes model is available on the admin interface.
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=95)** Let's use the add button here to create a new note.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=99)** Let's title My first Note, and then Django is so Amazing!
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=108)** Let's save this.
>
> **[1:50](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=110)** Okay, we have our first note created.
>
> **[1:53](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=113)** One thing that isn't really nice is that it is listed as this Notes object 1.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=120)** This is fine for now, but if we have a long list of notes, how can we tell which one is which?
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=127)** Let's go back to the admin class.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=130)** Instead of pass here, we can pass list display, which is going to be a tuple.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=137)** And let's pass title here.
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=141)** Let's save this.
>
> **[2:23](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=143)** It restarted.
>
> **[2:25](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=145)** And now if we refresh here, there, instead of having this ugly name, we have the title of the note being displayed here.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=155)** The default configuration of admin also allows that all fields can be changed by all users.
>
> **[2:42](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=162)** However, we can edit the admin model class and start adding some specialized logic.
>
> **[2:48](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=168)** We can remove some fields from being edited.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=171)** We can allow only staff users to write notes.
>
> **[2:54](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=174)** There's a lot we can do.
>
> **[2:55](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=175)** The sky's the limit.
>
> **[2:57](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=177)** Django admin is highly configurable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), interface (4), pass (4), this. (2), class. (1)
> **Cross-References:** go back to (3)
> **File Paths:** admin.py (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Using Django shell for creating and querying data
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=0)** - [Instructor] We've already learned how to do things via Django admin, but it's time to learn how to handle models through code.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=7)** Django has a tool we can use to check the content of a database, which will make our lives so much easier, the Django shell.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=16)** Let's go to the terminal and type python manage.py shell.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=23)** You can see here that we have a Python interpreter.
>
> **[0:26](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=26)** However, this is no ordinary interpreter.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=30)** It is already tightly coupled with our project.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=33)** For instance, we can type from notes.models import notes, which is the model we just created, and with this, we can use it to query the objects in the database.
>
> **[0:46](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=46)** Let's try to get the first note.
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=48)** Mynote Notes.objects.get(pk='1').
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=58)** There, we have our note.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=61)** Notes.objects is the main way of accessing data from the note table in the database.
>
> **[1:07](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=67)** The .get method will search for one object, which the pk, private, key is equal to one and returns that object.
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=77)** Now, we can use it to access attributes of the model by simply typing mynote.title or mynote.text.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=87)** We can also query for all objects in the database by using the method .all. instead of the .get, Notes.objects.all.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=99)** There you go, we only have one note so far.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=102)** The return of this function is a query set, which is a very useful tool, but you can think of it as a list with superpowers.
>
> **[1:53](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=113)** We can also create a new note via the comment line.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=116)** Let's try it out, new_note, Notes.objects.create, then title="A second note", and then text="This is a second note".
>
> **[2:18](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=138)** There, the note was added to the database.
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=141)** If we query it again, you can see now that we have two objects being returned.
>
> **[2:27](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=147)** If you prefer, you can open the admin interface and check it out.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=152)** We can also filter notes that we want.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=155)** For instance, we can query for notes that have titles starting with the word my, Notes.objects.filter, where the title__startswith the word My.
>
> **[2:53](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=173)** Yeah, the filter also returns a query set, which, in this case, returns the first object.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=180)** We can also search by something that exists inside the notes.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=184)** For instance, we can try to find text that contains the word Django.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=190)** So we type Notes.objects.filter text__icontains
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=199)** the word Django.
>
> **[3:22](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=202)** There you go.
>
> **[3:23](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=203)** Only the first object has the word Django in the text.
>
> **[3:27](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=207)** We can also query for the opposite.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=210)** We can actually filter notes by excluding them.
>
> **[3:34](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=214)** So let's do the opposite, Notes.objects.exclude, notes that the text contains the word Django.
>
> **[3:47](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=227)** You can see now that the filter is returning the second note instead of the first.
>
> **[3:52](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=232)** The fun part is that query sets can also be filtered, meaning that we can add multiple filters at once.
>
> **[4:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=240)** For instance, we can filter all the notes containing the word Django, but the title doesn't say anything about Django.
>
> **[4:09](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=249)** Right, text__contains the word Django, but exclude the ones where the title contains the word Django.
>
> **[4:22](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=262)** There you go.
>
> **[4:24](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=264)** As you can probably imagine, we can go on and on here with thousands of examples on how to query data.
>
> **[4:31](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=271)** Django ORM has a very neat interface that is very intuitive and yet highly powerful.
>
> **[4:38](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=278)** I highly encourage you to try more queries by yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), this, (1), private (1), function (1)
> **Analogies:** for instance (4), think of it as (1), imagine (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Code Identifiers:** new_note (1), title__startswith (1), text__icontains (1), text__contains (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), open the (1)
> **File Paths:** manage.py (1)
> **Env Vars:** orm (1)

#### </> Code challenge: Adding likes to notes
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=5)** - [Instructor] In this chapter, you'll learn how to create a new model and update your database for the schema you defined in your model.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=13)** However, as you've seen, we can never know everything we'll need in advance, so we're going to add a new feature to our notes model.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=21)** The challenge is to add a new field to the notes model where you can store the number of likes a specific note have.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=30)** Once you do that, you should change the database to be able to store this new parameter.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=35)** To solve this challenge, you'll need a couple of things.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=38)** You'll need to add a new field to the model class notes.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=42)** You'll also need to figure out which type of field you should add so you can store the number of likes.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=49)** You're also going to need to figure out how to populate notes that already exist because this is a new field, and we already have notes that have no likes.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=60)** Finally, you need to figure out how to apply those changes to the database so we can actually store the number of likes.
>
> **[1:07](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=67)** I hope you enjoy this challenge, and remember that documentation is your best friend.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=72)** Try your best to figure out the answers before you move on to the next video where we'll have the solution.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=79)** Good luck.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Code Keywords:** finally, (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Adding likes to notes
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=0)** - [Instructor] We want to add a new field in the notes model to represent the number of likes a note gets.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=12)** If we check the documentation, we can see that one option would be to use an IntegerField.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=18)** They're supposed to represent an integer number, so all seems good, right?
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=22)** However, if we take a deeper look into our options and think about what we want, we can notice that it doesn't make sense to have such a large number available for us.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=33)** An IntegerField can vary from this really low number to this really high number.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=40)** This means that every new entry to the database will be huge in number of bytes used, even if that number is only one.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=49)** We also don't care for negative numbers, as we don't want to support negative numbers of likes.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=55)** So instead, we could use a PositiveSmallIntegerField.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=60)** This means that values can range from 0 to about 32000.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=65)** 32,000 likes seems like a good enough number for now.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=69)** It'll also restrict our database size, and because the field is marked as positive, we don't need to add any extra validation if we are reaching a negative number, that's all wins.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=81)** We also want that all notes start with the value of zero, right?
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=85)** And we can see that in the docs, all the fields have options we can add.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=91)** If we look for it, we can see that every field type can receive a default value.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=96)** Now we can easily add the numbers of likes to our models.
>
> **[1:40](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=100)** Let's go back to the code.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=102)** So in the Notes class, we're going to add number of likes.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=107)** This is going to be a PositiveSmallIntegerField with a default of zero.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=116)** However, this doesn't mean anything to our database.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=120)** We need to tell the database what it needs to do.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=123)** If you remember the second class of this chapter, you'll remember that you will need to do a migration.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=130)** This is to create a set of instructions to actually change the database.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=135)** The command is exactly the same as the one we used before.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=139)** python manage.py makemigrations.
>
> **[2:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=144)** Okay. We have a new migration.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=146)** We can see here that Django will create a second migration starting with the number 0002.
>
> **[2:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=154)** If we open the migration, we can see that this is a set of instructions.
>
> **[2:39](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=159)** It has a dependency, which is our initial migration when we created the notes model, it has an operation, which is adding a new field that has the name likes, and is a PositiveSmallIntegerField with a default value.
>
> **[2:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=174)** However, as you know, this is just a recipe.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=178)** The database remains unaltered until we actually apply the migration.
>
> **[3:03](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=183)** So let's do that.
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=185)** python manage.py migrate.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=190)** There you go.
>
> **[3:11](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=191)** Now you know how to change an existing model and apply this changes to the database.
>
> **[3:16](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=196)** As always, Django has an extensive documentation about migrations that I highly recommend you to go through and get yourself familiarized with.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (2)
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** let (2), class, (1)
> **File Paths:** manage.py (2)
> **Documentation:** the documentation (1), the docs (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 4. Building Dynamic Webpages

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating a dynamic template
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=0)** - [Instructor] Now that we have our notes, how about we learn how to display them?
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=5)** Let's create a new view the same way we created the other one.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=9)** So notes, views.py file, and let's start with importing the models and import notes.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=21)** Okay, now let's create a function call list that receives a request and then a variable, all_notes that stores all the notes that we have in our database.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=38)** Now, let's return the render function again, request a template that we're going to create a little bit later, notes/notes_list.html.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=51)** And now the brackets with notes are equal to all_notes.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=59)** This is not much different from what we did in the other view, except for one thing, we are querying for all notes and sending them to the template.
>
> **[1:08](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=68)** This way, when the template is rendered, all the information coming directly from the database will be available.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=76)** Before we jump to the template, let's organize URLs.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=80)** So let's create a new URLs file here and that's going to have the same format.
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=88)** So from django.urls import path.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=93)** Then let's import the views here, and then the urlpatterns that has a list.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=105)** Then here, the path, our endpoint's going to call notes because that's the list of notes.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=111)** Then views.list, which is the function we just created.
>
> **[1:55](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=115)** Amazing.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=116)** The last thing is that we have to add this on the urls.py file on smart notes.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=123)** So let's add comma here, then path.
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=127)** Let's add smart here, and then include notes.urls.
>
> **[2:16](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=136)** Amazing.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=137)** By doing this, all the URLs that we are adding on notes.urls will be added after the smart.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=146)** So smart's going to be a part of that endpoint.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=149)** This is a really nice way of organizing our project.
>
> **[2:33](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=153)** Okay, almost there.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=155)** Now we need to create the template folder.
>
> **[2:38](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=158)** So notes, new folder, templates, then a new folder, notes, and now we can add our template.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=169)** Notes_list.html.
>
> **[2:52](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=172)** Okay, now we can create our template.
>
> **[2:56](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=176)** So let's start by html and h1, these are the notes.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=184)** And I will start to use the powers of DTL.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=187)** Bear with me just a little bit.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=189)** So let's start with ul, and then curly brackets, two percentages, and in the middle, for note in notes.
>
> **[3:21](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=201)** Okay, so in here we're going to add a line item, {{note.title}} close the curly brackets, and now we need to do curly brackets, percentage, percentage, and in the middle it's going to have an endfor.
>
> **[3:40](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=220)** Okay, what's happening here?
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=222)** Everything that is between curly brackets is the django template language logic.
>
> **[3:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=229)** Here, we're opening a list tag, ul, and then saying that for each note we receive in the template, DTL should create a list item, the li.
>
> **[4:03](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=243)** Notice that commands such as the loop happen between curly brackets and percentages, while things that should be rendered by the template are between double brackets.
>
> **[4:15](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=255)** So let's save this, then run this, runserver and open it.
>
> **[4:25](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=265)** Okay, now we can see that we have a smart here.
>
> **[4:31](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=271)** Then let's try this smart.
>
> **[4:34](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=274)** We're going to have the notes and here are the notes.
>
> **[4:41](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=281)** There it is, a webpage that is dynamically getting data from the database and adding it to the HTML.
>
> **[4:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=289)** If we right click here and inspect the page, we'll see here that we actually have two line items.
>
> **[5:01](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=301)** That's because we have only two nodes on the database.
>
> **[5:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=305)** If we had many more, many more would be created.
>
> **[5:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=309)** How easy was that?
>
> **[5:10](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=310)** I encourage you now to go and create more notes, either via the shell or the admin and see what happens here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (3), this, (3)
> **Exercise Files:** template (10)
> **File Paths:** views.py (1), notes/notes_list.html (1), urls.py (1), notes_list.html (1)
> **Code Identifiers:** all_notes (2), notes_list (1)
> **Env Vars:** dtl (2), html (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Creating your first Django dynamic webpage
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=0)** - [Instructor] Now that we have a list of notes, how about we create a way to visualize details of a particular note?
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=8)** Let's go back to the notes app, views.py, and let's create a new function here.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=15)** Now, this function should receive a second parameter called pk for private key.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=22)** So let's go def detail(request, pk), okay.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=32)** Now, we can use this pk to go in the database and get that particular note.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=38)** So note = Notes.objects.get(pk=pk).
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=47)** Okay, and the common response, return render the request.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=54)** Let's keep the pattern here, so notes/notes_detail.html, and then let's pass note inside the brackets.
>
> **[1:06](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=66)** Okay, now, what we need to do is create the template.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=70)** So let's go back here.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=72)** New file, notes_detail.html, and let's create a simple html that has the title as note.title as an h1,
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=90)** and then let's go a text here, note.text, and there you go.
>
> **[1:37](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=97)** Okay, so there's one thing still missing, which is the URL.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=103)** This needs to be a slightly different URL, because we need to be able to pass down the second parameter to that function.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=111)** So let's do this by adding a new path here.
>
> **[1:57](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=117)** So we're going to have notes then slash, the minor and greater sign, and pk, great, and, now, the views.detail.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=131)** Okay, so what we're telling here is that this URL will receive a new value named pk that will be an integral number.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=140)** Now, the only thing left to do is start the run server again (keyboard clacks) and test this out.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=152)** So here, we have the notes, and if we pass now the pk for our first note, we can see the template displaying the details of the first note.
>
> **[2:44](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=164)** Okay, so this works fine, but we still have a problem.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=169)** The get method that we're using to get the note from the database will actually throw an error if you pass down a private key that doesn't exist.
>
> **[2:59](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=179)** So if we tried the same URL but with, I dunno, 11 or something, unless you have created 11 notes, this will raise an error.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=189)** So let's try it out.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=192)** Notice here that this is returning an exception of the type does not exist.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=198)** We can also see here that there is a message with the exception saying, "Notes matching query does not exist."
>
> **[3:27](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=207)** Django has an amazing traceback for us to understand where exactly the error happened.
>
> **[3:34](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=214)** You can see right here that the problem is started in line 11 on the notes views.py file, which is exactly where we defined the query.
>
> **[3:45](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=225)** We only have this paging explaining the error again because we continue to have the debug equals true in the settings file.
>
> **[3:53](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=233)** In a production environment, the user would see a 500 error, which means an internal error.
>
> **[4:01](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=241)** When an object is not found, the correct response is a 404 status code saying that that object does not exist.
>
> **[4:11](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=251)** So let's change our code to make sure that we get the correct status code.
>
> **[4:16](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=256)** Let's go back to the views file, and in here, let's import from django.http.
>
> **[4:26](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=266)** Let's import Http404, okay?
>
> **[4:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=272)** And, now, we can wrap this query in a try and except block, so try and except.
>
> **[4:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=282)** If the Notes.DoesNotExist equals true, we're going to raise an Http404 with the message "Note doesn't exist."
>
> **[5:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=300)** Okay, so if you go back now to the previous link and refresh, we're going to see here that this page is now returning a 404 with a message that we defined.
>
> **[5:13](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=313)** This is a much nicer flow than the error we had before, because we're controlling the message to the user.
>
> **[5:21](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=321)** If you can, we can actually create another template specifically for a 404 and return it with a nice message.
>
> **[5:30](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=330)** It is completely up to you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (4), function (3), private (2), raise (2)
> **File Paths:** views.py (2), notes/notes_detail.html (1), notes_detail.html (1)
> **Env Vars:** url (4)
> **Exercise Files:** template (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** notes_detail (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)

#### How can Django can list data with just some small changes
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=0)** - [Instructor] So far, you've learned how to create views using functions.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=5)** However, Django has a couple more features that we can leverage to get things even simpler.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=13)** Welcome to Class-Based Views.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=16)** Most views have similar patterns, and reinventing the wheel is something nobody really wants.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=23)** Class-based views are extensive classes that implement typical view behavior and you just need to override a few things to make it do what you want.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=36)** This will allow us to avoid the boring work and focus on the things that are unique to our project.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=43)** Let's go back to our code and change our views that are function-based to the ones that are class-based and see in detail how class-based views work.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=56)** The first view we made was in the home app, so let's go back and change it.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=64)** The only thing we need to do here is display a template.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=69)** So we can do that by using the class-based view template view class.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=74)** So let's in here import from django.views.generic.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=81)** import TemplateView.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=84)** Okay, so now we can create a new class called HomeView that inherits from TemplateView.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=93)** And the only thing we need to pass here is the template name.
>
> **[1:37](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=97)** So we can copy here and paste it here.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=103)** And that's it.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=105)** We still need one more thing because our template requires some extra information.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=109)** So we can add a variable called extra_context and now pass this dictionary here in it.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=120)** We can delete this now. Oops, it's missing something.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=123)** Okay, so now we can delete this function here.
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=127)** And we have our first class-based views.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=132)** The last thing missing is that we need to change the way the URLs are defined.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=137)** So let's go to the URLs and in here, instead of passing the home function, we're going to pass the home view class.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=146)** And we need to call a method called as_view.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=152)** You can see here now that the server is working just fine, so we can go back here and it's still working.
>
> **[2:43](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=163)** So we can quickly do the same with the second function here, the authorized view.
>
> **[2:48](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=168)** So let's create a class called AuthorizedView that also inherits from TemplateView.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=178)** Then the template_name, we're going to have this here.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=186)** Oops, there's an extra space here. Okay.
>
> **[3:11](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=191)** Okay.
>
> **[3:11](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=191)** Because we don't have the extra attributes required here, we can just not pass the extra content.
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=199)** Okay, but we're still missing authentication.
>
> **[3:22](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=202)** How do we handle authentication on class-based views?
>
> **[3:26](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=206)** Well, to do that, we're going to need a mixing class.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=210)** Mixings are helper classes that can be used along with other classes to provide additional features.
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=218)** For this case, we'll use the login required mix in.
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=222)** So let's go back here and we can remove this now and use the from django.contrib.auth.mixins.
>
> **[3:52](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=232)** We can import LoginRequiredMixin.
>
> **[3:57](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=237)** The only thing we need to do here now is make sure that this class, which is a mixin, is added before the template view.
>
> **[4:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=247)** Okay, the last thing missing is the login URL.
>
> **[4:11](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=251)** So we can actually go here, add the login_url, that's still pass the admin, and that's it.
>
> **[4:20](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=260)** So we can remove this now, fix the URLs to be AuthorizedView.as_view, and that's it.
>
> **[4:34](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=274)** As you can see here, things are quite nice and well organized.
>
> **[4:39](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=279)** And you also don't have to remember the request is coming in and out of the function.
>
> **[4:44](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=284)** Class-based views might not seem like the amazing features they are, but that's because we are still handling simple views.
>
> **[4:52](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=292)** As the views increase in complexity, they become more and more amazing allies.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (5), pass (5), class. (3), delete (2)
> **Code Identifiers:** as_view (2), extra_context (1), template_name (1), login_url (1)
> **Exercise Files:** template (5)
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Introduction to Django class-based views: A few classes have the power to change the world
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=0)** - [Instructor] We worked with templates, but now it's time for more complex views.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=5)** Let's start with our last endpoint.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=8)** On the notes, let's go to views.py file.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=12)** And in here, let's import from Django.views.generic import ListView.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=21)** Okay, now we can start our class-based view.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=24)** Let's go to create a class.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=27)** So let's call it NotesListView that inherits from ListView.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=33)** And we need to add here which model we're listing objects from.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=39)** So let's add here Model = Notes. Okay.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=43)** And because our template is expecting to receive a list called Notes, we should also add here that the context object name is different from the default.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=57)** The default is objects, but we call it notes.
>
> **[1:02](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=62)** That's it, that's our whole endpoint.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=65)** The only thing we need to do now is change the endpoint URL.
>
> **[1:08](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=68)** So let's go back here, then change list to NotesListView.as view, and that's it.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=80)** We can go back here and also delete our old endpoint.
>
> **[1:23](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=83)** We don't need it anymore.
>
> **[1:26](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=86)** Okay, it restarted, so let's try it out.
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=90)** Instead of homes, we're going to go to smart notes.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=94)** There you go.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=96)** You may be thinking, "What's happening here? Where is the query?"
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=99)** The list view is already making the query for us.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=103)** We also don't need to define a template name because we created a template name that follows the standard of that class-based view.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=111)** But if we add a different name, it might not work.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=116)** So instead we can pass here an attribute called template name.
>
> **[2:01](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=121)** You guessed it correctly.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=123)** So we can say here, notes notes_list.html.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=131)** Yeah, that's all we have to do for the list endpoint.
>
> **[2:16](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=136)** Now we can go to the detail view.
>
> **[2:18](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=138)** Can you guess what we need?
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=140)** Not much else, just import here DetailView.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=146)** And then let's create the class.
>
> **[2:31](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=151)** So class NotesDetailView that inherits from DetailView.
>
> **[2:38](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=158)** Here we need model = Notes and context_object_name = to note.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=169)** And that's it.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=171)** Wait, just that?
>
> **[2:52](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=172)** You might be thinking like, "What about the exception we throw when the object can't be found?"
>
> **[2:57](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=177)** There's no need.
>
> **[2:59](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=179)** The detail class-based view already take care of that for us.
>
> **[3:03](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=183)** There is no need for us to handle any of that complexity.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=187)** Let's change URL and give it a try.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=190)** So in here, let's change detail for NotesDetailView.as_view.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=198)** Let's go back then .1 and it works.
>
> **[3:24](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=204)** And if we go to something that doesn't exist, yep, it's still returning a 404.
>
> **[3:32](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=212)** Hopefully at this point you can already see how class-based views are an amazing feature of Django and we've only scratched the surface.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=221)** There are very few case scenarios where you will prefer to create a function-based view as the ones you just replaced.
>
> **[3:49](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=229)** In the vast majority of cases, a class-based view will be the ideal tool for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), class. (2), from. (1), default. (1), delete (1)
> **UI Navigation:** go to (5)
> **Exercise Files:** template (4)
> **Code Identifiers:** notes_list (1), context_object_name (1), as_view (1)
> **File Paths:** views.py (1), notes_list.html (1)
> **Env Vars:** url (2)
> **Speakers:** - [instructor] (1)

#### </> Code challenge: Showing just popular notes
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=0)** - [Instructor] In this chapter, you've learned a little bit about class-based views and how powerful they are.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=12)** Class-based views are pretty straightforward when we need something simple, but they can be a bit more challenging when you need to alter them.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=20)** So let's try to get you a bit more familiarized with it.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=24)** You learned how to list all notes.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=27)** Now we want to create a second list view where we only want to display the notes that are popular, this is that have more than one like.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=38)** Let's call it popular notes list view.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=42)** To do that, you're going to need first to understand how a ListView retrieves data from our model.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=50)** Second, you need to alter the QuerySet from the basic one listing everything to listen just what we want.
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=58)** This is a new filter.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=60)** And third, you need to change how to query for notes that have more than one like, so how to actually implement that future.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=69)** Although you can use the main documentation from Django, for class-based views, I particularly like the website [ccbv.co](https://ccbv.co).uk.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=79)** So Classy Class-Based Views.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=82)** As I said before, do spend some time trying to do this on your own and checking the class-based views and how they work together, and only then come back for the solution when you're ready, okay?

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **URLs:** [ccbv.co](https://ccbv.co) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Showing just popular notes
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=0)** - [Instructor] As I said, for class-based views, my go-to tool is the CCBV website, even more than the Django docs.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=13)** We can go to the website and dig into ListView.
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=17)** I highly recommend you to take a look and get yourself familiarized with the kind of attributes and methods that this class-based view uses.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=24)** They're pretty recurrent in all the class-based views.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=28)** We can see here that there is an attribute called queryset.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=32)** If we take a look at the methods, we can see that there is a method called get_queryset.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=38)** There's a lot going on here, but as you can see, if there is a queryset defined in the class, this is if queryset is not none, the class will use it as a base for everything else.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=51)** So what we can do here is leverage the attribute.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=55)** Let's go back to the code.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=57)** Let's copy the ListView into a new class called PopularNotesListView.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=65)** And we're going to pass a queryset to it.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=69)** Okay, so what we're going to do is Notes.objects, and if we pass all here, it will be the same as not having anything because that's the default for Django.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=79)** But what we need here is a filter.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=82)** Okay, so how do we actually filter here?
>
> **[1:26](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=86)** Let's go back to the Django docs.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=89)** In the Django docs, we have this page called Making queries, and if you take a look at it, we can see some practical examples.
>
> **[1:37](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=97)** For instance, all of the functions in a filter are added to the field name with an __ between them.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=107)** So for instance, we can check for __exact, or in, or greater than.
>
> **[1:55](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=115)** This is exactly what we need.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=118)** So let's finish our queryset.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=120)** What we need here is to have likes to be __gte=1.
>
> **[2:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=129)** Done.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=130)** Now this view will only return notes that have one like or more.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=135)** Querysets are a huge, powerful tool.
>
> **[2:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=138)** The documentation on how they work and what kind of options you have is quite extensive, and you can line up several querysets to get even more powerful results.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=149)** I would highly recommend you to take a read on the docs and get some ideas and examples in your head.
>
> **[2:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=154)** Have a nice reading.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), class, (1), else. (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (1), the docs (1)
> **Analogies:** for instance (2)
> **Code Identifiers:** get_queryset (1)
> **Env Vars:** ccbv (1)
> **UI Navigation:** go to (1)


### 5. Building Robust Front-Ends in Django

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Static files in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=0)** - [Instructor] It is time to think about our project's front end.
>
> **[0:03](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=3)** Our templates are too simple with just ATML on them, so let's add some colors!
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=10)** The first thing we need to do is create a folder where we're going to store all the static files, such as the CSS and JavaScript files, images, videos, et cetera.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=22)** So let's go here, and create new folder, static.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=28)** Now we need to tell Django that this is the folder it needs to look into when searching for static files.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=35)** To do that, let's go to the smartnotes, then settings.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=39)** Then in here, we can scroll down a little bit, and we're going to see here that there is a static URL already.
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=48)** Now we're also going to add static files, underline, dirs.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=54)** This should be a list.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=56)** And in here we're going to say, base dir, slash, static, which will lead Django to the folder we just created.
>
> **[1:06](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=66)** Okay, now we can go back to the static, and create a new folder just for the CSS files, and one CSS file.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=76)** Let's call it style dot CSS.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=79)** Okay, so in here we can create a simple CSS file.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=82)** Let's create a class called, note-li, color equals red.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=89)** Really simple.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=91)** What we need to do now is make sure that our template, and Django per se, recognizes this file.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=98)** So let's go to the notes, and let's try the notes list file.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=103)** Okay, in here, the first thing we need to do is actually tell Django that this HTML is going to use the static files.
>
> **[1:53](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=113)** So let's go curly brackets, percentages, and load static.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=120)** Okay, now what we need here is to add a CSS file as we would in any HTML file.
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=127)** So let's create a head, then a link.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=133)** So the rel is going to be stylesheet.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=139)** The type is going to be text, CSS, and on the href, we're going to use the Django template language to add our URL.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=152)** So let's call static, then CSS style dot CSS.
>
> **[2:40](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=160)** That's it.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=161)** That's all we need to do to have the CSS being rendered on this file.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=166)** So let's go here on the LE, and add the class, which is going to be our class name, note dot LE, and let's save it.
>
> **[2:57](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=177)** Okay?
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=178)** Let's try it out.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=180)** I'm going to refresh this.
>
> **[3:02](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=182)** And there you go.
>
> **[3:03](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=183)** Now the notes are red because the CSS is being rendered and used in this file.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=189)** If we open the inspector here, we can see here that the head is appearing.
>
> **[3:16](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=196)** We have the href here being correctly rendered, and then each note here has the class that has the attribute of color red.
>
> **[3:29](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=209)** If you hover this href, you'll notice that this is actually a link.
>
> **[3:33](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=213)** So let's go here.
>
> **[3:36](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=216)** Let's copy this, and then we can replace it here.
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=222)** And there you go.
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=222)** As you can see here, this is the file we just created.
>
> **[3:46](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=226)** So actually, Django is locating the file, and loading it automatically into the templates.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=234)** There you go.
>
> **[3:55](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=235)** Now you can use CSS in all your templates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), static (10), class, (1), this. (1), this, (1)
> **Env Vars:** css (12), url (2), html (2), atml (1)
> **UI Navigation:** go to (2), scroll down (1), open the (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### An HTML skeleton: How to set up a base structure to every Django template
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=0)** - [Instructor] As we've seen, it's pretty easy to add CSS files into Django template, but it would be quite exhaustive to need to always remember to add the CSS link to all templates we have in all our apps.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=14)** If you're thinking that there must be a better way of doing this, you're absolutely right.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=20)** What we need now is a base template.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=23)** Let's create a templates folder in the static folder and a base.html template in it.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=32)** Okay, so in here, we can create a normal HTML file, so html, then head, then in here, we can have link (keyboard clacks) type's going to be text/css, then href, it's going to be the same loading of a static file that we had, css/style.css, okay?
>
> **[1:03](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=63)** Now, we have to remember to load static on the top of the file, load static, and, now, we can create a body, perfect.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=72)** Now, what we need to do here is add the following command, so curly brackets and percentage block content, and then, similarly, we're going to do another one, but, now, it's endblock.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=89)** Okay, so I call this content, but you can call it whatever you like.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=93)** The important thing here is to know that this is a block area where we can inject things.
>
> **[1:40](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=100)** Let's try it out.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=101)** Let's go back to the notes and open the notes list template.
>
> **[1:46](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=106)** So in here, what we can do is extends "base.html".
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=114)** Now, what we can do is get rid of all this basic HTML stuff here and use this block content here.
>
> **[2:04](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=124)** So block content, and in here, we can endblock.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=132)** Okay, so what we're doing here, we're taking only the important part of our template and wrapping it on the block content command so this can be injected on the base template.
>
> **[2:24](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=144)** Let's try it out.
>
> **[2:27](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=147)** Okay, so we have a problem here.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=149)** The template is showing as non-existent.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=152)** What happens here?
>
> **[2:34](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=154)** So you can see here where Django was trying to search for a base HTML template.
>
> **[2:40](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=160)** So you can see that it tried in multiple places, including the two templates folder in home and notes app, but as you can see, the static folder templates is not being looked for.
>
> **[2:55](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=175)** So what we need to do is tell Django where to look for.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=178)** So let's go back.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=180)** Then in here, let's go to settings file, and down below, we're going to find out that there is a templates, and there is a list of directories that we can add here.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=192)** So similar to what we did on the static files, we're going to add that particular folder in here.
>
> **[3:20](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=200)** So let's do BASE_DIR, and then slash, and then static/templates, okay?
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=210)** So it reloaded.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=211)** Let's try it again, and there you go.
>
> **[3:35](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=215)** So let's take a minute to understand what's going on here.
>
> **[3:39](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=219)** What's happening here is that with this syntax, we can define the basics of our HTML in our base.html template, and then we create each webpage as a separate template that extends the base.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=234)** So we will build each template separately and just the small parts, but we'll then inject it to the base template where we can have all our default configurations, such as the CSS files and the JavaScripts.
>
> **[4:09](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=249)** This will allow us to keep each webpage template as simple as we can while keeping all the configuration in a single place.
>
> **[4:18](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=258)** That's another power of the Django template language.
>
> **[4:23](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=263)** Now that you know exactly how to use a base template, I encourage you to go back and try it out in all the templates we have so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (7), extends (2), for. (2), this, (1)
> **Exercise Files:** template (15)
> **Env Vars:** html (4), css (3), base_dir (1)
> **File Paths:** base.html (3), css/style.css (1)
> **Definitions:** is a  (4)
> **UI Navigation:** open the (1), go to (1)
> **Analogies:** similar to (1), such as (1)
> **Best Practices:** remember to (2)

#### It's time to add some style
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=0)** - [Instructor] Okay so instead of defining all of the CSS, we want to speed up our front end a little bit.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=5)** So let's use a CSS framework.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=8)** We're going to use bootstrap for now.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=10)** So what we need to do is on the static, base.tml, I'm going to change this CSS we just created with the link to the bootstrap framework version five.
>
> **[0:25](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=25)** So we can go back, delete this line and that's it.
>
> **[0:29](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=29)** I know it's a pretty big link so you can find it on the notes of this class.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=33)** Okay, once we define this, we can start using it.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=38)** So the first thing we can do here is on top of the block content, let's add a div.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=50)** And then on this div, let's add a class equals to my five, text center and container.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=64)** Okay, so now we can go to the home page and check the changes that the bootstraps already made.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=70)** So let's go here.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=73)** You can see here now that the style's a little bit better.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=76)** We have more spacing, the text is in center, et cetera.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=80)** So let's add a button on the homepage that will lead us to the list of notes.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=87)** So let's go to home, welcome, perfect.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=92)** Here, we can add, so it's going to be an A, href.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=98)** Let's leave it empty for now.
>
> **[1:40](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=100)** Then in here, we're going to use two classes, BTN for button and BTN primary for the style.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=108)** Then check out these smart notes.
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=114)** Okay, so if we go back, we can see now that we have a button, but it doesn't do anything.
>
> **[2:01](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=121)** So how do we deal with links here?
>
> **[2:04](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=124)** We could hard code the link to our local host, but imagine that when we deploy our website, we need to remember to come back and change everything.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=132)** Not so good.
>
> **[2:14](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=134)** Thankfully, the Django template language has a function for that.
>
> **[2:18](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=138)** What we need to do is the following.
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=141)** Let's open curly brackets and percentage and then use URL.
>
> **[2:27](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=147)** And then in here, we're going to say notes.list.
>
> **[2:33](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=153)** Okay you might be wondering, okay, how Django knows which endpoint to link.
>
> **[2:38](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=158)** It doesn't, and we need to tell it.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=161)** So let's go back to notes URLs.
>
> **[2:44](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=164)** And in here, what we're going to do is add a name.
>
> **[2:50](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=170)** So we can give a name, notes.list.
>
> **[2:57](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=177)** That's all we need for Django to define each endpoint we are pointing to, no matter if you're on local host or production.
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=185)** Let's test it out. Let's click here, and there you go.
>
> **[3:11](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=191)** We're being redirected to this template that also needs some styling.
>
> **[3:15](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=195)** We'll get there.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=198)** So let's go back to this page and try to style it up a little bit.
>
> **[3:23](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=203)** So let's go to notes list.
>
> **[3:25](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=205)** And in here, we need a couple of things.
>
> **[3:28](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=208)** So first, we can add some vertical styling here.
>
> **[3:32](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=212)** So we're going to use my five here, okay?
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=218)** And let's use a couple of divs here to have some cards.
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=222)** So bear with me just a little longer.
>
> **[3:45](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=225)** So in here, instead of the UL, we're going to use a div, and this div's going to have class is equal row.
>
> **[3:56](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=236)** Row cols3 and g-2, then we're going to have another div here, and this div is going to have a class equals to call.
>
> **[4:11](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=251)** Okay, and finally we're going to have another div that is going to have a class=p-3 border.
>
> **[4:25](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=265)** Okay.
>
> **[4:26](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=266)** So this here is going to be a row, and we're going to have each card to be a column.
>
> **[4:33](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=273)** So what we can do here now is say that for note in notes, we're going to have in here, let's add a title.
>
> **[4:45](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=285)** So it's going to have here, note.title, and then let's end the four here.
>
> **[4:59](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=299)** And let's leave it for now like this so we can remove this.
>
> **[5:03](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=303)** Okay, let's check it out. Amazing.
>
> **[5:07](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=307)** This would look a little bit better if we could display some of the text of a note, but not all of it.
>
> **[5:14](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=314)** We can use the truncate charts function to do this.
>
> **[5:18](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=318)** Let's try it out.
>
> **[5:19](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=319)** So in here, let's add note.text, and then with the pipe truncate chars, let's just leave it at 10.
>
> **[5:31](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=331)** So this is going to display 10 characters.
>
> **[5:35](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=335)** So let's try it out. And there you go.
>
> **[5:39](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=339)** So what's happening here is that Django is taking the text and just displaying the first 10 characters, plus the three dots.
>
> **[5:47](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=347)** It looks a little bit better, doesn't it?
>
> **[5:51](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=351)** Okay, so it's still missing a couple of things, so we can't really access all the details of that particular note.
>
> **[5:58](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=358)** So we're almost there.
>
> **[6:00](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=360)** First, let's give a name to the detail URLs as well.
>
> **[6:05](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=365)** So let's go back, url.py, and then in here, let's add name is equal to notes.detail.
>
> **[6:15](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=375)** Okay, so now we can go back and in the title, we can add the link.
>
> **[6:21](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=381)** So it's going to be an A with href is equal to the url,
>
> **[6:31](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=391)** and then notes.detail.
>
> **[6:36](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=396)** Let's pass this to here. It's still missing something.
>
> **[6:42](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=402)** So we also need to pass here, the pk.
>
> **[6:45](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=405)** So the pk is going to be the node.id.
>
> **[6:49](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=409)** Pretty simple.
>
> **[6:51](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=411)** We can also add some classes here just to make it a little bit prettier.
>
> **[6:54](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=414)** So let's pass class is equals to text dark, and text decoration non.
>
> **[7:06](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=426)** Okay, reorganizing, that's it.
>
> **[7:10](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=430)** Let's try it out. Let's go back, refresh.
>
> **[7:14](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=434)** And you can see here that now we have a link to the specific note, but now we're still missing some details, style here.
>
> **[7:25](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=445)** So let's go back, notes detail, and let's just add here, a div.
>
> **[7:37](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=457)** This should be in here.
>
> **[7:41](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=461)** And on this div, let's add a class border.
>
> **[7:46](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=466)** Let's make it round, and just add some style on the H1.
>
> **[7:53](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=473)** So my equals five. Okay, I think we're done here.
>
> **[7:57](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=477)** Let's go back. Yeah, so all done.
>
> **[8:02](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=482)** Now you have style and dynamically generated links.
>
> **[8:07](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=487)** How amazing was that?

> [!info]- Semantic Content
>
> **Code Keywords:** let (34), pass (3), function (2), this. (2), static (1)
> **Env Vars:** css (3), btn (2), url (1)
> **CLI Commands:** make (2), find (1), node (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **File Paths:** url.py (1)
> **Analogies:** imagine (1)

#### </> Code challenge: Dividing a template into smaller parts
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=0)** - [Instructor] In this chapter, we learn how to create a base template and then use it throughout our project.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=11)** However, even after doing that, sometimes the size of an HTML page can become bigger and bigger, and we might want to organize it a little bit.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=21)** In this challenge, you should add a new section into welcome.html template that lists the benefits of using this app.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=31)** However, we'll do this on a different HTML file called advantages.html, and then we get it to be displayed inside the welcome.html template.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=44)** To do this, you'll need to create a new HTML page, and then find out which function we use to insert one template in another.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=55)** Notice here that this is different from what we did in our chapter where we extended a template, so be aware when you're looking for answers.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=64)** Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** template (5)
> **File Paths:** welcome.html (2), advantages.html (1)
> **Env Vars:** html (3)
> **Code Keywords:** this, (1), function (1)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Dividing a template into smaller parts
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=0)** - [Instructor] To insert and HTML page inside another one we can check the template's documentation.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=11)** Although it might take you a couple of tries to find it there is a list built in things that you can do with templates and one of them is the function include.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=23)** So let's try it out.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=24)** First, we can create a new HTML page inside home, templates home called advatnages.html.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=34)** Okay so this can be a very simple HTML, just a list with two items, simple and powerful.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=47)** Okay, then we can go to the welcome.html page and inside the blocked content that we have here we can insert our template.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=57)** So we have the basic way that we define something inside a template then we can do include and then home, advantages.html.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=69)** We can also include a title just so we can know that this is happening.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=73)** Some advantages of our app.
>
> **[1:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=78)** Let's put some style here just so we can have some space.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=84)** Let's save this and check it out.
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=88)** Okay, so our list of advantages is showing up, but remember these organization things sound simple now that our app is small, but they can be super useful to think from day one.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=102)** As a project grows even the most organized code can become tricky.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=107)** Breaking things into smaller pieces can be quite useful thing to think from day one to keep things tidy up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), include. (1), super (1)
> **File Paths:** advatnages.html (1), welcome.html (1), advantages.html (1)
> **Env Vars:** html (3)
> **Exercise Files:** template (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Django Forms: Validation Shouldn’t Be Hard

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a webpage
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=0)** - [Instructor] Whenever we're building a system, there's a couple of common operations that we should support for every model we create.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=8)** These are the create, read, update, and delete, or CRUD operations.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=15)** These are the minimal operations that a system should typically support.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=19)** So far regarding the notes model, we implemented the retrieve method by having an endpoint to get the details of a particular note.
>
> **[0:29](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=29)** To fully support the notes model, we need to handle all the other three operations as well.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=35)** Now we're going to learn how to implement a create method.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=40)** Let's go back to notes, views.py, and in here, let's import, well, I hope you guess it, CreateView.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=52)** Once we have this, we can actually start our new class.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=55)** So class NotesCreateView that inherits from CreateView.
>
> **[1:03](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=63)** And we're going to need three things here.
>
> **[1:06](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=66)** So model = Notes, fields which is going to be ['title', 'text'].
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=77)** And finally, a success_url.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=80)** That is going to be the '/smart/notes' which is our list endpoint.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=87)** Let's understand what's going on here.
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=90)** First the model.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=91)** So the endpoint understands what is regarding to.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=96)** Then the fields will be the attributes from the model that we allow a user to fill.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=101)** Since we don't need to pass a created add field, we just define it as title and text.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=108)** Finally, we want to redirect the user to the list of existing notes so they can see the note they just created.
>
> **[1:55](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=115)** This is the success_url attribute here.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=118)** And that's it. That's all we need to do in this class.
>
> **[2:02](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=122)** Now we can add the endpoint to the urls.py file, the same way we did to every other endpoint so far.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=130)** So in here, let's add path 'notes/new', and then we can call views.NotesCreateView.as_view().
>
> **[2:25](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=145)** And let's not forget to pass a name to it.
>
> **[2:28](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=148)** So "notes.new", and a comma here.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=155)** Okay, so the last thing that's missing is the template.
>
> **[2:39](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=159)** So let's create it.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=161)** Let's call it notes_form.html.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=166)** Okay, so let's use the default template.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=169)** So extends 'base.html' and then the block content, and finally, the endblock.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=186)** Okay, so now we can start.
>
> **[3:08](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=188)** To send information back to the server, we'll need a form tag from the HTML.
>
> **[3:14](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=194)** So let's add this here.
>
> **[3:17](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=197)** Okay, so in the form we can do action is equal to, we're going to use the method url and then notes.new, which is the endpoint we just created.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=210)** And also the method here needs to be POST because we're sending information back to the server.
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=218)** Okay, so now what we need is to allow a user to pass back the information we defined on our endpoint, title and text.
>
> **[3:47](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=227)** How do we do that? Well, this can't be more simple.
>
> **[3:52](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=232)** In here, we can do double curly brackets then form, and that's it.
>
> **[4:00](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=240)** Want to see what happens here?
>
> **[4:02](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=242)** Let's go back to the browser and try out our new endpoint.
>
> **[4:07](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=247)** So in here we can open the inspector element.
>
> **[4:12](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=252)** And you can see here that in the body we have a form, and the form is actually passed down to the HTML as two label tags, and one input tag and one text area.
>
> **[4:27](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=267)** This is because Django already knows which type of data each attribute expects.
>
> **[4:33](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=273)** Thus it creates an appropriate HTML tag to receive it.
>
> **[4:38](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=278)** Well, we're still missing the submit button, so let's add that.
>
> **[4:42](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=282)** So in here, let's add button type="submit."
>
> **[4:50](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=290)** The class is going to be ="btn btn-primary."
>
> **[4:56](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=296)** Let's add some vertical alignment, Submit.
>
> **[5:02](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=302)** That's it. Now we have everything we need in place.
>
> **[5:06](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=306)** That is basically all we have to do to have an endpoint to create a new note.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), finally, (3), pass (3), class. (2), delete (1)
> **Env Vars:** html (3), crud (1), post (1)
> **File Paths:** views.py (1), urls.py (1), notes_form.html (1), base.html (1)
> **Code Identifiers:** success_url (2), as_view (1), notes_form (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **API Endpoints:** post
 (1)
> **UI Navigation:** open the (1)

#### Understanding how Django handles security in POSTs
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=0)** - [Instructor] We did everything we needed to do to implement the create endpoint.
>
> **[0:04](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=4)** But if you try to create a new note, you'll notice that it will actually return a 403 error, meaning that we are forbidden to do this action.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=13)** Well, we're actually missing one less thing to our form.
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=17)** So if you go here, we can add {%, and then a csrf_token,
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=28)** and that's it.
>
> **[0:29](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=29)** So let's try again.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=31)** We can go back.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=33)** Refresh this page.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=34)** So this is a new note.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=37)** It worked.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=38)** Let's submit.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=39)** And yes, indeed it works.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=43)** You're probably wondering, what is this magic that was missing?
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=47)** This is a CSRF token.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=51)** That stands for Cross-Site Requests Forgery.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=55)** What happens here is that every time a browser requests a webpage that has a form, Django will send a unique token to that browser.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=65)** This token will be securely kept and no other website can access it.
>
> **[1:11](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=71)** When the user sends back a form, it'll also send back the token, allowing Django to know that this request is coming from a legit user.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=81)** Django will then process the request and return the appropriate response.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=87)** However, if for some reason a third party have access to the user credentials, when they try to make the request from another browser, they won't have the token.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=98)** So Django understand that this request is coming from an unreliable source and will not process the request, thus, preventing this type of attack.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=109)** As you can see, this is an additional layer of security that Django is adding to your website with just a small line of code.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=118)** Beyond the numerous features that allow you to speed up the process of creating a website, these security features are a big part of why developers choose Django to work with.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), stands for (1), is an  (1)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** csrf_token (1)
> **Env Vars:** csrf (1)
> **Speakers:** - [instructor] (1)

#### Django forms: Powerful validation with minimal work
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=0)** - [Instructor] Adding a new endpoint was nice and easy, but now it's time to consider more complex scenarios.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=6)** Model forms are the best way of doing this in Django.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=10)** Let's check it out.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=12)** First, we're going to create a file called forms and inside our Notes app.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=19)** Okay, so in here, let's add from django import forms and from .models import Notes.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=30)** With this, we can create a new class called NotesForm that's going to inherit from forms.ModelForm, and inside this class, we're going to create a new class, Meta.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=44)** Okay.
>
> **[0:45](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=45)** That's going to receive model, which is Notes, and fields, just like we added on the class-based view for Create View.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=55)** So title, and text.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=59)** Okay.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=60)** With this we can come back to the views.py file, and in here, instead of passing the fields, we're going to pass a form_class.
>
> **[1:11](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=71)** That's going to be our NotesForm.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=74)** We also need to import it, so from .forms import Notesform.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=81)** Okay.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=82)** So far what we did will result in exactly the same behavior as we have so far, but the form will give us power to do much more.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=92)** For instance, let's say that we want to add a specific behavior that just allow us to add notes that contains the word Django in the title.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=101)** Let's go back to the forms.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=103)** What we need to do here is add a new method called def clean_, and the field we want to add a validation, in this case, title.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=116)** So in here we can get the title from the cleaned_data, which is a dictionary.
>
> **[2:02](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=122)** The cleaned_data is returned by the form and is particularly useful for fields with strong validation.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=130)** Like for instance, emails.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=133)** In this scenario, it will be exactly the same value as the user passed.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=139)** With this, we can actually start our validation.
>
> **[2:23](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=143)** So if 'Django' not in title: we're going to raise a ValidationError with a message, 'We only accept notes about Django!'
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=157)** If everything goes well, we just return title.
>
> **[2:42](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=162)** Okay, so we have here the ValidationError already imported, and we can try this out.
>
> **[2:48](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=168)** Let's go back to our browser.
>
> **[2:52](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=172)** Let's add a new note, "A new note!"
>
> **[2:56](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=176)** which is a test.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=178)** Let's submit this, and we have our error.
>
> **[3:02](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=182)** "We only accept notes about Django!"
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=185)** Okay, so this is pretty cool.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=187)** Django already injects the validation errors directly to our HTML.
>
> **[3:13](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=193)** You can see here we have a ul that has a class errorList and a list of errors.
>
> **[3:20](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=200)** This is pretty cool, but we can't really control the design, so let's change this a little bit so we have a really good ValidationError here.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=210)** We can go back, and on our style.css, we can add here that the ul.errorlist is not going to be displayed.
>
> **[3:43](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=223)** So we're going to control this.
>
> **[3:46](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=226)** Then on the form template, we're going to add an if block.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=234)** So if our form have errors, we're going to do something.
>
> **[4:02](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=242)** So let's close the if, so we don't forget this, so endif.
>
> **[4:08](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=248)** Then in here we're going to add a div, which is a class of type alert, and let's make it an alert-danger.
>
> **[4:18](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=258)** Some vertical spacing.
>
> **[4:21](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=261)** And in here, what we can do is pass the form.errors.title.as_text.
>
> **[4:31](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=271)** Okay, let's go back, let's refresh this.
>
> **[4:37](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=277)** And if I add a new note, which is a test, try to submit this.
>
> **[4:43](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=283)** And there you go.
>
> **[4:44](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=284)** Now you can add validations in any field you want with just a couple of additional methods in a form class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (4), this. (3), from . (2), class, (2)
> **Code Identifiers:** cleaned_data (2), form_class (1), errorlist (1), as_text (1)
> **Definitions:** is a  (4)
> **Analogies:** for instance (2), just like (1)
> **File Paths:** views.py (1), style.css (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)

#### Django forms are useful for layout as well
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=0)** - [Instructor] This form we just created, it's starting to look nice, but there's work to do here.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=6)** It's still missing some style.
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=8)** An alternative would be to build the whole form by hand with each label and each input, everything.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=16)** As you can see, this is not such a fun activity once you have a form already laid out for you, right?
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=23)** Forms are amazing because not only they add validation, but also because you can quickly add styles to it.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=31)** First, let's say that we want to change the labels of our form.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=35)** Title and text are the words we use on the backend, but that doesn't mean that it looks so good for our users.
>
> **[0:41](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=41)** What we can do is on the class Meta, add a field called labels.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=49)** And in here, let's add text.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=52)** It's going to be, "Write your thoughts here."
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=58)** Let's save this.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=60)** Now, if we go back, and refresh this, as you can see, we are controlling the UX directly from our backend.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=70)** We can also add an attribute widget to inject CSS classes directly to the form.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=76)** Let's go back and add a new field called widgets.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=82)** And then, in here, let's add title, and this is going to be a forms.TextInput.
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=90)** And then we're going to pass attributes.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=94)** This is going to be a dictionary, and the class is going to be form-control and some vertical spacing, as usual.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=105)** We can do a similar thing with the text.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=108)** So text, this on the other hand, is not a TextInput, but a TextArea.
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=114)** And also we're going to add, again, attributes.
>
> **[1:59](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=119)** And let's add the same classes.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=123)** The class is equal to form-control and this.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=132)** Let's go back and check it out.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=135)** Refresh.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=137)** Yeah. You can see now that controlling the frontend in an easy and accessible way is also a main advantage of using model forms.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=146)** All this without ever changing the original template.
>
> **[2:30](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=150)** Nice and easy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), this, (1), pass (1)
> **Env Vars:** css (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Codespaces error and the solution
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=0)** - [Instructor] If you're using GitHub Codespaces, there is a chance you still run into trouble even after adding the CSFR token to your form.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=9)** So in my case here I have the token, but if I try to create a new note, I'm still getting the CSRF verification failed.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=18)** What's happening here is that there is a trouble with the configuration.
>
> **[0:22](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=22)** So we're going to change that.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=24)** We can go to our settings, import a model called os, that stands for operational system.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=31)** And right at the bottom of the settings file we can check if we are in the Codespaces environment.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=38)** So let's create a new variable, IS CODESPACES, and we can get the variable from the system environment.
>
> **[0:46](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=46)** So os.environ.get, and in here it's going to have a CODESPACES variable.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=57)** And we're going to check if this is true, which is a string.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=61)** If we are in the Codespaces, so if this is Codespaces, what we're going to do is override the CSRF_TRUSTED_ORIGINS.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=74)** And in here we're going to pass a list.
>
> **[1:18](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=78)** And in this list we're going to pass localhost, so [https://localhost:8000](https://localhost:8000).
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=88)** Let's rerun our run server here.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=93)** And then let's go back to our form.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=96)** A new note.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=99)** Does it work now?
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=101)** And submit.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=103)** Now it's working.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=105)** Unfortunately this is a configuration problem.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=108)** What we're doing here is checking if we are in the GitHub Codespaces environment and then overriding the trusted origins to force localhost to be there.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=118)** This is only being done if we are in Codespaces, which is good because if you run this code elsewhere in your computer or a production environment, you won't have the same override in place.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=132)** So yeah, there you go.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=133)** Not ideal, but here's the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (2), pass (2)
> **Env Vars:** codespaces (2), csfr (1), csrf (1), csrf_trusted_origins (1)
> **Definitions:** is a  (4), stands for (1)
> **Tools:** github (2)
> **URLs:** [https://localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 7. Working with Existing Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The U in the CRUD: Updating data
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=0)** - [Instructor] Okay, so now, we have the create endpoint.
>
> **[0:03](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=3)** It's time to create the U update endpoint.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=7)** Let's go back to the views file on notes.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=11)** And on here, we're going to also add UpdateView.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=19)** Now, we can add a new class, NotesUpdateView that inherits from UpdateView.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=27)** And we actually just need to copy this from the create view and paste it here.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=34)** That's it. That's all we need to do.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=37)** The only thing still missing are the URLs.
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=40)** So what we can do is go back here.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=43)** We can copy and paste the details view, and then add here a slash edit on the endpoint.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=52)** Change the class, whereas this originating to, and the name.
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=58)** That's it. That's all we need to do.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=61)** If we go back to the notes now, get the first note and then add a slash edit at the end.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=70)** You can see that we have our form here, and we have the fields already filled in with the data from that particular note.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=79)** So if we try something, just save and try again.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=85)** Uh-oh, it didn't work.
>
> **[1:27](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=87)** Okay, so let's check it out what is going on.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=91)** If you go to our template, if you notice here, we're actually hard coding, which URL the form should be sent to.
>
> **[1:40](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=100)** We don't actually need this.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=102)** The form is smart enough to know where to send this to.
>
> **[1:46](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=106)** So let's get rid of this.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=109)** Let's go back, edit, and then submit it.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=118)** If we see now, our note was edited.
>
> **[2:02](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=122)** That's it. So editing basically comes for free after you implemented the create endpoint.
>
> **[2:09](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=129)** we can style this page a little bit.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=132)** So let's go to the template.
>
> **[2:14](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=134)** We can add a cancel button that will return from this page if the user changed their mind.
>
> **[2:21](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=141)** So it can go to a, href, it's going to be the function that have URL, and then this go back to notes.list.
>
> **[2:33](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=153)** We still need some class here, so let's tie button and then button secondary
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=165)** and then cancel.
>
> **[2:48](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=168)** We can also go back to the details.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=171)** In here, we can create a new button that will take us to the added page, so a, the href, then curly brackets, percentage, URL, notes.update, and then PK is equal to note.id.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=192)** Let's add some class here as well, so btn and btn secondary, edit.
>
> **[3:21](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=201)** Okay, let's try this out.
>
> **[3:23](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=203)** If we go back here and this note, we now have the button edit.
>
> **[3:28](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=208)** We can actually edits here and then we can actually cancel or submit.
>
> **[3:36](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=216)** There you go.
>
> **[3:37](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=217)** Now, you have a full cycle between list, detail, and edit, with just a couple lines of code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), class, (2), this. (2), function (1)
> **Cross-References:** go back to (4)
> **Env Vars:** url (3)
> **UI Navigation:** go to (3)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)

#### The D in the CRUD: Deleting data
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=0)** - [Instructor] So it's time to think about the last operation from the CRUD operations, deleting data.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=7)** Let's start as usual.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=9)** Let's go back to the views.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=11)** And from here, we're going to add actually from django.views.generic.edit.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=21)** Let's import DeleteView.
>
> **[0:26](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=26)** The delete endpoint is even simpler than all the endpoints we created until now.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=32)** We can add a new class, NotesDeleteView, that inherits from DeleteView, and we actually just need the model and a success_url.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=51)** Once more, the endpoint URL need to be added to the urls file.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=56)** So let's go back here, let's copy this.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=59)** And instead of edit, let's call this delete.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=64)** Let's change the class here and the name.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=70)** Now, we need to create a template to confirm if the user wants to delete a particular note.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=76)** Let's go here and add a new one called notes_delete.html.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=84)** So let's start with the basics.
>
> **[1:26](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=86)** So extend 'base.html', then block.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=102)** This is also going to be a form.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=105)** So let's add form, and the method's going to be post.
>
> **[1:52](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=112)** Since this is a form, we can't forget about the csrf_token.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=120)** And then in here, we're going to add a message, "Are you sure you want to delete?"
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=127)** And then let's add notes.title.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=132)** Let's add quotes here.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=137)** And then another message, saying that this action actually can't be undone.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=146)** And finally, an input button type="submit".
>
> **[2:33](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=153)** And the class is going to be btn btn-danger, so it can be a nice red.
>
> **[2:40](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=160)** And value, it's going to be confirm.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=166)** Since we already have our template, we can go back to the details and add yet one more button here that will lead us to the delete.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=181)** Let's make it red as well.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=184)** Okay, it's time to try it out.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=186)** Let's go back to one particular note.
>
> **[3:08](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=188)** Now we have the Delete button.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=190)** And if we click here, uh-oh, okay, we're getting, again, a template does not exist.
>
> **[3:17](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=197)** We can see here that while it was loading the template, it was looking for a template with the name notes/notes_confirm_delete.
>
> **[3:27](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=207)** So we have two alternatives here.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=211)** One is to change the name of our template to match the template that Django is expecting.
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=218)** I prefer to usually add the template_name to avoid having to remember which template is related to which endpoint.
>
> **[3:46](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=226)** So we can come back here to the views and add a template_name.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=234)** This name is also very similar to the other template_names that we have.
>
> **[3:59](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=239)** So in my opinion, this is a little bit better, but you can choose whatever you prefer.
>
> **[4:05](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=245)** Let's try again.
>
> **[4:07](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=247)** Let's delete this.
>
> **[4:09](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=249)** Okay, we have our message.
>
> **[4:11](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=251)** Let's Confirm.
>
> **[4:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=252)** And there you go, the note was deleted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), delete (7), this. (2), class, (1), finally, (1)
> **Exercise Files:** template (8)
> **Code Identifiers:** template_name (2), success_url (1), notes_delete (1), csrf_token (1), notes_confirm_delete (1)
> **Cross-References:** go back to (3)
> **File Paths:** notes_delete.html (1), base.html (1)
> **Env Vars:** crud (1), url (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### </> Code challenge: A button to add a like to a note
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=5)** - [Narrator] In a previous challenge, you've added the ability of adding likes to your notes.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=10)** Now, let's try to add a button that will allow people to add a like to specific note.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=16)** To do that, you'll need to first create a new view that when receiving a post, will increase the number of likes by one.
>
> **[0:25](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=25)** Then you need to add a new button in the Notes detail template, and that button must make a POST request to our new view.
>
> **[0:33](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=33)** And finally, a likes counter in the notes detail template so you can see the number of likes increasing.
>
> **[0:41](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=41)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **API Endpoints:** post  (1)
> **Env Vars:** post (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Solution: A button to add a like to a note
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=0)** (bright upbeat music) (bright upbeat music ends)
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=6)** - [Instructor] Okay, so this was a bit of a tricky question.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=9)** Although class-based views are amazing and I do love them, we don't need to use them for absolutely everything.
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=17)** In this case, we have a very straightforward case.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=20)** We need an endpoint that receives a post and that will change the model.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=24)** No input data needed, no validation needed. Quite simple.
>
> **[0:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=29)** So we could use a class-based view, but we could also leverage the simplicity of Django using a function-based view.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=36)** Let's go into the views file and add a new function, call add like view.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=42)** That receives two parameters, the request and the pk, so the identifier of the note.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=49)** There's actually a pretty sweet helper function that will automatically return an HCP status 404, meaning not found if the identifier is wrong and there is no node on the database.
>
> **[1:03](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=63)** So let's use that.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=64)** So from the shortcuts, we're going to get this function called, get object or 404, and let's use this on the function.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=74)** So note, get object or 404.
>
> **[1:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=78)** We pass the model, notes, and the identifier.
>
> **[1:23](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=83)** Perfect. Then the only thing we need to do is add one to the number of likes, note.likes.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=91)** Let's add one and save it.
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=95)** Okay, now, we need to redirect the user back to the detailed view from this endpoint.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=102)** So we could use two functions here.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=105)** One is an http response redirect.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=111)** And from Django URLs, we're going to import reverse.
>
> **[1:57](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=117)** So let's return the redirect.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=120)** And the URL we're going to redirect the user to is going to be called using reverse.
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=127)** And in here, we're going to pass the identifier of that URL.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=130)** So notes.detail and the arguments for that URL.
>
> **[2:15](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=135)** So args is going to be the PK and a coma here because this is a tuple.
>
> **[2:23](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=143)** Okay, our function is ready.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=146)** Now, we can add this view to the notes URL's file.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=149)** Let's go back here, add a new path.
>
> **[2:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=154)** So notes, it receives an integer which is the identifier.
>
> **[2:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=162)** And then let's call this add like.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=166)** We're going to get the function from the views file.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=169)** So, add like view and give it a unique name.
>
> **[2:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=174)** So, let's call notes add like.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=178)** As you can see here, we are not calling the method as view because this is not a class-based view.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=184)** This is a simple view. Perfect. Our endpoint is ready.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=189)** Now, we can actually go to our template and add a number of likes as a button to upvote a note.
>
> **[3:15](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=195)** Let's copy this button here.
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=199)** Let's pass nodes, add like, and let's pass the PK as the note id, and let's call this upvote.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=210)** To make sure this works, we can add the number of likes to the page.
>
> **[3:35](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=215)** So note.likes and the number of likes.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=221)** Okay, let's try this out. Let's refresh here.
>
> **[3:46](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=226)** Okay, this note has zero likes and an upvote button.
>
> **[3:50](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=230)** Let's try it out. I'm going to click here and there you go.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=234)** We have an additional like. It works.
>
> **[3:56](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=236)** Now, we need to have a word of caution.
>
> **[4:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=240)** If you notice, we don't have a form, meaning that this is working when we do a get request to this URL.
>
> **[4:07](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=247)** Typically, get requests should never modify your system.
>
> **[4:11](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=251)** This is a bad practice.
>
> **[4:14](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=254)** So what we can do is to make sure it only works for post requests and then return a 404 if any other type of request hits this method.
>
> **[4:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=264)** Let's go back to our views, and let's make sure that this only happens if we have a post.
>
> **[4:30](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=270)** So if the request.method is equal to a post, then we do everything we did so far.
>
> **[4:40](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=280)** Anything else, we should raise an http404.
>
> **[4:46](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=286)** Okay, but this means that we need to make an actual post request through the button.
>
> **[4:52](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=292)** And that's a little bit tricky.
>
> **[4:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=294)** We're going to need a form to do that. So bear with me.
>
> **[4:58](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=298)** So now, we need to change this from a simple link which will create a get method to a form to do a post method.
>
> **[5:08](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=308)** To do that, we're going to need a form.
>
> **[5:11](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=311)** Then in the form, we're going to say that the method is going to be a post.
>
> **[5:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=318)** Let's add a class to keep it in line with all the other buttons we have here.
>
> **[5:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=324)** And the action, which means the URL, we're going to call this form, too, is going to be the same URL we used before.
>
> **[5:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=334)** Perfect.
>
> **[5:35](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=335)** Now, because this is a post, remember, we also need the CSRF token to make sure this is a secure request.
>
> **[5:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=347)** And then we're going to pass form SP.
>
> **[5:51](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=351)** Because we don't have inputs, this return nothing.
>
> **[5:55](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=355)** And finally, we need a button of type submit upvote.
>
> **[6:05](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=365)** And we can actually import these classes here to make sure everything stays the same.
>
> **[6:12](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=372)** Okay, let's try this out. Shall we?
>
> **[6:15](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=375)** Going to refresh this.
>
> **[6:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=378)** Nothing changed as we expected.
>
> **[6:20](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=380)** We're going to call it and it all works. Perfect.
>
> **[6:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=384)** So now, we have the upvote working as a post method.
>
> **[6:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=389)** If we come here to the URL and try to go directly to the link, it's going to return a 404.
>
> **[6:36](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=396)** Remember, good practices make your code better and the user experience much more reliable.
>
> **[6:43](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=403)** Keep attention to all of these details, and your code and system will be amazing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (7), pass (5), case, (1), case. (1)
> **Env Vars:** url (8), hcp (1), csrf (1)
> **CLI Commands:** make (7), node (1)
> **Definitions:** is a  (5), is an  (1), means that (1)
> **Non-Speech:** (bright upbeat music) (1), (bright upbeat music ends) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)


### 8. Using Django to Store and Display User-Specific Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How to update data stored in your database
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=0)** - [Instructor] Right now, no matter if a user is logged into an account, they can create notes on the system.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=6)** However, we want the system to be aware of who's logged in and only display the notes written by their original author.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=15)** How can we do that?
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=17)** So far, we have two tables in our database, the Notes table and the User table.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=24)** We need to save in the Notes which user was the author, and we can do that by creating a link between the User table and the Notes table.
>
> **[0:34](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=34)** This is what we call a foreign key.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=38)** Let's go back to our model and import the user model that comes with Django by default.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=44)** So from Django.contrib.auth.models import User.
>
> **[0:52](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=52)** Now we go to the Notes model and we add a foreign key.
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=58)** Now we go here and we add models.foreignKey.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=65)** This here needs a couple of things.
>
> **[1:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=67)** The first item is the model we want to create a link with.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=70)** In this case, this is the user model we just imported.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=76)** Then, the second item is going to be the on_delete.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=80)** This means that we want to define what happens to this node if the user associated with it is deleted.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=89)** In this case, we're going to use models.CASCADE, which means that if a user gets deleted, we also want to delete all the notes associated with them.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=101)** Finally, we can say how we will identify this relationship on the user side.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=109)** Related_name, it's going to be notes.
>
> **[1:54](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=114)** Okay, now that we change the model, we need to create a migration.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=118)** Let's go and type python, manage.py make migrations,
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=127)** and we're getting an error.
>
> **[2:09](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=129)** The problem here is that we defined that every node needs to be associated with a user, but our database is already fully populated by notes without users.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=140)** So we need to define what to do now.
>
> **[2:22](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=142)** Since we have a user, admin, and its ID is one, we can pass this as the default user on this migration.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=152)** If we pass any ID of a user that doesn't exist, this migration will fail.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=157)** So we should pass an ID of a user that exists.
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=161)** Let's add one.
>
> **[2:43](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=163)** We're going to provide a one-off default, and the ID is going to be one.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=169)** Okay, so now we can actually apply the changes to the database with python manage.py migrate.
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=178)** As I said, this is only working because we do have a user with ID equals one in our database, but it would break otherwise.
>
> **[3:08](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=188)** When creating migrations and adding default values, you should always take care to avoid creating migrations that can break if you start a project again from scratch.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=198)** Let's test our implementation and see if it works by opening the shell.
>
> **[3:24](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=204)** So python manage.py shell.
>
> **[3:29](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=209)** And let's import the user.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=211)** From django.contrib.auth.models import User.
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=218)** And let's get the first user.
>
> **[3:39](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=219)** So user is going to be User.objects.get(pk=1).
>
> **[3:46](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=226)** So this is the admin user that we've been using so far.
>
> **[3:50](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=230)** What we can do now is actually see the notes that this user have so we can count them, and we can see that all the five notes that we have in our system is associated to that user.
>
> **[4:04](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=244)** We can even get all the notes from here.
>
> **[4:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=247)** So if we say user.notes.all(), we're going to have all the object notes we being displayed here.
>
> **[4:15](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=255)** That's it.
>
> **[4:16](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=256)** Now we can start making changes to make the system user-aware.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (3), case, (2), default. (1), delete (1)
> **CLI Commands:** python (3), node (2), make (2)
> **File Paths:** manage.py (3)
> **Code Identifiers:** foreignkey (1), on_delete (1)
> **Definitions:** means that (2)
> **Env Vars:** cascade (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Template for update
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=0)** - [Instructor] Every node now has the user that created it, but our endpoint is still displaying all the notes from all the users.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=9)** We also didn't add any authentication.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=11)** So in order to keep privacy, we need to fix that.
>
> **[0:15](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=15)** So let's go back here on the notes, views dot pi, and import from django dot contrib dot auth dot mixins (indistinct) import, login required mixin.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=31)** Then on the list view, we need to add the login require mixin, and don't forget, oops, required mixin.
>
> **[0:43](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=43)** And let's not forget to add the login URL.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=47)** So for now, this is going to be the admin.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=51)** This login URL means that if a user tried to access the list view, and it's not logged in, they will be redirected to the slash admin instead of seeing a 404.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=65)** Okay, so now what we need is to change the query so we can only display the queries of the logged in user.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=73)** But where is the query? (chuckling) As we discussed earlier, class-based views are highly powerful, and yet highly changeable.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=82)** We can use a documentation website to check for all the methods that we have available, and find out which ones we need to change to get the behavior we want.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=94)** This is the website that I look for when I want to change a class-based view.
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=99)** It calls CCBV because it's called classy class-based views.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=105)** You can see here that we can change the Django version we're using.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=109)** It is not updated to the version 3.2, but I think we'll be just fine with the 3.1.
>
> **[1:57](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=117)** So let's go to the generic list, and go to list view.
>
> **[2:02](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=122)** In here, you can see all the classes, the methods, the attributes, everything we can configure in this list view, class-based view.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=133)** So after some investigation, I realize there is a get query set method here.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=140)** Whenever a user go to the list endpoint, the first method that it will call will be the get method, because we're making an ATTP get request.
>
> **[2:30](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=150)** Let's check it out.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=152)** Whoa.
>
> **[2:33](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=153)** Okay, so there's a lot going on here.
>
> **[2:35](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=155)** However, we can quickly see that there is a method here that gets the object list by calling a method called get query set.
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=165)** Okay, so let's check that method.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=169)** Get query set, here it is.
>
> **[2:52](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=172)** There's still a lot of things going on here, but we can see that this is the method where the query to the database is made.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=180)** Jackpot.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=181)** This is the method that we need to alter in order to list only our user notes.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=187)** If we go back to the code now, we can actually override the get query set method, and instead of returning whatever it is returning by default, we're going to return self dot request dot user dot notes dot all.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=210)** That's it.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=211)** A couple of changes in our endpoint is requiring user authentication, and then using the user of that request to just display the notes that were created by that user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), import, (1), require (1), override (1), default, (1)
> **Env Vars:** url (2), ccbv (1), attp (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** node (1), find (1)
> **Versions:** version 3 (1), 3.1 (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Best Practices:** don't forget (1)

#### Endpoint and template for deleting
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=0)** - [Instructor] We changed our notes to have a user, but let's try to add a new one and see what happens.
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=6)** So this is a new note.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=9)** Does it work?
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=11)** Let's submit.
>
> **[0:12](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=12)** Uh-oh, okay. We have an error.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=14)** You can see here that there is a constraint that a note can't have a null user.
>
> **[0:20](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=20)** The problem is that we don't say in the form to consider the logged-in user as the author of that note.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=28)** So we need to change this, and this is a bit tricky, so bear with me for a second.
>
> **[0:35](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=35)** So in here, on the CreateView, we're going to override the method def form_valid that receives a self and form.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=49)** The first thing it is that we need to get the object, which is going to be form.save, and then commit = False.
>
> **[0:59](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=59)** Now we're going to fill the object.
>
> **[1:02](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=62)** So self.object.user is going to receive the request.user and then we're going to self.object.save.
>
> **[1:15](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=75)** And finally, we need to return an HttpResponseRedirect.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=84)** And then this is going to get self.get_success_url.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=91)** Let's see, the HttpResponseRedirect is already being imported from django.http.response.
>
> **[1:40](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=100)** And that's it.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=102)** That's what we need to get our form validating.
>
> **[1:46](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=106)** Okay, so that was a little bit tricky.
>
> **[1:48](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=108)** Let's understand what's going on here.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=111)** So the data is sent by the user, passed inside the form, which asks a simple question.
>
> **[1:58](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=118)** Is this data valid?
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=120)** To see if the data is valid, the form would call a couple of methods that have the title starting with clean, so clean title, clean text, like the one we changed before.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=131)** If something is wrong, the method isValid returns false, and the class-based view will raise an exception.
>
> **[2:19](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=139)** On the other hand, if all checks clear, the data is stored in a variable called cleaned_data.
>
> **[2:26](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=146)** And when you call form.save, that will save the object directly in the database and that's it.
>
> **[2:34](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=154)** It all happens very smoothly.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=157)** So what happens here is that when we pass title and text to the form, the method isValid returns True.
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=165)** Then the formValid method will call the save and will try to save to the database.
>
> **[2:52](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=172)** But although the form is returning isValid = True, the database is forbidding us to try to save a note without a user.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=181)** That's where we get our error.
>
> **[3:04](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=184)** What we did here was to get in the middle of it so we can inject the logged user as part of the object.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=192)** We do this by passing the attribute commit = False that creates the object but doesn't save it to the database.
>
> **[3:21](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=201)** Then we have the object, we insert the user and then we call save, successfully saving the note with that user to the database.
>
> **[3:32](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=212)** As you can see, class-based views can be changed as you please.
>
> **[3:37](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=217)** Now the endpoint is working and life is good again.
>
> **[3:42](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=222)** So we refresh here and add a new node.
>
> **[3:48](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=228)** Yeah, as you can see, class-based views can be changed as you please.
>
> **[3:53](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=233)** Now the endpoint is working and life is good again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (4), this, (1), override (1), finally, (1)
> **Code Identifiers:** isvalid (3), form_valid (1), get_success_url (1), cleaned_data (1), formvalid (1)
> **Definitions:** is a  (3)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### </> Code challenge: Mark a note as public or private
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=0)** - [Narrator] Are you ready for one more challenge?
>
> **[0:08](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=8)** In this challenge, we will get to mark a note as either a public or a private note.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=14)** The idea is that you'll be able to share public notes with unauthenticated users in the future.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=21)** To do this, you need to add a new parameter to the notes to flag if it's public or not, create a new view so a user can mark a note as public, add a button to mark a note as public, and then finally, let the user know that they're dealing with a public note, as we don't want anyone to share private information on those notes.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=44)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), private (2), this, (1), finally, (1), let (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Mark a note as public or private
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=0)** - [Instructor] We can start by adding a new field called public and we can make it a BooleanField saying that default is false, making every note private by default.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=18)** Okay, that sounds good enough, but there's one more thing we can improve.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=23)** Although public may sound good enough for now, it can get confusing when reading the code later on.
>
> **[0:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=29)** What does public even mean?
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=31)** Is it saying if a note is public or when the note was made public or who made the change to make the note public?
>
> **[0:40](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=40)** Whenever we're creating a new field or a new variable, it is important to think, how can I make the best with the littlest information possible?
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=50)** If I simply change this field from public to is public.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=54)** There's only one answer here.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=56)** The answer to this field must be a yes or no.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=60)** The same way that if we change it to public ad, it would imply that we're talking about time.
>
> **[1:07](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=67)** Always keep in mind that the easiest we make our code, the better we are at maintaining and improving it.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=74)** Okay, so we have a changing to our model.
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=77)** We need another migration so let's do that.
>
> **[1:20](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=80)** Python manage.py makemigrations.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=85)** Now we can actually migrate, manage.py migrate.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=91)** Perfect.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=92)** Now we can go to the views and similar to what we have in the ad like view, we also can do a similar thing to this end point as we just want to basically flip a switch every time we hit the end point.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=107)** So let's copy and paste this and let's change the name to change_visibility_view.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=116)** And instead of changing the number of likes, we're going to flip the switch for the east public.
>
> **[2:03](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=123)** So it's going to be whatever it isn't on the database.
>
> **[2:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=129)** Okay.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=130)** That will do, simple and elegant.
>
> **[2:14](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=134)** Now we can add a new endpoint.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=137)** So again, let's copy and paste what we've done before and change the name to change_visibility.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=149)** Change_visibility, and again a unique identifier.
>
> **[2:36](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=156)** Perfect.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=157)** Let's go to the detail form.
>
> **[2:39](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=159)** And again, we can copy and paste basically the same form that we did for upvote.
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=165)** The only thing we need to remember to change is the URL.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=169)** So we're going to change this to change_visibility, and let's change the name here to make it public.
>
> **[2:59](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=179)** Awesome.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=181)** However, as we know, we're flipping the switch, so sometimes we're going to make it public.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=186)** Sometimes we're going to make it private.
>
> **[3:08](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=188)** So instead of just doing this, we can create an if here and change the name depending on if the note is visible or not.
>
> **[3:18](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=198)** So if it is public and we hit this button, we're going to make it private.
>
> **[3:27](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=207)** Else, we're going to make it public.
>
> **[3:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=214)** Let's end our if here.
>
> **[3:38](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=218)** And there you go.
>
> **[3:39](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=219)** Perfect.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=221)** Okay.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=221)** The last thing we need is actually to warn the user that this is a public note as we don't want to share private information on a public note.
>
> **[3:51](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=231)** What we can do here is on the top in the title, we can add a span class that has a class badge and let's make it the background secondary and we're going to call it public and close this span.
>
> **[4:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=250)** Let's close this class here, but we only want to do this if the note is public.
>
> **[4:20](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=260)** Okay, let's close the and if here, let's save it and let's check our website now.
>
> **[4:27](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=267)** Now we have a button here, and if I click to make it public, we have a public warning here for our user that this is a public note, and if we make it private, the button change and our badge will be removed.
>
> **[4:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=282)** There you go.
>
> **[4:43](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=283)** So now you have a public or a private note depending on this button, and you have a warning for the user to make sure to not share private information.

> [!info]- Semantic Content
>
> **Code Keywords:** public (22), let (12), private (7), switch (3), default. (1)
> **CLI Commands:** make (13), python (1)
> **Code Identifiers:** change_visibility (2), change_visibility_view (1)
> **Warnings:** warning (2), keep in mind (1)
> **File Paths:** manage.py (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)


### 9. Login, Logout, and Signup Are Simple

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Adding login and logout pages
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=0)** - [Instructor] We are almost there.
>
> **[0:02](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=2)** The last thing remaining for our app is to create a proper login place.
>
> **[0:07](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=7)** Although the admin login is nice, it can only be accessed by staff members of the system.
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=13)** So we need to create the authentication interface as well.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=16)** Let's do this.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=18)** So first let's go to home, then views, and then let's import here from django.contrib.auth.views, import loginview.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=37)** And then let's create a class called logininterfaceview that inherits from login view.
>
> **[0:45](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=45)** And in here, we only need to define really one thing, the template name.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=50)** So let's go call it home/login.html.
>
> **[0:57](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=57)** Okay, so we can forget about the URLs. So let's do this now.
>
> **[1:02](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=62)** So in here, let's add a login page that inherits from views, login interface view as view.
>
> **[1:12](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=72)** Okay, so now we can create a template.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=76)** So in here, let's add the new login.html.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=82)** And in here, really all we need to do is extends base.html to get all our configuration, to then block content, and finally, endblock.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=101)** Okay, so in here, what we need is simply a form.
>
> **[1:46](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=106)** This form should have method equals to post.
>
> **[1:49](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=109)** Because this is a form with the method posts, we can't forget what our dear friend csrf_token.
>
> **[1:59](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=119)** And then we're going to use form as P because it's going to be rendered as P tags in the HTML.
>
> **[2:08](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=128)** That's the only difference.
>
> **[2:10](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=130)** And finally, we're going to have an input.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=133)** The type's going to be submit. Let's add some class here.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=137)** So BTN and BTN secondary.
>
> **[2:23](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=143)** And that's it. Okay, let's try this out.
>
> **[2:28](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=148)** So we're going to go here, go to login.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=152)** Okay, let's try to log in.
>
> **[2:38](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=158)** Okay, so what's happened here?
>
> **[2:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=161)** The problem is that Django has a default system, defined configuration for the redirect, which leads to a page we don't have, which is this account profile page.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=171)** Because this is a global definition, we should change this not in the class-based views, but we should change it on the settings.
>
> **[2:59](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=179)** So let's do this.
>
> **[3:00](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=180)** Let's go back, then let's go to smartnotes, settings, and then we can add this way below here and we can add login redirect url, is going to be smart/notes.
>
> **[3:23](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=203)** So this is where we're going to redirect the user after it is logged in.
>
> **[3:28](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=208)** So let's try this again.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=211)** I just remember we are completely logged in here.
>
> **[3:34](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=214)** So first, let's log out to make sure our login work.
>
> **[3:40](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=220)** So log in, then let's add our credentials and it works.
>
> **[3:48](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=228)** Amazing.
>
> **[3:49](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=229)** Okay, so similarly, we also want a logout view, right?
>
> **[3:52](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=232)** We don't want to have to go to the admin to do this.
>
> **[3:56](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=236)** So let's add this real quick.
>
> **[3:58](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=238)** So on the views, again, from here we're going to also import logout view.
>
> **[4:06](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=246)** And similarly, we're going to create a logout interface view that inherits from logout view.
>
> **[4:14](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=254)** And the only thing we need is the template name. Yes.
>
> **[4:18](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=258)** So let's add here, home/logout.html.
>
> **[4:27](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=267)** Okay, so let's create the template.
>
> **[4:33](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=273)** Logout.html.
>
> **[4:36](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=276)** For sake of time, we can copy this and paste it here.
>
> **[4:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=281)** And instead of having a form, we're going to have an H1 that says, hope to see you soon.
>
> **[4:52](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=292)** Okay. Oh yes, and we're missing the URLs.
>
> **[4:55](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=295)** So let's do this.
>
> **[4:59](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=299)** We are copying logout and logout.
>
> **[5:04](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=304)** And for the sake of organization, let's add names to this URLs, shall we?
>
> **[5:10](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=310)** So this is going to be our homepage.
>
> **[5:15](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=315)** We can actually get rid of this.
>
> **[5:17](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=317)** Our system doesn't really need this.
>
> **[5:20](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=320)** Then we have login and finally logout.
>
> **[5:29](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=329)** Okay, one more tidy up to do. Let's make this empty.
>
> **[5:35](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=335)** Okay, let's see what that causes.
>
> **[5:39](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=339)** If we go back, the empty here means that now this welcome page is going to be the default page without any path.
>
> **[5:49](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=349)** And then if you go to logout and try to access the smart notes again, there you go, because we're logged out, now we can't access the notes and it redirects to the Django login.
>
> **[6:05](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=365)** We need to change that as well, but I'm going to leave this to you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), this. (6), interface (3), finally, (2), extends (1)
> **File Paths:** home/login.html (1), login.html (1), base.html (1), home/logout.html (1), logout.html (1)
> **UI Navigation:** go to (5)
> **Exercise Files:** template (4)
> **Env Vars:** btn (2), html (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** csrf_token (1)

#### Adding a signup page
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=0)** - [Instructor] Okay, we are so close.
>
> **[0:02](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=2)** It's time to add it all together.
>
> **[0:04](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=4)** So let's go to the base.html template and add a couple of things.
>
> **[0:09](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=9)** Bear with me for a second.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=11)** So we're going to add a nav bar.
>
> **[0:14](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=14)** Let's indent this correctly.
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=17)** And then in here, we're going to pass a couple of classes.
>
> **[0:21](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=21)** So we're going to use navbar navbar-dark and bg-dark.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=30)** Okay.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=32)** We're also going to need another div here.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=36)** And this div, we have a class ms-auto.
>
> **[0:42](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=42)** And let's create a link here for the Login page.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=47)** So we're going to pass a URL, and this URL was going to be the login.
>
> **[0:55](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=55)** Let's close this, and let's add some style here as well.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=61)** So the glasses we're going to use is going to be the btn btn-outline-light, because we're going to have a black navbar, and me-1.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=73)** Okay, perfect.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=74)** Let's see what happens here.
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=77)** Now we have a top bar, black, and we have a button for the login.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=81)** Perfect.
>
> **[1:23](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=83)** However, if the user is authenticated, it doesn't make sense to have a login button here, right?
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=88)** So let's add some logic to change that.
>
> **[1:31](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=91)** Let's go back to the code.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=93)** So what we can do here is add an if statement to see if the user is authenticated.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=102)** If the user is authenticated, what we're going to do is add a logout logic.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=107)** However, if the user is not authenticated, this means else, then we're going to show the Login button.
>
> **[1:56](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=116)** Finally, we can end our if.
>
> **[2:01](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=121)** Okay, so the way we add a logout logic here will depend on the version of Django that you are running.
>
> **[2:08](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=128)** On versions 4.x or below, it's very simple.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=133)** We just need a link here.
>
> **[2:16](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=136)** So we can copy these, Django 4.0, and we can have the logout URL and a Logout.
>
> **[2:28](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=148)** And that's it.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=149)** However, if you are running a version that is later or the same as 5.0, this link won't work.
>
> **[2:37](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=157)** This is because now, logout must be a POST request instead of a GET.
>
> **[2:43](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=163)** Thankfully, we know how to make a POST request.
>
> **[2:46](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=166)** We need a form.
>
> **[2:48](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=168)** What we can do here is to wrap our button into a form to actually make a POST request.
>
> **[2:54](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=174)** So let's do that.
>
> **[2:56](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=176)** So let's remove this, and I am going to change here.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=181)** So if you're using 5.0+, you have to do this.
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=185)** Let's create a new form, okay?
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=189)** The method must be post.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=192)** We need an action URL.
>
> **[3:14](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=194)** So in this case here, we're going to pass the logout URL.
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=199)** So it's the same URL, but now we're going to do a POST method and some class with some style.
>
> **[3:25](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=205)** So d-inline here.
>
> **[3:29](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=209)** Perfect.
>
> **[3:30](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=210)** Remember, because this is a form, we're making a POST request, we need our security token.
>
> **[3:36](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=216)** So let's add the csrf-token here.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=221)** And now we need a button called Logout.
>
> **[3:45](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=225)** And this button must have the type submit.
>
> **[3:50](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=230)** And then we can pass the same style as the login here.
>
> **[3:54](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=234)** Okay, let's go back and check what happened.
>
> **[3:59](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=239)** Because I am authenticated, instead of showing the Login, it is actually showing me the Logout page.
>
> **[4:05](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=245)** Awesome.
>
> **[4:06](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=246)** Since we're already here and we have a navigation bar, let's also add a button to the homepage.
>
> **[4:13](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=253)** So we can actually copy this here, and we can add this, if the user is authenticated, a Home button, and then we're going to pass the URL to be home.
>
> **[4:28](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=268)** Let's go back, let's refresh.
>
> **[4:30](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=270)** And there you go.
>
> **[4:32](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=272)** Done and done.
>
> **[4:33](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=273)** Now we have our whole app and a navigation bar fully working.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), pass (5), this, (3), else, (1), finally, (1)
> **Env Vars:** url (7), post (5)
> **API Endpoints:** post  (5)
> **CLI Commands:** make (3)
> **Versions:** 5.0 (2), 4.0 (1)
> **File Paths:** base.html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Finishing touches
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=0)** - [Instructor] Okay, we are so close.
>
> **[0:02](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=2)** It is time to add it all together.
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=5)** So let's go to static, templates, base.html.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=10)** And then in here what we're going to do is add a nav, so a navigation bar.
>
> **[0:16](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=16)** We need a couple of classes here.
>
> **[0:17](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=17)** So let's add navbar navbar-dark, and a dark background.
>
> **[0:27](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=27)** Okay, inside of it, we're going to need a div.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=30)** And this div must have a class, ms-auto.
>
> **[0:36](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=36)** And then in here we can add a link.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=39)** Okay, so let's add a link to the login page.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=44)** So in here, let's add href, that has the command URL, login, and then some classes here.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=56)** Let's make this a button.
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=58)** So btn btn-outline-light.
>
> **[1:03](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=63)** And let's add some space in here.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=65)** Okay, let's try this out.
>
> **[1:09](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=69)** Amazing.
>
> **[1:10](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=70)** So you can see here that now we have a Login button, but it doesn't really make sense, you have a Login button for a logged in user.
>
> **[1:17](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=77)** So we can see here that we have a logged in user.
>
> **[1:21](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=81)** So let's add some logic to change this.
>
> **[1:23](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=83)** So if it's an authenticated user, we want to display the logout URL, not the login.
>
> **[1:29](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=89)** So in here, what we can do is use an if statement.
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=95)** So if user.is_authenticated, yes, this is the same method as we used before.
>
> **[1:43](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=103)** We're going to display something.
>
> **[1:45](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=105)** And then if else, we're going to display something else.
>
> **[1:50](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=110)** And then we need to end the if.
>
> **[1:53](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=113)** Okay, so now if the user is authenticated, we don't want to show the Login, we want to show the Logout.
>
> **[2:01](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=121)** Same thing here, Logout.
>
> **[2:06](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=126)** Okay, let's see how that goes. I'm going to refresh.
>
> **[2:11](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=131)** Okay, now I have a Logout.
>
> **[2:13](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=133)** If I try this, I'm going to get my end message.
>
> **[2:17](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=137)** And now I'm going to see the Login, because I'm not authenticated.
>
> **[2:20](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=140)** So let's try that. Let's authenticate here.
>
> **[2:25](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=145)** And there you go. So we have our Login, Logout.
>
> **[2:29](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=149)** We can use the same logic to add other things.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=152)** So for instance, if a user is authenticated, we also want to have a Home button.
>
> **[2:39](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=159)** So they can go to notes.list.
>
> **[2:43](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=163)** And a Create button.
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=165)** So they can go and create a new note.
>
> **[2:51](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=171)** But if they are not authenticated, we also want to display the signup option.
>
> **[2:56](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=176)** Signup, and then signup.
>
> **[3:01](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=181)** Okay, so let's try this out.
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=185)** I'm authenticated.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=187)** If I click Home, I'll see the notes that I have.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=190)** If I go to Create, I'll go to the create page, and if I log out, I can see the message saying that I'm logged out.
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=199)** What I can do now as a logged out user is actually signing up.
>
> **[3:24](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=204)** So let's try something different.
>
> **[3:26](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=206)** I'm going to add a username, django.
>
> **[3:31](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=211)** Let's add some passwords here. Let's submit.
>
> **[3:36](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=216)** Okay, so it redirects me to the login page, so I can try my new user.
>
> **[3:44](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=224)** And there you go.
>
> **[3:45](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=225)** Now if you create a new note here, we have our first project up and running with the full authentication cycle.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), static (1), class, (1), this. (1), else, (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **File Paths:** base.html (1)
> **Code Identifiers:** is_authenticated (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### </> Code challenge: Create a share link for a public note
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=5)** - [Narrator] I hope that you enjoyed the challenges we had so far and that you're ready for the last one.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=11)** Okay, so we have a full working app, but as with any good software, we can add a new functionality still.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=19)** In the last challenge, we added the functionality to change a note from private to public.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=24)** Now we can add a new functionality so we can have a link to share public notes with our friends.
>
> **[0:31](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=31)** To do that, we need to create a new view that won't require a logging, and we need to make sure to only allow public notes to be visible through that link and that private notes can never be seen to anyone else that's not authorized.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=47)** That's it.
>
> **[0:48](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=48)** That's our last functionality, good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), private (2), require (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### Solution: Create a share link for a public note
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=0)** - [Instructor] To create a share link, we can copy the DetailView that we have before.
>
> **[0:11](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=11)** Then we can remove the necessity of the login required and call it NotesPublicDetailView.
>
> **[0:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=19)** Perfect. That would make any note public, which is not what we want.
>
> **[0:24](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=24)** So what we can do is leverage the queryset again.
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=28)** And let's change the basic filter to filter just for public notes.
>
> **[0:38](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=38)** Awesome.
>
> **[0:39](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=39)** Now we can actually create an URL using this view.
>
> **[0:44](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=44)** So we can come here, and let's copy this DetailView here.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=50)** And let's call this a share link.
>
> **[0:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=54)** And then, PublicDetailView.
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=58)** And share.
>
> **[1:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=60)** That's it.
>
> **[1:01](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=61)** That's as straightforward as it gets.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=64)** Let's go to our system to check it out.
>
> **[1:06](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=66)** This is a public note, but as we can see, I'm actually logged in, so I have the right to see this note.
>
> **[1:13](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=73)** Let's try to access the share link.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=76)** Okay, it's the same template, everything is the same.
>
> **[1:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=79)** But because I'm logged in, it shouldn't make any difference.
>
> **[1:22](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=82)** Let's try to log out.
>
> **[1:25](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=85)** And access the same link.
>
> **[1:28](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=88)** Perfect. I can see this note because it is public and I'm using the share link.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=94)** However, notes number 2 is private.
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=98)** Okay. So I don't have access to it because it's private, and it's returning a 404, which makes total sense to what we want.
>
> **[1:47](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=107)** Unauthorized users should never see a private note.
>
> **[1:51](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=111)** So that's it.
>
> **[1:52](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=112)** We have a full functionality of sharing notes publicly and never sharing any private notes.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=120)** I hope you have enjoyed the challenges and learned a lot on the way.
>
> **[2:04](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=124)** And I hope also that you fell in love with the Django documentation as much as I do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (4), private (4)
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=0)** - [Leticia] We've reached the end of our course.
>
> **[0:03](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=3)** Now you're ready to build complex systems with Django and you can do it with full authentication flows.
>
> **[0:10](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=10)** This is a huge deal!
>
> **[0:13](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=13)** It's one of the best selling points about, "Start Coding with Django," but it doesn't stop there.
>
> **[0:18](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=18)** If you want to continue on Django, here's a few things I recommend.
>
> **[0:23](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=23)** I created a second course here on LinkedIn Learning called, "Unit Testing in Django."
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=28)** This course will use the system you've created on this course to learn how to create unit tests, making your system more reliable.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=37)** Being able to test software systems properly is a major skill that all developers should learn, so I highly recommend you to check it out.
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=47)** Next, if you're interested in incorporating APIs into your applications, I'd look at Django REST framework.
>
> **[0:56](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=56)** And finally, if you want to expand your knowledge, there are some other great courses on Django and Python here in LinkedIn Learning Library.
>
> **[1:05](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=65)** Take a look through and watch a few more, cheers!

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), finally, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Env Vars:** rest (1)
> **Speakers:** - [leticia] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/django-esst-2894047/codespaces)

## Skills Covered

- Python (Programming Language)
- Django

## Path Context

### In [[Become a Django Developer]]
**1 of 4** | [[Django- Forms]] →

## Appears In

- [[Become a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)