---
type: course
cssclasses:
  - lle-course
slug: deploying-django-apps-make-your-site-go-live
url: "https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live"
duration_minutes: 162
duration: 2h 42m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFqmpRfye60_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669661418?e=2147483647&amp;v=beta&amp;t=47LLGThgzQCU3ktmVDucOL8QWpmc4wNLFSwxQLLmRE4"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a Django Developer]]'
prev_courses:
  - '[[Django- Forms]]'
next_courses:
  - '[[Building a Personal Portfolio with Django]]'
path_nav: '[{"path":"Become a Django Developer","position":3,"total":4,"prev":"Django- Forms","next":"Building a Personal Portfolio with Django"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Deploying%20Django%20Apps-%20Make%20Your%20Site%20Go%20Live.md)

![Deploying Django Apps: Make Your Site Go Live](https://media.licdn.com/dms/image/v2/C4E0DAQFqmpRfye60_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669661418?e=2147483647&amp;v=beta&amp;t=47LLGThgzQCU3ktmVDucOL8QWpmc4wNLFSwxQLLmRE4)

# Deploying Django Apps: Make Your Site Go Live

> Deploying a Django app to production doesn't have to be challenging. By learning how to leverage a cloud-based solution like Digital Ocean, AWS, Heroku, or Azure, you can cover your deployment needs, from small to large. Join Nick Walter as he demonstrates the steps involved to make a Django site go live. This course shows how to work with PostgreSQL, NGINX, S3, and more, so you can gain the skill

> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live) | 2h 42m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Digital Ocean]]** (10 videos)
- **[[#3. 2. AWS]]** (8 videos)
- **[[#4. 3. Heroku]]** (5 videos)
- **[[#5. 4. Azure]]** (8 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Making your site go live
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/making-your-site-go-live?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/making-your-site-go-live?u=76281980&t=0)** - [Instructor] Now that you have your Django project completed, how are you going to show it to the world?
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/making-your-site-go-live?u=76281980&t=5)** We'll be deploying the same project to the four biggest providers so you can choose the one that's right for you.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/making-your-site-go-live?u=76281980&t=11)** We'll explore deploying to an Ubuntu server via DigitalOcean with Amazon's S3 bucket and AWS Beanstalk, through Heroku's simple command line interface, and advance security features with Azure's virtual machines.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/making-your-site-go-live?u=76281980&t=28)** Hi, I'm Nick and I love Django and mobile programming, let's begin.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=0)** - [Instructor] Now before we go ahead and get started, these are the things that you should know.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=4)** The first is the basics of Python 3.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=7)** We're going to be using Python 3.7 but if you know any of the recent versions of Python 3, you're going to do just fine.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=14)** You need to know a little bit about pip.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=16)** Pip allows us to install Python packages.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=19)** Also, you need to know how to make a basic Django project.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=23)** And connected with this, my previous course, [[Building a Personal Portfolio with Django]], walks you through from start to finish creating a very basic Django project.
>
> **[0:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=33)** And it's that same project that we're going to be deploying to each of the different locations here throughout the course.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=39)** So I really recommend going through that course to get a nice familiarity with how this project is structured and functions.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=48)** You should have a basic knowledge of the terminal, be able to move around in directories and also, edit files with things like Nano.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=55)** You also should have a text editor where you can write some code.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=58)** I recommend using Atom, but it's completely up to you.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=62)** Also, you should be able to work with domain names.
>
> **[1:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=65)** I recommend having bought one before the course.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=68)** The reason for this is if you deploy your project somewhere and it has just a long string of letters and numbers because it's at some Heroku address, that's not as fun as saying, "Hey, go check out my website "at nickwalter.info."
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=81)** it just rings a lot better.
>
> **[1:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=83)** Now for each of the different places we'll be deploying your project, most of them require some form of money, like a credit card or PayPal, in order to get started.
>
> **[1:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=92)** Some even require to verify yourself via a phone number.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/what-you-should-know?u=76281980&t=96)** Make sure that you're able to provide this information and find which deployment will be best for you money-wise, if that is a constraint.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), pip (2), make (2), find (1)
> **Code Keywords:** require (2), this, (1)
> **Versions:** python 3 (3)
> **Tools:** terminal (1), atom (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Choosing the right deployment for you
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=0)** - When you've completed a Django project and you're ready to ploy it out for everybody to enjoy, there's a big question you ask yourself, "Where should I deploy my project?"
>
> **[0:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=10)** Now in this course, I'm going to be showing you four different places that you can do that and you can pick which one you'd like to use, personally I'd recommend going through each so that you can personally see the pros and cons of each and decide which one's best for you but I'd like to show you the pros and cons of each platform and then you can decide if there's one specific one you want to jump to that you can do that.
>
> **[0:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=32)** So, let's go ahead and start first with DigitalOcean.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=35)** One of the greatest pros about DigitalOcean is, it's a very hands-on option.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=40)** DigitalOcean gives you a virtual machine and we're going to fire up an Ubuntu linux server and rewrite all the code to make everything happen so we're going to get the postgres database up and running, we're going to use something called Gunicorn, to get our server working.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=54)** You see how everything works and you're completely hands-on.
>
> **[0:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=57)** If something changes, you can always switch to a different linux server and you'll be more than fine.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=62)** The platform on DigitalOcean is extremely simple, so they make it very easy to spin up a server, within literally 30 seconds, you can have a new server ready to rock 'n roll.
>
> **[1:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=74)** Now, the cons with DigitalOcean is that when something breaks, it's completely on you.
>
> **[1:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=80)** If your database is locking up for some reason, gets hit with too many requests, it's on you to figure out how to scale that and if you need to make things bigger, deploy things to have a load balancer and stuff, things can get very complex, very quickly.
>
> **[1:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=95)** Now, let's talk about AWS Beanstalk, so this is Amazon's app-based architecture for deploying your project.
>
> **[1:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=103)** One of the greatest pros of AWS is it's the cheapest option out there, AWS is so massive and they're always trying to drive down their costs, there's really no one that can touch Amazon when it comes to cost.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=115)** Also, what's great about AWS is that you can deploy your whole project straight from the command line.
>
> **[2:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=122)** Now, this brings us to our cons, while you will do most things from the command line, you will also have to jump into AWS's ecosystem which is very large and very complex, being the largest Web Provider on the internet, they have so many different services and it's very easy to get lost quickly and mess something up and not even know what it is that you just broke.
>
> **[2:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=146)** Also, another con of AWS is that, your code is completely in AWS's control or for any reason something goes wrong and you need to move your project, you can't simply just fire up another virtual machine, you'd have to sort of bring back your project that has been customized specifically for Amazon and make it generic again.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=166)** Let's talk about Heroku, one of the greatest pros of Heroku is, it's very simple to deploy, in fact, I'd say out of all of four options, it's the simplest and also Heroku has a truly free tier if money is tight or if you want to feel confident in something before you move forward, Heroku allows a free tier that can run on forever, while it's not going to be providing a website that can handle thousands and thousands of requests, it'll be great for your testing needs.
>
> **[3:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=194)** Now, the cons with Heroku, is that it can become expensive quick, yes it starts out extremely cheap and has a great free tier but once you really start moving up with Heroku, it can get expensive.
>
> **[3:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=206)** Also, just like AWS, you're completely in Heroku's control, everything that you do with your project is geared towards deploying with Heroku and pulling back to a more generalist sense is going to take some work if you need to move.
>
> **[3:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=222)** Finally, Microsoft's Azure, just like DigitalOcean, we're going to be working with a virtual machine so it's very hands-on, meaning that you can change whatever it is that you like, customize it, you see everything that's going on but moving into the cons, Azure, the platform is not simple like DigitalOcean.
>
> **[4:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=242)** It's not as complex as AWS but there's a lot of different moving pieces and things can get a little bit tricky.
>
> **[4:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=249)** Also, out of all the Providers, Azure is the most expensive.
>
> **[4:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=254)** So, with this whole list in tact, please take a look, decide which one you'd like to go with, again my recommendation is, why not try all of them?
>
> **[4:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/choosing-the-right-deployment-for-you?u=76281980&t=262)** But if you'd like to jump somewhere, hopefully this guide will help you get there.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9), make (4)
> **Env Vars:** aws (9)
> **Code Keywords:** let (3), switch (1), finally, (1)
> **Tools:** command line (2)
> **Analogies:** just like (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - when (1)


### 2. 1. Digital Ocean

#### Digital Ocean account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=0)** - [Instructor] Welcome to our DigitalOcean deployment.
>
> **[0:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=3)** This is the first way that we're going to deploy our Django app.
>
> **[0:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=6)** Let's go ahead and open up a browser.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=8)** We need to create a DigitalOcean account.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=12)** I'm going to open up Chrome for my browser.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=14)** Feel free to use any browser that you would like.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=17)** Go ahead and go to [digitalocean.com](https://digitalocean.com).
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=24)** Once we're at DigitalOcean, we need to create a new account.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=27)** So up at the top right, we can sign up.
>
> **[0:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=31)** And go ahead and fill in your information.
>
> **[0:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=36)** Once you have that, go ahead and hit Sign Up.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=40)** DigitalOcean is now going to ask you to go log in to your email and click the confirmation email that they just sent you.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=47)** That'll bring you back here.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=48)** I'll go ahead and do that, and we'll meet back together.
>
> **[0:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=52)** Now once you've clicked that confirmation email, you'll get to a screen here that's going to ask for your billing information.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=58)** So with DigitalOcean, in order to run a server, you need to have payment, and so you can choose whether you'd like to do that with a credit or debit card or PayPal.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=68)** But go ahead, fill out your information, and save that card to your account.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=72)** Then we'll be able to move forward.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=75)** Now once you've put in your payment information, DigitalOcean is going to ask for your project goals.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=81)** So first, we need to give a name for the project that we're working on.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=84)** And we're trying to deploy our portfolio project, so I'm going to call this something like Django Portfolio.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=91)** Next, it's going to ask, What is your project for?
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=94)** Feel free to choose anything you'd like.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=96)** This is more just marketing stuff from DigitalOcean.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=98)** I'm going to say Just trying out DigitalOcean.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=101)** Don't have to select any of these different options here.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=105)** Again, I think they're just kind of surveying us.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=107)** So if you scroll down to the bottom, we'll get to our Start button here.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=111)** Go ahead and click that.
>
> **[1:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/digital-ocean-account?u=76281980&t=112)** Now if you've confirmed your email, put in your payment information, you should see this dashboard, and this means that we are ready to go.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), scroll down (1)
> **Code Keywords:** let (1)
> **URLs:** [digitalocean.com](https://digitalocean.com) (1)
> **Definitions:** means that (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Creating a droplet
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=0)** - [Instructor] In this video, we're going to be creating a DigitalOcean Droplet, now a Droplet is essentially the same thing as a server.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=8)** Now I'd like to point out a little bit of terminology here so that you feel comfortable inside of this DigitalOcean dashboard.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=14)** On the left side, you can see we have Projects listed.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=17)** Now there's only one project, and there's that DigitalOcean portfolio that we had created, and really all that a project is is a collection of Droplets.
>
> **[0:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=26)** And remember, Droplets are essentially servers.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=29)** So feel free if you wanted to change that name to something like My Projects or Nick Developer, something like that, that's totally fine.
>
> **[0:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=37)** And you can have as many projects as you want.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=39)** So it's up to you about how to distinguish that.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=41)** But we need to create a Droplet.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=43)** So while Django Portfolio is selected, I'm going to go up to the top of the screen here and hit Create, and create a new Droplet.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=54)** Now it's going to ask you what kind of droplet or server it is that you want to create.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=59)** We want an Ubuntu Linux server and we want to specify the version here.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=64)** Now the way that Ubuntu manages their version numbers, the first number there is the year that it was created and so we want to go with the latest, 18, so that we can have something that was created in 2018 and this is actually good all the way until April 2023.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=82)** And so let's go ahead and choose 18.04.
>
> **[1:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=86)** Once we have that selected, we now need to say what size we want our Droplet to be and for a starter project at the very beginning, you do not need any power whatsoever and so I would select the smallest option that you can here, this $5 one.
>
> **[1:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=103)** The great thing about DigitalOcean is that any point your project becomes bigger than you thought it would be and you're getting all this traffic to your website, you can very quickly upgrade and say, I want to move to the $10 a month option so I can get that extra gigabyte of speed and it will automatically do that for you.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=121)** But we want to start out the smallest.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=123)** We can always scale up.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=125)** So let's go ahead and choose that size.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=128)** Go ahead and keep moving down here.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=130)** Now there's a question here about whether you'd like to add backups for your project.
>
> **[2:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=135)** I highly recommend enabling backups.
>
> **[2:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=138)** This can be as cheap as one dollar a month and essentially what it does is every other day or so creates a backup of your entire Droplet so that in case something were to go wrong, like it gets destroyed or your code has a bad bug and all your data was accidentally deleted, you can always go back to your backups and recreate that.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=158)** So that's up to you about the pricing and everything, whether or not you would like to do that, but I would highly recommend enabling your backups.
>
> **[2:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=167)** We'll go ahead and keep moving down.
>
> **[2:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=169)** You need to choose a region to host your data in.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=173)** You can choose wherever you'd like.
>
> **[2:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=174)** There's not a big difference between these.
>
> **[2:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=177)** I'd recommend something that's somewhat close to you, but again, it doesn't matter where you're at, it's going to work wherever.
>
> **[3:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=184)** So I'm going to select San Francisco, two, here.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=188)** I'm going to keep moving down.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=191)** And we now need to create a hostname for our Droplet.
>
> **[3:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=194)** This is essentially the name for our server or droplet and so I'm going to name this something like, portfolio-ubuntu, 'cause we're going to have this be an Ubuntu server.
>
> **[3:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=208)** So that gives us a nice descriptive name, this is the server that's hosting our portfolio code and it's running Ubuntu.
>
> **[3:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=215)** Now with this all in place, we just go ahead and hit our Create button here.
>
> **[3:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=220)** And what's so neat about DigitalOcean is they're going to go out and create this new droplet or server for us and it happens so quickly.
>
> **[3:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=228)** It usually takes about 30 seconds here.
>
> **[3:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=231)** But once this is all done, we are going to have a Droplet that we can log into and start configuring so that we can deploy our Django app there.
>
> **[4:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=240)** So you'll see, our loading bar's getting ever so close to the end there, and we've made it.
>
> **[4:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/creating-a-droplet?u=76281980&t=246)** We now have a new Droplet ready to work with.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Versions:** 18.04 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** starter project (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Securing your server
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=0)** - Now that we've created a new droplet on Digital Ocean, they have sent us an email containing the login credentials for that droplet.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=8)** So this is the information that we need in order to log into our new server.
>
> **[0:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=13)** So, if you go to your email and check out what we have from Digital Ocean, the key pieces of information that we need are this IP-address and the password.
>
> **[0:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=22)** So let's go ahead and copy first the IP-address, move over to our terminal, and we're going to type out SSH root @ and then this IP-address.
>
> **[0:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=34)** Go ahead and hit enter on that, so that's saying that we want to log in to our server via the root user at the following IP-address, it's going to ask for the password.
>
> **[0:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=44)** So we'll move back to our email, copy the password that Digital Ocean has sent us, and then in our terminal we'll paste that and hit enter.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=55)** Once we've done that, we will be able to now log into the server.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=59)** It's going to ask for the current password and say that we need to reset it, so go ahead and paste the same password that you have copied right now, hit enter on that, and now it's going to ask for a new root password.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=71)** Now for this root password, you want to make sure that it's a very long and complex password so that someone would not be able to easily guess this.
>
> **[1:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=80)** When it comes to server security, the longer your password is, the much harder it is for someone to get in there.
>
> **[1:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=86)** I would recommend something over ten keys long.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=89)** So, I'm going to go ahead and put in a new password here, this root password can also be reset via digital ocean, so if you're ever worried about losing it, you can always get it back through there but make sure it's a long, complex password.
>
> **[1:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=103)** Go ahead and hit that enter on that once.
>
> **[1:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=106)** You'll need to then retype your new password again and hit enter one more time.
>
> **[1:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=113)** Now, once you've done that, you have officially logged into your server as the root user.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=119)** Now, with LNIX servers, it's not a good idea to be running around using commands as the root user.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=125)** Instead, we want to have a normal user that can have root privileges.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=130)** So we need to go ahead and create a new user.
>
> **[2:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=134)** To do that, go ahead and type add user and create a new name for the user that you would like to add.
>
> **[2:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=141)** Now, I'm going to go ahead and use my own name, feel free to use Nick as well if you'd like but also feel free to use your own name to make it more personalized to you.
>
> **[2:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=150)** So I'm going to say add user nick.
>
> **[2:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=153)** And I'll hit enter there.
>
> **[2:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=154)** Now, it's going to ask me for a password for my user again, make sure that this is a long, complex password so that someone could not easily guess this.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=164)** Go ahead and type in mine in now.
>
> **[2:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=167)** Going to ask you to do that one more time.
>
> **[2:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=171)** And it's also going to ask you for some other information.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=175)** You can go ahead and just hit enter through this, the full name, room number, work phone, these are details you could add, but you don't need to.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=183)** It's going to ask, is this information correct?
>
> **[3:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=185)** We're going to type a Y and hit enter there.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=188)** This means that we now have a new user.
>
> **[3:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=192)** But like I said before, for this new user we want to make sure that they have root privileges.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=197)** So here's the command to do that.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=199)** We're going to type out usermod, all one word, space, dash lower case a, capital G, space sudo, and then nick.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=213)** Again, if you didn't use the username Nick, make sure you replace Nick with whatever your name is.
>
> **[3:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=219)** Just remember for the rest of the video, that's going to be the case but just want to make sure you understand that.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=224)** Then go ahead and hit enter.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=226)** So we now have a new user who should have sudo privileges.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=230)** We want to make sure that this is the case.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=233)** So before we go ahead and close out this connection here to our server, go ahead and open a new terminal window or a new terminal tab and I'm going to do that here if I use a command T, that'll open up for me.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=247)** And what I want to do here is try and log in to this server using the new username that we have.
>
> **[4:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=254)** So I'm going to type out ssh, and instead of doing root, I'm going to do Nick @ and then put in our server IP-address, your server IP-address is going to be different than mine, keep that in mind.
>
> **[4:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=270)** And go ahead and hit enter.
>
> **[4:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/securing-your-server?u=76281980&t=273)** It's going to ask for that password, go ahead and enter that, and if you're successfully able to log in, this means we now have a new user and this user is going to be able to log in and use sudo commands.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), sudo (3), ssh (2)
> **Code Keywords:** this. (2), let (1), this, (1), case. (1)
> **Tools:** terminal (4)
> **Env Vars:** ssh (1), lnix (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### Postgres setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=0)** - [Instructor] For the rest of this chapter we're going to be utilizing a resource from DigitalOcean.
>
> **[0:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=6)** This is a great guide showing you how to deploy your Django project on DigitalOcean and while I'm going to make some tweaks from what's written here, this is the core of what we're basing our deployment off of so it's a great resource to know and we're going to be copying and pasting some things from it.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=23)** So go ahead and go to the following URL so that you can have access to this guide.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=30)** Now that we have our guide, let's go ahead and move back to our terminal.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=35)** we need to make sure that our server is updated with the latest and greatest software so that we can move forward.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=41)** The first thing we need to do is type sudo apt update and with this, any time we run as sudo command, it's going to ask for our sudo password.
>
> **[0:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=53)** So the same password that we use for this user that allows us to do admin things, go ahead and input that.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=59)** And this is going to go out and check and see if there are any updates available for us to install on our server.
>
> **[1:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=67)** So we'll go ahead and wait for this to finish.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=71)** Now that this is finished, we need to actually install these updates.
>
> **[1:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=74)** So we're going to go ahead and type sudo apt and instead of update, we'll do upgrade.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=82)** It's going to ask would you like to move forward?
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=84)** Go ahead and type Y and hit enter.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=91)** Great, now with that finished, we need to go ahead and move back to our guide and start installing the tools that we will need in order to start deploying our project.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=101)** So inside of our guide here we're going to scroll down until we find the portion where it asks to install the following packages.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=110)** So just go ahead and copy from sudo apt install, all the way to Nginx and curl.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=116)** Make show you using the one for Python 3, not Python 2.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=121)** With that copied, move to our terminal, paste and hit enter.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=127)** Type Y to say yes we want to install all of these and the different things that we're installing here, this is the different code that we need to work with.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=136)** Postgres, this is Nginx which is going to be the engine that's going to be serving our website.
>
> **[2:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=142)** Just all the tools we need are being installed in one fell command here.
>
> **[2:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=147)** Once that's finished let's go ahead and move back to our guide here.
>
> **[2:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=151)** The next big step for us is going to be getting our Postgres database ready to interact with our user.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=158)** Now in an earlier course that I worked on, and we had Postgres just running locally on our computer, it is very simple to just, in a UI, put in the database name that we wanted and the password.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=170)** Now without Ubuntu server, we're going to have to get a little bit technical with how we're going to work with it.
>
> **[2:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=176)** So, first we need to get into the Postgres command line so it's do that we're going to copy the following code here sudo postgres psql so let's go ahead and copy this, move back to terminal paste that and hit enter.
>
> **[3:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=192)** And you should see Postgres equals with the hash.
>
> **[3:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=195)** If you see that, that means you're ready to start running Postgres commands so we're no longer inside of the Linux machine, instead we're inside of the Postgres command line inside of our machine.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=205)** So if we move back to our guide, you can see they have some code to help us to create a new database and a user for that database, and we're going to work with different permissions.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=216)** But you'll notice through this guide, any text that's in red, that is the name of their hypothetical project, we want to have our own names there, so anytime you see red, know that that's going to be a different name that we're going to have to change ourself.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=230)** So let's go ahead and copy this first line, we don't need the Postgres equals hash, remember that's already there, we just need this create database and then my project, but again, we're going to change my project.
>
> **[4:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=243)** So we'll copy this move back, go ahead and paste that, delete my project and the name that I think would be appropriate for our database is portfoliodb this describes that this is our portfolio project and that it's also a database with the db at the end there, go ahead and hit enter on that.
>
> **[4:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=265)** Next step that we need to do is create a user that can access this database, so again, copy this line, and we're going to have to change the user and the password that's coming through.
>
> **[4:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=275)** So let's go ahead and copy that, back in our terminal we'll paste and we need to change myprojectuser to be a new user, again you can choose the name that you would like here, I think the name portfoliouser is an appropriate name here and is pretty descriptive, and go ahead and select the password, I'm going to choose one that's very for us to remember and that we'll use through the project django1234.
>
> **[5:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=306)** Hit enter on that, so now we've created a database, we've created a user, that will be able to log into this database, but we need to connect the two.
>
> **[5:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=315)** So we're going to go ahead and move back to our guide, scroll down and we need to enter in the following lines, so we're going to have to do this one at a time here.
>
> **[5:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=325)** And each time we're going to have to change this to our user name.
>
> **[5:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=328)** So let's go ahead and copy our first, we'll paste this, change myprojectuser to portfoliouser.
>
> **[5:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=341)** We'll hit enter, and do the same thing for each of the following two lines.
>
> **[5:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=357)** One more line to go.
>
> **[6:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=365)** Now that we've copied these lines, we need to make sure that our user has the appropriate privileges, so we'll go ahead and copy this one last line, grant all privileges, again we'll have to change that text in red.
>
> **[6:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=381)** So the user should be portfoliouser and instead of myproject, this is going to be our portfoliodb.
>
> **[6:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=396)** Go ahead and hit enter on this.
>
> **[6:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=399)** So now that we've done that, we've created the database, the user, given all the proper privileges and settings correctly, now we need to get out of Postgres.
>
> **[6:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=409)** So what we're going to do is a backslash and a q, and if we hit enter on that, that will get us back into our regular terminal here where we can interact with our Ubuntu machine.
>
> **[7:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=420)** Now if you ever wanted to get back into Postgres and you know run your own commands, do different things, you can do that by typing out sudo -u postgres psql -d
>
> **[7:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=441)** and then portfoliodb.
>
> **[7:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/postgres-setup?u=76281980&t=444)** And what this command does is it gets us back into the Postgres command here, but with this time the portfoliodb so that we can see what different tables we have, we can maybe edit some data if we needed to, and again, if you ever needed to get out of this, backslash q and enter will get you back into your server.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (7), make (4), apt (3), nginx (2), python (2)
> **Code Keywords:** let (6), this, (4), delete (1), this. (1)
> **Tools:** terminal (5), command line (2)
> **Prerequisites:** install (5)
> **UI Navigation:** scroll down (2), go to (1), select the (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** python 3 (1), python 2 (1)
> **Env Vars:** url (1)

#### Transferring code to the server
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=0)** - The next step in our deployment, is getting our code from our local computer onto the DigitalOcean server.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=7)** So, in our terminal I currently have two tabs.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=11)** I still have my root tab over here.
>
> **[0:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=13)** I'm going to close out the root tab.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=14)** Remember any time we interact with our server, we'd like to interact with it via the new user that we've created and not the root user.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=23)** But inside of our terminal, we're going to go ahead and create a new tab so that we can work with our local machine here.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=30)** So I'm going to do command T, for a new tab.
>
> **[0:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=33)** And I'm going to move to my desktop where I have the portfolio project that we're ready to deploy.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=39)** Now again, this portfolio project is created from a previous course that I have here on LinkedIn, where you can create a little information about yourself, and this is what we're going to be deploying.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=51)** So if I go ahead and do and l-s here, you can see that I have this portfolio project.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=55)** Make sure you have your portfolio project in the directory where that project is stored.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=62)** Now, once we have that, we need to go back to our server tab here.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=66)** Remember again, this is where we're logged in to our server.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=70)** And we need to determine where the home directory is of our user that we've created.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=75)** So I'm going to type out P-W-D, and hit enter.
>
> **[1:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=79)** And this is going to give me the path of the directory that we're currently in.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=82)** For me, it's slash home slash nick.
>
> **[1:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=85)** For you, it's going to be slash home slash whatever your user name is.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=89)** But whatever that is, we want to make sure that we go ahead and copy that.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=94)** And we'll move back into the tab that's on our local computer where our project currently is, and now we're going to use a command to send this project up to our server.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=105)** So we're going to do that by typing out S-C-P space dash R, lowercase R.
>
> **[1:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=112)** Then we're going to take our local folder here, portfolio project.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=116)** If you start typing you can hit tab to autocomplete that.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=119)** Then we're going to do space nick at, then you need to put in your IP address.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=128)** After that, we need to do a colon.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=130)** Don't do any spaces, colon, paste in what we have, which is the path to where we want this to be saved.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=137)** And then go ahead and hit enter.
>
> **[2:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=140)** Now it's going to ask for the password for our user, so we'll go ahead and input that.
>
> **[2:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=146)** And once that's done, it's going to go file by file, and throw everything up to the server.
>
> **[2:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=151)** So this is amazing.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=152)** With one command, we're able to move an entire directory up to our new DigitalOcean server.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=158)** So we'll go ahead and give this a second to move up everything that we need to to our droplet.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=164)** And look at that.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=165)** It's all finished there.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=166)** So let's go ahead and move back to our server tab, here.
>
> **[2:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=169)** And let's now do an l-s, and see if that code made it.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=173)** And look at that, we now have the portfolio project here ready to work with.
>
> **[2:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=179)** Now with this portfolio project, when it comes over you might get some weird permissions that come with the files that came up, and so we want to make sure that everything's in a place that we would like.
>
> **[3:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=189)** So we're going to do a C-H-MOD, all one word, dash capital R, then seven five five, and then space, the name of our project, which is portfolio project, again, you hit tab and you can get the autocomplete.
>
> **[3:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=204)** So we'll go ahead and hit enter with that.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=207)** So now that we have our code on our server, we need to start configuring it, so that we'll be able to work with it and have it eventually show up on the Internet.
>
> **[3:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=217)** So the first thing that we need to do, is create a virtual environment for our code to run on this new server.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=224)** Let's go ahead and type out sudo dash capital H pip three install virtual E-N-V.
>
> **[3:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=236)** So, we'll go ahead and hit enter on that.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=239)** Once that is completed, we need to go ahead and create a virtual environment folder.
>
> **[4:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=245)** So we're going to type virtual, virtual E-N-V, you can do some autocomplete on that as well.
>
> **[4:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=250)** And I'm going to call our virtual environment V-E-N-V.
>
> **[4:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=253)** Which is just short for virtual environment.
>
> **[4:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=255)** Feel free to name it something else, but I think this is a good naming pattern.
>
> **[4:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=258)** So let's go ahead and hit enter on that.
>
> **[4:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=262)** It's going to go through and create this for us.
>
> **[4:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=265)** Now we need to go ahead and move into this virtual environment.
>
> **[4:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=269)** So in order to activate that, we're going to say source space V-E-N-V which is this new folder that we've just created.
>
> **[4:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=277)** Then slash bin slash activate.
>
> **[4:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=281)** Go ahead and hit enter on that.
>
> **[4:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=283)** And now you should see on the left here, we have the V-E-N-V in parenthesis showing that we're inside of our new virtual environment.
>
> **[4:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=292)** So now that we're here, we need to install the proper pieces for our project.
>
> **[4:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=297)** And so, if we go ahead and move back to our Django guide.
>
> **[5:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=301)** We can scroll down a bit and get to following code that we need.
>
> **[5:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=306)** Here we go, so we need pip install, and it's going to get Django, Unicorn, the code that we need to connect to a postgres database.
>
> **[5:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=314)** We're also going to add some code here, so copy what we have.
>
> **[5:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=318)** Move back to our terminal.
>
> **[5:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=319)** We'll paste that in.
>
> **[5:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=321)** After the binary, go ahead and do a space there.
>
> **[5:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=325)** And we also need to add that we are going to get pillow.
>
> **[5:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=328)** Pillow is what allows us to work with images, and so we'll go ahead and just hit enter on this.
>
> **[5:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-4?u=76281980&t=333)** And pip is going to go grab all this code and install it for us here, inside of the virtual environment.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), pip (3), sudo (1)
> **Code Keywords:** let (4), throw (1), else, (1), this. (1)
> **Prerequisites:** install (4), make sure you have (1)
> **Tools:** terminal (3)
> **Definitions:** short for (1), is a  (1)
> **Env Vars:** mod (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)

