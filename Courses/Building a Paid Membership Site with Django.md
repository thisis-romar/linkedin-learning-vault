---
type: course
slug: building-a-paid-membership-site-with-django
url: "https://www.linkedin.com/learning/building-a-paid-membership-site-with-django"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 3/1/2019
learners: 38191
skills:
  - Django
  - Membership Systems
exercise_files: true
tags:
  - course
  - topic/web-development
  - skill/django
  - skill/membership-systems
status: not-started
created: 2026-04-17
---

# Building a Paid Membership Site with Django

> In this course, put your Django skills to the test by building a membership site that is able to share content with users and collect payments. This course covers setting up the checkout for the site, managing users, configuring access controls, and releasing premium content to subscribers. By the end of this course, you will have learned how to create a visually pleasing and functional membership

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django) | 1h 15m | Intermediate | 38K learners

## Instructor

- [[Nick Walter]]

## Resources

- Exercise files available

## Skills Covered

- Django
- Membership Systems

## Table of Contents

### Introduction

#### Building a paid membership site with Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=0)** - [Instructor] Django and Stripe
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=0)** - [Instructor] Django and Stripe makes integrating payments into your web app simple.
>
> **[0:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=1)** makes integrating payments into your web app simple.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=5)** We'll be enhancing a fitness membership site with several key features, with several key features, creating monthly and yearly subscription plans in Stripe, creating monthly and yearly subscription plans in Stripe, allowing only paying members to access premium content, allowing only paying members to access premium content, and adding useful features and adding useful features like allowing a user to cancel a subscription.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=18)** like allowing a user to cancel a subscription.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=22)** Hi, I'm Nick, and I love Django and mobile programming.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=22)** Hi, I'm Nick, and I love Django and mobile programming.
>
> **[0:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=26)** Let's begin.
>
> **[0:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/building-a-paid-membership-site-with-django?u=76281980&t=26)** Let's begin.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (2)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=0)** - [Instructor] So before we go ahead
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=0)** - [Instructor] So before we go ahead and dive into the course, let's cover some and dive into the course, let's cover some of the basics that you should know of the basics that you should know before you move forward.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=5)** before you move forward.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=6)** The first is, you should have a basic idea The first is, you should have a basic idea of how to work with Python 3.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=8)** of how to work with Python 3.
>
> **[0:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=10)** We're going to be using Python 3.7, We're going to be using Python 3.7, but any recent Python 3 version is going to be just fine.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=13)** but any recent Python 3 version is going to be just fine.
>
> **[0:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=17)** You should be familiar with pip, You should be familiar with pip, this is the package manager for Python.
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=19)** this is the package manager for Python.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=21)** Also you should know how to build Also you should know how to build a basic Django project, we're going to have a basic Django project, we're going to have a nice starter project for you to move forward with a nice starter project for you to move forward with and you should be familiar with how to work and you should be familiar with how to work with models and whatnot.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=29)** with models and whatnot.
>
> **[0:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=31)** Now if you need a refresher, or just to learn Now if you need a refresher, or just to learn for the very first time, please check out for the very first time, please check out my Building a Personal Portfolio with Django, my Building a Personal Portfolio with Django, this starts from absolute scratch this starts from absolute scratch teaching someone the basics of Django, teaching someone the basics of Django, it's the perfect precourser to this course.
>
> **[0:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=43)** it's the perfect precourser to this course.
>
> **[0:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=47)** Next you should have a basic knowledge of the terminal, Next you should have a basic knowledge of the terminal, you should know how to move in and out of directories, you should know how to move in and out of directories, and also some Django specific commands.
>
> **[0:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=52)** and also some Django specific commands.
>
> **[0:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=55)** Next you'll need to have some sort of text editor, Next you'll need to have some sort of text editor, I'm going to be using Atom, but feel free I'm going to be using Atom, but feel free to use whichever one you'd like.
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=60)** to use whichever one you'd like.
>
> **[1:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=62)** Lastly, you should have some familiarity Lastly, you should have some familiarity with HTML and JavaScript.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=65)** with HTML and JavaScript.
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=67)** Now you probably don't need all that much Now you probably don't need all that much JavaScript, but we're going to touch on it a tad.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=69)** JavaScript, but we're going to touch on it a tad.
>
> **[1:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=71)** Basically knowing how the web works Basically knowing how the web works is going to help you in this course.
>
> **[1:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/what-you-should-know?u=76281980&t=74)** is going to help you in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), pip (2)
> **Versions:** python 3 (6)
> **Tools:** terminal (2), atom (2)
> **Code Keywords:** let (2)
> **Env Vars:** html (2)
> **Exercise Files:** starter project (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (2)

#### Demo project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=0)** - [Instructor] I'd like you to see where it is
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=0)** - [Instructor] I'd like you to see where it is that we'll be going in the course, that we'll be going in the course, and this is our finished product.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=4)** and this is our finished product.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=6)** It's a website called Nick Fitness, It's a website called Nick Fitness, where I'm going to be selling my fitness secrets.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=8)** where I'm going to be selling my fitness secrets.
>
> **[0:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=11)** Now I don't know anything about fitness Now I don't know anything about fitness and I have no business charging for it, and I have no business charging for it, but on the internet, everyone can be an expert, right?
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=15)** but on the internet, everyone can be an expert, right?
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=19)** So here's the basic idea of the website.
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=19)** So here's the basic idea of the website.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=21)** There's some fitness articles and plans There's some fitness articles and plans that you can check out, for example, that you can check out, for example, Bulging Biceps, this is completely free material Bulging Biceps, this is completely free material that someone could check out.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=28)** that someone could check out.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=29)** But let's say they want to learn But let's say they want to learn how to do from a couch to a 5K, how to do from a couch to a 5K, they click on this and realize they click on this and realize they need Nick Fitness Premium.
>
> **[0:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=35)** they need Nick Fitness Premium.
>
> **[0:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=37)** So in order to go get a subscription, So in order to go get a subscription, whether it be monthly or yearly, whether it be monthly or yearly, they're going to have to make an account.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=42)** they're going to have to make an account.
>
> **[0:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=44)** So we can hit the sign up button here.
>
> **[0:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=44)** So we can hit the sign up button here.
>
> **[0:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=46)** I'm going to make a new user named Mark, mark@[email.com](https://email.com).
>
> **[0:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=46)** I'm going to make a new user named Mark, mark@[email.com](https://email.com).
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=51)** Let's give Mark a password here, Let's give Mark a password here, and now, Mark once he's signed up, and now, Mark once he's signed up, can say, alright I want to go get that premium membership, can say, alright I want to go get that premium membership, and he says, I'm going to start with 10 bucks a month, and he says, I'm going to start with 10 bucks a month, we'll see how it is.
>
> **[1:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=64)** we'll see how it is.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=65)** My friend told me they have an awesome Halloween discount.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=65)** My friend told me they have an awesome Halloween discount.
>
> **[1:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=68)** So if I go ahead and type in the Halloween promo code, So if I go ahead and type in the Halloween promo code, I can hit redeem, and look at that, I can hit redeem, and look at that, I saved 31% off my order.
>
> **[1:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=73)** I saved 31% off my order.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=76)** So Mark says he's going to pay with his card, So Mark says he's going to pay with his card, and he's going to enter in his card information, and he's going to enter in his card information, and we'll just go ahead and put in our test card here, and we'll just go ahead and put in our test card here, and with all of this in place, we'll hit the pay button, and with all of this in place, we'll hit the pay button, and now Mark has access to all the premium content and now Mark has access to all the premium content on the site.
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=96)** on the site.
>
> **[1:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=97)** So now if Mark wants to check out From Couch to 5K, So now if Mark wants to check out From Couch to 5K, well he can, it's totally his, all here.
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=100)** well he can, it's totally his, all here.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=103)** Also included as part of this site is, Also included as part of this site is, Mark if he decides this really isn't for me, Mark if he decides this really isn't for me, I want to cancel my membership, he can hit this button I want to cancel my membership, he can hit this button and this will on Stripe's backend mark that Mark is going to end at the current billing cycle that Mark is going to end at the current billing cycle that he's not going any further than that.
>
> **[1:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=117)** that he's not going any further than that.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=120)** So connected with this, we're going to be So connected with this, we're going to be using Stripe, which is a great payment processor, using Stripe, which is a great payment processor, has one of the best APIs out there, has one of the best APIs out there, in my opinion, so you can see if we go to customers, in my opinion, so you can see if we go to customers, we can find mark@email, who we just created here.
>
> **[2:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=130)** we can find mark@email, who we just created here.
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=133)** If we can click on Mark we can see he subscribed If we can click on Mark we can see he subscribed to the monthly option with a 31% discount, to the monthly option with a 31% discount, all sorts of great information here inside of Stripe.
>
> **[2:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=139)** all sorts of great information here inside of Stripe.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=142)** They're really the power that makes this site work.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/demo-project-overview?u=76281980&t=142)** They're really the power that makes this site work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** let (4), this, (2)
> **UI Navigation:** click on (4), go to (2)
> **URLs:** [email.com](https://email.com) (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (2)


### 1. Setting Up Our Project

#### The starter project walkthrough
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=0)** - [Instructor] Let's start by getting our starter project
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=0)** - [Instructor] Let's start by getting our starter project up and running.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=4)** Now the first thing that you'll want to do Now the first thing that you'll want to do is put it somewhere on your computer.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=5)** is put it somewhere on your computer.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=7)** I went ahead and put mine on the desktop, I went ahead and put mine on the desktop, wherever it is that you'd like to have your project, wherever it is that you'd like to have your project, make sure you can get to it in your terminal make sure you can get to it in your terminal and see the folder that we're working with, and see the folder that we're working with, it's called Nick Fitness, and before we go ahead it's called Nick Fitness, and before we go ahead and move into it, we need to set up a virtual environment.
>
> **[0:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=20)** and move into it, we need to set up a virtual environment.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=23)** To make sure you have virtual environment installed, To make sure you have virtual environment installed, do pip3 install virtualenv, and once you have that do pip3 install virtualenv, and once you have that you can say virtual environment, and create one, you can say virtual environment, and create one, I'm going to call mine venv, short for virtual environment.
>
> **[0:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=34)** I'm going to call mine venv, short for virtual environment.
>
> **[0:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=39)** Once that's up and running, we want to activate Once that's up and running, we want to activate that virtual environment.
>
> **[0:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=41)** that virtual environment.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=42)** So I'm going to say source venv/bin/activate.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=42)** So I'm going to say source venv/bin/activate.
>
> **[0:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=48)** Now you can see on the left, I have in parenthesis venv, Now you can see on the left, I have in parenthesis venv, this means I'm inside of my virtual environment, this means I'm inside of my virtual environment, and once I'm there, I want to install the two packages and once I'm there, I want to install the two packages that we're going to need for this project.
>
> **[0:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=58)** that we're going to need for this project.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=59)** So pip install, I want django, and I also want stripe.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=59)** So pip install, I want django, and I also want stripe.
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=67)** Once that's finished, let's go ahead Once that's finished, let's go ahead and move into our Nick Fitness directory, and move into our Nick Fitness directory, and once there, there's a few different commands and once there, there's a few different commands that we have to run.
>
> **[1:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=73)** that we have to run.
>
> **[1:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=74)** The first one is we want to migrate our database, The first one is we want to migrate our database, so do a Python manage.py, and let's migrate.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=76)** so do a Python manage.py, and let's migrate.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=81)** Once that's done, I have some example data Once that's done, I have some example data for us to load into our database, for us to load into our database, so just do load data space plans.json.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=85)** so just do load data space plans.json.
>
> **[1:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=92)** Go ahead and hit enter on that, Go ahead and hit enter on that, then finally we want to run our server, then finally we want to run our server, and with that in place, let's go ahead and with that in place, let's go ahead and check out what our site looks like.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=101)** and check out what our site looks like.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=104)** So we'll start first at our homepage here.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=104)** So we'll start first at our homepage here.
>
> **[1:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=106)** You can see this is our fitness website.
>
> **[1:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=106)** You can see this is our fitness website.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=109)** We have all these cool different articles here.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=109)** We have all these cool different articles here.
>
> **[1:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=111)** So if you click on the very first one, So if you click on the very first one, you should be able to see the text in here, you should be able to see the text in here, this is just a bunch of gibberish.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=115)** this is just a bunch of gibberish.
>
> **[1:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=117)** But some of the articles, actually the rest, But some of the articles, actually the rest, if you click on them, they are a premium article, if you click on them, they are a premium article, meaning that we can't access them meaning that we can't access them unless we have a paid subscription, unless we have a paid subscription, and so they forward us to this payment screen.
>
> **[2:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=128)** and so they forward us to this payment screen.
>
> **[2:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=130)** This is the same button as if you hit premium, This is the same button as if you hit premium, it sends us to /join.
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=132)** it sends us to /join.
>
> **[2:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=135)** Now this has a fully functional user authentication system, Now this has a fully functional user authentication system, so if we'd like to sign up for this site, so if we'd like to sign up for this site, we can create a username like John, we can create a username like John, we'll give John a little test email here, we'll give John a little test email here, and we'll make a password for John, and we'll make a password for John, I'm going to use django1234.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=149)** I'm going to use django1234.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=153)** We'll go ahead and sign up John, We'll go ahead and sign up John, that makes it so John is now logged in, that makes it so John is now logged in, and you can see the different features and you can see the different features that John has, and we can log out of John, that John has, and we can log out of John, and we can also log back into John and we can also log back into John if we go ahead and put back in the appropriate credentials.
>
> **[2:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=166)** if we go ahead and put back in the appropriate credentials.
>
> **[2:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=169)** So there you have it, those are the basics So there you have it, those are the basics of what our project is right now.
>
> **[2:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=172)** of what our project is right now.
>
> **[2:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=174)** We need to get to the point where once a user We need to get to the point where once a user creates an account, they'll be able to then pay creates an account, they'll be able to then pay for a membership so they can access for a membership so they can access these premium articles.
>
> **[3:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/the-starter-project-walkthrough?u=76281980&t=182)** these premium articles.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), pip3 (2), pip (2), python (2)
> **Prerequisites:** install (6), set up (2), make sure you have (2)
> **Code Keywords:** let (8)
> **File Paths:** manage.py (2), plans.json (2)
> **UI Navigation:** click on (4)
> **Tools:** terminal (2)
> **Exercise Files:** starter project (2)
> **Definitions:** short for (2)

