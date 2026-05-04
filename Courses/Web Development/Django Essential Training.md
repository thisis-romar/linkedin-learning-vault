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
  - '[Become a Django Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Django%20Developer.md)'
next_courses:
  - '[Django- Forms](Django-%20Forms.md)'
path_nav: '[{"path":"Become a Django Developer","position":1,"total":4,"prev":null,"next":"Django- Forms"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/python-programming-language
  - skill/django
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Django%20Essential%20Training.md)

![Django Essential Training](https://media.licdn.com/dms/image/v2/D4E0DAQFTuPPdaSLTcw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733262351081?e=2147483647&amp;v=beta&amp;t=XLe1gkFdRncIi5ol51Ol3-FzcGdvmqaoleeCVU3tSCA)

# Django Essential Training

> Django is a robust and powerful framework with a lot of moving parts. Django is one of the most robust and useful frameworks out there. With Python's popularity increasing and new features being released (such as extensive async support), Django will likely increase even more its presence at many top-quality companies. Although starting a new project can be quite easy, there is a lot to uncover. T

> [LinkedIn Learning](https://www.linkedin.com/learning/django-essential-training-25094632) | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [What is Django?](#what-is-django)
  - [What you need to start a Django project](#what-you-need-to-start-a-django-project)
  - [Utilizing the Django documentation](#utilizing-the-django-documentation)
  - [Using Codespaces in this course](#using-codespaces-in-this-course)
- [**1. Starting Your Django Project**](#1-starting-your-django-project) (4 videos)
  - [Creating a new Django project](#creating-a-new-django-project)
  - [The model view template](#the-model-view-template)
  - [Minimum working page](#minimum-working-page)
  - [Creating your first Django template](#creating-your-first-django-template)
- [**2. Django Built-In User Management**](#2-django-built-in-user-management) (3 videos)
  - [Django admin: Easily visualizing and creating data](#django-admin-easily-visualizing-and-creating-data)
  - [Migrations: Making database changes easy](#migrations-making-database-changes-easy)
  - [User authentication in two simple steps](#user-authentication-in-two-simple-steps)
- [**3. How Django Interacts with Databases**](#3-how-django-interacts-with-databases) (6 videos)
  - [Introduction to ORMs](#introduction-to-orms)
  - [Creating your first model](#creating-your-first-model)
  - [Using admin for data creation and manipulation](#using-admin-for-data-creation-and-manipulation)
  - [Using Django shell for creating and querying data](#using-django-shell-for-creating-and-querying-data)
  - [</> Code challenge: Adding likes to notes](#code-challenge-adding-likes-to-notes)
  - [Solution: Adding likes to notes](#solution-adding-likes-to-notes)
- [**4. Building Dynamic Webpages**](#4-building-dynamic-webpages) (6 videos)
  - [Creating a dynamic template](#creating-a-dynamic-template)
  - [Creating your first Django dynamic webpage](#creating-your-first-django-dynamic-webpage)
  - [How can Django can list data with just some small changes](#how-can-django-can-list-data-with-just-some-small-changes)
  - [Introduction to Django class-based views: A few classes have the power to change the world](#introduction-to-django-class-based-views-a-few-classes-have-the-power-to-change-the-world)
  - [</> Code challenge: Showing just popular notes](#code-challenge-showing-just-popular-notes)
  - [Solution: Showing just popular notes](#solution-showing-just-popular-notes)
- [**5. Building Robust Front-Ends in Django**](#5-building-robust-front-ends-in-django) (5 videos)
  - [Static files in Django](#static-files-in-django)
  - [An HTML skeleton: How to set up a base structure to every Django template](#an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template)
  - [It's time to add some style](#its-time-to-add-some-style)
  - [</> Code challenge: Dividing a template into smaller parts](#code-challenge-dividing-a-template-into-smaller-parts)
  - [Solution: Dividing a template into smaller parts](#solution-dividing-a-template-into-smaller-parts)
- [**6. Django Forms: Validation Shouldn’t Be Hard**](#6-django-forms-validation-shouldnt-be-hard) (5 videos)
  - [Create a webpage](#create-a-webpage)
  - [Understanding how Django handles security in POSTs](#understanding-how-django-handles-security-in-posts)
  - [Django forms: Powerful validation with minimal work](#django-forms-powerful-validation-with-minimal-work)
  - [Django forms are useful for layout as well](#django-forms-are-useful-for-layout-as-well)
  - [Codespaces error and the solution](#codespaces-error-and-the-solution)
- [**7. Working with Existing Data**](#7-working-with-existing-data) (4 videos)
  - [The U in the CRUD: Updating data](#the-u-in-the-crud-updating-data)
  - [The D in the CRUD: Deleting data](#the-d-in-the-crud-deleting-data)
  - [</> Code challenge: A button to add a like to a note](#code-challenge-a-button-to-add-a-like-to-a-note)
  - [Solution: A button to add a like to a note](#solution-a-button-to-add-a-like-to-a-note)
- [**8. Using Django to Store and Display User-Specific Data**](#8-using-django-to-store-and-display-user-specific-data) (5 videos)
  - [How to update data stored in your database](#how-to-update-data-stored-in-your-database)
  - [Template for update](#template-for-update)
  - [Endpoint and template for deleting](#endpoint-and-template-for-deleting)
  - [</> Code challenge: Mark a note as public or private](#code-challenge-mark-a-note-as-public-or-private)
  - [Solution: Mark a note as public or private](#solution-mark-a-note-as-public-or-private)
- [**9. Login, Logout, and Signup Are Simple**](#9-login-logout-and-signup-are-simple) (5 videos)
  - [Adding login and logout pages](#adding-login-and-logout-pages)
  - [Adding a signup page](#adding-a-signup-page)
  - [Finishing touches](#finishing-touches)
  - [</> Code challenge: Create a share link for a public note](#code-challenge-create-a-share-link-for-a-public-note)
  - [Solution: Create a share link for a public note](#solution-create-a-share-link-for-a-public-note)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Django?](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/what-is-django?u=76281980&t=0)** - [Instructor] Who doesn't want to build applications super fast with a great structure and simple framework? We also need phenomenal security and user authentication built in to make sure we have a reliable system. One of the best frameworks for doing this is [Django](../../Skills/Web%20Development/Django.md). Django is an open source framework for building web apps quickly and with very little code. In this course, we'll cover the essentials and we'll build a working application from start to finish. We go through signup, login, creation and deletion of content, the whole flow. I'm Leticia Portella. I'm an oceanographer that fell in love with programming and after teaching myself how to program, I've been working as a software engineer for many years. Join me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course as we dive into Django and start building your first application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What you need to start a Django project](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/what-you-will-need-to-start-a-django-project?u=76281980&t=0)** - [Leticia] There are a few things you need to get the most out of this course. You will need a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.8 virtualenv, and you must install [Django](../../Skills/Web%20Development/Django.md) 3.2, but should also work with later versions of Django. This is a simple install. You'll just install Django and you'll get the latest version. We also need an editor. I'll use VS Code, and a browser, I'll use Chrome, but feel free to choose the tools you think are best for you. You might want to have at least some familiarity with HTTP and an idea of its methods. This will help you have a solid foundation and understand everything even better. And finally, we're going to host our exercises on [GitHub](../../Skills/Software%20Development/GitHub.md), so you can check it out. If you need a refresher on any of this, check out some courses here in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Prerequisites:** install (3)
> **Versions:** python 3 (1), 3.2 (1)
> **Tools:** vs code (1), github (1)
> **CLI Commands:** python (1)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Speakers:** - [leticia] (1)

#### [Utilizing the Django documentation](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/utilizing-the-django-documentation?u=76281980&t=0)** - [Instructor] [Django](../../Skills/Web%20Development/Django.md) has one of my favorite features a framework can have, it has an extensive and impressive documentation. Django was created within a newspaper, so from the get go, their documentation was a major focus of its developers. It has been known for having one of the best documentations for a framework out there. And an important part of working with Django is getting yourself familiarized with it and knowing how to leverage all its potential in your favor. One of the most important skills we can develop while programming is getting the information you need to complete a task. That's why we designed some challenges that will stimulate you to go beyond what we learn in the classes. The idea is that you put that nice brain to work and really try to get the answers by using the resources available in the Django documentation. If you can't figure it out, don't worry, we have videos where I'll solve the challenges, but I highly recommend you to try to find the answers even after you know where it should be, and read what's written in there. It might sound silly, but getting yourself familiarized with the way the docs frame the answers will be extremely beneficial to you and your career. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (4)
> **CLI Commands:** find (1)
> **Documentation:** the docs (1)
> **Speakers:** - [instructor] (1)

#### [Using Codespaces in this course](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=0)** - [Instructor] You can choose where you want to do this course, but one cool feature we have available now is that you can do our entire course in your browser using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). To do that, you can access the link of the course on GitHub. Then you can come here, click on Code, then you can come to this plus button and create a new codespace online. Okay, so it may take a little while, but GitHub will open a new tab on your browser and create the environment for you. If you're familiar with, you'll see that it looks very much like the VS Code workspace that you can install in your own computer, but everything is online and accessed through your browser. You can see here that the files are on the left side, and in the center, will be able to edit the files, and down below, we have a terminal we can access the machine. Let's make sure our environment is installed correctly. If we type [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) --version, we'll see here that we have Python installed with version 3.10. We can also use pip freeze to see which packages are installed. In my case here, you can see that I don't have [Django](../../Skills/Web%20Development/Django.md) installed, so I can use pip to install it. So pip install Django. Okay, we can see that we successfully install Django 5.1,
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-codespaces-in-this-course?u=76281980&t=95)** which is the latest version I have available. Awesome. We're all ready to start, and you can do this in Codespaces or your computer, but you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Django](../../Skills/Web%20Development/Django.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** pip (3), python (2), make (1)
> **Tools:** github (3), vs code (1), terminal (1)
> **Prerequisites:** install (4)
> **Versions:** version 3 (1), 5.1 (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Starting Your Django Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a new Django project](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=0)** - [Instructor] With [Django](../../Skills/Web%20Development/Django.md), we can have a whole project working in a matter of minutes. We can start our project by using a Django command called django-admin, and then a sub-command, startproject, then the name of our project, smartnotes, and then . to indicate we want to create the project in this folder. Okay, so this command creates two things, a manage.py file and a folder called smartnotes, the same name we gave our project. The manage.py file will be the entry point of your project. With it, you'll be able to run your project server, manually work with the database, and much more. If you look inside the smartnotes folder, you'll notice that all the files here are related to the configuration of your project. The two main files you'll use here are the urls.py file, where you're going to configure, well, the URLs of your project, and the settings.py. Let's take a quick look into the settings.py. You can see here that there is a lot of global variables being defined. For instance, the DEBUG = True here tells Django that we are working in a development environment. Because we're in this safe development environment, it can return much more information when something goes wrong
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-new-django-project?u=76281980&t=92)** than it would in a production environment. You don't really have to understand everything it has right now. We'll get to it eventually. The only thing you need to know is that this is where you have the base of your project. As magic as this sounds, you already have everything you need to run your project. You can use [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), then the file manage.py, and the command runserver to create a server using the default configurations we have right here. We can see here that there is some warnings in red, but you don't have to worry about it for now. You can also see that we're using Django version 3.2, and that the configuration file being used is the smartnotes.settings. This means that this server is using this settings.py inside the smartnotes folder as the basis of it. You can also see that it gives a link to a webpage hosted in the port 8000 of your localhost. This means that your project is up and running on your computer, and you can access it by using your browser. Let's click here and see what happens. Yes, you can see here that it'll open a webpage with the default layout. This means that you have successfully created and ran your first Django project. Congratulations!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **File Paths:** manage.py (3), settings.py (3), urls.py (1)
> **Definitions:** means that (3), is a  (1)
> **CLI Commands:** python (1)
> **Ports:** port 8000 (1)
> **Env Vars:** debug (1)
> **Versions:** version 3 (1)
> **Analogies:** for instance (1)

#### [The model view template](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=0)** - [Instructor] When dealing with big [Software Projects](../../Skills/Software%20Development/Software%20Projects.md), we need to make sure we are not creating a mess. The way we do this is to compartmentalize our project into smaller sections that have clear boundaries from day one. That's why [Django](../../Skills/Web%20Development/Django.md) created the concept of apps. Let's create one to understand it better. We'll use again the Django admin command to create a new app called home. (keyboard clacks) You can see now that we have two folders, smart notes, which is our settings folder and Home, which is the Django app we just created. Every time we create an app, we need to add it to the settings file so that it knows that that folder is part of the project we are running. Let's open the settings.py file and add the name of our app in the installed apps variable. In order to make things a bit more organized, I always leave a small comment separating this app created by us from those that were already installed by default. Okay. Now that we have our project started, our app configured, it's time to create our first view. Let's go to the home, then go to the views file and write our first function. As you can see, this is a pre-configured file. So we need to create our functions here. Let's import from django.http import HttpResponse.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=101)** We can delete this, and, now, we create def home. It receives a request, and it return an HTTP response with a simple message, "Hello, world". As you can see, this function is saying that every time it receives a request, it will return a response with the text "Hello, world". Okay, but how does it know when to send requests to this function? Well, that's why we have the urls.py file. We can go back now to the smart notes, urls.py, and import this file there so we can have access to this function. So from home, let's import views, and, now, here, inside the URLs patterns, we're going to add a new path. Let's call it home, and let's say views.home. Okay, so let's run our server again and see what happens if we go to the local host 8000. Yeah, so now, instead of that beautiful page we had, because we have something implemented and not just the default configuration, we start to receive a 404, which makes sense because we never implemented anything here. However, because we have the debug equals true on the settings file, Django will list the endpoints that this project has available,
>
> **[3:15](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=195)** and guess who is there? Yes, our home endpoint we just created. Now, if we go to local host home, we can see that we have the "Hello, world," being displayed, amazing, right? Let's take a moment here to understand what's happening. When a person goes to the home endpoint, they're making a request to that path. Django will go to the urls.py file to see if it's ready to receive a request at this path, since it is, it will go to the views file. Finally arriving to the function we defines. Since the function received a request, it can then respond with a message, "Hello, world". Django uses a common pattern as the way of structuring its project called Model View Template Framework or MVT. Views are responsible for handling requests and responses. In this video, you have learned that views can be as simple as functions and can respond with something as simple as pure text. There are yet two additional layers for us to get familiarized with, right? This additional layers will allow us to increase our project's complexity while being simple tools to work with. The model Layer handles the data and how it's stored, and we'll see more about it in Chapter 3. The template layer allow us to render
>
> **[4:49](https://www.linkedin.com/learning/django-essential-training-25094632/the-model-view-template?u=76281980&t=289)** the information coming from the database into lovely [HTML](../../Skills/Web%20Development/HTML.md) pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (7), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (5), open the (1)
> **File Paths:** urls.py (3), settings.py (1)
> **Env Vars:** http (1), mvt (1), html (1)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Minimum working page](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=0)** - [Instructor] Okay, it's time to learn how to return [HTML](../../Skills/Web%20Development/HTML.md) pages by using the amazing [Django](../../Skills/Web%20Development/Django.md) template language. Let's start by creating a folder called templates inside our app folder. And inside this folder, we'll also create another folder with the same name as our app, so let's call it home. This might seem weird, but it will allow us to quickly identify where a template is located, even if we don't know in which app we are on. This is a typical organization pattern for Django templates. Inside this folder, let's create a file called welcome.html. And inside it, we're going to add a basic HTML page. So, an html tag. Let's add a header with a title. So, SmartNotes. And then a body with just one, Welcome to SmartNotes. Okay, so now we can go back to the views file and change our base function. Instead of using the HttpResponse, we'll use the function render from the Django shortcuts that's already imported here. To use this function, we need to pass three parameters, the original request, the name of the template,
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=95)** and empty brackets. I know there is a warning here in the terminal that sounds a bit scary, but don't worry, this is normal and we'll get to it later. Let's save this file and check the home endpoint again. And voila, our beautiful HTML is now being rendered. You might be wondering why we left the empty brackets behind, right? Although we are writing an HTML page, Django is actually using a template framework to create the final HTML page that we see in the browser. We can use the brackets at the end of the function as a way of passing down information from the view to the template. So let's import the datetime module and pass today's date into the dictionary with a key called today, datetime.today. We can then modify our template to receive a variable called today by defining it between double brackets. Today is {{today}}. Let's save it and try it again. There it is. This is why we're not using pure HTML, but actually a backend framework for defining templates
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/minimum-working-page?u=76281980&t=190)** called Django template language, or DTL. The HTML file we wrote will pass through the DTL mechanism and it'll insert the variables passed on the dictionary of the render function down to the template. This looks simple now, but DTL allow us to use sophisticated programming logic for creating dynamic HTML pages with very little effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (10), [Django](../../Skills/Web%20Development/Django.md) (5)
> **Env Vars:** html (8), dtl (3)
> **Exercise Files:** template (8)
> **Definitions:** is a  (2)
> **File Paths:** welcome.html (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Warnings:** warning (1)

#### [Creating your first Django template](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=0)** - [Instructor] Earlier, we talked why apps are a good way to organize our project. Let's take a minute to understand a bit more why this type of modularization is such an important concept. As you've seen, an app is a small library that is contained inside your [Django](../../Skills/Web%20Development/Django.md) project. We can have as many apps as we want. However, as the project grows, if we don't take care of it, things can start to get messy, and things will fly between the apps. That's why we need to understand what we need to do to make good Django apps. Good [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) should be well modularized, and your Django project should be no different. That's why each app should be self-contained, which means that everything you need for that app should live inside it. That's why we created the photo template inside it. The ideal app is one where you can delete the folder and do nothing else, the Django project just continue to work perfectly. So far, we're almost there, but there's still one thing that we need to do to clean things up. When we created our first endpoint, we had to import the views file from home into the urls file in the smartnotes folder. This creates a dependency that wouldn't allow us to quickly delete the home app. Let's make things a bit more organized.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=96)** Okay, so first thing is to create another urls file inside the home app. In here, we're going to create a file very similar to the one we have on the smartnotes app.
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-template?u=76281980&t=120)** And let's add the same endpoint that we had in the previous file, views.home using the home function. Okay, so now comes the fun part. In the smartnotes, let's get the urls file. We can delete the dependencies that we implemented here. And now, from the django.urls, we're also going to import the include function. Now, what we need to do is add an import path, but instead of using a function, we're going to use the include function here to pass that file as a string. So path, let's leave it open for now, and then let's include the home.urls file. Let's save this. And if we go back to the browser. Yes, as you can see here, nothing changed, except the fact that now, if we delete the whole app, this won't give any errors, because the app is not being imported on this smartnotes urls file. There, with just a couple of tweaks, we eliminated a dependency, and your project is following good standards of Django applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (6), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 2. Django Built-In User Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Django admin: Easily visualizing and creating data](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=0)** - [Instructor] Even though [Django](../../Skills/Web%20Development/Django.md) is typically known for the easy in which we can create endpoints, one of the most powerful features is the Django Admin Interface. It provides an interface so that site administrators, like you and me, can easily view and manipulate data. Let's check out how that works. Are you wondering what you need to get it? Nothing. The system comes by default. When you open the localhost 8000, you can see that, besides the home endpoint we created, the admin/ endpoint is also available. Let's open it. As you can see, this is a login interface, but what now? We didn't create any authentication system, right? Wrong. Django has the entire authentication system ready to go. The only thing we need to do is to make sure our database is properly configured. Let's go back, and, remember, when we had this red message while running the runserver? This message is letting us know that our project has some database changes that weren't applied yet. The way Django knows if the database is behind the system changes is through a couple of files called Migrations. Migrations explain what kind of changes a database need to perform, such as create a new table, establish a new relationship, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=94)** Django already has the migrations for the authentication system ready, so what you need to do is apply them to the database, and we do this by using the command migrate that will actually change the database. So what we can do now is run the command migrate. Okay. You can see here that the changes made are all regarding the admin and the auth apps. We don't see these apps because they come from Django by default, but they are there and they're ready to be used. You shouldn't worry too much about migrations now, we'll learn a lot about them in future classes. Since now our database is up to speed with Django, what we need is to create a superuser that will have all the powers that it can in this Django project. We do this by running the command createsuperuser. It's pretty straightforward. Let's make the username admin, I'm going to leave the email address empty, and then add admin as a password. As you can see, Django already has a couple of checks to guarantee we are creating secure passwords. You can bypass it for now, as I will, just because this is happening while we are developing this project locally. Never bypass it in production environments. Security must always be your number one priority,
>
> **[3:08](https://www.linkedin.com/learning/django-essential-training-25094632/django-admin-easily-visualizing-and-creating-data?u=76281980&t=188)** and Django is here to help you. Okay, now we can go back to the localhost 8000 admin. Well, first, let's run the server again. Okay. Now we can go back to the admin interface. admin, admin, Log in. And there you go. Now you have full access to the Django Admin Interface. And as you can see, we don't have any red messages now while we run the runserver, because our database is completely up to speed with the project. There you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (11)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Migrations: Making database changes easy](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=0)** - [Instructor] The [Django](../../Skills/Web%20Development/Django.md) admin interface allow us to quickly and easily access data that exists in the database. This means that Users and Groups, you can see here, are actually tables in our database. If we open the Users table, we can see that we already have one record. The admin user we created using the createsuperuser command. This is the one you're logged with right now. The interface also allow us to quickly filter the data by some of the characteristics of users. We can search for a user by staff status, superuser status, et cetera. You can also search by a characteristic on the search bar here. Let's create a new user, shall we? We have to go here on Add User, then add a username, and let's add a password, admin, admin, Save. As you can see here, we can't bypass the password check on the interface, so we actually need a really good password here. And let's click Save. Perfect. Now we have the user created. As you can see, to create a user, we just need the username and password, but there is more to it, such as personal information, permissions, et cetera. All this complex authentication user was created by Django by default, we just need to use it. One thing that I would like you to notice
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/migrations-making-database-changes-easy?u=76281980&t=95)** is that the password is encrypted, and that's why you're seeing a bunch of random characters here. By using Django's authentication system, you are also guaranteeing that your system is correctly and safely storing passwords. If we go back to the list of users, you can see now that we have the user we created. We can also select it and delete the selected user. As you are deleting data, Django prompts a second screen with the data you're deleting, so you can confirm that you want to perform this action. So let's click Yes, I'm sure. And there, we successfully deleted that user. If we go back to the homepage, we can also see that the interface lists the actions we made in the system, such as the creation and deletion of a user. As you can see, the admin interface is a nice and safe space to directly access data in the database. If your system doesn't require inputs from users, like a blog for instance, you can use this interface to create all the data you want and use the views to display it. It's simple and powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (4)
> **Analogies:** such as (2), for instance (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [User authentication in two simple steps](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=0)** - [Instructor] So far, you've learned that [Django](../../Skills/Web%20Development/Django.md) comes with a powerful authentication system already ready to be used. Now let's learn how to use it. First, let's go back to our home app and create a second template. Let's call it authorized. And in here, let's create a simple [HTML](../../Skills/Web%20Development/HTML.md) that has a title, you are in a restricted area. Now we can go back to the views file and create a very similar function to home. But this time we're going to display the authorized template, def authorized request. Then it's going to return render request. Now, let's add the home/authorized.html and empty square brackets. Yeah, so now we have exactly the same thing, and here comes the wonderful Django simplicity. In here, let's import from django.contrib.auth.decorators.
>
> **[1:16](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=76)** Let's import login_required. So now we can add this function as a decorator to our authorized function. That's it, that's all we need to do to block the access of this webpage if a user is not logged in. To finalize, let's go to the urls.py and add this as a path. So let's call it authorized. And views.authorized. Now we can go back and try to access the authorized endpoint. There you go, we can see the template we created. This is only possible because we're logged in via the Django admin interface. If we go back to the admin and log out. And try to re-access the authorized area, you see here that we get a 404, meaning that this page was not found. Why is that? Because we're not logged in. The complex authentication system just required a single line of code. However, a 404 is really not a nice flow. We want the user to know that they need to be logged in to access this page. The ideal flow is that we redirect them to the login page. To do this, we need to go back to the views file and add a perimeter called login_url. And let's pass this as slash admin.
>
> **[2:53](https://www.linkedin.com/learning/django-essential-training-25094632/user-authentication-in-two-simple-steps?u=76281980&t=173)** If we go back and try to access it again. And there it is. Since we are not locked in, Django understand that it needs to redirect me to the login URL, which for now was defined as the admin endpoint. How amazingly simple was to add authentication to this endpoint?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Cross-References:** go back to (4)
> **Exercise Files:** template (3)
> **File Paths:** home/authorized.html (1), urls.py (1)
> **Code Identifiers:** login_required (1), login_url (1)
> **Env Vars:** html (1), url (1)
> **UI Navigation:** go to (1)
> **Definitions:** defined as (1)


### 3. How Django Interacts with Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to ORMs](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-to-orms?u=76281980&t=0)** - [Instructor] So far, you've gotten familiarized with the user models, which were completely defined by [Django](../../Skills/Web%20Development/Django.md). Now, it's time to understand how to create your own models and how the structure of creating models work. Django uses an object-relational mapping system or ORM to handle database communication and changes. What you need is to write class models that will then be transformed by migrations into database tables. Each class, known as a model, is a database table, and each class attribute is a column. The way we transform a model into a database table is by the creation of migrations. Migrations will have the step-by-step transformation that a database must do to apply the changes made in the code. You've seen that we use the command Migrate to apply migrations to a database. Similarly, we can use the command MakeMigrations to create migrations based on the current code. The process of using a class, defining a model, creating a migration, and applying the migration and the changes to the database is the ORM's job, and Django's ORM is known for being one of the best ORMs for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** orm (3), sql (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Creating your first model](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=0)** - [Instructor] It is time for us to learn how to create a new model using [Django](../../Skills/Web%20Development/Django.md) ORM. Let's create a new app specifically for our notes. So django-admin start app notes. Okay, remember now we have to go to the settings and make sure that our new app is added in the INSTALLED_APPS variable. Okay, now we can go back to this new app and open the models.py file. Here is the file where we can create the models that we'll use in this app. So let's create a new class called Notes that we'll inherit from models.Model. This way, Django knows that this is a model that will have effect on the database, et cetera. It's time for us to think what attributes we want in our note. Well, first we can add a title. A title is a short text, so we can use the type CharField, which is a limited text field. CharField has a parameter called max_length, and we should set it to a value. Let's say 200. This means that our title can't be over 200 characters. We also need the note itself. And the note shouldn't have a limit. So instead of using CharField, we can use the type TextField. As you can see, TextField doesn't require a max length, differently from CharField.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=93)** We also want to know when this note was created. So we can add a field call created that is going to be a DateTimeField. Because we don't really want to worry about this field being correctly populated, we can add a perimeter called auto_now_add equals to True. This means that every time a note is created, this field will be correctly populated with the time that this note was created. So we don't really have to worry about it. There, our notes model is done. Every note we create will have at least a title, a text, and a date. Amazing. So what do we need to do now? I hope you guessed it right, we need to create migrations. Luckily, this is super easy to do. Let's type [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) manage.py makemigrations. Let's see what happened here. There is a new folder called migrations, and inside of it, there's a new file called 001_intial. Every first migration of an app will be named like this. If you open this, you can see that this is just a list of operations that instructs the database what needs to be done. So far, we haven't changed anything in the database. We just created the set of instructions. So everything continues as it is. What we need to do now is apply the migrations so we can run python manage.py migrate, and we're done.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-model?u=76281980&t=190)** The changes were applied to the database and we have a shiny new table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Definitions:** is a  (4), means that (2)
> **File Paths:** manage.py (2), models.py (1)
> **CLI Commands:** python (2), make (1)
> **Code Identifiers:** max_length (1), auto_now_add (1)
> **Env Vars:** orm (1), installed_apps (1)
> **UI Navigation:** go to (1), open the (1)
> **Cross-References:** go back to (1)

#### [Using admin for data creation and manipulation](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=0)** - [Instructor] We've already created a table for notes, but if you're curious enough to go to the [Django](../../Skills/Web%20Development/Django.md) admin interface, you'll notice that nothing really changed. Why is that? The same way we didn't have to create the user model, it was just there, we didn't have to configure it to appear on the Django interface. When we are creating a new model, we need to do it ourselves. So, let's go back to the notes app and open a file called admin.py. This is where we're going to add which models can be displayed, and thus modified, via the Django admin interface. First, let's create a class and call it NotesAdmin. This class should inherit from admin.ModelAdmin. Let's add pass here because we don't want any additional configuration on this admin model. Now, what we need to do is import from this folder, let's import models, and on the bottom of the file, we're going to register that that model is attached to this admin model. So, let's write admin.site.register, then models.Notes, and NotesAdmin. Okay, that's it. Let's go back to the admin and refresh it. There you go. Now we can see that the notes model is available on the admin interface.
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/using-admin-for-data-creation-and-manipulation?u=76281980&t=95)** Let's use the add button here to create a new note. Let's title My first Note, and then Django is so Amazing! Let's save this. Okay, we have our first note created. One thing that isn't really nice is that it is listed as this Notes object 1. This is fine for now, but if we have a long list of notes, how can we tell which one is which? Let's go back to the admin class. Instead of pass here, we can pass list display, which is going to be a tuple. And let's pass title here. Let's save this. It restarted. And now if we refresh here, there, instead of having this ugly name, we have the title of the note being displayed here. The default configuration of admin also allows that all fields can be changed by all users. However, we can edit the admin model class and start adding some specialized logic. We can remove some fields from being edited. We can allow only staff users to write notes. There's a lot we can do. The sky's the limit. Django admin is highly configurable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (5)
> **Cross-References:** go back to (3)
> **File Paths:** admin.py (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Using Django shell for creating and querying data](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=0)** - [Instructor] We've already learned how to do things via [Django](../../Skills/Web%20Development/Django.md) admin, but it's time to learn how to handle models through code. Django has a tool we can use to check the content of a database, which will make our lives so much easier, the Django shell. Let's go to the terminal and type [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) manage.py shell. You can see here that we have a Python interpreter. However, this is no ordinary interpreter. It is already tightly coupled with our project. For instance, we can type from notes.models import notes, which is the model we just created, and with this, we can use it to query the objects in the database. Let's try to get the first note. Mynote Notes.objects.get(pk='1').
>
> **[0:58](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=58)** There, we have our note. Notes.objects is the main way of accessing data from the note table in the database. The .get method will search for one object, which the pk, private, key is equal to one and returns that object. Now, we can use it to access attributes of the model by simply typing mynote.title or mynote.text. We can also query for all objects in the database by using the method .all. instead of the .get, Notes.objects.all. There you go, we only have one note so far. The return of this function is a query set, which is a very useful tool, but you can think of it as a list with superpowers. We can also create a new note via the comment line. Let's try it out, new_note, Notes.objects.create, then title="A second note", and then text="This is a second note". There, the note was added to the database. If we query it again, you can see now that we have two objects being returned. If you prefer, you can open the admin interface and check it out.
>
> **[2:32](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=152)** We can also filter notes that we want. For instance, we can query for notes that have titles starting with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) my, Notes.objects.filter, where the title__startswith the word My. Yeah, the filter also returns a query set, which, in this case, returns the first object. We can also search by something that exists inside the notes. For instance, we can try to find text that contains the word Django. So we type Notes.objects.filter text__icontains
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/using-django-shell-for-creating-and-querying-data?u=76281980&t=199)** the word Django. There you go. Only the first object has the word Django in the text. We can also query for the opposite. We can actually filter notes by excluding them. So let's do the opposite, Notes.objects.exclude, notes that the text contains the word Django. You can see now that the filter is returning the second note instead of the first. The fun part is that query sets can also be filtered, meaning that we can add multiple filters at once. For instance, we can filter all the notes containing the word Django, but the title doesn't say anything about Django. Right, text__contains the word Django, but exclude the ones where the title contains the word Django. There you go. As you can probably imagine, we can go on and on here with thousands of examples on how to query data. Django ORM has a very neat interface that is very intuitive and yet highly powerful. I highly encourage you to try more queries by yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (12), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (9), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Analogies:** for instance (4), think of it as (1), imagine (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Code Identifiers:** new_note (1), title__startswith (1), text__icontains (1), text__contains (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), open the (1)
> **File Paths:** manage.py (1)
> **Env Vars:** orm (1)

#### [</> Code challenge: Adding likes to notes](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-adding-likes-to-notes?u=76281980&t=5)** - [Instructor] In this chapter, you'll learn how to create a new model and update your database for the schema you defined in your model. However, as you've seen, we can never know everything we'll need in advance, so we're going to add a new feature to our notes model. The challenge is to add a new field to the notes model where you can store the number of likes a specific note have. Once you do that, you should change the database to be able to store this new parameter. To solve this challenge, you'll need a couple of things. You'll need to add a new field to the model class notes. You'll also need to figure out which type of field you should add so you can store the number of likes. You're also going to need to figure out how to populate notes that already exist because this is a new field, and we already have notes that have no likes. Finally, you need to figure out how to apply those changes to the database so we can actually store the number of likes. I hope you enjoy this challenge, and remember that documentation is your best friend. Try your best to figure out the answers before you move on to the next video where we'll have the solution. Good luck.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Adding likes to notes](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=0)** - [Instructor] We want to add a new field in the notes model to represent the number of likes a note gets. If we check the documentation, we can see that one option would be to use an IntegerField. They're supposed to represent an integer number, so all seems good, right? However, if we take a deeper look into our options and think about what we want, we can notice that it doesn't make sense to have such a large number available for us. An IntegerField can vary from this really low number to this really high number. This means that every new entry to the database will be huge in number of bytes used, even if that number is only one. We also don't care for negative numbers, as we don't want to support negative numbers of likes. So instead, we could use a PositiveSmallIntegerField. This means that values can range from 0 to about 32000. 32,000 likes seems like a good enough number for now. It'll also restrict our database size, and because the field is marked as positive, we don't need to add any extra validation if we are reaching a negative number, that's all wins. We also want that all notes start with the value of zero, right? And we can see that in the docs, all the fields have options we can add. If we look for it, we can see that every field type
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=94)** can receive a default value. Now we can easily add the numbers of likes to our models. Let's go back to the code. So in the Notes class, we're going to add number of likes. This is going to be a PositiveSmallIntegerField with a default of zero. However, this doesn't mean anything to our database. We need to tell the database what it needs to do. If you remember the second class of this chapter, you'll remember that you will need to do a migration. This is to create a set of instructions to actually change the database. The command is exactly the same as the one we used before. [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) manage.py makemigrations. Okay. We have a new migration. We can see here that [Django](../../Skills/Web%20Development/Django.md) will create a second migration starting with the number 0002. If we open the migration, we can see that this is a set of instructions. It has a dependency, which is our initial migration when we created the notes model, it has an operation, which is adding a new field that has the name likes, and is a PositiveSmallIntegerField with a default value. However, as you know, this is just a recipe. The database remains unaltered until we actually apply the migration. So let's do that. python manage.py migrate.
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/solution-adding-likes-to-notes?u=76281980&t=190)** There you go. Now you know how to change an existing model and apply this changes to the database. As always, Django has an extensive documentation about migrations that I highly recommend you to go through and get yourself familiarized with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Django](../../Skills/Web%20Development/Django.md) (2)
> **Definitions:** means that (2), is a  (2)
> **CLI Commands:** python (2), make (1)
> **File Paths:** manage.py (2)
> **Documentation:** the documentation (1), the docs (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 4. Building Dynamic Webpages

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a dynamic template](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=0)** - [Instructor] Now that we have our notes, how about we learn how to display them? Let's create a new view the same way we created the other one. So notes, views.py file, and let's start with importing the models and import notes. Okay, now let's create a function call list that receives a request and then a variable, all_notes that stores all the notes that we have in our database. Now, let's return the render function again, request a template that we're going to create a little bit later, notes/notes_list.[HTML](../../Skills/Web%20Development/HTML.md). And now the brackets with notes are equal to all_notes. This is not much different from what we did in the other view, except for one thing, we are querying for all notes and sending them to the template. This way, when the template is rendered, all the information coming directly from the database will be available. Before we jump to the template, let's organize URLs. So let's create a new URLs file here and that's going to have the same format. So from [Django](../../Skills/Web%20Development/Django.md).urls import path. Then let's import the views here,
>
> **[1:38](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=98)** and then the urlpatterns that has a list. Then here, the path, our endpoint's going to call notes because that's the list of notes. Then views.list, which is the function we just created. Amazing. The last thing is that we have to add this on the urls.py file on smart notes. So let's add comma here, then path. Let's add smart here, and then include notes.urls.
>
> **[2:16](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=136)** Amazing. By doing this, all the URLs that we are adding on notes.urls will be added after the smart. So smart's going to be a part of that endpoint. This is a really nice way of organizing our project. Okay, almost there. Now we need to create the template folder. So notes, new folder, templates, then a new folder, notes, and now we can add our template. Notes_list.html. Okay, now we can create our template. So let's start by html and h1, these are the notes. And I will start to use the powers of DTL. Bear with me just a little bit. So let's start with ul, and then curly brackets, two percentages, and in the middle, for note in notes. Okay, so in here we're going to add a line item, {{note.title}} close the curly brackets, and now we need to do curly brackets, percentage, percentage, and in the middle it's going to have an endfor. Okay, what's happening here? Everything that is between curly brackets is the django template language logic. Here, we're opening a list tag, ul,
>
> **[3:53](https://www.linkedin.com/learning/django-essential-training-25094632/creating-a-dynamic-template?u=76281980&t=233)** and then saying that for each note we receive in the template, DTL should create a list item, the li. Notice that commands such as the loop happen between curly brackets and percentages, while things that should be rendered by the template are between double brackets. So let's save this, then run this, runserver and open it. Okay, now we can see that we have a smart here. Then let's try this smart. We're going to have the notes and here are the notes. There it is, a webpage that is dynamically getting data from the database and adding it to the HTML. If we right click here and inspect the page, we'll see here that we actually have two line items. That's because we have only two nodes on the database. If we had many more, many more would be created. How easy was that? I encourage you now to go and create more notes, either via the shell or the admin and see what happens here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Django](../../Skills/Web%20Development/Django.md) (2)
> **Exercise Files:** template (10)
> **File Paths:** views.py (1), notes/notes_list.html (1), urls.py (1), notes_list.html (1)
> **Code Identifiers:** all_notes (2), notes_list (1)
> **Env Vars:** dtl (2), html (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating your first Django dynamic webpage](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=0)** - [Instructor] Now that we have a list of notes, how about we create a way to visualize details of a particular note? Let's go back to the notes app, views.py, and let's create a new function here. Now, this function should receive a second parameter called pk for private key. So let's go def detail(request, pk), okay.
>
> **[0:32](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=32)** Now, we can use this pk to go in the database and get that particular note. So note = Notes.objects.get(pk=pk).
>
> **[0:47](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=47)** Okay, and the common response, return render the request. Let's keep the pattern here, so notes/notes_detail.[HTML](../../Skills/Web%20Development/HTML.md), and then let's pass note inside the brackets. Okay, now, what we need to do is create the template. So let's go back here. New file, notes_detail.html, and let's create a simple html that has the title as note.title as an h1,
>
> **[1:30](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=90)** and then let's go a text here, note.text, and there you go. Okay, so there's one thing still missing, which is the URL. This needs to be a slightly different URL, because we need to be able to pass down the second parameter to that function. So let's do this by adding a new path here. So we're going to have notes then slash, the minor and greater sign, and pk, great, and, now, the views.detail. Okay, so what we're telling here is that this URL will receive a new value named pk that will be an integral number. Now, the only thing left to do is start the run server again (keyboard clacks) and test this out. So here, we have the notes, and if we pass now the pk for our first note, we can see the template displaying the details of the first note. Okay, so this works fine, but we still have a problem. The get method that we're using to get the note from the database will actually throw an error if you pass down a private key that doesn't exist. So if we tried the same URL but with, I dunno, 11 or something,
>
> **[3:05](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=185)** unless you have created 11 notes, this will raise an error. So let's try it out. Notice here that this is returning an exception of the type does not exist. We can also see here that there is a message with the exception saying, "Notes matching query does not exist." [Django](../../Skills/Web%20Development/Django.md) has an amazing traceback for us to understand where exactly the error happened. You can see right here that the problem is started in line 11 on the notes views.py file, which is exactly where we defined the query. We only have this paging explaining the error again because we continue to have the debug equals true in the settings file. In a production environment, the user would see a 500 error, which means an internal error. When an object is not found, the correct response is a 404 status code saying that that object does not exist. So let's change our code to make sure that we get the correct status code. Let's go back to the views file, and in here, let's import from django.http. Let's import Http404, okay? And, now, we can wrap this query in a try and except block, so try and except.
>
> **[4:42](https://www.linkedin.com/learning/django-essential-training-25094632/creating-your-first-django-dynamic-webpage?u=76281980&t=282)** If the Notes.DoesNotExist equals true, we're going to raise an Http404 with the message "Note doesn't exist." Okay, so if you go back now to the previous link and refresh, we're going to see here that this page is now returning a 404 with a message that we defined. This is a much nicer flow than the error we had before, because we're controlling the message to the user. If you can, we can actually create another template specifically for a 404 and return it with a nice message. It is completely up to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Django](../../Skills/Web%20Development/Django.md) (2)
> **File Paths:** views.py (2), notes/notes_detail.html (1), notes_detail.html (1)
> **Env Vars:** url (4)
> **Exercise Files:** template (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** notes_detail (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)

#### [How can Django can list data with just some small changes](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=0)** - [Instructor] So far, you've learned how to create views using functions. However, [Django](../../Skills/Web%20Development/Django.md) has a couple more features that we can leverage to get things even simpler. Welcome to Class-Based Views. Most views have similar patterns, and reinventing the wheel is something nobody really wants. Class-based views are extensive classes that implement typical view behavior and you just need to override a few things to make it do what you want. This will allow us to avoid the boring work and focus on the things that are unique to our project. Let's go back to our code and change our views that are function-based to the ones that are class-based and see in detail how class-based views work. The first view we made was in the home app, so let's go back and change it. The only thing we need to do here is display a template. So we can do that by using the class-based view template view class. So let's in here import from django.views.generic. import TemplateView. Okay, so now we can create a new class called HomeView that inherits from TemplateView. And the only thing we need to pass here
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=95)** is the template name. So we can copy here and paste it here. And that's it. We still need one more thing because our template requires some extra information. So we can add a variable called extra_context and now pass this dictionary here in it. We can delete this now. Oops, it's missing something. Okay, so now we can delete this function here. And we have our first class-based views. The last thing missing is that we need to change the way the URLs are defined. So let's go to the URLs and in here, instead of passing the home function, we're going to pass the home view class. And we need to call a method called as_view. You can see here now that the server is working just fine, so we can go back here and it's still working. So we can quickly do the same with the second function here, the authorized view. So let's create a class called AuthorizedView that also inherits from TemplateView. Then the template_name, we're going to have this here.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=186)** Oops, there's an extra space here. Okay. Okay. Because we don't have the extra attributes required here, we can just not pass the extra content. Okay, but we're still missing authentication. How do we handle authentication on class-based views? Well, to do that, we're going to need a mixing class. Mixings are helper classes that can be used along with other classes to provide additional features. For this case, we'll use the login required mix in. So let's go back here and we can remove this now and use the from django.contrib.auth.mixins. We can import LoginRequiredMixin. The only thing we need to do here now is make sure that this class, which is a mixin, is added before the template view. Okay, the last thing missing is the login URL. So we can actually go here, add the login_url, that's still pass the admin, and that's it. So we can remove this now, fix the URLs to be AuthorizedView.as_view, and that's it.
>
> **[4:34](https://www.linkedin.com/learning/django-essential-training-25094632/how-can-django-can-list-data-with-just-some-small-changes?u=76281980&t=274)** As you can see here, things are quite nice and well organized. And you also don't have to remember the request is coming in and out of the function. Class-based views might not seem like the amazing features they are, but that's because we are still handling simple views. As the views increase in complexity, they become more and more amazing allies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3)
> **Code Identifiers:** as_view (2), extra_context (1), template_name (1), login_url (1)
> **Exercise Files:** template (5)
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Introduction to Django class-based views: A few classes have the power to change the world](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=0)** - [Instructor] We worked with templates, but now it's time for more complex views. Let's start with our last endpoint. On the notes, let's go to views.py file. And in here, let's import from [Django](../../Skills/Web%20Development/Django.md).views.generic import ListView. Okay, now we can start our class-based view. Let's go to create a class. So let's call it NotesListView that inherits from ListView. And we need to add here which model we're listing objects from. So let's add here Model = Notes. Okay. And because our template is expecting to receive a list called Notes, we should also add here that the context object name is different from the default. The default is objects, but we call it notes. That's it, that's our whole endpoint. The only thing we need to do now is change the endpoint URL. So let's go back here, then change list to NotesListView.as view, and that's it. We can go back here and also delete our old endpoint. We don't need it anymore. Okay, it restarted, so let's try it out. Instead of homes, we're going to go to smart notes. There you go.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=96)** You may be thinking, "What's happening here? Where is the query?" The list view is already making the query for us. We also don't need to define a template name because we created a template name that follows the standard of that class-based view. But if we add a different name, it might not work. So instead we can pass here an attribute called template name. You guessed it correctly. So we can say here, notes notes_list.[HTML](../../Skills/Web%20Development/HTML.md). Yeah, that's all we have to do for the list endpoint. Now we can go to the detail view. Can you guess what we need? Not much else, just import here DetailView. And then let's create the class. So class NotesDetailView that inherits from DetailView. Here we need model = Notes and context_object_name = to note.
>
> **[2:49](https://www.linkedin.com/learning/django-essential-training-25094632/introduction-django-class-basd-views-few-classes-have-the-power-to-change-the-world?u=76281980&t=169)** And that's it. Wait, just that? You might be thinking like, "What about the exception we throw when the object can't be found?" There's no need. The detail class-based view already take care of that for us. There is no need for us to handle any of that complexity. Let's change URL and give it a try. So in here, let's change detail for NotesDetailView.as_view. Let's go back then .1 and it works. And if we go to something that doesn't exist, yep, it's still returning a 404. Hopefully at this point you can already see how class-based views are an amazing feature of Django and we've only scratched the surface. There are very few case scenarios where you will prefer to create a function-based view as the ones you just replaced. In the vast majority of cases, a class-based view will be the ideal tool for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (5)
> **Exercise Files:** template (4)
> **Code Identifiers:** notes_list (1), context_object_name (1), as_view (1)
> **File Paths:** views.py (1), notes_list.html (1)
> **Env Vars:** url (2)
> **Speakers:** - [instructor] (1)

#### [</> Code challenge: Showing just popular notes](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=0)** - [Instructor] In this chapter, you've learned a little bit about class-based views and how powerful they are. Class-based views are pretty straightforward when we need something simple, but they can be a bit more challenging when you need to alter them. So let's try to get you a bit more familiarized with it. You learned how to list all notes. Now we want to create a second list view where we only want to display the notes that are popular, this is that have more than one like. Let's call it popular notes list view. To do that, you're going to need first to understand how a ListView retrieves data from our model. Second, you need to alter the QuerySet from the basic one listing everything to listen just what we want. This is a new filter. And third, you need to change how to query for notes that have more than one like, so how to actually implement that future. Although you can use the main documentation from [Django](../../Skills/Web%20Development/Django.md), for class-based views, I particularly like the website [ccbv.co](https://ccbv.co).uk. So Classy Class-Based Views. As I said before, do spend some time trying to do this on your own and checking the class-based views and how they work together, and only then come back for the solution
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-showing-just-popular-notes?u=76281980&t=93)** when you're ready, okay?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (1)
> **URLs:** [ccbv.co](https://ccbv.co) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Showing just popular notes](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=0)** - [Instructor] As I said, for class-based views, my go-to tool is the CCBV website, even more than the [Django](../../Skills/Web%20Development/Django.md) docs. We can go to the website and dig into ListView. I highly recommend you to take a look and get yourself familiarized with the kind of attributes and methods that this class-based view uses. They're pretty recurrent in all the class-based views. We can see here that there is an attribute called queryset. If we take a look at the methods, we can see that there is a method called get_queryset. There's a lot going on here, but as you can see, if there is a queryset defined in the class, this is if queryset is not none, the class will use it as a base for everything else. So what we can do here is leverage the attribute. Let's go back to the code. Let's copy the ListView into a new class called PopularNotesListView. And we're going to pass a queryset to it. Okay, so what we're going to do is Notes.objects, and if we pass all here, it will be the same as not having anything because that's the default for Django. But what we need here is a filter. Okay, so how do we actually filter here? Let's go back to the Django docs. In the Django docs, we have this page called Making queries, and if you take a look at it,
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=94)** we can see some practical examples. For instance, all of the functions in a filter are added to the field name with an __ between them. So for instance, we can check for __exact, or in, or greater than. This is exactly what we need. So let's finish our queryset. What we need here is to have likes to be __gte=1.
>
> **[2:09](https://www.linkedin.com/learning/django-essential-training-25094632/solution-showing-just-popular-notes?u=76281980&t=129)** Done. Now this view will only return notes that have one like or more. Querysets are a huge, powerful tool. The documentation on how they work and what kind of options you have is quite extensive, and you can line up several querysets to get even more powerful results. I would highly recommend you to take a read on the docs and get some ideas and examples in your head. Have a nice reading.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (4)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (1), the docs (1)
> **Analogies:** for instance (2)
> **Code Identifiers:** get_queryset (1)
> **Env Vars:** ccbv (1)
> **UI Navigation:** go to (1)


### 5. Building Robust Front-Ends in Django

[↑ Back to Table of Contents](#table-of-contents)

#### [Static files in Django](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=0)** - [Instructor] It is time to think about our project's front end. Our templates are too simple with just ATML on them, so let's add some colors! The first thing we need to do is create a folder where we're going to store all the static files, such as the CSS and [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, images, videos, et cetera. So let's go here, and create new folder, static. Now we need to tell [Django](../../Skills/Web%20Development/Django.md) that this is the folder it needs to look into when searching for static files. To do that, let's go to the smartnotes, then settings. Then in here, we can scroll down a little bit, and we're going to see here that there is a static URL already. Now we're also going to add static files, underline, dirs. This should be a list. And in here we're going to say, base dir, slash, static, which will lead Django to the folder we just created. Okay, now we can go back to the static, and create a new folder just for the CSS files, and one CSS file. Let's call it style dot CSS. Okay, so in here we can create a simple CSS file. Let's create a class called, note-li, color equals red. Really simple. What we need to do now is make sure that our template,
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=94)** and Django per se, recognizes this file. So let's go to the notes, and let's try the notes list file. Okay, in here, the first thing we need to do is actually tell Django that this [HTML](../../Skills/Web%20Development/HTML.md) is going to use the static files. So let's go curly brackets, percentages, and load static. Okay, now what we need here is to add a CSS file as we would in any HTML file. So let's create a head, then a link. So the rel is going to be stylesheet. The type is going to be text, CSS, and on the href, we're going to use the Django template language to add our URL. So let's call static, then CSS style dot CSS. That's it. That's all we need to do to have the CSS being rendered on this file. So let's go here on the LE, and add the class, which is going to be our class name, note dot LE, and let's save it. Okay? Let's try it out. I'm going to refresh this. And there you go. Now the notes are red because the CSS is being rendered and used in this file.
>
> **[3:09](https://www.linkedin.com/learning/django-essential-training-25094632/static-files-in-django?u=76281980&t=189)** If we open the inspector here, we can see here that the head is appearing. We have the href here being correctly rendered, and then each note here has the class that has the attribute of color red. If you hover this href, you'll notice that this is actually a link. So let's go here. Let's copy this, and then we can replace it here. And there you go. As you can see here, this is the file we just created. So actually, Django is locating the file, and loading it automatically into the templates. There you go. Now you can use CSS in all your templates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (12), url (2), html (2), atml (1)
> **UI Navigation:** go to (2), scroll down (1), open the (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [An HTML skeleton: How to set up a base structure to every Django template](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=0)** - [Instructor] As we've seen, it's pretty easy to add CSS files into [Django](../../Skills/Web%20Development/Django.md) template, but it would be quite exhaustive to need to always remember to add the CSS link to all templates we have in all our apps. If you're thinking that there must be a better way of doing this, you're absolutely right. What we need now is a base template. Let's create a templates folder in the static folder and a base.[HTML](../../Skills/Web%20Development/HTML.md) template in it. Okay, so in here, we can create a normal HTML file, so html, then head, then in here, we can have link (keyboard clacks) type's going to be text/css, then href, it's going to be the same loading of a static file that we had, css/style.css, okay? Now, we have to remember to load static on the top of the file, load static, and, now, we can create a body, perfect. Now, what we need to do here is add the following command, so curly brackets and percentage block content, and then, similarly, we're going to do another one, but, now, it's endblock. Okay, so I call this content, but you can call it whatever you like.
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=93)** The important thing here is to know that this is a block area where we can inject things. Let's try it out. Let's go back to the notes and open the notes list template. So in here, what we can do is extends "base.html". Now, what we can do is get rid of all this basic HTML stuff here and use this block content here. So block content, and in here, we can endblock. Okay, so what we're doing here, we're taking only the important part of our template and wrapping it on the block content command so this can be injected on the base template. Let's try it out. Okay, so we have a problem here. The template is showing as non-existent. What happens here? So you can see here where Django was trying to search for a base HTML template. So you can see that it tried in multiple places, including the two templates folder in home and notes app, but as you can see, the static folder templates is not being looked for. So what we need to do is tell Django where to look for. So let's go back. Then in here, let's go to settings file, and down below, we're going to find out
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/an-html-skeleton-how-to-set-up-a-base-structure-to-every-django-template?u=76281980&t=187)** that there is a templates, and there is a list of directories that we can add here. So similar to what we did on the static files, we're going to add that particular folder in here. So let's do BASE_DIR, and then slash, and then static/templates, okay? So it reloaded. Let's try it again, and there you go. So let's take a minute to understand what's going on here. What's happening here is that with this syntax, we can define the basics of our HTML in our base.html template, and then we create each webpage as a separate template that extends the base. So we will build each template separately and just the small parts, but we'll then inject it to the base template where we can have all our default configurations, such as the CSS files and the JavaScripts. This will allow us to keep each webpage template as simple as we can while keeping all the configuration in a single place. That's another power of the Django template language. Now that you know exactly how to use a base template, I encourage you to go back and try it out in all the templates we have so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (8), [Django](../../Skills/Web%20Development/Django.md) (4)
> **Exercise Files:** template (15)
> **Env Vars:** html (4), css (3), base_dir (1)
> **File Paths:** base.html (3), css/style.css (1)
> **Definitions:** is a  (4)
> **UI Navigation:** open the (1), go to (1)
> **Analogies:** similar to (1), such as (1)
> **Best Practices:** remember to (2)

#### [It's time to add some style](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=0)** - [Instructor] Okay so instead of defining all of the CSS, we want to speed up our front end a little bit. So let's use a CSS framework. We're going to use bootstrap for now. So what we need to do is on the static, base.tml, I'm going to change this CSS we just created with the link to the bootstrap framework version five. So we can go back, delete this line and that's it. I know it's a pretty big link so you can find it on the notes of this class. Okay, once we define this, we can start using it. So the first thing we can do here is on top of the block content, let's add a div.
>
> **[0:50](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=50)** And then on this div, let's add a class equals to my five, text center and container.
>
> **[1:04](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=64)** Okay, so now we can go to the home page and check the changes that the bootstraps already made. So let's go here. You can see here now that the style's a little bit better. We have more spacing, the text is in center, et cetera. So let's add a button on the homepage that will lead us to the list of notes. So let's go to home, welcome, perfect. Here, we can add, so it's going to be an A, href. Let's leave it empty for now. Then in here, we're going to use two classes, BTN for button and BTN primary for the style. Then check out these smart notes. Okay, so if we go back, we can see now that we have a button, but it doesn't do anything. So how do we deal with links here? We could hard code the link to our local host, but imagine that when we deploy our website, we need to remember to come back and change everything. Not so good. Thankfully, the [Django](../../Skills/Web%20Development/Django.md) template language has a function for that. What we need to do is the following. Let's open curly brackets and percentage and then use URL. And then in here, we're going to say notes.list. Okay you might be wondering, okay, how Django knows which endpoint to link.
>
> **[2:38](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=158)** It doesn't, and we need to tell it. So let's go back to notes URLs. And in here, what we're going to do is add a name. So we can give a name, notes.list. That's all we need for Django to define each endpoint we are pointing to, no matter if you're on local host or production. Let's test it out. Let's click here, and there you go. We're being redirected to this template that also needs some styling. We'll get there. So let's go back to this page and try to style it up a little bit. So let's go to notes list. And in here, we need a couple of things. So first, we can add some vertical styling here. So we're going to use my five here, okay? And let's use a couple of divs here to have some cards. So bear with me just a little longer. So in here, instead of the UL, we're going to use a div, and this div's going to have class is equal row. Row cols3 and g-2, then we're going to have another div here, and this div is going to have a class equals to call. Okay, and finally we're going to have another div
>
> **[4:17](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=257)** that is going to have a class=p-3 border. Okay. So this here is going to be a row, and we're going to have each card to be a column. So what we can do here now is say that for note in notes, we're going to have in here, let's add a title. So it's going to have here, note.title, and then let's end the four here. And let's leave it for now like this so we can remove this. Okay, let's check it out. Amazing. This would look a little bit better if we could display some of the text of a note, but not all of it. We can use the truncate charts function to do this. Let's try it out. So in here, let's add note.text, and then with the pipe truncate chars, let's just leave it at 10. So this is going to display 10 characters. So let's try it out. And there you go. So what's happening here is that Django is taking the text and just displaying the first 10 characters, plus the three dots. It looks a little bit better, doesn't it?
>
> **[5:51](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=351)** Okay, so it's still missing a couple of things, so we can't really access all the details of that particular note. So we're almost there. First, let's give a name to the detail URLs as well. So let's go back, url.py, and then in here, let's add name is equal to notes.detail. Okay, so now we can go back and in the title, we can add the link. So it's going to be an A with href is equal to the url,
>
> **[6:31](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=391)** and then notes.detail. Let's pass this to here. It's still missing something. So we also need to pass here, the pk. So the pk is going to be the node.id. Pretty simple. We can also add some classes here just to make it a little bit prettier. So let's pass class is equals to text dark, and text decoration non. Okay, reorganizing, that's it. Let's try it out. Let's go back, refresh. And you can see here that now we have a link to the specific note, but now we're still missing some details, style here. So let's go back, notes detail, and let's just add here, a div.
>
> **[7:37](https://www.linkedin.com/learning/django-essential-training-25094632/let-s-add-some-style?u=76281980&t=457)** This should be in here. And on this div, let's add a class border. Let's make it round, and just add some style on the H1. So my equals five. Okay, I think we're done here. Let's go back. Yeah, so all done. Now you have style and dynamically generated links. How amazing was that?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (4)
> **Env Vars:** css (3), btn (2), url (1)
> **CLI Commands:** make (2), find (1), node (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **File Paths:** url.py (1)
> **Analogies:** imagine (1)

#### [</> Code challenge: Dividing a template into smaller parts](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-dividing-a-template-into-smaller-parts?u=76281980&t=0)** - [Instructor] In this chapter, we learn how to create a base template and then use it throughout our project. However, even after doing that, sometimes the size of an [HTML](../../Skills/Web%20Development/HTML.md) page can become bigger and bigger, and we might want to organize it a little bit. In this challenge, you should add a new section into welcome.html template that lists the benefits of using this app. However, we'll do this on a different HTML file called advantages.html, and then we get it to be displayed inside the welcome.html template. To do this, you'll need to create a new HTML page, and then find out which function we use to insert one template in another. Notice here that this is different from what we did in our chapter where we extended a template, so be aware when you're looking for answers. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6)
> **Exercise Files:** template (5)
> **File Paths:** welcome.html (2), advantages.html (1)
> **Env Vars:** html (3)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Dividing a template into smaller parts](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=0)** - [Instructor] To insert and [HTML](../../Skills/Web%20Development/HTML.md) page inside another one we can check the template's documentation. Although it might take you a couple of tries to find it there is a list built in things that you can do with templates and one of them is the function include. So let's try it out. First, we can create a new HTML page inside home, templates home called advatnages.html. Okay so this can be a very simple HTML, just a list with two items, simple and powerful. Okay, then we can go to the welcome.html page and inside the blocked content that we have here we can insert our template. So we have the basic way that we define something inside a template then we can do include and then home, advantages.html. We can also include a title just so we can know that this is happening. Some advantages of our app. Let's put some style here just so we can have some space. Let's save this and check it out. Okay, so our list of advantages is showing up, but remember these organization things sound simple
>
> **[1:35](https://www.linkedin.com/learning/django-essential-training-25094632/solution-dividing-a-template-into-smaller-parts?u=76281980&t=95)** now that our app is small, but they can be super useful to think from day one. As a project grows even the most organized code can become tricky. Breaking things into smaller pieces can be quite useful thing to think from day one to keep things tidy up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6)
> **File Paths:** advatnages.html (1), welcome.html (1), advantages.html (1)
> **Env Vars:** html (3)
> **Exercise Files:** template (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Django Forms: Validation Shouldn’t Be Hard

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a webpage](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=0)** - [Instructor] Whenever we're building a system, there's a couple of common operations that we should support for every model we create. These are the create, read, update, and delete, or CRUD operations. These are the minimal operations that a system should typically support. So far regarding the notes model, we implemented the retrieve method by having an endpoint to get the details of a particular note. To fully support the notes model, we need to handle all the other three operations as well. Now we're going to learn how to implement a create method. Let's go back to notes, views.py, and in here, let's import, well, I hope you guess it, CreateView. Once we have this, we can actually start our new class. So class NotesCreateView that inherits from CreateView. And we're going to need three things here. So model = Notes, fields which is going to be ['title', 'text']. And finally, a success_url. That is going to be the '/smart/notes' which is our list endpoint. Let's understand what's going on here. First the model. So the endpoint understands what is regarding to.
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=96)** Then the fields will be the attributes from the model that we allow a user to fill. Since we don't need to pass a created add field, we just define it as title and text. Finally, we want to redirect the user to the list of existing notes so they can see the note they just created. This is the success_url attribute here. And that's it. That's all we need to do in this class. Now we can add the endpoint to the urls.py file, the same way we did to every other endpoint so far. So in here, let's add path 'notes/new', and then we can call views.NotesCreateView.as_view(). And let's not forget to pass a name to it. So "notes.new", and a comma here. Okay, so the last thing that's missing is the template. So let's create it. Let's call it notes_form.[HTML](../../Skills/Web%20Development/HTML.md). Okay, so let's use the default template. So extends 'base.html' and then the block content, and finally, the endblock. Okay, so now we can start. To send information back to the server,
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=190)** we'll need a form tag from the HTML. So let's add this here. Okay, so in the form we can do action is equal to, we're going to use the method url and then notes.new, which is the endpoint we just created. And also the method here needs to be POST because we're sending information back to the server. Okay, so now what we need is to allow a user to pass back the information we defined on our endpoint, title and text. How do we do that? Well, this can't be more simple. In here, we can do double curly brackets then form, and that's it. Want to see what happens here? Let's go back to the browser and try out our new endpoint. So in here we can open the inspector element. And you can see here that in the body we have a form, and the form is actually passed down to the HTML as two label tags, and one input tag and one text area. This is because [Django](../../Skills/Web%20Development/Django.md) already knows which type of data each attribute expects. Thus it creates an appropriate HTML tag to receive it. Well, we're still missing the submit button, so let's add that. So in here, let's add button type="submit."
>
> **[4:50](https://www.linkedin.com/learning/django-essential-training-25094632/create-a-webpage?u=76281980&t=290)** The class is going to be ="btn btn-primary." Let's add some vertical alignment, Submit. That's it. Now we have everything we need in place. That is basically all we have to do to have an endpoint to create a new note.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Django](../../Skills/Web%20Development/Django.md) (1)
> **Env Vars:** html (3), crud (1), post (1)
> **File Paths:** views.py (1), urls.py (1), notes_form.html (1), base.html (1)
> **Code Identifiers:** success_url (2), as_view (1), notes_form (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **API Endpoints:** post
 (1)
> **UI Navigation:** open the (1)

#### [Understanding how Django handles security in POSTs](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=0)** - [Instructor] We did everything we needed to do to implement the create endpoint. But if you try to create a new note, you'll notice that it will actually return a 403 error, meaning that we are forbidden to do this action. Well, we're actually missing one less thing to our form. So if you go here, we can add {%, and then a csrf_token,
>
> **[0:28](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=28)** and that's it. So let's try again. We can go back. Refresh this page. So this is a new note. It worked. Let's submit. And yes, indeed it works. You're probably wondering, what is this magic that was missing? This is a CSRF token. That stands for Cross-Site Requests Forgery. What happens here is that every time a browser requests a webpage that has a form, [Django](../../Skills/Web%20Development/Django.md) will send a unique token to that browser. This token will be securely kept and no other website can access it. When the user sends back a form, it'll also send back the token, allowing Django to know that this request is coming from a legit user. Django will then process the request and return the appropriate response. However, if for some reason a third party have access to the user credentials, when they try to make the request from another browser, they won't have the token. So Django understand that this request is coming from an unreliable source and will not process the request, thus, preventing this type of attack. As you can see, this is an additional layer of security that Django is adding to your website with just a small line of code. Beyond the numerous features
>
> **[2:00](https://www.linkedin.com/learning/django-essential-training-25094632/understanding-how-django-handles-security-in-posts?u=76281980&t=120)** that allow you to speed up the process of creating a website, these security features are a big part of why developers choose Django to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (6)
> **Definitions:** is a  (2), stands for (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** csrf_token (1)
> **Env Vars:** csrf (1)
> **Speakers:** - [instructor] (1)

#### [Django forms: Powerful validation with minimal work](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=0)** - [Instructor] Adding a new endpoint was nice and easy, but now it's time to consider more complex scenarios. Model [Forms](../../Skills/Web%20Development/Forms.md) are the best way of doing this in [Django](../../Skills/Web%20Development/Django.md). Let's check it out. First, we're going to create a file called forms and inside our Notes app. Okay, so in here, let's add from django import forms and from .models import Notes. With this, we can create a new class called NotesForm that's going to inherit from forms.ModelForm, and inside this class, we're going to create a new class, Meta. Okay. That's going to receive model, which is Notes, and fields, just like we added on the class-based view for Create View. So title, and text. Okay. With this we can come back to the views.py file, and in here, instead of passing the fields, we're going to pass a form_class. That's going to be our NotesForm. We also need to import it, so from .forms import Notesform. Okay. So far what we did will result in exactly the same behavior as we have so far, but the form will give us power to do much more. For instance, let's say that we want
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=94)** to add a specific behavior that just allow us to add notes that contains the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Django in the title. Let's go back to the forms. What we need to do here is add a new method called def clean_, and the field we want to add a validation, in this case, title. So in here we can get the title from the cleaned_data, which is a dictionary. The cleaned_data is returned by the form and is particularly useful for fields with strong validation. Like for instance, emails. In this scenario, it will be exactly the same value as the user passed. With this, we can actually start our validation. So if 'Django' not in title: we're going to raise a ValidationError with a message, 'We only accept notes about Django!' If everything goes well, we just return title. Okay, so we have here the ValidationError already imported, and we can try this out. Let's go back to our browser. Let's add a new note, "A new note!" which is a test. Let's submit this, and we have our error. "We only accept notes about Django!" Okay, so this is pretty cool.
>
> **[3:07](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=187)** Django already injects the validation errors directly to our [HTML](../../Skills/Web%20Development/HTML.md). You can see here we have a ul that has a class errorList and a list of errors. This is pretty cool, but we can't really control the design, so let's change this a little bit so we have a really good ValidationError here. We can go back, and on our style.css, we can add here that the ul.errorlist is not going to be displayed. So we're going to control this. Then on the form template, we're going to add an if block. So if our form have errors, we're going to do something. So let's close the if, so we don't forget this, so endif. Then in here we're going to add a div, which is a class of type alert, and let's make it an alert-danger. Some vertical spacing. And in here, what we can do is pass the form.errors.title.as_text. Okay, let's go back, let's refresh this. And if I add a new note, which is a test,
>
> **[4:41](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-powerful-validation-with-minimal-work?u=76281980&t=281)** try to submit this. And there you go. Now you can add validations in any field you want with just a couple of additional methods in a form class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (7), [Forms](../../Skills/Web%20Development/Forms.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** cleaned_data (2), form_class (1), errorlist (1), as_text (1)
> **Definitions:** is a  (4)
> **Analogies:** for instance (2), just like (1)
> **File Paths:** views.py (1), style.css (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)

#### [Django forms are useful for layout as well](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=0)** - [Instructor] This form we just created, it's starting to look nice, but there's work to do here. It's still missing some style. An alternative would be to build the whole form by hand with each label and each input, everything. As you can see, this is not such a fun activity once you have a form already laid out for you, right? [Forms](../../Skills/Web%20Development/Forms.md) are amazing because not only they add validation, but also because you can quickly add styles to it. First, let's say that we want to change the labels of our form. Title and text are the words we use on the backend, but that doesn't mean that it looks so good for our users. What we can do is on the class Meta, add a field called labels. And in here, let's add text. It's going to be, "Write your thoughts here." Let's save this. Now, if we go back, and refresh this, as you can see, we are controlling the UX directly from our backend. We can also add an attribute widget to inject CSS classes directly to the form. Let's go back and add a new field called widgets. And then, in here, let's add title, and this is going to be a forms.TextInput. And then we're going to pass attributes.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=94)** This is going to be a dictionary, and the class is going to be form-control and some vertical spacing, as usual. We can do a similar thing with the text. So text, this on the other hand, is not a TextInput, but a TextArea. And also we're going to add, again, attributes. And let's add the same classes. The class is equal to form-control and this.
>
> **[2:12](https://www.linkedin.com/learning/django-essential-training-25094632/django-forms-are-useful-for-layout-as-well?u=76281980&t=132)** Let's go back and check it out. Refresh. Yeah. You can see now that controlling the frontend in an easy and accessible way is also a main advantage of using model forms. All this without ever changing the original template. Nice and easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (3)
> **Env Vars:** css (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Codespaces error and the solution](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=0)** - [Instructor] If you're using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), there is a chance you still run into trouble even after adding the CSFR token to your form. So in my case here I have the token, but if I try to create a new note, I'm still getting the CSRF verification failed. What's happening here is that there is a trouble with the configuration. So we're going to change that. We can go to our settings, import a model called os, that stands for operational system. And right at the bottom of the settings file we can check if we are in the Codespaces environment. So let's create a new variable, IS CODESPACES, and we can get the variable from the system environment. So os.environ.get, and in here it's going to have a CODESPACES variable. And we're going to check if this is true, which is a string. If we are in the Codespaces, so if this is Codespaces, what we're going to do is override the CSRF_TRUSTED_ORIGINS.
>
> **[1:14](https://www.linkedin.com/learning/django-essential-training-25094632/codespaces-error-and-the-solution?u=76281980&t=74)** And in here we're going to pass a list. And in this list we're going to pass localhost, so [https://localhost:8000](https://localhost:8000). Let's rerun our run server here. And then let's go back to our form. A new note. Does it work now? And submit. Now it's working. Unfortunately this is a configuration problem. What we're doing here is checking if we are in the GitHub Codespaces environment and then overriding the trusted origins to force localhost to be there. This is only being done if we are in Codespaces, which is good because if you run this code elsewhere in your computer or a production environment, you won't have the same override in place. So yeah, there you go. Not ideal, but here's the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **Env Vars:** codespaces (2), csfr (1), csrf (1), csrf_trusted_origins (1)
> **Definitions:** is a  (4), stands for (1)
> **Tools:** github (2)
> **URLs:** [https://localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 7. Working with Existing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [The U in the CRUD: Updating data](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=0)** - [Instructor] Okay, so now, we have the create endpoint. It's time to create the U update endpoint. Let's go back to the views file on notes. And on here, we're going to also add UpdateView. Now, we can add a new class, NotesUpdateView that inherits from UpdateView. And we actually just need to copy this from the create view and paste it here. That's it. That's all we need to do. The only thing still missing are the URLs. So what we can do is go back here. We can copy and paste the details view, and then add here a slash edit on the endpoint. Change the class, whereas this originating to, and the name. That's it. That's all we need to do. If we go back to the notes now, get the first note and then add a slash edit at the end. You can see that we have our form here, and we have the fields already filled in with the data from that particular note. So if we try something, just save and try again. Uh-oh, it didn't work. Okay, so let's check it out what is going on. If you go to our template,
>
> **[1:33](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=93)** if you notice here, we're actually hard coding, which URL the form should be sent to. We don't actually need this. The form is smart enough to know where to send this to. So let's get rid of this. Let's go back, edit, and then submit it. If we see now, our note was edited. That's it. So editing basically comes for free after you implemented the create endpoint. we can style this page a little bit. So let's go to the template. We can add a cancel button that will return from this page if the user changed their mind. So it can go to a, href, it's going to be the function that have URL, and then this go back to notes.list. We still need some class here, so let's tie button and then button secondary
>
> **[2:45](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=165)** and then cancel. We can also go back to the details. In here, we can create a new button that will take us to the added page, so a, the href, then curly brackets, percentage, URL, notes.update, and then PK is equal to note.id.
>
> **[3:12](https://www.linkedin.com/learning/django-essential-training-25094632/the-u-in-the-crud-updating-data?u=76281980&t=192)** Let's add some class here as well, so btn and btn secondary, edit. Okay, let's try this out. If we go back here and this note, we now have the button edit. We can actually edits here and then we can actually cancel or submit. There you go. Now, you have a full cycle between list, detail, and edit, with just a couple lines of code.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **Env Vars:** url (3)
> **UI Navigation:** go to (3)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)

#### [The D in the CRUD: Deleting data](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=0)** - [Instructor] So it's time to think about the last operation from the CRUD operations, deleting data. Let's start as usual. Let's go back to the views. And from here, we're going to add actually from [Django](../../Skills/Web%20Development/Django.md).views.generic.edit. Let's import DeleteView. The delete endpoint is even simpler than all the endpoints we created until now. We can add a new class, NotesDeleteView, that inherits from DeleteView, and we actually just need the model and a success_url.
>
> **[0:51](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=51)** Once more, the endpoint URL need to be added to the urls file. So let's go back here, let's copy this. And instead of edit, let's call this delete. Let's change the class here and the name. Now, we need to create a template to confirm if the user wants to delete a particular note. Let's go here and add a new one called notes_delete.[HTML](../../Skills/Web%20Development/HTML.md). So let's start with the basics. So extend 'base.html', then block.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=102)** This is also going to be a form. So let's add form, and the method's going to be post. Since this is a form, we can't forget about the csrf_token. And then in here, we're going to add a message, "Are you sure you want to delete?" And then let's add notes.title. Let's add quotes here. And then another message, saying that this action actually can't be undone. And finally, an input button type="submit". And the class is going to be btn btn-danger, so it can be a nice red. And value, it's going to be confirm. Since we already have our template, we can go back to the details and add yet one more button here that will lead us to the delete. Let's make it red as well. Okay, it's time to try it out. Let's go back to one particular note. Now we have the Delete button. And if we click here, uh-oh, okay, we're getting, again, a template does not exist.
>
> **[3:17](https://www.linkedin.com/learning/django-essential-training-25094632/the-d-in-the-crud-deleting-data?u=76281980&t=197)** We can see here that while it was loading the template, it was looking for a template with the name notes/notes_confirm_delete. So we have two alternatives here. One is to change the name of our template to match the template that Django is expecting. I prefer to usually add the template_name to avoid having to remember which template is related to which endpoint. So we can come back here to the views and add a template_name. This name is also very similar to the other template_names that we have. So in my opinion, this is a little bit better, but you can choose whatever you prefer. Let's try again. Let's delete this. Okay, we have our message. Let's Confirm. And there you go, the note was deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Exercise Files:** template (8)
> **Code Identifiers:** template_name (2), success_url (1), notes_delete (1), csrf_token (1), notes_confirm_delete (1)
> **Cross-References:** go back to (3)
> **File Paths:** notes_delete.html (1), base.html (1)
> **Env Vars:** crud (1), url (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### [</> Code challenge: A button to add a like to a note](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-a-button-to-add-a-like-to-a-note?u=76281980&t=5)** - [Narrator] In a previous challenge, you've added the ability of adding likes to your notes. Now, let's try to add a button that will allow people to add a like to specific note. To do that, you'll need to first create a new view that when receiving a post, will increase the number of likes by one. Then you need to add a new button in the Notes detail template, and that button must make a POST request to our new view. And finally, a likes counter in the notes detail template so you can see the number of likes increasing. Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **API Endpoints:** post  (1)
> **Env Vars:** post (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Solution: A button to add a like to a note](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=0)** (bright upbeat music) (bright upbeat music ends)
>
> **[0:06](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=6)** - [Instructor] Okay, so this was a bit of a tricky question. Although class-based views are amazing and I do love them, we don't need to use them for absolutely everything. In this case, we have a very straightforward case. We need an endpoint that receives a post and that will change the model. No input data needed, no validation needed. Quite simple. So we could use a class-based view, but we could also leverage the simplicity of [Django](../../Skills/Web%20Development/Django.md) using a function-based view. Let's go into the views file and add a new function, call add like view. That receives two parameters, the request and the pk, so the identifier of the note. There's actually a pretty sweet helper function that will automatically return an HCP status 404, meaning not found if the identifier is wrong and there is no node on the database. So let's use that. So from the shortcuts, we're going to get this function called, get object or 404, and let's use this on the function. So note, get object or 404. We pass the model, notes, and the identifier. Perfect. Then the only thing we need to do is add one to the number of likes, note.likes. Let's add one and save it. Okay, now, we need to redirect the user back to the detailed view from this endpoint.
>
> **[1:42](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=102)** So we could use two functions here. One is an http response redirect. And from Django URLs, we're going to import reverse. So let's return the redirect. And the URL we're going to redirect the user to is going to be called using reverse. And in here, we're going to pass the identifier of that URL. So notes.detail and the arguments for that URL. So args is going to be the PK and a coma here because this is a tuple. Okay, our function is ready. Now, we can add this view to the notes URL's file. Let's go back here, add a new path. So notes, it receives an integer which is the identifier. And then let's call this add like. We're going to get the function from the views file. So, add like view and give it a unique name. So, let's call notes add like. As you can see here, we are not calling the method as view because this is not a class-based view. This is a simple view. Perfect. Our endpoint is ready. Now, we can actually go to our template and add a number of likes as a button to upvote a note. Let's copy this button here.
>
> **[3:19](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=199)** Let's pass nodes, add like, and let's pass the PK as the note id, and let's call this upvote. To make sure this works, we can add the number of likes to the page. So note.likes and the number of likes. Okay, let's try this out. Let's refresh here. Okay, this note has zero likes and an upvote button. Let's try it out. I'm going to click here and there you go. We have an additional like. It works. Now, we need to have a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of caution. If you notice, we don't have a form, meaning that this is working when we do a get request to this URL. Typically, get requests should never modify your system. This is a bad practice. So what we can do is to make sure it only works for post requests and then return a 404 if any other type of request hits this method. Let's go back to our views, and let's make sure that this only happens if we have a post. So if the request.method is equal to a post, then we do everything we did so far. Anything else, we should raise an http404. Okay, but this means that we need to make an actual post request through the button. And that's a little bit tricky.
>
> **[4:54](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=294)** We're going to need a form to do that. So bear with me. So now, we need to change this from a simple link which will create a get method to a form to do a post method. To do that, we're going to need a form. Then in the form, we're going to say that the method is going to be a post. Let's add a class to keep it in line with all the other buttons we have here. And the action, which means the URL, we're going to call this form, too, is going to be the same URL we used before. Perfect. Now, because this is a post, remember, we also need the CSRF token to make sure this is a secure request. And then we're going to pass form SP. Because we don't have inputs, this return nothing. And finally, we need a button of type submit upvote. And we can actually import these classes here to make sure everything stays the same. Okay, let's try this out. Shall we? Going to refresh this. Nothing changed as we expected. We're going to call it and it all works. Perfect. So now, we have the upvote working as a post method.
>
> **[6:29](https://www.linkedin.com/learning/django-essential-training-25094632/solution-a-button-to-add-a-like-to-a-note?u=76281980&t=389)** If we come here to the URL and try to go directly to the link, it's going to return a 404. Remember, good practices make your code better and the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) much more reliable. Keep attention to all of these details, and your code and system will be amazing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** url (8), hcp (1), csrf (1)
> **CLI Commands:** make (7), node (1)
> **Definitions:** is a  (5), is an  (1), means that (1)
> **Non-Speech:** (bright upbeat music) (1), (bright upbeat music ends) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)


### 8. Using Django to Store and Display User-Specific Data

[↑ Back to Table of Contents](#table-of-contents)

#### [How to update data stored in your database](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=0)** - [Instructor] Right now, no matter if a user is logged into an account, they can create notes on the system. However, we want the system to be aware of who's logged in and only display the notes written by their original author. How can we do that? So far, we have two tables in our database, the Notes table and the User table. We need to save in the Notes which user was the author, and we can do that by creating a link between the User table and the Notes table. This is what we call a foreign key. Let's go back to our model and import the user model that comes with [Django](../../Skills/Web%20Development/Django.md) by default. So from Django.contrib.auth.models import User. Now we go to the Notes model and we add a foreign key. Now we go here and we add models.foreignKey. This here needs a couple of things. The first item is the model we want to create a link with. In this case, this is the user model we just imported. Then, the second item is going to be the on_delete. This means that we want to define what happens to this node if the user associated with it is deleted. In this case, we're going to use models.CASCADE, which means that if a user gets deleted,
>
> **[1:36](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=96)** we also want to delete all the notes associated with them. Finally, we can say how we will identify this relationship on the user side. Related_name, it's going to be notes. Okay, now that we change the model, we need to create a migration. Let's go and type [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), manage.py make migrations,
>
> **[2:07](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=127)** and we're getting an error. The problem here is that we defined that every node needs to be associated with a user, but our database is already fully populated by notes without users. So we need to define what to do now. Since we have a user, admin, and its ID is one, we can pass this as the default user on this migration. If we pass any ID of a user that doesn't exist, this migration will fail. So we should pass an ID of a user that exists. Let's add one. We're going to provide a one-off default, and the ID is going to be one. Okay, so now we can actually apply the changes to the database with python manage.py migrate. As I said, this is only working because we do have a user with ID equals one in our database, but it would break otherwise. When creating migrations and adding default values, you should always take care to avoid creating migrations that can break if you start a project again from scratch. Let's test our implementation and see if it works by opening the shell. So python manage.py shell. And let's import the user. From django.contrib.auth.models import User. And let's get the first user.
>
> **[3:39](https://www.linkedin.com/learning/django-essential-training-25094632/how-to-update-data-stored-in-your-database?u=76281980&t=219)** So user is going to be User.objects.get(pk=1). So this is the admin user that we've been using so far. What we can do now is actually see the notes that this user have so we can count them, and we can see that all the five notes that we have in our system is associated to that user. We can even get all the notes from here. So if we say user.notes.all(), we're going to have all the object notes we being displayed here. That's it. Now we can start making changes to make the system user-aware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), node (2), make (2)
> **File Paths:** manage.py (3)
> **Code Identifiers:** foreignkey (1), on_delete (1)
> **Definitions:** means that (2)
> **Env Vars:** cascade (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Template for update](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=0)** - [Instructor] Every node now has the user that created it, but our endpoint is still displaying all the notes from all the users. We also didn't add any authentication. So in order to keep [Privacy](../../Skills/Data%20Science/Privacy.md), we need to fix that. So let's go back here on the notes, views dot pi, and import from [Django](../../Skills/Web%20Development/Django.md) dot contrib dot auth dot mixins (indistinct) import, login required mixin. Then on the list view, we need to add the login require mixin, and don't forget, oops, required mixin. And let's not forget to add the login URL. So for now, this is going to be the admin. This login URL means that if a user tried to access the list view, and it's not logged in, they will be redirected to the slash admin instead of seeing a 404. Okay, so now what we need is to change the query so we can only display the queries of the logged in user. But where is the query? (chuckling) As we discussed earlier, class-based views are highly powerful, and yet highly changeable. We can use a documentation website to check for all the methods that we have available, and find out which ones we need to change to get the behavior we want.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=94)** This is the website that I look for when I want to change a class-based view. It calls CCBV because it's called classy class-based views. You can see here that we can change the Django version we're using. It is not updated to the version 3.2, but I think we'll be just fine with the 3.1. So let's go to the generic list, and go to list view. In here, you can see all the classes, the methods, the attributes, everything we can configure in this list view, class-based view. So after some investigation, I realize there is a get query set method here. Whenever a user go to the list endpoint, the first method that it will call will be the get method, because we're making an ATTP get request. Let's check it out. Whoa. Okay, so there's a lot going on here. However, we can quickly see that there is a method here that gets the object list by calling a method called get query set. Okay, so let's check that method. Get query set, here it is. There's still a lot of things going on here, but we can see that this is the method where the query to the database is made. Jackpot. This is the method that we need to alter in order to list only our user notes. If we go back to the code now,
>
> **[3:10](https://www.linkedin.com/learning/django-essential-training-25094632/template-for-update?u=76281980&t=190)** we can actually override the get query set method, and instead of returning whatever it is returning by default, we're going to return self dot request dot user dot notes dot all. That's it. A couple of changes in our endpoint is requiring user authentication, and then using the user of that request to just display the notes that were created by that user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** url (2), ccbv (1), attp (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** node (1), find (1)
> **Versions:** version 3 (1), 3.1 (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Best Practices:** don't forget (1)

#### [Endpoint and template for deleting](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=0)** - [Instructor] We changed our notes to have a user, but let's try to add a new one and see what happens. So this is a new note. Does it work? Let's submit. Uh-oh, okay. We have an error. You can see here that there is a constraint that a note can't have a null user. The problem is that we don't say in the form to consider the logged-in user as the author of that note. So we need to change this, and this is a bit tricky, so bear with me for a second. So in here, on the CreateView, we're going to override the method def form_valid that receives a self and form.
>
> **[0:49](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=49)** The first thing it is that we need to get the object, which is going to be form.save, and then commit = False. Now we're going to fill the object. So self.object.user is going to receive the request.user and then we're going to self.object.save. And finally, we need to return an HttpResponseRedirect.
>
> **[1:24](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=84)** And then this is going to get self.get_success_url. Let's see, the HttpResponseRedirect is already being imported from [Django](../../Skills/Web%20Development/Django.md).http.response. And that's it. That's what we need to get our form validating. Okay, so that was a little bit tricky. Let's understand what's going on here. So the data is sent by the user, passed inside the form, which asks a simple question. Is this data valid? To see if the data is valid, the form would call a couple of methods that have the title starting with clean, so clean title, clean text, like the one we changed before. If something is wrong, the method isValid returns false, and the class-based view will raise an exception. On the other hand, if all checks clear, the data is stored in a variable called cleaned_data. And when you call form.save, that will save the object directly in the database and that's it. It all happens very smoothly. So what happens here is that when we pass title and text to the form, the method isValid returns True. Then the formValid method will call the save and will try to save to the database. But although the form is returning isValid = True, the database is forbidding us
>
> **[2:58](https://www.linkedin.com/learning/django-essential-training-25094632/endoint-and-template-for-deleting?u=76281980&t=178)** to try to save a note without a user. That's where we get our error. What we did here was to get in the middle of it so we can inject the logged user as part of the object. We do this by passing the attribute commit = False that creates the object but doesn't save it to the database. Then we have the object, we insert the user and then we call save, successfully saving the note with that user to the database. As you can see, class-based views can be changed as you please. Now the endpoint is working and life is good again. So we refresh here and add a new node. Yeah, as you can see, class-based views can be changed as you please. Now the endpoint is working and life is good again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (1)
> **Code Identifiers:** isvalid (3), form_valid (1), get_success_url (1), cleaned_data (1), formvalid (1)
> **Definitions:** is a  (3)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [</> Code challenge: Mark a note as public or private](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-mark-a-note-as-public-or-private?u=76281980&t=0)** - [Narrator] Are you ready for one more challenge? In this challenge, we will get to mark a note as either a public or a private note. The idea is that you'll be able to share public notes with unauthenticated users in the future. To do this, you need to add a new parameter to the notes to flag if it's public or not, create a new view so a user can mark a note as public, add a button to mark a note as public, and then finally, let the user know that they're dealing with a public note, as we don't want anyone to share private information on those notes. Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Mark a note as public or private](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=0)** - [Instructor] We can start by adding a new field called public and we can make it a BooleanField saying that default is false, making every note private by default. Okay, that sounds good enough, but there's one more thing we can improve. Although public may sound good enough for now, it can get confusing when reading the code later on. What does public even mean? Is it saying if a note is public or when the note was made public or who made the change to make the note public? Whenever we're creating a new field or a new variable, it is important to think, how can I make the best with the littlest information possible? If I simply change this field from public to is public. There's only one answer here. The answer to this field must be a yes or no. The same way that if we change it to public ad, it would imply that we're talking about time. Always keep in mind that the easiest we make our code, the better we are at maintaining and improving it. Okay, so we have a changing to our model. We need another migration so let's do that. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) manage.py makemigrations. Now we can actually migrate, manage.py migrate. Perfect.
>
> **[1:32](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=92)** Now we can go to the views and similar to what we have in the ad like view, we also can do a similar thing to this end point as we just want to basically flip a switch every time we hit the end point. So let's copy and paste this and let's change the name to change_visibility_view. And instead of changing the number of likes, we're going to flip the switch for the east public. So it's going to be whatever it isn't on the database. Okay. That will do, simple and elegant. Now we can add a new endpoint. So again, let's copy and paste what we've done before and change the name to change_visibility. Change_visibility, and again a unique identifier. Perfect. Let's go to the detail form. And again, we can copy and paste basically the same form that we did for upvote. The only thing we need to remember to change is the URL. So we're going to change this to change_visibility, and let's change the name here to make it public. Awesome. However, as we know, we're flipping the switch, so sometimes we're going to make it public.
>
> **[3:06](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=186)** Sometimes we're going to make it private. So instead of just doing this, we can create an if here and change the name depending on if the note is visible or not. So if it is public and we hit this button, we're going to make it private. Else, we're going to make it public. Let's end our if here. And there you go. Perfect. Okay. The last thing we need is actually to warn the user that this is a public note as we don't want to share private information on a public note. What we can do here is on the top in the title, we can add a span class that has a class badge and let's make it the background secondary and we're going to call it public and close this span. Let's close this class here, but we only want to do this if the note is public. Okay, let's close the and if here, let's save it and let's check our website now. Now we have a button here, and if I click to make it public, we have a public warning here for our user that this is a public note, and if we make it private,
>
> **[4:38](https://www.linkedin.com/learning/django-essential-training-25094632/solution-mark-a-note-as-public-or-private?u=76281980&t=278)** the button change and our badge will be removed. There you go. So now you have a public or a private note depending on this button, and you have a warning for the user to make sure to not share private information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (13), python (1)
> **Code Identifiers:** change_visibility (2), change_visibility_view (1)
> **Warnings:** warning (2), keep in mind (1)
> **File Paths:** manage.py (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)


### 9. Login, Logout, and Signup Are Simple

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding login and logout pages](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=0)** - [Instructor] We are almost there. The last thing remaining for our app is to create a proper login place. Although the admin login is nice, it can only be accessed by staff members of the system. So we need to create the authentication interface as well. Let's do this. So first let's go to home, then views, and then let's import here from [Django](../../Skills/Web%20Development/Django.md).contrib.auth.views, import loginview.
>
> **[0:37](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=37)** And then let's create a class called logininterfaceview that inherits from login view. And in here, we only need to define really one thing, the template name. So let's go call it home/login.[HTML](../../Skills/Web%20Development/HTML.md). Okay, so we can forget about the URLs. So let's do this now. So in here, let's add a login page that inherits from views, login interface view as view. Okay, so now we can create a template. So in here, let's add the new login.html. And in here, really all we need to do is extends base.html to get all our configuration, to then block content, and finally, endblock.
>
> **[1:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=101)** Okay, so in here, what we need is simply a form. This form should have method equals to post. Because this is a form with the method posts, we can't forget what our dear friend csrf_token. And then we're going to use form as P because it's going to be rendered as P tags in the HTML. That's the only difference. And finally, we're going to have an input. The type's going to be submit. Let's add some class here. So BTN and BTN secondary. And that's it. Okay, let's try this out. So we're going to go here, go to login. Okay, let's try to log in. Okay, so what's happened here? The problem is that Django has a default system, defined configuration for the redirect, which leads to a page we don't have, which is this account profile page. Because this is a global definition, we should change this not in the class-based views, but we should change it on the settings. So let's do this. Let's go back, then let's go to smartnotes, settings, and then we can add this way below here and we can add login redirect url, is going to be smart/notes.
>
> **[3:23](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=203)** So this is where we're going to redirect the user after it is logged in. So let's try this again. I just remember we are completely logged in here. So first, let's log out to make sure our login work. So log in, then let's add our credentials and it works. Amazing. Okay, so similarly, we also want a logout view, right? We don't want to have to go to the admin to do this. So let's add this real quick. So on the views, again, from here we're going to also import logout view. And similarly, we're going to create a logout interface view that inherits from logout view. And the only thing we need is the template name. Yes. So let's add here, home/logout.html.
>
> **[4:27](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=267)** Okay, so let's create the template. Logout.html. For sake of time, we can copy this and paste it here. And instead of having a form, we're going to have an H1 that says, hope to see you soon. Okay. Oh yes, and we're missing the URLs. So let's do this. We are copying logout and logout. And for the sake of organization, let's add names to this URLs, shall we? So this is going to be our homepage. We can actually get rid of this. Our system doesn't really need this. Then we have login and finally logout.
>
> **[5:29](https://www.linkedin.com/learning/django-essential-training-25094632/adding-login-and-logout-pages?u=76281980&t=329)** Okay, one more tidy up to do. Let's make this empty. Okay, let's see what that causes. If we go back, the empty here means that now this welcome page is going to be the default page without any path. And then if you go to logout and try to access the smart notes again, there you go, because we're logged out, now we can't access the notes and it redirects to the Django login. We need to change that as well, but I'm going to leave this to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [Django](../../Skills/Web%20Development/Django.md) (3)
> **File Paths:** home/login.html (1), login.html (1), base.html (1), home/logout.html (1), logout.html (1)
> **UI Navigation:** go to (5)
> **Exercise Files:** template (4)
> **Env Vars:** btn (2), html (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** csrf_token (1)

#### [Adding a signup page](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=0)** - [Instructor] Okay, we are so close. It's time to add it all together. So let's go to the base.[HTML](../../Skills/Web%20Development/HTML.md) template and add a couple of things. Bear with me for a second. So we're going to add a nav bar. Let's indent this correctly. And then in here, we're going to pass a couple of classes. So we're going to use navbar navbar-dark and bg-dark.
>
> **[0:30](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=30)** Okay. We're also going to need another div here. And this div, we have a class ms-auto. And let's create a link here for the Login page. So we're going to pass a URL, and this URL was going to be the login. Let's close this, and let's add some style here as well. So the glasses we're going to use is going to be the btn btn-outline-light, because we're going to have a black navbar, and me-1. Okay, perfect. Let's see what happens here. Now we have a top bar, black, and we have a button for the login. Perfect. However, if the user is authenticated, it doesn't make sense to have a login button here, right? So let's add some logic to change that. Let's go back to the code. So what we can do here is add an if statement to see if the user is authenticated. If the user is authenticated, what we're going to do is add a logout logic. However, if the user is not authenticated, this means else, then we're going to show the Login button. Finally, we can end our if. Okay, so the way we add a logout logic here
>
> **[2:04](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=124)** will depend on the version of [Django](../../Skills/Web%20Development/Django.md) that you are running. On versions 4.x or below, it's very simple. We just need a link here. So we can copy these, Django 4.0, and we can have the logout URL and a Logout. And that's it. However, if you are running a version that is later or the same as 5.0, this link won't work. This is because now, logout must be a POST request instead of a GET. Thankfully, we know how to make a POST request. We need a form. What we can do here is to wrap our button into a form to actually make a POST request. So let's do that. So let's remove this, and I am going to change here. So if you're using 5.0+, you have to do this. Let's create a new form, okay? The method must be post. We need an action URL. So in this case here, we're going to pass the logout URL. So it's the same URL, but now we're going to do a POST method and some class with some style. So d-inline here. Perfect. Remember, because this is a form, we're making a POST request, we need our security token. So let's add the csrf-token here.
>
> **[3:41](https://www.linkedin.com/learning/django-essential-training-25094632/adding-a-signup-page?u=76281980&t=221)** And now we need a button called Logout. And this button must have the type submit. And then we can pass the same style as the login here. Okay, let's go back and check what happened. Because I am authenticated, instead of showing the Login, it is actually showing me the Logout page. Awesome. Since we're already here and we have a navigation bar, let's also add a button to the homepage. So we can actually copy this here, and we can add this, if the user is authenticated, a Home button, and then we're going to pass the URL to be home. Let's go back, let's refresh. And there you go. Done and done. Now we have our whole app and a navigation bar fully working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (7), post (5)
> **API Endpoints:** post  (5)
> **CLI Commands:** make (3)
> **Versions:** 5.0 (2), 4.0 (1)
> **File Paths:** base.html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Finishing touches](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=0)** - [Instructor] Okay, we are so close. It is time to add it all together. So let's go to static, templates, base.[HTML](../../Skills/Web%20Development/HTML.md). And then in here what we're going to do is add a nav, so a navigation bar. We need a couple of classes here. So let's add navbar navbar-dark, and a dark background. Okay, inside of it, we're going to need a div. And this div must have a class, ms-auto. And then in here we can add a link. Okay, so let's add a link to the login page. So in here, let's add href, that has the command URL, login, and then some classes here. Let's make this a button. So btn btn-outline-light. And let's add some space in here. Okay, let's try this out. Amazing. So you can see here that now we have a Login button, but it doesn't really make sense, you have a Login button for a logged in user. So we can see here that we have a logged in user. So let's add some logic to change this. So if it's an authenticated user, we want to display the logout URL, not the login. So in here, what we can do is use an if statement. So if user.is_authenticated,
>
> **[1:39](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=99)** yes, this is the same method as we used before. We're going to display something. And then if else, we're going to display something else. And then we need to end the if. Okay, so now if the user is authenticated, we don't want to show the Login, we want to show the Logout. Same thing here, Logout. Okay, let's see how that goes. I'm going to refresh. Okay, now I have a Logout. If I try this, I'm going to get my end message. And now I'm going to see the Login, because I'm not authenticated. So let's try that. Let's authenticate here. And there you go. So we have our Login, Logout. We can use the same logic to add other things. So for instance, if a user is authenticated, we also want to have a Home button. So they can go to notes.list. And a Create button. So they can go and create a new note. But if they are not authenticated, we also want to display the signup option. Signup, and then signup. Okay, so let's try this out. I'm authenticated. If I click Home, I'll see the notes that I have. If I go to Create, I'll go to the create page,
>
> **[3:14](https://www.linkedin.com/learning/django-essential-training-25094632/finishing-touches?u=76281980&t=194)** and if I log out, I can see the message saying that I'm logged out. What I can do now as a logged out user is actually signing up. So let's try something different. I'm going to add a username, [Django](../../Skills/Web%20Development/Django.md). Let's add some passwords here. Let's submit. Okay, so it redirects me to the login page, so I can try my new user. And there you go. Now if you create a new note here, we have our first project up and running with the full authentication cycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Django](../../Skills/Web%20Development/Django.md) (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **File Paths:** base.html (1)
> **Code Identifiers:** is_authenticated (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [</> Code challenge: Create a share link for a public note](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/django-essential-training-25094632/code-challenge-create-a-share-link-for-a-public-note?u=76281980&t=5)** - [Narrator] I hope that you enjoyed the challenges we had so far and that you're ready for the last one. Okay, so we have a full working app, but as with any good software, we can add a new functionality still. In the last challenge, we added the functionality to change a note from private to public. Now we can add a new functionality so we can have a link to share public notes with our friends. To do that, we need to create a new view that won't require a logging, and we need to make sure to only allow public notes to be visible through that link and that private notes can never be seen to anyone else that's not authorized. That's it. That's our last functionality, good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Create a share link for a public note](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=0)** - [Instructor] To create a share link, we can copy the DetailView that we have before. Then we can remove the necessity of the login required and call it NotesPublicDetailView. Perfect. That would make any note public, which is not what we want. So what we can do is leverage the queryset again. And let's change the basic filter to filter just for public notes. Awesome. Now we can actually create an URL using this view. So we can come here, and let's copy this DetailView here. And let's call this a share link. And then, PublicDetailView. And share. That's it. That's as straightforward as it gets. Let's go to our system to check it out. This is a public note, but as we can see, I'm actually logged in, so I have the right to see this note. Let's try to access the share link. Okay, it's the same template, everything is the same. But because I'm logged in, it shouldn't make any difference. Let's try to log out. And access the same link. Perfect. I can see this note because it is public and I'm using the share link.
>
> **[1:34](https://www.linkedin.com/learning/django-essential-training-25094632/solution-create-a-share-link-for-a-public-note?u=76281980&t=94)** However, notes number 2 is private. Okay. So I don't have access to it because it's private, and it's returning a 404, which makes total sense to what we want. Unauthorized users should never see a private note. So that's it. We have a full functionality of sharing notes publicly and never sharing any private notes. I hope you have enjoyed the challenges and learned a lot on the way. And I hope also that you fell in love with the [Django](../../Skills/Web%20Development/Django.md) documentation as much as I do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-essential-training-25094632/next-steps?u=76281980&t=0)** - [Leticia] We've reached the end of our course. Now you're ready to build complex systems with [Django](../../Skills/Web%20Development/Django.md) and you can do it with full authentication flows. This is a huge deal! It's one of the best selling points about, "Start Coding with Django," but it doesn't stop there. If you want to continue on Django, here's a few things I recommend. I created a second course here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning called, "[Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) in Django." This course will use the system you've created on this course to learn how to create unit tests, making your system more reliable. Being able to test software systems properly is a major skill that all developers should learn, so I highly recommend you to check it out. Next, if you're interested in incorporating APIs into your applications, I'd look at Django [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) framework. And finally, if you want to expand your knowledge, there are some other great courses on Django and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) here in LinkedIn Learning Library. Take a look through and watch a few more, cheers!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Django](../../Skills/Web%20Development/Django.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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

### In [Become a Django Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Django%20Developer.md)
**1 of 4** | [Django- Forms](Django-%20Forms.md) →

## Appears In

- [Become a Django Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Django%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](../Software%20Development/Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)