#### Configuring settings files 
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=0)** - [Instructor] So once that's completed, the next step for us, is we need to make some changes to our settings inside of our project.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=7)** So, let's go ahead and just use nano to add to our file here on the server.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=12)** Nano is just a quick way to make some changes to files, and so we're going to say nano, and then type out the name of our portfolio project, We want to get into the portfolio folder, and then settings.py.
>
> **[0:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=25)** So go ahead and hit Enter on that.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=28)** Now the first thing we need to do, is we need to say that people should be able to access this project from our IP address, or a customized domain.
>
> **[0:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=38)** So at the end of this chapter, I'm going to show you how to access this project that we have via your own custom URL.
>
> **[0:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=46)** So if you have a custom URL, now would be the time to type it, but if you don't, that's totally fine here, but the first thing that we need to add into this allowed hosts, which is again, the different places that people can access this project.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=59)** I'm going to do a single quote and type in my IP address, so I'm going to do 178 128 7== again, your number will be different from mine, but whatever your IP address is, just have that surrounded in single quotes.
>
> **[1:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=73)** Now if you have a custom URL that you'd like to add, this would be the place to do it.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=78)** If you don't, just leave the code as it is now, but if you do, you're going to say comma, and then do another single quote, and for me, I'm going to be showing you my URL, which is nickwalter.info.
>
> **[1:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=92)** Well go ahead and encapsulate that all in single quotes, and then I also want to be able the people to go to nickwalter.info, but also www.nickwalter.info, so I'm going to do another comma, and then a single quote to say www.nickwalter.info.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=111)** So what we have here is a list of three different strings, again, if you don't have a URL, just go ahead and do the IP address, so you just have a list of one string inside of there.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=123)** But once we have that set, we then need to move down to our database and make the appropriate changes.
>
> **[2:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=129)** So we'll just move down here in our file, down to where we get the database code, and we just need to make a few changes to make sure that we have the appropriate code.
>
> **[2:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=138)** Now first, in the engine here, instead of postgresql, we're going to change this and say postgresql underscore, and then we're going to add P-S-Y-C-O-P-G-2.
>
> **[2:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=153)** Remember that was what we just installed via Pip.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=156)** Next portfolio name, we named ours portfoliodb, so that's going to stay the same.
>
> **[2:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=161)** For user, instead of postgres, we're going to change this to portfoliouser, okay, if you used a different username, just whatever you used for postgres, make sure that you have that.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=175)** And then, we're going to have our password be whatever we created for use that.
>
> **[2:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=178)** For us, we use the same password here, django1234, so we'll just keep that the same.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=183)** Local host 5432 looks great there.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=187)** Now we're almost done here, let's keep moving down on this settings file.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=191)** We need to get down to the very bottom here, where we have our media root and the media URL.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=197)** We're going to keep the media URL as is, but we want to have our media root to be the same, or similar to our static root.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=205)** So I'm going to copy what we have for static root, and I'm going to delete what we have for media root.
>
> **[3:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=211)** We'll paste this, but instead of the name of static, we'll go ahead and change this to media, saying that we want to have our static and our media files be in the same location.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=224)** Once we've gone ahead and done this, we're going to hit Control + X.
>
> **[3:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=228)** It's going to ask us, "Would you like to save this?"
>
> **[3:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=229)** Type 'Y', and then hit Enter.
>
> **[3:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-3?u=76281980&t=232)** We now have our updated settings file.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), let (2), this, (2), delete (1)
> **CLI Commands:** make (6), pip (1)
> **Env Vars:** url (7)
> **File Paths:** settings.py (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Testing deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=0)** - [Instructor] Let's go ahead and move into our portfolio project.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=4)** We're going to do a CD into our portfolio project.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=8)** Once there if you go ahead and do an ls you can see the different things that we have.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=12)** We have some images, we have the jobs app things like that but we need to remove this images folder.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=19)** So I'm going to say rm -r and we'll just type in images that's going to get rid of the images folder so we'll start clean there.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=29)** Then what we need to do now that we have a database up and running, we have the proper connection, let's go ahead and migrate that database.
>
> **[0:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=37)** So we're just going to type out here, python manage.py and then migrate.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=43)** Go ahead and hit enter on that.
>
> **[0:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=46)** Once all the migrations have gone through, we need to create a super user.
>
> **[0:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=50)** So that then we can log in and make changes to our database.
>
> **[0:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=53)** So we're going to say python manage.py, createsuperuser.
>
> **[1:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=61)** Now with this user feel free to give whatever name.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=64)** I'm just going to use Nick as it says here so I'll just hit enter to keep that as Nick.
>
> **[1:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=69)** I'm not going to input an email address so I'll just hit enter there.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=72)** For the password I'm going to keep my jango one two three four just so I don't forget it.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=77)** Jango one two three four again just to repeat it.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=81)** And now we have a new super user.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=84)** Another command that we need to run is we need to collect our static all together.
>
> **[1:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=88)** So we're going to do a python manage.py collectstatic.
>
> **[1:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=95)** We'll type yes to this that we want this all to come to one central location.
>
> **[1:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=100)** Great.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=101)** Now that we've done that, we need to make sure that we'll be able to access this site via our IP address and at a specific port.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=110)** So what we're going to do is open up our firewall by saying sudo ufw allow 8000 and this says that our server can be accessed via the port 8000.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=123)** So just go ahead and hit enter on that.
>
> **[2:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=126)** You can see it will say, rules have been updated.
>
> **[2:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=129)** Now this is the big moment of truth.
>
> **[2:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=131)** We're going to test and see if we can get to our project.
>
> **[2:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=134)** So to do that we need to run our server, we're going to say python manage.py runserver and with this we're going to say 0.0.0.0:8000 and what this command is doing is saying run our server on our machine and put it at 8000.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=156)** And the 0 point 0 is saying let's host it directly from what our IP address, which means for me for me I'll be able to access it via this 178.128 number.
>
> **[2:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=167)** So I'll go ahead and hit enter here.
>
> **[2:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=171)** That will be running our server.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=173)** So now if I come back to my browser, I should be able to go to 178.128.7.137 and this is important make sure you have colon, 8000.
>
> **[3:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=190)** So we're going to our IP address at port 8000 and remember your IP will be different than mine.
>
> **[3:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=196)** But if we go ahead and hit enter here, oh look at that.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=199)** There's beautiful Nick showing up there.
>
> **[3:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=202)** This means that it was successful.
>
> **[3:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=204)** We're able to see our new site here and if our database connection is working correctly, we'll be able to go up to our URL here and ad a slash admin.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=216)** Now we can log into our admin with that super user that we created and again I just used the default name Nick jango one two three four.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=226)** Now if I hit it enter, now you can see that I'm logged in.
>
> **[3:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=229)** I can go to my jobs here and I can add the jobs that we had created earlier.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=234)** So I'm going to go ahead and just add these now.
>
> **[3:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=237)** For the images I'm going to use what we have from our previous projects.
>
> **[4:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=241)** If we move into the images folder I'll grab this app, and I'll say an app I made.
>
> **[4:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=252)** Save that.
>
> **[4:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=254)** We'll add another job, let's deal with this with our code, I learned python.
>
> **[4:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=264)** We'll save that and add one more job here, using our last image website.
>
> **[4:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=271)** We'll say, a website I made for a company.
>
> **[4:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=279)** And we'll save that.
>
> **[4:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=280)** So now we actually have some information inside pf our database and if we go back to the homepage, look at this, down below we have the following items showing up.
>
> **[4:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=291)** We can click on them, see them in full detail.
>
> **[4:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=293)** So this is a full functioning website.
>
> **[4:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-4?u=76281980&t=297)** The only issue that we have is that this is running on port 8000 and it's not running in the most efficient way.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), make (3), cd (1), ls (1), rm (1)
> **Code Keywords:** let (4), super (3), static (1), this, (1)
> **File Paths:** manage.py (4)
> **Ports:** port 8000 (3), :8000 (1)
> **Versions:** 0.0.0 (1), 178.128 (1), 178.128.7 (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** url (1)

#### Gunicorn testing
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=0)** - [Narrator] So we've proven that our code is up and running on our server, but instead of running it through pythonmanage.pyrun server, we are going to be using a service called gunicorn, which serves our site in a much more performant, efficient way.
>
> **[0:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=15)** So, let's go ahead and cancel out of our run server here by just hitting Ctrl + C, that's going to stop that server, and now let's try using gunicorn which we had installed previously, via PIP.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=28)** So, we'll just go ahead and type out gunicorn and should get an auto-complete there now do two dashes, lowercase bind and we're going to do zero point, zero point, zero point,zero like we did before, again colen, 8,000 and we're just going to type out portfolio.wsgi.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=51)** So go ahead and hit enter on that.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=54)** This is essentially the same thing as runserver, but instead of using the built in runserver this is using gunicorn.Now, the important distinction here is that gunicorn is made for production environments where runserver is not.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=66)** If you go into jingles documentation they'll tell you that.
>
> **[1:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=69)** But with this we still should be able to see our site at port 8,000, so if we move back to our browser and we reload our page, if we see all the same images everything looks good, this proves that gunicorn is working.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=82)** But we'd like to have gunicorn running not only at 8,000 but at normal port 80, and that it should be running automatically on its own.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=91)** So, let's go ahead and move over to our guide here.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=94)** There's going to be some code that we need to copy so go ahead and scroll down here, they are showing you how to create a new django project, so we need to sort of just move passed that, so keep scrolling down.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=107)** You need to get back down all the way until it talks about working on a gunicorn service file.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=115)** First thing that we need to do, is move back and deactivate our virtual environment, so hit Ctrl + C first to get out of gunicorn here, then we're going to type out deactivate, okay and that gets us out of our virtual environment, then we're going to copy this line of code, which is going to help us to create a socket for gunicorn.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=136)** We'll go ahead and copy this, move back, paste and hit enter, we're going to have to put in our password.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=145)** And, now, the file that we are going to want to put inside of here, we're going to copy from our guide over here on the browser, so we're going to go ahead and copy everything that we have here, we don't have to change any names or anything at all here.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=158)** This just helps us to create a socket for gunicorn so we'll go back, paste this in hit Ctrl + x, type y and hit enter there.
>
> **[2:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=169)** Now, the next thing that we need to do is go ahead and create a service for gunicorn.
>
> **[2:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=174)** So, we're going to go ahead and copy this line of code come back to our server paste that in, hit enter.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=182)** Now, the code that we need to add here inside of the guide they sort of show you step by step how each of these works and what they mean, we want to go ahead and scroll down all the way 'til we have this bottom one that has unit, service and install listed out.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=197)** And we just want to copy all of this text in, so that we can copy and paste it over there.
>
> **[3:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=203)** But keep in mind, anywhere that there's red text we need to change that to the proper text that's going to be appropriate for our project.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=210)** So, anywhere that it says sammy, that's where we'd want to have nick, instead of myprojectdir, that's going to be portfolio dash project.
>
> **[3:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=218)** And even our virtual environment we're going to have to change that.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=221)** Let's go ahead and move back to our terminal, we'll paste in what we have, and let's just go ahead and start up at the top here, inside of unit there's nothing that we need to change there, but inside of service we need to change the user to be whatever our username is.
>
> **[3:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=236)** So, I'm going to type nick there, group we can keep that the same, inside of working directory we need to change sammy, to say nick and instead of myprojectdir, it needs to be the exact name of the folder that's holding your entire project.
>
> **[4:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=252)** So, this for me is going to be portfolio dash project.
>
> **[4:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=259)** And then inside of this ExecStart we need to change where our essentially virtual environment is so, instead of sammy, we're going to change this to nick and instead of myprojectdir, we're going to go ahead and delete that and we're going to delete even myprojectenv to just have this be venv.
>
> **[4:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=286)** So essentially the path that we're getting here is we're saying, okay, inside of the nick directory go to the virtual environment venv, go to the bin and use gunicorn that's there.
>
> **[4:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=295)** Alright, one just last thing that we have to change here down at the bottom, instead of myproject.wsgi, we're going to change this to portfolio.wsgi application, go ahead and do our Ctrl + x, the y, hit enter on that, and now, let's just go ahead and test to make sure everything is working.
>
> **[5:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=317)** So we're going to scroll down let's copy this first line, this is going to start up our socket, so we'll copy, paste that in.
>
> **[5:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=327)** Go back to our guide, we're going to grab the same line that helps us to enable, paste that in, great.
>
> **[5:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=335)** Then, we're going to scroll down here.
>
> **[5:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=336)** Now, the next thing we want to do, they do some testing to make sure everything's running at a certain pace here.
>
> **[5:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=343)** I think we can move past this, and we're going to move down here, until it's talking about how we can test out the status of things.
>
> **[5:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=350)** So let's go back to our terminal here, we're going to type out sudo systemctl, just like we had above and we're going to say that we want to do a daemon, d-a-e-m-o-n dash reload.
>
> **[6:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=366)** Let's go ahead and hit enter on that.
>
> **[6:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=369)** And then we want to restart our gunicorn service.
>
> **[6:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=371)** So we're going to say sudo system ctl and then we want to do restart gunicorn, okay?
>
> **[6:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=382)** And once we've done that we're just going to do one final check to make sure that gunicorn's working.
>
> **[6:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=386)** We're going to say sudo system c,t,l status gunicorn.
>
> **[6:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=394)** This will tell us if we're having any issues here.
>
> **[6:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=397)** So go ahead and hit enter on that.
>
> **[6:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=399)** And if we see the active here in green, that means things are good.
>
> **[6:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing?u=76281980&t=403)** Hit Ctrl + C, we're ready to move forward.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (2), delete (2)
> **CLI Commands:** make (3), sudo (3), pip (1), systemctl (1)
> **UI Navigation:** scroll down (4), go to (2)
> **Ports:** port 8 (1), port 80 (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Env Vars:** pip (1)
> **Analogies:** just like (1)

#### NGINX setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=0)** - [Nick Walter] The next step in our project deployment, is to utilize something called, NGINX.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=5)** Now NGINX is a web server that's going to handle all of our web traffic, and pass it to the appropriate places.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=11)** So simply put it's going to pass some of the requests, over to Gunicorn, to process back some files but, anytime the users looking for some sort of media, it's going to pass it either to our static folder, or our media folder.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=24)** So now that we're running in production environment, we need to edit our settings, so that it reflects that.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=30)** So we're going to go ahead and type out, nano, portfolio dash settings, edit the settings file, and we're just going to scroll down and change our debug, from true, to false.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=43)** So make sure you got the capital false there, do control X, Y, hit enter on that.
>
> **[0:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=49)** Now that we've done that we can go ahead and properly set up NGINX.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=54)** So what we need to do is move back over to our guide, and we'll scroll down here, and we need to copy this line of code.
>
> **[1:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=63)** So we have sudo, nano, and copy all the way up to my project, we're going to change instead of being my project, to portfolio.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=70)** So go ahead and copy this code, come back to our terminal, paste this in, and type out portfolio.
>
> **[1:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=79)** We'll hit enter there, now we need to go back to our guide, and again a similar thing that's going to list out what we need in different chunks, we want to scroll down until we can have all of it inside of one, location.
>
> **[1:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=90)** So I'm going to copy, all the code that we have here, remember look for the things in red that we're going to have to change.
>
> **[1:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=97)** So we'll move back to the terminal, paste this in and we'll start at the top.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=101)** So up here at the top instead of server domain, or IP, let's go ahead and change this to our IP address, so I'm going to type out 178.128, remember this number will be different from you, I'll do 137, and with this again, if you have a custom domain, this would be the place to add it.
>
> **[2:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=122)** Now if you don't just leave the semicolon like it is here, but if you do have one, for instance I'm going to do Nick Walter dot info, and I'm also going to do www.nickwalter.info.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=136)** Alright now that we've changed that, we need to specify the location of our static folder, so instead of, home slash sammy, going to be home slash nick, and then we need to go ahead and change this, instead of my project directory, we're going to say that this is portfolio, dash, project.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=159)** Now that we have this, this is going to help us serve our static files, we also need to serve some media files.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=164)** So I'm going to go ahead and copy this, and then, below the location ending curly bracket, I'm going to space over, 'till I get to the same space, and say location, and change this to, instead of static, to be media, and same thing down here, we're going to say that this folder is going to be inside of, the portfolio project.
>
> **[3:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=189)** Okay with all this in place, we'll do a control X, to get out of here type, Y, and hit enter.
>
> **[3:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=196)** This now means that we have set up our NGINX properly but we need to, connect everything together so it knows about Gunicorn and whatnot, so we're going to go back to our guide here, we're going to copy this line of code, but with this we need to change, the name that we have of my project, to portfolio.
>
> **[3:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=214)** So we'll copy this, paste, and we'll go ahead and change this to, portfolio.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=224)** So with that in place we want to go ahead and test to make sure that NGINX is working, so we're just going to type out sudo, NGINX, dash T, this will go ahead and do a test for us, says the test is successful, that means everything is ready to go.
>
> **[4:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=240)** So we want to go ahead and restart, NGINX and Gunicorn, so we're going to say sudo, system CTL, restart, and we want NGINX, go ahead and hit enter there, and we're going to go ahead and do the same thing, with Gunicorn.
>
> **[4:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=258)** So now both of those have been reset, we need to make sure that we change our firewalls, so that it's not accepting things on 8000, but it will for all things on NGINX.
>
> **[4:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=267)** So we're going to say sudo, UFW, delete, allow, 8000.
>
> **[4:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=276)** So this is saying no longer allow things on port 8000, and then we're going to do a similar command where we say sudo, UFW, but this time, allow, space, and then in single quotes, capital Nginx, Capital, Full.
>
> **[4:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=292)** With a single quote at the end, hit enter on that, and now essentially, our site is going to be able on port, 80.
>
> **[4:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=299)** So with all of this in place, we're going to be able to move back, to our site, go ahead and change up at your URL, get rid of the colon 8000.
>
> **[5:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=310)** And just go ahead and hit enter, and you should see, your fully functioning site.
>
> **[5:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup?u=76281980&t=315)** It's got your pictures, it's got your media files, everything is working properly now, with Gunicorn and NGINX, this is a great place to be.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (11), sudo (5), make (3)
> **Code Keywords:** static (4), this, (4), pass (3), let (1), type, (1)
> **Env Vars:** nginx (10), ufw (2), ctl (1), url (1)
> **UI Navigation:** scroll down (3)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Prerequisites:** set up (2)