#### Create Stripe account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=0)** - [Instructor] Now, the next step for us
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=0)** - [Instructor] Now, the next step for us is we need to go get a Stripe account.
>
> **[0:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=1)** is we need to go get a Stripe account.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=4)** Stripe is the provider that makes all of this work.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=4)** Stripe is the provider that makes all of this work.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=6)** They handle payments in a beautiful fashion.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=6)** They handle payments in a beautiful fashion.
>
> **[0:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=9)** They have one of the best APIs out there They have one of the best APIs out there that I've ever seen.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=12)** that I've ever seen.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=13)** So to go ahead and get started, So to go ahead and get started, let's go ahead and go to [stripe.com](https://stripe.com).
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=15)** let's go ahead and go to [stripe.com](https://stripe.com).
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=19)** Once we're at Stripe, Once we're at Stripe, you just want to go ahead and click Start Now, sign up.
>
> **[0:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=20)** you just want to go ahead and click Start Now, sign up.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=23)** I'm sure their homepage is going to change at some point.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=23)** I'm sure their homepage is going to change at some point.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=25)** But go ahead and go through the steps But go ahead and go through the steps of creating an account.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=27)** of creating an account.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=29)** Now, I will mention, just be prepared Now, I will mention, just be prepared for this to take some time, for this to take some time, but eventually, you'll have but eventually, you'll have an activated, verified account an activated, verified account at which point you'll be able to work with data.
>
> **[0:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=37)** at which point you'll be able to work with data.
>
> **[0:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=39)** So I'm going to jump forward to show you So I'm going to jump forward to show you what it will look like what it will look like once you have a finished account.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=42)** once you have a finished account.
>
> **[0:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=44)** So once you are signed in, So once you are signed in, you should see a dashboard like this.
>
> **[0:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=46)** you should see a dashboard like this.
>
> **[0:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=48)** And you'll want to make sure that you have And you'll want to make sure that you have your view testing data switched over your view testing data switched over so that you're not working with actual payment information, so that you're not working with actual payment information, and you'll be able to use the test credit cards and you'll be able to use the test credit cards that you'll see later on in the course here.
>
> **[0:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=58)** that you'll see later on in the course here.
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=60)** But once you've made it to this dashboard, But once you've made it to this dashboard, this means that you're ready to move forward.
>
> **[1:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-stripe-account?u=76281980&t=62)** this means that you're ready to move forward.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2)
> **CLI Commands:** make (2)
> **URLs:** [stripe.com](https://stripe.com) (2)
> **UI Navigation:** go to (2)
> **Definitions:** means that (2)
> **Speakers:** - [instructor] (2)

#### Create a product in Stripe
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=0)** - [Instructor] Now that you've successfully created
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=0)** - [Instructor] Now that you've successfully created a Stripe account and that you have your test data a Stripe account and that you have your test data selected on, I'm going to show you how to selected on, I'm going to show you how to create a new product in Stripe.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=7)** create a new product in Stripe.
>
> **[0:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=9)** So, we're going to go over here to the billing menu, So, we're going to go over here to the billing menu, go ahead and click on that.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=12)** go ahead and click on that.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=13)** We want to create a new product here, We want to create a new product here, and with this product, go ahead and hit the new button here, and with this product, go ahead and hit the new button here, and go ahead and give this some sort of name.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=21)** and go ahead and give this some sort of name.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=24)** Now, for our website, the product that we're selling Now, for our website, the product that we're selling is the premium access to Nick's Fitness.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=27)** is the premium access to Nick's Fitness.
>
> **[0:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=31)** Now there's the monthly way to do that, Now there's the monthly way to do that, and there's the yearly way to do that, and there's the yearly way to do that, but for both of them, the name of the product but for both of them, the name of the product is going to be Nick's Premium Access.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=38)** is going to be Nick's Premium Access.
>
> **[0:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=41)** So I'm going to call this Nick Fitness Premium.
>
> **[0:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=41)** So I'm going to call this Nick Fitness Premium.
>
> **[0:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=46)** Alright, with that, go ahead and leave these two blank, Alright, with that, go ahead and leave these two blank, create your product.
>
> **[0:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=49)** create your product.
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=51)** Then you'll see it automatically prompts us Then you'll see it automatically prompts us to say what kind of pricing plan to say what kind of pricing plan do you want to have for this product?
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=56)** do you want to have for this product?
>
> **[0:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=58)** So it suggests here you could have a monthly one, So it suggests here you could have a monthly one, let's start with our monthly package.
>
> **[1:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=61)** let's start with our monthly package.
>
> **[1:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=64)** So let's just go ahead and simply name it that.
>
> **[1:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=64)** So let's just go ahead and simply name it that.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=65)** We're going to call this monthly.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=65)** We're going to call this monthly.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=69)** Leave ID blank, we want this to be recurring, Leave ID blank, we want this to be recurring, meaning this is going to happen at a regular interval.
>
> **[1:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=72)** meaning this is going to happen at a regular interval.
>
> **[1:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=75)** Select your currency here, I'm going to be using USD, Select your currency here, I'm going to be using USD, and we want to set the price for this, and we want to set the price for this, and I think $10 a month is a good price and I think $10 a month is a good price for our fitness tips.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=84)** for our fitness tips.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=86)** And then you have to select the billing interval.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=86)** And then you have to select the billing interval.
>
> **[1:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=88)** And again, it's defaulted to monthly here for us, And again, it's defaulted to monthly here for us, and that's what we want, so let's leave that selected.
>
> **[1:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=91)** and that's what we want, so let's leave that selected.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=93)** You have an option here to add a trial period, You have an option here to add a trial period, which could be a great way to say, which could be a great way to say, hey get your first week free or whatnot, hey get your first week free or whatnot, but we want to start charging people from the get go.
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=100)** but we want to start charging people from the get go.
>
> **[1:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=102)** We've got prominent content, let's keep it like this.
>
> **[1:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=102)** We've got prominent content, let's keep it like this.
>
> **[1:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=106)** So once that's all in place, hit add pricing plan, So once that's all in place, hit add pricing plan, and you'll see now this has been created.
>
> **[1:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=110)** and you'll see now this has been created.
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=112)** So to kind of take a step back from what we've just done, So to kind of take a step back from what we've just done, if you now click on products, you should have one if you now click on products, you should have one product there, it's Nick Fitness Premium, product there, it's Nick Fitness Premium, and if you go ahead and click on this, and if you go ahead and click on this, you can see that it has one pricing plan you can see that it has one pricing plan of $10 a month.
>
> **[2:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=124)** of $10 a month.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=127)** Now that's not the only plan that we want, Now that's not the only plan that we want, so let's go ahead and hit the add pricing plan, so let's go ahead and hit the add pricing plan, and let's change this one to be yearly.
>
> **[2:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=131)** and let's change this one to be yearly.
>
> **[2:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=135)** So with the yearly one, scroll down, So with the yearly one, scroll down, this is going to be $100 a year, this is going to be $100 a year, so we'll put 100 there, for the billing interval, so we'll put 100 there, for the billing interval, let's go ahead and select yearly, let's go ahead and select yearly, and there's so many different options here.
>
> **[2:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=145)** and there's so many different options here.
>
> **[2:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=147)** The custom one you can really create The custom one you can really create almost anything that you want, but for us, almost anything that you want, but for us, we want yearly, so we'll keep it just like that, we want yearly, so we'll keep it just like that, and we'll go ahead and add that pricing plan.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=153)** and we'll go ahead and add that pricing plan.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=156)** So now you can see Nick Fitness Premium So now you can see Nick Fitness Premium has two different pricing plans.
>
> **[2:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=159)** has two different pricing plans.
>
> **[2:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=161)** And so there's the yearly one here, And so there's the yearly one here, and the monthly, we can make changes to those and the monthly, we can make changes to those if we need to, or add other ones, right?
>
> **[2:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=166)** if we need to, or add other ones, right?
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=168)** We could make a weekly, quarterly, We could make a weekly, quarterly, whatever it is that you want, whatever it is that you want, but we now have a product that we can sell but we now have a product that we can sell to our user.
>
> **[2:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=175)** to our user.
>
> **[2:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=176)** Remember, in the end, what we want to do Remember, in the end, what we want to do is get people hooked onto this subscription here.
>
> **[2:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=178)** is get people hooked onto this subscription here.
>
> **[3:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=181)** Now it's a little bit confusing, Now it's a little bit confusing, because if you go into Stripe, there are subscriptions here, because if you go into Stripe, there are subscriptions here, but that's not exactly what we're looking at yet.
>
> **[3:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=187)** but that's not exactly what we're looking at yet.
>
> **[3:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=189)** Subscriptions are, once you have that tied in Subscriptions are, once you have that tied in with a particular user, for the time being, with a particular user, for the time being, just remember we're creating a product, just remember we're creating a product, and that product's going to have two pricing plans, and that product's going to have two pricing plans, yearly and monthly.
>
> **[3:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-a-product-in-stripe?u=76281980&t=199)** yearly and monthly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this, (4), this. (2)
> **UI Navigation:** click on (6), select the (2), scroll down (2)
> **CLI Commands:** make (4)
> **Env Vars:** usd (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (2)


### 2. Checkout Basics

#### Select yearly or monthly
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=0)** - [Instructor] It's time now to actually start
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=0)** - [Instructor] It's time now to actually start writing some code.
>
> **[0:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=2)** writing some code.
>
> **[0:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=3)** And let's start first with our join page.
>
> **[0:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=3)** And let's start first with our join page.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=5)** If we go back to our website If we go back to our website and we click on the premium tab, and we click on the premium tab, we have this awesome page where it says we have this awesome page where it says hey, you can either join monthly or yearly.
>
> **[0:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=11)** hey, you can either join monthly or yearly.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=14)** We have a nice little shout out showing We have a nice little shout out showing how you save $20 bucks a year by doing the yearly.
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=15)** how you save $20 bucks a year by doing the yearly.
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=19)** But both of these buttons right now are not going anywhere.
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=19)** But both of these buttons right now are not going anywhere.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=21)** And we want to talk about the whole flow of our project And we want to talk about the whole flow of our project and where we want things to go.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=25)** and where we want things to go.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=27)** So let's go ahead and move over into our project.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=27)** So let's go ahead and move over into our project.
>
> **[0:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=30)** To get you a little bit familiar with what we have, To get you a little bit familiar with what we have, it's called Nick Fitness.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=32)** it's called Nick Fitness.
>
> **[0:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=34)** And we have an app called Plans.
>
> **[0:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=34)** And we have an app called Plans.
>
> **[0:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=36)** So inside of the Plans app if we go to our models.
>
> **[0:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=36)** So inside of the Plans app if we go to our models.
>
> **[0:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=39)** You can see the big object that we have here You can see the big object that we have here is the fitness plan.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=42)** is the fitness plan.
>
> **[0:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=43)** So fitness plan has a title, it has text, So fitness plan has a title, it has text, and it has a premium Boolean, meaning does this require and it has a premium Boolean, meaning does this require a premium account to be able to access it, right?
>
> **[0:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=50)** a premium account to be able to access it, right?
>
> **[0:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=53)** That's what we're trying to sell people.
>
> **[0:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=53)** That's what we're trying to sell people.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=54)** So this is what sort of everything is based off of.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=54)** So this is what sort of everything is based off of.
>
> **[0:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=58)** If you go ahead and check out our views.py If you go ahead and check out our views.py you can see that we have a function for our plans you can see that we have a function for our plans that simply just say okay, if someone wants that simply just say okay, if someone wants the following plan, check and see if it's premium.
>
> **[1:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=66)** the following plan, check and see if it's premium.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=69)** Currently we're just saying if it's premium Currently we're just saying if it's premium we're just going to redirect 'em to the join page.
>
> **[1:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=71)** we're just going to redirect 'em to the join page.
>
> **[1:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=73)** If not then we'll actually show them the plan, right.
>
> **[1:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=73)** If not then we'll actually show them the plan, right.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=76)** That first plan we were able to see that.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=76)** That first plan we were able to see that.
>
> **[1:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=79)** And then we have some other pages here And then we have some other pages here but right now they're just returning back templates but right now they're just returning back templates that already exist.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=83)** that already exist.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=84)** So let's go ahead and check out the join template.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=84)** So let's go ahead and check out the join template.
>
> **[1:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=88)** And move into templates, plans.
>
> **[1:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=88)** And move into templates, plans.
>
> **[1:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=90)** And we'll go to our join.html.
>
> **[1:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=90)** And we'll go to our join.html.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=93)** And currently our two buttons here, our HREFS are blank.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=93)** And currently our two buttons here, our HREFS are blank.
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=96)** So we need to talk about where it is So we need to talk about where it is that we want to send our user.
>
> **[1:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=98)** that we want to send our user.
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=100)** Well we want to send them to the checkout page.
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=100)** Well we want to send them to the checkout page.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=103)** So let's go ahead and add in the appropriate tag for that.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=103)** So let's go ahead and add in the appropriate tag for that.
>
> **[1:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=106)** We'll say we want the URL We'll say we want the URL that's called checkout and that's a URL that's called checkout and that's a URL if you go to our URLS.py you can go see that.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=113)** if you go to our URLS.py you can go see that.
>
> **[1:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=116)** But along with this not only do we want to send them But along with this not only do we want to send them to the checkout but we want to specify to the checkout but we want to specify did they select a monthly or a yearly plan?
>
> **[2:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=121)** did they select a monthly or a yearly plan?
>
> **[2:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=124)** So for this button up here, if we look at this So for this button up here, if we look at this this is our $10 monthly plan.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=127)** this is our $10 monthly plan.
>
> **[2:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=129)** So we're going to add on to the end of this URL So we're going to add on to the end of this URL a question mark and then we're going to say plan a question mark and then we're going to say plan is equal to and we'll have that be monthly.
>
> **[2:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=137)** is equal to and we'll have that be monthly.
>
> **[2:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=141)** So we're going to copy the code that we have here So we're going to copy the code that we have here for this HREF, come down and paste it below for this HREF, come down and paste it below and change this from monthly to yearly.
>
> **[2:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=146)** and change this from monthly to yearly.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=149)** And with this in place, go ahead and save this.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=149)** And with this in place, go ahead and save this.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=153)** We'll come back to our join page here.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=153)** We'll come back to our join page here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=156)** We'll reload, let's click on the Get Started button.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=156)** We'll reload, let's click on the Get Started button.
>
> **[2:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=158)** Look at that, it takes us our checkout with monthly.
>
> **[2:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=158)** Look at that, it takes us our checkout with monthly.
>
> **[2:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=161)** And if we go back and hit the yearly And if we go back and hit the yearly it'll take us there with yearly in place.
>
> **[2:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=163)** it'll take us there with yearly in place.
>
> **[2:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=166)** Now with that underway, let's go ahead and start prepping Now with that underway, let's go ahead and start prepping for our next phase of the site here.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=170)** for our next phase of the site here.
>
> **[2:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=172)** And that's that whenever somebody wants to buy And that's that whenever somebody wants to buy a premium subscription, we have to make a customer a premium subscription, we have to make a customer account for them.
>
> **[2:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=178)** account for them.
>
> **[2:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=179)** And this is different from our user object.
>
> **[2:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=179)** And this is different from our user object.
>
> **[3:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=181)** So let's go ahead and go to our models.py So let's go ahead and go to our models.py and now create a new class.
>
> **[3:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=184)** and now create a new class.
>
> **[3:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=186)** So the class that we're going to be creating is customer.
>
> **[3:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=186)** So the class that we're going to be creating is customer.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=191)** And customer is going to come from models, capital Model.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=191)** And customer is going to come from models, capital Model.
>
> **[3:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=196)** And the different properties here are first we should have And the different properties here are first we should have the user, this is what's going to connect them the user, this is what's going to connect them to the user object.
>
> **[3:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=201)** to the user object.
>
> **[3:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=202)** And we'll say models dot and we want capital One to One And we'll say models dot and we want capital One to One capital Field and inside of here we'll pass in capital Field and inside of here we'll pass in capital User comma and then our on delete.
>
> **[3:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=212)** capital User comma and then our on delete.
>
> **[3:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=218)** We'll have this be equal to We'll have this be equal to models and then all caps Cascade.
>
> **[3:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=220)** models and then all caps Cascade.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=225)** Great.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=225)** Great.
>
> **[3:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=226)** Our next step is we want to add a stripe ID.
>
> **[3:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=226)** Our next step is we want to add a stripe ID.
>
> **[3:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=232)** And stripe ID is going to be models.Charfield.
>
> **[3:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=232)** And stripe ID is going to be models.Charfield.
>
> **[3:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=238)** In fact we can copy this from up above.
>
> **[3:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=238)** In fact we can copy this from up above.
>
> **[4:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=241)** Got our models.charfield here.
>
> **[4:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=241)** Got our models.charfield here.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=243)** Let's have that be 255.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=243)** Let's have that be 255.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=246)** Next we want to have a stripe_subscription Next we want to have a stripe_subscription _ID.
>
> **[4:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=253)** _ID.
>
> **[4:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=255)** We're going to have that also be equal to a Charfield.
>
> **[4:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=255)** We're going to have that also be equal to a Charfield.
>
> **[4:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=259)** Next we need cancel Next we need cancel _at _at _period _period _end.
>
> **[4:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=266)** _end.
>
> **[4:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=268)** This is saying whether or not they want This is saying whether or not they want to cancel their subscription.
>
> **[4:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=271)** We'll use this in a little bit, We'll use this in a little bit, and this is going to be a Boolean field.
>
> **[4:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=273)** and this is going to be a Boolean field.
>
> **[4:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=274)** So let's go ahead and copy this, paste.
>
> **[4:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=274)** So let's go ahead and copy this, paste. 1 Although we want to default here to be equal to false.
>
> **[4:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=276)** Although we want to default here to be equal to false. 1 And finally, we're going to have a membership.
>
> **[4:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=282)** And finally, we're going to have a membership. 1 And a membership's also going to be a Boolean.
>
> **[4:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=285)** And a membership's also going to be a Boolean. 1 So we're going to say membership is equal to.
>
> **[4:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=287)** So we're going to say membership is equal to. 1 We'll go ahead and paste that in again.
>
> **[4:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=290)** We'll go ahead and paste that in again. 1 Let's set this equal to default.
>
> **[4:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=292)** Let's set this equal to default. 1 This is going to say whether or not they have a membership.
>
> **[4:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=294)** This is going to say whether or not they have a membership. 1 So with this all in place remember any time So with this all in place remember any time 1 you add a new model, we've got to let the database you add a new model, we've got to let the database 1 know about it so we're going to quit our server.
>
> **[5:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=304)** know about it so we're going to quit our server. 1 Then we're going to remove our database completely.
>
> **[5:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=306)** Then we're going to remove our database completely. 1 So we'll go ahead and remove that.
>
> **[5:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=310)** So we'll go ahead and remove that. 1 Then we're going to say Python manage.py Then we're going to say Python manage.py 1 make migrations.
>
> **[5:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=316)** make migrations. 1 And you can see it made a new migration for us.
>
> **[5:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=320)** And you can see it made a new migration for us. 1 Next step for us is we want to do the migrate.
>
> **[5:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=322)** Next step for us is we want to do the migrate. 1 After the migration is complete let's go ahead and load After the migration is complete let's go ahead and load 1 our data like we've done before.
>
> **[5:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=329)** our data like we've done before. 1 And after we've done that, all we have to do And after we've done that, all we have to do 1 is re-run our server.
>
> **[5:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=334)** is re-run our server. 1 Great.
>
> **[5:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=337)** Great. 1 We are in an awesome position to now move on We are in an awesome position to now move on 1 to the checkout page.
>
> **[5:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/select-yearly-or-monthly?u=76281980&t=340)** to the checkout page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), require (2), function (2), this. (2), class. (2)
> **Env Vars:** url (6), hrefs (2), urls (2), href (2)
> **UI Navigation:** go to (8), click on (4)
> **File Paths:** views.py (2), join.html (2), urls.py (2), models.py (2), manage.py (2)
> **CLI Commands:** make (4), python (2)
> **Code Identifiers:** stripe_subscription (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)

