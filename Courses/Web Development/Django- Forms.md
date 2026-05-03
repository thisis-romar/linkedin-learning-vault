---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: django-forms
url: "https://www.linkedin.com/learning/django-forms"
duration_minutes: 120
duration: 2h
level: Intermediate
updated: 3/8/2019
learners: 38191
skills:
  - Django
  - Forms
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGIybL6hwI1ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118168888?e=2147483647&amp;v=beta&amp;t=6sXjFadBV2wV4s_I-hxSAyfkKqWCZ5rsWnoEIi8P748"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a Django Developer]]'
prev_courses:
  - '[[Django Essential Training]]'
next_courses:
  - '[[Deploying Django Apps- Make Your Site Go Live]]'
path_nav: '[{"path":"Become a Django Developer","position":2,"total":4,"prev":"Django Essential Training","next":"Deploying Django Apps- Make Your Site Go Live"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
  - skill/forms
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Django-%20Forms.md)

![Django: Forms](https://media.licdn.com/dms/image/v2/C4E0DAQGIybL6hwI1ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118168888?e=2147483647&amp;v=beta&amp;t=6sXjFadBV2wV4s_I-hxSAyfkKqWCZ5rsWnoEIi8P748)

# Django: Forms

> Most websites require the use of forms to receive data from users, so it is crucial to know how to safely collect and handle data while maintaining a user-friendly experience on your website. In this course, learn how to use Django to create forms from scratch. Instructor Nick Walter also explains how to deploy forms to your site, access stored data, leverage submitted form data, work with widgets

> [LinkedIn Learning](https://www.linkedin.com/learning/django-forms) | 2h | Intermediate | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Deep dive into Django forms](#deep-dive-into-django-forms)
  - [What you should know](#what-you-should-know)
  - [Project walkthrough](#project-walkthrough)
- [**1. Getting Started with Forms**](#1-getting-started-with-forms) (6 videos)
  - [Starting a new project](#starting-a-new-project)
  - [Making forms from scratch](#making-forms-from-scratch)
  - [Form fields](#form-fields)
  - [Submitting forms](#submitting-forms)
  - [Django form class](#django-form-class)
  - [Using submitted data](#using-submitted-data)
- [**2. Working with Advanced Form Features**](#2-working-with-advanced-form-features) (10 videos)
  - [Adding models](#adding-models)
  - [Model forms](#model-forms)
  - [Working with widgets](#working-with-widgets)
  - [Advanced widgets](#advanced-widgets)
  - [Forms and files](#forms-and-files)
  - [Formsets: Multiple forms on a page](#formsets-multiple-forms-on-a-page)
  - [Formset views](#formset-views)
  - [Controlling the number of formsets](#controlling-the-number-of-formsets)
  - [Editing objects](#editing-objects)
  - [Input confirmation](#input-confirmation)
- [**3. Customizing and Styling Form Appearance**](#3-customizing-and-styling-form-appearance) (7 videos)
  - [Local validation and errors](#local-validation-and-errors)
  - [Server-based errors](#server-based-errors)
  - [Form rendering](#form-rendering)
  - [Customizing forms](#customizing-forms)
  - [Spicing up forms with CSS](#spicing-up-forms-with-css)
  - [Homepage styling](#homepage-styling)
  - [Form styling](#form-styling)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Deep dive into Django forms](https://www.linkedin.com/learning/django-forms/deep-dive-into-django-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-forms/deep-dive-into-django-forms?u=76281980&t=0)** - [[Django]] [[Forms]] makes collecting and validating data from a user incredibly simple. It has a native form framework that is highly customizable. We'll be creating an online delivery site that focuses on several key features. Model forms, which allow you to automatically create a form from an existing model, and form sets, which allow us to easily multiply a form for efficient data entry. Hi, I'm Nick, and I love Django and mobile programming. Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (2), [[Forms]] (2)
> **Speakers:** - django (1)

#### [What you should know](https://www.linkedin.com/learning/django-forms/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/what-you-should-know?u=76281980&t=1)** - [Narrator] So before we start this course, let's go quickly over what it is that you should know before you begin. You should have a basic grasp of [[Python (Programming Language)|Python]] 3. We're going to be using Python 3.7, but if you've used any of the recent versions of Python 3, you'll be more than fine. You should be familiar with pip to install packages via Python. Also you should be able to build a decent basic [[Django]] project. If you have any questions about that, please check out my course, [[Building a Personal Portfolio with Django]]. It's a great refresher or to teach you for the very first time how to build a Django project. We really go into depth about all the different tools that you can use. Next, you should have a basic knowledge of the terminal, be able to run your server, collect static things like that, move between directories, also, make sure that you have a text editor where you can write some code. I'm going to be using Adam, but feel free to use whatever you'd like. Also, you should have some basic [[HTML]] and [[JavaScript]] knowledge for this course. Basically, be able to work with web technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Django]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **CLI Commands:** python (4), pip (1), make (1)
> **Versions:** python 3 (3)
> **Prerequisites:** before we start (1), before you begin (1), install (1)
> **Env Vars:** html (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Project walkthrough](https://www.linkedin.com/learning/django-forms/project-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/project-walkthrough?u=76281980&t=1)** - [Narrator] Now to give you a good idea about how [[Django]] [[Forms]] work and where it is that we're going to be going in this course, I'd like to walk you through the end result. We're going to be creating a website for a fictional restaurant called Nandia's Garden, and in Nandia's Garden, they have a big feature request. They want to be able to let people order pizzas from their website. So, this is Nandia Garden's homepage, but if you go ahead and click on Order Pizza, you'll be able to order any pizza that you'd like here. You could say, I'd like a pizza with cheese as one topping, and I'd also like some pepperonis, and you can decide is this a small, a medium, or a large. And if you order a pizza and hit that button, it'll say thanks for ordering. Your medium cheese and pepperoni pizza's on its way. If you say, oh, it wasn't pepperoni that I wanted, it's olives that I wanted, you can edit that order. Come back and say, let's change this to olives. And you know what, let's make this a small actually, and you edit that pizza. Those changes will then be saved in the database. Now besides being able to order and edit one pizza, if we go back to the order page, you can see there's an option down here that says want more than one pizza? Let's say I want to have three pizzas. If I type in three and hit Get Pizzas, we're then led to a special order page where we can order multiple pizzas at one time. So with this, let's just go ahead and we'll fill in some dummy information here. But this allows people to order multiple pizzas at one time, and if they hit the Order Pizza button,
>
> **[1:35](https://www.linkedin.com/learning/django-forms/project-walkthrough?u=76281980&t=95)** it says your pizzas have been ordered. So that's the website. As you can see, lots of different forms that we're working through here. We'll be able to edit things, save things to the database, and you'll learn many different ways to work with Django forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Django]] (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started with Forms

[↑ Back to Table of Contents](#table-of-contents)

#### [Starting a new project](https://www.linkedin.com/learning/django-forms/starting-a-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-forms/starting-a-new-project?u=76281980&t=0)** - [Instructor] Let's go ahead and fire off our project for creating Nandia's Gardens website. So first, find a place that you want to save your project. I'm going to be doing this on my desktop so I'm just going to cd onto my desktop. Once there, you need to make sure that you have version Virtual Environment installed on your computer. If you don't, go ahead and do pip3 install virtualenv. So go ahead and make sure that's good to go. With that in place, we need to create a Virtual Environment for our projects. So, I'm going to say virtualenv and I'm going to call my venv, short for Virtual Environment. Go ahead and let that set up. With that done let's go ahead and activate that Virtual Environment. We'll say source venv/bin/activate. There you can see on our left, in parentheses, that we're inside of this Virtual Environment now. So, with that in place, we need to make sure that we have [[Django]] installed. Let's do a pip install of Django. And once that's finished, let's go ahead and start our project. So, to do that, go ahead and use the Django admin, django-admin startproject. We're going to call this nandiasgarden. Go ahead and hit enter. If you do an ls now, you can see that we have this new directory called nandiasgarden. I like to rename the top level file inside of a Django project to call it whatever
>
> **[1:33](https://www.linkedin.com/learning/django-forms/starting-a-new-project?u=76281980&t=93)** the name the project is, dash project, so that we know that it's the top level folder. We're going to use a little terminal trick here, we're going to say move, mv, and we're going to say nandiasgarden and space, change this to nandiasgarden-project. Now that we've done that, if we do an ls you can see that the name of the directory has changed. With that in place let's go ahead and move into that directory. We'll cd to nandiasgarden-project. Then once we're in there, let's just go ahead and test that our Django project is working. Let's do [[Python (Programming Language)|python]] manage.py runserver. And let's go ahead and move over to our browser, make sure we have the initial starting page. So, localhost:8000 and look at that we have a project up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (6), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), cd (2), ls (2), find (1), pip3 (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** manage.py (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Tools:** terminal (1)
> **Definitions:** short for (1)

#### [Making forms from scratch](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980&t=1)** - [Narrator] Now Nandia's Garden is a website that offers lots of different options, but the main thing that we're building for Nandia's Garden is the ability to order a pizza. So this is a perfect opportunity for us to make a new app in this project. Go ahead and hit control C to get out of your server. Then once you've done that let's go ahead and use our [[Django]]-admin again, and we are going to start an app called pizza. All of our codes around ordering pizza will live here. So we'll go ahead and hit enter on that. If you do an LS you'll see there's now a pizza directory and with this, this is a good time to move over to Atom or some sort of text editor so that we can be working on our project. So I'm going to move over into Atom, let's open up this project, go to my desktop, open up nandiasgarden_project. So there you have it, you can see we have all of our files over here, ready to start. The first place that we want to go, is we want to have a home page and then also an order page so we need to start with our URLs.py to create paths for those. So we'll go ahead and move into Nandia's Gardian, urls.py, and first, we need to import the views. So let's say from pizza import views, and then let's go ahead and create our two paths. So the first path, this is going to be for our home page, so we'll just leave that as an empty string. And then we'll say views.home for that,
>
> **[1:35](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980&t=95)** and let's go ahead and give it a name the same variety, we'll simply call it home, add a coma afterwards. Let's go ahead and copy that path, paste it down below this time it will be for ordering, so we'll put the [[Microsoft Word|word]] order here, and same thing for the views, we'll change that to order, and also its name. Okay, so now we have the URL paths for two different places, the home page and the order page. Because we're referencing the pizza app, we need to make sure that we declare that in the settings, so let's go ahead and move over to our settings.py, scroll down to our installed apps, and add pizza right here, and don't forget that trailing coma at the end. So we'll save there, now we'll move over to our views and simply make some views that are going to return back templates for each of these sites. So we'll go to pizza, views. We'll first create a view for our home page, let's say def home, pass a request into there, as a parameter, and what we want to do is return a render where we first have the request, and then we're looking for a template called pizza/home.[[HTML]], okay? Our order page is going to be very similar so go ahead and copy our home function. Let's make some space down below.
>
> **[3:09](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980&t=189)** We'll paste this and just change the name of this function to order, and then also the template name to order.html. Great, so that does it for our views, really the last step for us is we just have to create the templates for both of these views. So let's go ahead and right click here on pizza, we want to create a new file, so inside of the pizza directory we want to make a templates directory, and inside of that we want to make a pizza directory and then inside of that we can finally make a home.html. So inside of our home.html, we want everyone to know that this is Nandia's Garden so we'll make an h1 opening and closing tag, and inside of there will say Nandia's Garden. And then we also want to have a link to get to the pizza ordering page. So we'll make a simple h tag here, with an h ref going to our URL for the order page. So with that we've got to provide some text here, say order a pizza. And then we'll do a trailing a tag. So go ahead and save this, we have a pizza template or a home template but we also need to have an order template. So let's go ahead and right click, just duplicate this file, let's give it a new name of order.html, and inside of our order.html we're not ready to add any of our form code or anything yet
>
> **[4:46](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980&t=286)** so we'll just put an h1 tag in here that says order a pizza. Alright, so let's save this and go see what it is that we've created. We're going to reload our home page, and I forgot we need to start our server. You can't get anything to show up if you don't have your server to start. So, let's go ahead and do our [[Python (Programming Language)|python]], manage.py, run server,
>
> **[5:14](https://www.linkedin.com/learning/django-forms/making-forms-from-scratch?u=76281980&t=314)** and look our server is up and running. We'll go back to our home page, hit enter, there's Nandia's Garden, if we click on the link we can also get to the order page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[Django]] (1), [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (9), ls (1), python (1)
> **File Paths:** order.html (3), urls.py (2), home.html (2), settings.py (1), pizza/home.html (1)
> **Exercise Files:** template (5)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **Definitions:** is a  (3)
> **Env Vars:** url (2)
> **Tools:** atom (2)

#### [Form fields](https://www.linkedin.com/learning/django-forms/form-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/form-fields?u=76281980&t=1)** - [Narrator] This order page right now is really empty. In fact, this is where we're going to be building most of the magic of [[Forms]]. So let's go ahead and spice up our order.[[HTML]]. So inside of our order.html, the big thing that we want to talk about in this video is how to create a form on our own, customize the fields, and use everything with our own power, and then that'll allow us to see the magic of [[Django]]'s forms. So let's go ahead and start by creating a new form. Simply just try to type out form. That's our opening tag, and we'll make an ending tag for the same form. Inside of the form, essentially what we want to have are labels describing what kind of input that we're going to have, and then the following input. So start by creating a label for a topping on the pizza. So we'll simply create this label tag. We need to say what this label is for, and I'll go ahead and leave this blank for a second 'cause you'll see how this ties in in just a second. We'll go ahead and end this label tag. We'll provide the text that we want to appear. In this case, it's going to be Topping 1, colon, space, and then we'll go ahead and end that label. So now that we have a label, we have to provide the input for that label. So let's go ahead and create a new input tag. For this input tag, we're going to give it an ID, and the ID for this is, we'll just do all lowercase topping1. There's no rules about how you need to name this,
>
> **[1:33](https://www.linkedin.com/learning/django-forms/form-fields?u=76281980&t=93)** but it should correspond to what your label has. You're not going to have maybe some of the same fancy spelling with the capitalization and the space here, but they need to represent each other. And with this, we need to say what type of input this is going to be. So with inputs inside of a form, they could be lots of different things. In fact, you can see Atom here suggesting different things that this could be, but we want this to be a text input. We'll go ahead and put text there, and then we also want to provide a name for this form, so we'll go ahead and provide the name topping1. So we'll go ahead and do our ending tag there. You'll notice with an input, we don't have to have a slash ending tag. We can just keep it like this. We're going to go back and talk about now the for when we have a label. This should correspond with the ID of the input that you're looking for it to reference. Now this is a great accessibility feature. Those who just normally look at a site, this won't make a difference, but this will allow people to know what label is connected with what input. So here we're going to simply type the same ID that we have down below, topping1. And let's go ahead and save this and see what it looks like on our homepage. And look at that, we have Topping 1. We have this little text area where we could type in some information. This is our very first field inside of a form. So with our pizza, we want to allow at least two different kind of toppings, so just copy what we have so far, paste it down below, and just change everything to be Topping 2,
>
> **[3:07](https://www.linkedin.com/learning/django-forms/form-fields?u=76281980&t=187)** so that that way, our user can have two different toppings. So we'll go ahead and add that, save. We'll reload our page, and look at that. We now can provide two different toppings. The next thing that we want to talk about is the size of the pizza. We want the user to be able to select a particular size. So we'll go ahead and copy and paste again one more time, except this time it's not dealing with toppings. Instead, we're going to be creating a size. So let's go ahead and change this for size. Change the label text to say capital size, colon. Great, and then as far as the input goes here, instead of using a regular input, we're going to use something called a select so that the user could select multiple options. So let's go ahead and make a select tag. And inside of this select, we're going to say the ID is equal to size. That connects with the for that we have up above, and we'll give it the name of size. Great, so we'll have that tag in there. We also have to make an ending tag for the select. This is different than inputs in the way that they function. Great, and then we have to have some options inside of here. So we're going to go ahead and make an option tag. Its value, we'll have that be equal to something like small, and then we'll also have the text inside of this option tag
>
> **[4:42](https://www.linkedin.com/learning/django-forms/form-fields?u=76281980&t=282)** be the same thing, small, and then we'll end that option. Okay, let's go ahead and copy this so that we have small, medium, and large. Go ahead and paste that. So we'll change this to say medium. Also want this to be medium. I'll change this to large, get our capital L, and then also large there. All right, so with these changes, let's go ahead and go back to our homepage, reload, and look at this. We have a new kind of input here inside of our form. It allows us to select one of the following option. We are making great strides to our very first form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[HTML]] (2), [[Django]] (1)
> **CLI Commands:** make (5)
> **File Paths:** order.html (2)
> **Cross-References:** go back to (1)
> **Tools:** atom (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Submitting forms](https://www.linkedin.com/learning/django-forms/submitting-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/submitting-forms?u=76281980&t=1)** - [Instructor] So we have a decent looking form here for our pizza ordering process, but a big missing piece here is that we can't order anything, right? There is no order button to say, okay, I want a cheese on my pizza. I also want to have maybe some olives on my pizza. You know even if we provide the toppings, there's no order button here in order to make this a reality. So, let's go ahead and talk about how we can do that. Before you end the form, you can add a special type of input that will submit the form, meaning complete it and forward everything to some URL. And we create that by simply making an input tag and with this input, we give it a very particular type. So we're going to have the type of this be equal to submit. And again this is what turns it into a button and takes all the data and sends it somewhere. And the value is what text you want to appear inside of this button. So, here we might put some text, something like order pizza. Okay? So go ahead and put an ending tag there. We'll save this, come back and reload our homepage, and look at that, we have a cool Order Pizza button. And you'll notice that if we hit this button, we have some interesting text show up here at the top. So we're going to talk about that in just a second but let's go ahead and move back to our form. Up here at the opening tag for our form, there's two things that you'll always want to specify. The first one is the action, and the action is where do you want to send this form. So by default if you don't provide anything in the action,
>
> **[1:36](https://www.linkedin.com/learning/django-forms/submitting-forms?u=76281980&t=96)** it's going to go to the URL that you're currently at. Even if that's what you want, it's always a best practice to make sure that you specify what the URL is. So, I'm going to go ahead and put inside to this form, that I want this to go to our order page, which is where it's going now but this will be very explicit about that's what we want. So, we'll put order in there. The other thing that you want to specify with a form tag is the method for the form. Do you want it to be a GET or a POST? So we're going to have our method, initially, be equal to get here and I'll show you the difference between the two of these. So go ahead and save this, come back and I want you to put in some actual information here. So if I say for instance, my first topping I want this to be cheese, my second topping I want this to be pepperoni, and I want the size on this to be medium. If we go ahead and hit the Order button and we do a GET to our following URL, look at this, we'll hit enter, look at that, it sends it to our order page and it says topping one is equal to cheese, topping two is equal to pepperoni, and size is equal to medium. So with a GET request, everything that we have inside of our form is put into the URL. Now that you know this, many different websites that you go to, you'll see when they're using the GET request and you'll see the different information that's up at top. You can actually really use this to your advantage in several cases. The situations when you'd want to use a GET request is usually whenever you're not changing something
>
> **[3:09](https://www.linkedin.com/learning/django-forms/submitting-forms?u=76281980&t=189)** on the website or you'd want something to be able to be referenced later. Now, with our order process here, it's definitely changing something in our website. We're trying to create an order, it's changing the state of our project. So, what's more appropriate for us is to create a POST method here. It's going to be a POST request. So go ahead and save that and we'll come back to our homepage, and let's go ahead and reload that. So reload, we're going to type in some information here, we'll use the cheese and pepperoni, but you'll notice when we hit Order Pizza, we get a big nasty error and it says, hey, you don't have a CSRF verification and so this is a cross-site scripting protection. And so in order to have this as a [[Django]] thing, the first part of our form here we're simply just going to add the following tab. Curly brackets with percentage signs and then we're just going to say lower case csrf_token. And we'll hit save here, come back and if we reload the order page, and put in some information like cheese and pepperoni, you'll notice everything goes through, we don't see anything up at the top 'cause the POST request doesn't save that inside of the URL. But we successfully sent it back to our site, we're protected from cross-site scripting, and we're at a great place. So, like I said, because when you order a pizza you're hoping that's save something into the database, make something happen, we were going to leave this as a POST. But I wanted you to see that you could do a POST request
>
> **[4:42](https://www.linkedin.com/learning/django-forms/submitting-forms?u=76281980&t=282)** or a GET request and what the differences are between the two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **Env Vars:** url (6), post (6), csrf (1)
> **API Endpoints:** get  (6), post  (4)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Code Identifiers:** csrf_token (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### [Django form class](https://www.linkedin.com/learning/django-forms/django-form-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/django-form-class?u=76281980&t=1)** - [Instructor] It's been pretty great to create a form for our website. We've seen how we can create labels for the different inputs and that there's different types of inputs, we've learned how to submit that, the thing is, there's a much simpler way of doing this. And the reason that I showed you this, the sort of manual, hard-working way here, is to give you appreciation for how awesome [[Django]] can make this process. So, let's go ahead and go into our pizza directory here. We're going to create a new file and we're going to call this [[Forms]].py. So inside of our forms.py, we need to import some code from django, so we're going to say up at the top here, from django import forms. And then, we're going to create a class that's going to represent the pizza form that we want to create. So we're going to type out class capital Pizza capital Form and this is going to come from lower case forms.Form do our semicolon there and then now with this class, we can specify the fields that we want to be inside of this form. So, if we go back to our order.[[HTML]], you can see we want to have a topping1, a topping2, and a size. So, let's go ahead and do that. We can say, topping1, we want that to be equal to lower case forms.CharField Great. And then inside of here, we can specify what we want the label to be, so we'll say
>
> **[1:33](https://www.linkedin.com/learning/django-forms/django-form-class?u=76281980&t=93)** the label should be equal to capital Topping 1 and we'll go ahead and add a comma here and say the max length on this topping should be equal to 100, we can't have people asking for toppings bigger than that. And we'll go ahead and copy this same thing for topping2. Save ourselves some typing there, just make sure you change the two at the front and the back. And then we'll also do one for size. So we'll say size is going to be equal to forms dot, and before we had used a CharField to represent text, in this situation, we want to have some sort of multiple choice box just like we had before. So, we're going to say capital ChoiceField and then we'll specify that we want the label to be equal to we'll do capital Size and we'll also specify the different options that we want to have. So we'll say choices is equal to and we need to provide a list here so the first item on the list is, we're going to specify, and in parentheses here, we want small, okay, and then we'll do a comma on that, and then we'll provide small again do comma, one half capital Medium, make sure that's in a string there, comma, we'll also do medium. The reason that we're using the same [[Microsoft Word|word]] here
>
> **[3:06](https://www.linkedin.com/learning/django-forms/django-form-class?u=76281980&t=186)** is you can have a visual name but also a different name that gets passed via your form if you'd like to specify that, but for us, we're just going to keep each the same to make it simple. Go ahead and enter that in. Great. So, with this all in place, we have this new class called PizzaForm. We can go ahead and move over to our views.py and we're going to return back the request for the order page we're going to go ahead and make a new form and this should be equal to a pizza form. So that means we've got to import it. We'll go up to to the top up here and say from.forms import capital PizzaForm then we'll come down and say form is equal to a new PizzaForm with our parentheses there and let's go ahead and pass this to our template. And we'll say pizzaform is going to be the value of whatever is inside of form. So we'll go ahead and save this and now, this is the real magical part. When we go to our order.html we can take everything, keep your input for submitting and keep your csrf token, but take the [[Representational State Transfer (REST)|rest]] of this text delete that and simply just put that we want to include our pizzaform that we passed to this template. If we hit save and now go move to our home page reload you can see it's the exact same,
>
> **[4:39](https://www.linkedin.com/learning/django-forms/django-form-class?u=76281980&t=279)** we have the exact same form here, right? We can still provide some text here, we can choose different sizes, order that pizza, it's all the same. But look how much more clean and efficient our forms.py is than what we had before. And if we wanted to make a change here, we could do it very simply. Whereas with the order.html if we had to make some sort of change, well, we'd have to, you know, change the label, connect the for and the ids, it could get really, really messy. And so, this is a much simpler and cleaner way of handling this. Django forms are great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (9), [[Django]] (4), [[HTML]] (3), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **File Paths:** forms.py (3), order.html (3), views.py (1)
> **CLI Commands:** make (7)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Using submitted data](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980&t=1)** - [Instructor] So something that's wrong with our form right now is we can have all this great information, but when we hit order pizza, there's no place for us to capture the information that it has been sent via the form. So let's talk about how we can do that. Well because we've submitted this via a post request, let's go ahead and move back to our views.py, and inside of our order function, let's do a distinction to say if we're in a post request or a get request, we want to handle it a certain way. So we'll do that with an if request.method is equal to, make sure you have the two equal signs there, in all caps POST, then we'll want to handle it one type of way, and then in an else situation, we'll want to return what we've just been doing before. So I'll go ahead and do the tab over on that for those two. But let's talk about what happens if it's a post request, and we've been sent some information. Well what we want to do is create a new form, but fill it in with the information that we've been provided. So we're going to create a variable called filled form and we're going to have this be equal to a new pizza form, but instead of just having it be empty parenthesis, we're going to include inside of there request.POST so it's going to take all the information from the post and include it here in create a new form object. With this filled form, we'll go ahead and make sure that all the information in there is correct. So we're going to say if filled_form.is_valid
>
> **[1:37](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980&t=97)** and we'll go ahead and do a colon there to say you know if this is good data, then what we want to do is provide some sort of note back to the user that we got their pizza order. So we'll say note is equal to, and we'll say some sort of string here like thanks for ordering and we'll say your cheese and pepperoni pizza is on its way.
>
> **[2:12](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980&t=132)** And we should also specify the size here, so we'll say like your small cheese and pepperoni pizza is on its way. Great, so with this information we want to make sure that we're not always just putting small and cheese and pepperoni, but what the user actually provided here. So we'll go ahead and do some string interpellation with a percent S there, a percent S there, and then also for pepperoni a percent S. Then, make sure exclamation points inside. And the end of this string we want to make sure we go ahead and say percent with a parenthesis here, and then we'll take our filled_form. and then we're going to access its cleaned data, and the reason that it's clean data is we performed this is valid, that goes and checks and makes sure all the information that we got is valid. So we're going to get this clean data, and we'll go ahead and take whatever we get for size first. We'll do a little comma there and we'll go ahead and copy this filled form including that comma and we'll go ahead and make a new line here and paste this twice. We'll do this just so that we keep everything on the screen here, and for this rather than having the size, let's go ahead and change this to topping one. And we'll go ahead and change this to topping two. And these, the name of all of these correspond to the fields that we have inside of our pizza form class. So notice that the names are all the same there. Alright, so with this note now, we want to send this back
>
> **[3:47](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980&t=227)** to the user, so what we're going to do is we're going to just copy essentially what we have down here that we're going to return a render, go ahead and paste that in except for calling this form, I'd rather specify that this is a new form that we're working with just so that we know as the programmer here, okay we want to pass back a new form. So we'll copy new form here, paste it there. But we also want to provide one other thing to the template and that's the note that we have just created. Alright, so with this in place, we'll go ahead and hit save. Then, we need to move over to our order.[[HTML]] so that we can display what the note was. So, we'll go ahead and create an H2 tag here, and here we'll just display whatever is inside of note. And we'll end that H2. So, with this all in place, let's go ahead and hit save. We'll move back to our browser, and we'll reload this order page, let's go ahead and order a pizza with cheese and pepperoni, let's make this a large, and if we hit our order pizza button, look at that. We get the message thanks for ordering you large cheese and pepperoni pizza is on its way. Alright, so it looks like we should probably put an r here so it's your and we don't offend our customers by calling them a pizza. We'll go ahead and save that, but I want you to notice that we're actually getting information back here and displaying it to the user. This means that we could take this
>
> **[5:20](https://www.linkedin.com/learning/django-forms/using-submitted-data?u=76281980&t=320)** information and use it however we'd like. So let's try a different pizza. You'll notice the size here we'll change. Let's go ahead and order that pizza and look, your medium cheese and pepperoni pizza is on its way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** filled_form (2), is_valid (1)
> **File Paths:** views.py (1), order.html (1)
> **Env Vars:** post (2)
> **API Endpoints:** post
 (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)


### 2. Working with Advanced Form Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding models](https://www.linkedin.com/learning/django-forms/adding-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/adding-models?u=76281980&t=1)** - [Instructor] Once someone orders a pizza, we actually want to make a note of it. We want to save that into our database saying, hey, someone picked the following pizza with these toppings and this size, so we need to go create a model that will hold that pizza information. So, let's go ahead and move over to our app here inside of Pizza. We're going to move to our models.py, and inside of here we're going to create a new class. And there's two different classes that we need to create. The first one is the size of a pizza. We don't want there to be an infinite amount of sizes, we want to specify either it's small, medium, large, or if you wanted to customize, you can create your own, but we want a fixed amount. So we're going to create a new Size class, and this is going to come from models.Model. Inside of this class, we want to have a title for our particular size. This is going to be a models.Charfield, and with this we're going to specify that the name of this should not be longer than 100 characters, so we'll say max_length is equal to 100 and that's really all we need for the size class. We're going to provide one more function here, and that's just so that we'll be able to display a size class correctly showing the title, so we're going to do a def, and we'll do two underscores, str, two underscores again, and then pass self inside of our parentheses,
>
> **[1:35](https://www.linkedin.com/learning/django-forms/adding-models?u=76281980&t=95)** and we'll do our semicolon, and here we simply just want to return whatever self.title is, so this will help us for showing the size in [[Forms]], also inside of the Admin panel, this just make things look that much cleaner. So, with this in place, let's go ahead and create our second class now which is the pizza class. So we'll say class Pizza, and inside of our parnetheses, we'll say models and then capital Model. For our pizza, we want it to have a topping1 which should be equal to a models.CharField. Inside of that CharField, we should say its max_length should be equal to 100. I don't want toppings too big out here. We can go ahead and copy this topping and make sure that we have also a topping2 and then we also want to have a connection to our size, so we'll go ahead and say size is equal to models dot and then we want to get our Foreign key, make sure you have that spelled correctly, ForeignKey and then we're going to say that the class that we want to connect with is Size and then we have to specify if something were to be deleted, how do we want to handle that. We'll say on_delete and have that equal to models dot and then all caps CASCADE.
>
> **[3:07](https://www.linkedin.com/learning/django-forms/adding-models?u=76281980&t=187)** That's if one thing is deleted, we also are going to delete the corresponding object that has the relationship. So, we'll go ahead and hit Save on that. With these two new models, we want them to show up inside of our Admin panel, so if we go ahead and move over to inside of our pizza app here, if we go to our admin.py, we want to first import these models so we can say from .models import capital Pizza and we also want to import Size. Then we can say for our admin, admin.site.register and we'll pass in first the Pizza and then on a separate line we'll also register the size. So, we'll save that file. With these changes in place, remember, any time you make changes to your models, you have to create a migration, so we'll go ahead and move over to our terminal. We haven't been here in a while. Let's go ahead and hit Control + C to stop the server. Then we're going to do [[Python (Programming Language)|python]] manage.py makemigrations. Go ahead and hit Enter on that. Look, it's created a model for the pizza and the size. Now let's go ahead and migrate this, so I'll say python manage.py migrate. Then once we've gone ahead and done all of that, we need to have a super user so that we can enter things via the admin,
>
> **[4:40](https://www.linkedin.com/learning/django-forms/adding-models?u=76281980&t=280)** so we'll do python manage.py createsuperuser. Let's give 'em the name of nick, no email address, just hit Enter. We'll go ahead and do a password. Now that we have our super user, we need to run our server again, so python manage.py runserver. That's back up and running. Then we'll go to our site /admin. We'll need to log in with our new super user. And once we're there, we can go to our sizes. Remember, sizes are things that we want to create via the admin. The user should not be able to make new pizza sizes willy nilly. That's something we want to only be able to do. So, we'll go ahead and add a size here, let's make one for Small, we'll click Save and add another. We'll do Medium, Size and add another and also Large, Save. Now, with this in place, look at that, we have three pizza sizes here and because of that cool little underscore underscore string thing, we can see the proper sizes here and that's going to help us again inside of our forms but we now have models. The whole point of these now is to create new forms from these models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Forms]] (3)
> **CLI Commands:** make (7), python (4)
> **File Paths:** manage.py (4), models.py (1), admin.py (1)
> **Code Identifiers:** max_length (2), on_delete (1)
> **UI Navigation:** go to (3)
> **Env Vars:** cascade (1)
> **Tools:** terminal (1)
> **Prerequisites:** make sure you have (1)

#### [Model forms](https://www.linkedin.com/learning/django-forms/model-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/model-forms?u=76281980&t=1)** - [Instructor] So, now that we have a new model, we're going to create a new form that's based off that model and it's going to saved us even more time than we already save from creating this [[Django]] Form. You're going to see, this is going to be really incredible. So let's first go ahead and comment out our pizza form class. So, I'm going to select all that. If I hit command and then forward slash and Adam, it comments it out for me automatically. Cool little trick there. And then we want to make sure that, up at the top here, we can say, from dot and we want models to import and let's go grab our pizza class. Alright, so with this in place, now we're going to be creating a form that's called a special kind of form. It's a form model or a model form, rather. So, let's go ahead and say class pizza form. Notice this is the exact same name that we have here, so this won't disrupt any of our view code or anything like that. We're going to say pizza form is coming from lowercase [[Forms]] dot capital model form, do our colon here, and then we just have to provide some information here. This is called meta information. So, inside of this class, we're going to make another class called meta, and we'll do a colon here. Down below this, we're going to say model is equal to capital pizza, not pizza form, just pizza. Then we're also going to say fields is equal to, and here we're going to provide a list
>
> **[1:35](https://www.linkedin.com/learning/django-forms/model-forms?u=76281980&t=95)** and we're going to say toppings or just topping one, rather, comma. Then we're going to provide topping two and then we're also going to provide size. So, what we're saying here is we'd like to display the following fields inside of this form. So go ahead and save this. And here's the real magic. Let's move back to our website. We're going to go to our order form here, hit enter, and look at this. This is, like, the exact same form that we had before. We can enter in toppings, we can choose a size here. Like, this is really great that, look how much simpler this code is and it's all based off a model that we have. We don't have to go through the work of creating a CharField here and the ChoiceField. All of that is done for us, because it's smart enough to say, "Okay, well, CharField here, "we should probably use a CharField there. "Here's a foreign key with some options. "Well, I think I'll go ahead "and allow multiples choices there." Again, Django Forms are amazing for saving us so much time. Now, with this, it's not exactly displaying the exact way that we'd like. Particularly, I'm looking at topping one and topping two and I'm wishing that the labels on that were a little bit different. So, what I'm going to do is customize here. I'm going to provide a new object here in the meta portion of our class. We'll say labels is equal to, and this is going to be a dictionary, so we'll use our curly brackets and say topping one,
>
> **[3:09](https://www.linkedin.com/learning/django-forms/model-forms?u=76281980&t=189)** we want it to have the following label of, in our case, topping space one. Now, Django Forms is pretty close. If we go back to our page here, you can see it gave us topping with a capital T and one, but I wish that there was a space there, so now we can actually specify that. So, we're going to have that be topping one. Let's go ahead and have a comma here. Let's do the same thing for topping two. I'll just copy and paste this. We'll change this to be topping two and topping two as well. So, we'll hit save, move back over to our homepage, or rather, our order page. Now, when we reload this page, look at that. We now have a spacing between topping one and topping two. So, there's lots of different customization you can do with model forms. Even though a lot of it is done for you, if you want to drill down and make any sort of specific change, you can do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[Django]] (3)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Working with widgets](https://www.linkedin.com/learning/django-forms/working-with-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/working-with-widgets?u=76281980&t=1)** - [Instructor] In our last video, we talked about how we could customize [[Forms]], and I'm going to show you how we can customize even further with something called widgets. So to start here, let's say when someone's ordering a pizza, we think this little text box here is not enough space for them to talk about, you know, what it is they want on each particular topping. So we can go ahead and move over to our code and just for the time being, let's go ahead and comment out our pizza form class that we created, that is a model form. So we'll comment out this one. And now, we're going to bring back our one that we had created more sort of piece by piece here. Remember, this is imported from forms.form. And what we're going to do here is with topping one we're going to, you know, keep its label to say topping one, we still want max length to be 100 but we're going to add something new on the end here. We're going to say widget is equal to and we're going to say lower case forms, dot, and then we want to do capital Text Area. And if we go ahead and save this. Let's go back to our order page, reload, and look at this, we have a huge box where people can enter in toppings. Now we've still max amount to say hey guess what, you can't go anything longer than 100 here, but if you want to provide some more space through the use of widgets, you can accomplish that. To show you another widget that you could use, let's go ahead and move back here to our forms. Rather than a text area, let's go ahead and change this to capital Password
>
> **[1:37](https://www.linkedin.com/learning/django-forms/working-with-widgets?u=76281980&t=97)** and then we want to say capital Input on that. Input, we'll go ahead and save this, go back to our same order page. Now when we reload it looks like a normal text box. But look at this, when I type out cheese, well it's totally a secret we don't get the automatic popup showing up down below and we can't see what's the specific characters are. So for some reason someone wants to hide their toppings. You can do that via this password input. And that's not the only thing that we can change via widgets. Let's go ahead and move back. I'll show you one other cool widget that we can add here. So let's go ahead and just get rid of both topping one and topping two and say how cool would it be if we could just have a list of toppings and let the user pick which ones that they would like? So we're going to go ahead and add a new field here. We're going to say toppings with an S. And this is only going to be it. We're not going to have toppings one or two, just this right here. And we're going to say toppings is equal to forms dot and we want to do capital Multiple Choice Fields, kay? Now with this multiple choice field well, we want just field, no S there. Inside of here we're going to specify what our choices are going to be. So we'll say choices is equal to. And this is going to be a list of tuples. So the first tuple here specify that with the parenthesis will have the value of pep but it should be displayed as and we'll do a comma here
>
> **[3:11](https://www.linkedin.com/learning/django-forms/working-with-widgets?u=76281980&t=191)** should be displayed as pepperoni. Awesome, let's go ahead and add another tuple here. So for this one we'll have lower case cheese comma. The display version of this should be capital Cheese. We'll add one last and final tuple here. This is going to be four lower case olives. I'll do a comma. And then provide capital Olives at the end there. So we'll go ahead and save here. Go back to our order form. If we reload now. Well look at this, we've got something interesting here. We've got our different toppings that we can pick. And you can actually select multiple if you hold down the command key on your keyboard you can pick and unpick multiple options here. But now this is pretty foreign I think to most people. If they saw this in a form they would not know that they can select multiple things. It really wouldn't look all that great. But widgets can make it very easy for us if we go back. After we've specified our choices we'll say comma. We'd now like to add a widget equal to. And for our widget we're going to say forms dot and then we want capital Checkbox select. And then we want multiple. Okay so the idea here with this is we're going to change this now to be a multiple choice box which should be much more friendly to our users. So if we go back, we'll reload our page here. And look at that we've got all of our toppings here
>
> **[4:47](https://www.linkedin.com/learning/django-forms/working-with-widgets?u=76281980&t=287)** and the user this looks much more familiar, right? You can say oh, I'd like pepperoni and cheese. I'm not really into olives. Medium, bam. We can go ahead and order our pizza. Now we can't just straight up order the pizza. The way that we've written our code we've pretty fundamentally changed the way toppings works, right, there's no more toppings one and two. So this isn't going to work for us. But with this in place let's go ahead and move back to this page. Let's undo this till we get back to our toppings one and two. Hopefully you enjoyed learning about the different type of widgets and this is just the tip of the iceberg. There's so many different widgets that you can add. Let's go ahead and get rid of our password. Our toppings should not be hidden from us. We'll go ahead and save that and reload. Look at that, we're back to normal here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (6)
> **Cross-References:** go back to (3), we talked about (1)
> **CLI Commands:** make (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Advanced widgets](https://www.linkedin.com/learning/django-forms/advanced-widgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/advanced-widgets?u=76281980&t=1)** - [Instructor] So you've gotten a nice taste of the things that we can do with widgets, but we can do them not only just in a regular form, but we can also use them in model [[Forms]]. So let's go ahead and comment out our top form that we have, and we will uncomment our model form below and I'll show you how we can now use widgets to make some sort of specific change if we'd like to. So, here below are labels, let's go ahead and add one more change. We can say, widgets equal to and we can specify some sort of widget that we would like to apply to a particular field. So like we had done last time, let's go ahead and specify here topping one and say with a colon that we want it to use a particular widget like forms and then capital text area.
>
> **[0:57](https://www.linkedin.com/learning/django-forms/advanced-widgets?u=76281980&t=57)** So, you'll expect like we saw last time if we go ahead and save this and reload our page, all of a sudden toppings one is a huge text area where the user can fill in some information. So, nice to know that we can do that inside of model forms. There's also different kinds of models that you can use here so, let's not work with topping right now, but instead with size. If we want to specify that we want to have a checkbox where we can select multiple things here, let's go ahead and change this to CheckboxSelect and then we want multiple, okay, and we'll go ahead and save here, so we should see our size change. We'll go ahead and reload and look at that, for the size we can choose all the different sizes here, multiple if we want to. But again, we're not set up to handle a situation like this, so, let's go ahead and move back and we'll get rid of our widget line completely here. And instead what we're going to do is provide a different field up at the top here. So, what we're going to do is between pizza form and our meta information we are going to provide here that size is equal to forms.ModelChoiceField,
>
> **[2:21](https://www.linkedin.com/learning/django-forms/advanced-widgets?u=76281980&t=141)** and inside of here we need to provide some different pieces of information, so the first one is that the different choices that we should have should be equal to the size object. So we're going to say lowercase query set is equal to capital size dot objects and because we are using the size class, we want to make sure that we go up to the top here and specify we also want to import size. Okay, so we have our query set equal there. We also want to add another property here, we're going to say empty_label is equal to capital none, and then we're also going to specify a particular widget here, and in this case, we're going to say widget is equal to forms.CheckBoxSelectMultiple.
>
> **[3:25](https://www.linkedin.com/learning/django-forms/advanced-widgets?u=76281980&t=205)** So we'll go ahead and hit save on this. And with this let's make sure we have the lowercase B or else we're going to get an error there, so we'll save that, come back, reload our page here. Now you can see we have just the small, medium, and large, so if we really want to get customized, instead of specifying widget fields here in the meta class, we can actually directly say okay, this is how we want size to be chosen this way. So, let's go ahead and change this because with the size it doesn't really make sense that you'd be able to pick multiple options. Let's change this from CheckBoxSelectMultiple to something like RadioSelect. So I'll go ahead and save those changes and if we go back to our order page and reload, well look at that, now we have these radio options, so that we can only select one of the sizes here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5)
> **CLI Commands:** make (4)
> **Code Identifiers:** empty_label (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Forms and files](https://www.linkedin.com/learning/django-forms/forms-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/forms-and-files?u=76281980&t=1)** - A very great feature of [[Forms]] that we have not discussed yet is the ability to take files that the user wants to upload to us, whether it's going to be images or some sort of CSV data. Whatever it is, we can accept that into our project via forms. If you're going to accept some sort of file, there's a few different pieces that we have to make sure are ready to accept it. The first one is, we have to move to our order.[[HTML]]. In our form, we have to specify that it's going to be able to take this type of information. In our form here, we'll just do it right before the action, we'll say enctype =, and then we're going to have this be equal to, and look we already have the suggestion here, we want multipart/form-data, meaning that the user should be able to select some sort of file and add it to the following form. We've got to make that change, we'll go ahead and hit Command + S, save that. Then, if we're going to be accepting images into our project, we're going to have to move over into our terminal, let's stop our server with Control + C, then we need to install Pillow via pip, that allows us to work with images. We're going to do pip install pillow. Once we have that, let's go ahead and rerun our server so that it's back up and running. We'll move back to our forms.py, where we need to create a field that will be able to select some sort of image.
>
> **[1:35](https://www.linkedin.com/learning/django-forms/forms-and-files?u=76281980&t=95)** Let's go ahead and get rid of our size, that we had specified here to look cool with it's different radio buttons and whatnot, and we're going to change this to say image= forms., and then we want capital Image and don't forget to add your open and closed parentheses. With this in place, let's go ahead and save this. Go back to our order page, let's reload, and look at that, we have a new option here where we're able to choose an image. Let's go ahead and add some toppings. Let's pick a size and let's go ahead and pick an image. I've included in your exercise files here, a image that you can upload for Nandia's Garden, so I'm going to pick this nandiasgarden.jpg. I'm going to open that up. What you'll notice, if I try to submit this information, I say Order Pizza, well we're going to get this nasty error. The problem is that our view code was not ready to accept this information, but we can change that very quickly. If we go ahead and move into our views.py, here inside where we specify what the filled form should be after passing in request.post, we're also going to pass in request., and then we want all caps, FILES. With this change, if we go ahead and save this, and then we go back to our order page. Let's open up the order page, we'll put in our toppings again, we'll pick a size, we'll take nandiasgarden again,
>
> **[3:08](https://www.linkedin.com/learning/django-forms/forms-and-files?u=76281980&t=188)** and now if hit Order Pizza, everything works. We haven't done anything necessarily with that image. We haven't saved it, but this is the beginnings of what you would need to then work with that image file. You can see there's a couple different pieces, right? We have to edit our form, we have to edit the HTML to be able to accept it. Now that you've seen how to do that, let's go ahead and move things back to normal. We'll start first with our views.py, we'll get rid of that request.FILES and save that. Next, we're going to move into our forms. Let's go ahead and get rid of our image there. We'll go ahead and save that. Finally, we'll go to our order.html, get rid of our enctype, delete that and hit save, and let's go back and make sure our order form is looking just like we'd like to see it. Everything looks great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5), [[HTML]] (3)
> **File Paths:** order.html (2), views.py (2), forms.py (1)
> **CLI Commands:** make (3), pip (2)
> **Env Vars:** files (2), csv (1), html (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** install (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)

#### [Formsets: Multiple forms on a page](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980&t=1)** - [Instructor] We've gone very in-depth with [[Forms]], but I'm here to take you to the next level by talking about something called form sets. Form sets allow you to take one form and repeat it over and over, so in our case, people could order multiple pizzas at once. So, form sets take some work. We're going to have to move step by step in order to get this live, but let's go ahead and start here inside of our order.[[HTML]]. And we want to be able to send people over to our order page to order multiple pizzas, so let's go ahead and put in a few BR tags so that there's enough space in between the above order form and what we're creating down below. Then what we want to have is ask the user something like, want more than one pizza, question mark. Then, what we're going to do is provide a new form. So, this form, all it's going to do is take us to the multiple pizza order page, but it's going to show how many pizzas that they want. So, with this form, we'll create an action, and this action is going to go to our URL for multiple pizzas, so we'll say URL pizzas, with an S, and inside of this form, we just want this to be a get request. It doesn't really matter that people can see this information. It's not like it changes the state of anything. We'll go ahead and close this form. Now, what is it that we want inside of this form? Well, we want to be able to send some things along,
>
> **[1:36](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980&t=96)** so what we're going to do is eventually create a form, we haven't created it yet, but we'll give it the name of multiple_form. All right, and then we need to have some sort of input here, so we're going to say we want an input, and its type should be submit, and its value should be get pizzas, with an S.
>
> **[2:05](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980&t=125)** Great, so now our order form has a special little form down on the bottom that says, hey, you want to get more than one pizza? This is where you can go ahead and do it. The next thing that we need to do is to create a URL path so that someone can get to this page, so we're going to say path, and we'll give this the name of pizzas, with an S. This will go to views.pizzas, and again, let's give it the same name. We'll have this be equal to pizzas. Awesome, add our ending comma there and we'll save that. Next, we need to move to our forms and create the form for this to happen. So, we're going to move to our forms. Down below we're going to create a new class, and this class is going to be MultiplePizzaForm.
>
> **[3:04](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980&t=184)** This is going to inherit from forms.Form. And inside of here, all we have to specify is the number, and we'll say forms.Integerfield, and we'll say a minimum value, because if someone's going to order multiple pizzas, say min_value, they can't order just one, so we'll say the minimum is two. But also, we're not ready to accept, you know, hundreds and hundreds of pizzas. We'll say the max value is going to be equal to something like six. Okay, so we'll go ahead and save this. Then, we're going to move over to our views.Pi. Inside of here, we have to import our new form, so after PizzaForm, where we'll say comma, we also want to import MultiplePizzaForm. Inside of our order, before we even do the if on whether this is a post or not, we're going to create a new form called MultipleForm and set this equal to a new MultiplePizzaForm, with the parentheses there. Then, after someone has created a new form, before we return anything, we want to specify this return. So, we've got our request, we've got the pizza form and the note. We also want to add on here a new object, and this is going to be multiple_form, and it's going to hold the value of multiple_form. We're also going to want to pass this even
>
> **[4:39](https://www.linkedin.com/learning/django-forms/formsets-multiple-forms-on-a-page?u=76281980&t=279)** on the normal return here, so we'll go ahead and add a comma, and we're going to say with a string, multiple_form. We need to make sure that that is a string, and we'll provide the value of multiple_form. Great, so go ahead and give this a save. We're going to stop here because we've had to do a lot of work to get this up and running. But, the next steps for us are going to be creating our next function that's going to handle the pizzas, and then ultimately allow people to order multiple pizzas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5), [[HTML]] (1)
> **Code Identifiers:** multiple_form (5), min_value (1)
> **Env Vars:** url (3)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **File Paths:** order.html (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Formset views](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980&t=1)** - [Instructor] Now it's time to create a function for the pizzas view. So, let's go ahead and make that function. That's just going to be def pizzas. We'll go ahead and pass self into there. And with this pizzas, we hopefully are getting good information about the number of pizzas that people want, but maybe that's going to get spoofed or tricked somehow, so we're going to provide a default where we're going to say number of pizzas is going to be equal to two. Now hopefully what will happen is we'll say our filled_multiple_pizza_form,
>
> **[0:40](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980&t=40)** very descriptive here, is going to be equal to, our MultiplePizzaForm, and pass inside of there our request., all caps, GET. Okay, so hopefully that gives us a number that the user provided between two and six, but we've got to check and make sure that that's valid, so we're going to say if filled_multiple_pizza_form .is_valid, so if this is all good, then we're going to say, alright, well then the number of pizzas, if we've confirmed that, is just going to be equal to our filled_multiple_pizza_form, and on this we're going to do our .cleaned_data, and inside of that cleaned_data, we just need the number field, right? 'Cause that should be between two and six. That is_valid is going to confirm that that is the situation. Now, after that, what we need to do is to create a class that's going to hold our formset. Now in order to do that, we're going to have to import some code up at the top here, so what we're going to say is, from [[Django]].[[Forms]] import, and we want to get formset_factory. Okay, so with that in place, we'll come back down. Now this is going to be some unusual looking code, but we're going to do is we're going to create a class on the fly here using this formset_factory,
>
> **[2:14](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980&t=134)** and we're going to say capital PizzaForm, capital Set, again, I know, this is a little bit weird to put this on the left side of the equal sign, but what we're going to say is PizzaFormSet is equal to our formset_factory, and with this, we're going to pass in capital, PizzaForm, right, that's that class that we had created, make sure we have the capital F on Form. So we have PizzaForm, and then the extra is meaning how many things that we want to have is equal to our number_of_pizzas. So that could be anywhere from two to six, if we get proper data, if not, we're just going to default that thing at two. So now that we have a class called PizzaFormSet, we can create a formset. So we can say formset is equal to, capital PizzaFormSet, and with our parentheses here, what we're going to do is just say, this thing initially should be empty. And then we're going to say, now decide, you know, if this is a POST or a GET we'll handle it in different types of situations, so we're going to say if, and we want request.method. If this is equal to, make sure you got your two equal signs there, if this is equal to POST, then we want to run one situation. So if we've been receiving all this PizzaForm information, we want to say our filled_formset is equal to capital Pizza
>
> **[3:50](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980&t=230)** FormSet, alright, and let's go ahead and fill that in with our request., all caps, POST data, and that's a lot of pizza information coming through. But with that in place, we're going to check and see if that data is valid, so we're going to say, if filled_formset .is_valid, so if this is good data that we've been passed for all those different pizzas, we're going to provide a colon and say, alright, these are all good, let's just loop through each of the pizzas and say that this has worked. So we're going to say something like for form in formsets, not just any formset, we want this to be for our filled_formset that we've just validated. And again, we'll do a colon, 'cause we want to loop through each of these, and so we're going to say, for each of these, let's just simply print out some information. Maybe let's find the toppings. So let's say form.cleaned_data, and the data that we're looking for, let's just print out topping1. Okay, so this will be our little personal way to confirm that this worked. And if this is successful, right? We've got good information, we'll loop through all of them, let's provide some sort of note. We'll say note is equal to, Pizzas have been ordered! Okay, that's a great piece of information there. Now we need to have an else situation to handle, let's say, for some reason, the filled formset isn't valid,
>
> **[5:25](https://www.linkedin.com/learning/django-forms/formset-views?u=76281980&t=325)** well then we want to provide some sort of note to say hey, you know, things didn't work out here, so we'll say order was not created, and we'll say something like please try again. Alright, so with that in place, after we've done our little if else here, we want to return a render of the request. We also want to pass forward the proper template, which doesn't exist yet, but we'll say pizza/pizzas.[[HTML]], and we want to pass forward both the note that we've just created here. So we'll say :note. And we also want to pass forward our formset that we created earlier. So we'll say that our formset should hold the value of the formset object. Okay, so we'll go ahead and save what we have now, we've done a lot of work, we still got to handle if we got a GET request to pizzas, but we're on a great path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Forms]] (1), [[HTML]] (1)
> **Code Identifiers:** filled_multiple_pizza_form (3), is_valid (3), cleaned_data (3), formset_factory (3), filled_formset (3)
> **CLI Commands:** make (4), find (1)
> **API Endpoints:** post  (2), get
 (1), get  (1)
> **Env Vars:** post (3)
> **Definitions:** is a  (2)
> **File Paths:** pizza/pizzas.html (1)
> **Exercise Files:** template (1)

#### [Controlling the number of formsets](https://www.linkedin.com/learning/django-forms/controlling-the-number-of-formsets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/controlling-the-number-of-formsets?u=76281980&t=1)** - [Nick] So we have the correct code to handle a post request, but we have nothing for a get request. So, let's go ahead and provide an else statement here for it's not a post request, we'll assume that it's a get. And in this situation, we need to return a render just like above, and it'll be all the same, except for we won't be providing the notes. So we'll go ahead and remove the note that we have there. But we'll still be providing the formset 'cause we want people to be able to order a pizza. Now, with that in place, we've got to go create a new template. So under here, I'm going to create a new pizzas.[[HTML]]. And inside of our pizzas.html, we want a few pieces of information, so let's make like a h1 tag. This is going to tell the user that they can order pizzas, so we'll say Order Pizzas, OK? If there is a note, we'll want to know about that as well. We'll make this a little bit less as an h2 tag, but this is simply going to hold our note, information. Excellent, now it's time for us to create our form, and this is not any ordinary form. This is going to be the formset form, so it's essentially a bunch of [[Forms]] all combined into one. Now, at the end of the day, it's actually just one form, but there's a lot of fields that's going to be handled here. So, the first thing that we need to do is provide an action for this form, and that's just going to be the URL that we are currently at,
>
> **[1:35](https://www.linkedin.com/learning/django-forms/controlling-the-number-of-formsets?u=76281980&t=95)** and we'll do that by just saying, Hey, we want to the URL for pizzas. Great, and the method that we're looking for on this one is a post, and this is because we're actually sending some pizza data. Now, because it is a post, we've got to make sure that we have our csrf_token, do our ending percentage sign there. And then, inside, we've got to provide some information for the formset management, so we'll say formset.formset, excuse me, we want formset.management underscore form, then, below this, this is where we're going to provide our for-loop. So, we're going to do our percentage signs here, and we're going to say, for form in formset. And then, later, on a separate line, we want to make sure that we end this for-loop. So we'll say, endfor, great. And then, inside of our for-loop, we want to provide the form, and we want to have some space in-between each of these. So let's go ahead and have a new line there, just to give ourselves some space. Now, after the endfor, we've got to have a Submit button in order to submit this all. So let's have an input or the type is going to be equal to submit,
>
> **[3:10](https://www.linkedin.com/learning/django-forms/controlling-the-number-of-formsets?u=76281980&t=190)** and we're going to have the value on this, meaning the text is going to show up inside of the button, to be Order Pizzas. Great, so this will be our awesome form here. Let's go ahead and save this. It's time to see the fruit of our labors. Let's go ahead and move to our Order page. We'll reload this. You can see, we have this awesome form in the bottom, it says, Want more than one pizza? How many do you want? Well, let's say I want three pizzas. I'll type three there, hit Get Pizzas. It looks like, on my View function, I improperly put self instead of request. So let's go ahead and change that. But if we go ahead and reload our page here, look at this. We want order three separate pizzas. Let's say you want to order, I don't know, four pizzas, we can change that for four. We can go all the way up to six different pizzas. Now, just for the sake of time, let's do two here, and let's fill in our different toppings that we have, and let's do some sizes here, and let's hit Order Pizzas. Look at that, pizzas have been ordered. If we go move to our Terminal, remember, we printed out whatever the toppings are, they show up there if you want to try different ones here. We can say, like, Cheese, and we'll do, like, Egg. That's a real interesting topping, I have seen it before. And if you order these, right, go back to that Terminal, look at that, the options are showing up there. So, this is great that we're able to order multiple pizzas here. Now, it's not actually saving these, but speaking of saving,
>
> **[4:43](https://www.linkedin.com/learning/django-forms/controlling-the-number-of-formsets?u=76281980&t=283)** let's go ahead and write some code, so that we can actually save a pizza order if it's just only going to be one. So let's go ahead and move to our order, and let's go back to our views.py, and inside of where we check and say, OK, is the, you know, pizza valid, is the form, everything, ready to go? We're going to go right before we create a note, and we're going to say filled_form.save with the parentheses, OK? So with this in place, if we go ahead and save this, go back, let's reload this page. Let's make a pizza with Cheese and Pepperoni. We'll have Size be Large. If we order this pizza, not only does it say that it was ordered here, but now if we go to our Admin menu and we go to Pizzas, look at this. We have a Pizza object with Cheese, Pepperoni, and it's Large. So we now have officially saved a pizza in our database. In the next one, we'll talk about how we can edit this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Forms]] (1)
> **CLI Commands:** make (5)
> **File Paths:** pizzas.html (2), views.py (1)
> **Cross-References:** go back to (2), in the next (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** csrf_token (1), filled_form (1)
> **Env Vars:** url (2)
> **Tools:** terminal (2)

#### [Editing objects](https://www.linkedin.com/learning/django-forms/editing-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/editing-objects?u=76281980&t=1)** - [Instructor] Well now that we can save pizzas. How great would it be if we could allow the user to edit a pizza? And that's exactly what we're going to do here. So let's go ahead and make a new path for someone to edit a pizza order. We'll copy our existing pizzas. And we're going to change this to be order/ and then inside of angle brackets we're going to say int:pk and this is to say they can add a primary key for what pizza it is that they're looking for. So we'll change this to be edit_order and we'll do the same thing for the name. So, we have a new URL path here. The next step for us is to move over to our views. We're going to have to be working with a pizza model. So let's go ahead and import that. We'll say from.modelsimportPizza, great. And then the next step for us is to say okay, if someone's going to create a pizza, let's go ahead and save that into something. So we're going to say created pizza is equal to whenever the saved form is filled. And then we're going to create a new variable called createdpizza_pk. So that's the primary key that we're looking for. And this should just be equal to our createapizza.id. So with this new createdpizza_pk we want to go ahead and pass this forward to our template, so we'll go ahead and put this in as a string, and also as the value. Make sure you add a comma at the end of that, and then we
>
> **[1:35](https://www.linkedin.com/learning/django-forms/editing-objects?u=76281980&t=95)** have to make a new function that's going to handle editing and order. So we're going to make a new function here and we're going to call it edit_order, we're going to take not only requests but also a primary key, so we'll do our pk there and then our colon, let's make sure we have that spelled correctly, we have edit order, excellent. Now inside of this function what we want to do is grab the selected pizza from the database, so we're going to say captialpizza.objects.get, and we want to get where ever the primary key is equal to the pk that was passed into us. Then we want to have a filled out form, if someone's going to edit something it'd be nice if it was in a filled out state, so we're going to say form is equal to pizza form or the instance is going to be equal to the pizza that we just pulled out. With that, we have to check and see if it's going to be a get or post request, so we're going to say if request.method, make sure you have two equal signs here, if it's going to be a post, well in that situation we're going to say alright our filled form should be equal to, and we want this to be capital pizza form, and we're going to fill this up with the request.all caps post, which you're probably familiar with this but, we're also going to say the
>
> **[3:12](https://www.linkedin.com/learning/django-forms/editing-objects?u=76281980&t=192)** instance is equal to that pizza that we had earlier. So with these two pieces of information, again jangoforms makes this so simple, all we have to do is say if filled form.is_valid, don't forget your parentheses there,
>
> **[3:31](https://www.linkedin.com/learning/django-forms/editing-objects?u=76281980&t=211)** and a colon, so if this is all valid all we have to do is say filled form.save it'll take the appropriate instance pizza that we have and update it with the new information from the post and if that's the case, we're going to say alright our form object should be equal to this new filled form because this is the new data that should be reflected. So if this is the case lets go ahead, even if it's a post or a get, either way we want to return a render. So I'm going to copy one of these that we have from above and paste it, this time instead of just pizzas.[[HTML]] we want edit_order.html, in the data that we want to pass through here, is one called pizza form, and this is just going to be equal to our form object and we also want to pass inside of here our pizza, so we'll simply say pizza and then pass forward the pizza object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Code Identifiers:** edit_order (3), createdpizza_pk (2), modelsimportpizza (1), is_valid (1)
> **CLI Commands:** make (6)
> **File Paths:** pizzas.html (1), edit_order.html (1)
> **Env Vars:** url (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** make sure you have (1)

#### [Input confirmation](https://www.linkedin.com/learning/django-forms/input-confirmation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/django-forms/input-confirmation?u=76281980&t=0)** - [Narrator] So we'll go ahead and save this, this is all the code that we need inside of our views. Then, we're going to go ahead and move over to our order.[[HTML]], and we're going to provide a little bit of information after our note. So we're going to say, all right, if we have a variable called created_pizza_pk, if this is something, and make sure whenever you make an if, you've got to have the ending if, so we're going to put and endif right at the end of there, but if we have this information, what we want to do is create an a tag, with an href, to take somebody to go edit their pizza. So the url that we're looking for here, go ahead and do our percentages, is we're going to say url edit_order, make sure that's all surrounded in a single quote there, but then we also have to provide that created_pizza_pk, so it knows exactly which one we're trying to go for. So with this a tag, let's go ahead and put some text in there like edit your order, and then we'll provide an ending a tag, and this is all the information we've got to change in order.html, and then, we have to create a new file that we're going to call edit_order.html. And inside of this edit order, this is going to be very similar to what we've seen inside of some other places, so we're going to have an h1 tag,
>
> **[1:33](https://www.linkedin.com/learning/django-forms/input-confirmation?u=76281980&t=93)** we'll copy that over, this should just say something like edit pizza. But we're also going to have a very similar form, so let's go ahead and copy the form that we have to order a regular pizza, and we'll paste this down below and make a few changes, so the first one is the action, the url that it should go to is edit_order, and we have to provide the id of what we're looking for so we're going to pass a pizza.id, we're going to keep it as a post, and the [[Representational State Transfer (REST)|rest]] of this is going to stay the same except this isn't ordering a pizza, this is editing a pizza. So we'll go ahead and hit save here. Now, let's go ahead and move over to our site, this is a big moment of truth, let's reload, let's order a pizza with cheese and pepperoni, lets make it a large. We'll order that pizza, you can see we have a link to go edit our order. Once we can edit our order, here's all the information already filled out for us, and let's say you know what, I don't want pepperonis, I want olives, so I hit edit pizza, that has now been saved and changed in the database. That's how simple [[Django]] [[Forms]] helps us to edit objects. Now, it's great that this editing has taken place, but from a user's perspective, if they change their topping to olives, and hit edit pizza, they have no way to know that this change has actually taken place, they might worry that things haven't actually updated. So let's go ahead and provide the user a note, let's move over to our views.py, and let's say after someone has
>
> **[3:04](https://www.linkedin.com/learning/django-forms/input-confirmation?u=76281980&t=184)** successfully saved their new order, we're going to create a note that says something like order has been updated, and we'll include a period there, and we want to include this note, and so sometimes we'll have a note, sometimes we won't, so let's copy this return render, and we're going to provide our note just right inside of here, so we'll say note, and that string, provide the actual note object, and then a comma after that. We'll save here, and then inside of our edit order, we need a place to display that, so we'll do an h2 tag, and inside of there, we will provide our note. So let's go ahead and save these changes, come back, we are going to reload this page, let's change our olives back to pepperoni, and this time when we hit edit pizza, look at that, we get a message back that says the order has been updated. Now, the user knows that their changes have been reflected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Django]] (1), [[Forms]] (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** edit_order (3), created_pizza_pk (2)
> **File Paths:** order.html (2), edit_order.html (1), views.py (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 3. Customizing and Styling Form Appearance

[↑ Back to Table of Contents](#table-of-contents)

#### [Local validation and errors](https://www.linkedin.com/learning/django-forms/local-validation-and-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/local-validation-and-errors?u=76281980&t=1)** - [Narrator] When it comes to validating your data, [[Django]] [[Forms]] really helps you go far with a little bit of code. You know some of the specifications that we have for our data, for instance we have said that we want toppings to be no bigger than 100 each. We can see that code, if we go ahead and move over to our models.py and confirm that each of these has to be 100. So you'll notice if we go back to our main order page here, if I try and order something without filling out the toppings: One, it will say "Hey you've got to fill out this field with something here" So we can go ahead and put something there "Oh, no now you're missing two" and even if I leave this size out, it' going to complain here. So all of these things, all these little pop-ups you just saw, this is local validation. Meaning this is all happening on the browser, none of the code on our server has said "Hey this needs to happen" and in fact if you go ahead and inspect the code here, we're going to use Chrome's inspecting tool, you'll notice, if we look at for instance this form right here, it has some information, saying that this is required and also that it has a max length of 100. So if we go ahead and type in enough text here, I'm just going to type in some gibberish then copy and paste that a ton of times. If we keep doing that, you'll notice if I try and write some new text like I keep writing the number 2, eventually it's going to stop at 100 because that's what the max is and this is all local validation. Again, here with the multiple pizza form. If I try and take this down lower than 2 or higher than 6 it stops me.
>
> **[1:35](https://www.linkedin.com/learning/django-forms/local-validation-and-errors?u=76281980&t=95)** If I manually type in like the number 8 and try and get pizzas, it's going to say "Hey, this has to be less than 6". And again, all this validation happens in the browser, this is before it even goes and hits our server. So to show you some more examples of this lets move into our forms.py and here let's go ahead and add an email field, I want you to see what the email validation looks like. So we'll go ahead and do forms lowercase, and then capital EmailField Save that. Let's go back and reload this page now, now you can see I have this cool email thing here. So even if I put in some toppings, pick a size and I try and order it's going to say "Hey you got to fill this out" So I'll just do something like nick, and I try and order and it says "Nope, this doesn't look like an email. There's not even an @ sign." So I say okay, I'll go ahead and throw @ in there but then it's going to say "Nope you still have to have something after that" So eventually, if I fill in the [[Representational State Transfer (REST)|rest]] of an email here, and eventually order the pizza. Well then it's going to go through. But you can see some there's pretty cool local validation to make sure that we don't get bad data on the server. More than just email, you can also do a URL. So I'm going to go ahead and provide a URL field here and I'm going to say this is equal to forms.(capital)URLField Go ahead and save that, come back and reload our page here. So let's say, you know, we put in some toppings here
>
> **[3:08](https://www.linkedin.com/learning/django-forms/local-validation-and-errors?u=76281980&t=188)** do cheese, pepperoni, size, we'll put in an email and for a URL let's say you know, I just let's do a URL for [[Google]]. No that's not enough there, let's see [google.com](https://google.com) No that's still not enough for it, we've got to do the full http:// and then eventually once you have that in place you could order that pizza. So again this is all local validation that you can do to see what this looks like. Now if you ever, at some point think "This validation is just way too much. For instance that URL thing is really strict like I don't want people to have to put in the http thing." What we can do, if we move over to our order.[[HTML]] and go to our form for where we order all the pizzas, we can add and extra property here where we say no validate And basically this just says we're not doing any local validation despite what you have in your particular field. So if we add this no validate, let's go back and reload this page. Look at this, I can order a pizza without providing any information you can see it went through now we're having a huge issue because our code is not prepared to handle things like this, but if we go ahead and reload this one more time. For instance, let's just put in some information and because we're not handling the email and the URL, even if we just put in some dummy information there we're still going to get the issue. But this is if, you know, you ever decide that this is too much for you , you can always do this non validate or no validate. But the thing is with this
>
> **[4:45](https://www.linkedin.com/learning/django-forms/local-validation-and-errors?u=76281980&t=285)** you're going to have to do a lot of extra validation on the server side. So let's go ahead and bring this back to normal, we'll get rid of this no validate. Save that file, let's also go to our forms we don't need to know about emails and URLs with our pizza order so go ahead and save that. Let's make sure we can get our order page back to normal and excellent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5), [[Google]] (2), [[Django]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[HTML]] (1)
> **Env Vars:** url (6)
> **Analogies:** for instance (4)
> **File Paths:** models.py (1), forms.py (1), order.html (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **URLs:** [google.com](https://google.com) (1)
> **Cross-References:** go back to (1)

#### [Server-based errors](https://www.linkedin.com/learning/django-forms/server-based-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/server-based-errors?u=76281980&t=1)** - [Instructor] So we know what it's like in our form if we pass in some bad data, right? And the last time we put that no validate tag on and put in some bad information and you can see that our views were not able to handle it. And that means that we don't have proper server side validation. The good news is is that we're really close to having it because [[Django]] [[Forms]] can handle so much of that for us. So, let's go ahead and move over to our views.py and make it so that our form here is able to handle some bad information if it was going to slip through our local validation. So the main thing here is, we need to make it so that if someone does a post request and that post request is not valid, we need to return back some information. At this point in time, if we get into this if function, well we actually return something there, but if it's not the case, then we don't return anything. So we're going to move this return just back one time, do a Shift + Tab here and with that, we're going to go ahead and put in else, do a little colon there, and we'll just provide some information if this is not the case. So, some of the things that we'd like to put here, first, we should pass some sort of note to let the people know, hey your pizza was not created. So we'll say something like pizza order has failed, try again. All right so that's one thing that we want to add there. Another thing that we want to do here is we want to set a created pizza_pk. So we're going to say created_pizza_pk is equal
>
> **[1:37](https://www.linkedin.com/learning/django-forms/server-based-errors?u=76281980&t=97)** to capital None, all right. And the other thing that we're going to want to here is rather than say the pizza form is equal to a new form, we want this to be equal to the filled_form. So let's go ahead and change that here. Which also means here we're going to have to change this to be filled_form. Now the idea with what's going on here is to say, all right, if the form is valid and we're able to successfully create a pizza, well then we'll have filled_form be equal to a new pizza form object because we want to clear it out so another pizza can be created. But if it was not successful in being valid, well in that situation we still want to pass back the filled_form in its error showing what's wrong with what the user has given us. So let's go ahead and save this, and let's go ahead and move over to our order.[[HTML]] and let's put that no validate back on one more time. So we'll go ahead and add that, hit Save, move back to our order page, let's reload that, and let's go ahead and say we don't add anything here, and we just decide you know what, we're ordering a pizza. So we hit this button here, well look at this! Look at all this great information. So first, this is our custom note that we had, that the pizza order has failed, try again. But look, what Django had done for us automatically. They've said hey, the fields here, these are required. And so we could maybe add this and we'll add this and I try an order and it's going to specify,
>
> **[3:11](https://www.linkedin.com/learning/django-forms/server-based-errors?u=76281980&t=191)** hey, we're still missing this Topping 2 field here, you've got to do something about this. And once we put in the proper information, then everything is going to work out just like we were hoping for. Now with this, this isn't the only type of validation, so let's say we had all the proper toppings but, on one of the toppings, let's go ahead and write a ton of text here. I'm going to copy and paste this a bunch of times and we're going to try and go further out but you can see we're stuck at going at a certain point here. But if we go ahead and inspect this page, we'll get specifically right here on Topping 2, and let's dive in and see what its value is right now. So let's go ahead and edit this on Chrome. We're going to get rid of this max length equal to a hundred, in fact we can just change it to something like 200. So we'll go ahead and make that change there, which then means that we're able to add as much information as we want to here, at least up to 200, but our form should only be accepting a hundred, so this is now over a hundred. If I go ahead and hit Order Pizza, well look at this! It's telling us ensure that this value has at most 100 characters, it has 135. So isn't that cool, our Django forms by default are following the rules that we have not only locally in the browser, but if somehow someone is really technical enough to bypass all the local validation or maybe our code's a little bit broken, our server is able to handle that information and return back the proper values to say, hey, this is the things that you're missing,
>
> **[4:45](https://www.linkedin.com/learning/django-forms/server-based-errors?u=76281980&t=285)** this is how you can make the form work again. So, that's how you can validate your information on the server side. Let's go ahead and move back here and undo our code, so we'll get rid of the no validate, save that in order.html and also in our views.py. We want to keep most of the code that we have here, so we'll just go ahead and leave this as is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[Forms]] (2), [[HTML]] (2)
> **Code Identifiers:** filled_form (4), pizza_pk (1), created_pizza_pk (1)
> **File Paths:** views.py (2), order.html (2)
> **CLI Commands:** make (4)
> **Definitions:** means that (2)
> **Analogies:** it's like (1), just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Form rendering](https://www.linkedin.com/learning/django-forms/form-rendering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/form-rendering?u=76281980&t=1)** - [Instructor] Up 'til this point, whenever we've had a [[Django]] form we've just displayed it in the default way however it is. You can see it's just sort of lined up left to right here. There's actually a couple of different ways that we can have our [[Forms]] displayed, and I'm going to show you how to do that now. Let's go ahead and move back into our code and we're going to go to our order.[[HTML]], and we're going to look at a couple different ways to lay out our form. First, inside of our order form here, we have our pizzaform. After pizzaform, we're going to do a .as_p, and what this is going to do is it's going to display our form in some paragraph tags. Let's go ahead and save this, go back to our home page, let's reload, and look at this. If this is more of your style, having things top to bottom, we can have that listed out there. And, to really see what this looks like, let's go ahead and inspect the HTML here, and you can see here's our form, and then, inside of the form, there's a paragraph tag that contains our label and the input, then another paragraph tag with our label and input. So, you can see this is a really simple just one line change and it drastically changes how our forms look. Now, if you don't necessarily like the paragraph look, we can go a little bit more technical here, instead of as_p, we can change this to as_table. With this, it's going to create an HTML table, but it's going to create the rows for us, and so we actually have to, up at the top here,
>
> **[1:34](https://www.linkedin.com/learning/django-forms/form-rendering?u=76281980&t=94)** create a new table tag, and then, at the bottom, have an ending table tag. So, we'll go ahead and add those in, save this, move back to our page, and reload. You'll notice, okay, this one is a little bit different. You can see the titles here, a little bit bolder. If you inspect this, though, if you go inside of our form here, here's our table, and then inside of this it creates a tbody, then we've got these table rows. Inside of that, the th stands for header, td is a cell inside of there. So the labels are going inside of the header, and then the inputs are the actual cells. But, if a table is something you're more familiar with and you wanted to do some customization, this is here for you. You can add all sorts of things, like, you can add borders around this table. It's really up to you about how you want to handle that. So, this is what it looks like as a table. And, there's one last option here that we can actually have our forms show up as a list. So, we can do as_ul, which is short for unordered list. Now, with this, we have to surround this in an unordered list tag. We'll do our opening and closing there, save this. Let's come back and reload the page here. So, here you can see they're listed inside of an unordered list as just list items. Then, we've got the label and the input. It's a little bit different there with the dots showing up. It's not my personal favorite. What's also kind of fun with this is
>
> **[3:06](https://www.linkedin.com/learning/django-forms/form-rendering?u=76281980&t=186)** it doesn't have to be an unordered list even though it's calling it unordered list here. We could still surround this in an ordered list tag, and, by doing this, go ahead and save that and reload, you can see we can have the numbered one through three-look here. So, those are three different ways that you can style your forms with very minimal effort. Personally, I'm a big fan of showing forms through the as_p inside of those paragraph tags. I think it lays it out really nicely. But, let's go ahead and put things back to how they were. We'll get rid of our ordered list there and we'll just have our pizza form show up as normal, and we'll reload the page, great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5), [[HTML]] (3), [[Django]] (1)
> **Definitions:** is a  (3), stands for (1), short for (1)
> **Code Identifiers:** as_table (1), as_ul (1)
> **Env Vars:** html (2)
> **File Paths:** order.html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Customizing forms](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980&t=1)** - [Instructor] In our last video, we talked about how to change the [[Microsoft Outlook|outlook]] of [[Forms]] via Sane, you know, lay this out in paragraph tags as an unordered list, but you can go even more custom them that with your form. So if you'd like to see how you can do that instead of just having a regular old pizzaform here, we can actually go field by field and lay things out exactly how we would like. So for instance, we could go here and say, all right, we want to have pizzaform.topping1, you just name whatever your field is and then you can say that you want this to be, for instance, the label_tag. So we can go ahead and have that, and maybe below this we'll just go ahead and copy and paste that instead of having the label tag, this is where we'd like to have the actual input. So you just do pizzaform.topping1 and that brings the actual field, and then with this, if you want to have an error on top of this, then we're going to go ahead and paste here and rather than label_tag we'll go ahead and change this to errors. Just like that. Now if we go ahead and save this, come back and reload our page here, you can see well we only get the topping one here, right? And so if we go ahead and try and order a pizza we'll have to put some information in there, will tell us the order has failed 'cause we didn't provide everything but you'll notice we didn't even get a validation in there because this is fine code as far as it knows, so let's go ahead and change our forms to say novaildate.
>
> **[1:37](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980&t=97)** Go ahead and save that, and let's say that I don't provide a topping here and we're going to have to reload that so it has the novalidate we'll reload our page. Now I don't provide anything, order a pizza and look at that. We get the this field if required. But the whole point of customization is we can say that, you know I don't like that the errors showing up here on the top we can go ahead and take this error, cut it, move it down to the bottom, and if we save this, come back, let's reload this page here, and look at that. Now we have the error showing up down at the bottom. So this is just to show you that with forms you can get really customized, you can go field by field and have everything showing up just like you'd like. So, let's go ahead and show what this would look like if we wanted to complete the entire form for the topping two. It's really simple, just go ahead and copy paste this down below for topping number two. Okay, great. For the size, is going to be fairly similar, except let's go ahead and put for our errors, we'll call that one size. Also for our just actual input, we can change that to size. The only difference that we're going to have here is if you'd like to see the label show up in a different way you can actually really customize that by saying, I want to do the full label tag here. We're going to say this is for and then inside of our curly brackets
>
> **[3:10](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980&t=190)** we're going to say pizzaform.size.id_for_label.
>
> **[3:23](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980&t=203)** Great, and then we can provide our size inside of here and then we'll do our ending label. So we'll go ahead and save this. And let's go back to our page, and we'll now reload. And look at that we're missing all the information here if we just reload this without passing bad data you can see that it looks pretty normal here. But there's all sorts of different things, because this is customized, that you can do. So, for example, let's go back and let's have the size be down really far. I'm going to add a bunch of br tags, so I'll copy this, and we'll paste it out a few times, save that, reload our page, and look at that. We can have the size down below if we'd like it to. And with that size label, because this is totally customized, I can have this be called Size for your pizza. Save that, come back. Reload and look at that. It's exactly how we'd like it. So, obvious the devil's in the details here that if you're going to get this customized, you're going to have to question is really using [[Django]] forms worth it to you? I think it is still because you get great use of these errors automatically showing up and what not. But you're really going to have to weight that to say is this worth my time? Let's go ahead and move things back to how they were. Keeping it simple. We'll get rid of our novalidate here, save this, reload our page,
>
> **[4:57](https://www.linkedin.com/learning/django-forms/customizing-forms?u=76281980&t=297)** and we're back to normal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[Microsoft Outlook|Outlook]] (1), [[Django]] (1)
> **Analogies:** for instance (2), just like (2), for example (1)
> **Code Identifiers:** label_tag (2), id_for_label (1)
> **Cross-References:** we talked about (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### [Spicing up forms with CSS](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=1)** - [Instructor] We've learned how to layout our [[Forms]] in different ways either as a p tag or completely customized, but, there's no denying the fact that our forms are kind of ugly. They don't look that great, but, we can use CSS to make them shine and look great. So we're going to use something called Bootstrap. It's a framework that allows your front-end code on your website to really look good without a whole lot of effort. And in order to get this to work with our customized forms, let's go ahead and move over into our Terminal. There is a pip package that we have to install. So let's do a Control + C to stop our server. We're going to do a pip install, and we want [[Django]]-widget-tweaks.
>
> **[0:46](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=46)** So we'll go ahead and install this. Looks great. Let's go and run that server again so that we can look at our site. Then what we're going to do is we're going to move to [getbootstrap.com](https://getbootstrap.com).
>
> **[1:03](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=63)** Great. If you hit the Get started button here on the Home page, they have an awesome template to get Bootstrap integrated to your project as quickly as possible, so the Starter template here. Let's just go ahead and hit the Copy button and we'll get all of that great code. So, let's go ahead and move back to our code. Before we paste this, we now have a new app in our project, so we're going to have to make sure that we utilize this. We're going to move over to our settings.py, and here inside of our INSTALLED_APPS, we're going to go ahead and add widget_tweaks. Great. So with that in place, let's add that ending comma, we'll save this, and then let's go back to our order.[[HTML]]. So, here, inside of our order.html, we want to go ahead and paste the following code. So we'll go ahead and paste at the very top of this file that huge splurge, and we're going to take all the code that we have and move it here into the body. So I'm going to delete this h1 tag and let's go ahead and cut all this code that we have down here, and we're going to paste it inside of this body tag, but then below, above all this script stuff, so I'll go ahead and just paste that in. With this, let's go ahead and change the title of our site. Instead of saying Hello, world, let's have this be Nandia's Garden. That looks great. And then, let's do a little bit of customization here.
>
> **[2:37](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=157)** So, first thing that we're going to have to do is we need to load this widget_tweaks app into our code. So we're going to provide a little percentage tag here and we're going to say load widget_tweaks, just make sure we spelled that correctly. We have widget_tweaks. Let's save that. Go to our settings.py, add that a there. Excellent. Save that. We'll come back to our order.html. And here, instead of just showing our regular pizza form, here, inside of our order here, we're going to go a little bit customized here with the for loop. So, what we're going to do is we're going to do our percentage signs, and in the middle, we're going to say for field in pizzaform, and let's make sure at the end of this that we have an ending for, say endfor. Great. Then what we want to provide inside of here is a place for our errors, the label tag, and whatnot, so just like we had done before, we're going to say field. and we want the errors first. We're also going to want to say field.label_tag. Now, it's time to display our actual field and this tag is going to be a little bit different here, so we're going to do our curly,
>
> **[4:09](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=249)** but then switch to percentage signs inside. And this is where we're going to use that widget_tweaks app to help make things really work for us. So we're going to say render_field space field, and then we want class to be equal to form-control. And the whole reason for using this customized tweak is we need to make sure that this field has form-control as the class because in Bootstrap, that's what makes it so that it's going to look all pretty and look great, and really make things shine. So with that in place, we got to make sure that we put each of these fields inside of their own div tag, so let's go ahead and write after the for here. We're going to make a new div, give it a class, equal to form-group. Great. Then we need to have an ending div right at the end here, so right before endfor, we'll say /div. Okay, now that we have that div there, we also have to add a div up at the top here. We're going to say, and this is way up at the top before we order the pizza and all of these. This is going to be a new div with a class equal to container. This is going to make everything look nice. Make sure I get my other double quote there. And for this div,
>
> **[5:40](https://www.linkedin.com/learning/django-forms/spicing-up-forms-with-css?u=76281980&t=340)** we have to make sure we have an ending div tag, and we'll do that right before our scripts. We'll have our ending div. And with this all in place, we'll go ahead and save this, and then go see what our new site looks like, so let's go ahead and move to our browser. Now, reload our order page and look at this. How much simpler and awesome does this look? Not only do these form fields look stylized, but they're all uniform here. I can pick the sizes and whatnot. And what's also great with Bootstrap is it's really good for mobile as well. So if we go ahead and shrink things here, look at that. That still looks fine. If we make it nice and big, it's still going to look great. So, this is the beginning of making Nandia's Garden a really nice-looking website, but we're not done here. We want to add, finally, a nav bar and make sure that all of our pages end up looking like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[HTML]] (3), [[Django]] (1)
> **CLI Commands:** make (14), pip (2)
> **Code Identifiers:** widget_tweaks (5), label_tag (1), render_field (1)
> **File Paths:** order.html (3), settings.py (2)
> **Prerequisites:** install (3)
> **Env Vars:** css (1), installed_apps (1)
> **UI Navigation:** go to (1), switch to (1)
> **Exercise Files:** template (2)

#### [Homepage styling](https://www.linkedin.com/learning/django-forms/homepage-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/homepage-styling?u=76281980&t=1)** - [Instructor] Though we have some great styling from our order.[[HTML]] page, but its not complete yet and we'd like this applied to every part of our website. So to do that, we're going to create a base template that we can apply to almost every single one of our pages so that it has great styling. So let's go ahead and move over to our templates. Inside of this pizza directory, we are going create a new file and this is going to be our base.html, so this is going to be the core code for almost every page that we want to display. Now for what should go inside of here, we're going to go to our order.html, and we're going to grab everything from atop the file down too, including the body tag, but we don't want the load widget tweaks. Everything from below that, we will keep there. So we're going to go ahead and cut this, come to our base.html, paste that in, go back to order.html, and then we want to grab everything from the scripts to the ending body tag to the ending HTML tags. So leave that ending div there. We'll go ahead and cut that as well, come back to our base.html, and we'll paste that in, and I'm just going to Shift + Tab this to the left so that all match up, awesome. So with this in place, when we have our base.html here, we're going to provide a block here so that people can put their own code inside. So what we're going to do is provide a new block. So we'll add percentage signs here, let's go ahead and say block, and we'll call this body,
>
> **[1:39](https://www.linkedin.com/learning/django-forms/homepage-styling?u=76281980&t=99)** and then we'll go ahead and do our end block, another percentage sign there. Great, so we'll go ahead and save that there. Now one more piece that we'd like to add to our styling here is to have a navigation bar, and I've provided for you, in the exercise files, a text file that has the proper navigation code, so go ahead and just copy and paste that into your base.html. We'll go ahead and put that just above the body and after the head, so nestled in between those two, we'll add this nav. Now I'd like you to take a look at this real quick. We've got some links too, for example, the order page here. We've also got a link to the home page and, other than that, we've got some coloring and background, we've got the name of our website here, but that's about all we have. I figured I'd save you some time with that. So with this in place, that completes our base.html. Now we just need to go over to our order.html, and we're going to surround all of our code so that it can be included inside of that base.html. So up at the top here, we're going to do another percentage tag and inside of this we're going to say extends, and we're going to say in our single quotes pizza slash base.html. So that's going to have all the code there,
>
> **[3:12](https://www.linkedin.com/learning/django-forms/homepage-styling?u=76281980&t=192)** but then what we're going to do is begin our block body tag. So we're going to do, again, percentages and inside of here, we'll say block body. Great, and that's going to be at the start of that. We've just got our load widget tweaks, I'm going to bring this over here, and then we'll come down to the very bottom, and we'll have our end block down below. So we'll do our percentage sign. Percentage, and let's do an end block. Great, so go ahead and save this. Let's now move back to our order page and reload, and look at that. We get this great, new bar up at the top. Everything is looking awesome and look, we can hit the order page, it's going to take us here, but you'll notice if we go back to our home page, there is still some work to do. So in our next video, we'll go ahead and finalize everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (13)
> **File Paths:** base.html (8), order.html (4)
> **Cross-References:** go back to (2), next video (1)
> **Exercise Files:** template (1), exercise files (1)
> **Env Vars:** html (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Form styling](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980&t=1)** - [Instructor] Let's go ahead and finish the styling of our website by adding our base template into each of our other templates. So, with our home page, let's go ahead a move over to our home.[[HTML]]. We're going to go ahead and get rid of our h1 tag, we don't need that necessarily but we do need what we have over on the order.html. Up at the top here this extends pizza and then the body block. We'll go ahead and copy and paste that up at the top, so that's going to bring in our base. What we're going to put inside of here, then we don't need our order pizza as well is we want to have a div that's going to center a big image for us on the screen, so we're going to say div class is equal to, we're going to make this text-center. Great and let's make sure that we have the ending div tag there. Then inside of this div, this is where we're going to want to add our image. So, our image needs to have a source and for right now we'll just go ahead and leave that blank. So, we'll go ahead and put that there. We will specify that the class on this should be image-fluid and we'll also specify here some alt text for accessibility, so we'll say Nandia's Garden. Great. So, for image, in order to be able to pull this inside, let's go ahead and move over to our settings.py,
>
> **[1:36](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980&t=96)** we'll scroll all the way down to the bottom. We already have a static URL but we need to add a STATIC_ROOT. Then we're going to have this be equal to, let's scroll up a little bit here inside of [[Databases]], you can grab this os.path. Just go ahead and copy that, paste down below but instead of a database, let's go ahead and make a new static folder, so we'll go ahead and save that. Once we've saved that, we need to go inside of our pizza directory, this is important to get this right, so inside our pizza directory, New Folder that we will call static and then inside of the static folder, we need to add our home page picture, so inside of your exercise files, you will have a picture of Nandia's Garden and we're just going to go ahead and drag that into our static folder. Now with that inside of that static folder, we should be able to add whatever's inside of there into a new static folder at the root of our project, so we're going to go ahead and move over to our terminal. Let's do a Control + C and then now we'll do a [[Python (Programming Language)|python]] manage.py collectstatic. This is going to move everything over. We can re-run our server again and if we go back to add 'em, we can see we now have a new static folder that includes nandiasgarden, it also includes some of the admin static files there but with that in place, we'll be able to go back to our home.html and we'll be able to add our load static tag,
>
> **[3:12](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980&t=192)** so we're going to just say load static, great. Then after that, inside of our source here, we'll be able to specify our static path, so we'll simply just say static and then in parentheses, nandiasgarden.jpg. Great. One last step here is if we open the block tag, we have to end that block, so we're going to go ahead and end it here. We will do endblock, add our percentage sign there
>
> **[3:49](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980&t=229)** and with this in place, let's go ahead and check out what our home page will look like. It should be so much cleaner than what we have. Yeah, look what we have now and reload. Oh, this is looking nice. So, we have the home page, we have the Order page looking good. Really the next step for us is the Pizzas and the Edit Order. So, let's go ahead and start first with our pizzas, so we're going to open up our pizzas code. Before we move there, let's go ahead and copy just from our home this beginning block where we extend and we get the block body, so we'll go ahead and copy that. Then we're going to move into our templates. Let's get to our pizzas.html. We'll go ahead and paste this at the very top of our code. We also want to go to our order.html. We want to grab on of these div containers. So, we'll go ahead and paste that as well right up at the top. Then we'll have all of the following code that we still have there and then we just need an ending div and an end block, so we'll go back to our order.html. We'll grab that ending div and end block. So, we'll copy that. Paste that here. And save that file. We're going to want to do a very similar thing for our order, so let's go ahead and move over to our edit_order. Again, at the bottom of all this, want to have that ending div and end block, so we'll go ahead and just add that at the bottom but we're going to want to have a nice chunk of code at the top.
>
> **[5:21](https://www.linkedin.com/learning/django-forms/form-styling?u=76281980&t=321)** Does a similar thing. We want to extend base.html in the block, so we're going to copy that. Come back to our edit_order, paste that there. We want to have our container div, so we'll go ahead and grab that. Let's get that form our pizzas.html. We'll grab that container. Copy and paste that inside of our edit_order. Awesome. So, let's go ahead and save this. Then let's go check out what our website looks like now, so let's say I want to order two pizzas. I'm going to click get Pizzas. Look at that, we got some awesome looking styling. Let's go back to Order, let's order one last pizza for good old time's sake. We'll order pizza, look at that, thank you, it's on its way. Let's edit that order. Oh, everything looks great. Let's change this over to Olives, edit that pizza, order has been updated. Excellent, we have a fabulous looking website that has been powered by [[Django]] [[Forms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[Databases]] (1), [[Python (Programming Language)|Python]] (1), [[Django]] (1), [[Forms]] (1)
> **File Paths:** order.html (3), home.html (2), pizzas.html (2), settings.py (1), manage.py (1)
> **CLI Commands:** make (3), python (1)
> **Cross-References:** go back to (4)
> **Code Identifiers:** edit_order (3)
> **UI Navigation:** scroll up (1), open the (1), go to (1)
> **Env Vars:** url (1), static_root (1)
> **Exercise Files:** template (1), exercise files (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/django-forms/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/django-forms/next-steps?u=76281980&t=1)** - [Nick] Thanks for coming along and learning about [[Django]] [[Forms]] with me. Hopefully, you've realized how excellent they are and you'll be using them in your projects going forward. Now, as far as next steps goes, if you'd like to dive deeper into how forms work, I'd recommend a course called [[HTML & CSS- Creating Forms]]. This isn't Django-specific, but it really gets behind the nuts and bolts about how forms work on the web. Now if you'd like to dive deeper into Django, I have several courses that I think you'd be interested. The first one is how to deploy your Django apps. So in this course we're going to have one project and deploy it to four different places. We're going to be working with DigitalOcean, AWS Beanstalk, Heroku, and even [[Microsoft Azure|Azure]]. You'll get to see the differences between each platform and decide which one is right for you. If you want to share your project with the world, this is the course. I also have a course on [[Test-Driven Development]] in Django. This will help ensure that you'll have confidence every time you ship your code. I also have a course on how to build a paid membership site with Django. If you've ever wanted to be able to accept payments and have a site that earns money month after month, this is a really fun course. And I'd love it if you connected with me. You can either connect with me on [[LinkedIn]], or on Twitter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (6), [[Forms]] (4), [[HTML]] (1), [[Microsoft Azure|Azure]] (1), [[Test-Driven Development]] (1)
> **Env Vars:** html (1), css (1), aws (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [nick] (1)


## Instructor

- [[Nick Walter]]

## Resources

- Exercise files available

## Skills Covered

- Django
- Forms

## Path Context

### In [[Become a Django Developer]]
← [[Django Essential Training]] | **2 of 4** | [[Deploying Django Apps- Make Your Site Go Live]] →

## Appears In

- [[Become a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Django Project- Build High-Traffic Websites with Django]] — Django
- [[Securing Django Applications]] — Django
- [[Building a Paid Membership Site with Django]] — Django
- [[Building RESTful Web APIs with Django]] — Django
- [[Building Angular and Django Apps]] — Django

---

[↑ Back to top](#)