#### Connecting your URL
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=0)** - [Instructor] At this point in time, our Django project is fully functional.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=4)** And it's up and running live.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=5)** It's running in an efficient way with NGINX and Gunicorn, it's perfectly ready to go, except for the fact that it's not the greatest URL for your website.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=16)** You know we've just created this awesome portfolio.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=18)** It's live on the internet.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=19)** If you want to share it with your friend and I mean just try and tell them, hey, go to 178.128.7, right?
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=27)** Your friend would be very confused about how to access this whereas if you had some sort of custom URL in my case nickwalter.info, it'd be very easy to say, "Hey go check out my new site at nickwalter.info."
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=40)** So I'm going to show you quickly about how you can take a domain and have it point to your IP address where your server is located.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=48)** So lot's of different places that you can buy domain names.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=51)** I personally really like Google Domains.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=54)** I think they keep it very simple.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=55)** But you can use any domain name provider that you would like.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=58)** We just need to get them pointing to this IP address.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=62)** So I'm going to go ahead and copy the IP address that we have here.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=66)** I'm going to go back over to my Google Domains page for my domain nickwalter.info.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=72)** Wherever it is that your domain is hosted you want to get to your DNS settings for that URL.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=78)** So once you're there you're going to be able to look, try and find where you can add some records.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=84)** Two records that you want to add is first an @ which is an A record.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=89)** And then have it point to the following IP address.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=91)** Make sure you get rid of that http.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=94)** We want to have just this IP address.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=96)** And we're going to go ahead and add that record.
>
> **[1:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=99)** So this @ just says, if anybody comes to the nickwalter.info, send 'em to this IP address.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=107)** Now you remember we also want people to be able to go to www.nickwalter.info.
>
> **[1:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=113)** So this time we're going to make a record where we're going to say www and then it's still going to be an A record here.
>
> **[2:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=120)** And we're going to just paste in the same IP address and add that.
>
> **[2:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=124)** So we're saying whether they come directly to the domain, that's what the @ means, or through www, we're going to send either one to that IP address.
>
> **[2:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=133)** Now the little bit of an unfulfilling thing here is that it can take a while for this IP address to be connected to your domain name.
>
> **[2:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=142)** Sometimes it's as short as a couple of minutes.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=145)** I've had to wait sometimes as long as 24 to 36 hours.
>
> **[2:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=149)** And so please be patient as you go ahead and update this, eventually you'll get to the point where you should be able to type in nickwalter.info and it will pull up your site.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=158)** Again you're going to have a different domain name from that but whatever your domain name is it'll show it.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=164)** Now one important thing that I would like to mention, if you're going to have a custom domain name, you're going to have to add it at the appropriate places.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=173)** So here inside of NGINX, this is where we listed out nickwalter.info, www.nickwalter.info, but we also did it inside of the allowed host files.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=183)** Remember inside of our settings, we had mentioned it there.
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=186)** So if you're going to make those changes, make sure that any changes you make to your project that you do the following two commands: restart gunicorn and also restart nginx.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=199)** The same goes for if you make any sort of changes to your projects.
>
> **[3:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=202)** You add a new feature, change some code a little bit, add some different display things.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=207)** You've always got to restart Gunicorn and NGINX to make those changes live.
>
> **[3:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=212)** Well there you have it.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=213)** We have successfully created a deployment using Digital Ocean.
>
> **[3:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=217)** Like I said, you have so much control with Digital Ocean in that you have a Linux server that you can do anything that you want on.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=224)** The Digital Ocean setup is so simple you can notice that we just touched on it at the very beginning to make that droplet.
>
> **[3:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=232)** And didn't do anything after that.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url?u=76281980&t=234)** But you can imagine if something were to go wrong, we have to login to our droplet, figure out what the issue is, so that's where it can get a little bit complex.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), nginx (4), find (1)
> **Env Vars:** nginx (3), url (3), dns (1)
> **UI Navigation:** go to (2)
> **Code Keywords:** this, (1)
> **Versions:** 178.128.7 (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)


### 3. 2. AWS

#### AWS account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=0)** - [Instructor] Now let's talk about how to deploy are Django project using AWS.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=5)** Now, AWS is Amazon Web Services, and this is an absolute beast in the Cloud world.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=12)** They are definitely the largest provider out there, and they have awesome solutions at great prices, but it can be very complex.
>
> **[0:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=20)** So, I'm going to be walking you through everything, but just know of all the different services, this is definitely the most complex.
>
> **[0:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=26)** And what's interesting is as we just created our deployment using Digital Ocean, we can do a similar process here on AWS using one of their EC2 instances.
>
> **[0:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=38)** You can follow the same steps.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=39)** You essentially get a Linux server that you could create, and then deploy your project on.
>
> **[0:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=45)** But for this we're going to be using AWS's Beanstalk because it allows us to create an app-centric deployment.
>
> **[0:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=52)** And you'll see that it's a little bit more convenient than what we have over in the Digital Ocean world.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=58)** So, to start here, we need to create an AWS account.
>
> **[1:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=61)** So, go ahead and just click on that button.
>
> **[1:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=65)** The URL is aws.[amazon.com](https://amazon.com), and go ahead and fill out your information.
>
> **[1:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=73)** Once you've done that, you're going to have to input some more information.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=77)** Decide whether it's a professional or personal account.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=81)** So, once you've entered in your information, your payment details, confirmed your phone number, AWS really goes along ways to make that account.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=89)** You should get a page like this asking for a Support Plan.
>
> **[1:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=92)** I recommend just doing the free plan.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=94)** If you get more serious and you need some upped support, you can definitely change your plan afterwards, but let's just go ahead and roll with free.
>
> **[1:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=103)** Great.
>
> **[1:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=104)** So, now that we're here, you should be able to have a button in the top right that says Sign into the Console.
>
> **[1:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=109)** If you're able to get to your dashboard, or what Amazon calls the Console, this means that you're ready to go.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=115)** Looks like I'll have to put in my information one more time.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=125)** And here we are at the glorious AWS Management Console.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=130)** With this in place, let's go ahead and do a little bit of setup on our terminal, so that we'll be able to now deploy our project to AWS.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=137)** So, let's go ahead and move over into our terminal, and on our local machine here we need to install some AWS services via Pip.
>
> **[2:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=146)** So, we're going to type out pip3 install, want to make sure we hae virtualenvironment.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=152)** Odds are you probably already have it, but we'll do that.
>
> **[2:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=155)** But we also want AWS, and then ebcli.
>
> **[2:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=162)** So, go ahead, hit Enter on that.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=164)** We'll go ahead and download those to our local computer here.
>
> **[2:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=171)** Once that's all finished, we're going to go ahead and move to where our project is.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=175)** Mines on my Desktop, so I'll go ahead and move there.
>
> **[2:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=178)** We need to create a new virtual environment.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=182)** So, for this virtual environment, I'm going to use the naming process that Amazon likes to use with their virtual environment, so I'm going to do eb-virt.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=191)** This will create a virtual environment.
>
> **[3:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=193)** This is the same as when we created the venv last time with Digital Ocean.
>
> **[3:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=198)** And again, we need to activate it.
>
> **[3:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=200)** So, we're going to say source, this time eb-virt/bin/activate.
>
> **[3:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=206)** Go ahead and hit Enter on that.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=207)** You can see now that we're in our virtual environment.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=210)** Now, with this in place we just need to install some basics for the project, so we'll say pip install, we want Django, we want pillow, and we also want psychopg2.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=226)** We'll go ahead and hit Enter on that.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=230)** Go grab the proper files for us.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/aws-account?u=76281980&t=234)** Okay, with this in place, we're at a great starting point with our new AWS account, and we have Amazon's Command Line interface ready to rock-n-roll.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (12), make (2), pip (2), pip3 (1)
> **Env Vars:** aws (11), ec2 (1), url (1)
> **Code Keywords:** let (4), interface (1)
> **Prerequisites:** install (4), setup (1)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is an  (1), means that (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **UI Navigation:** click on (1)

#### Deploying to AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=0)** - [Instructor] Now like we did last time with Digital Ocean, there's a great guide for deploying your project on AWS, and I'm going to reference it here, and here's the URL if you'd like to go access this.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=11)** I'm going to deviate a little bit from what's listed here, but I'd like you to have this for your own information.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=17)** Let's go ahead and move back to our terminal here.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=19)** The next thing that we need to do is list out everything that we've installed via pip and you know, we've gotten a couple things like Django and what not.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=27)** You can actually see that if you type, pip freeze.
>
> **[0:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=31)** It'll list out everything that you've installed via pip but we need to put this into a file that is going to be passed on eventually to AWS so they can install it on their own server.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=41)** So, let's go ahead and move into our portfolio project and once we're inside of there we're going to say, pip freeze and then arrow pointing to the right saying, take whatever the pip freeze has and put it into requirements.txt.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=59)** So, what this command, if you go ahead and do an LS, you can see now there's this requirements.txt.
>
> **[1:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=65)** If we do a nano on that, you can see it's the same things as what we just had before.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=70)** So, I'll go ahead and do a Control + X to get out of there but with that in place, we need to go ahead and create a new folder that's going to hold some Amazon deployment information.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=81)** So, we're going to make a new directory with mkdir and the name of this is going to be dot, and all lowercase, ebextensions and that dot makes it a hidden folder and with that, to check that it's there, if you just do a regular LS you won't see it but if you do ls -a, you'll see then, oh there's that .ebextensions.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=107)** With all of that we need to create a new config file.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=110)** So, let's go ahead and do a nano and we're going to do .ebextensions/ and then we want to do, django.config.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=121)** That's the name that we're giving to this.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=123)** So, ebextensions dot-slash django.config.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=127)** Once we're in there, we need to type out here, option_settings: then we're going to hit Enter and we want to hit Space two times.
>
> **[2:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=140)** And we're going to come over and say, aws: elasticbeanstalk: container: python:.
>
> **[2:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=157)** So, this is saying, okay these are the different settings that we want.
>
> **[2:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=160)** We want to use elasticbeanstalk, which I need to make sure I spell that correctly.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=165)** Elasticbeanstalk, we're going to use a container and we also want to be using Python, kay?
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=173)** So, with all of that we're going to hit Enter.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=175)** On this next line we need to go four spaces over and with this one we're going to type out in all caps, WSGI, capital path, but then lowercase ath, colon space and then we're going to do the name of our project which is portfolio/wsgi.py.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=199)** So this is everything that we need for that Django settings file.
>
> **[3:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=203)** So we're going to go ahead and just do a Control + X, Y there, so that that saves.
>
> **[3:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=209)** Now with this in place, we can go ahead and collect all of our static.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=213)** So we're going to go ahead and say python manage.py collectstatic.
>
> **[3:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=220)** Go ahead and type yes for that.
>
> **[3:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=223)** That collected all the files for us.
>
> **[3:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=224)** Now we can deactivate out of our virtual environment.
>
> **[3:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=231)** And once we've done that now we're going to go ahead and actually create an application on AWS, and again we're doing this all via the command line.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=239)** AWS makes that very simple for us.
>
> **[4:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=242)** So we're going to say eb which is the new command line tool that we installed.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=247)** Eb init space dash lowercase p, python-3.6, we're going to use Python 3.6.
>
> **[4:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=258)** And we're going to give a name to our project.
>
> **[4:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=260)** Let's go ahead and call it, portfolio-aws.
>
> **[4:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=266)** So we'll go ahead and hit Enter on this.
>
> **[4:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=270)** Okay, it's going to ask us to pick a region.
>
> **[4:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=272)** I'd go ahead and just go with whatever the default is.
>
> **[4:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=275)** So in this it's saying I should put this in Oregon.
>
> **[4:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=277)** That sounds good, I'll go ahead and do three for that.
>
> **[4:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=280)** Then it's going to ask me for some information and so we need to go to our AWS account to go get this.
>
> **[4:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=287)** So let's go ahead and move over to AWS.
>
> **[4:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=290)** Go back to our management console here.
>
> **[4:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=293)** So we're going to go ahead and click on our username up here.
>
> **[4:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=296)** Mine is NickAWS, and with this, we need to go to our security.
>
> **[5:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=301)** So, click on my security credentials.
>
> **[5:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=306)** From there we need to get to our security keys.
>
> **[5:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=309)** Let's do continue to security credentials here.
>
> **[5:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=312)** Then I need to go ahead and get to my access keys.
>
> **[5:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=316)** So inside of here we're going to go to access keys and we need to create a new access key.
>
> **[5:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=323)** And click on the Show Access Key, and we're going to copy first this access key ID.
>
> **[5:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=329)** Go back to our terminal, paste that in.
>
> **[5:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=332)** It's going to now ask for the secret, so go back, grab the secret.
>
> **[5:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=338)** Make sure I select everything, including that little plus at the end.
>
> **[5:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=343)** I'll past that in.
>
> **[5:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=345)** And with this it'll now go through and start creating that application on AWS.
>
> **[5:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-to-aws?u=76281980&t=352)** This is a good place for us to stop here but this is the start of being able to upload our project into AWS.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (10), pip (5), python (5), ls (3), make (3)
> **Code Keywords:** let (6), this. (4), type, (1), static (1), this, (1)
> **Env Vars:** aws (8), url (1), wsgi (1)
> **File Paths:** requirements.txt (2), django.config (2), portfolio/wsgi.py (1), manage.py (1)
> **UI Navigation:** go to (3), click on (3)
> **Tools:** terminal (2), command line (2)
> **Versions:** 3.6 (1), python 3 (1)
> **Cross-References:** go back to (2)