#### Checkout page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=0)** - [Instructor] Now the next thing that we want to
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=0)** - [Instructor] Now the next thing that we want to work on is our checkout page.
>
> **[0:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=1)** work on is our checkout page.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=4)** Now you can see we can clearly access it here.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=4)** Now you can see we can clearly access it here.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=6)** One thing that I want to mention is let's say that we are One thing that I want to mention is let's say that we are logged out and we decide that, hey, I want to get a Premium logged out and we decide that, hey, I want to get a Premium Account, and I'm going to click on this yearly option here.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=12)** Account, and I'm going to click on this yearly option here.
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=15)** We shouldn't be able to see this checkout page unless We shouldn't be able to see this checkout page unless we are signed in, or else we won't know who to attribute we are signed in, or else we won't know who to attribute the Premium subscription to.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=21)** the Premium subscription to.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=24)** So let's go ahead and move back to our code So let's go ahead and move back to our code and let's move into our views.py.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=27)** and let's move into our views.py.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=29)** So inside of our views.py, let's go ahead and move over So inside of our views.py, let's go ahead and move over to our checkout function.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=32)** to our checkout function.
>
> **[0:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=35)** Here, we're going to require that someone has to be Here, we're going to require that someone has to be logged in in order to use this page.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=38)** logged in in order to use this page.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=42)** So we'll go ahead and, at the top here, put an @ sign, So we'll go ahead and, at the top here, put an @ sign, and we're going to say "login_required".
>
> **[0:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=45)** and we're going to say "login_required".
>
> **[0:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=52)** We have to make sure that we have this imported We have to make sure that we have this imported into our project to use this code, into our project to use this code, so up at the top here, we're going to say "from" so up at the top here, we're going to say "from" and then we want "django.contrib.auth.decorators import" and then we want "django.contrib.auth.decorators import"
>
> **[1:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=74)** and then we want "login_required".
>
> **[1:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=74)** and then we want "login_required".
>
> **[1:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=80)** Great. So with that in place, Great. So with that in place, now it should be the case that when someone wants now it should be the case that when someone wants the checkout page, they have to be logged in.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=84)** the checkout page, they have to be logged in.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=86)** Let's test it out.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=86)** Let's test it out.
>
> **[1:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=88)** If we come back and reload this page, If we come back and reload this page, you can see it spits us forward to the Login page, perfect.
>
> **[1:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=90)** you can see it spits us forward to the Login page, perfect.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=93)** So let's go ahead and log in with our "john", So let's go ahead and log in with our "john", put in our password.
>
> **[1:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=97)** put in our password.
>
> **[1:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=99)** Oh, that's right, we've deleted our database Oh, that's right, we've deleted our database so we need to make a brand new user.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=101)** so we need to make a brand new user.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=103)** So we're going to sign up.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=103)** So we're going to sign up.
>
> **[1:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=105)** Let's recreate john again, j@[j.org](https://j.org).
>
> **[1:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=105)** Let's recreate john again, j@[j.org](https://j.org).
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=113)** Excellent. Okay.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=113)** Excellent. Okay.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=115)** So with this all in place, let's go ahead and go back So with this all in place, let's go ahead and go back to Premium, now that we're logged in, and look at this.
>
> **[1:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=117)** to Premium, now that we're logged in, and look at this.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=120)** We are able to get to the checkout page.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=120)** We are able to get to the checkout page.
>
> **[2:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=122)** That's good news.
>
> **[2:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=122)** That's good news.
>
> **[2:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=124)** There's one last thing that we'll want to change here, There's one last thing that we'll want to change here, and that's that I want to show you how to and that's that I want to show you how to try and pay for something.
>
> **[2:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=128)** try and pay for something.
>
> **[2:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=129)** If you hit Pay with Card, hey look, If you hit Pay with Card, hey look, we automatically get this cool pop-up.
>
> **[2:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=131)** we automatically get this cool pop-up.
>
> **[2:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=134)** But let's go ahead and move into our views.py But let's go ahead and move into our views.py and write a little bit of code for our checkout.
>
> **[2:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=136)** and write a little bit of code for our checkout.
>
> **[2:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=139)** So what we want to know is whether someone is posting So what we want to know is whether someone is posting or getting to this function.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=142)** or getting to this function.
>
> **[2:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=145)** So let's do an "if request.method ==" So let's do an "if request.method ==" Make sure you have the two equal signs there.
>
> **[2:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=150)** Make sure you have the two equal signs there.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=153)** If it is equal to a POST, If it is equal to a POST, in that situation, this is where we'd want to in that situation, this is where we'd want to complete a payment and all that stuff.
>
> **[2:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=158)** complete a payment and all that stuff.
>
> **[2:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=160)** For the time being, let's just go ahead For the time being, let's just go ahead and return a redirect to home.
>
> **[2:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=162)** and return a redirect to home.
>
> **[2:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=167)** Okay?
>
> **[2:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=167)** Okay?
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=168)** So we'll go ahead and have that.
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=168)** So we'll go ahead and have that.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=170)** Our else situation is that we are going to be what Our else situation is that we are going to be what we currently have, and that's rendering the template we currently have, and that's rendering the template right here. Okay?
>
> **[2:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=176)** right here. Okay?
>
> **[2:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=179)** So with this in place, let's go ahead and open up So with this in place, let's go ahead and open up our checkout.html.
>
> **[3:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=181)** our checkout.html.
>
> **[3:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=183)** There's one piece of information that we'll want to There's one piece of information that we'll want to apply inside of our checkout, apply inside of our checkout, and that's down here.
>
> **[3:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=188)** and that's down here.
>
> **[3:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=189)** There's this awesome form that comes from Stripe There's this awesome form that comes from Stripe that allows us to accept credit card payments that allows us to accept credit card payments really quickly, and it needs a data key.
>
> **[3:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=193)** really quickly, and it needs a data key.
>
> **[3:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=196)** So if we go ahead and move back to our Stripe page So if we go ahead and move back to our Stripe page and we go to Developers, API keys, and we go to Developers, API keys, and we have this Publishable key.
>
> **[3:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=203)** and we have this Publishable key.
>
> **[3:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=205)** Go ahead and copy whatever you have there, Go ahead and copy whatever you have there, come back, and inside of your checkout.html come back, and inside of your checkout.html in the form at the very bottom, in the form at the very bottom, go ahead and paste that in for the data key.
>
> **[3:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=212)** go ahead and paste that in for the data key.
>
> **[3:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=215)** So we're going to go ahead and save this, So we're going to go ahead and save this, then we're going to come back to our page.
>
> **[3:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=218)** then we're going to come back to our page.
>
> **[3:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=220)** Let's reload the checkout and make sure our Let's reload the checkout and make sure our changes are there in place.
>
> **[3:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=222)** changes are there in place.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=225)** With this, we're going to have our very first test payment.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=225)** With this, we're going to have our very first test payment.
>
> **[3:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=227)** Hit Pay with Card.
>
> **[3:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=227)** Hit Pay with Card.
>
> **[3:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=229)** For Card number just do 424242 all the way For Card number just do 424242 all the way 'til it's finished.
>
> **[3:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=233)** 'til it's finished.
>
> **[3:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=234)** It doesn't matter what you do for year and month, It doesn't matter what you do for year and month, as long as it is in the future.
>
> **[3:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=236)** as long as it is in the future.
>
> **[3:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=238)** I like to do 2/22.
>
> **[3:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=238)** I like to do 2/22.
>
> **[3:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=239)** And then CVC also if you just do 222 And then CVC also if you just do 2 that's going to be correct.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=243)** that's going to be correct.
>
> **[4:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=244)** So just go ahead and put those in.
>
> **[4:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=244)** So just go ahead and put those in.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=246)** Hit the Pay button.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=246)** Hit the Pay button.
>
> **[4:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=248)** We'll see we get the green check, We'll see we get the green check, and look at this, it kicks us back home.
>
> **[4:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=250)** and look at this, it kicks us back home.
>
> **[4:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=252)** So essentially what's happened is that form, So essentially what's happened is that form, if it can successfully process the credit card, if it can successfully process the credit card, it's going to post back to our checkout, it's going to post back to our checkout, and it's going to come through as a post request.
>
> **[4:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=262)** and it's going to come through as a post request.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=264)** That's why we were able to redirect back to home.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/checkout-page?u=76281980&t=264)** That's why we were able to redirect back to home.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), this, (6), function (4), require (2), this. (2)
> **File Paths:** views.py (6), checkout.html (4)
> **CLI Commands:** make (8)
> **Env Vars:** post (2), api (2), cvc (2)
> **Code Identifiers:** login_required (4)
> **UI Navigation:** click on (2), go to (2)
> **URLs:** [j.org](https://j.org) (2)
> **Exercise Files:** template (2)

#### Stripe front end
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=0)** - [Instructor] So while we're on the subject of API keys,
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=0)** - [Instructor] So while we're on the subject of API keys, I'd like to go ahead and talk about the Secret key I'd like to go ahead and talk about the Secret key that's listed here.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=5)** that's listed here.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=6)** So, the Publishable key is what you put inside of that form So, the Publishable key is what you put inside of that form to say, hey, if somebody submits a credit card payment to say, hey, if somebody submits a credit card payment with the following key, with the following key, it needs to be connected to this account.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=13)** it needs to be connected to this account.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=16)** Now, when you're going to make some API calls like, Now, when you're going to make some API calls like, hey, I want to make a new customer, hey, I want to make a new customer, and I want to subscribe them to the following product, and I want to subscribe them to the following product, or I want to cancel that.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=23)** or I want to cancel that.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=24)** That's going to require the Secret key.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=24)** That's going to require the Secret key.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=27)** So, let's go ahead and click this button So, let's go ahead and click this button to reveal the Secret key, to reveal the Secret key, and let's take this and add it to our project.
>
> **[0:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=30)** and let's take this and add it to our project.
>
> **[0:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=33)** I'm going to copy this here.
>
> **[0:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=33)** I'm going to copy this here.
>
> **[0:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=35)** I'm going to come back because the Secret key I'm going to come back because the Secret key should never be seen by anyone outside of us, should never be seen by anyone outside of us, like on our own servers.
>
> **[0:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=41)** like on our own servers.
>
> **[0:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=43)** We're going to keep this inside of the views.py, We're going to keep this inside of the views.py, this should not be in any of your HTML files.
>
> **[0:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=45)** this should not be in any of your HTML files.
>
> **[0:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=48)** And what we're going to do is up at the top here, And what we're going to do is up at the top here, we are going to import Stripe and then up at the top of our file here up at the top of our file here we are going to set what our API key is.
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=56)** we are going to set what our API key is.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=59)** So, we're going to simply just say, So, we're going to simply just say, stripe.api_key is equal to, stripe.api_key is equal to, and then we're going to set it equal to and then we're going to set it equal to that long string of letters and numbers.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=69)** that long string of letters and numbers.
>
> **[1:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=72)** But now, we have our Public key set But now, we have our Public key set and we also have our Private key set.
>
> **[1:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=75)** and we also have our Private key set.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=78)** Now, with this in place, let's go ahead and talk about Now, with this in place, let's go ahead and talk about when someone wants to get the checkout page when someone wants to get the checkout page there's lots of different information there's lots of different information that needs to come through there.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=84)** that needs to come through there.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=86)** They might be asking for a yearly subscription.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=86)** They might be asking for a yearly subscription.
>
> **[1:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=89)** They might be asking for monthly, They might be asking for monthly, so there's a lot of data that we need so there's a lot of data that we need to ultimately pass back to that page.
>
> **[1:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=92)** to ultimately pass back to that page.
>
> **[1:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=95)** So, here, inside of the else portion of our checkout So, here, inside of the else portion of our checkout let's go ahead and set a few options.
>
> **[1:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=99)** let's go ahead and set a few options.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=101)** So, the first one is going to be a coupon and initially, So, the first one is going to be a coupon and initially, we'll just set this equal to a string that says none.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=104)** we'll just set this equal to a string that says none.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=109)** We also want to have the price of the product that we have.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=109)** We also want to have the price of the product that we have.
>
> **[1:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=111)** Let's default that to the 10 bucks, Let's default that to the 10 bucks, in Stripe you'd list out everything as a penny.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=113)** in Stripe you'd list out everything as a penny.
>
> **[1:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=116)** So, this is essentially, 1,000 pennies is 10 bucks.
>
> **[1:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=116)** So, this is essentially, 1,000 pennies is 10 bucks.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=120)** We also want to have og_dollar We also want to have og_dollar which is going to be the original price which is going to be the original price we want to show if there is a coupon we want to show if there is a coupon what it originally was and then what it changed to.
>
> **[2:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=126)** what it originally was and then what it changed to.
>
> **[2:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=129)** And then we'll do this in actual dollar amount, And then we'll do this in actual dollar amount, so we'll just keep that at 10.
>
> **[2:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=131)** so we'll just keep that at 10.
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=133)** Then, we want to have whatever the coupon dollar amount is, Then, we want to have whatever the coupon dollar amount is, and by default, let's have that be zero.
>
> **[2:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=137)** and by default, let's have that be zero.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=140)** So, we'll have that equal to zero.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=140)** So, we'll have that equal to zero.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=142)** And we also want to know what the final dollar amount is.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=142)** And we also want to know what the final dollar amount is.
>
> **[2:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=147)** So, this is, you know if there was a $5 coupon So, this is, you know if there was a $5 coupon or something like that we want to take five off of 10, or something like that we want to take five off of 10, but for right now looks like there's no coupon.
>
> **[2:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=152)** but for right now looks like there's no coupon.
>
> **[2:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=154)** These are our default values.
>
> **[2:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=154)** These are our default values.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=156)** So, we'll just go ahead and keep this as is.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=156)** So, we'll just go ahead and keep this as is.
>
> **[2:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=158)** Then, we need to do an if statement that says, Then, we need to do an if statement that says, okay, if this is a get request and the plan okay, if this is a get request and the plan is inside of our get request, is inside of our get request, meaning someone's provided us a plan, meaning someone's provided us a plan, we should specify some changes there.
>
> **[2:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=167)** we should specify some changes there.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=170)** So, we're going to say, if request. and we want method So, we're going to say, if request. and we want method is equal to, two equal signs there, is equal to, two equal signs there, do all caps get and the string plan do all caps get and the string plan is in request.GET.
>
> **[3:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=186)** is in request.GET.
>
> **[3:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=192)** Alright, so, if it's a plan is inside of there Alright, so, if it's a plan is inside of there and then we want to check and see if it is a yearly and then we want to check and see if it is a yearly because we set everything up there monthly, because we set everything up there monthly, so we're going to say, if request.GET.
>
> **[3:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=199)** so we're going to say, if request.GET.
>
> **[3:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=206)** If we pass plan inside of there, If we pass plan inside of there, which we just tested to see if that was the case.
>
> **[3:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=208)** which we just tested to see if that was the case.
>
> **[3:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=210)** If it's equal to yearly, well then in that situation If it's equal to yearly, well then in that situation we're going to want to set up to say plan we're going to want to set up to say plan instead of being equal to monthly instead of being equal to monthly is going to be equal to yearly, is going to be equal to yearly, and we're also going to want to say that the price for this and we're also going to want to say that the price for this is now equal to 10,000 pennies AKA $100.
>
> **[3:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=226)** is now equal to 10,000 pennies AKA $100.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=231)** We also want our og_dollar amount to change.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=231)** We also want our og_dollar amount to change.
>
> **[3:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=235)** So, we're going to say og_dollar is equal to 100.
>
> **[3:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=235)** So, we're going to say og_dollar is equal to 100.
>
> **[3:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=239)** And we're also going to say our final_dollar is equal to 100.
>
> **[3:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=239)** And we're also going to say our final_dollar is equal to 100.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=246)** 'Kay.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=246)** 'Kay.
>
> **[4:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=247)** We've got the beginnings of being able to pass this data.
>
> **[4:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=247)** We've got the beginnings of being able to pass this data.
>
> **[4:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=250)** Really, the last step for us is we just have to Really, the last step for us is we just have to inside of the render pass forward all of this information.
>
> **[4:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=252)** inside of the render pass forward all of this information.
>
> **[4:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=255)** So, we'll do our curly brackets here.
>
> **[4:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=255)** So, we'll do our curly brackets here.
>
> **[4:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=257)** And we'll start first with the plan.
>
> **[4:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=257)** And we'll start first with the plan.
>
> **[4:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=261)** And we'll have plan be equal to whatever the plan is.
>
> **[4:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=261)** And we'll have plan be equal to whatever the plan is.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=264)** We're also going to want to pass forward our coupon.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=264)** We're also going to want to pass forward our coupon.
>
> **[4:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=267)** So, we'll pass that forward.
>
> **[4:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=267)** So, we'll pass that forward.
>
> **[4:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=270)** We're also looking for the price on top of that, We're also looking for the price on top of that, we'd like to have the og_dollar.
>
> **[4:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=274)** we'd like to have the og_dollar.
>
> **[4:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=279)** Great.
>
> **[4:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=279)** Great.
>
> **[4:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=280)** We'd like to know the coupon_dollar.
>
> **[4:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=280)** We'd like to know the coupon_dollar. 1 And this is getting a little bit long here, And this is getting a little bit long here, 1 I'm going to keep this at a place I'm going to keep this at a place 1 where we can all see what's going on.
>
> **[4:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=290)** where we can all see what's going on. 1 After coupon_dollar, the next thing that we're looking for After coupon_dollar, the next thing that we're looking for 1 is the final_dollar.
>
> **[4:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=295)** is the final_dollar. 1 Go ahead and say final_dollar.
>
> **[4:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=297)** Go ahead and say final_dollar. 1 We'll have final_dollar, 'kay.
>
> **[5:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=301)** We'll have final_dollar, 'kay. 1 This is by no means ready to come back here.
>
> **[5:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=303)** This is by no means ready to come back here. 1 And in fact, I've put this in the wrong place.
>
> **[5:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=306)** And in fact, I've put this in the wrong place. 1 Let's go ahead and cut this and put this up Let's go ahead and cut this and put this up 1 with the render for our checkout.
>
> **[5:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=311)** with the render for our checkout. 1 But we're at the beginnings of being able to pass forward But we're at the beginnings of being able to pass forward 1 the correct information to that checkout page.
>
> **[5:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/stripe-front-end?u=76281980&t=316)** the correct information to that checkout page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (14), require (2), public (2), private (2)
> **Code Identifiers:** og_dollar (8), final_dollar (8), coupon_dollar (4), api_key (2)
> **Env Vars:** api (6), html (2), aka (2)
> **Definitions:** is a  (6)
> **CLI Commands:** make (4)
> **File Paths:** views.py (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (2)

#### Passing data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=0)** - [Instructor] So we have all this great information
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=0)** - [Instructor] So we have all this great information coming through, and I want to walk through coming through, and I want to walk through the flow of information one more time.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=4)** the flow of information one more time.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=7)** So we're going to start by saying alright, So we're going to start by saying alright, if it's a get request, then we're going to assume if it's a get request, then we're going to assume that it is going to be a monthly plan.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=12)** that it is going to be a monthly plan.
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=15)** And so we should even specify here.
>
> **[0:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=15)** And so we should even specify here.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=16)** We're going to say plan is equal to monthly, We're going to say plan is equal to monthly, and we set up everything for that.
>
> **[0:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=21)** and we set up everything for that.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=22)** And initially, we'll say there's no coupon, And initially, we'll say there's no coupon, the price is $10, and we'll specify, the price is $10, and we'll specify, you know, everything like that.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=27)** you know, everything like that.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=28)** But then we're going to say if we find inside But then we're going to say if we find inside of the get parameters that it is yearly, of the get parameters that it is yearly, well then we'll go ahead and change that to $100.
>
> **[0:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=33)** well then we'll go ahead and change that to $100.
>
> **[0:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=36)** And we're going to take all of this information And we're going to take all of this information and we're going to pass it forward as we render checkout.html.
>
> **[0:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=39)** and we're going to pass it forward as we render checkout.html.
>
> **[0:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=43)** So the next step for us is to go to our checkout.html So the next step for us is to go to our checkout.html and actually start displaying this information.
>
> **[0:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=47)** and actually start displaying this information.
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=51)** So I'll go ahead and move up to the top of the file here.
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=51)** So I'll go ahead and move up to the top of the file here.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=54)** There's a lot of great styling to make this all look good.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=54)** There's a lot of great styling to make this all look good.
>
> **[0:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=57)** But let's go ahead and go step by step with what we need.
>
> **[0:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=57)** But let's go ahead and go step by step with what we need.
>
> **[1:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=61)** So the first place that we need to move to So the first place that we need to move to is talking about the plan title.
>
> **[1:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=63)** is talking about the plan title.
>
> **[1:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=66)** So rather than having test here, let's go ahead and do So rather than having test here, let's go ahead and do our double brackets and say let's use our double brackets and say let's use whatever the plan is.
>
> **[1:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=71)** whatever the plan is.
>
> **[1:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=73)** And to really make this look good, And to really make this look good, we're going to put title afterwards, we're going to put title afterwards, as that will capitalize it.
>
> **[1:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=77)** as that will capitalize it.
>
> **[1:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=79)** So we'll go ahead and save this.
>
> **[1:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=79)** So we'll go ahead and save this.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=81)** Let's move back to our page.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=81)** Let's move back to our page.
>
> **[1:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=82)** I want you to see what we're looking at I want you to see what we're looking at here in our checkout.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=84)** here in our checkout.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=85)** So let's say we want to get premium.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=85)** So let's say we want to get premium.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=87)** Then we'll go to monthly here, and look at that, Then we'll go to monthly here, and look at that, we can see the word monthly right there.
>
> **[1:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=90)** we can see the word monthly right there.
>
> **[1:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=92)** And if I change this to say yearly, And if I change this to say yearly, well then it changes to yearly, right?
>
> **[1:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=95)** well then it changes to yearly, right?
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=96)** See how we're making changes here and whatnot?
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=96)** See how we're making changes here and whatnot?
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=100)** Let's go ahead and move back.
>
> **[1:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=100)** Let's go ahead and move back.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=101)** The next thing that we're looking for is the dollar amount.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=101)** The next thing that we're looking for is the dollar amount.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=104)** So instead of just always saying $10 here, So instead of just always saying $10 here, after that dollar sign, we're going to go ahead and put after that dollar sign, we're going to go ahead and put whatever the og_dollar is, okay?
>
> **[1:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=111)** whatever the og_dollar is, okay?
>
> **[1:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=117)** That'll look great.
>
> **[1:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=117)** That'll look great.
>
> **[1:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=118)** The next step for us is we need to have The next step for us is we need to have a little bit of a coupon code here.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=120)** a little bit of a coupon code here.
>
> **[2:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=122)** So right now, we're just showing this So right now, we're just showing this as the number five here, as the number five here, and so let's go ahead and change that.
>
> **[2:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=126)** and so let's go ahead and change that.
>
> **[2:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=128)** Instead, what we want to have here is the coupon.
>
> **[2:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=128)** Instead, what we want to have here is the coupon.
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=133)** And we're going to have that be uppercase, And we're going to have that be uppercase, so we're going to put upper just right after that.
>
> **[2:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=136)** so we're going to put upper just right after that.
>
> **[2:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=139)** Next thing that we're looking for is we have to have Next thing that we're looking for is we have to have the coupon dollar amount.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=142)** the coupon dollar amount.
>
> **[2:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=144)** And so there's a little bit of a negative sign here, right, And so there's a little bit of a negative sign here, right, and the dollar sign, 'cause this is and the dollar sign, 'cause this is how much off they're going to get.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=148)** how much off they're going to get.
>
> **[2:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=150)** So inside of here, we're going to just going to say So inside of here, we're going to just going to say coupon_dollar, and that'll all come through there.
>
> **[2:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=152)** coupon_dollar, and that'll all come through there.
>
> **[2:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=157)** Great, the next thing that we're looking for Great, the next thing that we're looking for is we have to specify what the final amount is going to be.
>
> **[2:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=159)** is we have to specify what the final amount is going to be.
>
> **[2:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=163)** And so instead of just five bucks, And so instead of just five bucks, we're going to have this be final_dollar, excellent.
>
> **[2:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=165)** we're going to have this be final_dollar, excellent.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=170)** After this, we want to pass forward After this, we want to pass forward some information via the form, right?
>
> **[2:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=172)** some information via the form, right?
>
> **[2:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=175)** So here we have an input that is hidden, So here we have an input that is hidden, and right now the value is just equal to blanks.
>
> **[2:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=178)** and right now the value is just equal to blanks.
>
> **[3:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=180)** So instead of that, in this situation, So instead of that, in this situation, this is if someone was going to submit a coupon, this is if someone was going to submit a coupon, we want to pass forward what plan it is we want to pass forward what plan it is that they're looking for.
>
> **[3:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=188)** that they're looking for.
>
> **[3:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=190)** So I'm going to go ahead and put plan right inside of there.
>
> **[3:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=190)** So I'm going to go ahead and put plan right inside of there.
>
> **[3:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=194)** Great, and you can see this is a get request Great, and you can see this is a get request that we're doing right there.
>
> **[3:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=197)** that we're doing right there.
>
> **[3:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=199)** After we've specified the plan, After we've specified the plan, we're going to go down to this is the Java script portion we're going to go down to this is the Java script portion where we have this awesome form from stripe.
>
> **[3:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=203)** where we have this awesome form from stripe.
>
> **[3:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=207)** And so we've already got our data key in there.
>
> **[3:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=207)** And so we've already got our data key in there.
>
> **[3:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=210)** For the data amount, instead of just always doing 500, For the data amount, instead of just always doing 500, we want this to be whatever the price is.
>
> **[3:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=214)** we want this to be whatever the price is.
>
> **[3:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=216)** Remember, this is set in pennies.
>
> **[3:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=216)** Remember, this is set in pennies.
>
> **[3:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=219)** For the data email, we want this to be to the user email, For the data email, we want this to be to the user email, so let's go ahead and remove that so let's go ahead and remove that and say that this should be user.email.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=225)** and say that this should be user.email.
>
> **[3:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=229)** Great, and then for these last two hidden inputs, Great, and then for these last two hidden inputs, we want to specify the plan and the coupon if they have one.
>
> **[3:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=232)** we want to specify the plan and the coupon if they have one.
>
> **[3:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=237)** So we're going to put plan here So we're going to put plan here and then we're also going to put coupon.
>
> **[3:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=239)** and then we're also going to put coupon.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=243)** Great, so with this all in place, if we go ahead Great, so with this all in place, if we go ahead and save this and come back to our checkout page, and save this and come back to our checkout page, if we reload it for yearly, you'll notice we have 100 bucks.
>
> **[4:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=249)** if we reload it for yearly, you'll notice we have 100 bucks.
>
> **[4:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=253)** And that's our final price yearly, everything looks good.
>
> **[4:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=253)** And that's our final price yearly, everything looks good.
>
> **[4:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=256)** Let's change this to monthly.
>
> **[4:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=256)** Let's change this to monthly.
>
> **[4:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=258)** Look at that, it's showing 10 bucks.
>
> **[4:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=258)** Look at that, it's showing 10 bucks.
>
> **[4:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=260)** And also, if we provide nothing at all, And also, if we provide nothing at all, so a user shouldn't get to the checkout page so a user shouldn't get to the checkout page unless they've come from the premium settings, unless they've come from the premium settings, 1 but lets say someone just manually entered this.
>
> **[4:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=266)** but lets say someone just manually entered this. 1 Well we've written the code to specify okay, Well we've written the code to specify okay, 1 we will assume that it's a monthly subscription we will assume that it's a monthly subscription 1 that they're looking for here.
>
> **[4:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/passing-data?u=76281980&t=274)** that they're looking for here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), pass (6), this. (4), this, (2), for. (2)
> **CLI Commands:** make (4), find (2)
> **Code Identifiers:** og_dollar (2), coupon_dollar (2), final_dollar (2)
> **File Paths:** checkout.html (4)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (2)

