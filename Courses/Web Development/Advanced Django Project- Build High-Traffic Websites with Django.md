---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-django-project-build-high-traffic-websites-with-django
url: "https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django"
duration_minutes: 112
duration: 1h 52m
level: Advanced
updated: 1/10/2022
learners: 5617
skills:
  - Django
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced_django_3000142"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHAN9_TtAzwNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641428255827?e=2147483647&amp;v=beta&amp;t=OoNht7OMh7OnP5UaLtCek_xaeQ_WnzIyhRG7q929WbE"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills as a Django Developer]]'
prev_courses:
  - '[[Securing Django Applications]]'
path_nav: '[{"path":"Advance Your Skills as a Django Developer","position":6,"total":6,"prev":"Securing Django Applications","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Advanced%20Django%20Project-%20Build%20High-Traffic%20Websites%20with%20Django.md)

![Advanced Django Project: Build High-Traffic Websites with Django](https://media.licdn.com/dms/image/v2/C560DAQHAN9_TtAzwNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641428255827?e=2147483647&amp;v=beta&amp;t=OoNht7OMh7OnP5UaLtCek_xaeQ_WnzIyhRG7q929WbE)

# Advanced Django Project: Build High-Traffic Websites with Django

> In this project-based course, software engineer Ryan Mitchell takes a deep dive into Django, the framework that is the back end of high-traffic websites like Instagram and Pinterest. Designed for advanced Django users, Ryan presents a social media website project as a framework for how to tackle any web engineering situation and translate it into Django code. She shows how to build custom validato

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django) | 1h 52m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Tackling projects with Django](#tackling-projects-with-django)
  - [What you should know](#what-you-should-know)
  - [Project overview](#project-overview)
- [**1. Getting Started with Django**](#1-getting-started-with-django) (3 videos)
  - [The world of Python and Django](#the-world-of-python-and-django)
  - [Architecture of a Django project](#architecture-of-a-django-project)
  - [Running Django](#running-django)
- [**2. Models and Fields**](#2-models-and-fields) (5 videos)
  - [Validations](#validations)
  - [Custom fields](#custom-fields)
  - [File management](#file-management)
  - [Generic relations](#generic-relations)
  - [Signals](#signals)
- [**3. Views**](#3-views) (3 videos)
  - [Raising exceptions](#raising-exceptions)
  - [Class-based views](#class-based-views)
  - [QuerySets and filters](#querysets-and-filters)
- [**4. Interacting with the Database**](#4-interacting-with-the-database) (3 videos)
  - [Deleting models](#deleting-models)
  - [Custom object managers](#custom-object-managers)
  - [Fetching fields](#fetching-fields)
- [**5. Templates**](#5-templates) (4 videos)
  - [The Django template language](#the-django-template-language)
  - [Humanize library](#humanize-library)
  - [Custom tags and filters](#custom-tags-and-filters)
  - [Variables as templates](#variables-as-templates)
- [**6. Improving Performance**](#6-improving-performance) (4 videos)
  - [Securing authentication](#securing-authentication)
  - [Caching](#caching)
  - [Sessions](#sessions)
  - [Logging](#logging)
- [**7. Staying Connected**](#7-staying-connected) (2 videos)
  - [Finding and using third-party packages](#finding-and-using-third-party-packages)
  - [Getting involved with the Django community](#getting-involved-with-the-django-community)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with Django](#next-steps-with-django)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Tackling projects with Django](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/tackling-projects-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/tackling-projects-with-django?u=76281980&t=1)** - [Ryan] [[Django]] is in the back end of many high-traffic websites, such as [[Instagram]], Pinterest, and Disqus. And is the framework of choice for open source foundations, like Mozilla, OpenStack, and the Open Knowledge Foundation. It's also known as the web framework for perfectionists with deadlines, for very good reasons. Its rapid development tools, pragmatically designed [[Python (Programming Language)|Python]], and out-of-the-box functionality create secure, robust, and infinitely extendible web projects with just a few lines of code. If you know where to place them. This course will show you how to tackle any web engineering situation and translate it into Django code. Build custom validators, filters, managers. Extend and augment the default Django settings and models. Eliminate code redundancy, and implement clean error handling, authentication, caching, and other tools. Hi, I'm Ryan. And whatever kind of web project you have, I'll show you how to build it in Django. Come join me as we dive beneath the surface of this web framework for some hands-on development and Django wrangling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (5), [[Instagram]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [ryan] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/what-you-should-know?u=76281980&t=0)** - [Presenter] Let's talk about what you should know before starting this course. Obviously you should know [[Python (Programming Language)|Python]]. So [[Django]] is a Python web framework. We're going to be doing a lot of Python, and you may get lost easily if you're not familiar with the language. The second thing you should know is Django. So this is the advanced string, of course, this course is designed for Python developers who have some familiarity already with Django, or at the very least other similar web frameworks and [[Content Management Systems (CMS)|content management systems]]. With that said, familiarity with other web frameworks and CMS's isn't a great substitute for knowledge of Django in this course. If you haven't already, I highly recommend you check out Caleb Smith's Learning Django before starting this course, or any of the other great interjectory [[LinkedIn]] Learning videos about Django. So I'm a big fan of spiral learning. The idea that a student learns more about a topic each time it's encountered. You spiral around, review the material in different contexts with different approaches, and gain intuitive insights about it as you go. And college granted, we used to joke that this was called the downward spiral. But while we will be reviewing some basics of Django, like the relationship between templates and views, we'll go over this material relatively quickly as we spiral around, and we'll be presenting it in a larger context of advanced programming and usage that may be difficult to follow if you don't already have a firm grasp on these topics. Most of this course will also focus on an existing Django project. We're not starting from the basics and writing a new project from scratch like in some of the other videos in the LinkedIn Learning library. I will be giving you some brief background on what each file does as we encounter it, but again, I expect that you recognize models, views, templates,
>
> **[1:32](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/what-you-should-know?u=76281980&t=92)** and have some understanding of what they're all doing from the get-go. So all right if that's all sounds good to you, let's go get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (8), [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (2), [[Content Management Systems (CMS)|Content management systems]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** cms (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Project overview](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/project-overview?u=76281980&t=0)** - [Instructor] In this course, we'll be working on a social media site called Friendsbook. Friendsbook has it all, users, businesses, profile pages, posts, you know, everything you could possibly want in a social media site, right? It's important to keep in mind that the exact functionality of this project doesn't actually matter. Whether you're building a storefront, a personal portfolio, or the next big app, you'll be able to use the principles from this video series and apply them to your own project. Before we actually get to see the project, I just want to highlight the four apps it has really quick. There are user accounts and businesses. So user accounts are of course wrappers around the [[Django]] user model. They contain extra account information about the user. Businesses are the corporate version of human users. They are entities that are also associated with the user object who owns the business, but they have businessy information in them, like location and business name. We also have this profile page object. It handles the display of the entity associated with it. Currently, only user accounts can have a profile page. There are also posts. We're going to be doing a lot with posts. It's basically like a Twitter or a [[Facebook]] post. You have some content, a user that made it, and a date, et cetera. So let's take a look at the website. All right. So I am obviously a [[Graphic Design]] genius. I'm just kidding. I believe there are [[LinkedIn]] Learning classes about CSS, and obviously this is not one of them. So here's the homepage. It has our newsfeed, all of the posts everyone on the site's made.
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/project-overview?u=76281980&t=93)** We also have business listings up here. Not much here, just that one business. You can also go back to the homepage here. You can click on people's profiles and see a little bit about them. You can go back when you click on your own profile, either there or in the header there, you can edit it. If you go back to the home feed, we can click on this and also get sort of a post details page. So that's the basic setup and that's what we're going to be working with. And then just a few notes on running this and logging in. In the exercise files, you'll find a bunch of directories with the chapter and video number. So the first one is for chapter one, video three, then you navigate into that and then it's /friendsbook. And then you run [[Python (Programming Language)|Python]], manage.py runserver, just like in any Django project, you're going to go to the login page at your local host, /admin. The username is Ryan all lowercase with the password password, again, all lowercase. All of the other user logins like Alice and Bob are forced to have stronger passwords enforced by the Django user app. So they have the password django with three exclamation points. Yes, this is a very secure, beautiful, and full featured social networking site. So I hope you enjoy it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Facebook]] (1), [[Graphic Design]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** go back to (2)
> **File Paths:** manage.py (1)
> **Env Vars:** css (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 1. Getting Started with Django

[↑ Back to Table of Contents](#table-of-contents)

#### [The world of Python and Django](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-world-of-python-and-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-world-of-python-and-django?u=76281980&t=0)** - [Instructor] There are so many backend web frameworks to choose from today. [[Node.js]] alone has... what? Hundreds to choose from? So, why [[Python (Programming Language)|Python]] and [[Django]]? Let's talk a little bit about what makes this language great and the platform built on it, Django, even better for [[Web Development]]. Django is owned and maintained by the Django Software Foundation, which is an entirely separate entity from the Python Software Foundation which maintains Python. Although Django is an independent project not owned by the Python Software Foundation, the founders of Django had very similar philosophies when it came to programming and [[Software Design]]. If you open up a Python interface and type "Import this," you get an Easter egg known as the Zen of Python. Beautiful is better than ugly, explicit is better than implicit, simple is better than complex, etc. And if you enjoy writing Python code, it's probably a no small part due to these design philosophies. Well-written or as they say, pythonic, Python code is easy to read, easy to maintain, and robust. And the developers of the Django project really took this to heart, and created their own set of design philosophies written out here at this link. But let's take a look at a few of those design philosophies here that I think sort of best encapsulate Django's philosophies, and demonstrate how Python and Django works so nicely together. Loose coupling is the first one that I want to look at. And this means that you have independent BLOBs of code with well-defined inputs and outputs that can be rewritten and reconfigured flexibly. This principle is also seen with service-oriented architecture,
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-world-of-python-and-django?u=76281980&t=93)** where one component doesn't need to know about the details of every other component in the system. DRY or don't repeat yourself, so those first two bullet points are just a little bit of dry humor. With DRY, every piece of code should be written in one and only one place, so this kind of ties in with loose coupling. If you have the same logic in multiple places, and that logic needs to change, it's really a pain in the butt. You know, if you spent some time in [[Software Development]], you've probably dealt with that before. But the lack of redundancy in Django actually makes it extremely flexible and easy to use. Explicit is better than implicit. I love [[JavaScript]], but occasionally you look at someone's JavaScript and you think, "Wait, how are they doing this?" "How does this work?" In Django, there's not a lot of magic going on, it forces you to really write things out clearly, which I think improves maintainability a lot. An example of this is like not assuming behaviors based off the name of a field. Some frameworks do this, like any class that starts with test in the name should be run as a test. You know, this kind of thing doesn't happen in Django, it's very explicit out what it does, they don't hide anything. Don't invent a programming language. This is mostly in regards to the Django template language, which we'll discuss later in this course, but every other part of Django is just Python. But the Django template language, which is used in templates with the file extension ".template," is very simple and kept to the minimum amount necessary to do the job. Again, there is no magic involved, Python code is always explicit,
>
> **[3:07](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-world-of-python-and-django?u=76281980&t=187)** and they haven't invented a whole new programming language. Extensibility, this also ties in with loose coupling and DRY. Are you seeing any patterns yet? Lots of repeating themes with the design philosophies here. But when your code is built on these foundations, it's not only extremely portable, but it's extremely extensible. Concepts like model inheritance and imports play a big role here. You can take someone's Django app for example, and easily extend it to customize its features. If this short jaunt through aspirational, co-design philosophies doesn't inspire you enough, I just want to leave you with this quote by the creator of Python, Guido van Rossum. "The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code, not in reams of trivial code that bores the reader to death." And at the end of the day, that's why I love teaching Python. You know, you don't bore the students to death, and in the interest of that, let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (16), [[Python (Programming Language)|Python]] (14), [[JavaScript]] (2), [[Node.js]] (1), [[Web Development]] (1)
> **CLI Commands:** python (14), node (1)
> **Definitions:** is an  (2), known as (1), means that (1)
> **Env Vars:** dry (3)
> **Exercise Files:** template (3)
> **Cross-References:** later in (1), next video (1)
> **File Paths:** node.js (1)
> **Analogies:** for example (1)

#### [Architecture of a Django project](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/architecture-of-a-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/architecture-of-a-django-project?u=76281980&t=0)** - [Instructor] In [[Django]], there are projects and applications, or apps. A project is a thing that you get when you run django-admin startproject. It has some settings, a urls.py file, and a collection of applications that it can use. So projects contain many apps. An app is a group of models, views, and templates. It generally concerns itself with a single feature of the project. But how you choose to define what a feature is and how you divide your project up into features, of course, is a prized skill in software engineering. So this makes Django really powerful if you have many sites or projects and you want to reuse a feature across all of them. You literally copy-paste the app to a new site. So remember, in the previous video, I talked about loose coupling? The project-app model allows you to port models from project to project. And assuming those apps are well-written, they should just apply that feature seamlessly in the new project. So you can think of apps a bit like [[WordPress]] widgets, if you've used WordPress before. Django follows the MVC design principle, just with a different name. So Django uses MTV, or a Model, Template, View. A Django view is an MVC controller. And a Django template is an MVC view. So MVC is actually MTV in Django. That's a little bit confusing. At least models are the same in both paradigms, right? So a model contains the data and structure of the objects. The templates carry the final rendering to the user. And the views sit in between containing the business logic and handling HTTP requests. Ultimately, the job of all web frameworks
>
> **[1:34](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/architecture-of-a-django-project?u=76281980&t=94)** is to handle requests and serve up some client-side data, whether that's [[HTML]], [[JavaScript]], [[JSON]]-formatted data, files, whatever. So let's look at the flow of our web request in Django. The request goes to the urls.py file. So that's specific to the project, not an app. You're not going to find an app with a urls.py file. There's just one in the project directory. So it's sort of the entry point of every single request. And based on this urls.py file, Django knows which view to send the request to. So then we get into this app-specific view. And this view takes care of fetching any model instances it needs, handling authentication, whatever. It also knows which template it needs. So it fetches this template, bundles it up with any model instances or other data, and we call this data "context". So it takes this context and this template and bundles it up into an HTTP response, which gets sent back to the user. The other important thing to know about is the settings.py file. We're going to be doing a lot with the settings.py file. So just like urls.py, there's just one of these per project. It controls a lot of things. Logging, caching, what apps and packages the project knows about, where the database lives, what languages and time zones the project is using. All apps are beholden to it. They reference it. They need it. I like to think of the settings.py file as sort of the heart of a Django project. In fact, your Django server is pretty robust. It can handle just about any unexpected error, but it's going to immediately crash if the settings.py goes missing, for whatever reason.
>
> **[3:07](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/architecture-of-a-django-project?u=76281980&t=187)** The settings.py file also contain secrets that are important to protect if, say, you have your app on [[GitHub]]. So keep that in mind. Anyway, this is a very brief overview of Django. So without further ado, let's get to the specifics of our project in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (13), [[WordPress]] (2), [[HTML]] (1), [[JavaScript]] (1), [[JSON]] (1)
> **File Paths:** urls.py (5), settings.py (5)
> **Env Vars:** mvc (4), mtv (2), http (2), html (1), json (1)
> **Definitions:** is a  (4), is an  (2), we call this (1)
> **Exercise Files:** template (5)
> **Cross-References:** previous video (1), in the next (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)

#### [Running Django](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/running-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/running-django?u=76281980&t=0)** - So you might be asking yourself, what's up with manage.py? We do it a lot in [[Django]]. Every command, manage.py this, manage.py that. Sometimes, like when you start a Django project, you have to use Django-admin. So like, it's Django-admin startproject friendsbook. And you might actually use Django-admin for a lot of commands, that you can also use manage.py for. So like, we could actually do django-admin runserver and this fails, but the reason it fails isn't because django-admin isn't capable of running this server. If you read the stack trace it's actually missing some settings, and those are the settings, in the settings.py file on the project here. So it turns out that manage.py, which I have open here, is actually just a thin wrapper around the Django command line function. And if you do cat /usr/local/bin/django-admin, or wherever you have django-admin stored, you'll see it looks a lot like manage.py. So we have this execute_from_command_line in both files. There are two differences, one, that manage.py is actually run from your local project directory, whereas django-admin is run from this bin directory here. And the other difference is that manage.py knows where these settings are, so it has information about the settings file in there. So one way you can see this is if I type django-admin shell, we get a Django shell here, and then if I try to do from post.models import Post, I get an error. No module named post.
>
> **[1:32](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/running-django?u=76281980&t=92)** And then if I run [[Python (Programming Language)|python]] manage.py shell, and then I do the same thing from post.models import Post, there, it works just fine. And actually the Django shell is super handy if you want to try out a line without running the whole server. Okay, so, what if you really really want to use django-admin instead of manage.py, maybe you have multiple settings files and you want to switch back and forth or something like that. What you need to do is just run django-admin and pass in settings=friendsbook.settings or whatever your settings file is. So this is using the Python import notation. So that's the friendsbook directory, and then the settings.py file. Or the other thing you can do is export DJANGO_SETTINGS_MODULE friendsbook.settings. Now keep in mind that if you do either of these things, because django-admin is being executed from your bin directory, it doesn't automatically know where friendsbook.settings is supposed to be, so you do need to add your Django project location to your Python path environment, if you want to run it from django-admin. Also as you might be suspecting, you don't have to call this file settings.py either. So it's settings.py by default, but I could change the name to say foo.py and just make sure that I either update this in my manage.py file here. So, it would be friendsbook.foo,
>
> **[3:06](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/running-django?u=76281980&t=186)** or of course, if you have Django settings modules set there. So we can actually try this out, running from manage.py. So we want to call this friendsbook.foo and then if we do python manage.py, let's just run the server, and you see here it's using the settings file friendsbook.foo to do that. And actually while I'm here, one other cool thing you can do is runserver 127.0.0.1:3141, some other fun things you can do with manage.py run on any port. You could run it on any local IP address. I like to use one sometimes, it's the PI port.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (20), [[Python (Programming Language)|Python]] (4)
> **File Paths:** manage.py (14), settings.py (4), foo.py (1)
> **CLI Commands:** python (4), cat (1), make (1)
> **Code Identifiers:** execute_from_command_line (1)
> **Ports:** :3141 (1)
> **Env Vars:** django_settings_module (1)
> **Versions:** 127.0.0 (1)
> **Tools:** command line (1)


### 2. Models and Fields

[↑ Back to Table of Contents](#table-of-contents)

#### [Validations](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/validations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/validations?u=76281980&t=0)** - There are two main types of data validations in basically all web apps. There are client side validations, so validation's done in the browser before the user submits the form, and server side validations, so checks that the server does before the data gets into the database. Generally client side validations are done as a matter of convenience to the user, and they might also help relieve some server load. So if the user knows their form submission, isn't going to be successful. It can save them the headache of submitting it and getting that failure back, maybe having to fill out the form again, and it can also save your server the pain of handling that call. However, if you only have a client side validation and you don't have that matching server side validation for the security and preventing bad actors from getting into the database, then you should expect that that client side validation will get completely ignored on a fairly regular basis by hackers and bots and crawlers, and all that. Server side is important, and the client side validations are for convenience only. Jingo out of the box handles both server and client side validations. So for instance, this max length of 140 here, this does both server and client side validation. If we try to enter more than 140 characters into the post field, it will stop allowing us to type. And if we use a bot to submit more than 140 characters anyway, that request will get to the server and the server will reject it and send it back. We can also create a custom server side validation by writing a function and throwing a validation error if that validation fails.
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/validations?u=76281980&t=93)** For instance, let's say that we don't want users submitting bad words in their posts. So words like [[Java]], waterfall, and enterprise. So, just kidding about this, I love Java. I spent a long time as a Java developer. It's a great language, but that's another discussion for another time. So we have our bad words, and let's write a validation function to go along with this. So validate no bad words in the content. And this is the content that Jingo is going to submit. That's the string that the user is trying to submit for that field. So if any [[Microsoft Word|word]] in content dot lower for word in bad words,
>
> **[2:22](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/validations?u=76281980&t=142)** I lost my parentheses there, raise validation error, this post contains bad words. Uh oh, and then we want to make sure we import validation error from Jingo dot core dot exceptions, import validation error. Okay, and then we want to add that to our list of validators. Great, so we just pass that function in. And we're not going to write a matching client side validation, so I can type Java into that post field all I want, but nothing's stopping me until I post it. And this is because like any good social media site, we may not want a complete list of all our naughty words essentially published to the internet. So sometimes you only want server side validation and not client side validation. Of course, we do want the user to know when something's wrong and roughly what the problem was. So we do need to make sure that that error message is passed along to the user. So on the post feed, we have this post form and that's where the user posts things. This is a little confusing, but if the request method is post, we go to this add post function here. And this is where the form errors happen. If the form is invalid, we have some errors there. And really we're just printing them to the server, nothing is happening with that. What we really want to do here is probably return this form object. Okay, so return the form and then set the post form as equal to the response from that.
>
> **[3:56](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/validations?u=76281980&t=236)** And instead of passing a brand new post form every time, we're going to say, post form, it's equal to that brand new post form, reset it if we're actually posting a post, and then pass the post form there, and that's all we need to do. If we look at the template in that feed, here's where we print out that form. Actually, any errors we have will just automatically be printed out there, Jingo will take care of that. Let's go test it. Okay, so we're going to test out this new thing here. We're going to submit the form. (gasps) Uh oh, the post contains some bad words. If I get rid of those bad words, no bad words there. All right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### [Custom fields](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-fields?u=76281980&t=0)** - [Instructor] So [[Django]] has a lot of different types of field objects that you can use out of the box. You can store text, dates, files, which we'll get into later, numbers, email addresses. And with validations, you can customize these to further store more specific types of data. But what if none of these quite meet your needs? So commonly, you might be storing some sort of data that can be serialized in an extremely efficient way, if you could just help Django to do that for you. to get comfortable with the idea of a custom Django field, let's look at how some of the existing ones work. And Django is open source, literally you can just open the source and take a gander at it. And looking at the charfield, it's just a class. It has a lot of information about how to take things out of the database and then put them back into the database. Get prep value, so that value is coming from the database, turns it into a [[Python (Programming Language)|Python]] object. Here's some information about the form field. And what we're going to want to do today is create a custom field that is based on the chart field. And I have a little stub for that up here. So I think one of the most crucial pieces of information that social media sites really don't collect is what your favorite color is. And so we're going to make the RGB color field to collect that. And of course the best, most convenient way for users to enter their favorite color is with hexadecimal characters. So my favorite color is C0FFEE, which is sort of a light cyan. And for ease of use, we'll just make a charfield,
>
> **[1:32](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-fields?u=76281980&t=92)** let them enter six characters, make sure they're all hexadecimal. And then when we put it in the database, we don't want to use the whole six bytes to store that. We're going to store it as that number there, which is only three bytes, so we're saving some data there. So make this new class. We want to make sure that the max length is six. So we're taking advantage of that in the charfield. This is just something that Django looks for is that set of underscore validators. And then with the external validators, we're going to append a new validation that we're going to make, all values hex. We're going to make sure that all of the values are hex. And of course, we need to define that. Validate all values hex, and I've provided these functions up here for convenience for you. And so we're just going to surround this with a try catch, so that the value gets past in there, or try except in Python. And then raise a validation error saying that this is not a hex value, whatever that value was. Now what we need to do is letting Django know how to store this in the database. And so we get to use DB type and it's just going to be an unsigned integer of three bites. So that's all we need to store it. Now, ordinarily, if you're writing this for a production,
>
> **[3:05](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-fields?u=76281980&t=185)** you might want to check that connection to see exactly what kind of database you're working with, 'cause not all [[Databases]] recognize this or respect it, but because this is just an example, we're always just going to return that string. We know we're working with [[SQL]] Lite. The next thing we want to do is from DB value. So this is going to take the integer from the database and then turn it into a Python value or a string. So if value is none, we want this to be a nullable field. Being nice, just return none. Now let's return int to hex. All right, and again, if you need to know more information about the database, the specific database implementation that the user is using, you can do that with those. And the next thing we want is to take that string value and turn it back into an integer. So that's going to be self value return hex to int. And that's literally all we need to define a new field. That's sort of the bare minimum. Of course, we want to add this. It's just RGB, no arguments there. Oh, except for we want it to be nullable. And then the next thing we need to do is add this to our form. So this is going to be on the edit form, when you edit your user account information there. So now let's Python make migrations. Sorry, Python manage.PY make migrations.
>
> **[4:43](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-fields?u=76281980&t=283)** Python manage.PY migrate. Looks like everything worked. Python manage.PY run server. Let's head over to the website. We're over in the website and we want to click to edit my account and we see we have that favorite color form there. First thing I want to do is try something that's not a valid hex filled. And, of course, we get not a valid hex value. If I try to enter more characters, I can't, but if I save C0FFEE, there we go. Let's check over in the database to see what happened. Over in the database, Python manage.PY db show. Select all from user account underscore user account where ID is one, that's my user account ID. And there we can see, we have an integer at the very end, and that is the value of coffee.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Django]] (6), [[Databases]] (1), [[SQL]] (1)
> **CLI Commands:** make (9), python (8)
> **Env Vars:** rgb (2), c0ffee (2), sql (1)
> **File Paths:** manage.py (4)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [File management](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/file-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/file-management?u=76281980&t=0)** - [Instructor] All right, in this video, we're going to be looking at managing files, in particular images, because so far our social networking site is looking a little, blah. Yeah, I know some actual front end development would help, but also you could just add some photos. We're backend developers, we can do that. All right, so [[Django]] runs a pretty tight ship and it's web server doesn't allow anyone to just access files and its directory structure willy nilly. So what we need to do is set up a media directory. We're going to define a media root here, and that's going to be at the base directory slash media. So this is the absolute directory, absolute path of your Django project on your server. And then we need to make a media directory for it to store all the pictures in, so new folder media. I think it might automatically create that directory, but just to be sure, and then we're going to make a media URL. So this is where it's going to serve the pictures up from, and we're just going to leave that empty string for now. Okay, so we need to do a few things to our app in order to actually add this new profile photo field that we want to add to the user account. But first we need to PIP install Pillow. So Pillow is a fork off of the [[Python (Programming Language)|Python]] imaging library or PIL, not sure exactly why they called it Pillow, but it's a fun name. So you can do PIP install Pillow. I already have that installed. And then we're going to go over to the user account model. So the user account model that holds all of this account information, and then we're going to say profile photo
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/file-management?u=76281980&t=95)** is equal to models dot image field. Okay, so the image fields, the new Django model, and it takes in a couple of arguments that we're going to use. So upload to, and we're going to upload to the profile photos directory. And so this is always relative to the media root. So that media directory that we just created. So all our photos are going to be uploaded to media slash profile photos, and then null true. Not everyone needs to have a profile photo. We also want to add the corresponding field to our edit form. So that's going to be in [[Forms]] right after favorite color. We can add profile photo. And then one thing we want to check is in the templates. Yes, we need to make sure that we have multi-part form data in this form, otherwise you wouldn't be able to send this image information across the wires, across the HTTP. So make sure we have multi-part form data there. All right, now, once we run the migration, so Python managed dot P-Y make migrations. It looks like it worked Python, manage dot P-Y migrate. All right, and let's head over to the website. All right, so here we are. And we can see this new profile photo field. It's a file field. We can upload a photo here. This is a picture of my daughter.
>
> **[3:07](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/file-management?u=76281980&t=187)** She looks just like me. Okay, and save the changes. When we click on this, ooh, it looks like an error. And this is because Django is going through all of these paths that we have, but it can't figure out what this is. It can't resolve it to an actual file or something that it should serve up. So we can go and fix that in the URL's dot P-Y file. All right, so over here in URL dot P-Y what we need to do is tell Django if you've tried everything else and you still don't know what this URL is, try resolving it to an image, something in the media directory. So anything at a media URL, which in this case is an empty string, check out document, root settings.media root. Of course, we need to import our settings in here. So from [Django.com](https://Django.com), import settings, and we also need to tell Django, or rather the URL dot P-Y file about this concept of a static directory. So from [django.com](https://django.com), dot URL dot static, import static. And while we're here in the code, if we want to actually add these images to our profile page, we can do that. So we go to the profile page template, and let's say, we would just want to throw it maybe next to the name that would be at slash profiled user account dot profile photo. And that should be the complete URL for that profile photo.
>
> **[4:43](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/file-management?u=76281980&t=283)** Pretty easy, of course, still need to throw quotes around that. And then let's put a little bit of a style on here. Float left, height, make it big. Yeah, that should be good. We'll see what that looks like. Should be interesting. Okay, let's go back to the website. So, now if we click on this photo, great. You see it right there. And then if we go to our profile photo, beautiful CSS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (8), [[Python (Programming Language)|Python]] (3), [[Forms]] (1)
> **Env Vars:** url (8), pip (2), pil (1), http (1), css (1)
> **CLI Commands:** make (6), python (3), pip (2)
> **UI Navigation:** click on (2), go to (2)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2), set up (1)
> **URLs:** [django.com](https://django.com) (2)
> **Analogies:** picture (1), just like (1)

#### [Generic relations](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/generic-relations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/generic-relations?u=76281980&t=0)** - [Instructor] I mentioned this business model at the beginning of the course, but we haven't really done anything with it yet. Businesses just sort of exist. So in addition to user profile pages, let's say that we also want to let businesses have their own profiles as well, but we don't want two separate profile apps. Business profiles and user profiles. We want the same profile page app, and actually the same profile page model to be able to handle both businesses and users. So, on this profile page model, you see that it has this user account object. I'm going to comment this out and we're basically going to completely redo this. I'm going to change this so that it uses a generic foreign key. This means that we're not telling the model that it's going to point to a specific type of model, like a user account. We're just going to say you have a content type and an ID, and both of these are variable. So, it's going to have a content type field models dot foreign key content type. Just some boilerplate here. Cascade on delete. No, true. Okay. So, in practice it doesn't really make sense to have this be nullable because we would never have a profile page with no subject, but because we have profile pages that already exist with user accounts that already exists, it just makes it kind of convenient when we do the switch over to just set this nullable for now. And now we have the ID.
>
> **[1:32](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/generic-relations?u=76281980&t=92)** So models, this is just going to be an integer. We're also going to make that nullable. So this is just the ID in the database for whatever our content type is. And the subject. This is the actual instance, the business model or the user account model, whatever it is. And we pass in content type and object ID and yes, these are supposed to be Strings. All right. Now, of course we have to run the migrations. So, let's do that. Picks up on the new fields around the migrations. So now we have to go to the profile page view because this has a few things. It's expecting the user account for starters. And we basically just need to change the [[Microsoft Word|word]] user account to the word subject. Now, one other thing is that only user accounts have posts. And so we need to do another check here and that's going to be on the content type. So, if profile dot content type dot model is equal to user account, we can do this check to see if it's a user account or not. Then we go get the posts. This own profile thing is a Boolean. And that just lets us know whether or not to display the edit your profile link on the page. So we can set that to false by default. And then for posts,
>
> **[3:06](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/generic-relations?u=76281980&t=186)** we can set it to an empty array by default. So, now everything should work here. Now on the template, there are a lot of things we can do here to make it nice. But for now, I'm just going to change the word user account to subject.
>
> **[3:27](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/generic-relations?u=76281980&t=207)** All right, now let's go to the admin panel. We nuked the connection between our profile page objects and their old user account objects. So now what we have to do is we have to set this to a user account and then set the object ID. So this is the Ryan user account here, and then we save it. I'm going to set the [[Representational State Transfer (REST)|rest]] of these. Okay. So, I've replaced all the connections and I've also added a profile page for our new business. This is the ACME Business, the only business that currently exists on friend's book. And that should be at profile four. All right, great. So, you see a lot of things are missing from this business, but we do have a couple of things. It looks like the location isn't showing up, but you can see how you could build a profile page around this business pretty easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2)
> **Exercise Files:** boilerplate (1), template (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** acme (1)
> **Speakers:** - [instructor] (1)

#### [Signals](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/signals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/signals?u=76281980&t=0)** - [Instructor] As you may have noticed, the profile page model is pretty crucial to the existence of our user accounts and business objects. In fact, before we allow the business to have a profile page, there isn't really a great way of viewing them in the web app. There was just sort of this extra model we couldn't really do anything with yet. In fact, it might be nice that, if, when a new user account or a business model is created, we just automatically create the profile page object and link them together. So situations like this, when you need to create additional models on the creation of one are pretty common. There are technically a few ways to do it, but probably the easiest to use is [[Django]] signals. So Django has this concept of signals, kind of similar to [[JavaScript]] actions or hooks in other languages that you can use to implement this behavior. So when the model is saved, not just created, but for each save, Django will send out a signal to the application that can be received by any receivers or listeners that are listening for it. So to access this, we're going to go from django.dispatch import receiver, from django.db.models.signal, import, post and you can see all these options you have there, post_save. Okay, so we need to make sure that we're using this receiver annotation there. And then we pass in post_save, which is imported. And then, the sender is going to be our UserAccount model. And we also need to make sure we import these models,
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/signals?u=76281980&t=95)** so from useraccount.models, import, UserAccount,
>
> **[1:44](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/signals?u=76281980&t=104)** then from business.models, import, Business, you know, we're going to need that one, too. Okay, great. We can use any function name we want. Profile, oops, profile_user. The first argument is going to be the instance. So this is the user account instance that was created. And then we have this Boolean. So we're listening for post_save. We don't know if it was newly created or not. So this is going to be a Boolean that we look for to see if this is a new instance, and then our keyword arguments. So if created, ProfilePage.objects.create. We're going to pass in our subject, which is going to be that instance there. Now, for the business model, we need to do that same thing again, but the center is going to be business, and we'll just rename the function here so it doesn't overwrite the previous one. That would be a silly bug. Okay, so let's save this and go test it out on the admin page. All right, so we are on the admin page for our project, going to create a new user account. So Add user account. We have some users here, remember these are just the Django sort of default user objects. And of course the user account is sort of a wrapper around them. So we're going to call this guy Chuck Smith, his birthday, let's make it, he was born yesterday, in Boston. He's very young, but he already has a favorite color, which is coffee.
>
> **[3:16](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/signals?u=76281980&t=196)** My friends call me Chuck. All right. And he is a very old looking one-day-old. Great, save that. And if we go to the profile pages and see, we have a new profile page object there, and let's just go directly to that URL. We're going to cheat a little bit, and there we go. There's that profile page automatically created for Chuck Smith.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (6), [[JavaScript]] (1)
> **Code Identifiers:** post_save (3), profile_user (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Raising exceptions](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/raising-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/raising-exceptions?u=76281980&t=0)** - [Instructor] So, so far, we've only dealt with views that return HTTP 200 status codes with some [[HTML]]. And this is the sort of happy path in [[Django]]. You find an object, you combine it with a template and then you return it to the user to create the webpage that they're looking for. Of course, with any good web project, not all paths are happy HTTP 200 responses. So let's take a look at how we can make this web app a little more robust and user-friendly by sending some errors. Now, an obvious case is in this post detail view. So you get the post by its post ID. And if it's found, you return the post with the template, but let's take a look at if it's not found. So here's the post, it's /post/ the post ID. And let's just go to a post that doesn't exist. And you can see we get a 500 error there. And this isn't quite correct. What we actually want is a 404, "Post not found." And there are a few ways we can do this. The first is to just wrap this in a try except. So except, we're going to except Post.DoesnotExist. Always good practice to accept the specific error that you're looking for. And then return, let's just do response and then passing a status code. Status 404. So that'll work. Another thing we can do is actually make this a little more specific. Django has a class that you can use to return a status 404, and that's HttpResponseNotFound. And we need to import that up here from django.http.
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/raising-exceptions?u=76281980&t=95)** Okay, great. So that'll work too. Of course, putting this try except everywhere is a little bit wordy. And so Django has a shortcut that you can use to do this. And it's literally called a shortcut. So, from django.shortcuts import get_object_or_404. So what we do is we just wrap the line that fetches our posts in this function. So, post get_object_or_404, Post, id=post_id. And then we can get rid of all of this. That return our HTTP response. And let's take a look at what happens now when we do that. Okay, so we refresh the page and you can see that we get a 404. Now this page looks okay. It has some nice debug information. But the only reason this is returned as the page says, because we have DEBUG=true in our Django settings file. If you change it to false, we actually get nothing back. It's sort of a blank page. It's just a server response 404. And that's because we don't have a nice 404 page template. Let's go back to the code and see how we can do this. If you're working on a large sort of user-facing project, you'll probably want some sort of a 404 template response that's easy to call. You don't have to write any extra code. It just kind of happens automatically for all of your views. And Django has an out of the box way to handle those sorts of situations nicely in a production environment. The first thing you want to do is go to settings.py and make sure that debug is false.
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/raising-exceptions?u=76281980&t=190)** Okay, so we're going to change that to false. The other thing we want to do is add our allowed hosts there. So, 127.0.0.1. And you need that whenever debug is false results, the website won't really work. The other thing we're going to do is make a template for this 404 error. And I actually have a template already created here, post_404, that you can use. And we're going to write a function called handler 404. Let's just write it up here. So, def handler_404(request, exception)
>
> **[3:50](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/raising-exceptions?u=76281980&t=230)** loader.get template,(post_404 .html). And I know this is a little bit wordy, but it's the only time you're going to have to write it for the whole project. So you're going to return HTTP response template.render exception. It's going to be exception. And of course we need to wrap this in quotes because it's a string. Passing the request and status is 404, of course. All right, and then in urls.py, we are going to add a little note about what our handler is here. Handler404 = handler_404. And then of course, we need to import this from post.views. Now, keep in mind, this handler_404 view is in the post app, which is awfully specific now that we're defining this to be the 404 page across the entire project. So we're putting this in urls.py. This is for our entire Django project. In actual practice we'd probably want to make a more central app like HTTP exceptions or something and put all the HTTP exception views in there. However, for the sake of example, this works fine. So, now whenever a 404 is raised in our views, we'll actually get a nice 404 page. Let's check that out. There we go. Well, the CSS could take a little work, but you get the idea.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (8), [[HTML]] (2)
> **Env Vars:** http (6), html (1), debug (1), css (1)
> **Exercise Files:** template (8)
> **CLI Commands:** make (5), find (1)
> **File Paths:** urls.py (2), settings.py (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Code Identifiers:** post_id (1)

#### [Class-based views](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/class-based-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/class-based-views?u=76281980&t=0)** - [Trainer] So we've been doing a lot with our views and they're starting to look a little messy. You can imagine in a large app or project, you might start to have huge view files with lots and lots of little functions taking in some argument and turning them into templates. There's also a lot of the same lines, boilerplate code over and over again. Class-based views in [[Django]] are designed to solve this problem. So let's take a look at a simple class-based view to replace the post feed on the homepage. So this is that list of all the post objects that have been created by anyone on the site. Let's start by extending Django's ListView. So this is a view that's designed to handle the display of lists of a single object. So in this case, the post. So we're going to make a new class called PostList, extends to ListView, model is of course a post. We're going to make a get function. So this as you can imagine, handles get requests. And we're basically going to copy this stuff here and we're going to stick it under this get function. And this just kind of organizes our get and post requests and makes it easy to read and then see what's going on with this list. All right, and of course, in urls.py, we need to make sure that this is called appropriately. Let's make it a separate path for our new PostList view experiment. So we need to make sure that we PostList or extending ListView, but we called it PostList. And then we need to make a path postlist,
>
> **[1:37](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/class-based-views?u=76281980&t=97)** PostList.as_view, that's just how you call it and then name, let's just give it postlist. All right, and let's check it out to see what it looks like. All right, so here's our new postlist. And as you can see, it looks exactly like the original feed. So, so far so good. Let's go back to the code and see what else we can do with this. And there's actually a much slicker thing we can do with this. We don't actually need this get method at all. And we can add pagination by harnessing the powers of the Django ListView here. So let's add an argument paginate_by=2 and the template name, we just define it up here. I'm going to call it post_pagination.[[HTML]], and you'll see that I've already included this in the code. So I just wrote this beforehand, notice that it has a page object passed in. So this is just something that's defined by Django. This page object is this list of posts. And so because this is a ListView, of course, it handles lists of things, our model is the post. Great, it passes it as a list into page object. And it also has some pagination options here that you can make a little html paginator down here. Let's see what this looks like. All right, so here's our paginator view and you can see it works pretty well. You'll also notice that our form is actually missing. We still have the Submit Form button
>
> **[3:11](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/class-based-views?u=76281980&t=191)** that our form is kind of broken. So let's go back and I'll show you how to fix that. So we're actually completely missing this form in the context that we're passing to the template. I mean, four lines in the view to get a paginator is pretty cool, but we do need to add some extra context that we want for this page. And we can do that with the get_context_data passing the keyword arguments, context is equal to super(PostList, self).get_context_data. So we need to get the context data of the parent class, and that's going to be the page object and all of that. And then we're just going to add to it. We're going to add our form. We're going to sneak that in there before it gets sent to the template and then return context. So now if we refresh the page, we should have that form there. The other thing that we need to do is keep in mind that if we actually submit a post using the form, this ListView needs to be able to handle a post request, and as you might guess from the way that we handled get requests earlier, you do that with the post function or the post method in here. And we can sort of do that just by copying that. And so we can sort of reuse our previous functions, put that functionality in there. Indenting's a little wrong. There we go, okay.
>
> **[4:43](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/class-based-views?u=76281980&t=283)** All right, so now we have a great ListView, it has pagination, it has a form, you could submit the post and that's how you use ListsViews.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[HTML]] (2)
> **CLI Commands:** make (7)
> **Code Identifiers:** get_context_data (2), as_view (1), paginate_by (1), post_pagination (1)
> **Exercise Files:** template (3), boilerplate (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** urls.py (1), post_pagination.html (1)
> **Analogies:** imagine (2)
> **Cross-References:** go back to (1)

#### [QuerySets and filters](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/querysets-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/querysets-and-filters?u=76281980&t=0)** - Whenever you retrieve a list of objects from the database with a line like this, or like on the profile page with the line like this, where you're filtering based on the author, you're using a [[Django]] QuerySet. So, Django QuerySets could be constructed, filtered, sliced. There are a lot of things you can do with them without Django ever actually hitting the database. So, Djingo waits until the last possible moment when the query set is evaluated for it to actually make that database request. So, [[Database Queries]] can be expensive and hold up site execution. So, it's worth knowing what's going on under the hood with these. For instance, if I take this line here and then just turn this into a list, actually kind of seems like the same thing. You know, I could send this back to the template just fine. But the interesting thing is that you do this. If I just write this Django, doesn't actually hit the database on this line. It'll wait and tell it, renders the template. But if I surround this, they list, it actually goes and hits the database at this line. So, Django is required to evaluate the query at the point when it needs to construct the list object. So, this might seem like a trivial difference, but it actually becomes important when you have situations like for example, this. Okay. So, we have two different queries here. In the first case, we're filtering using the query set object, right? All of the filtering is being done in the database where
>
> **[1:34](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/querysets-and-filters?u=76281980&t=94)** it's relatively efficient. Django, basically constructs an [[SQL]] query where this filtering is done. But in the second case, we're doing something kind of ridiculous and returning every post object, turning it into [[Python (Programming Language)|Python]] list and then filtering it on the Python server. This is going to be far less efficient. Now, keep in mind, you're not always going to see the situation so nicely written on one line like this. You may see situations where you do some filtering in the query set and then other filtering later on when you never need to do that filtering on the server. So, it's important to be aware of what's being done in the database what's being done in Python and how the two interact. Here's another pitfall that comes up a lot. So, we do something like total posts equals post-opt objects dot all dot length. Okay. And then we can also do total posts equals post dot objects, dot count. In the first case we're telling Django select all the data from the post table, send it back to me and then tell me what the length of that list in memory is. In the second case, we're telling Django select the count of rows in the post table, and then send that into juror back to me. And this is far more efficient. In fact, most [[Databases]], the length of the table is pre-calculated it's trashed somewhere. It's just a simple lookup. Whereas in the first case, you're dumping the entire table and to your Python server's
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/querysets-and-filters?u=76281980&t=190)** memory to get the exact same result. It is so important to understand how Django and your databases are interacting through query sets. So, with that doom and gloom out of the way, let's look at how to construct some more complex queries in Django. For example, I have this feed of posts from users on the front page. I'd probably want to exclude my own posts, right? I wrote them, you know, I've already seen them. Don't want to see them again. So, I can actually do something like this, post stop objects, stop exclude author equals requests dot user, and then order by created on. This sorts in ascending order oldest states first, which is the default with the Django. So, to sort in descending order, it's a little non-standard, but you just need to add a minus sign to the beginning of the string. Okay. So, this might seem a little odd, but keep in mind, these strings need to be valid Python class attributes, right? And those can't start with a minus sign. So, Django is perfectly safe interpreting any leading minus signs as descending order here and there we go. So, we made our posts feed a little more usable. We're letting the database handle all the heavy lifting that it's designed to do with filtering and sorting our objects. Definitely want to get rid of this line up here and everything looks great. Now, obviously there are a ton of other query set functions out there. This video could be many hours long, but rather than do that, make sure you check out the Django documentation whenever you need a way to sort combined filter or otherwise manipulate objects from the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (13), [[Python (Programming Language)|Python]] (5), [[Databases]] (2), [[Database Queries]] (1), [[SQL]] (1)
> **CLI Commands:** python (5), make (2)
> **Warnings:** keep in mind (2), be aware (1), pitfall (1)
> **Analogies:** for example (2), for instance (1)
> **Exercise Files:** template (2)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** required to (1)


### 4. Interacting with the Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Deleting models](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/deleting-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/deleting-models?u=76281980&t=0)** - [Instructor] Okay. Let's drill into a particular aspect of [[Django]] that's often glossed over, and that is the on delete attribute in model fields. So if you've ever used object relational mappers, ORMs in programming or taken a deep dive into foreign keys in [[SQL]], you'll likely be familiar with this concept. And this attribute tells Django what to do with the object when its parent is deleted. So in this post model, for example, I have on delete cascade in the user field. And what this says is that if the associated user is deleted, we should also delete any post objects associated with that user. So that deletion cascades down when that user is deleted. So cascade is the most common one you'll see, because this is the most common relationship that developers want to implement. When the parents are deleted, you clean it up and clean up all their children, get rid of all of that and make things nice. But there are other options as well. And you'll often hear about these on delete relationships talked about in the context of blog posts and comments. So just for fun, and to add a little more functionality to our website, I've created big reveal, eight comment model. Yay. And this comment model is basically the same thing as a post, except you see I've added a post field. So the post is the parent and the comment is the child. Okay. And notice that this on delete relationship is cascade. And so if I delete the post,
>
> **[1:34](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/deleting-models?u=76281980&t=94)** it should delete any child comments. And let's go to the website. So I've updated the post detailed template to include any child comments here. And so you see there's a post by Alice, and then Alice commented on her own post. So if we go visit that in the admin section of the website, here it is, this is the parent post. If I go to delete it, just asks me if I'm sure, it says that all of these things will be deleted there. So let's go back and look at some other options. All right. So let's take this relationship here and change it to protect. Okay, so this is a different on delete relationship. And if we go back to the admin panel, all right, we don't actually need to refresh it, but if I go to delete now, what happens is that we cannot delete this post. It simply won't let us delete it and tell that comment is deleted. So protect, protects its children. The children have to be deleted first before the parent can be deleted. Okay. Let's look at another relationship here. So let's change this to restrict now and check out what that does. This is a little more complicated. It will allow itself to be deleted if a grandparent level object is deleted, but cannot be deleted through the immediate parent alone. So let's look at that. So if I go to post four and try to delete it, I can't delete it because there's
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/deleting-models?u=76281980&t=190)** that restrict relationship. I can't delete the comment through the immediate parent. Okay. If I go to Alice's user and delete that, now I can and there's that cascading relationship that happens. There is one other hitch though, with the restrict relationship. And that is, in a situation like this. So here I have a post by Bob and a comment by Alice. So now if I go and try and delete Bob's user, it actually won't let me, because that would orphan Alice's comment. So you can delete the grandparent if that wouldn't leave anything orphaned as children underneath it, or as grandchildren underneath it. So we can test that out, go to users, go to Bob, then try and delete that because of Alice's comment on his posts and that would be orphaned. And there are a couple other relationships worth noting here, and that is set null and also set default. And they're actually very similar. So if the parent is deleted, then you either set the foreign key to null, or you set it to some default value. This can be handy if, for example, a user deletes their account, but you want to keep their posts on the website around for posterity, or you just display a deleted user sign instead of their username or something like that. And those are also worth checking out. It can be handy in certain situations.
>
> **[4:42](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/deleting-models?u=76281980&t=282)** And that's it, you're now on delete expert.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[SQL]] (1)
> **UI Navigation:** go to (7)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)

#### [Custom object managers](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-object-managers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-object-managers?u=76281980&t=0)** - [Instructor] You can build just about anything in [[Django]] without ever knowing or caring much about the existence of the manager. So the manager is the wizard behind the magic that makes everything work. But let's pull back the screen for a minute and examine the manager. So we've written a lot of lines that look like this: Post.objects.exclude or, you know, in the past we've seen Post.objects.all, things like that, but what is this .objects? What is objects? So you can see this in the Django shell, from post.models import Post, post.objects, oops, Post.objects, all right. So that is a manager, but what is a manager? Managers return query set objects. So when I say post.objects.all, all is a method that returns a query set object, which remember, a query set object is a wrapper around a database query itself. So managers are responsible for organizing methods that return different types of query sets. So Django has this default manager for every model, and this is the thing at objects right there. That's the default manager, but we can also create a custom manager. So custom managers are good for encapsulating filters or query parameters that you need to reference over and over again, or ones that may be complicated and you want to share in multiple places. For instance, you might have some complex query logic about say, which posts show up on the front page of a website
>
> **[1:36](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-object-managers?u=76281980&t=96)** and you want lots and lots of different places to be able to reference that business logic without knowing or caring much about what that logic is exactly. So let's write a custom manager for our home page post feed. We want to make a new file in post called managers.py. And we're going to import models. Class, we'll call it the FeedManager because we're using it to manage our own page feed. And that extends models.Manager, and we'll make a function called get_feed, self, request, we need that request there. And what it's going to return is this query set right there.
>
> **[2:27](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-object-managers?u=76281980&t=147)** So we don't have access to this Post object, but what we actually want here? So remember this is the manager, but now we are the manager, self.exclude, right? We are extending Manager, we have access to that. So we've just encapsulated this complicated business logic, and we need to make sure that this feed manager is added to our post object now. So what we're going to do, add a couple lines and we're going to say feed_manager is equal to FeedManager(). I'll just add one line, a little bit of white space there. And of course we want to import it, from .managers import FeedManager. Okay. So this kind of looks like a field. It looks like a data field just like these, but it's not, it's not stored in the database. We don't need to run migrate. It's really just an attribute that we now have access to. It's sort of like a static attribute on this class here. Okay? So let's make sure we save that, save that. And then now we should have access to Post.feed_manager. Oh, what did we call this? Get_feed, of course, get_feed, pass in our request object there. Okay. So now if we run the server.
>
> **[3:55](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-object-managers?u=76281980&t=235)** And let's check out the homepage. And there we go! Our feed is just as awesome as ever.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3)
> **Definitions:** is a  (4), we call this (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** get_feed (2), feed_manager (2)
> **Analogies:** for instance (1), just like (1)
> **File Paths:** managers.py (1)
> **Speakers:** - [instructor] (1)

#### [Fetching fields](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/fetching-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/fetching-fields?u=76281980&t=0)** - [Instructor] In chapter three, we introduced query sets and highlighted the importance of understanding database load, when things are executed, and making sure that you're using your database efficiently. And in this video, we're going to talk about another way to optimize performance in [[Django]] that depends a lot on the specifics of what kind of database you're using, what kind of fields are in your model, and what the front end application requires. If you do it right, you can increase performance, but if you do it wrong, you can really decrease performance quite a bit. So we're going to look at two query set functions that on their face are quite simple, and that is Defer and Only. So you'd call them like user accounts, user account dot objects dot defer, and user account user account objects dot only, okay. And to illustrate their usage, I've made this new page called Account List. So let's go check that out. So here's the account list, and you can see that it only requires the first name and the last name of all of the users here. So that's a big hint. Only the first name and the last name. Let's go back to the code. So one obvious thing we could do here is do first name comma last name. All right, and get rid of this. We don't want to use that anymore. So when we make a query set using only the first name and the last name, the user account models will still be returned. And we can use those user account models as normal, but only the first name and the last name will be populated until we access some other attribute
>
> **[1:36](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/fetching-fields?u=76281980&t=96)** in the template or something. Some part of the code needs to access something other than the first name and the last name. In which case it will go out, make another database request to [[Fetch]] explicitly that thing that was required. Okay, so there's a little bit of a warning there. Defer is the opposite of only. So one thing that we might want to defer is the About field. It's kind of big, right? And this is saying fetch all of the attributes except the About field. Now, if I specifically use the about field later, again, we go back to the database and we fetch it then, but for now, don't bring it back. And these might seem like really obvious use cases for our account list page, but let's talk about the good, the bad and the ugly side of using these and why you might not want to be so quick to use them. So let's take a look at the database. Okay, and we're using [[SQL]] Lite, but I'm going to talk about the database from the perspective of say [[MySQL]] or [[Microsoft SQL Server|SQL Server]] or something like that. So table info, user account. So this is just describing our user account table there. So in this table, we have a few varchar fields with a defined length at 140 there. We have a date time. We know the length of the date time. Even the integer field is limited to four bytes. So the database actually knows the whole size of each record and writes it to the disc so that it loads
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/fetching-fields?u=76281980&t=190)** the entire record at once every time you request even just a subset of the fields in this record. And then there's the text field. In SQL Server or mySQL, this would be a varchar max. And what's the size of this field? So in theory, it's unlimited. It could be of any size. And the way that works is that it will actually write the first 4k or eight K of this field alongside all the other fields so that it's loaded into memory alongside everything else. But if this field gets too large, it actually just stores a pointer to the [[Representational State Transfer (REST)|rest]] of the record. It says for the rest of it, go look somewhere else in memory. So that's a little bit expensive to load. That's the only case where it's really expensive to load. And so let's say that you know this About text field is very, very large. People are putting whole novels into it, right? And you know that fetching this data, particularly for a large list of people when you don't need to display it, could get expensive. So yeah, great, use this defer about. Fantastic. But what happens if say you store this somewhere, someone copies and pastes this line, maybe you put it in a custom manager somewhere, and then someone wants to use it, say for the user account page? Okay, well now we have a problem because on this user account edit page, it actually references About. And now instead of making one database call, you're making two database calls
>
> **[4:44](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/fetching-fields?u=76281980&t=284)** when it could have easily been done in one. So, you know, this is a really good example where you should be careful with deferring fields. It may multiply your database costs. Also be careful when using Only. It may not save you that much.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[MySQL]] (2), [[Microsoft SQL Server|Sql server]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Django]] (1)
> **CLI Commands:** make (2), mysql (2)
> **Env Vars:** sql (3)
> **Warnings:** be careful (2), warning (1)
> **Code Identifiers:** mysql (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### 5. Templates

[↑ Back to Table of Contents](#table-of-contents)

#### [The Django template language](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-django-template-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-django-template-language?u=76281980&t=0)** - [Instructor] All right, the [[Django]] template language. So far in this series we've seen and worked with some templates. I'm going to assume that you already know a bit about writing them and how all those little curly braces work. But let's take a step back real quick and go over some basics. So the Django template language is basically anything you're entering in between the template tags like these. So anything outside of the curly braces has to be [[HTML]] or [[JavaScript]], client-side code. Anything inside of them is server-side code. When we talk about the Django template language we're talking about the stuff inside of those braces, and this stuff is not [[Python (Programming Language)|Python]]. You can't start writing whatever Python code you want in here. These are not Python files. While the templates are fed into a Python application that application doesn't go around executing all the template code as Python. It interprets it as the Django template language. So the Django template language is actually a whole language onto itself. And let's examine this template. So this is the post feed template, and let's look at some of the things that we might be able to do with it. So we see this tag here, tags have the percent signs in the curly braces. And this particular tag protects against cross-site forgery attacks. So CSRF cross-site forgery. And then we have this variable here inside the double curly braces. This is a variable is the code for our Django form. Anything inside a variable tags get replaced with a computed result of whatever's in them. So, hopefully this computed result is valid HTML. And speaking of valid HTML, let's take a look at the feed. So this is kind of a funny post that user Charlie made.
>
> **[1:37](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-django-template-language?u=76281980&t=97)** Looks like he's trying to hack the website. But we can see that nothing bad is happening here because that HTML is getting escaped by Django. But what if we use some filters? So you see where the post content is getting printed. We can actually use a filter here called safe. No spaces, I'm used to writing Python. And this actually replaces the default Django filter for this text which was previously the escaped HTML. We're passing the content of the post to the function safe, which just spits out the raw string without doing any escaping. So if we save that and then refresh the page. All right, we get a fun message from Charlie. We can do the same thing in another way. We can take off this filter there and we can actually do autoescape off and then endautoescape. Okay, and if we go back over, we should get the same result. Cool. So there are a lot of instances in the Django template language where you can do the exact same thing in two different ways. For instance comments. We just format that. So this is a comment and then this is also a comment if you want to write large block comments you could do that. But let's look at other nifty thing in the Django template language. Remember how one of the founding principles
>
> **[3:09](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-django-template-language?u=76281980&t=189)** of Django is dry, don't repeat yourself. But we're kind of repeating ourself a lot with this whole post feed thing. Remember on the profile pages also you have a post feed, right? So this template is called feed.html and if we go to the profile page here we have very similar content. So we can actually do include feed.html. Okay, and let's put this in a comment. Comment and I do that outside before endcomment.
>
> **[3:55](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/the-django-template-language?u=76281980&t=235)** Okay, great. Now, if we go to a profile page here, slash profile one. (chuckling) well, it looks like I need to do a little coding to clean this up, but you get the idea. (chuckling) We have a really great feed on our profile page just with our own profile of posts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (11), [[HTML]] (7), [[Python (Programming Language)|Python]] (6), [[JavaScript]] (1)
> **Exercise Files:** template (12)
> **CLI Commands:** python (6)
> **Env Vars:** html (5), csrf (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** feed.html (2)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (1)

#### [Humanize library](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/humanize-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/humanize-library?u=76281980&t=0)** - [Instructor] So we've seen a few things from the [[Django]].contrib collection of packages before. For instance content type and generic foreign key classes. So everything under contrib is technically optional. You can create a whole Django application without importing anything from contrib. But the reason these packages exist is because of Django and [[Python (Programming Language)|Python]]'s shared battery included philosophy. So you should be able to develop, just about any full featured project without needing to install third party libraries in order to do that. Granted, there are a lot of third party Django and Python libraries that I like, and that are very useful, but I rarely really need them. Anyway, the humanized library is one of those things, that's included with your default Django setup. It's under contrib. But you do need to take a couple extra steps to actually use it in your project. And one of those is to add it to your installed apps list in the settings file. So I'm just going to add django.contrib.humanize. And we're going to explore this library a little bit. If we go to the profile page template, let's make sure to load this librarian here now. So load humanize. All right. And one of the cool things we get with this, is the naturalday filter there. So if we go to the profile page on the website, we can see what that does. Okay, great. So we have the user Alice. Her birthday I set it to yesterday's date. And when I reload the profile page, it literally says that her birthday is yesterday.
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/humanize-library?u=76281980&t=95)** So what's really cool about this is that it will say, if her birthday was two years and three months ago, it'll literally say that. And lot of little things that programmers don't generally think of, when they're coding this. So, one day ago versus yesterday, sort of natural language things that we don't think of. And rather than writing it yourself, there's a library that does that for you. So let's check out some other features of this. Okay. So let's look at, for example, how we would display, how many seconds have passed since the date of someone's birth. So if we go to the views, I have this get_seconds_since function there. And what we're going to do is we're going to add some context. We're just going to call it seconds_since. And we're going to set it to get_seconds_since. And that would be profile.user.birthday. Oh sorry, profile.subject.birthday. Okay. We changed it from user to subject. Okay. Okay. So now if we go to the template, we can add that in. So, let's just change this. This is going to be seconds_since and we're going to use intword, seconds ago. Okay, great. And go back to the profile. And let's check up my own profile here. All right. I was born 1 billion seconds ago. That's depressing. Now let's see if we can localize this text.
>
> **[3:09](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/humanize-library?u=76281980&t=189)** So the humanized library, also does international localization, which is pretty cool. So again, we need to go to the settings file. We have use localization set to true, and we want the language code instead of 'en-us'. We want that to be 'de' okay for let's just do German for fun. Then we go to the template. Okay. And we are going to say, load, localization, zero, n. Okay. And let's put this up with the [[Representational State Transfer (REST)|rest]] of the load statements to keep things organized. And right around the birthday line, we're going to say, localize on. And then after the birthday line, we'll do endlocalize. Okay, great. Let's go back to the profile. All right. And now it's in German. Now, this obviously isn't a complete solution to the problem of localization. But the reason I use this example is to show how powerful and flexible the humanized library is and how well it fits in with the Django ecosystem. Working with the language configurations in the settings file and just working out of the box really nicely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (7), [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** go to (6)
> **Code Identifiers:** get_seconds_since (2), seconds_since (2)
> **CLI Commands:** python (2), make (1)
> **Exercise Files:** template (3)
> **Cross-References:** go back to (2)
> **Analogies:** for instance (1), for example (1)
> **Prerequisites:** install (1), setup (1)

#### [Custom tags and filters](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-tags-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-tags-and-filters?u=76281980&t=0)** - [Teacher] So far, we've seen some cool filters that are provided by [[Django]] and the humanized library like intword here. And so all filters are actually just functions. There exists a function called intward that the humanized library provides. And as you might've guessed, you can also write your very own filter functions. So let's write a filter function that removes all instances of more than one exclamation point in a row in a post and replaces it with a single exclamation point. So for example, in this post, by our friend, Charles here as a new Englander personally, this is just entirely too much excitement for me. So all these exclamation points are going to get replaced by just a single exclamation point. So the first thing we want to do is make a new directory called template tags. Okay. And of course, we need to add our init.py file there. And then in template tags, we're going to make a new file and we can call this anything we want. Let's called it curb your enthusiasm.py. All right and import regular expressions library that'll make life nice for us and from Django import template. So we need to register our new filter with the Django template library, so that Django knows that we can load an entire templates. Okay. And then provide this decorator here, register.filter, and we need to give it a name, call it single exclamation, single exclamation.
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-tags-and-filters?u=76281980&t=95)** And here is our function. So value is that string, the post string that gets passed in, and that's what we need to operate on. So we're going to substitute all instances of one or more exclamation points in a row with just a single exclamation point. Okay, great. And then if we go over to the post feed template, we need to load it at the top here. So load, curb your enthusiasm. Okay, great. And now here we should have access to that filter. So single exclamation, I'm just going to restart and then go check it out. All right. And we can see that the enthusiasm has been properly moderated. Okay, so what if we want to pass in arguments to our filter? Let's go back to the code. So we can pass an argument's to our filter like an integer argument that says how many exclamation points will allow in a post. That might be interesting. So let's go to this template function and we need an argument for our args here. So this'll just be the argument integer three. And let's rewrite this a little bit. So we're going to have to do a little bit of a complicated pattern for this. We're going to generate some regular expressions. So arg-1, and then another exclamation point one or more there.
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/custom-tags-and-filters?u=76281980&t=190)** Okay. Oops, sorry. That's args-1. And so basically what this is, that it dynamically generates a regular expression pattern that matches this number of exclamation points in a row. And then what we can do is just stick that pattern in here and we pass in the value and we could also do something maybe a little more charitable. Like if they have five exclamation points in a row, we can give them three exclamation points in a row. So just a little bit of [[Python (Programming Language)|Python]] string arithmetic there. And so let's go see what that looks like. All right. That is an appropriate level of enthusiasm right there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Python (Programming Language)|Python]] (1)
> **Exercise Files:** template (6)
> **CLI Commands:** make (3), python (1)
> **File Paths:** init.py (1), enthusiasm.py (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Variables as templates](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/variables-as-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/variables-as-templates?u=76281980&t=0)** - [Instructor] So in most [[Django]] projects, templates are stored in a template file on the web server, like this one in the profile page. But what if they were more dynamic? Template files contains strings. Template files really are just strings. They can be loaded and manipulated and passed around as strings. And strings can be stored in a database, say in a model like the one I've created here. With the exercise files, you'll see a new app called dbtemplates. This app contains a single model called the DBTemplate. It has an author and most importantly, a text field called content. Let's say that I want to create a new template as a string, entering it into this text field on the admin site. And let's assume that that template uses the same context object that gets passed to the profile model, so user account and user profile information. Let's go do it. Okay, so I'm going to add a new db template. The author will be Ryan, and let's just start by adding some body tags and then do some inline styles. We don't have to be very fancy here. Background color is going to be black because this is my own custom template, I can do whatever I want. Make some ridiculously large text, make some more styles. Color is going to be, and here we're going to use the template tags, profile.subject.favorite_color. We can use that favorite color custom field that we made. This is some custom content.
>
> **[1:34](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/variables-as-templates?u=76281980&t=94)** All right. And then save it. All right, so how do we actually get this template to render? Well, if we go to the profile page views, I'm going to add a new view called custom content. And it's going to look a lot like the profile detail view. It's going to have a request and a profile page ID. Now we need to import a couple of new things from Django template up here. We're going to import the base template class and the base context class. We'll also need to import our model from dbtemplates.models import DBTemplate. All right, so this is the base template class, and you can actually instantiate a new template by passing a string, which we'll access in this way. So template is going to be a new template, DBTemplate.objects.get author is going to be request.user.content. Okay, so this is a little rough. I'm assuming that this author only has a single template, but we could also access it by ID, some status on the model that you label it with, whatever you want. So then we need to get the profile page for the context. And we're going to wrap this in a context object, and we're going to do the exact same thing that we did in the profile detail view. And we're going to say, context is equal to context profile, profile. Okay, then we returned HttpResponse template.render with the context. All right,
>
> **[3:07](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/variables-as-templates?u=76281980&t=187)** now let's go over to the URLs file and let's import custom content. And then we're just going to add a new path. Let's actually copy this stuff here. We're going to make it look very much like that. We'll call it custom, custom content and we'll call this a custom page. All right, great. And let's go check it out. So if I navigate to custom one, fantastic. This is some custom content. Okay, so a caveat with this, this solution is crazy dangerous to put into production without stringent limitations on who can view and publish templates and what they can write in here. It can make your project vulnerable to cross-site scripting attacks. I mean, just for starters, it bypasses a lot of the safeguards in the Django template engine, all of the stuff. And it's basically just compiling your own template directly without using the whole Django system. So if you want to implement a system like this in production, you'll at the very least want to strictly control who can create and modify templates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4)
> **Exercise Files:** template (19), exercise files (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (1), navigate to (1)
> **Code Identifiers:** favorite_color (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### 6. Improving Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing authentication](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/securing-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/securing-authentication?u=76281980&t=0)** - [Instructor] Let's talk about security. In the section, we're going to be primarily working with the Auth App, that comes installed with the [[Django]] by default. So you can see this in the settings.py file. And this is the Django app that includes the user object. So if we look at our user account app, we can see that we've imported the user object here. And with all Django models, you can see all of the instances that you have of that model on the admin site, and you can edit them. So let's go check that out. So this is the user account instance for the user, Alice, and you can see she has a username, a password, there's a special password-edit form there. And one thing to note about these salts is that every user account in Django has a different salt. And so if you have, for example, 10 users with the same password, they'll actually hash two different things, which is a pretty cool security feature. Let's talk about these permission boxes real quick. So checking staff status just gives the user the access to this admin interface, but it doesn't let them necessarily do anything or see anything or make any changes. You have to give them specific permissions using this form in order to let them actually do things on the admin site. Of course, you can also check the Super-user box, but that's not recommended. If you have a bunch of admins on a site, you don't necessarily want to give them all super-user status, instead, you want to give them staff status and then manage all their permissions through groups. And I'll show you that. So clicking the plus button takes us to this add-a-group interface.
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/securing-authentication?u=76281980&t=93)** So we could add a new group, like Post Moderator, and then add permission specifically for post moderation. So you probably want to let them add comments, delete comments, add posts, delete posts, et cetera. And if we save that and then go back to Users, this permission group will appear site-wide. So if we go to Bob's profile here, you can see, we can let him be a postmodern later as well. Let's talk about a dirty, little secret of this social media website, and that is that it doesn't really work. So if you go, well, not logged in, you go to the website, the anonymous user object is not iterable. We don't handle people not being logged into the website. In addition, there's no way to log in except through the admin page, which is only available for admin users. So let's look at how to fix that. We're going to go to our urls.py, and we're going to actually import the Auth URLs package by doing this. All the Auth URLs are going to be at slash-account, we're going to include django.contrib.auth.urls. And this will give us URLs to log in and log out, slash account. So we'll also want a template for the login page, and I've included that at user account slash templates, registration, login.[[HTML]],
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/securing-authentication?u=76281980&t=190)** I just made a login form there. And then the other thing we'll want is in settings.py, we want to add a login-redirect URL. So this is the URL that gets called after users log into the site, and we'll just redirect them to the homepage. Let's go check that out. So if we go to account/login, all right, we have our beautiful login page there, the password is "password." Okay, great, and we're redirected to the homepage. And we can also go to /account/logout. And obviously it's very easy to add a link to that if we wanted to in the header. It looks like it's taking us to the Django admin-log-out page, but obviously you can add a template specifically for user log out, and it'll display that instead. Now, one other thing that we need to take care of, if we go to the [[Vue.js|Vue]] for the post feed, what we want to do is redirect users to this login page if they're not logged in. So if not, request.user.is_authenticated, return "redirect/account," that needs to be a string, "/login." We'll just redirect them to the login page. And redirect is actually just another Django shortcut. We saw that earlier. So import redirect. All right, and let's go check this out. So here we're already logged out, and if we go to the homepage, you can see, we get redirected to the login page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (7), [[HTML]] (1), [[Vue.js|Vue]] (1)
> **UI Navigation:** go to (7)
> **File Paths:** settings.py (2), urls.py (1), login.html (1)
> **Env Vars:** url (2)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** is_authenticated (1)
> **Cross-References:** go back to (1)

#### [Caching](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/caching?u=76281980&t=0)** - [Instructor] If you've ever had to write a caching program from scratch, and I know I have, you know that they're a pain in the butt. How do you implement timeouts? How do you do key lookups most efficiently? How do you handle race conditions, all that stuff. Fortunately, [[Django]] has all of that figured out and wrapped up for us. And all we have to worry about is the keys and the values. Because at the end of the day, all caches are, it's just keys that bring you back values. So the first question is, where are we going to store our values? And the second question is, what do we want to use as keys? So that's what we're going to be discussing in this video. In order to use site-wide cache in Django, you need to add three things to your middleware settings and they need to be added in this order. So, I've taken care of that for you. And then, I've also added some sort of basic cache settings here, and that's also in the exercise files. These tell Django where to store the cache values and there are a few options, database, memory, memcached, which is an open source memory caching system with some nice features, the file system, and also a dummy cache that's just used for development. So, not this dummy cache doesn't actually cache anything, but it does implement the caching interface for testing. Again, obviously, for development purposes only. Finally, there are some settings here, three settings, that you need to have. The first is the key for which cache settings you're going to be using. The second is, what is the cache in seconds? I like to write it as 15 times 60 to make it really clear that this is a 15 minute cache.
>
> **[1:35](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/caching?u=76281980&t=95)** And then, finally, the CACHE_MIDDLEWARE_KEY_PREFIX, and this is really just if you're using caching across multiple projects. So for example, you're using the same memcached instance for multiple projects and you want to avoid collisions, but because we don't have to worry about that in this instance, we can just use an empty string here. Okay, so let's take a look at how caching is going to work on the homepage post feed. When I log in as user, "Alice" with the password, "Django", and then, three exclamation points, I get the homepage and I've added the username up there to make it really clear and easy to see who's logged in, and I'm going to log out. I'm going to log in as "ryan" with the password, "password". And, uh-oh! Clearly, there's a problem. So we told Django a lot about where we want to store the cache values, but we haven't told it much about what we want the keys to be. By default, Django uses the URL and then, any query parameters as the key. But the user object is the thing that's changing the page here and that's not in the query parameters, that's in the cookie. So what we want to do is use a Django decorator called vary_on_cookie, and let's go to the views to do that. So here's the views for the post feed and I'm going to use the decorator, vary_on_cookie, and then, we import that from django.views.decorators.vary import vary_on_cookie. from django.views.decorators.vary import vary_on_cookie. Okay, and then let's check out the cache.
>
> **[3:08](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/caching?u=76281980&t=188)** I start everything in /var/temp/django_cache/ I start everything in /var/temp/django_cache/ and you can see a couple of files there, and we're just going to rm -rf /var/temp/django_cache/ and that will effectively clear the cache. Let's run the server again. Okay, so let me log out. I'm going to log in as user, "ryan", the password, "password". Perfect. I get my own page. And then, if I log in as user, "Alice", with the password, "Django!!!" All right, great. I get Alice's page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (10)
> **Code Identifiers:** vary_on_cookie (4), django_cache (3)
> **CLI Commands:** make (2), rm (1)
> **Env Vars:** cache_middleware_key_prefix (1), url (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Sessions](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/sessions?u=76281980&t=0)** - [Instructor] Sessions are a way of storing data and tying it to a website user, not necessarily to a user account like we've been thinking about users, so it's not tied to a [[Django]] user ID necessarily, but it's tied to your current web session. And when you enable sessions in Django, it will put a session ID in the user's cookie, like this. We have a session ID there, and this session ID lasts as long as your cookie does. So session data can store a lot of different things. You might use it as a cache, or if you're building a commerce site, it's what most sites use to hold the data about what's in the user's cart, particularly for anonymous users. And in this video, we're going to look at how to save a users in progress posts as they type them so they don't lose their work if they close the page or navigate a way on this new ad post page. The default Django installation already has sessions provided in the middle layer. One way to store session data is in the Django session model object in the database. All you need to do is have django.contrib.sessions in your list of installed apps. But this isn't required. We don't have to store the session object in the database like every other model. We can also tell django to store it using the cache if you have that set up from the last video. So we have two options if we want to use the cache to store sessions, and you can use django.contrib.sessions.backends.cache, and that stores it in the cache only. However, if you also want to use the database, so it'll go to the cache first and then if it doesn't find it, goes out to the database, so you can use cached db and you can actually have the cache completely turned off if you want to do this.
>
> **[1:36](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/sessions?u=76281980&t=96)** So it's nice. It's kind of the best of both worlds. Keep in mind though, Django can also store cache data in the database, so you could be storing your cache in the database and then using the database as a backup. In addition, if you're using a file system cache, file systems are usually slower than simple database transactions. So you can accidentally get yourself in a situation where your cache is slower than the database itself. And you should also consider how important your session data is to save, how reliable your cache is. So lots of engineering decisions to make here, but I'm just showing you what's possible. Anyway, no matter which combination of features you choose to use for your cache and your sessions and your interaction of the both of those, the code to actually use sessions is the same. So in order to support saving post data before it's published, I'm going to add a new view to the post called a draft post. It takes in a request, and if request.method is equal to post, we're going to be sending our draft post here, request.session draft post. The session object here is just a dictionary, which is really nice. [[JSON]].loads, there's a little bit of decoding here because this data is sent over as bytes and then post content, okay. So this is what we're going to be sending over. And then we want to return http response status equals 200. So just make sort of a nice little API like that.
>
> **[3:10](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/sessions?u=76281980&t=190)** First we'll also want to add this path to the URLs here, draft post, and then import that. Okay, great, and let's take a look at the template for this ad post page. I did kind of a sneaky thing here. So obviously this is not a [[JavaScript]] course, but you should know what's going on. What happens is I call this function draft post every 2,000 milliseconds or two seconds, and every two seconds, it will hit that API that I've set up at draft post. And it sends over that post content that I've just kind of grabbed from this forum upon the page. So using JavaScript, I just take whatever content in that page and I send it to that view over at draft post. And of course I have to send the CSRF token so that it knows that it's actually from the page and not being spoofed. And then one last thing to put in place here. On the ad post page itself, you see I'm always making this empty post form. However, if requests.session.getdraftpost, if that exists, I want to add this to the form. Content is going to be request.session.getdraftpost. All right, and let's go check out and see what we did. A neat post that I'm in the middle of, okay, let's go turn network transactions, and you can see that every two seconds,
>
> **[4:42](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/sessions?u=76281980&t=282)** it's making that request. Then if we do a hard refresh on the page, that content is still there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (8), [[JavaScript]] (2), [[JSON]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2), csrf (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Logging](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/logging?u=76281980&t=0)** - [Instructor] In this section, I'm going to assume some familiarity with the [[Python (Programming Language)|Python]] logging package and also logging systems in general. Different log levels, what they mean, why we want to use them, et cetera. [[Django]]'s logging system extends Python's logging package. You know that thing you get when you type import logging. So in general, if you have any issues with logging in your Django project, you can read the logging docs here in order to solve them. But in this video, we're going to look at what makes logging in Django unique and some of the features they've added on top of it. So one cool thing you can do is configure logging directly in your settings.py file. So I've added a stub dictionary here, but you can define whatever dictionary configuration you want, it's right in settings. This dictionary is the exact same thing that you might pass into a logging.config.dictconfig in any other Python application. So again, if you're wondering how these configurations work, you probably want to reference the Python logging package docs, rather than anything Django specific. And if you don't put anything in your settings file, Django will use the default logging dictionary, which we can see in the Django source code. So here's a util/log in the Django source code, and you can see the default logging they have here. So let's actually copy this entire dictionary into our settings.py file. just so we can see what's going on and make some changes. Now, I don't have to copy this whole thing over if I only defined part of this dictionary. My settings would only override that specific part and defer to default logging otherwise. Now that override situations
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/logging?u=76281980&t=93)** can get a little more complicated in some edge cases. So if you have some questions about that, I would consult the Django docs. But for the sake of simplicity and so we can see or working with, let's just bring this whole thing over, okay. So when I said earlier that you want to consult the Python logging docs for information about how these configurations work, that's true. But notice that there is some Django specific stuff that gets populated for you, like django.server. And they even have a little server formatter and this formatter is actually the same thing that's printing out all of our server logs here. It has the server time in brackets with this message, gets used by the Django server handler down here. And Django has a lot of loggers, not just django.server. Let's go over to the source code and see if we can find any others. So if we search the Django source code for logging.getlogger, you can actually see a lot of loggers that they use and that are defined, and that can receive logs. Let's use one of them to view template errors in our Django project. So I'm going to take this logging dictionary and I'm going to make a new formatter for template specific errors. So django.template. Let's say in the format template error, make it really big, then add a handler. I'm going to set this to debug. Of course not Django, oops. Django template. Template is the formatter. Template, template and set it to debug.
>
> **[3:11](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/logging?u=76281980&t=191)** Keep in mind, although these are template errors, they are still server-side errors. Django is obviously a server-side application. We're not reaching out to the user's browser and collecting console logs or something. By template errors, Django means basically anything inside a template.renderfunction. So now that that's reloaded, let's actually add something to our template to make it throw an error. And so in here, I'm going to say, "This does not exist," and print out a variable that we're not passing to the context. Okay, great. So that's in our feed.[[HTML]]. And if we open up the terminal so we can see what's going on and go over to the website and refresh the page and head over to the logs. Wow, we actually have a lot of template errors and you can see our custom formatting there. So clearly we have some stuff to fix up in the templates. We can have some junior devs do that, right? So fun fact about missing context data and templates though, while we're on the subject, if you run into problems like this a lot, you can actually pass in an option. If we search the settings for options, there we go. And there's actually a string if invalid option. The admin has some work to do. And so that should eliminate at least one debug warning message and we can go and check that out. And there you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (20), [[Python (Programming Language)|Python]] (5), [[HTML]] (1)
> **Exercise Files:** template (13), source code (4)
> **CLI Commands:** python (5), make (4), find (1)
> **File Paths:** settings.py (2), logging.config (1), feed.html (1)
> **Warnings:** keep in mind (1), warning (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 7. Staying Connected

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding and using third-party packages](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/finding-and-using-third-party-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/finding-and-using-third-party-packages?u=76281980&t=0)** - [Instructor] Let's talk about third-party packages. There's a sort of hierarchy of packages when it comes to [[Django]]. First, you have all the built-in things that are used with most Django projects, like, for example, validation errors imported from django.core. Next, you have everything that's still part of Django, but not necessarily included in every project. So these are the things under django.contribs, like user's, authentication, it's still downloaded and included by default when you install Django, but it's sort of sequestered into this django.contribs library. Sometimes projects outgrow django.contrib. Maybe they weren't quite universally useful enough, maybe they just got so large Django decided it was best for the size of the code base. Whatever the reason, these technically became external packages. And you can find them here in the Django documentation. Third party packages for Django are like third-party packages for anything. You should be worried about downloading candy from strangers. Of course, sometimes strangers have the best candy. One of the most comprehensive collections of Django third party packages can be found at [djangopackages.org](https://djangopackages.org). [Djangopackages.org](https://Djangopackages.org) is searchable, categorized, they also have neat side-by-side comparisons for each package or category of packages so that you can quickly find what you're looking for. You can see what's the most popular, what will likely work best for your project. Keep in mind they will let just anyone upload code. So if you have any doubts about what you're installing on your project, the good news is that Django applications are usually fairly short and sweet. You can probably read the code
>
> **[1:31](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/finding-and-using-third-party-packages?u=76281980&t=91)** yourself and understand what's going on. So let's go over a few popular packages that are trusted, although you shouldn't take my [[Microsoft Word|word]] for it. And the first is the Django [[Representational State Transfer (REST)|REST]] framework. As we've seen, you can write some very nice HTTP APIs in Django just out of the box with views and URL endpoints. However, the Django REST framework provides some nice features such as OAuth authentication, class-based views specifically for REST APIs, easy model serialization so you can just take your Django model and spit it out into an API endpoint. There's even a [[LinkedIn]] Learning course that you can watch about it. Next, we have the Django model Utils, so if you're familiar with the [[JavaScript]], this is like the underscore library of Django. It has about every feature you'd want for your models without having to write it yourself. So soft delete, statuses on models, auto-generated excerpts so that readers can click to read more below the fold. It's just a really great library that I like to install on just about every project. Then we have Django storage. Honestly, you probably don't want a directory of profile image files sitting around on your web server in a large Django project. Just a few additions to your settings.py file can let you automatically integrate your favorite [[Cloud Storage]] solution. So this works with just about everything. Once you have a hot new package picked out, actually integrating it into your Django project is a piece of cake. Just install it as you would any other library, use PIP or download and manually install with setup.py, make to add it to your requirements.TXT file, you know, whatever you need. Then let Django know notes there,
>
> **[3:04](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/finding-and-using-third-party-packages?u=76281980&t=184)** add it to your list of installed apps in the settings.py file. In some cases you may need to run migrations that this package contains a new table to be created or something needs to be stored in your database. And from there, it's just a matter of using the packages to do whatever you need, whether that's getting access to the new settings variables that actually do neat things, new model types, new fields, or new view classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (23), [[Representational State Transfer (REST)|Rest]] (3), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1), [[JavaScript]] (1)
> **Env Vars:** rest (3), http (1), url (1), api (1), pip (1)
> **Prerequisites:** install (4), setup (1)
> **File Paths:** settings.py (2), setup.py (1), requirements.txt (1)
> **CLI Commands:** find (2), pip (1), make (1)
> **URLs:** [djangopackages.org](https://djangopackages.org) (2)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)

#### [Getting involved with the Django community](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/getting-involved-with-the-django-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/getting-involved-with-the-django-community?u=76281980&t=0)** - [Instructor] [[Django]] has been around for 16 years and is definitely not showing its age. It's an extremely well-maintained and well-documented project supported by the Django Software Foundation. The Django Software Foundation is an American non-profit built around the Django web framework. While the code for the Django web framework is written by volunteers, the Django Software Foundation does offer cash prizes to those who've gone above and beyond in the line of duty, and you can see some of their past awards here. The Django Software Foundation also has a list of members who've made notable contributions to the Django code base and/or community. So how does one get involved in all of this? Well, maybe you notice a bug in Django, something in the core code base that you want to get fixed, or maybe that you can fix yourself. Or if you want to contribute but don't notice anything wrong with Django, believe me, there is plenty of opportunity out there. Either way, the best first step is to check out Django's ticketing system. Yes, just like in corporate America, open source projects have closely watched issue trackers. You can learn more about this ticketing system and how to log in with your [[GitHub]] account on this page here. They have easy step-by-step instructions. Django's ticket tracker is here. There are currently 1,153 open tickets. Heck, you could probably make a name for yourself just by running triage on these. If the owner is nobody, like this one here, that means the ticket is up for grabs, and you can submit a patch for it yourself with a GitHub account. Once you've picked up the ticket, you can make a patch by fixing the code and making a GitHub poll request, like this one here.
>
> **[1:34](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/getting-involved-with-the-django-community?u=76281980&t=94)** They've referenced the original ticket. They've made a nice comment that summarizes what they did. If we look at the code diff, we can see that they've added a test to demonstrate the change. There was some discussion about it. There were a few changes made, and then finally it was merged in, and they're officially a Django contributor. Even if you don't plan on contributing, it's worth knowing about the system in order to get any issues you might have with Django dealt with efficiently. For example, if you run into a bug, there's a good chance you're not the first one to see it. You can search the tickets here and try to understand if the issue is being dealt with and how close it might be to being fixed. There's also the Django forums here. This is where both developers and users come together to discuss what's going on in the project, or just show off something cool they've done with it. The other exciting thing here is the Django Events. So you can check this space for announcements regarding Django Con, which usually happens in August. Anyway, I know that throughout this series, we've mostly been looking at Django through the lens of our IDE, just staring at code sitting locally on our machines. But I hope this brief foray into the world of Django helps you realize that it's part of a much larger ecosystem. If you run into problems, have questions, or even have an idea about how something could be better, there are so many resources and ways for you to connect with other people who can help you out or encourage you on your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (19), [[GitHub]] (3)
> **Tools:** github (3)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **Env Vars:** ide (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with Django](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/next-steps-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/next-steps-with-django?u=76281980&t=0)** - [Ryan] Well, this is it. Auf Wiedersehen, adieu, goodbye. But before you go, a few things to consider as you continue your [[Django]] journey, whether professionally or academically. So advanced courses are always interesting because once you reach a certain level, every advanced topic is not always going to be useful to every learner. You know, some users may not care that much about logins or [[Forms]], they might not need caching for their particular project. So really where do you go next to this point is likely going to be determined by what you need out of Django. However, there are a few resources that [[LinkedIn]] Learning provides that I wanted to highlight here. And because these are all such fantastic courses that cover their topics in so much detail, in many cases, I actually left these topics out of this course so that all of these advanced Django courses in the LinkedIn Learning Library would be complimentary to each other. And one of those topics that we didn't cover is [[Test-Driven Development]]. And this is a course taught by Nick Walter, a fantastic instructor who has a few Django courses out there. And if you have a large enterprise project that you want to make super robust and bulletproof, or at least to be able to show the receipts, this course is for you. So Django works excellently with unit tests and here you'll learn how to make comprehensive test suites that give you confidence in your project's performance. Another course by Nick Walter, "Django Forms". So we did a little bit with forms in this course, but this is a much deeper dive into them. And it also does a lot with Django models, which we didn't have time to cover here. So if you're interested at all in how to build and customize forms, also controlling the relationships between models and forms, this course is for you.
>
> **[1:33](https://www.linkedin.com/learning/advanced-django-project-build-high-traffic-websites-with-django/next-steps-with-django?u=76281980&t=93)** I mentioned this course a little bit in the last video, but this course by Rudolf Olah, "Building RESTFUL APIs with Django" takes a deep dive into the Django [[Representational State Transfer (REST)|REST]] framework, which is a third party package that is designed around building what else, but REST APIs. So if you have a very client-side heavy [[JavaScript]] app, or you just need a lot of slick REST APIs for whatever reason, I would highly recommend checking out this course. Finally, what else but actually deploying your Django project. So "Deploying Django Apps" is a course by Nick Walter. Again, like I said, he has quite a few excellent Django courses, and this goes over sort of the nuts and bolts of pushing a scalable, monitorable, and secure Django project to a variety of cloud hosting providers. Anyway, thanks so much for joining me. I really hope you've enjoyed this course. Recommend it to all your friends, tell your family, and I wish you great success in your Django journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (14), [[Forms]] (5), [[Representational State Transfer (REST)|Rest]] (3), [[LinkedIn]] (2), [[Test-Driven Development]] (1)
> **Env Vars:** rest (3), restful (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [ryan] (1)


## Instructor

- [[Ryan Mitchell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced_django_3000142)

## Skills Covered

- Django

## Path Context

### In [[Advance Your Skills as a Django Developer]]
← [[Securing Django Applications]] | **6 of 6**

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Securing Django Applications]] — Django
- [[Building a Paid Membership Site with Django]] — Django
- [[Building RESTful Web APIs with Django]] — Django
- [[Building Angular and Django Apps]] — Django
- [[Building React And Django Apps]] — Django

---

[↑ Back to top](#)