#### Testing your site
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=0)** - [Instructor] Even though we have created an application on AWS, we have not yet deployed our project.
>
> **[0:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=6)** Now in order for that to happen, we have to initialize our project to be an Elastic Beanstalk project.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=12)** So in order to do that, we're going to type eb, which is short for Elastic Beanstalk, and then we're going to say init.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=19)** Now with this, it's going to ask us some questions, it's going to say what region do you want, the default's three, that sounds fine to me, Oregon seems like a good place, we'll go ahead and select that.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=29)** It's going to ask you which application you would like to use, let's use the one that we just created, the portfolio-aws.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=35)** It's going to say, looks like you're using Python, yes, let's go ahead and use version 3.6, we'll go ahead and use that.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=43)** Do you want to set up SSH for your instances, go ahead and say yes to that, it's going to ask for the name of a key-pair, you can use the default aws-eb, that's totally fine.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=55)** And when it goes through if it asks you for a password go ahead and create a password that you'll be able to remember and get to, and something that someone else couldn't guess or else you know they could add things to your Amazon instance.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=68)** With all of that in place, we need to go ahead and use another Beanstalk command.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=72)** We're going to say eb create and then we have to make a name for our environment.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=78)** So I'm going to call this django-env.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=82)** Go ahead and hit enter there, and this is going to take about five minutes 'cause essentially what's going on here is it's taking all the code that we have in our project here, and it's uploading it into AWS and it's spinning up all the appropriate resources here.
>
> **[1:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=99)** So you can see it's up and running and doing a lot of different things here.
>
> **[1:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=103)** So we'll go ahead and give it the time that it needs to finish and then we'll come back and move forward.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=110)** Now, once that this is finished, we can type eb status and this is going to give us some information about the deployment that just happened.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=119)** The main thing that we're really focused in is this CNAME right here.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=123)** This is the URL where our project is being hosted at.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=127)** So we want to go ahead and copy this, and we're going to add this to our settings file to say that this is going to be an acceptable allowed host.
>
> **[2:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=135)** So let's go ahead and do a nano, want to get to our portfolio, slash settings, 'kay.
>
> **[2:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=142)** And as we go into here, we're going to go into our allowed hosts.
>
> **[2:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=147)** So inside of single quotes, we're going to do one single quote, paste in that URL, and that.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=152)** Now this is another situation where if you'd like to have your own custom URL at the end of this, this is the appropriate time to add that.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=159)** So, if you have your own URL, if you don't you can just lave it like this, exit, it's going to be fine, but if you do, you're going to do comma, single quote, in my case my URL is nickwalter.info, that's a domain that I have.
>
> **[2:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=172)** I'm also going to do comma www.nickwalter.info, and so I'll have that as well.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=182)** With both of those in place, I'm going to go ahead and do a control X.
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=186)** We'll go ahead and say Y enter.
>
> **[3:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=189)** Now that we have that saved, and with this new change to our project in order to make these live, we're just going to do an eb deploy, and that's going to go push this new code up to the server.
>
> **[3:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=202)** We now have successfully deployed our code.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-your-site?u=76281980&t=205)** We know where it is that it's going to, but there's still a lot of things that we have to set up, like the database, media files, we'll get to those next.

> [!info]- Semantic Content
>
> **Env Vars:** url (5), aws (2), ssh (1), cname (1)
> **CLI Commands:** aws (4), make (2), python (1), ssh (1)
> **Code Keywords:** this, (4), let (3)
> **Prerequisites:** set up (2)
> **Versions:** version 3 (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### Database connection and setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=0)** - The next big step in our deployment is getting our database settings all correct.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=4)** So we need to open up our console, so a quick way to do this is you can just type eb console and it's actually going to open up a browser window with your console here ready to go.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=16)** And once this opens up we need to go ahead and move onto our configuration.
>
> **[0:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=20)** So let's go to Configuration here on the left.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=24)** Once we're inside of here there's a lot of different options but we want to get down here to where it says Database.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=29)** So go to Database and click on Modify.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=35)** Once we're here, we need to go ahead and change our settings.
>
> **[0:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=38)** Now we don't have a snapshot, a snapshot is if you had some sort of backup.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=41)** But we do need to change this to be a postgres database, so we're going to change engine here to be postgres.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=48)** Let us do it's settings.
>
> **[0:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=49)** Keep everything here default, you can change the size if you think you're really going to need bigger, but keep this at micro, that's going to be the smallest size that we can go with this.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=59)** But then go ahead and create a username and password for this.
>
> **[1:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=63)** I'm going to go ahead and say portfoliouser, and for password, I'm going to go ahead and make one of those.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=71)** Now it really honestly doesn't matter too much what your username or password is because we're actually going to use AWS to just fill that in for us.
>
> **[1:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=80)** It's going to be really nice there.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=82)** But go ahead and choose whatever that is.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=84)** Leave everything else here default and we'll just go ahead and apply that.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=89)** So once we have that done, it's going to be creating that there for us.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=93)** We're going to move back to our terminal, and we're going to edit our settings file one more time.
>
> **[1:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=97)** So go back do that nano portfolio/settings, and inside of here, first let's go ahead and set our debug equal to false.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=107)** Kay, we've got capital False right there.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=110)** And then let's go ahead and move down to our databases, where we'll be working with this.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=116)** So for our database here, we've just got to configure a few different things and what we're going to do here is instead of name just listing out portfoliodb, instead what we're going to use is environments from Amazon's instance variables.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=130)** And so what we're going to type here is os.environ,
>
> **[2:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=140)** the environment, and what we're going to do is our square brackets here, and inside of here we're going to type out, all caps, RDS_DB_NAME.
>
> **[2:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=155)** And we'll do our ending single quote there.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=156)** And so essentially what we've said is, the name of the database should be whatever the operating system's RDS_DB_NAME is equal to.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=166)** And so that way, we don't have to put these in here, we can save all those settings to be in our console that we just saw over there, and it's not like we have to worry about these being exposed, so it's a really nice little useful tool for us.
>
> **[2:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=178)** I'm going to go ahead and copy what we have there so that we can use it for the next line.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=183)** So let's change our user to utilize this is as well.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=187)** So we'll go ahead, paste that in.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=191)** Keep my space there just to keep things consistent.
>
> **[3:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=194)** And for the user, we want to do RDS_USERNAME.
>
> **[3:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=201)** Let's go ahead, same thing for password, we'll get rid of what we have and we will paste in this, but change this value to RDS_PASSWORD.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=213)** Great.
>
> **[3:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=214)** Now for host, you guessed it, we're going to delete, space, paste.
>
> **[3:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=220)** Let's change this to RDS_HOSTNAME.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=226)** Same thing with our port.
>
> **[3:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=229)** Go ahead and paste in what we have, and change this to RDS_PORT.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=234)** Now one special thing that I would note here is that if you still want to be able to, later at some point, be working with your local version here, you know, not have everything be in production, because with these in place, it'd be really hard to debug and test this, we can actually do a neat little thing here where we can, just above this, type out if, and then we'll do inside of single quotes, we're going to do capital RDS_DB_NAME, and that single quote, in os.
>
> **[4:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=269)** And then environ: and then it's going to essentially say, hey, if this exists, if we're inside of an Amazon instance, we'll go ahead and use these settings.
>
> **[4:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=281)** And so we're going to have to make sure that we have the appropriate tabs here, so I'll just do four spaces there, four spaces there.
>
> **[4:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=289)** Do that for each of these guys.
>
> **[4:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=292)** But then if not, then we would want to be able to use our own settings, like use a little local testing development server, so we'll go ahead and just move all of these over by four.
>
> **[5:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=304)** Same thing with that last curly bracket.
>
> **[5:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=307)** Great.
>
> **[5:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=308)** So now that we have all of that in place, we need to have the else part of this statement, to say, hey, if this didn't work out, what is it that you want to go ahead and use?
>
> **[5:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=317)** So in this situation, do our four spaces there, we're going to say all caps, DATABASES is equal to, and we'll do our opening curly bracket, and inside of here, we're going to do 'default' and we'll do the other ending quote there, colon, another curly bracket, all caps 'ENGINE':
>
> **[5:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=346)** this is where want single quote, 'django.db.backends.sqlite3'.
>
> **[5:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=358)** Excellent, do a comma after that.
>
> **[6:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=362)** And then we'll add one more line here to just say what the name should be, and that's just going to be os, make sure we don't have the single quote there, os.path.join, all caps BASE_DIR, and then db.sqlite3.
>
> **[6:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=385)** Great.
>
> **[6:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=386)** So now that we have that all in place, we'll finish that up with an ending curly bracket.
>
> **[6:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=393)** And after that we just need one more for the databases.
>
> **[6:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-connection-and-setup?u=76281980&t=399)** So now that we have those settings in place, let's go ahead and do a Control + X and Y to save that, and now we have the settings there, we're going to have to do one more step to talk about how we can have the proper migrations for this database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (3), this, (3), default, (1), delete (1)
> **Env Vars:** rds_db_name (3), aws (1), rds_username (1), rds_password (1), rds_hostname (1)
> **CLI Commands:** make (3), sqlite3 (2), aws (1)
> **UI Navigation:** go to (2), click on (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)

#### Migrate
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=0)** - [Instructor] So now that we've edited our settings, so that we can connect to our new database, we have to be able to apply some migrations to that database.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=8)** Now this is where Beanstock gets a little bit tricky because we don't have the power to just directly log in and run a command, like Python, Migrate, or Python Create Superuser.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=18)** But we can tell Amazon to do those things for us, on our behalf.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=24)** So lets go head and move back over, into our guide here that we have for AWS.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=29)** Move all the way down, almost to the bottom here, where it's going to talk about creating a database migration file.
>
> **[0:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=36)** Go ahead and just copy what we have here inside of this text break.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=40)** This is essentially saying these are some changes that we want to make.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=43)** Let's go ahead and move back into our terminal.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=47)** And we're going to type out, nano .ebextensions that folder that we created, slash, and we're making a new file, db-migrate.config Okay? So this is our file that we're making, we're saying, hey we want you to run these database commands every time a deploy happens.
>
> **[1:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=67)** So go ahead and paste what it is that you just copied.
>
> **[1:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=69)** We're saying, hey here's that container command.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=71)** We want you to go migrate the database.
>
> **[1:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=73)** That's a great one, right?
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=75)** And then down here below in the options settings, we just have to change one thing.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=78)** Instead of ebdjango, we want this to be portfolio.settings.
>
> **[1:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=85)** So that's, you know, custom to our project.
>
> **[1:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=87)** But in addition to just migrating the database we also want to be able to create a superuser.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=93)** So let's go ahead and just copy what we have here, for the migrate and what not.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=98)** And we'll go ahead and paste this down below.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=101)** Now instead of calling this O1_migrate, we're going to call this O2 and we'll call this, createsuperuser.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=111)** And the command that we want to run here, is a little bit of a long one.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=115)** It's what we want to have happen to make it so that we can create a superuser.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=119)** 'Cause again that's something that you would normally do through the command line.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=123)** What we're going to do here is, echo and then a backslash, and then a double quote, so that we can escape it.
>
> **[2:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=129)** We're going to say from, and this is all lowercase, from django.contrib.auth.models, space.
>
> **[2:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=142)** We want to import User; then we want to say capital User.objects.create_superuser
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=159)** and then in parenthesis we're going to start providing some values for the superuser.
>
> **[2:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=163)** So I think name should be Nick.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=165)** Comma, the email on this should be something just like nick@[zappycode.com](https://zappycode.com).
>
> **[2:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=171)** You've got to provide an email for this user.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=175)** And we've also got to provide a password.
>
> **[2:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=177)** I'm going to do my classic django1234.
>
> **[3:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=181)** Then we're going to do an ending parenthesis there, escape another double quote.
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=186)** Then we're going to do a single straight up line.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=188)** Just hold down shift and hit your backslash there to get that.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=191)** And then we're going to say python manage.py shell.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=197)** So I know that was a really long one but this is essentially another command where we're going to say okay every time this deploys migrate the database and create the superuser so that we can log in.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=207)** So let's go ahead and do control X here, Y to save that.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=210)** With this let's go ahead and do an eb deploy.
>
> **[3:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=215)** We'll go ahead and wait for our deploy to happen.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=221)** Alright so once that is finished, we're going to go ahead and do an eb open.
>
> **[3:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=225)** And what that's going to do is it's going to open up in a new browser window our project so that we can see what it looks like.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=230)** And there it is, there's me.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=233)** The static files are showing.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=234)** If we go to /admin here, we'll be able to log in with that superuser.
>
> **[4:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=241)** So nick, django1234 and look at that we can get into the back end there.
>
> **[4:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=246)** That's great.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=247)** Now one thing I do want to mention is that if we go back to the code that we had just written, right?
>
> **[4:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=251)** When we did nano of the db migrate file, we don't always want to create a superuser.
>
> **[4:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=257)** We just essentially the one time have to sort of prime the pump and then we're good to go.
>
> **[4:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=262)** So I recommend commenting this out.
>
> **[4:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=264)** If you ever need to make a change to your superuser or what not, or make a new one you can.
>
> **[4:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=269)** But I would just put these hashes in front of these three lines so that that's commented out.
>
> **[4:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=274)** And that won't happen.
>
> **[4:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=276)** So let's go ahead and just do control X Y on that.
>
> **[4:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=279)** But, we're at a great place, we can see that our project is running, we're able to create a super user.
>
> **[4:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/migrate?u=76281980&t=286)** The next step for us is going to talk about how we should serve our static and media files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), static (2), break. (1), this, (1), from, (1)
> **CLI Commands:** make (4), python (3), aws (1)
> **File Paths:** db-migrate.config (1), manage.py (1)
> **Tools:** terminal (1), command line (1)
> **Code Identifiers:** create_superuser (1)
> **URLs:** [zappycode.com](https://zappycode.com) (1)
> **Env Vars:** aws (1)
> **Cross-References:** go back to (1)

#### S3 storage setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=0)** - [Instructor] Now our project is up and running on Amazon's Beanstalk and it's looking good.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=5)** If we even went into the admin we could start adding some things via the database however, there's an issue in that any media files that we save are going to be destroyed periodically by Amazon because the way Elastic Beanstalk work it will not hold on to files for us.
>
> **[0:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=21)** So we actually want to store our static and media files using their S3 storage service.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=27)** Now for this we're going to be using the following guide, you can get the URL for that here.
>
> **[0:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=33)** But what we're going to do is set up an S3 storage unit so that we can have our static and media files there.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=40)** Let's go ahead and move over to our AWS console and inside of here we need to go ahead and click on services and get the storage and we want S3.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=48)** Now I just want to mention very quickly that remember when we talked about how complex AWS is, look at all the different services that you can get into and that Amazon provides here.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=59)** Things can get really confusing really quick so that's what I was talking about there.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=64)** But we're going to keep thing's simple, we're going to go to storage in S3 here.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=70)** Once we're here the way that you store things inside of Amazon's S3 is through something called a bucket and you can see there's already been a bucket that's been created for us and that was a part of our deployment.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=81)** But we want to create a new and separate bucket from that and so let's go ahead and hit this create bucket button now we need to create a name for this and this needs to be absolutely unique like no one else has used this before.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=94)** So I'm going to do something like Django dash and I want portfolio dash Nick 'kay but the thing is this has to be globally unique so if you try and do the same name as me it's going to be a little bit different so you could try dash Nick one or maybe instead of Nick doing your own name.
>
> **[1:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=114)** But you need to have a unique name for your bucket here.
>
> **[1:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=118)** So with that in place and trust me if you don't have the unique name Amazon will tell you here and you'll have to pick something else but go ahead and put in that name and we'll just leave all of our settings the same.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=130)** Oh look I've probably already used this before so I'm going to use Nick dash one there to get that so I'll go ahead and hit next.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=139)** So we've got leave everything the same, yes we're going to go ahead and leave all of these things the same go ahead and create that bucket.
>
> **[2:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=149)** Okay so now that we have this new bucket Django portfolio dash Nick one I'm going to click on that.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=156)** Now that we have this I'm going to move over to my permissions we need to make sure that we'll have access and can edit what's inside of this bucket here.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=164)** And the next thing that we need to do is go to our public access settings and we need to edit this.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=170)** So go ahead hit this button and we're going to uncheck all four of these options okay.
>
> **[2:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=177)** And then we'll hit save on that, saying are you sure that this is what you want to do, you're allowing access to this and we're going to say confirm and hit that button there.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=187)** Great.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=188)** So now that we have those settings in place we need to go up here and we need to change our bucket policy so if we hit this bucket policy button, you can see we have space to add something new and this is where we're going to move over to our guide and they have a great example for us about how to get this up and running.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=205)** There's some pieces that are a little bit out of date but I'm going to guide you through what you need.
>
> **[3:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=209)** But copy this chunk of code here that it wants us to add to our permissions so and for our policy.
>
> **[3:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=215)** So go ahead and copy all that.
>
> **[3:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=217)** We're going to move back to our console and we're going to paste that just right in there.
>
> **[3:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=222)** Now the thing that we've got to make sure that we change is here under resource.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=226)** Instead of having example bucket we want it to have the exact name of what ever is up here.
>
> **[3:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=232)** So I'm just going to copy this Django portfolio Nick one, again yours is going to have a different name than mine, it has to be different and I'm just going to go ahead and paste that there.
>
> **[4:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=242)** So make sure that that's all changed and we'll just hit the save button.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=247)** So now that you saved that it's going to give you a little bit of warning, it's like hey you have public access here this means that anybody can get to this but that's okay with us, you know, we're just hosting media files here and static files that anyone should be able to access on our website we're going to be hosting 'em all.
>
> **[4:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=262)** With this in place let's go up here to our services.
>
> **[4:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=267)** We need to go do some permissions now and so we are going to go to IAM here which should be in your history.
>
> **[4:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=274)** If not you should be able to scroll through and find it here under security, identity and compliance.
>
> **[4:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=280)** But we're going to go to IAM, then we want to go to groups, we want to create a new group.
>
> **[4:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=288)** Now you have to give it some sort of name.
>
> **[4:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=289)** I'm going to do mine like Manage Django portfolio dash bucket okay so this is saying, hey I'm making a group that's going to manage my Django portfolio bucket, it's pretty explicit there.
>
> **[5:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=305)** Then with this we need to choose the proper policy that we're looking for.
>
> **[5:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=309)** So we need to search for just type out here Amazon S3 full access okay.
>
> **[5:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=318)** So once you see that go ahead and check the box there.
>
> **[5:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=321)** Then do next step okay we'll go ahead and create that group.
>
> **[5:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=327)** So now that we have this group in place we need to go over to users.
>
> **[5:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=332)** We need to add a user and for a username go ahead and pick some sort of name, I'm going to do something like Django portfolio dash bucket dash user.
>
> **[5:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=347)** With this in place we got to make sure that we have programmatic access so check that box there.
>
> **[5:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=353)** But then just go ahead and hit permissions next.
>
> **[5:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=356)** It's going to say do you want to add this to a group and yes we want to add it to that group that we just created, the manage Django portfolio bucket.
>
> **[6:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=364)** Next we don't need to add any tags.
>
> **[6:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=366)** We're going to review this and bam, create this new user.
>
> **[6:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=371)** So with this in place it's got some information for us.
>
> **[6:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=374)** Let's go ahead and download the CSV here.
>
> **[6:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=377)** We're going to have to come back and use this in just a minute so I want to make sure that we have access to it.
>
> **[6:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/s3-storage-setup?u=76281980&t=381)** So go ahead and hit that download just so that you have access to the information that's going to be there and now we can move on to the next step which is actually adding our static and media files to this bucket that we just created.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), let (4), public (2), this. (1), for. (1)
> **CLI Commands:** make (5), aws (2), find (1)
> **Env Vars:** aws (2), iam (2), url (1), csv (1)
> **UI Navigation:** go to (4), click on (2)
> **Prerequisites:** set up (1), you need to have (1)
> **Cross-References:** we talked about (1)
> **Tools:** aws console (1)
> **Exercise Files:** download the (1)