#### Coupons
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=0)** - [Instructor] So, our checkout is looking pretty solid,
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=0)** - [Instructor] So, our checkout is looking pretty solid, but it's missing one major feature, but it's missing one major feature, and that's the ability to accept coupons.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=5)** and that's the ability to accept coupons.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=8)** So, here, inside of our checkout function, So, here, inside of our checkout function, before we do our if statement before we do our if statement to see if it's a POST or a GET, to see if it's a POST or a GET, let's go ahead and set a list of coupons let's go ahead and set a list of coupons that we want to allow on our site.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=16)** that we want to allow on our site.
>
> **[0:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=19)** So we're going to go ahead and say coupons is equal to, So we're going to go ahead and say coupons is equal to, and let's just have this be a dictionary of coupons.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=23)** and let's just have this be a dictionary of coupons.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=25)** So for example, we might have a coupon So for example, we might have a coupon that is about Halloween, 'kay?
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=28)** that is about Halloween, 'kay?
>
> **[0:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=31)** And this Halloween coupon, its value is going to be 31, And this Halloween coupon, its value is going to be 31, meaning it's 31% off.
>
> **[0:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=35)** meaning it's 31% off.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=38)** Also we might have a welcome coupon, so we'll go ahead and do a string here called "welcome" and do a string here called "welcome" and it's going to be 10% off for this welcome coupon, alright?
>
> **[0:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=43)** and it's going to be 10% off for this welcome coupon, alright?
>
> **[0:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=48)** So we'll go ahead and enter in these coupons into a list, So we'll go ahead and enter in these coupons into a list, and then let's go ahead and incorporate these and then let's go ahead and incorporate these into our code down below, right?
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=54)** into our code down below, right?
>
> **[0:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=57)** So if someone's trying to get to our page and they say, So if someone's trying to get to our page and they say, "OK, I want to enter in the following coupon."
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=60)** "OK, I want to enter in the following coupon."
>
> **[1:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=63)** Right now we're doing nothing to update the coupon dollar Right now we're doing nothing to update the coupon dollar or the actual coupon here, so before we return or the actual coupon here, so before we return the rendering and after we've done this if statement here, the rendering and after we've done this if statement here, we are going to provide a little information we are going to provide a little information and check and see if there's a coupon.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=76)** and check and see if there's a coupon.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=78)** So similar to above, let's go ahead and copy this line So similar to above, let's go ahead and copy this line since we're going to be so close to this.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=81)** since we're going to be so close to this.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=83)** We're going to say, alright, we want to make sure We're going to say, alright, we want to make sure it's a GET request and we want to see if there is a coupon it's a GET request and we want to see if there is a coupon inside of that GET request, so we're going to say coupon here.
>
> **[1:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=89)** inside of that GET request, so we're going to say coupon here.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=93)** Then, here, inside of the coupon, Then, here, inside of the coupon, the thing that we're going to be looking for is to say, the thing that we're going to be looking for is to say, OK, what coupon is it that they have passed to us?
>
> **[1:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=98)** OK, what coupon is it that they have passed to us?
>
> **[1:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=102)** So we're going to say, if request, So we're going to say, if request, and inside of this request we're going to go and inside of this request we're going to go say we want to get the GET portion of that, say we want to get the GET portion of that, and we check to see if we have a coupon and we check to see if we have a coupon and we already do so we're going to say and we already do so we're going to say get coupon.lower, so we're going to get get coupon.lower, so we're going to get the lowercase version of this in case the lowercase version of this in case the user uppercased Halloween or whatnot, the user uppercased Halloween or whatnot, and then we're going to say in coupons.
>
> **[2:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=123)** and then we're going to say in coupons.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=127)** So this is checking to see, hey, is this thing So this is checking to see, hey, is this thing inside of the coupons list that we have up above?
>
> **[2:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=129)** inside of the coupons list that we have up above?
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=132)** Now if it is, then what we're going to do, Now if it is, then what we're going to do, is we're going to grab that coupon, is we're going to grab that coupon, it's the same thing as copying this, it's the same thing as copying this, and we'll just say, coupon is equal to what we have here and we'll just say, coupon is equal to what we have here so that we're always going to be working with so that we're always going to be working with the lowercase version so that we have that standard, the lowercase version so that we have that standard, and then the next thing that we want to do is specify and then the next thing that we want to do is specify what our percentage off should be.
>
> **[2:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=153)** what our percentage off should be.
>
> **[2:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=154)** So we're going to say percentage, So we're going to say percentage, and we're going to have that be equal to coupons, and we're going to have that be equal to coupons, with an s, and inside of there we want to pass in with an s, and inside of there we want to pass in whatever coupon is, so that's going to get us the number, whatever coupon is, so that's going to get us the number, the percentage back that we want.
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=168)** the percentage back that we want.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=170)** After that, we have to determine After that, we have to determine what the coupon price is going to be.
>
> **[2:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=172)** what the coupon price is going to be.
>
> **[2:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=175)** So we'll say coupon price is equal to, So we'll say coupon price is equal to, and then we're going to take our percentage, and then we're going to take our percentage, divided by one hundred, and let's go ahead divided by one hundred, and let's go ahead and surround that all in parentheses.
>
> **[3:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=186)** and surround that all in parentheses.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=191)** With that, let's multiply it by the price, With that, let's multiply it by the price, and we're going to turn all of this into an int.
>
> **[3:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=195)** and we're going to turn all of this into an int.
>
> **[3:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=198)** So we're going to say, int with open parenthesis, So we're going to say, int with open parenthesis, and end that right at the end there.
>
> **[3:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=201)** and end that right at the end there.
>
> **[3:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=205)** So now we have our coupon price which is an int, So now we have our coupon price which is an int, we want to calculate the real price, we want to calculate the real price, which is going to be price minus coupon price, great.
>
> **[3:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=210)** which is going to be price minus coupon price, great.
>
> **[3:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=217)** And then the last two pieces of information we need are And then the last two pieces of information we need are first, the coupon dollar, so we're going to say coupon_dollar.
>
> **[3:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=220)** first, the coupon dollar, so we're going to say coupon_dollar.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=225)** This should be equal to, let's take our coupon price This should be equal to, let's take our coupon price and turn it into a string.
>
> **[3:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=229)** and turn it into a string.
>
> **[3:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=230)** So we're going to say, string coupon price, So we're going to say, string coupon price, and then with this, we're going to go ahead and then with this, we're going to go ahead and get the first two pieces here, and get the first two pieces here, so we're going to say, colon, negative two.
>
> **[3:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=238)** so we're going to say, colon, negative two.
>
> **[4:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=242)** We're going to add to this string a dot, We're going to add to this string a dot, and then we're going to add after that the last two pieces.
>
> **[4:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=246)** and then we're going to add after that the last two pieces.
>
> **[4:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=249)** So then we're going to take again, a string of coupon price, So then we're going to take again, a string of coupon price, and then we'll go ahead and get the last two.
>
> **[4:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=257)** and then we'll go ahead and get the last two.
>
> **[4:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=258)** This way it's a nice formatted number This way it's a nice formatted number with the decimals and everything looking great.
>
> **[4:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=261)** with the decimals and everything looking great.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=264)** So that's our coupon dollar.
>
> **[4:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=264)** So that's our coupon dollar.
>
> **[4:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=266)** We also want to have final dollar, We also want to have final dollar, so we'll say final dollar is equal to, so we'll say final dollar is equal to, and here again we're going to make a string of price and here again we're going to make a string of price and let's grab from like before, and let's grab from like before, everything but the last two digits, plus, everything but the last two digits, plus, and then we'll have our dot, and then we'll have our dot, and then after that we'll add the ending two digits.
>
> **[4:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=285)** and then after that we'll add the ending two digits.
>
> **[4:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=288)** So we'll take a string, price, So we'll take a string, price, and after that we'll say negative two colon.
>
> **[4:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=292)** and after that we'll say negative two colon.
>
> **[4:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=296)** Awesome.
>
> **[4:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=296)** Awesome.
>
> **[4:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=297)** So with this all in place, we should have a checkout screen So with this all in place, we should have a checkout screen looking just like we'd like it.
>
> **[5:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=300)** looking just like we'd like it. 1 So let's go ahead and go to our checkout screen.
>
> **[5:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=302)** So let's go ahead and go to our checkout screen. 1 Let's try and enter the code "Halloween" for our promo.
>
> **[5:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=305)** Let's try and enter the code "Halloween" for our promo. 1 If we go ahead and redeem this, look at that, If we go ahead and redeem this, look at that, 1 we get three dollars and ten cents off, we get three dollars and ten cents off, 1 so now it's only 6.90.
>
> **[5:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=313)** so now it's only 6.90. 1 Let's say we do the "welcome" coupon, Let's say we do the "welcome" coupon, 1 well we don't get off as much but it's still pretty good.
>
> **[5:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=317)** well we don't get off as much but it's still pretty good. 1 Let's change our plan to yearly, look at that, Let's change our plan to yearly, look at that, 1 it still works, it does the correct math.
>
> **[5:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=322)** it still works, it does the correct math. 1 Let's do "Halloween" one more time, Let's do "Halloween" one more time, 1 redeem that, still works.
>
> **[5:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=326)** redeem that, still works. 1 So the awesome thing about this couponing system So the awesome thing about this couponing system 1 is that if we ever want to add or remove a coupon, is that if we ever want to add or remove a coupon, 1 we can simply just come into this portion of our page, we can simply just come into this portion of our page, 1 and add something to this dictionary or take something away.
>
> **[5:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/coupons?u=76281980&t=337)** and add something to this dictionary or take something away.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), this, (6), function (2), this. (2), pass (2)
> **API Endpoints:** get  (6), post  (2)
> **Analogies:** for example (2), similar to (2), just like (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is an  (2)
> **Code Identifiers:** coupon_dollar (2)
> **Env Vars:** post (2)
> **Versions:** 6.90 (2)


### 3. Processing Payments

#### Process payment
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=0)** - [Instructor] I would consider this to be
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=0)** - [Instructor] I would consider this to be the crown jewel of the course the crown jewel of the course because what we're going to do here is because what we're going to do here is create a subscription and charge our customer.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=6)** create a subscription and charge our customer.
>
> **[0:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=10)** A whole lot is going on here, A whole lot is going on here, but Stripe makes it very simple.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=12)** but Stripe makes it very simple.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=14)** Let's go ahead and move into our post part of this function.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=14)** Let's go ahead and move into our post part of this function.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=18)** We've done everything for the get, We've done everything for the get, but it's time to talk about the post.
>
> **[0:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=20)** but it's time to talk about the post.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=23)** So the first thing that we want to do is So the first thing that we want to do is we want to make a customer in Stripe, we want to make a customer in Stripe, so I'm going to make a variable to hold this.
>
> **[0:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=26)** so I'm going to make a variable to hold this.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=28)** I'm going to call this Stripe customer I'm going to call this Stripe customer and I'm going to say that my Stripe customer and I'm going to say that my Stripe customer is equal to Stripe dot capital Customer is equal to Stripe dot capital Customer dot create dot create and inside of my create, and inside of my create, I have to specify an email for my customer I have to specify an email for my customer and I can get that via the request and I can get that via the request dot user dot email dot user dot email and also, I need to say where it is and also, I need to say where it is that this customer's coming from.
>
> **[0:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=55)** that this customer's coming from.
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=56)** And we can actually confirm this via the Stripe form And we can actually confirm this via the Stripe form that we had.
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=60)** We get passed back to ourselves something called that we had.
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=60)** We get passed back to ourselves something called a Stripe token, a Stripe token, and so we're going to say and so we're going to say source is equal to request dot all caps source is equal to request dot all caps post and then pass inside of there post and then pass inside of there Stripe capital Token.
>
> **[1:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=75)** Stripe capital Token.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=78)** Starts with a lowercase, Starts with a lowercase, but then has that capital T but then has that capital T and this is going to create a customer for us in Stripe.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=81)** and this is going to create a customer for us in Stripe.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=84)** It will save it to their API.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=84)** It will save it to their API.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=86)** With that in place, we have to specify what plan With that in place, we have to specify what plan we want to charge the user with, we want to charge the user with, so let's go ahead and start first and grab what the monthly so let's go ahead and start first and grab what the monthly would be.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=93)** would be.
>
> **[1:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=94)** So let's go to our Stripe API, So let's go to our Stripe API, move into our product, move into our product, we'll go to monthly, we'll go to monthly, and grab the ID of that plan.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=103)** So we'll go ahead and say plan is equal to the following, So we'll go ahead and say plan is equal to the following, but we want to check and see, you know, but we want to check and see, you know, just in case if they did yearly just in case if they did yearly that we can have that plan be that.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=109)** that we can have that plan be that.
>
> **[1:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=111)** So we're going to say if request dot all caps post So we're going to say if request dot all caps post plan is equal to, need our two equal signs there, plan is equal to, need our two equal signs there, yearly, so if this is a yearly subscription, yearly, so if this is a yearly subscription, then we want plan to be equal to then we want plan to be equal to and let's go grab the ID for our yearly plan.
>
> **[2:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=128)** and let's go grab the ID for our yearly plan.
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=133)** Go ahead and copy that.
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=133)** Go ahead and copy that.
>
> **[2:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=135)** And then we'll paste that into the string.
>
> **[2:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=135)** And then we'll paste that into the string.
>
> **[2:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=137)** So you can see those are just a little bit different So you can see those are just a little bit different between the two and it'll make all the difference between the two and it'll make all the difference in the world on the back end.
>
> **[2:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=141)** in the world on the back end.
>
> **[2:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=143)** Now, our next step is Now, our next step is we have to decide whether or not they have a coupon.
>
> **[2:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=145)** we have to decide whether or not they have a coupon.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=148)** Now, to do this, we'll just simply say, Now, to do this, we'll just simply say, kind of like above, if request dot post has something kind of like above, if request dot post has something called coupon and that coupon is in our coupons with an s, called coupon and that coupon is in our coupons with an s, so with that case, we know that we have a valid coupon, so with that case, we know that we have a valid coupon, well then we would want to go do a few things, well then we would want to go do a few things, but if that's not the case, but if that's not the case, I want to show you the else part of this situation.
>
> **[2:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=169)** I want to show you the else part of this situation.
>
> **[2:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=171)** So I'm going to say else.
>
> **[2:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=171)** So I'm going to say else.
>
> **[2:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=173)** This is how easy it is to create a subscription in Stripe.
>
> **[2:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=173)** This is how easy it is to create a subscription in Stripe.
>
> **[2:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=177)** All you do is say subscription is equal to All you do is say subscription is equal to and then we're going to say Stripe dot capital Subscription and then we're going to say Stripe dot capital Subscription dot create and then with this, dot create and then with this, we have to pass it a customer.
>
> **[3:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=190)** we have to pass it a customer.
>
> **[3:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=192)** So our customer is going to be equal to whatever our Stripe So our customer is going to be equal to whatever our Stripe customer dot ID is.
>
> **[3:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=196)** customer dot ID is.
>
> **[3:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=199)** We had created this up above.
>
> **[3:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=199)** We had created this up above.
>
> **[3:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=201)** Then, we'll go ahead and add to this.
>
> **[3:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=201)** Then, we'll go ahead and add to this.
>
> **[3:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=204)** We'll specify what items it is that our customer wants We'll specify what items it is that our customer wants to buy, so we're going to say items is equal to to buy, so we're going to say items is equal to and we'll do first a list and we'll do first a list and then inside of that list, a dictionary and then inside of that list, a dictionary where we will provide the name plan and then give the value where we will provide the name plan and then give the value of our plan.
>
> **[3:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=218)** of our plan.
>
> **[3:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=220)** This is to say whether we want to buy the monthly This is to say whether we want to buy the monthly or the yearly subscription.
>
> **[3:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=222)** or the yearly subscription.
>
> **[3:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=224)** Now what's so amazing is that this is all it takes Now what's so amazing is that this is all it takes to create a subscription in Stripe.
>
> **[3:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=228)** to create a subscription in Stripe.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=231)** That code right there, it'll happen.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=231)** That code right there, it'll happen.
>
> **[3:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=234)** Amazing, isn't it?
>
> **[3:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=234)** Amazing, isn't it?
>
> **[3:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=235)** Now if we want to apply a coupon, Now if we want to apply a coupon, we've got to do a little bit more work here.
>
> **[3:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=237)** we've got to do a little bit more work here.
>
> **[4:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=240)** Let's go ahead and move into our coupon if statement.
>
> **[4:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=240)** Let's go ahead and move into our coupon if statement.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=243)** The idea that we're looking for here is The idea that we're looking for here is to say, okay, we know that we have a coupon.
>
> **[4:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=245)** to say, okay, we know that we have a coupon.
>
> **[4:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=248)** Let's figure out what percentage it is Let's figure out what percentage it is and create a coupon from that.
>
> **[4:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=250)** and create a coupon from that.
>
> **[4:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=251)** We're going to say percentage is equal to We're going to say percentage is equal to and we want to go ahead and get our coupons array.
>
> **[4:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=256)** and we want to go ahead and get our coupons array.
>
> **[4:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=260)** So inside of our coupons, we want to go grab So inside of our coupons, we want to go grab whatever's inside of our request post for coupon.
>
> **[4:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=263)** whatever's inside of our request post for coupon.
>
> **[4:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=267)** So we'll go ahead and paste that in, So we'll go ahead and paste that in, 1 make sure that we get the lowercase version of that.
>
> **[4:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=269)** make sure that we get the lowercase version of that. 1 Awesome.
>
> **[4:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=273)** Awesome. 1 Now that we have that, we're going to attempt Now that we have that, we're going to attempt 1 to create a coupon.
>
> **[4:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=276)** to create a coupon. 1 Now the reason I say attempt is Now the reason I say attempt is 1 it may have already been created before.
>
> **[4:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=279)** it may have already been created before. 1 In that case, we don't want to create anything.
>
> **[4:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=281)** In that case, we don't want to create anything. 1 And so, we're going to say coupon is equal to And so, we're going to say coupon is equal to 1 Stripe dot capital Coupon Stripe dot capital Coupon 1 dot create and we want to say for this coupon dot create and we want to say for this coupon 1 the duration of this coupon is going to be equal the duration of this coupon is going to be equal 1 to just once.
>
> **[4:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=298)** Now you can have this recurring or x number of times.
>
> **[4:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=298)** to just once. 1 Now you can have this recurring or x number of times. 1 You can see all of that in the API.
>
> **[5:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=301)** You can see all of that in the API. 1 But with this, we also need to say the ID But with this, we also need to say the ID 1 of what it is, the coupon ID that we want to create.
>
> **[5:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=307)** of what it is, the coupon ID that we want to create. 1 So we're going to say ID is equal to, So we're going to say ID is equal to, 1 again, we'll paste in our request dot post again, we'll paste in our request dot post 1 and lower that.
>
> **[5:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=316)** and lower that. 1 Then we'll go ahead and provide a comma here, Then we'll go ahead and provide a comma here, 1 add one more item to the end of this, add one more item to the end of this, 1 and that is, we want to say what percent underscore off and that is, we want to say what percent underscore off 1 this is going to be.
>
> **[5:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=330)** And this should just be equal to our percentage.
>
> **[5:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=330)** this is going to be. 1 And this should just be equal to our percentage. 1 Awesome.
>
> **[5:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=334)** Awesome. 1 So that way, this will create a coupon for us So that way, this will create a coupon for us 1 and with this, because we've started a try, and with this, because we've started a try, 1 we might get an error back from Stripe saying, we might get an error back from Stripe saying, 1 hey, you've already created a coupon with this ID.
>
> **[5:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=342)** hey, you've already created a coupon with this ID. 1 This is where we'd want to have an except to say, This is where we'd want to have an except to say, 1 okay, if that's the case, go ahead and pass through.
>
> **[5:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=347)** okay, if that's the case, go ahead and pass through. 1 We won't worry about creating another coupon.
>
> **[5:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=350)** We won't worry about creating another coupon. 1 Now, after we've done this, Now, after we've done this, 1 we're going to create the exact same subscription we're going to create the exact same subscription 1 as we have below here.
>
> **[5:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=357)** as we have below here. 1 So let's just go ahead and copy and paste this, So let's just go ahead and copy and paste this, 1 except we're going to add on one special item at the end except we're going to add on one special item at the end 1 here and that is a coupon.
>
> **[6:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=363)** here and that is a coupon. 1 So we're just going to specify the coupon is equal to, So we're just going to specify the coupon is equal to, 1 once again we'll get that request dot post lower once again we'll get that request dot post lower 1 all the way there and just paste that in.
>
> **[6:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=374)** all the way there and just paste that in. 1 Because we've specified that as the ID.
>
> **[6:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=376)** Because we've specified that as the ID. 1 So with this in place, So with this in place, 1 let's go ahead and save that.
>
> **[6:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=381)** let's go ahead and save that. 1 This is all the code that we need to process that payment.
>
> **[6:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=383)** This is all the code that we need to process that payment. 1 In the next video, let's go see what it looks like.
>
> **[6:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/process-payment?u=76281980&t=386)** In the next video, let's go see what it looks like.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), this, (14), case, (8), pass (6), this. (4)
> **CLI Commands:** make (8)
> **Env Vars:** api (6)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (4)
> **Cross-References:** in the next (2)
> **Analogies:** kind of like (2)
> **Speakers:** - [instructor] (2)

#### View Stripe data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=0)** - [Instructor] Now that we've implemented the code
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=0)** - [Instructor] Now that we've implemented the code to process a payment, let's test and see to process a payment, let's test and see what this looks like, especially in Stripe's backend.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=4)** what this looks like, especially in Stripe's backend.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=8)** So we'll go ahead and move over to our site, So we'll go ahead and move over to our site, we're already logged in as a user.
>
> **[0:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=10)** we're already logged in as a user.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=12)** Let's say we want to learn how to do couch to a 5K, Let's say we want to learn how to do couch to a 5K, so we click on that, oh we've got to get a subscription.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=14)** so we click on that, oh we've got to get a subscription.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=18)** Okay, let's do the $100 option, we already save 20 bucks.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=18)** Okay, let's do the $100 option, we already save 20 bucks.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=22)** Hey my friend told me about a sweet coupon, Hey my friend told me about a sweet coupon, if I type in welcome, I can get 10 bucks off, if I type in welcome, I can get 10 bucks off, and look, there it is, it happened.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=27)** and look, there it is, it happened.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=29)** So now I'm going to go ahead and click pay with card, So now I'm going to go ahead and click pay with card, I'm going to put in our fictitious number, I'm going to put in our fictitious number, remember just 42 all the way through, remember just 42 all the way through, 2, 2, 2, and 2, 2, 2.
>
> **[0:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=37)** 2, 2, 2, and 2, 2, 2.
>
> **[0:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=40)** We'll pay that 90 bucks, and with our green check, We'll pay that 90 bucks, and with our green check, look at this, we're going to get moved back look at this, we're going to get moved back to our homepage, and now when I go to click to our homepage, and now when I go to click on Couch to 5K, well we still don't get to it, on Couch to 5K, well we still don't get to it, and that's because we haven't modified our plan code yet, and that's because we haven't modified our plan code yet, but this is the thing that I want you to pay attention to.
>
> **[1:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=60)** to pay attention to.
>
> **[1:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=61)** Go ahead and move into our Stripe dashboard.
>
> **[1:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=61)** Go ahead and move into our Stripe dashboard.
>
> **[1:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=64)** If we click on customers, well look who shows up, If we click on customers, well look who shows up, there's John's email, j@[j.org](https://j.org), there's John's email, j@[j.org](https://j.org), and we can click on him and see, and we can click on him and see, oh he subscribed to yearly, he used a 10% off coupon, oh he subscribed to yearly, he used a 10% off coupon, this is the time that he was created.
>
> **[1:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=77)** this is the time that he was created.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=78)** So if we go to our billing, we can see So if we go to our billing, we can see that we now have a new coupon, that we now have a new coupon, this is the welcome coupon.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=83)** this is the welcome coupon.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=85)** We can also go see that there is now a subscription, We can also go see that there is now a subscription, j@j now has a subscription for Nick's Fitness Premium, j@j now has a subscription for Nick's Fitness Premium, and if you click on this, you can see and if you click on this, you can see whether he's in yearly or monthly.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=93)** whether he's in yearly or monthly.
>
> **[1:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=95)** In this case it's yearly.
>
> **[1:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=95)** In this case it's yearly.
>
> **[1:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=97)** Also there has been an invoice created, Also there has been an invoice created, so if we go ahead and look at this, so if we go ahead and look at this, for 90 bucks, j@j, the payment was successful.
>
> **[1:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=101)** for 90 bucks, j@j, the payment was successful.
>
> **[1:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=105)** There's all sorts of awesome data There's all sorts of awesome data that has been created here in Stripe, that has been created here in Stripe, based on this one single fact.
>
> **[1:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=109)** based on this one single fact.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=113)** So lots of great information here, So lots of great information here, we want to make sure that we don't spoil the situation here we want to make sure that we don't spoil the situation here because we actually have to modify our code because we actually have to modify our code to actually be able to go and see one of these plans, right?
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=120)** to actually be able to go and see one of these plans, right?
>
> **[2:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=123)** The Couch to 5K, we just paid the 90 bucks, The Couch to 5K, we just paid the 90 bucks, but we can't see anything.
>
> **[2:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=126)** but we can't see anything.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=127)** We actually need to clear out everything from Stripe We actually need to clear out everything from Stripe and add a little bit more work in our backend.
>
> **[2:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=130)** and add a little bit more work in our backend.
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=132)** So let's go ahead and move into our customers.
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=132)** So let's go ahead and move into our customers.
>
> **[2:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=136)** We are going to delete our j@j, We are going to delete our j@j, close that customer account.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=140)** close that customer account.
>
> **[2:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=142)** We're also going to go move into billing We're also going to go move into billing and make sure our coupon here, and make sure our coupon here, this also gets deleted.
>
> **[2:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=146)** this also gets deleted.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=148)** We'll go ahead and delete that.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=148)** We'll go ahead and delete that.
>
> **[2:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=150)** Once we delete the customer, it's going to delete Once we delete the customer, it's going to delete the subscription that's connected with it.
>
> **[2:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=152)** the subscription that's connected with it.
>
> **[2:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=155)** And don't worry about invoices, And don't worry about invoices, invoices happen over and over again.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=156)** invoices happen over and over again.
>
> **[2:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=159)** So with all of that in place, we are ready then So with all of that in place, we are ready then to go and create a customer.
>
> **[2:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/view-stripe-data?u=76281980&t=162)** to go and create a customer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (8), this, (6)
> **UI Navigation:** click on (8), go to (4)
> **CLI Commands:** make (4)
> **URLs:** [j.org](https://j.org) (2)
> **Speakers:** - [instructor] (2)

#### Create customer
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=0)** - [Narrator] The big issue with our project right now,
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=0)** - [Narrator] The big issue with our project right now, is that someone has paid for something but don't have is that someone has paid for something but don't have access to these premium plans access to these premium plans that they were promised.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=7)** that they were promised.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=8)** So in order to change this we have to make it So in order to change this we have to make it so that when someone creates a subscription, so that when someone creates a subscription, they also have a customer object associated with them.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=13)** they also have a customer object associated with them.
>
> **[0:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=17)** So if we're going to be working with the customer, So if we're going to be working with the customer, lets scroll to the top of this file and here where lets scroll to the top of this file and here where we imported our fitness plan from models, we imported our fitness plan from models, let's also import our customer class.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=24)** let's also import our customer class.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=28)** So let's make sure we spell that right, customer.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=28)** So let's make sure we spell that right, customer.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=32)** Great and with that in place lets come back down.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=32)** Great and with that in place lets come back down.
>
> **[0:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=36)** We have all the code here whether you're using a coupon We have all the code here whether you're using a coupon or not, right before we redirect the user back home, or not, right before we redirect the user back home, let's go ahead and type the code to create a new customer.
>
> **[0:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=42)** let's go ahead and type the code to create a new customer.
>
> **[0:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=47)** So we're going to say all lowercase customer is equal to So we're going to say all lowercase customer is equal to capital customer, we'll make a new instance of that object.
>
> **[0:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=50)** capital customer, we'll make a new instance of that object.
>
> **[0:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=55)** Then we're going to say customer dot user Then we're going to say customer dot user is equal to request dot user, is equal to request dot user, so that way we can have the two connected there.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=65)** so that way we can have the two connected there.
>
> **[1:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=68)** Then for our customer we're going to specify that Then for our customer we're going to specify that the stripe ID should be equal the stripe ID should be equal to our stripe underscore to our stripe underscore customer with the ID provided for that, customer with the ID provided for that, and that stripe customer here was created up at the and that stripe customer here was created up at the top of this if statement.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=84)** top of this if statement.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=87)** Id there.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=87)** Id there.
>
> **[1:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=89)** Next we need to specify if the membership was true or not, Next we need to specify if the membership was true or not, so we're going to say customer dot membership and so we're going to say customer dot membership and this is going to be crucial for getting the right plan showing this is going to be crucial for getting the right plan showing so we're going to say true, right they just paid for this so we're going to say true, right they just paid for this so we want to that to show up.
>
> **[1:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=102)** so we want to that to show up.
>
> **[1:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=105)** Next we're going to have our customer Next we're going to have our customer dot cancel at period end dot cancel at period end this is going to be equal to false.
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=112)** this is going to be equal to false.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=115)** So it will come into play when we'll allow users to So it will come into play when we'll allow users to cancel their subscription, and finally we're going to say cancel their subscription, and finally we're going to say customer dot and we want the stripe subscription ID customer dot and we want the stripe subscription ID to be equal to our subscription to be equal to our subscription dot id.
>
> **[2:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=131)** dot id.
>
> **[2:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=134)** Great, so with that in place lets go ahead Great, so with that in place lets go ahead and change this now at the end to say customer and change this now at the end to say customer dot save, and what's going to happen here it's is going to dot save, and what's going to happen here it's is going to save this new customer object in the database our save this new customer object in the database our line where we set the user to be equal there, line where we set the user to be equal there, that's going to connect it with the currently logged in user.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=149)** that's going to connect it with the currently logged in user.
>
> **[2:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=152)** Now with this all in place we need to go confirm Now with this all in place we need to go confirm that our customer code is working, we want to see this that our customer code is working, we want to see this on our admin panel, so lets go ahead and on our admin panel, so lets go ahead and save up what we have here, and before we do save up what we have here, and before we do let's make sure that this is ID not idea let's make sure that this is ID not idea and we'll hit the save button, so now and we'll hit the save button, so now we have all this view code.
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=168)** we have all this view code.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=170)** Let's then move over to our admin dot py Let's then move over to our admin dot py and register our customer class so that we'll and register our customer class so that we'll be able to see it.
>
> **[2:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=174)** be able to see it.
>
> **[2:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=176)** So we're going to import customer and we want to So we're going to import customer and we want to paste this lane so we can register customer paste this lane so we can register customer and our admin panel.
>
> **[3:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=182)** and our admin panel.
>
> **[3:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=185)** Now with this we need to make sure that we save this Now with this we need to make sure that we save this and we need a super user to be able to access our and we need a super user to be able to access our admin panel.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=191)** admin panel.
>
> **[3:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=192)** So let's go ahead and stop our server, we're going to go So let's go ahead and stop our server, we're going to go python manage dot py create super user.
>
> **[3:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=196)** python manage dot py create super user.
>
> **[3:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=201)** With that let's give it a name of Nick, With that let's give it a name of Nick, we don't need an email address and lets do Djengo 1234 we don't need an email address and lets do Djengo 12 and Djengo 1234.
>
> **[3:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=208)** and Djengo 1234.
>
> **[3:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=210)** okay let's fire back up so we can test this out.
>
> **[3:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=210)** okay let's fire back up so we can test this out.
>
> **[3:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=214)** We'll move back to our page, let's go ahead and We'll move back to our page, let's go ahead and get premium access here, we're already get premium access here, we're already logged in as John so we'll go ahead and say logged in as John so we'll go ahead and say that we'll get started and we want to redeem our that we'll get started and we want to redeem our welcome coupon.
>
> **[3:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=227)** welcome coupon.
>
> **[3:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=228)** Let's play with card.
>
> **[3:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=228)** Let's play with card.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=231)** Let's enter that in now.
>
> **[3:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=231)** Let's enter that in now.
>
> **[3:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=235)** We'll pay that.
>
> **[3:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=235)** We'll pay that.
>
> **[3:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=237)** Now with this in place we'll go ahead get Now with this in place we'll go ahead get kicked back to the home page and kicked back to the home page and we still can't get, you know this couch we still can't get, you know this couch to 5k article, that's a little bit upsetting but to 5k article, that's a little bit upsetting but if we go to our admin panel here, we can if we go to our admin panel here, we can log in with Nick, Djengo 1234 and log in with Nick, Djengo 1234 and if we go to customers we can see the new customer if we go to customers we can see the new customer object that we have and there's object that we have and there's their stripe ID, stripe subscription ID, they don't their stripe ID, stripe subscription ID, they don't have the cancel at period end, but have the cancel at period end, but they do have a membership.
>
> **[4:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=263)** they do have a membership.
>
> **[4:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=265)** Now we'll be able to determine which Now we'll be able to determine which customers have memberships and which ones don't.
>
> **[4:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/create-customer?u=76281980&t=267)** customers have memberships and which ones don't.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), super (4), class. (2)
> **CLI Commands:** make (10), python (2)
> **UI Navigation:** go to (4)
> **Speakers:** - [narrator] (2)