#### Static and media files
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=2)** let's make the modifications to our project, so that we can write things to that bucket, and also read things back from that bucket.
>
> **[0:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=10)** So, in order to do this let's go ahead and first add a few different things that will help us be able to access this bucket, and so we're going to get back into our virtual environment, we'll say source../eb-virt/bin/activate.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=29)** we need to install a few things via pip so we're going to say pip, install, and we want django-storages, again these are different chunks of code that our going to help us read and write from S3, and also boto3.
>
> **[0:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=44)** Okay so go ahead and hit enter on that, get all those installed.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=48)** Now that we've added some new things via pip, we need to make sure they're in our requirements.txt file, so we're going to go ahead and do a pip freeze, and move this into the requirements.txt file.
>
> **[1:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=63)** So we'll go ahead and hit enter on that.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=66)** Now that that's been fixed the next thing that we need to do is move over into our settings.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=70)** So let's go ahead and use Nano to open up portfolio/settings.pie.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=77)** Then the inside of here, first thing that we've got to do is add a new app to our projects, we're going to go to our installed apps, right here at the end we're going to add a new app, and it's going to be called storages.
>
> **[1:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=89)** That's what we just installed via pip, so we have storages there, let's put our trailing comma there.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=96)** Next, we need to add several different variables that are going to hold pieces of information about how to access this bucket like it's name, password, those types of things.
>
> **[1:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=106)** What we're going to do is move back over to our guide, and if we scroll down here, you'll want to scroll down till we see some big text, here it is in all caps here these are the different things that we're going to have to set inside of our project.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=121)** So let's go ahead and copy this, we're going to come back to our code and paste this in.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=127)** Now, with this in place the first thing you can see that we have here is the bucket name, now if you don't remember this off the top of your head let's go back to our console.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=137)** You need to go to Amazon S3, and once you're there this is the name that we need to grab so if you go ahead and click on this, that'll bring it up and we can just go ahead and copy this name here, come back to our project, and we'll paste it inside of the single quotes.
>
> **[2:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=157)** Now the next thing that we need is the region name, a cool quick way to find the region name is if we go back to having clicked on our bucket, you can see here up at the top it says django/portfolio/nick but then you can see region is equal to, and here mine is us-west-2.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=173)** Now yours might be different, so make sure you have the appropriate one, but go ahead and grab whatever yours is and we'll paste it here inside of the string.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=182)** Now the next thing that we need to go grab is the access key ID, and the secret.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=187)** Now these came as part of that CSV file that we downloaded, so let's go ahead and go to our downloads, and open up this CSV file.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=197)** Now here inside of this file you can see we have the access key ID, and the access key secret.
>
> **[3:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=203)** So I'm going to go ahead and first select just the regular key, come back to our project, and we'll delete all those x's, paste that in, and then we'll do the same thing except this time we'll go ahead and grab the secret.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=221)** So I'll go grab the secret, copy all of that, and now we have to replace all these y's, with that information.
>
> **[3:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=231)** Now that we've got that in, we're going to go back to that guide, and grab one more line here, that's going to be this custom domain, so let's go ahead and copy this, come back, paste that in, and now we have to add a few custom things of our own.
>
> **[4:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=248)** So one of these is going to be AWS_DEFAULT_ACL, set that equal to capital none.
>
> **[4:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=257)** And then we need to add some other pieces of information.
>
> **[4:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=261)** Now what we're going to add now is to say where it is that we want to store these files, and how they're going to be stored.
>
> **[4:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=268)** So first let's worry about our static files.
>
> **[4:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=280)** that we want to store inside of our buckets, so we should just leave that all lowercase static.
>
> **[4:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=286)** Next we need to say how this is going to be stored, so again we're going to do STATICFILES_ except this time we're going to say storage, and we're going to set this equal to inside of single quotes custom_storages.StaticStorage.
>
> **[5:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=311)** And we'll do a single quote there.
>
> **[5:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=312)** Now we need to do the same thing for media files so let's go ahead and copy these two lines, and we'll go ahead and paste them down below, and then we need to change them to be about media files so here instead of all caps, static files we'll do media files location, and then instead of static, you guessed it we want this to be media.
>
> **[5:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=335)** And then here instead of static files storage we're going to delete this all the way back to say we want this to be default_file singular storage, and instead of custom storages.staticstorages it's going to be custom storages.mediastorage.
>
> **[5:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=357)** So there's one more change that we have to make here and that's that there was a misspelling on my database name earlier.
>
> **[6:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=363)** So here inside of the non production database, I have default misspelled, so I just need to switch the a and the u there.
>
> **[6:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=371)** And with that that's all the changes for our settings.pie so we'll go ahead and say yes that we want to save that.
>
> **[6:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=378)** Now we have to make a new file called custom storages that says how it is we're going to use this boto3 app that we installed.
>
> **[6:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=385)** So we're going to say nano, and then we want to do custom_storages.pie.
>
> **[6:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=395)** We'll open up this file, and we're going to go back to our guide, scroll down a little bit here, and copy this code that tells us how we're going to make our two classes to specify where our file should be stored.
>
> **[6:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=408)** So we'll paste this in, and everything looks good for static but we also want to do this for media, so let's go ahead and copy this down below, make a new class and rather than this being called static storage, we're going to have this be called media storage, okay?
>
> **[7:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=426)** And then we also have to change this instead of static files location, we want this to be media all caps media files location.
>
> **[7:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=436)** So the information that we have here is the same information that we had just put inside of our settings file, so we're going to CTRL X and yes out of there.
>
> **[7:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=446)** Now with this new information this means that we're ready to actually move things up to the bucket, and to really prove that this can work, we're going to type out python.manage.pie, collect static and when we run this it will actually push it directly to our bucket.
>
> **[7:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=464)** So if we go ahead and hit enter here it says do you want to do this I'll say yes.
>
> **[7:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=468)** Now this will take a little bit of time because instead of just moving the files here locally on our computer it's actually pushing these live to our Amazon bucket, so that's why you see a little bit of a delay here when usually it's almost instantaneous that you know aggregates all of our static files together.
>
> **[8:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=485)** So we'll go ahead and give this just a second here, but we'll be able to prove that this is working by going to our bucket and seeing what we have there.
>
> **[8:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=494)** So we'll go ahead and give this a second.
>
> **[8:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=497)** Alright so we have our 141 static files copied, now let's go ahead and do an EB deploy, and this is going to send our code up to the server with this new information, we'll go ahead and wait for this to work.
>
> **[8:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=513)** Now that that deployments done, we'll do an EB open.
>
> **[8:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=518)** So here comes our site look there's the same me but something I do want to mention if you right click this picture and say copy image address, paste this into our bar you can see this is hosted in our Amazon bucket Django portfolio Nick one S3, isn't that sweet?
>
> **[8:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=535)** And so now if we go to, let's reload the page here so I can get that URL back if I go to /admin, and looks like I'm already logged in and if not you can just you know login via r Nick django one two three four.
>
> **[9:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=552)** Come in and say guess what I want to add a new job, let's go ahead and use this app picture, and I'll say an app I made same text as we'd use before.
>
> **[9:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=564)** Now we can go back to our home page, and look at that we see this beautiful image and let's guess where this image is stored.
>
> **[9:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=571)** We copy the address there, look at that it's also inside of our bucket.
>
> **[9:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=576)** You can see the same files if you reload your bucket here, You can see the same files if you reload your bucket here, you can see look we have our media folder, you can see look we have our media folder, we have a static folder, we have a static folder, everything that we need here we're looking great.
>
> **[9:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files?u=76281980&t=584)** everything that we need here we're looking great.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), static (13), this, (3), delete (2), switch (1)
> **CLI Commands:** make (7), pip (5), find (1), python (1)
> **UI Navigation:** go to (5), scroll down (3), click on (1)
> **Env Vars:** csv (2), aws_default_acl (1), staticfiles_ (1), ctrl (1), url (1)
> **Cross-References:** go back to (5)
> **Code Identifiers:** custom_storages (2), default_file (1)
> **Prerequisites:** install (2), make sure you have (1)
> **File Paths:** requirements.txt (2)

#### Custom URL
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=0)** - [Narrator] Just like with Digital Ocean, we have an awesome website that's fully functional, running in production, but this is the worst URL.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=8)** Try describing this to your friend to go quickly visit your website.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=12)** It's not going to happen.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=14)** If you'd like to use a custom domain name with your AWS deployment, there's a great guide for this.
>
> **[0:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=20)** You can find the URL for that here.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=23)** This'll walk you through everything that you need but I'm going to take you through and show you what the essential pieces are.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=30)** First thing that we have to do, move into your console and we want to go ahead and get into something called Route 53.
>
> **[0:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=37)** Now, if you ever have trouble because there are so many things that you can't scroll and find what you're looking for, you can always just search here in the bar for Route 53.
>
> **[0:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=45)** Look at that, pops up just like that.
>
> **[0:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=49)** Once we're inside of here, what we need to do is use our DNS management.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=55)** We're going to go down to our DNS management and say, get started now and what we want to do is use a hosted zone that's already picked for us here but we want to do, create hosted zone, and from here, what we want to do is we want to create our own domain name.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=71)** Let's go ahead and do, create hosted zone.
>
> **[1:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=74)** The domain name that we're looking for in this case is nickwalter.info.
>
> **[1:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=79)** Okay, and we'll just go ahead and create that.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=84)** That's steps number one there.
>
> **[1:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=85)** Now, with this, the next thing that we need to do is we need to create a new record set.
>
> **[1:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=90)** So you can see we have this new button here, create record set, so I'm going to hit this button.
>
> **[1:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=94)** The name that we're looking for on this one is just to leave it blank.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=98)** We want the type to be A, we want to say yes, on the alias here and then in the alias, what we want to do is drop down and find our beanstalk so don't do the balancers or anything like that.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=111)** You want to go to beanstalk environments and choose your web app in the proper address for it is going to be the exact same thing that you see here.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=121)** So with that selected, we're going to go ahead and hit create.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=125)** That's one record set.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=127)** Now we have to make a record set for the www so hit create record set again.
>
> **[2:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=132)** We're going to do www and then type, leave that as A.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=137)** Alias, yes, same thing again.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=139)** We want to scroll down until we find the proper beanstalk environment.
>
> **[2:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=144)** Hit create.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=145)** With all of this in place, you may be wondering, okay, now how do I connect this to wherever I have my domain hosted?
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=152)** Well the thing that you need to do is, for instance, I have my domain name over in Google Domains.
>
> **[2:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=157)** Need to go to your DNS and use the custom name servers that Route 53 is providing for us.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=164)** Right now I'm using defaults, Google's default name servers so we need to collect, use custom name servers and I'm going to go back to Route 53 here and I'm going to grab each of these that are listed here.
>
> **[2:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=176)** I'm going to go ahead and start here.
>
> **[2:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=179)** Just copy this and paste.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=182)** That plus button.
>
> **[3:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=184)** Again, depending on where you host your domain name, this is going to look a little bit different but the idea is still the same.
>
> **[3:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=192)** You got to take all four of these, put these in and grab the last one here.
>
> **[3:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=201)** And then we'll go ahead and hit save.
>
> **[3:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=204)** Now with that in place you got to make sure you don't have any other DNS settings set up here, for example, we have stuff leftover from our Digital Ocean deployment so we want to go ahead and delete these records that we have.
>
> **[3:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=217)** Essentially, what we've done here is we've said, these records wouldn't have even applied.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=221)** It said, just pass everything forward to the following name servers which then, Amazon's Route 53 is going to handle that and say, okay, if someone comes in with an A record, we'll send them to the site.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=233)** If they come in with the www, again, A record will send them to this site.
>
> **[3:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=237)** Now the reason we couldn't just directly point this is, is because, domain registers usually don't allow you to point to a URL where there's actually words in there.
>
> **[4:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=246)** They'll allow IP addresses but not words so this is kind of Amazon's way to work around this and one thing to keep in note is this means your site is even that much more in Amazon's control because now they control your domain name, essentially, right, we can always point away from their name servers but that is a point that you sort of lose when you move over to AWS like this.
>
> **[4:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=269)** There you have it.
>
> **[4:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=270)** Deploying your app via Amazon's beanstalk.
>
> **[4:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url?u=76281980&t=273)** Again, if you ever wanted to, you can go to your services here, select EC2 and create a virtual machine just like you did with Digital Ocean but that is completely up to you.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), url (3), aws (2), ec2 (1)
> **CLI Commands:** find (4), aws (2), make (2)
> **Code Keywords:** this. (2), for, (1), let (1), this, (1), type, (1)
> **Analogies:** just like (3), for instance (1), for example (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 4. 3. Heroku

#### Heroku account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=0)** - Now let's talk about how we can deploy our Django project using Heroku, and let me tell you, Heroku is a real blast.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=7)** You'll see it's pretty different than any of our other deployments.
>
> **[0:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=10)** It has some similarities to AWS, but to me, it is so fun and efficient, the way that they work.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=17)** Step number one is we've got to create a new account with Heroku.
>
> **[0:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=22)** So let's go ahead and hit the sign up button.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=24)** [Heroku.com](https://Heroku.com) is how you get there, and we'll go ahead and fill out our information.
>
> **[0:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=50)** Once you've signed up, you'll have to go confirm your email, then it will ask you for a password.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=64)** And with that, that's all you need.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=66)** So go ahead, click that button, "Click here to proceed."
>
> **[1:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=69)** If you can get to your main dashboard, that means that everything's good to go.
>
> **[1:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=74)** Now, we have a document that we're going to be basing a lot of our deployment off of, is this Getting Started with Heroku with Python.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=81)** Inside of this, you can get the URL here, but as part of this, is we need download Heroku's command line interface.
>
> **[1:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=90)** So if we go ahead and click "I'm ready to start," we can download this, choose your platform.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=96)** I'm going to do macOS install.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=98)** Download the installer, and then just go through the install process.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=110)** Now that that's successful, we can close that, can move our installer to the trash.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=115)** Now let's go ahead and move into our terminal.
>
> **[1:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=118)** We're going to type "heroku login," and this is going to bring up our ability to login via the browser, so hit any key.
>
> **[2:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=126)** That's going to pop up our browser, and we just say we're going to log in to the command line interface.
>
> **[2:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=132)** And that should be good, so now we can move back into our terminal, and look, it shows that we've logged in under the appropriate email address.
>
> **[2:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=140)** With this in place, let's go back to our project, and I'm going to move onto my desktop.
>
> **[2:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=148)** Make sure that if you've edited your project before with Amazon, that you're starting with a fresh take here.
>
> **[2:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=154)** So I've got my portfolio project right there, we need to make a new virtual environment.
>
> **[2:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=158)** So I'm going to say "virtualenv venv."
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=164)** So we're now creating a new virtual environment, then we'll go ahead and move into that.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=170)** Do that with a "source venv/bin/activate."
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=175)** There you can see we're now inside of our virtual environment, and with that, let's go ahead and move into portfolio-project, and then we're going to install some of the packages that we need via pip.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=187)** So we'll do "pip install," and we want to go grab, "django," we also want to get "pillow," we want to get "psycopg2-binary,"
>
> **[3:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=206)** and we also want "gunicorn."
>
> **[3:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=209)** Okay, so we'll let pip go ahead and grab those for us.
>
> **[3:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=214)** And similar to AWS, we need to get everything we install via pip into a requirements.txt.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=221)** So then, we'll do a "pip freeze" with an arrow, saying "Put this in a file," ".txt, requirements.txt."
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=233)** Let's do an LS, make sure we now have that new file, great.
>
> **[3:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=237)** And with that, we can go ahead and deactivate out of our virtual environment.
>
> **[4:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=241)** Really, we just created this so that we could say, "These are the pip files that we want."
>
> **[4:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/heroku-account?u=76281980&t=245)** And it won't get distracted with whatever pip files we currently have here inside of our terminal.

> [!info]- Semantic Content
>
> **CLI Commands:** pip (7), make (3), aws (2), python (1), ls (1)
> **Code Keywords:** let (8), this, (3), interface (2)
> **Prerequisites:** install (5), getting started (1)
> **Tools:** terminal (3), command line (2)
> **Env Vars:** aws (2), url (1)
> **File Paths:** requirements.txt (2)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** macos (1)