#### Release plans
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=0)** - [Instructor] Our site has a big problem.
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=0)** - [Instructor] Our site has a big problem.
>
> **[0:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=2)** People who have paid for content People who have paid for content are not able to see it.
>
> **[0:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=4)** are not able to see it.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=5)** So let's go ahead and make a fix for that.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=5)** So let's go ahead and make a fix for that.
>
> **[0:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=8)** So here inside of our Plan function, So here inside of our Plan function, if a plan is premium, right now we're just if a plan is premium, right now we're just automatically redirecting them back to the join page.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=13)** automatically redirecting them back to the join page.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=16)** Instead, let's check and see first Instead, let's check and see first if a user is logged in, and if they are logged in, if a user is logged in, and if they are logged in, let's see if they have a membership.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=22)** let's see if they have a membership.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=24)** So first we're going to say if request.user.is_authenticated, So first we're going to say if request.user.is_authenticated,
>
> **[0:35](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=35)** so if they are logged in, so if they are logged in, then we want to try and see if they have a membership, then we want to try and see if they have a membership, so we're going to say try:, and we're going to say so we're going to say try:, and we're going to say if request.user.customer, if request.user.customer, then we want their membership, then we want their membership, which remember this is a Boolean, which remember this is a Boolean, so we can just leave it at that, so we can just leave it at that, so if they have a membership well in that case so if they have a membership well in that case we want to return the plan to them we want to return the plan to them so that they can go see this fitness plan.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=59)** so that they can go see this fitness plan.
>
> **[1:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=61)** But, if they don't have a membership But, if they don't have a membership and if they are not even a customer, and if they are not even a customer, right, we haven't even created that customer class, right, we haven't even created that customer class, well in that situation we have to have an except.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=69)** well in that situation we have to have an except.
>
> **[1:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=72)** So we're going to say except, and in this situation So we're going to say except, and in this situation the specific except that we're looking for the specific except that we're looking for is a customer.DoesNotExist.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=78)** is a customer.DoesNotExist.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=85)** In this situation, just like below here, In this situation, just like below here, we'd like to redirect them back to the join page.
>
> **[1:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=88)** we'd like to redirect them back to the join page.
>
> **[1:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=91)** So, let's go ahead and save this, So, let's go ahead and save this, and see if we now can access our content.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=93)** and see if we now can access our content.
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=96)** One thing to note is once we're here on our homepage, One thing to note is once we're here on our homepage, we are logged in as the admin right now, we are logged in as the admin right now, which doesn't have a customer object, which doesn't have a customer object, so we're going to want to log out.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=103)** so we're going to want to log out.
>
> **[1:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=106)** Let's log back in via John, Let's log back in via John, and once we've done this, let's check out and once we've done this, let's check out From Couch to 5k, and look at that!
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=112)** From Couch to 5k, and look at that!
>
> **[1:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=114)** The secret has been revealed.
>
> **[1:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=114)** The secret has been revealed.
>
> **[1:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=116)** We can finally run that 5k that we've been wanting to.
>
> **[1:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=116)** We can finally run that 5k that we've been wanting to.
>
> **[1:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=119)** Now, with this all in place, Now, with this all in place, there's one more thing that I'd like to get moving on here there's one more thing that I'd like to get moving on here and that is our checkout page.
>
> **[2:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=125)** and that is our checkout page.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=127)** So if I already have a subscription like John does, So if I already have a subscription like John does, and I say somehow end up on the premium page and I say somehow end up on the premium page and I say you know what?
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=133)** and I say you know what?
>
> **[2:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=134)** I'm going to go get that $10 a month subscription.
>
> **[2:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=134)** I'm going to go get that $10 a month subscription.
>
> **[2:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=137)** We should not be able to check out We should not be able to check out and get a second subscription.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=140)** and get a second subscription.
>
> **[2:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=141)** While a user has a current subscription, While a user has a current subscription, they should not be able to buy a new one.
>
> **[2:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=144)** they should not be able to buy a new one.
>
> **[2:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=146)** So in order to fix that, So in order to fix that, let's go ahead and move to our checkout page, let's go ahead and move to our checkout page, and right above where we do the coupon stuff, and right above where we do the coupon stuff, let's test and see if they have a membership.
>
> **[2:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=154)** let's test and see if they have a membership.
>
> **[2:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=157)** So just like the code above, So just like the code above, in fact you can go ahead and try this, in fact you can go ahead and try this, copy this try here, copy this try here, we'll paste this down below, so we're going to say we'll paste this down below, so we're going to say if the request here if they have a current membership if the request here if they have a current membership well let's just go ahead well let's just go ahead and return them to the settings page and return them to the settings page because that's where they can cancel because that's where they can cancel their subscription and whatnot, their subscription and whatnot, so we're going to do a redirect, so we're going to do a redirect, and we're going to send them to the settings page, and we're going to send them to the settings page, and if the customer does not exist, and if the customer does not exist, well that's essentially a good thing, well that's essentially a good thing, that means that they want to go check out and make one.
>
> **[3:08](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=188)** that means that they want to go check out and make one.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=191)** We are simply going to hit pass here We are simply going to hit pass here to keep moving forward.
>
> **[3:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=194)** to keep moving forward.
>
> **[3:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=195)** So let's go ahead and save this code, So let's go ahead and save this code, come back to our checkout page, come back to our checkout page, let's reload this, let's reload this, now you can see it's forwarded me to the settings now you can see it's forwarded me to the settings because I have a subscription, because I have a subscription, but if I log out and I hit premium, but if I log out and I hit premium, and I try to get a subscription, and I try to get a subscription, well it's going to make me log in, well it's going to make me log in, so I'll have to create an account, I'll make someone new, so I'll have to create an account, I'll make someone new, give it a user name Matt, give it a user name Matt, give them a password, give them a password, and now if I try to go premium and buy, and now if I try to go premium and buy, look I can still access the checkout page.
>
> **[3:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/release-plans?u=76281980&t=225)** look I can still access the checkout page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), this, (8), function (2), try: (2), class, (2)
> **CLI Commands:** make (8)
> **Definitions:** is a  (4), means that (2)
> **Analogies:** just like (4)
> **Code Identifiers:** is_authenticated (2)
> **Speakers:** - [instructor] (2)


### 4. Canceling a Subscription

#### Settings for a GET request
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=0)** - [Narrator] It's now time to create a feature
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=0)** - [Narrator] It's now time to create a feature that will allow a user to cancel their subscription.
>
> **[0:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=2)** that will allow a user to cancel their subscription.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=5)** They said, "Ya know what?
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=5)** They said, "Ya know what?
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=7)** "This fitness plan really wasn't it for me.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=7)** "This fitness plan really wasn't it for me.
>
> **[0:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=9)** "I'm going to continue to the end of this month, "I'm going to continue to the end of this month, "this year, whatever, "this year, whatever, "but I don't want to continue after that."
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=12)** "but I don't want to continue after that."
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=14)** Well, we're going to do that via the settings page.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=14)** Well, we're going to do that via the settings page.
>
> **[0:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=17)** So we had already redirected the user to the settings page So we had already redirected the user to the settings page if they already have a membership and they've tried to if they already have a membership and they've tried to check out, thinking that that way, check out, thinking that that way, they could cancel their membership there.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=25)** they could cancel their membership there.
>
> **[0:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=26)** So, we're going to scroll down here to our settings So, we're going to scroll down here to our settings and start doing some work on the situation.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=28)** and start doing some work on the situation.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=32)** So, first thing that we want to check here is whether So, first thing that we want to check here is whether we're either in a get or a post situation.
>
> **[0:34](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=34)** we're either in a get or a post situation.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=38)** So, let's go ahead and do an if statement.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=38)** So, let's go ahead and do an if statement.
>
> **[0:40](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=40)** We're going to say IF request.method is equal to, We're going to say IF request.method is equal to, get your two equal signs there, get your two equal signs there, if it's equal to a post, then we'd like to handle it one way if it's equal to a post, then we'd like to handle it one way and then we'll have an else situation and then we'll have an else situation for if it is a get.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=54)** for if it is a get.
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=56)** So, if it is a get, there's a couple of pieces of information that we'd like to pass forward.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=59)** of information that we'd like to pass forward.
>
> **[1:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=62)** So there are things about the user's membership, So there are things about the user's membership, whether they want to cancel at the end of a period.
>
> **[1:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=64)** whether they want to cancel at the end of a period.
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=67)** So, first, let's go ahead and try here.
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=67)** So, first, let's go ahead and try here.
>
> **[1:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=70)** We're going to say IF request.user.customer.membership We're going to say IF request.user.customer.membership
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=81)** and remember, the reason we have the try here is because and remember, the reason we have the try here is because there might be a user without a customer relationship.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=83)** there might be a user without a customer relationship.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=87)** So that's where we have to have that.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=87)** So that's where we have to have that.
>
> **[1:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=89)** So if this is the case, if this is true, So if this is the case, if this is true, then we want membership to be equal to true.
>
> **[1:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=91)** then we want membership to be equal to true.
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=96)** Make sure we have the capital T there.
>
> **[1:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=96)** Make sure we have the capital T there.
>
> **[1:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=98)** We also want to check out and see if We also want to check out and see if request.user.customer.cancel request.user.customer.cancel
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=112)** at end of period, we want to see if that's true at end of period, we want to see if that's true and if it is, we're going to set cancel at end of period and if it is, we're going to set cancel at end of period equal to true.
>
> **[1:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=119)** equal to true.
>
> **[2:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=121)** Great, so with those two pieces of information, Great, so with those two pieces of information, we're also going to want to set defaults for these values.
>
> **[2:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=124)** we're also going to want to set defaults for these values.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=127)** So we're going to copy this right here So we're going to copy this right here and before we do our if statement, and before we do our if statement, we'll paste that, copy this as well, we'll paste that, copy this as well, paste that just right below and set each of these paste that just right below and set each of these equal to false.
>
> **[2:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=137)** equal to false.
>
> **[2:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=139)** Awesome.
>
> **[2:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=139)** Awesome.
>
> **[2:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=141)** So, with that, we've tried a certain situation.
>
> **[2:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=141)** So, with that, we've tried a certain situation.
>
> **[2:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=143)** Any time you have to have a try, Any time you have to have a try, you have to have an accept there.
>
> **[2:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=146)** you have to have an accept there.
>
> **[2:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=147)** So we're going to say accept in this situation So we're going to say accept in this situation and we're looking for customer.doesnotexist and we're looking for customer.doesnotexist and if that is the case, well then, and if that is the case, well then, we want to for sure say that the membership we want to for sure say that the membership is equal to false.
>
> **[2:41](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=161)** is equal to false.
>
> **[2:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=164)** Great, so we have our try.
>
> **[2:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=164)** Great, so we have our try.
>
> **[2:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=166)** We have our accept.
>
> **[2:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=166)** We have our accept.
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=168)** We still have some work to do inside of our We still have some work to do inside of our if statement here, but we've already gone quite a bit here.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=170)** if statement here, but we've already gone quite a bit here.
>
> **[2:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=174)** Let's just start passing forward our two variables Let's just start passing forward our two variables that we have.
>
> **[2:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=177)** that we have.
>
> **[2:58](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=178)** So inside of our curly brackets here, So inside of our curly brackets here, let's pass forward membership let's pass forward membership and let's make sure we spell it exactly as we had here.
>
> **[3:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=183)** and let's make sure we spell it exactly as we had here.
>
> **[3:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=185)** So I'm going to copy and paste.
>
> **[3:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=185)** So I'm going to copy and paste.
>
> **[3:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=187)** Colon, paste that in and then, Colon, paste that in and then, we're also going to pass forward the cancel_at_period_end.
>
> **[3:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=190)** we're also going to pass forward the cancel_at_period_end.
>
> **[3:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=194)** So we'll go ahead and put that into a string.
>
> **[3:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=194)** So we'll go ahead and put that into a string.
>
> **[3:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=197)** Colon, paste that in as well.
>
> **[3:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=197)** Colon, paste that in as well.
>
> **[3:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=200)** I'm going to return this so you can see that all I'm going to return this so you can see that all in one screen here.
>
> **[3:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=202)** in one screen here.
>
> **[3:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=204)** Now this is a nice stopping point.
>
> **[3:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=204)** Now this is a nice stopping point.
>
> **[3:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=206)** In the next video, we'll cover what to do In the next video, we'll cover what to do if we get a post instead of a get.
>
> **[3:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-for-a-get-request?u=76281980&t=208)** if we get a post instead of a get.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (6), continue (4), case, (4), try, (2)
> **Definitions:** is a  (5)
> **CLI Commands:** make (4)
> **Code Identifiers:** cancel_at_period_end (2)
> **Cross-References:** in the next (2)
> **UI Navigation:** scroll down (2)
> **Speakers:** - [narrator] (2)

#### Cancel subscription
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=0)** - [Instructor] So we've talked about the get portion
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=0)** - [Instructor] So we've talked about the get portion of this request, well what if someone posts to us, of this request, well what if someone posts to us, and in what situation would we have a post?
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=5)** and in what situation would we have a post?
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=7)** Well the only setting post that we're looking for Well the only setting post that we're looking for is someone trying to cancel their subscription.
>
> **[0:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=10)** is someone trying to cancel their subscription.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=13)** We're not going to allow users to cancel and rejoin, We're not going to allow users to cancel and rejoin, cancel, rejoin just willy-nilly.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=16)** cancel, rejoin just willy-nilly.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=18)** In fact, the way that we've designed this In fact, the way that we've designed this will make it so that someone can cancel their subscription, will make it so that someone can cancel their subscription, but it's going to run out the rest of that subscription.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=23)** but it's going to run out the rest of that subscription.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=25)** So we'll run to the end of the month, So we'll run to the end of the month, or we'll run to the end of the year.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=27)** or we'll run to the end of the year.
>
> **[0:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=29)** And so, the only situation we'd be getting a post And so, the only situation we'd be getting a post is if someone wanted to cancel their subscription.
>
> **[0:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=32)** is if someone wanted to cancel their subscription.
>
> **[0:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=36)** So we're going to go ahead and create a new subscription So we're going to go ahead and create a new subscription with Stripe, so we'll say subscription is equal to with Stripe, so we'll say subscription is equal to stripe dot capital Subscription, stripe dot capital Subscription, and when I say create new subscription, and when I say create new subscription, in essence we're actually destroying in essence we're actually destroying or changing a subscription, but you'll see or changing a subscription, but you'll see how that works here.
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=56)** how that works here.
>
> **[0:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=57)** And we're going to say dot retrieve, there we go, And we're going to say dot retrieve, there we go, and we're looking for this particular user.
>
> **[1:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=62)** and we're looking for this particular user.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=65)** So remember how we had saved the Stripe So remember how we had saved the Stripe subscription ID to our user?
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=67)** subscription ID to our user?
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=69)** We're going to say request dot user dot customer We're going to say request dot user dot customer dot stripe underscore subscription ID, dot stripe underscore subscription ID, and that's the reason that we saved it there.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=81)** and that's the reason that we saved it there.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=83)** So with this in place, we have our current subscription, So with this in place, we have our current subscription, and then we can take the subscription, and then we can take the subscription, and we can say okay, subscription dot cancel and we can say okay, subscription dot cancel at end of period, let's set that equal to true, at end of period, let's set that equal to true, meaning that once this subscription runs out meaning that once this subscription runs out at its current period, whether that's a month, at its current period, whether that's a month, a year, if you made weekly, quarterly, a year, if you made weekly, quarterly, whatever it is, it's going to stop.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=103)** whatever it is, it's going to stop.
>
> **[1:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=105)** So we'll set that equal to true, So we'll set that equal to true, and after that, we're going to take our current user and after that, we're going to take our current user and update their cancel at end of period.
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=112)** and update their cancel at end of period.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=115)** So we're going to say request dot user dot customer So we're going to say request dot user dot customer dot cancel at end of period, we're going to set dot cancel at end of period, we're going to set that equal to true.
>
> **[2:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=124)** that equal to true.
>
> **[2:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=126)** Great, and then we're also going to, Great, and then we're also going to, remember how we have cancel at end of period remember how we have cancel at end of period as a little variable that we're going to be as a little variable that we're going to be passing to the template, let's grab that passing to the template, let's grab that and we'll say that this is also equal to true, and we'll say that this is also equal to true, so we're setting cancel at period equal to true so we're setting cancel at period equal to true in three different places, and then we're going to in three different places, and then we're going to take our subscription, and we're going to save that.
>
> **[2:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=144)** take our subscription, and we're going to save that.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=149)** That sends all the information to the Stripe API, That sends all the information to the Stripe API, so awesome that Stripe gives us this excellent, so awesome that Stripe gives us this excellent, excellent piece of Python code to simplify excellent piece of Python code to simplify this for us.
>
> **[2:36](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=156)** this for us.
>
> **[2:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=157)** And then we're also going to save our current customer.
>
> **[2:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=157)** And then we're also going to save our current customer.
>
> **[2:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=159)** So we're going to say request dot user So we're going to say request dot user dot customer, and we'll save this new information dot customer, and we'll save this new information that we have there.
>
> **[2:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=167)** that we have there.
>
> **[2:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=169)** Alright, so with this situation, if this were to happen, Alright, so with this situation, if this were to happen, cancel at end of period is equal to true, cancel at end of period is equal to true, and if we come down here, it's going to eventually and if we come down here, it's going to eventually return back this template with that information return back this template with that information in the membership, all that great information.
>
> **[3:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=181)** in the membership, all that great information.
>
> **[3:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=185)** Now, with this in place, if someone has a membership, Now, with this in place, if someone has a membership, you'll see how this comes together in you'll see how this comes together in the next settings page.
>
> **[3:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=190)** the next settings page.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=191)** We'll talk about that in the next video.
>
> **[3:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/cancel-subscription?u=76281980&t=191)** We'll talk about that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (2)
> **Code Keywords:** let (4)
> **Exercise Files:** template (4)
> **Env Vars:** api (2)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (2)

#### Settings view
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=0)** - [Instructor] Now we've written all the code
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=0)** - [Instructor] Now we've written all the code for our settings view.
>
> **[0:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=2)** for our settings view.
>
> **[0:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=3)** Let's go ahead and move into the template.
>
> **[0:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=3)** Let's go ahead and move into the template.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=5)** If we go inside of our templates directory If we go inside of our templates directory into registration, we can go to our settings.html.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=7)** into registration, we can go to our settings.html.
>
> **[0:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=12)** So, let's go ahead and write our code So, let's go ahead and write our code in between these two divs, the opening and ending div there.
>
> **[0:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=13)** in between these two divs, the opening and ending div there.
>
> **[0:17](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=17)** And so the first thing that we want to check And so the first thing that we want to check is to see if this person is going to cancel is to see if this person is going to cancel at the end of their membership.
>
> **[0:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=22)** at the end of their membership.
>
> **[0:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=24)** So, what we're going to do is add our percentage tags here, So, what we're going to do is add our percentage tags here, and we're going to say if cancel at end of period, and we're going to say if cancel at end of period, remember that's one of the variables that we pass forward, remember that's one of the variables that we pass forward, if that's true, then we want to display some text like if that's true, then we want to display some text like your membership your membership will run to the end of your billing cycle.
>
> **[0:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=45)** will run to the end of your billing cycle.
>
> **[0:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=53)** Period.
>
> **[0:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=53)** Period.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=54)** Okay, so that's one message that we'd like to display.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=54)** Okay, so that's one message that we'd like to display.
>
> **[0:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=57)** The next one is, The next one is, we're going to do a curly bracket and percentage sign, we're going to do a curly bracket and percentage sign, and we're going to say elif membership.
>
> **[1:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=63)** and we're going to say elif membership.
>
> **[1:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=69)** Okay, and in this situation, we're going to say, okay, Okay, and in this situation, we're going to say, okay, if that's the case, if that's the case, but if it's not and if they have a membership, but if it's not and if they have a membership, well in this situation that means that they're not ready well in this situation that means that they're not ready to cancel at the end of their period, to cancel at the end of their period, but they do have a membership.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=81)** but they do have a membership.
>
> **[1:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=82)** Well in this situation, we would want Well in this situation, we would want to give them the option to cancel.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=84)** to give them the option to cancel.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=87)** So, we're going to make a new form here, So, we're going to make a new form here, and this is going the action part of this.
>
> **[1:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=89)** and this is going the action part of this.
>
> **[1:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=93)** It's going to be equal to a URL.
>
> **[1:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=97)** We'll say URL, We'll say URL, and we want to send this to the settings.
>
> **[1:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=99)** and we want to send this to the settings.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=103)** Excellent.
>
> **[1:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=103)** Excellent.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=104)** And this is definitely going to change the state of things.
>
> **[1:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=104)** And this is definitely going to change the state of things.
>
> **[1:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=108)** So, we're going to have this method be a post.
>
> **[1:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=108)** So, we're going to have this method be a post.
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=112)** Excellent.
>
> **[1:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=112)** Excellent.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=113)** We'll add our ending tag there.
>
> **[1:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=113)** We'll add our ending tag there.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=115)** And we lost the ending double quote for action.
>
> **[1:55](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=115)** And we lost the ending double quote for action.
>
> **[1:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=119)** There we go.
>
> **[1:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=119)** There we go.
>
> **[2:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=121)** Alright, so with that in place, Alright, so with that in place, let's add an ending form tag.
>
> **[2:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=122)** let's add an ending form tag.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=127)** And inside of this form, we want to make sure And inside of this form, we want to make sure that we have a CSRF token.
>
> **[2:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=129)** that we have a CSRF token.
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=132)** So we're going to do our percentage signs, So we're going to do our percentage signs, CSRF token.
>
> **[2:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=136)** CSRF token.
>
> **[2:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=138)** Awesome, got that in place.
>
> **[2:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=138)** Awesome, got that in place.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=140)** And there's really no fields to fill out here, right?
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=140)** And there's really no fields to fill out here, right?
>
> **[2:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=143)** We're not passing forward information.
>
> **[2:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=143)** We're not passing forward information.
>
> **[2:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=145)** We've just said any time there's a post to this URL, We've just said any time there's a post to this URL, they want to cancel.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=148)** they want to cancel.
>
> **[2:29](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=149)** So, we're going to say, input, So, we're going to say, input, and we want the type of this to be submit, and we want the type of this to be submit, and we want the value on this to say and we want the value on this to say cancel membership cancel membership with a question mark.
>
> **[2:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=168)** with a question mark.
>
> **[2:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=171)** Eh, no, we should, if someone's clicking this button, Eh, no, we should, if someone's clicking this button, where they're telling them where they're telling them that they're canceling their membership, that they're canceling their membership, and you might want to on your own site and you might want to on your own site make this a little bit more rigid, right?
>
> **[2:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=177)** make this a little bit more rigid, right?
>
> **[2:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=179)** I can't think of a subscription website that I can't think of a subscription website that with one click let's you cancel your membership.
>
> **[3:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=181)** with one click let's you cancel your membership.
>
> **[3:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=184)** They usually ask you about four different questions They usually ask you about four different questions before they finally get you out of there, before they finally get you out of there, but so if they are not canceling at the end of the period, but so if they are not canceling at the end of the period, and if they have a membership, that's what we'll show them, and if they have a membership, that's what we'll show them, but if neither of those situations are true, but if neither of those situations are true, well, they don't have a membership, well, they don't have a membership, and they're not about to cancel at the end of the period, and they're not about to cancel at the end of the period, well they must be looking for a membership, well they must be looking for a membership, or they need one.
>
> **[3:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=206)** or they need one.
>
> **[3:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=207)** We want them to get one.
>
> **[3:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=207)** We want them to get one.
>
> **[3:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=208)** So we'll go ahead and add in our percentage signs and else So we'll go ahead and add in our percentage signs and else and at the end of this, and at the end of this, let's make sure we have an endif inside, let's make sure we have an endif inside, so we'll say endif, so we'll say endif, and this is quite the if and else if that we have here, and this is quite the if and else if that we have here, and all we're going to simply have here is an a tag and all we're going to simply have here is an a tag with an href to say we want them to join.
>
> **[3:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=228)** with an href to say we want them to join.
>
> **[3:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=233)** So we'll go ahead and add a URL here called join, So we'll go ahead and add a URL here called join, and we'll have our ending a tag.
>
> **[4:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=240)** and we'll have our ending a tag.
>
> **[4:03](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=243)** Add some sort of message like get a Add some sort of message like get a membership, and we'll capitalize membership membership, and we'll capitalize membership to show that it's really fancy.
>
> **[4:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=253)** to show that it's really fancy.
>
> **[4:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=255)** Okay, so let's go ahead and save this, Okay, so let's go ahead and save this, then let's check and see what it looks like.
>
> **[4:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=258)** then let's check and see what it looks like.
>
> **[4:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=261)** So, we're going to go ahead and move over to our settings, So, we're going to go ahead and move over to our settings, and our currently logged in user does not have a membership, and our currently logged in user does not have a membership, so that's why it shows get a membership.
>
> **[4:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=268)** so that's why it shows get a membership.
>
> **[4:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=271)** Let's go ahead and log out and log back in as John.
>
> **[4:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=271)** Let's go ahead and log out and log back in as John.
>
> **[4:37](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=277)** And once we've logged in, we can go to John's settings, And once we've logged in, we can go to John's settings, and look, he has the button to cancel a membership, and look, he has the button to cancel a membership, and if we want to cancel this membership, and if we want to cancel this membership, let's do it to see what it looks like.
>
> **[4:45](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=285)** let's do it to see what it looks like.
>
> **[4:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=287)** We'll say cancel membership.
>
> **[4:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=289)** Once that loads, it comes back to settings, and it says: Once that loads, it comes back to settings, and it says: Your membership will run to the end of your billing cycle.
>
> **[4:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=292)** Your membership will run to the end of your billing cycle. 1 Let's fix our spelling mistake, Let's fix our spelling mistake, 1 run to the end of your billing cycle, right?
>
> **[4:57](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=297)** run to the end of your billing cycle, right? 1 And now John, once his period is over, will run out.
>
> **[5:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=302)** And now John, once his period is over, will run out. 1 So, we have successfully added the feature So, we have successfully added the feature 1 for a user to cancel their subscription.
>
> **[5:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=310)** for a user to cancel their subscription. 1 There's one last piece that we've got to address.
>
> **[5:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/settings-view?u=76281980&t=312)** There's one last piece that we've got to address.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), this, (4), pass (2), elif (2), case, (2)
> **Env Vars:** url (7), csrf (4)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (4)
> **Definitions:** means that (2), is an  (2)
> **File Paths:** settings.html (2)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (2)