#### Deploying on Heroku
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=0)** - [Instructor] Heroku is heavily integrated with Git, meaning that if we're ever going to push something or deploy with Heroku, we have to have a project, that is a Git project.
>
> **[0:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=10)** So, what we're going to do inside of our project here, do an ls.
>
> **[0:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=13)** Make sure you can see your manage dot py.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=16)** That means you're in the correct location.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=18)** We're going to go ahead and type out git init.
>
> **[0:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=21)** This is going to initialize our repository.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=23)** Now that we have that, let's go ahead and add all our code into our Git.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=28)** Say Git add dash A, and we'll do a a Git commit dash m.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=35)** We'll say first commit.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=39)** So, now, we have a Git repository, and we've added all of our code and committed that.
>
> **[0:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=45)** And then, what we're going to do is now create our Heroku app.
>
> **[0:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=49)** And this is what's so amazing about all of this.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=51)** All we have to do is just type Heroku create.
>
> **[0:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=56)** And look at that, that cool, little animation.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=58)** It says it's going to go out and create this.
>
> **[1:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=60)** And then, we just say Git push Heroku master.
>
> **[1:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=65)** And this is going to go out and push our code to Heroku.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=68)** In fact, what they did is they added a Git remote branch to our Git project, and it's out running, doing all these custom things.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=75)** doing all these custom things.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=77)** So, while this is out running and deploying our project, So, while this is out running and deploying our project, all these great things, let's go ahead all these great things, let's go ahead and edit our settings a little bit, and edit our settings a little bit, 'cause there's a few things that we have to change.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=84)** 'cause there's a few things that we have to change.
>
> **[1:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=86)** So, in a new tab, while this is running, So, in a new tab, while this is running, we can go ahead and should be in the same directory.
>
> **[1:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=88)** we can go ahead and should be in the same directory.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=91)** If not, make sure you get there, If not, make sure you get there, 'cause what we need to do is edit our settings file.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=93)** 'cause what we need to do is edit our settings file.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=96)** So, we're going to say nano portfolio slash settings.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=96)** So, we're going to say nano portfolio slash settings.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=101)** So, the first thing that we want to change So, the first thing that we want to change is the debug, set it equal to false.
>
> **[1:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=102)** is the debug, set it equal to false.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=105)** We're in a production environment, We're in a production environment, so, let's go ahead and change that.
>
> **[1:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=106)** so, let's go ahead and change that.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=108)** Say debug is equal to false, and then, allowed hosts.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=108)** Say debug is equal to false, and then, allowed hosts.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=111)** Where can people access the site?
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=111)** Where can people access the site?
>
> **[1:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=114)** Well, we'd want to say wherever our Heroku sites Well, we'd want to say wherever our Heroku sites going to be listed and a custom domain, if we have one.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=116)** going to be listed and a custom domain, if we have one.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=119)** So, if we go back to our other tab here, So, if we go back to our other tab here, and we scroll up to the top, you can see, and we scroll up to the top, you can see, here they showed us where we can access our project, here they showed us where we can access our project, this infinite earth.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=127)** this infinite earth.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=128)** Yours is probably going to have a different name.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=128)** Yours is probably going to have a different name.
>
> **[2:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=130)** Heroku loves to choose these random phrases, Heroku loves to choose these random phrases, that it puts together, but I'm that it puts together, but I'm going to copy this infinite earth Heroku app.
>
> **[2:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=134)** going to copy this infinite earth Heroku app.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=136)** Don't get the ending slash.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=136)** Don't get the ending slash.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=137)** Don't get the http or those slashes.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=137)** Don't get the http or those slashes.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=139)** Just grab this here.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=139)** Just grab this here.
>
> **[2:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=141)** Then, we're going to come back, and I'm Then, we're going to come back, and I'm going to do a single quote, paste that in.
>
> **[2:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=143)** going to do a single quote, paste that in.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=145)** If you have a custom domain that you want to add, If you have a custom domain that you want to add, this would be the time for it, this would be the time for it, so you'd hit comma, single quote, so you'd hit comma, single quote, and add like a Nick Walter dot info, and add like a Nick Walter dot info, or whatever your domain name is.
>
> **[2:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=154)** or whatever your domain name is.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=156)** You also want to add www, do another comma, You also want to add www, do another comma, with another string, www dot Nick Walter dot info, with another string, www dot Nick Walter dot info, and end that string.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=165)** and end that string.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=166)** Now, if you don't have a custom domain, Now, if you don't have a custom domain, you can just have this list hold that one string.
>
> **[2:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=168)** you can just have this list hold that one string.
>
> **[2:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=171)** But if you have one, go ahead and put it in, But if you have one, go ahead and put it in, its www version here inside of the list.
>
> **[2:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=174)** its www version here inside of the list.
>
> **[2:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=178)** So, with those changes in place, So, with those changes in place, let's go ahead and save this, and let's go ahead and save this, and get out with a control x, and enter.
>
> **[3:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=181)** get out with a control x, and enter.
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=186)** Next thing that we need to do, Next thing that we need to do, is create something called a Procfile.
>
> **[3:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=187)** is create something called a Procfile.
>
> **[3:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=189)** So, we're going to type out nano capital, So, we're going to type out nano capital, make sure it's capital, Procfile, all one word.
>
> **[3:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=191)** make sure it's capital, Procfile, all one word.
>
> **[3:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=195)** Hit enter on that, and we need Hit enter on that, and we need to write two lines of code here.
>
> **[3:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=197)** to write two lines of code here.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=199)** So, the first one is release colon, So, the first one is release colon, space Python manage, space Python manage, dot py migrate.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=207)** dot py migrate.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=210)** So, this is saying anytime we release new code, So, this is saying anytime we release new code, we want you to migrate our database.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=213)** we want you to migrate our database.
>
> **[3:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=215)** The next thing is what kind of project this is going to be.
>
> **[3:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=215)** The next thing is what kind of project this is going to be.
>
> **[3:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=219)** It's a web project, and we are going to use gunicorn, It's a web project, and we are going to use gunicorn, gunicorn, and look for, gunicorn, and look for, portfolio dot wsgi.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=226)** portfolio dot wsgi.
>
> **[3:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=231)** So, that's the saying how we want So, that's the saying how we want to run this via what web server.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=233)** to run this via what web server.
>
> **[3:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=235)** Go ahead and do control x, yes on that.
>
> **[3:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=235)** Go ahead and do control x, yes on that.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=239)** We need to create one more file.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=239)** We need to create one more file.
>
> **[4:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=240)** We're going to say nano, all lower case, We're going to say nano, all lower case, runtime dot txt, and this runtime dot txt, and this is going to say what version of Python we want to use.
>
> **[4:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=246)** is going to say what version of Python we want to use.
>
> **[4:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=249)** So, let's go ahead and say Python dash, So, let's go ahead and say Python dash, three point seven point one.
>
> **[4:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=253)** three point seven point one.
>
> **[4:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=255)** You can choose a more, newer release later.
>
> **[4:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=255)** You can choose a more, newer release later.
>
> **[4:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=257)** It's up to you about how you want to handle that, It's up to you about how you want to handle that, but choose a version of Python that you want, but choose a version of Python that you want, and then, do a control x, say yes.
>
> **[4:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=261)** and then, do a control x, say yes.
>
> **[4:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=264)** Now, with Heroku, since it uses Git, Now, with Heroku, since it uses Git, anytime we make changes like we just did with the settings, anytime we make changes like we just did with the settings, the Procfile, the runtime, we the Procfile, the runtime, we have to add these into a commit.
>
> **[4:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=273)** have to add these into a commit.
>
> **[4:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=274)** So, we have to say Git add dash capital A.
>
> **[4:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=274)** So, we have to say Git add dash capital A.
>
> **[4:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=279)** That adds everything, then we have to commit it.
>
> **[4:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=279)** That adds everything, then we have to commit it.
>
> **[4:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=282)** And we'll make a commit called some changes, And we'll make a commit called some changes, and we'll go ahead and do that committing, great.
>
> **[4:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=287)** and we'll go ahead and do that committing, great.
>
> **[4:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=291)** So, now, with this in place, let's go ahead and push this.
>
> **[4:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=291)** So, now, with this in place, let's go ahead and push this.
>
> **[4:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=294)** We're going to do Git push Heroku master.
>
> **[4:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=294)** We're going to do Git push Heroku master.
>
> **[4:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=299)** Okay, and this is going to take our code, Okay, and this is going to take our code, and throw it up, and each time, we do this, and throw it up, and each time, we do this, it moves our code over to Heroku, it moves our code over to Heroku, but also does all these things in the back of, But also does all these things in the background but also does all these things in the back of, like doing that migrate and setting up the proper web server like doing that migrate, and like doing that migrate, and setting up the proper web server setting up the proper web server in order to make this all work.
>
> **[5:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=311)** in order to make this all work.
>
> **[5:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=311)** in order to make this all work.
>
> **[5:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=313)** So, we'll go ahead and give this a second to finish up here.
>
> **[5:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=313)** So we'll go ahead and give this a second to finish up here.
>
> **[5:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=313)** So, we'll go ahead and give this a second to finish up here.
>
> **[5:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=319)** Great, now, once this is finished running, Great, now, once this is finished running, Great, now once this is finished running we have to tell Heroku that we we have to tell Heroku that we want to we have to tell Heroku that we want to have a web server running.
>
> **[5:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=322)** have a web server running and we only have to do this once want to have a web server running.
>
> **[5:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=324)** And we only have to do this once, And we only have to do this once, but just type out Heroku ps colon, but just type out Heroku ps colon scale but just type out Heroku ps colon, scale, and then we want web equal to one, scale, and then we want web equal to one, and then we want web equal to one meaning we want one web server running, meaning we want one web server running, meaning we want one web server running.
>
> **[5:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=336)** and you can scale that up with two, You can scale that up with two, three, four if you need to and you can scale that up with two, three four, if you need to, three four, if you need to, but you can see, that's finished now.
>
> **[5:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=339)** but you can see that's finished.
>
> **[5:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=339)** but you can see, that's finished now.
>
> **[5:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=340)** Now just type out Heroku open.
>
> **[5:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=341)** Jut type out Heroku open, Jut type out Heroku open, and just like that, it's going to open up our project, And just like that it's going to open up our project and just like that, it's going to open up our project, which brings us a nice application there.
>
> **[5:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=346)** which brings us a nice application error which brings us a nice application there.
>
> **[5:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=349)** And that is because we don't have our database set up.
>
> **[5:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=349)** and that is because we don't have our database set up.
>
> **[5:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=349)** And that is because we don't have our database set up.
>
> **[5:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=352)** So, that's the thing we'll focus on next.
>
> **[5:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=352)** So that's the thing we'll focus on next.
>
> **[5:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/deploying-on-heroku?u=76281980&t=352)** So, that's the thing we'll focus on next.