#### Updating accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=0)** - [Instructor] Now hopefully users that sign up
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=0)** - [Instructor] Now hopefully users that sign up for our membership will stay members forever for our membership will stay members forever and their credit card will always work.
>
> **[0:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=5)** and their credit card will always work.
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=7)** But there's a lot of situations like But there's a lot of situations like their credit card has been declined, their credit card has been declined, or they've canceled their membership, or they've canceled their membership, and then at the end of that period, and then at the end of that period, they need to be marked as, they need to be marked as, they no longer are able to get premium content.
>
> **[0:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=16)** they no longer are able to get premium content.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=18)** Somehow we have to periodically check to see, with Stripe, Somehow we have to periodically check to see, with Stripe, hey, are they currently subscribed, hey, are they currently subscribed, and if not, we need to make sure and if not, we need to make sure that they can't get the premium content.
>
> **[0:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=26)** that they can't get the premium content.
>
> **[0:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=28)** In coding terms, we've got to set on their customer object, In coding terms, we've got to set on their customer object, membership equal to false.
>
> **[0:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=31)** membership equal to false.
>
> **[0:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=33)** So, a way that we can do that is, So, a way that we can do that is, let's go make a new URL, go to our urls.py, let's go make a new URL, go to our urls.py, and we're going to add a new path here, and we're going to add a new path here, let's just copy and paste one of the ones that we have above let's just copy and paste one of the ones that we have above and we'll change this to be, and we'll change this to be, updateaccounts, okay?
>
> **[0:47](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=47)** updateaccounts, okay?
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=51)** And this is going to go to our view called updateaccounts, And this is going to go to our view called updateaccounts, name is updateaccounts, save that.
>
> **[0:56](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=56)** name is updateaccounts, save that.
>
> **[0:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=59)** Then we're going to go ahead and move over to our views.py Then we're going to go ahead and move over to our views.py and we're going to make a new function, and we're going to make a new function, we'll put it right up at the top here, we'll put it right up at the top here, and it's going to be called a function updateaccounts, and it's going to be called a function updateaccounts, don't have to pass anything into here, don't have to pass anything into here, so we'll just say request, and we'll do our colon.
>
> **[1:16](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=76)** so we'll just say request, and we'll do our colon.
>
> **[1:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=80)** Now, with updateaccounts, we only want this to be run Now, with updateaccounts, we only want this to be run by someone who is a superuser.
>
> **[1:24](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=84)** by someone who is a superuser.
>
> **[1:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=85)** We don't want people just willy-nilly hitting this, We don't want people just willy-nilly hitting this, because it might overload our system because it might overload our system and there's lots of different things that could happen.
>
> **[1:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=90)** and there's lots of different things that could happen.
>
> **[1:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=92)** So after login_required, So after login_required, up here where we import from the decorators, up here where we import from the decorators, we can also add something called, we can also add something called, user, underscore, passes, underscore, test, user, underscore, passes, underscore, test, and we can use this up front of this function to say, and we can use this up front of this function to say, at, user, underscore, passes test, at, user, underscore, passes test, and then we're going to put inside of our parentheses here, and then we're going to put inside of our parentheses here, lambda, space, u, colon, lambda, space, u, colon, u.is, underscore, superuser.
>
> **[2:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=120)** u.is, underscore, superuser.
>
> **[2:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=125)** And basically what this does is it says, And basically what this does is it says, only people who are superusers can access the following URL.
>
> **[2:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=127)** only people who are superusers can access the following URL.
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=132)** How cool is that?
>
> **[2:12](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=132)** How cool is that?
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=133)** That's really sweet, isn't it?
>
> **[2:13](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=133)** That's really sweet, isn't it?
>
> **[2:15](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=135)** So, with this in place, what we're going to do is, So, with this in place, what we're going to do is, we want to get all the customer objects.
>
> **[2:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=138)** we want to get all the customer objects.
>
> **[2:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=140)** Again, if you have thousands and millions of customers, Again, if you have thousands and millions of customers, you wouldn't want this request to be run all the time, you wouldn't want this request to be run all the time, and allow anybody to do this.
>
> **[2:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=147)** and allow anybody to do this.
>
> **[2:28](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=148)** So, we're going to go get all our customers, So, we're going to go get all our customers, that'd really bog down your system, that'd really bog down your system, so we're going to do capital Customer.objects.all, so we're going to do capital Customer.objects.all, so we'll go get all of our customers.
>
> **[2:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=159)** so we'll go get all of our customers.
>
> **[2:42](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=162)** Then we're going to say, for customer in customers, colon, Then we're going to say, for customer in customers, colon, so this is a for loop through each of them, so this is a for loop through each of them, we're going to check and see we're going to check and see what their subscription is looking like.
>
> **[2:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=170)** what their subscription is looking like.
>
> **[2:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=172)** So, we're going to say, subscription, is equal to, So, we're going to say, subscription, is equal to, our stripe, our stripe, dot capital Subscription, dot capital Subscription, dot, and we want again to do a retrieve, dot, and we want again to do a retrieve, and we're going to pass through our and we're going to pass through our customer, dot, stripe_subscription_id, customer, dot, stripe_subscription_id, so this gets all of our subscriptions.
>
> **[3:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=198)** so this gets all of our subscriptions.
>
> **[3:22](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=202)** So, once we have the subscription, So, once we have the subscription, we're going to check and see if it's valid, we're going to check and see if it's valid, so we're going to say, if subscription dot status, so we're going to say, if subscription dot status, and this is something that Stripe gives to us, and this is something that Stripe gives to us, is not equal to 'active', is not equal to 'active', there's a lot of different things that it could be, there's a lot of different things that it could be, but if it's not active, well in that situation, but if it's not active, well in that situation, we want membership to be equal to capital False.
>
> **[3:44](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=224)** we want membership to be equal to capital False.
>
> **[3:48](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=228)** Now, we also want to have the else situation, Now, we also want to have the else situation, maybe someone was able to fix their billing and whatnot, maybe someone was able to fix their billing and whatnot, in those cases, we want membership to be equal to True.
>
> **[3:53](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=233)** in those cases, we want membership to be equal to True.
>
> **[3:59](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=239)** Now with both of these, Now with both of these, we have to set this on our customers, so we'll say, we have to set this on our customers, so we'll say, customer dot membership, customer dot membership, we also want customer dot membership there.
>
> **[4:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=247)** we also want customer dot membership there.
>
> **[4:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=250)** Okay, so we're either setting it equal to True, or to False, Okay, so we're either setting it equal to True, or to False, and after we've done this if-else, and after we've done this if-else, we want to also update their customer, we want to also update their customer, cancel at end of period.
>
> **[4:19](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=259)** cancel at end of period.
>
> **[4:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=260)** So we're going to say customer, dot, cancel_at_period_end, So we're going to say customer, dot, cancel_at_period_end, the situation that this might have happened is, the situation that this might have happened is, you know, maybe they had said, you know, maybe they had said, "Hey, I actually want to, you know, change my subscription, "Hey, I actually want to, you know, change my subscription, "I want to bring it back," and we manually do it "I want to bring it back," and we manually do it on Stripe end, but we forget to do it on our own end, on Stripe end, but we forget to do it on our own end, this would handle that.
>
> **[4:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=278)** this would handle that.
>
> **[4:39](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=279)** So we're going to say, this is going to be equal to, So we're going to say, this is going to be equal to, subscription, dot, subscription, dot, cancel_at_period_end.
>
> **[4:46](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=286)** cancel_at_period_end.
>
> **[4:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=289)** Great.
>
> **[4:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=289)** Great.
>
> **[4:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=290)** So we've got all this awesome information.
>
> **[4:50](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=290)** So we've got all this awesome information.
>
> **[4:52](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=292)** We're going to take our customer, save them, We're going to take our customer, save them, 1 if there's, you know, been any changes, and then with this, if there's, you know, been any changes, and then with this, 1 rather than return some sort of page, rather than return some sort of page, 1 we really just want to return an http response to say, we really just want to return an http response to say, 1 hey, you know what, this all worked out hey, you know what, this all worked out 1 and you're ready to move forward.
>
> **[5:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=307)** and you're ready to move forward. 1 So let's go ahead and import that by saying, So let's go ahead and import that by saying, 1 from, django, dot, http, from, django, dot, http, 1
>
> **[5:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=321)** import, capital Http, capital Response.
>
> **[5:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=321)** import, capital Http, capital Response. 1 Great, so now that we have that, we can simply return Great, so now that we have that, we can simply return 1 an HttpResponse, and the string that I'll provide an HttpResponse, and the string that I'll provide 1 inside of here is to simply say, you know, inside of here is to simply say, you know, 1 everything worked out, maybe we'll just say, everything worked out, maybe we'll just say, 1 'completed', okay?
>
> **[5:43](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=343)** 'completed', okay? 1 Now, you'll notice there's some situations Now, you'll notice there's some situations 1 where this might not come back, like for instance where this might not come back, like for instance 1 if we weren't able to get the customer object, if we weren't able to get the customer object, 1 so there are any kind of errors here, so there are any kind of errors here, 1 well, these would be situations well, these would be situations 1 if we didn't get completed back, it would say, if we didn't get completed back, it would say, 1 Oh, okay, we probably have to dive into our logs Oh, okay, we probably have to dive into our logs 1 and see what's going on here.
>
> **[6:01](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=361)** and see what's going on here. 1 There's no sort of pleasant way to handle this.
>
> **[6:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=362)** There's no sort of pleasant way to handle this. 1 So, we'll go ahead and save this.
>
> **[6:04](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=364)** So, we'll go ahead and save this. 1 Let's test this out and see what this looks like.
>
> **[6:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=367)** Let's test this out and see what this looks like. 1 We're going to go to our local host here, We're going to go to our local host here, 1 and we're going to go to slash updateaccounts, and we're going to go to slash updateaccounts, 1 we'll hit Enter on that, and it's going to say, we'll hit Enter on that, and it's going to say, 1 Hey, looks like you're not a superuser.
>
> **[6:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=380)** Hey, looks like you're not a superuser. 1 So I'm going to log in as nick, django1234.
>
> **[6:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=383)** So I'm going to log in as nick, django1234. 1 So now I log in, and when I run updateaccounts, So now I log in, and when I run updateaccounts, 1 it gives me completed, right?
>
> **[6:31](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=391)** it gives me completed, right? 1 And I can check this, and all of that works.
>
> **[6:32](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/updating-accounts?u=76281980&t=392)** And I can check this, and all of that works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (6), this, (6), this. (6), pass (4)
> **Code Identifiers:** cancel_at_period_end (4), login_required (2), stripe_subscription_id (2)
> **UI Navigation:** go to (8)
> **CLI Commands:** make (6)
> **File Paths:** urls.py (2), views.py (2)
> **Env Vars:** url (4)
> **Definitions:** is a  (4)
> **Analogies:** for instance (2)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=0)** - [Nick] Thanks for coming along and learning about how
>
> **[0:00](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=0)** - [Nick] Thanks for coming along and learning about how to accept payments and create a membership site.
>
> **[0:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=2)** to accept payments and create a membership site.
>
> **[0:06](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=6)** Now, what are the next steps for you, Now, what are the next steps for you, after completing this course?
>
> **[0:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=7)** after completing this course?
>
> **[0:09](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=9)** Well you might be interested in learning how Well you might be interested in learning how to accept payments via a different payment processor.
>
> **[0:11](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=11)** to accept payments via a different payment processor.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=14)** So instead of Stripe, maybe look at Braintree or PayPal.
>
> **[0:14](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=14)** So instead of Stripe, maybe look at Braintree or PayPal.
>
> **[0:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=18)** Then, if you'd like to dive deeper into Django, Then, if you'd like to dive deeper into Django, I have some courses I think you would love.
>
> **[0:20](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=20)** I have some courses I think you would love.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=23)** One is about deploying Django apps.
>
> **[0:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=23)** One is about deploying Django apps.
>
> **[0:25](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=25)** That's putting your projects that you made, That's putting your projects that you made, like this membership site, live on the internet.
>
> **[0:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=27)** like this membership site, live on the internet.
>
> **[0:30](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=30)** We'll learn how to deploy to Digital Ocean, We'll learn how to deploy to Digital Ocean, AWS Beanstalk, Azure, and even Heroku.
>
> **[0:33](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=33)** AWS Beanstalk, Azure, and even Heroku.
>
> **[0:38](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=38)** Next, I have a test-driven development course in Django, Next, I have a test-driven development course in Django, if you want to make sure the code if you want to make sure the code that you've written is absolutely correct, that you've written is absolutely correct, and won't cause bugs in other parts of your code and won't cause bugs in other parts of your code that you haven't touched in months, that you haven't touched in months, this is a great course for you.
>
> **[0:49](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=49)** this is a great course for you.
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=51)** And also, I have a course on Django forms.
>
> **[0:51](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=51)** And also, I have a course on Django forms.
>
> **[0:54](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=54)** There's a really nice form in our membership site There's a really nice form in our membership site that Stripe had provided for us, that Stripe had provided for us, but if you ever want to get customized, but if you ever want to get customized, the Django forms course would the Django forms course would really help you understand how to do that.
>
> **[1:02](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=62)** really help you understand how to do that.
>
> **[1:05](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=65)** There's another course you might be interested in, There's another course you might be interested in, and it's called Sales: Customer Success.
>
> **[1:07](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=67)** and it's called Sales: Customer Success.
>
> **[1:10](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=70)** This less-than-one-hour course walks you through This less-than-one-hour course walks you through how you can make sure when a customer comes to your site, how you can make sure when a customer comes to your site, that they're happy with their product, and most importantly that they're happy with their product, and most importantly in a membership site, they don't cancel their subscription.
>
> **[1:18](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=78)** in a membership site, they don't cancel their subscription.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=81)** There's some really great information there.
>
> **[1:21](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=81)** There's some really great information there.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=83)** Finally, I'd love it if you'd connect with me.
>
> **[1:23](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=83)** Finally, I'd love it if you'd connect with me.
>
> **[1:26](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=86)** If you're interested, you can find me If you're interested, you can find me on LinkedIn, or on Twitter.
>
> **[1:27](https://www.linkedin.com/learning/building-a-paid-membership-site-with-django/next-steps?u=76281980&t=87)** on LinkedIn, or on Twitter.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), aws (2), find (2)
> **Code Keywords:** finally, (2)
> **Env Vars:** aws (2)
> **Definitions:** is a  (2)
> **Speakers:** - [nick] (2)


## Path Context

### In [[Advance Your Skills as a Django Developer]]
← [[Building RESTful Web APIs with Django]] | **4 of 6** | [[Securing Django Applications]] →

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Django Project- Build High-Traffic Websites with Django]] — Django
- [[Securing Django Applications]] — Django
- [[Building RESTful Web APIs with Django]] — Django
- [[Building Angular and Django Apps]] — Django
- [[Building React And Django Apps]] — Django