> [!info]- Semantic Content
>
> **CLI Commands:** git (16), make (12), python (8), ls (1)
> **Code Keywords:** let (11), this. (4), this, (4), for, (2), case, (2)
> **Analogies:** just like (3)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Database on Heroku
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=0)** - [Instructor] The next thing that we need to do is
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=0)** - [Instructor] The next thing that we need to do is setup our database so that we can properly setup our database so that we can properly connect to it and not get this nasty application error.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=4)** connect to it and not get this nasty application error.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=7)** So, let's go ahead and move to [heroku.com](https://heroku.com) So, let's go ahead and move to [heroku.com](https://heroku.com) so that we can get to our dashboard.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=11)** so that we can get to our dashboard.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=14)** Go ahead and clear out some space for us here.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=14)** Go ahead and clear out some space for us here.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=17)** Here you can see our project that we created, Here you can see our project that we created, it picked this name for us, infinite-earth, it picked this name for us, infinite-earth, yours is probably going to be different, yours is probably going to be different, but go ahead and click on that.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=24)** but go ahead and click on that.
>
> **[0:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=26)** And then what we need to do to get to our database And then what we need to do to get to our database is we need to first go to our add-ons.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=29)** is we need to first go to our add-ons.
>
> **[0:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=33)** So here you can see installed add-ons, So here you can see installed add-ons, we're going to click this configured add-ons button.
>
> **[0:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=35)** we're going to click this configured add-ons button.
>
> **[0:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=38)** Once we have that, we need to move to Heroku Postgres, Once we have that, we need to move to Heroku Postgres, go ahead and click on that.
>
> **[0:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=42)** go ahead and click on that.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=47)** All right, once this is available, All right, once this is available, we need to get to its settings, we need to get to its settings, so go ahead and click on settings.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=51)** so go ahead and click on settings.
>
> **[0:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=53)** And then what we need to do is And then what we need to do is get to the database credentials, get to the database credentials, so we're going to say view credentials.
>
> **[0:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=57)** so we're going to say view credentials.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=59)** So now here's all this information about how it is So now here's all this information about how it is that we can log into our database.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=62)** that we can log into our database.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=64)** And so, we need to go grab this information And so, we need to go grab this information and bring it back into our settings file.
>
> **[1:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=66)** and bring it back into our settings file.
>
> **[1:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=69)** Let's go ahead and start first with the name Let's go ahead and start first with the name of our database which, in this case, of our database which, in this case, is just right here is a listed database.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=75)** is just right here is a listed database.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=77)** So we'll just going to go ahead So we'll just going to go ahead and copy this line of text under database.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=78)** and copy this line of text under database.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=82)** And here we're going to say nano portfolio/settings.
>
> **[1:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=82)** And here we're going to say nano portfolio/settings.
>
> **[1:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=88)** We need to move down all the way We need to move down all the way till we get to our database portion.
>
> **[1:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=90)** till we get to our database portion.
>
> **[1:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=95)** Once we are there, let's change the name Once we are there, let's change the name to be what we have copied to be what we have copied and we'll paste that right in there, and we'll paste that right in there, and we'll just move through and we'll just move through with everything else that we need.
>
> **[1:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=104)** with everything else that we need.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=105)** So the next thing that we have is the user, So the next thing that we have is the user, let's go ahead and copy that, bring that back in.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=108)** let's go ahead and copy that, bring that back in.
>
> **[1:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=114)** Password, we need to change that as well.
>
> **[1:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=114)** Password, we need to change that as well.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=116)** That is very large password.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=116)** That is very large password.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=121)** And we'll go ahead and paste that in.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=121)** And we'll go ahead and paste that in.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=125)** Now the last thing that we need to edit here is the host.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=125)** Now the last thing that we need to edit here is the host.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=128)** So we'll go back to our settings, So we'll go back to our settings, we'll grab the host URL that we have we'll grab the host URL that we have and we'll come back and delete local host, and we'll come back and delete local host, paste in what we have.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=137)** paste in what we have.
>
> **[2:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=138)** Now we don't need to change the port Now we don't need to change the port because that's already the same five, four, three, two, because that's already the same five, four, three, two, we'll keep that all the same.
>
> **[2:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=142)** we'll keep that all the same.
>
> **[2:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=144)** We'll do a control X, We'll do a control X, then once we've gone ahead and done that then once we've gone ahead and done that we need to because we've made a change, we need to because we've made a change, do a git add -A, git commit -m, we'll call this db changes do a git add -A, git commit -m, we'll call this db changes
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=159)** and then we'll do a git push heroku master.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=159)** and then we'll do a git push heroku master.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=164)** Let me tell you the more and more that you use heroku Let me tell you the more and more that you use heroku that command is just going to become second nature.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=166)** that command is just going to become second nature.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=170)** We'll give this a second to run.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=170)** We'll give this a second to run.
>
> **[2:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=174)** So now that that's finished, So now that that's finished, let's go ahead and run heroku open let's go ahead and run heroku open and with this you'll notice hey, our site's up and running.
>
> **[2:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=179)** and with this you'll notice hey, our site's up and running.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=182)** The static image is really aren't there, The static image is really aren't there, but at least the bulk of this is running and ready to go.
>
> **[3:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=185)** but at least the bulk of this is running and ready to go.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=188)** Now, the problem is is that Now, the problem is is that I'd love to go edit the admin part of this website right.
>
> **[3:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=190)** I'd love to go edit the admin part of this website right.
>
> **[3:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=193)** If I go /admin that would be great, If I go /admin that would be great, but we haven't created the super user but we haven't created the super user and this is where heroku really shines in my opinion and this is where heroku really shines in my opinion when, what makes it great is that we can run that command.
>
> **[3:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=202)** when, what makes it great is that we can run that command.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=205)** So let's go back to our terminal and here we're going to So let's go back to our terminal and here we're going to type heroku run python manage.py type heroku run python manage.py and then createsuperuser.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=216)** and then createsuperuser.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=221)** And just like that we can connect to our server And just like that we can connect to our server and it's going to help us create a superuser and it's going to help us create a superuser just right here in our own terminal.
>
> **[3:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=227)** just right here in our own terminal.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=230)** So, we'll go ahead and wait for this.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=230)** So, we'll go ahead and wait for this.
>
> **[3:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=232)** It says what name do you want to use?
>
> **[3:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=232)** It says what name do you want to use?
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=233)** I don't want u58251, I'm going to choose Nick.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=233)** I don't want u58251, I'm going to choose Nick.
>
> **[3:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=237)** Now email address, I'll do my classic Now email address, I'll do my classic django one, two, three, four.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=239)** django one, two, three, four.
>
> **[4:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=241)** Django one, two, three, four Django one, two, three, four and with that I've created a superuser, and with that I've created a superuser, I'm back in my terminal here.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=247)** I'm back in my terminal here.
>
> **[4:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=249)** If I go back to the web here, If I go back to the web here, I can now type in nick for the username, I can now type in nick for the username, django one, two, three, four django one, two, three, four and I now can log into the admin.
>
> **[4:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=255)** and I now can log into the admin.
>
> **[4:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=258)** How great is that?
>
> **[4:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=258)** How great is that?
>
> **[4:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=260)** We're going to hold off on creating We're going to hold off on creating anything inside of this database anything inside of this database because we don't have our static or media files because we don't have our static or media files set up quite right just yet, set up quite right just yet, but we're going to do that in the next one.
>
> **[4:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=268)** but we're going to do that in the next one.
>
> **[4:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=282)** just right here in our own terminal.
>
> **[4:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=285)** So, we'll go ahead and wait for this.
>
> **[4:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=286)** It says what name do you want to use?
>
> **[4:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=288)** I don't want u58251, I'm going to choose Nick.
>
> **[4:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=291)** No email address.
>
> **[4:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=293)** I'll do my classic jenga1234, jenga1234.
>
> **[4:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=298)** And with that, I've created a superuser.
>
> **[5:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=302)** I'm back in my terminal here.
>
> **[5:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=304)** If I go back to the web here, I can now type in Nick for the user name, jenga1234.
>
> **[5:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=310)** And I now can log into the admin.
>
> **[5:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=313)** How great is that?
>
> **[5:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-on-heroku?u=76281980&t=315)** We're going to hold off on creating anything inside of this database because we don't have our static or media file set up quite right just yet, but we're going to do that in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), static (5), this. (3), case, (2), delete (2)
> **Cross-References:** go back to (7), in the next (3)
> **CLI Commands:** git (6), python (2)
> **Tools:** terminal (8)
> **UI Navigation:** click on (6), go to (2)
> **Prerequisites:** set up (3), setup (2)
> **File Paths:** manage.py (2)
> **URLs:** [heroku.com](https://heroku.com) (2)

#### Static and media files
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=0)** - [Narrator] So you've probably noticed our website really isn't complete without those static and media files.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=5)** Now, Heroku will not host your static or media files, you need to host them somewhere else.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=11)** And a great place to do that is AWS, using their S3 storage.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=16)** Now, we've just went ahead and walked through that.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=18)** Now if you skip forward to Heroku, you're going to want to move back and get to that portion but if you've already watched it, this is going to be a great integration of how to connect all of this.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=27)** Let's go ahead and move over into our terminal.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=30)** The first thing that we need to do is get into our virtual environment so that we can add some new pip requirements to our projects.
>
> **[0:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=37)** So we're going to say, source.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=41)** We're going to move back to our virtual environment folder bin activate.
>
> **[0:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=46)** Great, now that we're in that virtual environment, we're going to install some apps that are going to help us to save things inside of an Amazon S3 bucket.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=54)** So we're going to do Django-storage.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=59)** Storages-make sure you have the s, and then also boto3.
>
> **[1:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=63)** So go ahead, get those two installed.
>
> **[1:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=67)** Once that's finished, we're going to do a pip freeze into our requirements.txt so that it has those two pieces.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=77)** Once we're done with that, let's go ahead and move over to our AWS.
>
> **[1:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=83)** In sense, so we'll say AWS.[amazon.com](https://amazon.com).
>
> **[1:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=87)** Let's go ahead and move into our account here.
>
> **[1:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=92)** Alright, we're going to find our S3 bucket.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=98)** We'll go into our Django portfolio nick 1.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=101)** Let's go ahead and delete everything that we have there.
>
> **[1:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=104)** So we're going to select all, actions, then we want to delete.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=111)** Yes, let's go ahead and get rid of those.
>
> **[1:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=113)** Awesome, so now we have an empty bucket.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=115)** The next thing that we need to do is essentially make our settings just like we had seen before with our AWS project.
>
> **[2:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=124)** Let's go ahead and move back into the terminal here.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=127)** Now, I have two tabs open here so I'm going to go back to my original tab and if you have your previous project, you can actually go grab a lot of the code that's inside of that settings.py.
>
> **[2:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=138)** So let's go ahead.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=139)** I have my project, if I go to documents and then I have AWS my portfolio project.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=152)** Inside of here I'm going to do nano, my portfolio/settings.py.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=159)** Alright so here we have on the left, our previous codes so I'm going to go through and scroll down to where we had all these AWS key storages because this is going to be the exact same.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=170)** I'm going to copy all of this.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=173)** I'll do a copy, now I'm going to move over to my other tab, make sure that I'm now inside of where I have the new Heroku project.
>
> **[3:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=182)** And you can do a PWD that will tell you exactly where you are.
>
> **[3:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=185)** And I can see I'm on my desktop, this is the correct one.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=188)** Then what I'm going to do is do nano, portfolio/settings.
>
> **[3:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=195)** And I'm going to scroll down here.
>
> **[3:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=198)** And after my installed apps I'm going to paste in all those different files that I needed.
>
> **[3:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=204)** So, inside of my installed apps I need to add storages.
>
> **[3:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=207)** So I'm going to put a new line here, space over.
>
> **[3:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=211)** Storages, another single quote and a comma after that.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=216)** Once all these are in place, you can go ahead and just exit out with doing a control X.
>
> **[3:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=221)** Yes, we want to save that.
>
> **[3:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=222)** And now, we need to add the file that we had before.
>
> **[3:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=226)** So, we're going to go back to the other tab.
>
> **[3:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=228)** Exit out of here, just do the control X.
>
> **[3:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=231)** And you see when we did the LS here, that there's a file that we need called custom storages.
>
> **[3:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=236)** So if we do nano custom storages, we can copy all of this code, come back to our tab for Heroku, and we're going to say nano custom_storage.py.
>
> **[4:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=255)** Paste in our code, go ahead and do a control X there, say yes.
>
> **[4:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=261)** And with this, now that have made the appropriate proper changes, we can go ahead and add this new code.
>
> **[4:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=268)** So we're going to say, git add-A git commit with the following message, added S3.
>
> **[4:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=278)** With that, we'll go ahead and enter that in.
>
> **[4:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=282)** Now that we have all these changes, let's go ahead do a git push Heroku master.
>
> **[4:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=292)** Now a great part of this, as we move forward is that as part of the Heroku deployment it actually does collect static for you.
>
> **[5:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=301)** So if we go ahead and move over to our S3 bucket, if we reload it right now you'll see that we'll have nothing inside, well it's already started adding the static files here.
>
> **[5:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=311)** You can see that's actually the last command that was just typed here, collect static.
>
> **[5:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=314)** It's good to know that this is properly adding everything that we need so we didn't even have to run that command ourselves but, there's no media folder yet and that's because we haven't created anything yet so we'll let this deployment finish then we'll open up our project and then we can add in for instance, one of our images and you'll see that that's working.
>
> **[5:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=334)** So we'll go ahead and give Heroku a second here.
>
> **[5:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=339)** Okay, now that that's finished we're going to do a Heroku open.
>
> **[5:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=344)** And we'll be welcome to a much prettier website here showing our static files.
>
> **[5:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=350)** And if we to our slash admin we'll be able to go to our jobs add, let's do the website this time cool website, we'll hit save come back to our homepage and now you can see we have media files.
>
> **[6:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/static-and-media-files-2?u=76281980&t=373)** And again if you'd like to check these you can always do the copy image address paste that out and see that that's being stored in an Amazon bucket.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), static (6), this. (2), delete (2), this, (2)
> **CLI Commands:** aws (6), make (3), git (3), pip (2), find (1)
> **Env Vars:** aws (6), pwd (1)
> **File Paths:** requirements.txt (1), settings.py (1), portfolio/settings.py (1), custom_storage.py (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Analogies:** just like (1), for instance (1)

#### Custom URL
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=0)** - [Instructor] Like we've seen with our other deployments, we really just don't have that great of a URL for our site.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=7)** It's better than probably the other ones, arguably, but it's just still not that great.
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=11)** It would be awesome if people could just hit, for example, nickwalter.info and get to the project.
>
> **[0:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=17)** In order for this to happen with Heroku, you need to be a verified user.
>
> **[0:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=22)** In order to do this, go to [heroku.com/verify](https://heroku.com/verify).
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=27)** You're going to have to put in a credit card.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=29)** You don't have to pay anything yet, but you at least have to put in the credit card to be verified.
>
> **[0:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=34)** Then at that point, they could charge you for new things, but you've got to have that before you can do any of this domain customization.
>
> **[0:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=42)** Assuming you've done that and got that in place, there is a great guide that you can follow for this process.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=47)** You can get to that domain name here.
>
> **[0:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=50)** Basically it walks you through how to do custom domain names perhaps, and even at particular points shows you how to do this with different domain name registers.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=59)** With this in place, let's go ahead and go back to our command line.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=62)** We are going to type out heroku domains:add nickwalter.info.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=72)** Whatever your domain name is, go ahead and put that in.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=75)** It's going to go ahead and do that.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=78)** If it takes a while for this to go on, you can run that same command, but after domains:, you can do a wait.
>
> **[1:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=86)** This one, this is where you want to have the single quote, so you can go ahead and do that there.
>
> **[1:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=92)** Go ahead and give that a second.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=96)** Looks like that's done.
>
> **[1:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=97)** Let's go ahead and add also the www version.
>
> **[1:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=100)** First we need to do the add.
>
> **[1:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=101)** We're going to do www dot, and then we'll do the same thing where we're going to wait, but let's add a www dot and we'll wait for this to finish here.
>
> **[1:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=115)** Now that that's done, we can type heroku domains.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=119)** This is going to give some information that's going to be appropriate for saying, "All right, if someone's trying to go to nickwalter.info, you need to have the following.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=127)** Point them to this direction.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=128)** If they're trying to go to www.nickwalter.info, they need to go to the following places."
>
> **[2:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=134)** Again, this depends greatly upon where you have your domain name registered.
>
> **[2:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=138)** Inside of this guide, if you go down to, let's scroll down here, Add a custom root domain, it has really good explanations.
>
> **[2:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=146)** Unfortunately it doesn't have Google Domains, but I'm going to be walking you through that.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=152)** If we move over to Google Domains here, I've got my nickwalter.info.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=156)** I'm going to move back to Google domain name servers.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=159)** Before, I had switched it over to Amazon's when we were doing AWS.
>
> **[2:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=163)** I'm going to scroll down here.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=164)** First I'm going to add a custom resource record.
>
> **[2:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=168)** This is going to be www, and instead of an A, it's going to be a CNAME.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=173)** The place that I want to send it to is ... I have to go back to the terminal here, get the www one, copy this, go back, paste that in, say ADD.
>
> **[3:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=185)** That handles the www, but what if someone just goes to nickwalter.info?
>
> **[3:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=189)** This is where it gets a little bit hacky.
>
> **[3:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=193)** The best that we can do was forward nickwalter.info to www.nickwalter.info.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=199)** Up here where we have synthetic records, we're going to do a little bit of forwarding here.
>
> **[3:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=206)** What we're going to do is, for the sub-domain, we're going to put the @ symbol.
>
> **[3:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=209)** For the destination place that we want this to go, www.nickwalter.info.
>
> **[3:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=219)** With this, when we're choosing what to do, we want to forward the path and we want to disable SSL to www.nickwalter.info.
>
> **[3:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=228)** So we'll go ahead and hit the ADD button there.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=230)** Then what will happen is if anybody goes to nickwalter.info, it'll forward it to www, which will then go here, which will then move over to the dimensional-wolverine.
>
> **[4:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=240)** Man, I told you Heroku has great names.
>
> **[4:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=243)** But anyways, that's how you get domains configured with Heroku.
>
> **[4:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=248)** Hopefully you enjoyed deploying with Heroku; in my opinion, the simplest of all the options.
>
> **[4:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/custom-url-2?u=76281980&t=253)** That said, when you're in Heroku, you are really committed to the way that they do things and it's very hard to move, and can become quite pricey.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (3)
> **Env Vars:** add (2), url (1), aws (1), cname (1), ssl (1)
> **UI Navigation:** go to (4), scroll down (2)
> **Tools:** command line (1), terminal (1)
> **CLI Commands:** aws (1)
> **URLs:** [heroku.com](https://heroku.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 5. 4. Azure

#### Azure account
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=0)** - (narrator) Here in this final chapter we're going to be deploying our project using Azure.
>
> **[0:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=4)** This is Microsofts' web solution, cloud solution.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=8)** This is going to be very similar to DigitalOcean as we're also going to be using a virtual machine.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=14)** But there are a few differences that you should know, and I'm going to walk you through each of them.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=18)** Step number one is going to [Azure.com](https://Azure.com) and creating a new account.
>
> **[0:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=33)** Microsoft will ask for a verification email, go ahead and grab the code and come back here and enter it.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=41)** Go ahead and hit next.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=47)** After creating a Microsoft account, you're then going to have to go create a separate Azure account.
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=54)** Once you've successfully created your account, verified everything, you want to go and move on to your portal.
>
> **[1:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=60)** So the portal is a place where everything sort of lives in Microsoft Azure, what we're going to be creating is a virtual machine.
>
> **[1:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=67)** So over here on the left side, you want to go ahead and click on virtual machines, hit the add button here, and with this it's going to ask you to create a new virtual machine.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=77)** So for the subscription let's stay within our free trial here.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=81)** Inside of the resource group we need to create a new resource group, so we'll just go ahead and pick some sort of name here, we're going to call this maybe portfolio-django.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=93)** Okay we'll go ahead and add that name.
>
> **[1:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=96)** Now we have to give a name to our virtual machine, so maybe call this one ubuntu-portfolio.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=105)** Ubuntu, there we go.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=108)** You need to choose a region, whatever's there is probably fine, just as-is.
>
> **[1:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=113)** As we go down here you want to make sure that you choose the proper server here.
>
> **[1:57](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=117)** We want to use Ubuntu Server 18.04.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=121)** So go ahead and select that one any Ubuntu 18 is going to work, but if you can choose that one.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=127)** As you move on from there, for the size you really don't need anything that big, kind of like what I said in DigitalOcean.
>
> **[2:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=133)** The smallest thing is going to work out for you.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=136)** So even if you move down to the smallest thing that you have here, you're going to be fine.
>
> **[2:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=141)** So this one, unavailable here at this particular size but we could do the next step down, or even this one, look this is only seven dollars a month and it's you know, got a gig or RAM, this is going to be enough for us, so we can go ahead and select that.
>
> **[2:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=156)** Let's go ahead and keep moving down, for authentication, we're going to do that by password, for username, go ahead and select the name of the user that you'd like to create.
>
> **[2:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=164)** A cool step with this is we don't have to do the added step like we do in DigitalOcean where we have to log in this route and then add a user, we can just make one here.
>
> **[2:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=172)** So I'm going to add nick for that and then for password, it has to be a certain length, at twelve characters long and have a capital, so I'm going to make it capital Django12345678, and again, capital Django12345678, but again choose your own custom password that's going to work there.
>
> **[3:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=196)** So with this, let's leave everything else the same.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=199)** We do have to change some of the ports here so we need to say allow selected ports.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=205)** We're going to go here and choose SSH, that allows us to get into our Ubuntu server.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=210)** So next we'll move on to the desks.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=213)** Everything looks good in fact as we could keep moving through here but we're going to keep everything else default so we're just going to hit review and create.
>
> **[3:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=222)** So, with this in place it's going to go through and start creating this virtual machine.
>
> **[3:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=227)** This is going to take a little bit of time to work here, and let's see validation all there, oh it's not even creating yet.
>
> **[3:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=233)** Let's hit that create, okay now it's starting to create it. So it's going to take a little bit of time for this to run it's course here so we'll just go ahead and wait for this deployment to finish.
>
> **[4:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=247)** Alright it looks like our deployment has finished, so if we go ahead and select virtual machines here on the left, we can see our virtual machine here, let's go ahead and click on it to see some of the details of it, and what we're really looking for is this public IP address.
>
> **[4:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=261)** So let's go ahead and click that to copy it, we're going to move back over into our terminal.
>
> **[4:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=267)** And let's do ssh nick@ and let's paste in that IP address, yes we want to move forward with this.
>
> **[4:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=277)** Let's go ahead and put in the password that we created, capital Django12345678, yours is probably different than mine.
>
> **[4:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=285)** And with that, look at this, we are logged into our server, ready to rock and roll.
>
> **[4:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/azure-account?u=76281980&t=290)** This is a great place to sort of stop here, but we are now inside of our virtual machine and we didn't have to go through that process of creating a new user. Pretty helpful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (2), public (1), this. (1)
> **CLI Commands:** make (3), ssh (2)
> **UI Navigation:** click on (2), select the (1)
> **Definitions:** is a  (3)
> **Env Vars:** ram (1), ssh (1)
> **Analogies:** similar to (1), kind of like (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Versions:** 18.04 (1)

#### Database setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=0)** - [Instructor] So just like the user that we created with Digital Ocean, our Nick user here has the ability to run sudo commands.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=7)** So to test this, and make sure our server is up to date, go ahead and type out sudo apt update.
>
> **[0:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=15)** And this is going to go out and find any updates that are available for our server here.
>
> **[0:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=21)** With that, we can run sudo apt upgrade and that'll install those.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=28)** We'll hit Y for yes.
>
> **[0:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=31)** And that'll go ahead and move through.
>
> **[0:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=36)** Now there's certain tools that we're going to need for our server here and we're going to reuse that same guide that we used before with Digital Ocean.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=43)** So you can get the URL for that here.
>
> **[0:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=45)** But, once you have that URL, what we're going to do is we're going to scroll down here, and we're going to find here for Python 3, make sure it's Python 3, all these different packages that we're going to install.
>
> **[0:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=56)** So let's go ahead and copy those.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=59)** And paste that in, and hit Yes, we want this to happen.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=62)** And it's going to go grab Postgres, and everything that we need in order to get our server to run.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=68)** Nginx, all the different things that we need there.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=71)** So we'll give that a second to finish.
>
> **[1:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=75)** Now that that's finished, we need to log in to Postgres to create a database.
>
> **[1:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=79)** So let's do sudo dash lower case u postgres psql.
>
> **[1:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=88)** Now that we're inside, this is the postgres terminal, essentially, where we can write commands like creating the database and whatnot.
>
> **[1:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=95)** And there's actually great lines that we can copy and paste here from the guide.
>
> **[1:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=99)** We're going to come down first and create a database, and anywhere that you see red, you actually don't want to include the word that's there.
>
> **[1:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=106)** You want to use what's unique to your project.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=108)** So we'll copy this line, but then come back and say, create, instead of a database called my project, a database called portfolio db.
>
> **[2:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=120)** So that'll go and create our database.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=123)** Next we need to create a user with a given password.
>
> **[2:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=126)** So we'll copy this line, come back, paste that in, instead of password I'm going to use django1234.
>
> **[2:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=135)** And instead of my project user, I'm going to use portfolio user.
>
> **[2:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=143)** Go ahead and hit enter on that.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=145)** Next, we need to alter some roles with this user.
>
> **[2:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=148)** So we're going to copy each of these lines.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=152)** Just one at a time.
>
> **[2:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=153)** And with each of these, we need to change it to be the proper portfolio user that we just created.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=159)** So we'll see here, portfolio user.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=165)** Let's do the same here.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=166)** This one's a little bit longer.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=173)** OK, and we'll go ahead and do this last one for altering roles.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=183)** Great.
>
> **[3:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=184)** So then we just need to connect these two, saying, essentially, that this user will be able to access this database.
>
> **[3:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=190)** So we'll come back, paste this in.
>
> **[3:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=193)** Instead of my project user this will be portfolio user.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=199)** And instead of my project we're going to change that to portfolio db.
>
> **[3:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=208)** We'll hit enter on that.
>
> **[3:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=209)** Now, with all this in place, we can go ahead and quit out of Postgres with a back slash and a q.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=216)** And this means we have now properly set up a database.
>
> **[3:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/database-setup?u=76281980&t=219)** And next we just need to connect to this database.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4), make (2), apt (2), find (2), python (2)
> **Code Keywords:** let (3), this, (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** url (2)
> **Versions:** python 3 (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)

#### Transferring code to the server
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=0)** - [Speaker] Now that we have our servers set up with a PostgreSQL database we need to move the code from our local computer onto this server.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=8)** While we are currently in the server, do a pwd to find out where our current home directory is and there you can see it's /home/nick.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=16)** Yours will probably be a different name there, but with this open a new terminal window or new terminal tab and this should be on our local computer.
>
> **[0:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=25)** We'll do an ls to see where we're at, I'm going to move to my desktop where I have a fresh version of the project here and with this we need to transfer up this entire folder here the portfolio project.
>
> **[0:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=39)** So what we're going to do is we are going to use a command called spc/lower-case r portfolio project.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=47)** So it's saying take this portfolio project that's here on this computer, the one you're in front of right now and then send it to nick@ or in your case whatever your name is, then the proper IP address, mine's 13.82.189.147 and then after those numbers we're going to do a colon and then you need to specify where it should go.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=72)** So if we go back to our other terminal tab we can copy this path exactly.
>
> **[1:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=77)** Go ahead and copy and paste that right at the end of that colon, hit enter, and what this is going to do, after we put in our password, of course, is it's going to upload every single file to our Azure server.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=93)** So I'm going to go ahead and let this run it's course.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=98)** So once that's completed we can actually close out of this new terminal tab or window, whichever you decided with.
>
> **[1:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=104)** We'll go back to our server and now if we do an ls you should notice that there is a portfolio project there.
>
> **[1:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=110)** Now sometimes you might get weird permissions when you bring code from one computer to another so we're going to do a quick chmod, we're going to do /capital r 755 portfolio project, you can auto complete with tab there, that'll make sure all the permissions for the files and folders are correct.
>
> **[2:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=131)** Now with this in place let's go ahead and make sure we have virtual environment installed here on this server.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=137)** So I'm going to say sudo/capital h pip3 install virtualenv.
>
> **[2:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=149)** So this will make sure we have virtual environment installed, with that in place we can now type out virtualenv and lets make a new virtual environment called venv okay?
>
> **[2:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=161)** So I'll go ahead and hit enter on that.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=165)** It'll go and do it's work and then we can activate this virtual environment by saying source venv/bin/activate and then lets install the proper files that we'll need for our project.
>
> **[3:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=181)** So we're going to do pip install very important one django, gunicorn, that's going to be the server to run our code, we need p s y c o p g 2 /binary and we also need pillow.
>
> **[3:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=200)** So go ahead and install all of those.
>
> **[3:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=203)** Oh I misspelled gunicorn, gunicron, there we go.
>
> **[3:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/transferring-code-to-the-server-2?u=76281980&t=212)** Great, now everything has been successfully installed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), ls (2), find (1), chmod (1), sudo (1)
> **Prerequisites:** install (4), set up (1)
> **Tools:** terminal (4)
> **Code Keywords:** let (2)
> **Cross-References:** go back to (2)
> **Versions:** 13.82.189 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### Configuring settings files
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=0)** - Now there's a few changes we're going to have to make to our settings file so let's go ahead and do nano portfolio-project/portfolio/settings.
>
> **[0:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=12)** Inside of this file we're going to edit a couple of things so the first one is the ALLOWED_HOSTS.
>
> **[0:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=18)** So this is going to say who can access this website from where.
>
> **[0:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=22)** Well one of them is we want for sure to be able to be accessible from the IP address.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=27)** So you can see at the top of Terminal here we do have the IP address so I can go ahead and just type that in.
>
> **[0:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=32)** 13, in my case. Point 82, point 189.
>
> **[0:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=38)** Or seven years will likely be different.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=40)** And if you're going to use a customized URL, this would be your place to add it.
>
> **[0:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=44)** So after ALLOWED_HOSTS here, we're going to add a comma, then another string and I'll do nickwalter.info, single quote.
>
> **[0:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=53)** And let's do www.nickwalter.info there as well, end with the single quotes.
>
> **[1:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=61)** Now we have a list of three strings.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=62)** If you don't have a custom domain, you can just do the first IP address as a string there.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=68)** But that's the first change that we need to make.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=70)** The next one is inside of our database so we just need to make sure that we have the proper configurations here.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=78)** So first for our engine, we're going to change this slightly.
>
> **[1:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=81)** So we're going to do this backends.postgresql and then we're going to do _psycopg and then two.
>
> **[1:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=93)** Okay, so that changes our engine.
>
> **[1:35](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=95)** For the name we're going to keep that as portfoliodb.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=98)** Remember that's the name that we use.
>
> **[1:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=100)** For the user, instead of postgres, it's now going to be portfoliouser.
>
> **[1:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=105)** Remember that's the name that we chose there.
>
> **[1:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=107)** The password is still django1234 and for host, localhost is fine as port 5432, that's all totally fine.
>
> **[1:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=116)** With these changes in place, we need to go down to our media route.
>
> **[2:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=122)** Change that up.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=123)** So instead of media route being at the base directory, we're going to copy what static route has and replace base directory with that and instead of having static there we're going to change that to media but other than that, keep everything the same.
>
> **[2:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=140)** We'll do a control X, Y to save that, then enter.
>
> **[2:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=144)** Then we're going to move into our project, cd portfolio-project.
>
> **[2:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=150)** And inside of this project, if you do an ls you can see we have a folder called images and this is holding the images that people have uploaded earlier to a database and we don't have that database here.
>
> **[2:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=160)** In fact, we want to create a new one and we want new images.
>
> **[2:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=163)** So we're going to remove this images folder.
>
> **[2:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=165)** We're going to say rm dash lowercase r images and that's going to get rid of the folder and everything inside of it.
>
> **[2:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/configuring-settings-files-2?u=76281980&t=172)** If you do an ls you can see that is now gone.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), ls (2), cd (1), rm (1)
> **Code Keywords:** let (2), static (2), case. (1)
> **Env Vars:** allowed_hosts (2), url (1)
> **Ports:** port 5432 (1)
> **Tools:** terminal (1)
> **Speakers:** - now (1)

#### Testing deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=0)** - [Nick Walter] So now that we've properly configured our settings we have a database running, let's go ahead and migrate that database, so we're still inside our virtual environment, that means we can say python manage.py migrate By running this it's going to do all of our migrations, looks great and if we're going to be able to login to the admin side of things we've got to create a superuser.
>
> **[0:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=24)** So let's do python manage.py createsuperuser it's going to take us to the prompt nick I think is a good name don't need an email address I'll do my django1234 and django1234 for the passwords.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=41)** Great, now we have a superuser, next thing that we need to do is collect static, so I'm going to do python manage.py collectstatic It's going to say "Do you want to overwrite this?"
>
> **[0:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=54)** Yes, let's do that, now we have those all copied over.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=58)** Then with this in place we want to actually test to see if we can get to our site, this is the first time we're actually trying to say Okay, let's see this thing live Now, in order for this to happen first on our machine we have to open up our firewall to say that we want things running on port 8000.
>
> **[1:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=73)** So we're going to say sudo ufw allow, go ahead and just type in 8000, that means we're accepting things on port 8000.
>
> **[1:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=83)** Not only do we have to change that here, but also we need to go to our Azure portal and inside of our virtual machine here, you can see this is my Ubuntu-portfolio, we need to go to networking, and then we need to say add inbound port rule So here you have to specify that you want something coming in.
>
> **[1:44](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=104)** So leave all of these the same but here down for destination port we're going to change this to 8000, as far as the name goes, we can just call this like 8000 testing, telling that, you know, this thing should be living here.
>
> **[1:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=119)** Looks like you can't have spaces there.
>
> **[2:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=123)** And we'll go ahead and add that so now we've, on the server, via SSH, have said that we can accept things via port 8000 but also here on the Azure portal we've specified that that should be the case.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=137)** You can that now we can accept things on port 8000 so let's go back and now we're going to do just our classic python manage.py runserver but we are going to specify that this should run at 0.0.0.0 :8000, meaning, broadcast this live on port 8000 so when this runs it's going to use the IP address of this machine if we want to access it so we'll go ahead and hit Enter here now the test and see if this is working, I've got to remember this IP address up here so the 13 82, in fact, I can go grab that from Azure so if I go back to main page here for my virtual machine I can copy this, in a new tab I'm going to paste that, say :8000
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=186)** if I hit Enter there you'll see (imitates fanfare) there's beautiful old me.
>
> **[3:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=193)** And, with this, our admin should be working, so let's go ahead and do a /admin Let's login with nick, password django1234, Going to add a new job here, select an image, I like to code, I will save this, and now if we go back to our home page, look at that! We've got our media showing up.
>
> **[3:45](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/testing-deployment-2?u=76281980&t=225)** And it is showing up just like we'd like it, everything is looking great here, the big issue is that we're running on port 8000, and we're using the runserver command in order to do everything and we want to actually use Gunicorn, so we'll be fixing that in the coming video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (3), static (1), case. (1)
> **Ports:** port 8000 (6), :8000 (2)
> **CLI Commands:** python (4), sudo (1), ssh (1)
> **File Paths:** manage.py (4)
> **Cross-References:** go back to (2)
> **Tools:** azure portal (2)
> **UI Navigation:** go to (2)
> **Env Vars:** ssh (1)

#### Gunicorn testing
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=0)** - So we currently are serving up our project via the run server command built into Django.
>
> **[0:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=5)** Now this is not ideal, there's more efficient servers out there.
>
> **[0:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=8)** And one of those is Gunicorn.
>
> **[0:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=10)** Now we already installed the code for via Pip but we need to test it out and see if we can work with it.
>
> **[0:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=15)** So go ahead and hit control C, so that you stop you server from running.
>
> **[0:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=19)** And then, let's go ahead and specify that we want to run our site via Gunicorn.
>
> **[0:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=25)** Now in order to do this, I'm just going to type Gunicorn.
>
> **[0:29](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=29)** Should be able to auto complete that.
>
> **[0:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=31)** Gunicorn.
>
> **[0:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=32)** There we go.
>
> **[0:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=34)** Dash, Dash, bind.
>
> **[0:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=36)** And then space, we're going to do the same zero point zero point zero point, zero.
>
> **[0:40](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=40)** colon, eight thousand.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=43)** And then we're going to' specify portfolio dot W S G I.
>
> **[0:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=49)** So go ahead and hit enter on this.
>
> **[0:52](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=52)** We should be able to go back to our browser and re-load the same page and everything still should be working.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=59)** Looks like it is that's good.
>
> **[1:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=60)** And then you'll see when we come back to the terminal, that everything's still good here.
>
> **[1:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=65)** So go ahead and do a Control C.
>
> **[1:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=68)** And with that, now we can get out of our virtual environment.
>
> **[1:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=72)** So let's do a deactivate, okay were just back now as a regular user.
>
> **[1:18](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=78)** And we need to start creating the things for Gunicorn to run on it's own automatically.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=84)** And the first job that we need to complete is creating a socket.
>
> **[1:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=87)** And so, let's go back to our guide here and if we scroll down, they have quite a bit written out here about those who, you know, want to create the very first Django project, but we've done a lot more than that, you've already got yours so, we'll keep scrolling down.
>
> **[1:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=106)** Until we get to this line here about creating a Gunicorn socket, so we need this line saying let's make this new file come back, paste that in and we need to go copy this chunk of code, don't need to change anything about it just copy everything bring it back, paste it, Control X yes and hit enter.
>
> **[2:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=127)** Great.
>
> **[2:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=128)** So now, with that in place you need to go ahead and make a Gunicorn service.
>
> **[2:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=133)** Let's go ahead and copy this line of code, says we're going to make a new Gunicorn service.
>
> **[2:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=139)** Go ahead and paste that in.
>
> **[2:21](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=141)** Now when we come back, the guide has this sort of written out in pieces, so it's like this is the first chunk, what it does and all that and you know here's the second part and here's the third so, I want you to skip down to the third part here.
>
> **[2:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=153)** Because I just want you to be able to copy everything here, but remember we've got to' replace everything in red.
>
> **[2:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=159)** So there should be four different parts inside of service that we're going to' be replacing.
>
> **[2:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=163)** So let's go ahead and move back here.
>
> **[2:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=166)** We're going to' paste this in.
>
> **[2:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=168)** So under service our user is not Sammy it is Nick.
>
> **[2:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=173)** The working directory is not Sammy, slash my project directory, it is Nick slash, then we want to change this to portfolio, dash project.
>
> **[3:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=186)** Portfolio, dash, project.
>
> **[3:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=190)** Great.
>
> **[3:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=190)** Now for the exec start, this is saying how do you want to' run this and we want our virtual environment, here you can see it's got; Sammy, my project.
>
> **[3:19](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=199)** I'll just move this all the way back until we have home and we're going to say Nick slash V E N V and then it goes into, remember how we do V E N V slash, bin, slash, activate.
>
> **[3:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=210)** Well this is V E N V slash, bin, slash Gunicorn, that's where that's living inside of our virtual environment.
>
> **[3:37](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=217)** So there we go, there's our third change the last and final change that we've got to' make here, is instead of my project dot W S G I, it should be, portfolio dot W S G I.
>
> **[3:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=230)** So go ahead and do Control X, yes let's hit enter there.
>
> **[3:54](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=234)** With this all in place, we just got to' do a few things to make this all work.
>
> **[3:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=239)** So we're going to' type out; sudo, system, C T L, start.
>
> **[4:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=246)** And then we're going to' do Gunicorn, just make sure we spell this correctly.
>
> **[4:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=251)** Gunicorn, dot, socket.
>
> **[4:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=256)** Next thing we're going to do, is the same line of code except, instead of start, we're going to' change it to enable.
>
> **[4:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=263)** Great.
>
> **[4:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=264)** Looks like it worked.
>
> **[4:26](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=266)** Next we're going to' do, sudo, system, C T L.
>
> **[4:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=271)** Except this time we're going to' do D A E M O N, dash reload.
>
> **[4:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=278)** And then finally we're going to' do system, C T L.
>
> **[4:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=282)** And we're going to' say restart Gunicorn.
>
> **[4:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=287)** Excellent.
>
> **[4:49](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/gunicorn-testing-2?u=76281980&t=289)** At this point, everything's up and running except that, we have this crucial piece, that we haven't addressed called engine X and we're going to' deal with that, in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), this. (1), except, (1)
> **CLI Commands:** make (6), sudo (2), pip (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** it's like (1)
> **Speakers:** - so (1)

#### NGINX setup
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=0)** - [Instructor] We're getting very close to having our project ready to shine on port eighty, which is the main web port, you'll see that in just a second here.
>
> **[0:07](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=7)** So, since we're so close, we got to change from a debug environment to a production environment.
>
> **[0:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=13)** So to do that, we're going to do a nano portfolio/settings, and let's just scroll down to our DEBUG option here and set that equal to False.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=27)** Great.
>
> **[0:27](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=27)** Now, with that change, we'll do Control + X, Yes.
>
> **[0:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=30)** Let's save that.
>
> **[0:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=31)** All right, now that we've done that, we have to get Nginx set up.
>
> **[0:34](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=34)** And what Nginx is, is it's also a web server that we'll pass information either to Gunicorn, say, hey, I need you to spit back some sort of view or something like that, or it'll spit back some of our static or media files.
>
> **[0:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=48)** So, let's go ahead and go back to the guide here.
>
> **[0:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=51)** They have the great documentation to be able to get this up and running.
>
> **[0:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=55)** Let's scroll down a bit here.
>
> **[0:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=58)** Okay, and we're going to copy this line of code, but everything except for the red part 'cause we need to change that to portfolio.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=64)** So, let's go ahead and copy that, come back, we'll paste this in and change this to portfolio.
>
> **[1:10](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=70)** Great.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=71)** Now, the code that we need to apply there, this is the same thing as we've seen before, like, if we scroll down, they did it kind of in chunks, so we want this last portion and we want to change everything in red, and there's two things in red, but there's actually three changes that we're going to be making.
>
> **[1:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=85)** So, just copy everything there, come back, and we'll make the changes that we need to.
>
> **[1:31](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=91)** So, the first one up at the top here, for server_name, is we need to list out the IP address, so this is going to be host to that, so I'm going to put in mine.
>
> **[1:39](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=99)** I've got thirteen point eighty two point one eighty nine point one forty seven.
>
> **[1:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=108)** Also, if you have a custom domain name, this would be the place to add it.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=111)** If not, just leave it like this.
>
> **[1:53](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=113)** But if you do have it, this is where you'd say, like NickWalter.info and WWW.NickWalter.info.
>
> **[2:01](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=121)** You just separate those by spaces, so there's no commas or anything, just like that.
>
> **[2:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=126)** 'Kay.
>
> **[2:06](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=126)** The next change that we need to make is where the root location is of our static files.
>
> **[2:12](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=132)** So instead of Sammy, this needs to be Nick.
>
> **[2:17](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=137)** Instead of MyProjectDirectory, this needs to be PortfolioProject.
>
> **[2:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=145)** Now, it would be tempting to just leave this here, but we need to serve both static and media files via Nginx.
>
> **[2:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=152)** So copy this whole thing for location, static, including the beginning curly bracket and the ending, we're going to copy that, come down, make some space, I'm going to hit space 'til I get over here, and I'm going to paste this in and change it from static to media.
>
> **[2:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=168)** So we'll just go ahead and delete that.
>
> **[2:50](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=170)** We don't have to change the root or anything like that, it's all going to work the same.
>
> **[2:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=175)** So with those changes in place, we can go ahead and hit Control + X.
>
> **[2:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=179)** That'll exit us out of there.
>
> **[3:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=183)** Now, if we go ahead and move back to the guide, there's a couple things we'll have to do to make this all work correctly.
>
> **[3:08](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=188)** So we're going to copy this line of code, copy this, come back, either paste in instead of myproject.
>
> **[3:15](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=195)** That is where we are going to change this to, say that this is portfolio.
>
> **[3:22](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=202)** Excellent.
>
> **[3:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=203)** So that went ahead and made the proper change.
>
> **[3:25](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=205)** To test and see if this is working, you can type out sudo NginX -t, and look at that.
>
> **[3:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=212)** Test is successful.
>
> **[3:33](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=213)** That means everything is working here.
>
> **[3:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=216)** With all these different changes that we've made to make sure that everything is good and ready to rock and roll, we're going to run two commands.
>
> **[3:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=222)** So the first one is sudo system ctl, and we're going to do restart Gunicorn, and we're also going to do the same thing now for NginX.
>
> **[3:55](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=235)** So we've gone ahead and done those two things.
>
> **[3:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=238)** Our site should be available, but you'll notice if we go to our IP address and we pass nothing, so this is a fun little web tip, if you pass in no port, it'll default to port eighty.
>
> **[4:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=251)** Eighty is like the web port that everyone usually uses.
>
> **[4:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=254)** So this, and this is the exact same thing.
>
> **[4:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=256)** But if we just go ahead and try to enter our IP address, well we're going to get a problem here, this is too full.
>
> **[4:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=263)** So the first one is, we need to go back to our server here and say we've got to open up the ports.
>
> **[4:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=270)** So, first let's get rid of that eight thousand rule So I'm going to say "sudo ufw delete allow eight thousand"
>
> **[4:42](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=282)** So we're no longer accepting traffic on eight thousand but we want NginX to be able to do it's thing so we're going to say "sudo ufw allow single quote NginX Full
>
> **[4:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=296)** and then another single quote.
>
> **[4:58](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=298)** So with that in place, we've changed that but as you probably can remember we have to go back to our actual Azure instance and say okay let's go to networking.
>
> **[5:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=309)** We no longer need eight thousand here so let's hit the little dots here and say delete no longer need that.
>
> **[5:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=316)** Need to add a new inbound port rule, so we're going to go ahead and change this to be port eighty and we're going to say, we'll just call this Web Traffic again I can't have any space I keep forgetting that.
>
> **[5:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=332)** We'll hit add there, and then this is going to create our new secure rule.
>
> **[5:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=338)** With these two things in place we'll go ahead and just, wait we need Azure to be officially done with this look at that, now we have eighty, eight thousand has gone.
>
> **[5:48](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=348)** Let's reload this page and... So I had a little bit of trouble getting this to pull up, sometimes if you're ever in doubt, restart NginX, restart Gunicorn, I just reran those commands again and that seemed to get things up and running.
>
> **[6:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=364)** It might have been something to do with after we had changed the firewall here to say we could accept NginX, things that we needed to restart NginX.
>
> **[6:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=373)** But, with that in place we can successively access our website to prove to you that port eighty thing, if I do port eighty like this, look at that, it just auto, I mean it's chrome in the background deleting it because it under the scenes has passing through that eighty.
>
> **[6:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/nginx-setup-2?u=76281980&t=388)** But anyways, it works, fully functional we can come directly to this IP address, everything looks awesome.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (5), pass (3), delete (3), this, (3)
> **CLI Commands:** nginx (10), make (5), sudo (4)
> **UI Navigation:** scroll down (3), go to (2)
> **Env Vars:** debug (1), www (1)
> **Cross-References:** go back to (2)
> **Code Identifiers:** server_name (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### Connecting your URL
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=0)** - [Instructor] All right, now that we have a functional server up and running, displaying our Django project in a beautiful fashion, you'll notice that the IP address isn't the greatest way to share this with people, right?
>
> **[0:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=11)** You don't want to say, hey, go to 13.82 whatever to go see my website.
>
> **[0:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=16)** You want to say something like, nickwalter.info.
>
> **[0:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=20)** So, in order to make this happen, you have to buy a domain name somewhere.
>
> **[0:23](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=23)** I really recommend Google Domains, I think they make it the simplest process possible.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=28)** They don't fluff you with a bunch of up sales and things.; but no matter where you bought your domain, you need to go to the DNS settings for that domain, and you need to come down; I have some previous rules that I had set up before, so I'm going to delete these.
>
> **[0:43](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=43)** These were from Heroku.
>
> **[0:46](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=46)** And I'm going to delete that as well.
>
> **[0:47](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=47)** So wherever it is that you can create resource records, you need to first do a @ sign, and this is going to say, so if anyone comes directly to this domain, do an A record, and I want to send them to, and you want to send them to the following IP address.
>
> **[1:04](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=64)** So we'll go ahead and copy that, paste it, make sure you get rid of the http and the, you know, the slash at the end.
>
> **[1:11](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=71)** You want just the IP address.
>
> **[1:13](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=73)** Go ahead and hit ADD.
>
> **[1:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=74)** Then you also want to do one for www, no dot, just www, also an A record, and it's going to go to that same IP address.
>
> **[1:24](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=84)** Get rid of the slashes and http, and go ahead and add that.
>
> **[1:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=88)** This can take some time, this whole process, right?
>
> **[1:30](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=90)** Like, if I make these, it could be a couple of minutes when I go to nickwalter.info, and it will show the correct page, or it could take hours.
>
> **[1:38](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=98)** Even I've, it's taken me like a day and a half before to see the changes reflected; but eventually this will forward traffic to the following IP address so that people can go to nickwalter.info and see the awesome website.
>
> **[1:51](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=111)** I do want to mention here, I kind of allured to it last video, but any changes you make to your project, let's say, you know, you add some new feature, upload some new code, whatever it is, you always want to make sure you do a restart of Gunicorn, and a restart of NGINX.
>
> **[2:05](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=125)** That'll ensure that both of them are working off the latest code; if not, they might still be working off something old even though you've added a new code; you've got to make sure that you restart there.
>
> **[2:16](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/connecting-your-url-2?u=76281980&t=136)** And the code that we've implemented here, even if our server were to go down, or we restarted it for some reason, it would automatically fire up NGINX and Gunicorn, which is a great feature for us.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), nginx (2)
> **UI Navigation:** go to (5)
> **Env Vars:** nginx (2), dns (1), add (1)
> **Code Keywords:** delete (2), let (1)
> **Versions:** 13.82 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=0)** - [Instructor] Thank you for walking through deploying Django apps with me.
>
> **[0:03](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=3)** Hopefully, you learned a lot of new skills here, and feel confident about publishing your project live.
>
> **[0:09](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=9)** Now, if you'd like to learn more about Django, I've got some great course recommendations for you.
>
> **[0:14](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=14)** You can dive into Test-Driven Development in Django, where you'll learn to have more confidence in your code.
>
> **[0:20](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=20)** You can also dive deep into Django: Forms, they are powerful and there's so much more than you find on the surface.
>
> **[0:28](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=28)** You can also learn to build a Paid Membership Site with Django.
>
> **[0:32](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=32)** If you'd like to earn money month after month, this is for you.
>
> **[0:36](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=36)** A great next step for you would be learning about Deployment Automation.
>
> **[0:41](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=41)** All these steps that we took can be automated, so that when you want to release a new version of your site, you can simply type in one command and have automation handle the rest about uploading your new code, and if you have tests you can run those, as well.
>
> **[0:56](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=56)** The course that I recommend is Learning Ansible.
>
> **[0:59](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=59)** Also, I'd love it if you'd connect with me.
>
> **[1:02](https://www.linkedin.com/learning/deploying-django-apps-make-your-site-go-live/next-steps?u=76281980&t=62)** You can find me both on LinkedIn and on Twitter.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), ansible (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Nick Walter]]

## Path Context

### In [[Become a Django Developer]]
← [[Django- Forms]] | **3 of 4** | [[Building a Personal Portfolio with Django]] →

## Appears In

- [[Become a Django Developer]]

---

[↑ Back to top](#)