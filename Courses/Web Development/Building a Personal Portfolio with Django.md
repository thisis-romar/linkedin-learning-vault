---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-a-personal-portfolio-with-django
url: "https://www.linkedin.com/learning/building-a-personal-portfolio-with-django"
duration_minutes: 114
duration: 1h 54m
level: Beginner
updated: 10/8/2018
learners: 38191
skills:
  - Django
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEg0eaCiUdF5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568666236290?e=2147483647&amp;v=beta&amp;t=UoK7lhKPAjG1cMJPBuwNnOS92D6RdhMwzYJiVceO1JQ"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a Django Developer]]'
prev_courses:
  - '[[Deploying Django Apps- Make Your Site Go Live]]'
path_nav: '[{"path":"Become a Django Developer","position":4,"total":4,"prev":"Deploying Django Apps- Make Your Site Go Live","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20a%20Personal%20Portfolio%20with%20Django.md)

![Building a Personal Portfolio with Django](https://media.licdn.com/dms/image/v2/C4E0DAQEg0eaCiUdF5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568666236290?e=2147483647&amp;v=beta&amp;t=UoK7lhKPAjG1cMJPBuwNnOS92D6RdhMwzYJiVceO1JQ)

# Building a Personal Portfolio with Django

> Django—an open-source web framework that's designed on top of Python—can help you quickly bring your website ideas to life. In this course, learn the basics of Django for web development by building your own website—a personal portfolio—from the ground up. Instructor Nick Walter steps through how to create a database, design the layout for your website, and add and update URL paths. Learn how to c

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django) | 1h 54m | Beginner | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Portfolio Project Overview]]** (1 videos)
- **[[#2. Creating Django Apps]]** (3 videos)
- **[[#3. Django and Databases]]** (7 videos)
- **[[#4. Designing Your Django Project]]** (6 videos)
- **[[#5. Object Details in Django]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating a website with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=0)** - [Nick] Have you ever wanted to showcase your Python skills through a website portfolio?
>
> **[0:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=5)** We will be creating a website using Django from the ground up.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=8)** We'll create a database, organize URL paths, and design the interface.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=13)** Some key topics that'll help us on our journey include static files, setting up a Postgres database, models, and using the admin interface.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=23)** I'm Nick Walter, a mobile and Python developer who loves working with Django for personal and professional projects.
>
> **[0:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-website-with-python?u=76281980&t=30)** Let's get started with building this portfolio with Django.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), static (1), let (1)
> **CLI Commands:** python (2)
> **Env Vars:** url (1)
> **Speakers:** - [nick] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=0)** - [Instructor] I'd like to take a moment to just cover what you should know before starting this course.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=4)** First, you should have the basics of Python 3 down.
>
> **[0:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=7)** We'll be using 3.7, but any Python 3 will work.
>
> **[0:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=12)** Next, you're gonna want to have Django 2.1 installed on your computer.
>
> **[0:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=16)** If you need any help with that, you can go to [djangoproject.com](https://djangoproject.com).
>
> **[0:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=19)** There's some great installation guides there.
>
> **[0:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=21)** Next, you should have some basic terminal knowledge.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=24)** We're gonna be moving in and out of directories, and I'll walk you through the rest there.
>
> **[0:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=28)** Next, you'll need a text editor to edit your code.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=31)** I'd recommend using Atom.
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=33)** That's what I'll be using, but completely up to you there.
>
> **[0:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=35)** And finally, you'll need some basic knowledge of HTML.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/what-you-should-know?u=76281980&t=39)** Nothing too advanced, but at least know what some HTML tags are.

> [!info]- Semantic Content
>
> **Versions:** python 3 (2), 3.7 (1), 2.1 (1)
> **CLI Commands:** python (2)
> **Env Vars:** html (2)
> **Tools:** terminal (1), atom (1)
> **Prerequisites:** you'll need (2)
> **Code Keywords:** finally, (1)
> **URLs:** [djangoproject.com](https://djangoproject.com) (1)
> **UI Navigation:** go to (1)


### 1. Portfolio Project Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Demo project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=0)** - [Nick] I'd like to take a second to show you what it is we're gonna be building in this course, and it's your own personal portfolio.
>
> **[0:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=7)** It's a way to show yourself off to the world.
>
> **[0:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=9)** So here I've got my site, it's got my name, a little bit about me, this cool button that when you click on it it actually initiates sending an E-mail to me.
>
> **[0:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=17)** We've got this picture of myself here, and then down below I've listed out some previous jobs and projects that I've worked on before.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=24)** And what's really cool about each of these, is they kinda give you a nice little snapshot of what I've done, but if you click on any one of these, you can see the picture blown up in more detail.
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=33)** And we've got this cool little back button to head back to the main page.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=37)** A big part of this course is gonna be working with the database which powers these different jobs and projects that we've worked on before.
>
> **[0:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=44)** And so if we go to the name of our website, /admin, we're actually gonna have this whole interface to add new jobs here, if we want to change anything, like for example here with Finland.
>
> **[0:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=55)** Oh, I realized this wasn't actually in Finland, this was in Japan.
>
> **[0:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/demo-project-overview?u=76281980&t=59)** I can quickly make an update here on the admin page, and now when I go back to the homepage, you can see that that change has been reflected live right here.

> [!info]- Semantic Content
>
> **Analogies:** picture (2), for example (1)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [nick] (1)


### 2. Creating Django Apps

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Starting a new project in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=0)** - [Instructor] Alright, let's go ahead and get started building this website with Django.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=4)** Now in order to kick things off, we need to move into our terminal to start our Django project.
>
> **[0:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=9)** So go ahead and open up your terminal.
>
> **[0:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=12)** Let me give ourselves a little bit more space here to work with.
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=15)** And I'd like to save this project onto my desktop, and so I'm gonna do a little cd into my desktop here.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=23)** Now that I'm here, as long as you have Django installed, you should be able to type out django-admin, and I might recommend hitting the Tab for auto-complete.
>
> **[0:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=32)** That would really confirm that you've got Django installed correctly.
>
> **[0:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=35)** And then we're gonna say startproject.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=39)** Just all lowercase startproject, and then we need to give our project a name.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=43)** Now this is our personal portfolio website.
>
> **[0:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=46)** I think portfolio's a pretty descriptive name, so I'm just gonna say portfolio here.
>
> **[0:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=51)** And go ahead and hit Enter.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=54)** Now with this, you can see just by this one quick command, all of a sudden this new folder has appeared on our desktop.
>
> **[1:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=61)** And if we go ahead and double-click into this, you can see we've got this portfolio folder.
>
> **[1:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=65)** Then within that, this manage.py, another folder called portfolio, the settings, URLs, all that good stuff.
>
> **[1:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=72)** Now, with a Django project, whenever you created a new one, whatever name you gave it, that name is the top level folder and there's an internal folder that contains the settings and the URLs.
>
> **[1:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=83)** And this to me always can get tricky and hard to manage to know, oh, which folder am I in?
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=88)** Is it the top one, or the one that's inside?
>
> **[1:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=91)** So I always like to rename my top-level folder from the name of the project and throw on a little -project.
>
> **[1:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=97)** So now we'll have portfolio-project.
>
> **[1:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=100)** So that this way, I know if I see this top-level one, oh, you know, this is the folder that contains everything.
>
> **[1:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=106)** And if I see just portfolio, I know this has the settings, the URLs, all that good stuff.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=112)** So, let's go ahead and see what this looks like in a text editor.
>
> **[1:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=116)** I'm gonna be using Atom in this course to do all of my code writing, but if you'd like to use some other text editor, feel free.
>
> **[2:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=124)** So let's go ahead and just close out these, I'm gonna open up our project.
>
> **[2:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=129)** We'll go here to the desktop, grab portfolio-project, and now I can see my entire project over here on the left side and I can dive in and check out the settings file here, URLs, all that good stuff.
>
> **[2:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=144)** Now it's really important to always check and make sure that your website's working and running.
>
> **[2:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=149)** And we're gonna, for the first time, fire up our Django project.
>
> **[2:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=154)** So let's go ahead and move back to the terminal.
>
> **[2:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=157)** We need to move into this portfolio project folder that we just created.
>
> **[2:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=161)** So I'm gonna do an ls, make sure that we've got that portfolio project.
>
> **[2:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=164)** I'm gonna cd into that portfolio project.
>
> **[2:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=167)** Let's do an ls, you should see that manage.py.
>
> **[2:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=171)** And now once you're here, go ahead and type out python3 manage.py, you can auto-complete that with Tab, and then do a runserver.
>
> **[3:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=182)** This is going to fire up a little Django server, and we can actually check out our websites.
>
> **[3:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=187)** So go ahead, hit Enter on this.
>
> **[3:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=191)** Okay, you should see a little bit of text here.
>
> **[3:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=193)** You're gonna see there's some red warnings here.
>
> **[3:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=195)** We're gonna dive into that later in the course.
>
> **[3:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=197)** But you should see this URL down here that says this is where your website is currently running.
>
> **[3:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=203)** So if you go ahead and copy this, and move into a browser, let's go ahead and fire up Chrome here, we can actually put in this URL and if you hit Enter on that, look at that!
>
> **[3:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=214)** You get the cool Django rocket.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=216)** This shows you that you have successfully set up a project, and that everything is working.
>
> **[3:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=221)** Oh, isn't that awesome!
>
> **[3:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=222)** This little thing just rockin' and rollin' here.
>
> **[3:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=225)** So, congratulations, you've got your Django server running.
>
> **[3:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=228)** We're at a great starting point.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=230)** One thing that I would like to point out here is that on the desktop, I have included some exercise files.
>
> **[3:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=237)** And these are a way for you to join me at any point during the course.
>
> **[4:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=241)** So, for example, if you're wanting to move into chapter three when I start the third lecture there, you can go to 03_03_begin, and there's what the portfolio-project looks like at that time.
>
> **[4:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=253)** And you can just go ahead, drag this onto the desktop.
>
> **[4:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/starting-a-new-project-in-django?u=76281980&t=255)** Use that, if you ever get stuck on something and you need to see where I was at, all the code is here for you and you can access it any time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (3), throw (1), this. (1)
> **CLI Commands:** cd (2), make (2), ls (2), python3 (1)
> **Tools:** terminal (3), atom (1)
> **File Paths:** manage.py (3)
> **Env Vars:** url (2)
> **UI Navigation:** double-click (1), go to (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)

#### Creating a Django app in a project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=0)** - [Instructor] We've just finished creating a Django project.
>
> **[0:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=3)** Now it's time to create an app in our Django project, and I sorta wanna walk through this and give you better understanding of what's the difference between a project and an app.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=13)** So here on the screen, we've got what's representing a ticketing website.
>
> **[0:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=17)** This website has many components that it's made up of.
>
> **[0:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=20)** There's part of the website that covers events, part of it's a blog, and part of it is accounts letting people log in and out of the website.
>
> **[0:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=28)** In the Django world, the whole ticketing website is considered the project, and then the individual pieces are the apps.
>
> **[0:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=36)** The big reason for this is it makes it very easy to work with.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=39)** Let's say we have a change that we wanna make to our blog.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=43)** We can dive specifically into the blog app and say this is the one point I wanna fix in the blog, make that change, and now everything's ready to rock and roll.
>
> **[0:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=53)** So with our Django web project, we wanna create a specific app for working with jobs.
>
> **[0:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=59)** Now in order to make this Django app, we're gonna have to move into our terminal, and in our terminal right now, the Django server is still running.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=68)** So in order to make a new command, we're gonna have to stop the server to do that.
>
> **[1:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=72)** Just on your keyboard, go ahead and hit Control + C.
>
> **[1:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=75)** That's going to stop the server.
>
> **[1:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=77)** And then we need to make a new app by using our Django admin, just like we did to make a project.
>
> **[1:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=82)** So django-admin, then we're going to now say startapp instead of startproject, and then we need to give a name for our app.
>
> **[1:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=90)** So in our website, we're trying to showcase things that we've done before.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=94)** They could be previous jobs or projects.
>
> **[1:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=96)** I think jobs is a good way to refer to them moving forward so we keep that consistent.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=101)** So let's go ahead and give it the name of jobs.
>
> **[1:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=104)** In the Django world, it's common to have the app name be a plural state.
>
> **[1:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=109)** Rather than having just singular job, it's better to have jobs.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=112)** Not a requirement, but that's the typical convention that people use.
>
> **[1:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=116)** So let's go ahead and hit Enter on this.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=118)** It's a little big uneventful because we do this and you see nothing really changes here, but if we go ahead and move back into Atom, you're gonna notice over here on the left side, we have an entire new folder here called jobs, and this is the jobs app.
>
> **[2:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=134)** Inside of here there's all these different pieces, admin, model.
>
> **[2:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=137)** We're gonna be diving into this throughout the course, but this was just all added to us through the Django admin.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=143)** Now, with this, we've still gotta let our Django project know that we have a new app, so we need to go into our settings.py file inside of the portfolio folder and start up at the top of the file and start scrolling down a bit.
>
> **[2:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=157)** You'll see a list here called installed apps, and this keeps track of all the apps that are in our project, and you'll be a little bit surprised to see that we already have some apps in our website.
>
> **[2:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=168)** Now, these were all added automatically by Django.
>
> **[2:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=170)** This helps with authentication and admin, all these things.
>
> **[2:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=174)** But we want to add our jobs app here.
>
> **[2:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=176)** So let's go ahead and do a new line so that on line 40 we can add a new string that says jobs, and go ahead and put a comma at the end of that.
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=185)** We have now added our jobs app to our project, and Django knows about it because we put it here in the settings.
>
> **[3:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=191)** So go ahead and save this file.
>
> **[3:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=194)** Let's move back to our terminal.
>
> **[3:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=196)** I'd like to just make sure that our website's still working and functioning like we thought it is.
>
> **[3:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=201)** So let's go ahead and hit the up arrow if you wanna get to previous commands.
>
> **[3:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=205)** Let's do this run server.
>
> **[3:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=206)** Okay, so go ahead and hit that.
>
> **[3:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=209)** Let's move back over to Chrome.
>
> **[3:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=212)** Let's reload the home page there.
>
> **[3:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=214)** And look at that, everything's still working.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-a-django-app-in-a-project?u=76281980&t=216)** We now have a project with an app inside of it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1), this, (1)
> **CLI Commands:** make (7)
> **Tools:** terminal (3), atom (1)
> **File Paths:** settings.py (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Setting up URLs in your Django project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=0)** - [Tutor] We're now going to walk through how URL paths work in Django.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=4)** And the basic idea behind this is whenever someone visits a website, there's the base name of the website, in our case, is just a string of letters here.
>
> **[0:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=12)** But there's always something after the slash, right?
>
> **[0:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=14)** Some websites slash Hello, about info, something like that.
>
> **[0:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=18)** Like on our website.
>
> **[0:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=19)** If I wanted to know more information about nick.
>
> **[0:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=22)** What if it was the name of the website slash nick?
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=24)** And we wanted to see something there.
>
> **[0:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=26)** Well, right now if I try to go to our website slash, nick Django gives us back this page not found this 404 error.
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=33)** Saying, Hey, I have no idea what you're looking for, you gave me slash, nick.
>
> **[0:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=38)** I have nothing to show back for that.
>
> **[0:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=40)** And that's we're going to change here, we're going to go through the whole URL path routing to eventually send back some information saying, This is what you're looking for.
>
> **[0:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=49)** So let's go ahead and move into Atom.
>
> **[0:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=52)** So that we can fix this, the place where we're going to start here is inside of url.py.
>
> **[0:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=58)** This is the starting point for whenever someone's visits your website, everything starts here in Django.
>
> **[1:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=64)** So we need to create a new URL path so that if someone enters slash nick, that we can help them out.
>
> **[1:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=70)** So in order to do that, we're going to make a new path.
>
> **[1:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=73)** Do an open and close parentheses with a little comma at the end there, this is just a list of URL patterns that django is looking for.
>
> **[1:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=80)** There's already one right now for the admin, you'll see what that's about in just a minute here.
>
> **[1:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=85)** But let's go ahead and make a path for someone wants to get to nick.
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=88)** So we're just going to put in a string here called nick.
>
> **[1:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=91)** And this is just saying to someone goes to our website, slash nick, this path is going to handle that situation, we then next need to say where we want to send this particular request.
>
> **[1:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=102)** So if someone gives us nick, let's do a comma here.
>
> **[1:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=105)** The next thing is, we have to say where it is that we want to send someone.
>
> **[1:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=109)** And we want to send someone to our jobs app to this views.py.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=112)** So in order to send them here.
>
> **[1:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=115)** We have to go import that view file.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=118)** So we're gonna say import jobs dot views.
>
> **[2:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=124)** So then we have access to that.
>
> **[2:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=125)** So then we can say here, jobs dot views dot and then we need to write the name of a function that we're going to be handling there.
>
> **[2:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=133)** So in this case, let's just call it nick for now.
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=136)** Lastly, we want to give a name for our URL pass.
>
> **[2:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=140)** This is going to be easy to refer to later.
>
> **[2:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=142)** We won't touch this until the end of the project.
>
> **[2:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=145)** But you'll see how cool it is there.
>
> **[2:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=146)** For the meantime, let's just go ahead and say the name is equal to nick.
>
> **[2:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=151)** Alright, so go ahead and save this file.
>
> **[2:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=154)** And again, this sort of means if someone comes to slash nick.
>
> **[2:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=158)** We're gonna say, okay, slash nick.
>
> **[2:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=160)** Let's go send them to the views file in the nick function.
>
> **[2:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=164)** So let's go to our views file.
>
> **[2:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=166)** There's no nick function.
>
> **[2:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=167)** So we gotta go ahead and create that.
>
> **[2:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=169)** Now, I'm going to say def, nick, inside of here.
>
> **[2:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=174)** We have to have the parameter called request, we're going to do a colon.
>
> **[2:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=178)** And essentially, we need to return back some HTML to the user.
>
> **[3:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=182)** So we can do that using this render here.
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=185)** So we're going to say return render, and inside of the parentheses here, first, we're going to pass the request.
>
> **[3:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=193)** And then we need to type out what HTML we want to send back to the user.
>
> **[3:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=198)** Now, we don't have any HTML files.
>
> **[3:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=200)** So now is a good time to create some.
>
> **[3:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=203)** So Django goes a little bit particular about how this all works.
>
> **[3:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=206)** But just work with me here, and you're going to see this inside of our jobs folder.
>
> **[3:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=210)** We're going to create two new folder.
>
> **[3:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=212)** So the first one is going to be called templates.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=216)** Okay, inside of templates, we're going to make a another folder, this is going to be called jobs.
>
> **[3:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=222)** And then inside of the jobs folder, which is inside of templates, which is inside of the bigger jobs folder.
>
> **[3:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=228)** I know we're getting complex here.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=230)** We're going to create a new file that for the time being.
>
> **[3:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=233)** Let's just call nick.html, okay.
>
> **[3:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=236)** And this is the HTML we're trying to eventually send back to the user.
>
> **[3:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=239)** So let's do the classic programming.
>
> **[4:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=241)** Welcome will say hello, world, the little exclamation point there.
>
> **[4:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=246)** Let's save this file.
>
> **[4:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=248)** Then let's move back to our views.py and say, Okay.
>
> **[4:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=251)** What we want to return back here is jobs/nick.html, okay, and go ahead and give that a safe.
>
> **[4:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=260)** So with this all in place, let's move back to our browser here.
>
> **[4:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=265)** Let's reload this page.
>
> **[4:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=267)** And you'll notice it shows hello world.
>
> **[4:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=271)** Now, I want to walk through this process with you and change this back.
>
> **[4:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=275)** Because we don't actually want a slash nick on our website.
>
> **[4:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=278)** But essentially what has happened here, when someone types in the name of the website slash nick, it moves into our urls.py and says, out of all these URL patterns, Does any of them match the word nick, and look, there's this one right here.
>
> **[4:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=294)** And it says, okay, we need to go send them to the views file, and look at this nick function.
>
> **[4:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=299)** So then we go over to the views file, and it says, oh, okay, here's the function for that.
>
> **[5:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=303)** We should send them back this HTML file.
>
> **[5:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=306)** And this HTML file is located here.
>
> **[5:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=309)** And if we look at that, it says hello world, which is what we saw back here.
>
> **[5:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=314)** So like I said, we don't want to have a slash nick on our website.
>
> **[5:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=317)** So we need to go ahead and change this to home.html.
>
> **[5:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=321)** So let's go ahead and right click here.
>
> **[5:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=323)** We're going to rename this to home.html.
>
> **[5:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=327)** Make sure you hit Enter, and that you can see that this file has changed from nick to home.html and with that in place.
>
> **[5:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=334)** Let's go ahead and move back into Chrome here.
>
> **[5:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=337)** If we go ahead and reload our page here at slash nick, we get an error.
>
> **[5:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=341)** And that's because Django is telling us I don't have any paths that match slash nick anymore.
>
> **[5:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=346)** And that's on purpose, right?
>
> **[5:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=347)** Because we want to show the homepage now.
>
> **[5:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=349)** And so if we go ahead and change this URL to just be the homepage hit enter on this.
>
> **[5:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=354)** Look at that we see our hello world.
>
> **[5:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-urls-in-your-django-project?u=76281980&t=357)** So hopefully you have a great grasp now on how the routing in Django works from when someone enters something in, as a URL to spitting back the HTML page to them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (5), case, (2), for. (2), pass (2)
> **Env Vars:** url (8), html (7)
> **File Paths:** home.html (3), views.py (2), url.py (1), nick.html (1), jobs/nick.html (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (2)
> **Tools:** atom (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)


### 3. Django and Databases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating the models in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=0)** - [Instructor] We're now moving to the point in our project where we're going to be working with the database, and the database is where we save information about different things on our website that we want to have persist over time, and one of these is going to be the jobs on our site right?
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=15)** We're trying to display all the different jobs that we've worked before and the database is gonna to be a great place to save this information.
>
> **[0:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=22)** So, let's go ahead and move over to Atom where we're gonna be talking about creating a model that will be saved into the database.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=31)** Now what is a model?
>
> **[0:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=32)** A model is essentially just a Python class that can be saved into a database.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=37)** Django does a great job of transforming our class into the database and back all seamlessly for us.
>
> **[0:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=44)** So inside of our jobs folder, which is the jobs app, we're gonna move into the models.py.
>
> **[0:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=51)** Now inside of here, like I said, we're just creating a Python class that is gonna be able to be saved into the database.
>
> **[0:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=58)** So we're gonna type out here class Job, that's the name of our model, it's not like it has to be the same name as your app, it's just the appropriate name here, and you can have more than one model if you'd like inside of your models.py, but we're just creating our job model here, and inside of the parentheses this is something particular you're gonna have to add as we're taking this models that was imported and we're gonna say models.Model, make sure you get the capital on that Model, and that's gonna be the starting point for this special Python class that can be saved into the database.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=94)** Now for a job there's really only two properties that exists for it, and I'm just gonna write here in a comment that it is going to have an image kind of showing what it looks like, what it entails, and we're also gonna have a summary so that there's a little text explanation here.
>
> **[1:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=110)** So, for the image really all we have to do here is just like a regular Python class, we're going to give a name here like image, and we're gonna say that this is equal to, and we're gonna use that lowercase models up there, and we're gonna say models., and then now say capital ImageField and then in parentheses we have to say where it is that we wanna save images.
>
> **[2:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=135)** So but before we say where we're gonna save the image I want to take a step back and say, What have we created here?
>
> **[2:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=140)** Well, we've created a new property image that is going to be of type ImageField, and ImageField essentially is some data that's gonna be saved as an image that accepts PNGs and JPGs, all that good stuff, but we do have to specify in here where we want this to be saved, and it's in particular looking for a folder name.
>
> **[2:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=160)** So we're gonna say, all lowercase, upload_to=, and then inside of a string here we're just gonna say images/, and this is essentially us just saying, hey put this in a folder called images, and that's all it takes to create a property in order to save an image.
>
> **[3:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=181)** Now, next for the summary just like above, we want to say summary=, and the summary is going to be text, so rather than an ImageField in this case, we're going to be using something called a CharField.
>
> **[3:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=195)** So we're gonna say lowercase models.CharField, and inside of this parentheses it's looking to say how big do you want this CharField to be.
>
> **[3:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=206)** You can't just have a regular old CharField, you gotta say how much space do you want this to take up because this is going to affect how things are saved in the database.
>
> **[3:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=214)** So in this case we're gonna say all lowercase max_length and set this equal to some number, now this is really arbitrary, it's up to you.
>
> **[3:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=223)** In our case I don't think we should have a summary more than 200 letters because that is just gonna start dragging on and on, and it's going to make the website kind of cluttered.
>
> **[3:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=233)** So, we're gonna keep what we have here.
>
> **[3:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=236)** I'm gonna go back and delete these little comments that we have because just the name of our properties I think describes what it is that we're trying to do here, that was just a little placeholder for us.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=245)** We're going to save this file, and if we go ahead and move back to our Terminal here, you can see just by not even running anything, just because the server was running, we get this little error here that is saying hey you need to have pillow if you know doing this, and it looks really complicated.
>
> **[4:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=262)** All it's trying to say is, if we move back to Atom here, any time you work with an ImageField you have to have something from pip called pillow installed in order to move forward.
>
> **[4:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=273)** It just allows Django to work with images much simpler.
>
> **[4:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=276)** So it's going to be a really simple command to fix this.
>
> **[4:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=279)** First we're gonna Control+C to get out of the server, and then we're just gonna type pip3 install, and then all lowercase pillow.
>
> **[4:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=289)** K, go ahead and hit enter.
>
> **[4:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=291)** It's gonna go do it's thing.
>
> **[4:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=293)** It's all installed now.
>
> **[4:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=295)** So then we just have to run the server again, and look that error disappears, and we can always go back to our browser, we won't notice anything different, but we can see the homepage here.
>
> **[5:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-the-models-in-django?u=76281980&t=307)** This is a great point for us.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (2), pip (1), pip3 (1)
> **Code Keywords:** let (1), class, (1), case, (1), delete (1), this, (1)
> **Tools:** atom (2), terminal (1)
> **Definitions:** is a  (2), essentially is (1)
> **File Paths:** models.py (2)
> **Code Identifiers:** upload_to (1), max_length (1)
> **Analogies:** just like (2)
> **Prerequisites:** you need to have (1), install (1)

#### Postgres setup for Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=0)** - [Instructor] Let's have a little discussion about databases.
>
> **[0:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=3)** The great thing about Django is it's made to work with lots of different databases.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=8)** In fact, you may have noticed, if we go ahead and open up our portfolio project there's this mysterious little file here called 'db.sqlite3' and that in fact, Django comes with a database ready to rock and roll.
>
> **[0:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=22)** That's this 'sqlite3' and if we go ahead and move over to Admin here, you can actually see if we go to our settings which is in the portfolio folder and we scroll down here.
>
> **[0:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=36)** Let's go down to our 'DATABASES'.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=37)** You can see there's a little bit of code here to say, "We want to have a database set up with the following name."
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=43)** It should be 'sqlite3', all this stuff.
>
> **[0:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=46)** That's the default in every Django project but there's lots of different databases that Django can work with.
>
> **[0:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=53)** One of the most popular ones is 'PostgreSQL' so that's the one that I want to teach you because it's the most relevant.
>
> **[0:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=59)** And so, what we're going to do is go through the process of installing PostgreSQL so that we can then come back to this 'settings.py' file and get the connection to the PostgreSQL database all set up.
>
> **[1:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=72)** So in order to get PostgreSQL onto our computer, we're going to have to download it.
>
> **[1:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=78)** And so, let's go ahead and move to our Chrome Browser, and we are going to go to the website where we can get this.
>
> **[1:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=86)** So type in "[postgresql.org](https://postgresql.org)".
>
> **[1:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=93)** Now once we are on the website, we want to move over here to DOWNLOADS.
>
> **[1:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=98)** We're going to go to macOS.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=101)** And inside of macOS there's lots of different versions here but the one that I like is '[POSTGRES.APP](https://POSTGRES.APP)'.
>
> **[1:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=107)** This is very user-friendly, straight-forward, and simple.
>
> **[1:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=111)** So go ahead and select this, and now click on 'Download'.
>
> **[1:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=115)** And this'll start the download to our computer.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=118)** So I'll go ahead and pick things back up when this download has finished.
>
> **[2:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=125)** So now that our file has finished downloading let's go ahead and run through the installation here.
>
> **[2:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=132)** We're going to take PostgreSQL and drag it into our 'Applications' and once we've done that we want to go ahead and fire that up for the first time.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=143)** So we'll wait for that to copy over.
>
> **[2:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=147)** We'll move into our 'Applications' and just double click on PostgreSQL here.
>
> **[2:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=155)** Now with PostgreSQL there's a couple of settings that we want to make sure that we get right here, so let's go ahead and tap on 'Server Settings' here.
>
> **[2:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=162)** The first one is make sure your port is '5432'.
>
> **[2:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=165)** You can customize this if you want, but this is the default for PostgreSQL so we should probably just keep that as is.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=172)** But what we want to do inside of here is make sure we have this 'Automatically start server' checked to say "Anytime we open up this app, we want to make sure PostgreSQL is up and running." Okay?
>
> **[3:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=183)** So let's go ahead and hit the 'Initialize' button here, this is going to get things started up for us.
>
> **[3:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=188)** The very first time you can see there's been a couple of different things added here; postgres, nickwalter (that's just my username on this computer), template1, all these different things here.
>
> **[3:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=198)** But what we want to do is double click on the postgres that we have here.
>
> **[3:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=203)** This is going to open up a new terminal window for us.
>
> **[3:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=206)** So you can see 'cause I already had a terminal window open, it just made a new tab there.
>
> **[3:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=210)** But you should see if you're in the correct terminal postgres is equal to with that hash sign.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=216)** If you see that you know you're in the correct place.
>
> **[3:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=219)** So let's go ahead and move forward with now creating a new database inside of PostgreSQL.
>
> **[3:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=225)** Because we are using a user called 'postgres' we have to set a new password here.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=230)** So we're going to do a '\password' and then we're going to give it a new name 'postgres'.
>
> **[3:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=239)** And for the new password here go ahead and choose something.
>
> **[4:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=242)** I'm just going to use 'django1234'.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=245)** Feel free to do whatever you'd like.
>
> **[4:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=246)** If you're going to move into a production environment, meaning you're putting this website out for the world to see, you're going to want to have a much more complex password than that, but that's an entirely different discussion for what we're dealing with here.
>
> **[4:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=260)** The next thing that we want to do is create a new database.
>
> **[4:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=263)** And so in all caps we need to type 'CREATE DATABASE' and then we're going to give it a name, and the name in here doesn't really matter but it should describe what this database is holding information for.
>
> **[4:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=277)** And for us, it's our portfolio project.
>
> **[4:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=280)** So I'm going to name it 'portfoliodb;' and once you have a name for it you need to have a semicolon at the end and then you can go ahead and hit 'enter'.
>
> **[4:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=289)** So this in PostgreSQL has created a new database for us.
>
> **[4:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=294)** Now the next thing that we need to do is be able to connect to this database that we just created.
>
> **[4:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=299)** So I'm actually going to go ahead and close out of this terminal tab that we have here and let's go ahead and look at PostgreSQL.
>
> **[5:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=306)** You can see we got this cool little addition to the Mac Menu there and we can see our new database 'portfoliodb', that's pretty cool.
>
> **[5:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/postgres-setup-for-django?u=76281980&t=315)** And as we move back into Admin, we now need to change this code to be able to connect to our database, but we're going to be talking about that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), this, (1), for. (1)
> **CLI Commands:** make (4), sqlite3 (3)
> **Env Vars:** databases (1), downloads (1), postgres (1), app (1), create (1)
> **UI Navigation:** go to (3), click on (2), scroll down (1)
> **Tools:** terminal (4)
> **Prerequisites:** set up (2), you need to have (1)
> **Code Identifiers:** macos (2)
> **URLs:** [postgresql.org](https://postgresql.org) (1), [postgres.app](https://postgres.app) (1)

#### Connecting your Django project to Postgres
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=0)** - [Instructor] So we've created a new database in PostGreS.
>
> **[0:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=3)** Now we need to let our Django project know about it and connect to it.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=8)** So let's go ahead and move back in to Adam.
>
> **[0:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=11)** Remember here in the setting.py we have the database that was there by default.
>
> **[0:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=16)** This that sqLite3 database, we want to change this now to point to our PostgreS database and we're going to have to put in a lot of different information to make this all work, so let's just go ahead and take it line by line and get there.
>
> **[0:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=30)** So starting first with the engine, we're going to delete what we have for this django.db.backend.sqLite3.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=37)** Instead of sqLite3, we're going to tell Django that we want work with a PostGreS database.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=43)** So we're going to type in here: PostGresql, okay, all one word there, keep that django.db.backends.postgresql.
>
> **[0:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=53)** Next, for the name: this is simply just going to be whatever the name of our database is.
>
> **[0:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=58)** So we're remember when we were naming this we decided to call it portfoliodb?
>
> **[1:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=62)** Well, we just simply type out "portfoliodb" right there.
>
> **[1:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=67)** Now there's a few other things that we have to mention here for PostGreS with sqLite3, you don't have to have any usernames or passwords or anything like that.
>
> **[1:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=76)** But with PostGreS, it's a little more robust and that's why we're using it, so we've got to provide those credentials here.
>
> **[1:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=82)** The next one we're going to be adding is user, so all caps here - put this as a string - and then we're going to do a colon.
>
> **[1:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=89)** The value on the other side of this is going to be the username that we used to create this database and that's going to be Postgres.
>
> **[1:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=96)** So we'll go ahead and type that there, comma so we can add another item here.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=101)** Next we're going to be looking for the password.
>
> **[1:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=104)** So all caps there, do our colon, and the password is whatever you had set.
>
> **[1:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=109)** I had used django1234, not sure if you chose the same one.
>
> **[1:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=114)** But if you ever, you know, forget that password you can always go back, rewatch the video, and see how we set that password; you can change that if you'd like.
>
> **[2:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=123)** Next thing that we need to provide there is the host.
>
> **[2:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=125)** This is just saying where should I look for this database and this going to be just running on our own computer.
>
> **[2:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=131)** So just type all lowercase "localhost" and as a small little side caveat, localhost is the same thing as 127.0.0.1.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=143)** So in fact if we go move over to our browser here, and we wanted to change this to say, instead of 127 all that, if we just change this to localhost this will actually come to our same website.
>
> **[2:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=157)** So those two things are one and the same, I think that's a fun little anecdote that will help things make more sense.
>
> **[2:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=163)** Alright, one more thing we've just gotta add here and that is the port number, so all caps: let's type out "port" and remember we had specified in the settings that we wanted the port number to be five four three two, that's the default for Postgres databases, okay?
>
> **[3:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=180)** So with this information now in the settings.py, essentially what we're saying is "Django, for the database, we want you to look to this Postgres database with the name portfoliodb, the username Postgres, password, all that information, so now it should look over there.
>
> **[3:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=198)** So let's move back into our terminal here, and you can see that we already have an error here without doing anything and it's saying "Hey, I essentially can't connect to the database" down at the very bottom.
>
> **[3:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=209)** You can see this line here that says "No module named psycopg2" and in order to fix this we're going to hit control C to get out of our server and we're going to install that with pips, so we're going to say "pip3 install" and we want to just copy exactly what we see here, you can spell it out if you'd like to, but it's P-S-Y-C-O-P-G-2.
>
> **[3:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=232)** This is essentially the code that helps us to connect to Postgres.
>
> **[3:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=236)** So just go ahead and hit enter on this.
>
> **[3:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=239)** Okay, once that's all completed, we can go ahead and run the server one more time.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=245)** Once we have this up, we should be able to move back to our browser here, reload this, and now have no issues.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=254)** Now, one thing that I would like to point out here, if you're on Windows you won't see this error but here on the Mac you'll get this little identifier here that's saying, "hey, you know, there might be in new version coming out you might need this binary version of this."
>
> **[4:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=268)** So if you just copy the line that we have here, pip_install with the dash binary, and I'll go ahead and do a control C to get out of the server; we'll paste this in.
>
> **[4:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=278)** Make sure that you change this from pip to pip3.
>
> **[4:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=281)** But if you go ahead and install this and then run our server one more time, you'll see that warning won't even show up.
>
> **[4:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-your-django-project-to-postgres?u=76281980&t=288)** So not necessary there, but a good healthy thing to do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), default. (1), delete (1), module (1)
> **CLI Commands:** sqlite3 (4), make (3), pip3 (2), pip (1)
> **Code Identifiers:** sqlite3 (4), pip_install (1)
> **Prerequisites:** install (3)
> **File Paths:** setting.py (1), settings.py (1)
> **Warnings:** caveat (1), warning (1)
> **Versions:** 127.0.0 (1)
> **Tools:** terminal (1)

#### Make Django migrations and migrate
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=0)** - [Instructor] It's time to address a little bit of an elephant that's been in the room, and that's every time that we run our server here, you see this red text that says, "You have 15 unapplied migrations."
>
> **[0:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=10)** And you might be thinking, "Well, what are these "migrations that Django's yelling at me about?"
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=15)** Well, that's what we're gonna cover here.
>
> **[0:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=17)** A migration is essentially a way to set up your database for a project.
>
> **[0:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=22)** And we're gonna be making one so that we can add the model that we created into our database, so let me walk you through that and I think by the end of this you'll understand what migrations are.
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=33)** So let's move over to Atom just real quick so that we can take a look at the model that we had created.
>
> **[0:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=38)** Again, that's in the jobs folder.
>
> **[0:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=41)** We're gonna go to that models.py.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=43)** Remember when we made this Job class and we said, you know, "A job has an image and a summary?"
>
> **[0:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=48)** Now, in order to save these into the database, the database has to have a place to hold them.
>
> **[0:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=53)** Essentially it's going to create a table, and then we can save into those table some rows where, you know, an image is this and a summary is that.
>
> **[1:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=61)** And so in order for this to happen we first have to make a migration for this.
>
> **[1:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=66)** And luckily for us, Django does this automatically.
>
> **[1:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=69)** Let's move to our terminal here.
>
> **[1:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=71)** I'm gonna do a Control-C to get out of running the server, and I'm gonna type out python3 manage.py and then I want to makemigrations.
>
> **[1:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=84)** And you might be wondering, "Well, when should I "be running this makemigrations?"
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=88)** Any times you add a new model or you make a change to a model, that is a good time to make a migration.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=94)** So we'll go ahead and run this.
>
> **[1:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=96)** You can see down in the code below it said, "Hey, we added this new migration 001_initial," saying this is, you know, the first time we're creating a model for a job.
>
> **[1:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=107)** And if we try running that makemigrations one more time, it says, "Hey, there's no more changes here.
>
> **[1:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=111)** "There's nothing for me to do."
>
> **[1:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=113)** So I want you to see this, that we can actually see this file that was created, this migration file.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=118)** It's in jobs, migrations, and then that file name.
>
> **[2:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=122)** So if we go ahead and move over to Atom here, and we look in this migrations folder, look at this.
>
> **[2:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=127)** We can actually see the code, and this is code that you should never touch.
>
> **[2:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=132)** This is all handled by Django, but essentially what it's saying is it's saying, "Okay, we need "to make a new model.
>
> **[2:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=138)** "It's gonna be called a job.
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=139)** "It's gonna have a image in there, "it's gonna have a summary, "all of those things."
>
> **[2:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=144)** So we now have these migrations, and if we move back into our terminal here, and let's run our server one more time.
>
> **[2:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=152)** You'll see our red message has updated.
>
> **[2:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=155)** Before it said, "You had 15 unapplied migrations."
>
> **[2:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=157)** Now you have 16 unapplied migrations, and that's because we just made one there, and if you're wondering what the other migrations are, those come from a brand-new Django project, sort of the starting point.
>
> **[2:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=169)** There's a couple of just set up things that you have to use for your database, and in fact if you wanted to see the more details about where they come from, if we go to our settings.py and we scroll to the top of that file, here inside of the INSTALLED_APPS, this is where all of those migrations are coming from.
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=185)** But let's get back to our terminal.
>
> **[3:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=188)** It's finally time to migrate our database.
>
> **[3:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=191)** So to do this, we wanna stop running our server, Control-C, and we're gonna say, "python3 manage.py", and now we want to do migrate.
>
> **[3:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=202)** Just simple as that, so go ahead and hit enter on this, and essentially what's happening here is it's running through all 16 of those migrations and it's getting the PostgreS database that we just did all the code to connect to all set up for our starting point here.
>
> **[3:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=218)** So the big moment for us here, if we run our server one more time, you'll notice it just fires up.
>
> **[3:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/make-django-migrations-and-migrate?u=76281980&t=225)** There's no more warnings here saying that you've got migrations to work with, and what this means is we are now ready to be able to save things into that database through Django.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (3), this, (3), from, (1), from. (1)
> **CLI Commands:** make (4), python3 (2)
> **Tools:** terminal (3), atom (2)
> **File Paths:** manage.py (2), models.py (1), settings.py (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)
> **Env Vars:** installed_apps (1)
> **Definitions:** is a  (1)

#### Setting up an admin panel in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=0)** - So, now that our database has been migrated, we're ready to start adding things into the database, seeing what's inside of there, and luckily for us, Django has an awesome way to work with a database, and that is through the admin.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=13)** Now, if we go ahead and move back into our project, you'll see some clues that this admin exists.
>
> **[0:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=20)** If we go over to our urls.py, you can see, one of the URL patterns we have was for admin, and it takes the user the user to an admin.site.urls, and you might be wondering, "Well, what's this about?"
>
> **[0:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=32)** Well, let's go check it out, right?
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=33)** In these URL patterns, if someone types in admin, it's gonna take them to this place, so, let's go move to our browser here.
>
> **[0:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=42)** We're gonna have our local host pull in 8000, and then, we're gonna do a slash and say admin.
>
> **[0:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=48)** And you'll notice, when we do this, whoa!
>
> **[0:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=50)** All of a sudden, this new page shows up, and you know, we didn't create this.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=54)** This is something that comes with Django that allows us to work with the database.
>
> **[0:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=59)** That's the whole purpose of the admin part of Django, is to make it really easy to see, "What do I have in my database?
>
> **[1:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=64)** "I want to add this, remove this, edit this thing."
>
> **[1:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=67)** It's all there.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=68)** Now, to get into here, we have to have a username and password, and we can create that in the terminal, so let's move back to the terminal here, and first, get out of our server here by doing a Ctrl-C.
>
> **[1:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=82)** Then, we need to create a user, and it's not any regular user.
>
> **[1:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=85)** I love how Django calls this, it's a superuser.
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=88)** So, we're gonna say here, python3 manage.py, and now, just type all lowercase, create superuser.
>
> **[1:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=98)** Sounds really big and powerful, here.
>
> **[1:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=100)** Go ahead and hit enter on that.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=101)** Now, it's gonna take us through this prompt of creating a new user.
>
> **[1:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=105)** So, it says, go ahead and pick a username for this.
>
> **[1:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=107)** I'm gonna say maybe Nick is a good name here.
>
> **[1:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=110)** Email address, you don't have to put one here.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=112)** I'm just gonna put enter to skip that.
>
> **[1:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=114)** You can always come back and change this at any point in time.
>
> **[1:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=117)** But then, you've got to pick a password.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=118)** So, again, I'm gonna choose a django1234.
>
> **[2:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=122)** Feel free to do whatever you'd like.
>
> **[2:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=123)** You've got to make sure that you enter the same one again, and once you've done that, it's gonna say, "Superusers created successfully."
>
> **[2:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=132)** Now, once we have this information, we're gonna fire back up our server.
>
> **[2:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=138)** Let's move to the browser again, and let's reload this page, and now, log in with the superuser that we had just created.
>
> **[2:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=146)** So, I'm gonna type in Nick here, cause that was the name of my user, and then, I'm gonna do password django1234.
>
> **[2:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=154)** Log in, and boom, all a sudden, this brand-new screen appears, right?
>
> **[2:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=158)** There's all sorts of information in here.
>
> **[2:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=160)** As part of the database, it's actually saving the information about the users, and the only user we have is the superuser we created.
>
> **[2:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=167)** If we click on Users, we can actually see Nick, who we just created here.
>
> **[2:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=170)** Like I said, you can change the email address here, or the first name, last name, if you want to, but the big point of our website is that we want to be able to create jobs and see those jobs, right?
>
> **[3:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=182)** We did all that work of making migrations so that we could see it, and right now, it's just not appearing anywhere.
>
> **[3:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=188)** So, to remedy this, we're gonna go ahead and move back to Atom, and once we're there, we want to go move to this admin.py, and essentially, what we need to do in this file is say, "Hey, admin, there's a new model "that you need to know about.
>
> **[3:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=202)** "It's called Job.
>
> **[3:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=203)** "Please be aware of it."
>
> **[3:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=204)** So, we need to import that job up at the top.
>
> **[3:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=207)** We're gonna say from, space, and then, we're gonna do .models, which is just saying, "Hey, let's go ahead and tap into this Models file "that we have right here."
>
> **[3:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=217)** And, we're gonna say import, capital, Job.
>
> **[3:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=222)** Once we've done that, this is gonna be real simple for us.
>
> **[3:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=225)** We just say admin.site.register, and then, inside of the parentheses here, we're gonna put our capital Job.
>
> **[3:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=236)** And, go ahead and save this file, and now, just by creating this one fix, let's go back to the browser here.
>
> **[4:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=243)** If we reload that page, oh, my goodness, look what shows up.
>
> **[4:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=247)** It's the Job.
>
> **[4:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=248)** So, this is the starting point for us to be able to go add some new jobs here.
>
> **[4:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=253)** We can edit them, delete them.
>
> **[4:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/setting-up-an-admin-panel-in-django?u=76281980&t=255)** We can now work with the database in a visually friendly way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (5), this. (2), from, (1), import, (1)
> **File Paths:** urls.py (1), manage.py (1), admin.py (1)
> **CLI Commands:** make (2), python3 (1)
> **Tools:** terminal (2), atom (1)
> **Env Vars:** url (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Creating model objects via the admin panel in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=0)** - [Instructor] So we've come to an exciting point in our project.
>
> **[0:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=3)** We did a lot of work to get our database up and running, get it connected with our Django project.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=8)** We're now gonna be creating our very first job object.
>
> **[0:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=11)** So make sure you're here on the admin site.
>
> **[0:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=14)** Remember that's just the localhost:8000/admin.
>
> **[0:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=18)** Once you're logged in with your super-user, we're gonna move into Jobs here, if you just click on that.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=23)** And we're gonna hit this ADD JOB button.
>
> **[0:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=25)** So essentially what this is doing is saying, "I want to add a new job into the database."
>
> **[0:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=30)** And it's asking us for the two properties.
>
> **[0:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=32)** It's saying, "I need an image and I need a summary."
>
> **[0:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=34)** Remember, we had said this is maxed out as 200 and these eventually will get saved to place called images.
>
> **[0:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=42)** Now, if we're gonna make a job, you have to have some sort of image to show here, and so the whole idea with your portfolio here is you're showing past jobs that you worked out or side projects that you were working on, so you'll want to include relevant pictures there for you.
>
> **[0:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=56)** I went ahead and moved over to the desktop here and added three example projects.
>
> **[1:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=61)** Here's one of an app, a sum of some code, and here's a different one of a website.
>
> **[1:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=65)** Now there's nothing magical about these.
>
> **[1:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=67)** Feel free to use any image that you'd like.
>
> **[1:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=69)** You can also get these if you go to the exercise files, if you would like to use these particular images.
>
> **[1:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=75)** But I'd really encourage you to use your own because I want you to have a portfolio that you can share that's actually about you and the things that you've worked on.
>
> **[1:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=83)** So just wanted to make you aware of that.
>
> **[1:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=86)** Let's go ahead and move back here to creating our job.
>
> **[1:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=90)** So first thing it says, we've got to pick a file.
>
> **[1:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=92)** So I'm going to go ahead and move to my desktop here, and I'll say that I'm going to start with the code.
>
> **[1:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=99)** So I'm gonna pick this code.jpg, open that up, and then I have to have some sort of summary of what this job was that I worked.
>
> **[1:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=106)** So I'm just gonna make up some example text here.
>
> **[1:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=109)** I'm gonna say, "I spent three months in Finland "creating a back-end service for farmers."
>
> **[2:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=121)** And it was a real good one, trust me.
>
> **[2:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=123)** Let's get that all spelled correctly.
>
> **[2:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=124)** Great, so once you have an example image and some summary text inside of there, we're gonna hit this SAVE button, and all of the sudden we now have a new object saved into our database.
>
> **[2:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=137)** This is a big deal.
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=139)** And one thing that I want you to note with this is that we can come into this job object and we can check it out, we can see what image that we have there, we can change, you know, "Oh, it actually wasn't Finland.
>
> **[2:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=150)** "It was actually Greenland where I did the work."
>
> **[2:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=152)** We can make any changes.
>
> **[2:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=153)** If we make a change, we just have to hit the SAVE button, and you'll notice if we go and click on that, it is now saved in the database and we can check it out there.
>
> **[2:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=162)** So one other thing that I wanna note here is where this image has been saved, because if we move back to our desktop here, right, there's this code.jpg, but essentially what we've done is we've uploaded it into our Django server, and it saved it someplace.
>
> **[2:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=178)** And I want you to see where that is.
>
> **[3:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=180)** So let's go ahead and move over into Atom here, and you'll notice a new folder has been added to the very top.
>
> **[3:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=186)** I'm gonna shrink these so that you can really visualize what's going on here.
>
> **[3:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=190)** Inside of the portfolio project, we have a new images folder.
>
> **[3:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=193)** And what's inside of there?
>
> **[3:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=195)** It's our code.jpg.
>
> **[3:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=196)** So this was the image that was uploaded to our Django server, and the reason that it saved to this folder called images is if we go back to our jobs, models, you can see in this ImageField I said, "Please upload this to images."
>
> **[3:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=211)** Right, that was the name of the folder we had, that there's nothing magical about the name images.
>
> **[3:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=215)** That's just what we decided.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-model-objects-via-the-admin-panel-in-django?u=76281980&t=216)** That could be called photos, that could be called media, whatever you'd like, but that's the flow that happened so that when we upload an image it decided to come to this place.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Keywords:** let (3), super (1)
> **Env Vars:** save (2), add (1), job (1)
> **UI Navigation:** click on (2), go to (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Cross-References:** go back to (1)
> **Tools:** atom (1)

#### Pulling objects from the database in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=0)** - [Instructor] So we now have this job object saved inside of our database.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=4)** The next step for us in this project is be able to take all the objects that are inside the database and get them to show up on the website to the end user.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=13)** And not just in this admin side, right?
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=15)** This admin part of our Django project should never be seen by someone visiting your website.
>
> **[0:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=21)** If someone could come to your portfolio and say I'm gonna add jobs for you.
>
> **[0:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=25)** No, that's not how that should work.
>
> **[0:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=27)** It should be only you can add those jobs and make changes.
>
> **[0:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=30)** What we'd really like is if we came to the home page, that we could see the jobs listed out there.
>
> **[0:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=36)** So, in order for this to happen we have to in code be able to pull things from the database.
>
> **[0:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=41)** So let's go ahead and move over into Adam.
>
> **[0:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=45)** And we're gonna move to our views.py, and this is where we sort of prepare a html file to be shown in this case, right, our home.html.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=54)** So we're gonna write a little bit of code to grab all the jobs from our database and send them forward to this home.html.
>
> **[1:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=62)** So in order to do this to work with the job code, we have to import that class.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=68)** So we're gonna come here and we're gonna say from, .models, import.
>
> **[1:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=76)** And we wanna import capital, job.
>
> **[1:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=79)** Now that we've got that we can hear inside of the method for our homepage say, let's go grab all the jobs and put them into a new variable called jobs.
>
> **[1:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=89)** So we're gonna say jobs is equal to, and we're just gonna say capital Job.objects.
>
> **[1:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=96)** Now I wanna take a quick, let's make sure we spell that objects, there we go, I wanna take a quick moment and talk about how special this is right here.
>
> **[1:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=105)** Essentially all the code it takes to get all the job objects from the database and here inside of our code, is right here.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=112)** We just say the name of the class.objects.
>
> **[1:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=115)** Django is so magical in that it only takes this amount of code to grab everything, have it here, ready to rock and roll.
>
> **[2:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=123)** This may look like a really simple thing, but this is the real magic of the Django framework.
>
> **[2:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=128)** If we tried to do this on our own this could get really messy, really quickly.
>
> **[2:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=132)** So with this in place we now have this list of jobs here.
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=136)** How do we get this to show up on this home.html?
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=139)** Well whenever you render an html page to be shown back to the user, you can actually pass forward some information.
>
> **[2:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=145)** So if we put a comma here, we can add a dictionary with some additional information.
>
> **[2:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=150)** So, we're gonna go ahead and do our curly brackets here and inside first we're gonna give a name to this, and we're gonna say this is our jobs and we're gonna do a colon here.
>
> **[2:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=161)** And now we want to specify this list of jobs.
>
> **[2:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=164)** So this is important to note, on the left side this is just a string.
>
> **[2:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=168)** This is just naming what it is that we're gonna be passing forward.
>
> **[2:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=171)** And on the right side is the actual list of jobs here.
>
> **[2:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=175)** So we'll go ahead and save this.
>
> **[2:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=177)** Next, we're gonna move over to our home.html, where now it's our job to take that job list that was passed to us and get them to show up on the homepage here.
>
> **[3:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=187)** So let's go ahead first by displaying some text, maybe let's do this in an h1 tag to make it nice and big we'll say, all my jobs.
>
> **[3:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=200)** Okay and we'll do an ending h1 tag.
>
> **[3:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=203)** Okay, and then below, this is where we want to loop though all the lists.
>
> **[3:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=207)** So this is where things get a little bit interesting because we're not gonna just be writing regular html code, we're gonna do sort of this middle ground here that's not exactly python code either.
>
> **[3:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=217)** It's this special language for creating html files in Django that can display things that have been passed into it.
>
> **[3:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=225)** So, what we're gonna do is a curly bracket with a percentage sign.
>
> **[3:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=228)** And we need a percentage sign at the front and end of each of those curly brackets here.
>
> **[3:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=233)** And then inside, this is where we're gonna say some code that's gonna look pretty familiar.
>
> **[3:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=238)** We're gonna say for job in jobs .all.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=245)** And essentially what we're saying here, is we want to loop through all the different jobs that we have and if for this for loop there's gotta be some ending point.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=254)** This is where things kinda break from python, and you know not exactly the same as python code because python is all worried about indentations and all that.
>
> **[4:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=263)** You notice that we don't have a colon here or anything like that.
>
> **[4:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=265)** At the end of this we need to have an endfor.
>
> **[4:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=268)** So just no spaces between that endfor, this is saying okay the code that is in between lines three and five is going to be showing each of the jobs inside of the jobs list.
>
> **[4:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=280)** So in order to show the information from this job, we're just gonna do now two curly brackets.
>
> **[4:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=286)** And we're gonna say, job.
>
> **[4:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=289)** And this is where we get either to it's image or it's summary.
>
> **[4:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=292)** In this case, let's just show the summary.
>
> **[4:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=294)** And this is simply going to list out the job summary, and if we had you know four jobs inside of there it would list out each of them.
>
> **[5:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=302)** So, we've got looping through all these jobs and then we're gonna show the summary for each of these jobs.
>
> **[5:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=308)** So let's go ahead and test see if this works.
>
> **[5:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=310)** Make sure you save this file, then we're gonna move back to chrome.
>
> **[5:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=315)** Reload this page, look at that.
>
> **[5:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=318)** All my jobs in that nice h1 tag, and then we have, I spent three months in Greenland creating a backend service for farmers.
>
> **[5:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=324)** And let me show you how magical a database in Django is.
>
> **[5:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=328)** Let's say I go to the admin, right, and I say you know what it really wasn't Greenland it actually was Finland.
>
> **[5:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=335)** So we come back, we rename this, we save that, and we decide to go back to our home page.
>
> **[5:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=342)** Look at that, it's changed.
>
> **[5:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=344)** Our whole website is based on that database.
>
> **[5:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/pulling-objects-from-the-database-in-django?u=76281980&t=347)** And that's what makes this really cool and really easy for us to update and use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (2), class. (2), this, (2), from, (1)
> **CLI Commands:** make (4), python (4)
> **File Paths:** home.html (4), views.py (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Designing Your Django Project

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Bootstrap overview and installation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=0)** - [Instructor] Now let's spend some time working on the design of our website.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=4)** Functionally, we have a pretty cool website right now that we can list out any jobs that we've had, and technically, they're gonna show up here on the homepage of our website, but this really doesn't look attractive to potential employers, family and friends.
>
> **[0:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=19)** They see a website like this and they just think well that kinda looks like something you just threw together.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=24)** By adding some design, it's really gonna make our website look great.
>
> **[0:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=28)** So to do this, we're gonna be using a little framework called Bootstrap that makes our websites look really easy with not a lot of work.
>
> **[0:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=36)** We're gonna be using one of their example starting points to make our website look really great.
>
> **[0:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=41)** So we need to move over here to Examples.
>
> **[0:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=45)** And once you're there, scroll down to where you can see Album and click on that.
>
> **[0:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=49)** And then we need to get the HTML code for this Album page.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=54)** So I'm gonna right click here in Chrome, and Chrome by default, you can have this option to view page source.
>
> **[1:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=61)** If you're in Safari or your Firefox, they might be slightly different, but you just need to get to the source HTML behind this Album webpage here.
>
> **[1:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=70)** So I'm just gonna select all this text with command + A, then copy it with command + C.
>
> **[1:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=76)** Once I've got this, I'm gonna come back into Atom here, and I'm gonna paste this into my home.html.
>
> **[1:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=84)** Now, I'm gonna do it just below the code that we had up at the very top here so that we can still have this looping code 'cause we're gonna use that.
>
> **[1:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=92)** We essentially just have to beautify it there.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=94)** But let's just go ahead and save what we have for now, move back to our browser, and if we go ahead and reload the homepage, well, you can see it's fallen a lot short of what you've seen over here that should be the example of this site, and the big reason for this is with Bootstrap, you have to import their libraries of CSS in JavaScript.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=118)** So in order to get this to work, we're gonna move back to the Bootstrap Homepage, and if we click on this Get started here.
>
> **[2:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=126)** They have some links for us to be able to import the CSS and the JavaScript from some defined websites, and we're gonna talk about how we can do this from our own website in a bit, but for now, we're gonna use this to get up and running.
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=139)** So first, let's copy what we have for CSS.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=143)** So I'm gonna come back into Atom here, and we're gonna move up to the top of the HTML file here.
>
> **[2:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=152)** Here where you see that it has this bootstrap.min.css, we're going to replace this line with what we've copy and pasted there.
>
> **[2:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=161)** Great.
>
> **[2:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=162)** Now with that in place, we need to move down to the bottom of the page here and replace what we have for the JavaScript.
>
> **[2:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=169)** And so we're gonna move back to our browser, and we're gonna scroll down here to JavaScript.
>
> **[2:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=175)** There's three main pieces of JavaScript that we need.
>
> **[2:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=178)** Essentially, it is the Bootstrap, it's jquery and it's also popper, so we need to copy all of those, come back to Atom here, and we're gonna replace all the scripts that are there.
>
> **[3:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=189)** If you're wondering what the additional ones are, those are some extra things that were for the applicable album website, but we're not gonna be worried about those.
>
> **[3:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=198)** So just go ahead and paste what you have there.
>
> **[3:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=200)** Hit save, and now if we move back to our browser and we reload that page, okay, the images didn't necessarily come through, but you can see that we have a starting point of where it is that we're going, and if we come back and look at what we have inside of that example album, essentially what we're gonna be doing is showing off some information about ourselves here, have a button to email us, but down here below, this is where we have Thumbnail right now, this is where we're gonna be showing our particular images for our project, and that's where the summary text is gonna be going.
>
> **[3:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=235)** So we have to edit what we have here on Bootstrap a little bit, but ultimately, it's gonna get to a great point for us.
>
> **[4:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=241)** So with all of this in place, we have a starting nice looking page.
>
> **[4:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-overview-and-installation?u=76281980&t=247)** We just have to tweak it a little bit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), default, (1)
> **Env Vars:** html (3), css (3)
> **Tools:** atom (3), safari (1), firefox (1)
> **UI Navigation:** scroll down (2), click on (2)
> **File Paths:** home.html (1), bootstrap.min.css (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Page layout and templates in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=0)** - [Instructor] Now let's take our website and start refining it down into what we actually want it to be.
>
> **[0:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=5)** There's a lot of extra fluff here.
>
> **[0:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=7)** You can see there's this toolbar menu at the top which is very nice but not what we want for our particular website.
>
> **[0:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=14)** There's this footer here that we don't need and so let's move over to Atom and start trimming back the HTML and customizing it so it looks more and more like our website.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=24)** So, we'll move over back into Atom here.
>
> **[0:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=27)** And the first thing that we're gonna change here is the title of the website.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=31)** So, on Chrome you'll notice up at the very top here even on our home page, it says album example for Bootstrap.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=39)** That's a terrible name for our portfolio.
>
> **[0:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=41)** We wanna change this to our name.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=43)** So, we're gonna move back in Atom here and up at the top in between the title tag, go ahead and change this to your name, or something like Nick's website.
>
> **[0:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=52)** I'm just gonna have the name Nick Walter.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=54)** I think that's pretty clean.
>
> **[0:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=56)** But, if we go ahead and save this change, see what it looks like on Chrome.
>
> **[1:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=60)** We'll have to reload the page, look at that.
>
> **[1:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=62)** We have Nick Walter showing up top so this is sort of step one into moving into our own.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=68)** The next thing that we wanna change here is we don't need a header anymore.
>
> **[1:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=71)** Now, it's important that we need to delete the header, not the head tag, the head tag is very essential.
>
> **[1:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=77)** We wanna do the header.
>
> **[1:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=78)** So, I'm gonna move down to where we have this header.
>
> **[1:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=81)** Make sure you select all the way from the top header down to the bottom, we're just going to delete all of that.
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=88)** So let's save this.
>
> **[1:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=89)** I kind of wanna get in this flow of let's make a change and see what it looks like.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=94)** Let's reload the page and okay, we got rid of that top gray bar there.
>
> **[1:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=98)** So, the next thing that we wanna do is we wanna start customizing the information in here instead of it saying album example, let's have it show our name and talk about a little bit of what we do, who we are, things like that.
>
> **[1:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=111)** So, I'm gonna move over to Atom now.
>
> **[1:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=113)** And instead of this saying album example in the h1 tag, I'm gonna have that say Nick Walter.
>
> **[2:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=121)** Of course, replace it with your name, I don't need any more fan pages out there, just kidding.
>
> **[2:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=126)** But, I do wanna have some piece of information about myself here, something that maybe potential employer or people would just like to know about me.
>
> **[2:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=135)** So, maybe I'll just write something like Hi my name is Nick, I enjoy making apps and websites.
>
> **[2:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=147)** I also enjoy playing basketball.
>
> **[2:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=155)** So, here's a little bit of information about us that we could display to someone who's coming to the website, so let's go ahead and save this.
>
> **[2:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=164)** See what it looks it by reloading, look at that.
>
> **[2:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=168)** This is getting closer and closer now.
>
> **[2:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=170)** We have two buttons here.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=172)** You could choose to have two buttons, maybe one could go to your Twitter account, another one to your GitHub or some other sort of page.
>
> **[3:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=180)** I think it'd be really nice if we just had a button that would allow someone to send an email to us.
>
> **[3:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=184)** So, we're gonna move back in Atom here.
>
> **[3:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=188)** I'm gonna delete the secondary button here.
>
> **[3:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=190)** Just go ahead and get rid of that and I'm gonna change this to say hey, go ahead and send an email to me.
>
> **[3:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=196)** Maybe we could just say email me for short there.
>
> **[3:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=200)** Now, if you've never done a mail to before, you can essentially make links in HTML that will automatically open someone's browser or their email client to send them a message.
>
> **[3:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=210)** So, we're gonna change this to mail to colon and then put some sort of email here.
>
> **[3:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=216)** So, I'm gonna go ahead and put in mine.
>
> **[3:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=219)** We'll do nick@[zappycode.com](https://zappycode.com) and with this information, if we go ahead and save this, let's see what it looks like on the browser.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=230)** Look at that.
>
> **[3:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=231)** And then, if we click this button, this is gonna fire up your email client.
>
> **[3:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=235)** Look at that, here on the Mac, it jumped up and it wanted us to get going there.
>
> **[3:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=238)** So, that's good to know that that functionality is working.
>
> **[4:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=242)** Now, the next thing that I wanna do is I wanna get rid of the footer that's down here.
>
> **[4:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=247)** So, let's move back into Atom.
>
> **[4:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=250)** We're gonna scroll all the way to the bottom of the website.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=254)** Let's get rid of this footer completely.
>
> **[4:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=256)** And then the next thing that we wanna do is we wanna go make it so that we only have one of these boxes 'cause essentially what we wanna do is loop through and only have enough boxes for as many jobs as we have.
>
> **[4:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=270)** So, I'm gonna go back to our code and this is gonna be a little bit tricky 'cause there's so many in here and if we look at this, there's this container and then there's a row.
>
> **[4:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=280)** Inside of the row, there's many of these dibs here that are essentially a column inside of Bootstrap and there's so much to learn with Bootstrap, you could really go have your own course about all of that.
>
> **[4:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=292)** But we essentially wanna delete all of this, except for the very last one.
>
> **[4:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=296)** So, probably a quick way to do this would be keeping the bottom one that we have here and just selecting the ending div of the one above that and we'll just scroll up to the top here and... There we go.
>
> **[5:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=312)** We're gonna delete it all the way to line 46.
>
> **[5:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=316)** So, we'll just go ahead and delete that.
>
> **[5:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=318)** And now we should have only one box, so we'll go ahead and save this.
>
> **[5:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=323)** Let's go back and check and see what this looks like.
>
> **[5:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=327)** We'll reload the page here and yes, we just have this one remaining here.
>
> **[5:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/page-layout-and-templates-in-django?u=76281980&t=332)** We've got that information, it still looks a little nasty 'cause we've got our jobs listed up top, but this is looking more and more like our own personal portfolio.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), delete (6), this. (3), this, (3)
> **Tools:** atom (6), github (1)
> **CLI Commands:** make (4)
> **Env Vars:** html (2)
> **UI Navigation:** go to (1), scroll up (1)
> **URLs:** [zappycode.com](https://zappycode.com) (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### Adding static images to your Django project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=0)** The next thing that we need to do on our website is add a picture of ourselves.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=4)** We want to present ourselves to the world here and the jobs that we've worked with, and a nice picture of yourself is a great way to do that.
>
> **[0:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=11)** So you might have noticed here on the desk top, a picture of little old me here, feel free to use my picture if you don't have one yourself, but really, again, this is your website, let's see you project, a picture of yourself there.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=23)** But when we add this to our website, you know, a picture of ourselves is not really a job, it doesn't make sense to add it in that way, right, we don't wanna go just drag and drop this into the images folder, we want this to come into our site as a static object, and if you're wondering what a static object is, it's something specifically for your website, it's not connected at all with the database, so it's a little bit of a process to get this up and running, but I'm gonna take you step by step through that.
>
> **[0:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=52)** So the first thing that we need to do, is we need to open up the folder that's gonna contain our image.
>
> **[1:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=60)** And so, let's go ahead and move into Atom here, and inside of our jobs folder, we're gonna create a new folder called static.
>
> **[1:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=71)** Okay, so we'll just go ahead and name that Static.
>
> **[1:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=74)** And this is where we're going to add the image of yourself.
>
> **[1:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=78)** So, I'm gonna go ahead and move back into the desktop let's open up a finder so I can drag and drop this in, so I'm gonna get inside of our portfolio project, go into jobs to that static folder that we just created, and I'm gonna copy this picture and paste it inside of there.
>
> **[1:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=99)** Great, so we have this picture of ourselves inside of our jobs app, essentially it's inside of the stack folder, but in the bigger picture it's a part of the jobs app.
>
> **[1:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=111)** The next thing that we need to do is we need to tell Django where to be looking for this information, and how to display, ultimately that, to the user.
>
> **[1:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=119)** So we're gonna move over into Atom, we're gonna go to our settings, let's open up the portfolio folder and go to our settings, and we're gonna be scrolling all the way down on this file.
>
> **[2:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=133)** So you can always, already see that there's something there called the static URL.
>
> **[2:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=137)** That's essentially whenever you have a static file like an image, or some CSS, right, they're saying JavaScript here, that's some examples of things that you can have, it's gonna say: where should they show up?
>
> **[2:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=148)** Should it be in a local host colon eight thousand slash static?
>
> **[2:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=152)** Or you know, we could have it just say "the files" if we wanted to, I think static is a pretty good name for that, but again, totally customizable, up to you about how you want to handle that.
>
> **[2:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=163)** But in addition to saying that we should have a static URL, we also have to say where we want the static to be stored.
>
> **[2:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=169)** So we're gonna put in all caps here: STATIC_ROOT, and we wanna have this equal to a place in our project where we want this to be.
>
> **[3:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=181)** Now, it's gonna be really tempting to, you know, just manually type out the file path, but the thing is, our portfolio project could move to different places on our computer, and eventually we're gonna be putting it up on our website, so we never wanna, go you know, all the way and say something like, okay we're gonna go to our users slash nickwalter, all that stuff, instead we always wanna refer to files within the project.
>
> **[3:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=207)** And so, in order to do this, we're gonna write a little bit of code to get to our base of the project, and then say put it in a particular folder.
>
> **[3:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=217)** So we're gonna say: os.path.join, okay, and this is because we're joining two things together, first is going to be the BASE DIR, which is the base directory, that's sort of the starting point of our project, and then we're gonna say a comma, and then give a name for the folder where we want this to be stored, so let's just go ahead and just put static inside of here.
>
> **[4:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=241)** So, again just a recap, we just added this one line, I kinda walked you through everything that you needed there, but we're gonna have the static root at the very end of our file line 126 that says: hey we want this to be in our base directory in a folder called static.
>
> **[4:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=256)** Now with this in place, let's go ahead and move over to our URLs because in order to access these static files we have to know what URL they should be displayed at.
>
> **[4:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=267)** So we're gonna need to get those things that we just set in our settings: the static root, and the URL.
>
> **[4:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=272)** So we're gonna have to import our settings into this file, so we're gonna say: from, and this is all lowercase, django.conf-import, and we want to import our settings, so all lowercase settings, just like that.
>
> **[4:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=290)** The next thing that we wanna do is from, lowercase django.conf.
>
> **[4:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=296)** and we wanna get to our urls.static, and we want to now import static.
>
> **[5:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=307)** So with these two imports here, at the end of our urlpatterns we're going to say: plus-lowercase static, what we just imported with parenthesis, and what we're gonna provide inside of here is the static URL and the static root.
>
> **[5:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=324)** So we're gonna say: settings., and then all caps, STATIC_URL-comma, and then settings., and now we want: STATIC_ROOT.
>
> **[5:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=343)** Now with this second setting here, where we have the static root, this is a perimeter that we have to specify, and so we're gonna say: lowercase document_root is equal to this, so we don't have to for the first perimeter 'cause it's needed but, so we have fully here: static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) and this is essentially pulling those two things that we just set in our settings.py here, and now applying them to our URLs to say: hey, these are the things that we want to use when we're showing static files.
>
> **[6:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/adding-static-images-to-your-django-project?u=76281980&t=379)** So, again, a lot of leg work here to be able to show static files, but Django needs to know: where they are, and where they should be located.

> [!info]- Semantic Content
>
> **Code Keywords:** static (25), let (6), this, (2), from, (2), import, (1)
> **Env Vars:** url (5), static_root (3), static_url (2), css (1), base (1)
> **Analogies:** picture (9), just like (1)
> **UI Navigation:** go to (3), drag and drop (2)
> **Definitions:** is a  (3)
> **Code Identifiers:** document_root (2)
> **Tools:** atom (2)
> **File Paths:** settings.py (1)

#### Collectstatic in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=0)** - [Male Narrator] So we've gone through a lot of effort to get this picture of ourselves up and running on the website.
>
> **[0:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=5)** We have this static folder here in our app.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=8)** This Nick.jpg is just ready for the world to see, but it's not quite there yet but we're fixing it right now.
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=15)** What we need to do is with any static files that we have a Django project is that they need to be collected.
>
> **[0:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=21)** And Django's pretty great about this, that you can have static in a bunch of different apps and that's gonna bring them to all one central location.
>
> **[0:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=28)** And this makes it really easy if you ever have new static files that you bring in that they can all be updated very quickly.
>
> **[0:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=35)** So let's move over to our terminal here.
>
> **[0:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=38)** We're gonna quit out of the server that's running, and we're gonna type out python three manage.py.
>
> **[0:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=45)** And what we're gonna type is collect static.
>
> **[0:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=50)** And essentially what this does is it searches through the entire Django project and sees if there's any folders named static where it needs to add things into the collective static folder.
>
> **[1:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=60)** So we're gonna go ahead and just hit enter on this.
>
> **[1:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=62)** And it's gonna say I took 120 static files and copied them to this specific place.
>
> **[1:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=69)** Now you may be wondering, hey we added one picture of ourself.
>
> **[1:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=73)** Why did 120 things get added there?
>
> **[1:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=77)** Well, that's because the admin part of Django has a bunch of static files whenever you do collect static, it's gonna take all those different pieces and put those into the folder there, so don't worry that one file turned into 120.
>
> **[1:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=91)** But I do want you to notice where this went to.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=94)** So if we go back to Atom here, we now have a new top level folder.
>
> **[1:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=98)** We just seem to be collecting these things.
>
> **[1:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=100)** And that is the static folder.
>
> **[1:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=103)** So like I said, inside of there, there's this admin folder.
>
> **[1:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=107)** We've got like CSS fonts, again, these are all things that came with that default admin panel.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=112)** We don't need to worry about this.
>
> **[1:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=114)** But there is this Nick.jpg and that was the one thing that we did wanna add.
>
> **[1:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=118)** So something that if you're keeping score here, inside of the jobs folder, there is a static folder with a Nick.jpg.
>
> **[2:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=127)** Yet also at the top level, there's a static folder with a Nick.jpg and you're wondering why does there need to be two here.
>
> **[2:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=135)** Well, again, there's gonna be lots of different apps in your project and all the static files need to be combined into one central location, and that's what that collect static does for you is it brings them all into this folder.
>
> **[2:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=149)** And you have complete control over where this is saved and what it's named.
>
> **[2:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=153)** Again, if you wanna change something here you just go to the settings.py and down here you can say you know what, I don't want it to be saved onto the base directory as static, I want it you know to go to some other particular place and you can change the name here if you want to.
>
> **[2:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=168)** But usually this is a good pretty standard name that you should be using for your static files.
>
> **[2:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=173)** So now that we have that in place, we're ready to have this show up in our html.
>
> **[2:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=178)** So we're gonna go to our home.html.
>
> **[3:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=180)** Up at the top here, I usually do this after the top html tag.
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=185)** We need to tell this file that we're gonna be using static files.
>
> **[3:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=189)** So we're gonna use our curly brackets here, and we're gonna put our percentage signs like we've done before.
>
> **[3:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=197)** And inside the middle of those two, we're going to say load static.
>
> **[3:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=202)** And this is essentially saying hey there's gonna be some static files in here, be ready for those.
>
> **[3:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=208)** That's essential if you want things to work.
>
> **[3:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=210)** Now go ahead and scroll down to where we have the information showing you know, our name and the button where they can contact us, all that information.
>
> **[3:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=219)** And what we're gonna do is after the button, so after that ending p tag there, we're gonna add a new image tag that should reference our picture of ourselves.
>
> **[3:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=229)** So let's go ahead and make a new image tag.
>
> **[3:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=232)** Okay, and let's have an ending image tag there as well.
>
> **[3:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=238)** But with the beginning opening tag, we're gonna say the source of this image is gonna be equal to and inside of the double quotes there, we're gonna type out curly brackets and we're gonna do our percentage signs, just like this.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=254)** And then inside of that we're going to say static space and then in single quotes, the name of our file, which is my case is Nick.jpg.
>
> **[4:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=264)** Now, unless your name is Nick or you're using my image, but again this should be an image of you.
>
> **[4:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=269)** This file name's gonna be different so, again it's whatever you've added into your project there.
>
> **[4:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=274)** But this is essentially saying hey, add an image with my name.
>
> **[4:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=279)** So I'm gonna go ahead and save this.
>
> **[4:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=282)** Let's move over to our browser.
>
> **[4:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=285)** We're gonna re-load the page there.
>
> **[4:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=287)** Oh I forgot, we've gotta move back to our terminal and restart the server.
>
> **[4:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=291)** We did collect static, now we've gotta go back and run the server.
>
> **[4:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=296)** Great.
>
> **[4:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=297)** Let's move to the browser, re-load this, and whoa we've got a blown up Nick.
>
> **[5:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=303)** And if we don't do anything, these eyes are just gonna take over the entire webpage.
>
> **[5:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=307)** So, in order to fix this we need to go back to Atom here and we're gonna add one extra attribute to this tag here, and we're gonna say the height, we're gonna cap this at a number, I'm gonna say 300.
>
> **[5:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=320)** There's nothing magical about this, again, it's just from me experimenting I thought this is a pretty good size for the website.
>
> **[5:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=326)** Feel free to use whatever one you'd like.
>
> **[5:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=328)** But now if we go back to the homepage, oh look at this.
>
> **[5:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=331)** Nick is in much more check.
>
> **[5:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=333)** There he is, just below the button.
>
> **[5:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=335)** And you can see this has added a lot to the website.
>
> **[5:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=338)** You can email me now and you can kinda like trust me.
>
> **[5:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=341)** Like yeah, this is a guy I wanna reach out to, I wanna see.
>
> **[5:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=344)** And I just wanna kind of walk through again that static what has happened because we've had a bit of a process here.
>
> **[5:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=350)** So if we go back into Atom, inside of our jobs app, we added a new folder called static and added our Nick.jpg.
>
> **[5:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=358)** Then we went ahead and did the collect static, which then placed it inside of a very top level static folder.
>
> **[6:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=366)** And the reason that it was sent there is because that's what we put inside of our settings.py.
>
> **[6:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=370)** Then on our home.html we had to load the static up at the top, and then we came here and said okay, the source for this image should be reaching into the static files.
>
> **[6:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=382)** Go grab Nick.jpg which grabbed it from that top level folder.
>
> **[6:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/collectstatic-in-django?u=76281980&t=387)** So, hopefully you have now a great grasp on how static images work in Django.

> [!info]- Semantic Content
>
> **Code Keywords:** static (29), let (5), this. (5), this, (3)
> **File Paths:** settings.py (2), home.html (2), manage.py (1)
> **Tools:** atom (3), terminal (2)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** is a  (4)
> **Analogies:** picture (3), just like (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** python (1), make (1)

#### Bootstrap as a static asset in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=0)** - [Instructor] Now that we know how static files work, we're gonna add a little bit of an addition to our website to make it that much easier to work with.
>
> **[0:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=8)** Remember when we added Bootstrap then we said, okay for the style sheet just use whatever is at this BootstrapCDN.
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=15)** The same thing down here for our JavaScript files for jQuery and our Popper, we just said you know what, go ahead and use what is ever at these websites.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=23)** The one issue with having this is we're ever working on our website and we are not connected to the internet, our page is not going to work.
>
> **[0:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=30)** This also means that we are relying upon these sites for hosting the correct files and that's a little bit risky, there's some great advantages to if other websites use the same resources that the user can have those cached and we'll sort of speed up the loading of those pages, but for us in our project, I think it's really beneficial to have these files just as static files on our computer.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=54)** So I'm gonna show you how we can bring these in, download them, and then have them hosted as static files, all on our website, so that even if we're not connected to the internet, we can still get our page to load.
>
> **[1:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=66)** So, essentially the three things that we've got to grab are Bootstrap, jQuery, and Popper JS.
>
> **[1:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=73)** So let's start with Bootstrap.
>
> **[1:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=75)** Let's go ahead and move over to Chrome.
>
> **[1:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=78)** We have these previous tabs here, let's go to just [getbootstrap.com](https://getbootstrap.com).
>
> **[1:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=83)** So on this we want to hit the Download button here and we want the Compiled CCS and JavaScript, so go ahead and hit Download, that's gonna give us a zip.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=94)** I'll go ahead and open that up and extract it, and if we double click in to here this gives us CSS and a JavaScript.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=101)** So I'm gonna bring out both of these files onto the desktop here, we're gonna be adding these into our static folder here just in a second.
>
> **[1:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=111)** Now, the next place that we need to go is go get jQuery, so the website for that is going to be jquery .com Okay, we'll come here and say that we want to download jQuery.
>
> **[2:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=126)** On this we want to download the compressed production jQuery, so I'm gonna right click this file and say, Save Link As, and it's gonna be this jquery-3-3-1.
>
> **[2:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=137)** Yours might be slightly different, but just get whatever the latest version is and I'm gonna go ahead and save that to my desktop.
>
> **[2:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=145)** Great, that means we now have jQuery ready to go.
>
> **[2:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=148)** And then we just need Popper, so we're gonna say, popper.js .org.
>
> **[2:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=154)** Okay, so we'll go here to Popper.
>
> **[2:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=158)** Let's go ahead and get Version 1.
>
> **[2:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=159)** Well, some really nice animations on their website.
>
> **[2:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=163)** We want to go ahead and get the Popper right here, so we want just the popper.min.js, so I'm going to right click this again, Save Link As, let's put in on the desktop and save that.
>
> **[2:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=177)** So now, on our desktop, we have all the files that we need.
>
> **[3:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=182)** There's the jQuery here, Popper, and then also we have the Bootstrap files, but we want these to come in as static, so we're gonna move into our project here, so I'm gonna say portfolio-project, I want to get into our jobs folder.
>
> **[3:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=196)** Again, it can be very tempting here to go to that top level static folder and just manually add these yourself, but Django is gonna run into all sorts of issues if you do that, you've got to follow the convention that they've set forth.
>
> **[3:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=210)** So we're gonna go into our jobs app, we're gonna go into that static folder and we're gonna grab these two JavaScript files and these JavaScript and CSS folders.
>
> **[3:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=220)** Hold down the Command key if you want to select all of those at the same time, and we're just gonna drag and drop those right in.
>
> **[3:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=227)** So now that we have these files in the static folder inside of the jobs app, in order to make these accessible, we need to run that collect static like we did before.
>
> **[3:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=238)** So I'm gonna go ahead and hit Control + C to shut down the server, I'm gonna run that collect static one more time, it's gonna say, hey you're overriding some existing files, are you sure you want to do this?
>
> **[4:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=248)** That's saying, hey you have this nick.jpeg, are you sure you wanna put them in again and we're gonna say yes, let's do that, so just type yes and hit Enter.
>
> **[4:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=256)** And now 22 files have been added there.
>
> **[4:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=259)** And if we go ahead and look at that top level static we can see, oh there's the CSS, there's the JavaScript, the jQuery, and the Popper.
>
> **[4:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=267)** So with those in place, let's go ahead and run our server again.
>
> **[4:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=271)** We now just have to go and update our html to show that we are now just referencing local files instead of going out to these particular websites and getting these different resources.
>
> **[4:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=283)** So let's change the href on the style sheet.
>
> **[4:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=287)** Instead of going out and getting all that, but leave the css/bootstrap.min.css.
>
> **[4:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=292)** Instead, we'll just chop it down to the CSS that we have there, and once we've done that, just like we've done for the image that we have, we need to bring in a static file.
>
> **[5:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=304)** So, what we're gonna add here is our curly bracket, percentage sign, we're gonna say static, and then we're gonna do our single quote, single quote there, and then have our ending percentage sign and curly bracket.
>
> **[5:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=322)** So, essentially what we've said is, hey, for the styles sheet, instead of going out to x website, now we're just gonna grab it from our local css/bootstrap file there.
>
> **[5:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=333)** And for the integrity, you can go ahead and delete this and same thing with the cross origin, we can go ahead and get rid of all that.
>
> **[5:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=342)** So let's save it, let's go back to Chrome and reload our homepage.
>
> **[5:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=348)** Button color is still there, everything looks great, that means our CSS is working.
>
> **[5:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=353)** Now we just gotta do this with the JavaScript files that we have.
>
> **[5:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=356)** So let's move over and add them.
>
> **[5:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=358)** I'm gonna go down to the bottom of our website, and with each of these, a similar thing, we just got to change these to the static files that we have.
>
> **[6:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=367)** So for jQuery, it's the exact same thing that we have, except for this is referencing slim, and in our case, ours is not slim, it's just regular jQuery.
>
> **[6:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=377)** So it might be better, in fact, just to copy the name that we have here, be sure we get the full thing, even the js, copy that, and then come back to add them, and we can simply just paste that and to make sure there's no misunderstandings.
>
> **[6:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=392)** And we'll do our curly bracket, percentage, static, with the single quote, single quote, and we'll end that as well.
>
> **[6:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=403)** Percentage sign, curly.
>
> **[6:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=405)** Same thing with the Popper here, so go ahead and get that down, we'll get things ready for this JavaScript and Bootstrap, as well.
>
> **[6:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=414)** And I'm gonna copy and paste what we had before so we can speed this up.
>
> **[6:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=418)** You should be getting the flow of this, you know, right, we want to just kind of reference these files from our static folder.
>
> **[7:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=425)** Go ahead and add those.
>
> **[7:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=426)** For each of these, we don't need the integrity or the cross origin, so we can go ahead and just delete that, same thing here, we'll delete that, and delete that, as well.
>
> **[7:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=439)** Okay, so we now have our three script tags pointing locally.
>
> **[7:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=443)** Same thing with our CSS.
>
> **[7:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=446)** So we'll go ahead and save this, move back to Chrome, let's reload the page, and look at that!
>
> **[7:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=453)** We have no errors, and you may be saying, well what's the point of all this if we don't even see visual change?
>
> **[7:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/bootstrap-as-a-static-asset-in-django?u=76281980&t=458)** Again, remember, we now are hosting those files ourselves so we can work on this website whenever we want to, we don't have to bank on having an internet connection, and we don't have to worry about those sites going down or having malicious code.

> [!info]- Semantic Content
>
> **Code Keywords:** static (16), let (12), delete (4), this, (2), case, (1)
> **Code Identifiers:** jquery (10)
> **Env Vars:** css (6), ccs (1)
> **File Paths:** popper.js (1), popper.min.js (1), css/bootstrap.min.css (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), drag and drop (1)
> **URLs:** [getbootstrap.com](https://getbootstrap.com) (1)
> **Versions:** version 1 (1)

#### Finishing touches in Django design
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=0)** - Now in our project, we wanna make it so that we can actually see the jobs that are in our database show up in these really nice fancy cards that we have down below, and right now it's this stretched out singular card, not really impressive.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=13)** We're gonna go step by step getting this to show the job that's in the database.
>
> **[0:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=17)** So, let's go ahead and move over into atom, and once we are there, we're gonna scroll down to where we are displaying the jobs currently. So we've got this one row and inside of each row is gonna be this column.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=31)** This is essentially where we want to repeat this over and over again until we have all the jobs showing up.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=39)** Now it can be a little bit difficult. Make sure that you have lined up where these are. On mine here we've got from line 49 to 63 that that's one complete <div showing everything that's in a particular job.
>
> **[0:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=52)** So with this, essentially we wanna wrap this around our code that loops through the jobs. If remember up at the very top of this file right, we wrote all this code to say let's list out all of our jobs and let's get the summaries and things like that. So, first off we can get rid of the h1 tag that we had created before.
>
> **[1:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=70)** Okay? Then we'll copy or cut the code that we have up at the top there. Let's make it so the very first line of this file is the doctype html.
>
> **[1:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=80)** Then we'll come back down and let's paste this after row but before column right here on line 39.
>
> **[1:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=86)** So we're gonna paste this in, we're gonna move this endfor to after this block of code. So I'm gonna cut this paste it down on the bottom cause again, we want to add as many of these columns as we have jobs inside of our database. So, with this, let's go ahead and take our job summary, we're gonna cut this and paste it to right now where there's already some existing text.
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=112)** So I'm gonna take this and delete that, paste in where we have the job summary there, and if this works, you'll notice that this is going to display the job summary that we have for what's in the database.
>
> **[2:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=125)** So we're gonna save this, come back here to chrome, reload it and look at that. There's our "I spent 3 months in Finland creating a backend services for farmers."
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=136)** That's awesome. Really, the next thing that we need to do is just get the image to show up. And, while we're at it, let's get rid of these view/edit buttons and the time there.
>
> **[2:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=145)** So, let's go back to atom here, we're gonna get rid of the buttons that are showing down here. So I'm gonna grab this whole div and delete that there.
>
> **[2:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=156)** The next thing that we need to do is make it so that the source for this particular image here is gonna be showing the source that we have for the job.
>
> **[2:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=166)** So let's delete this data-src and the alt here.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=172)** Instead we want to have one source. So we're gonna say src equal to and we're gonna do double quotes, now there's a little bit of work to be able to get our image that is here inside of the images folder. It'd be, you know really tempting to say "Oh can't we just say something like images and then grab code.jpg" We can't exactly.
>
> **[3:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=194)** And in that case wouldn't even want to do that.
>
> **[3:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=196)** We would wanna reference it from whatever the job image is, right? Because we're hoping to have lots of different jobs showing up here. So, in order for this to work, we're gonna have to do some work on displaying the url for our media files. So we're gonna start first in our settings .pi. We had set whenever we want a static url in a static route.
>
> **[3:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=220)** We're gonna do the same thing now but for media files.
>
> **[3:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=223)** So we're gonna go ahead and copy these two lines of code and we're gonna paste them below. And now change STATIC_URL to all caps MEDIA_URL, and instead of STATIC.ROOT we're gonna have MEDIA_ROOT. So there's gonna be a place where we're storing our static files and there's also gonna be a place where we're storing our media files. And there's a certain URL pattern we'll use for each as well. So for the media URL pattern, let's just go with media here, and then for the media root, this is where we want to say that it should just be located inside of our project and we'll let the name handle the rest of this. You'll see where this comes into play in a second, but for the time being, just say the media root is equal to our base directory.
>
> **[4:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=270)** Okay? So we're gonna say our media root is equal to our base directory and the media URL is media.
>
> **[4:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=276)** So save your settings file, and just like we did before when we made the STATIC_URL and ROOT, we have to update our URLs.pi. And so we have to essentially add some new static for our MEDIA URL and our MEDIA ROOT.
>
> **[4:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=291)** A nice way to sort of clean up this URLs.pi to look a little bit more presentable is we're gonna take our urlpatterns, I'm gonna copy this name here.
>
> **[5:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=302)** I'm gonna paste it down below, and we'll say urlpatterns plus equals and add you know the static for the urls. But we'll do the same thing for the media route.
>
> **[5:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=313)** So I'm gonna copy this line, paste it down below and anywhere we have all caps static, I'm gonna change this to say MEDIA. Okay?
>
> **[5:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=323)** So same for document root here, we're gonna have this be MEDIA_ROOT just like that. So essentially what we have here is a list called urlpatterns where we added two things and down here we're just adding - okay we wanna add some additional paths for people who have some static files and also that have media urls.
>
> **[5:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=344)** So with these two things in place, let's go ahead and save this. We're then gonna go back to our home.html where now, inside of our source, we can specify where we want to have this image file showing from.
>
> **[5:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=359)** So again we need to have our two curly brackets, just like we did with job summary. And in this case, we're gonna say job.image, and it's not enough to just get the image, we have to know what url the image is at.
>
> **[6:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=373)** So there's a property on the image property called url where if we write this out, it's gonna say "Hey this is where the file is located."
>
> **[6:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=382)** So, let's go ahead and save what we have here, and then let's go ahead and go back to our website and see what we've got. So I'm gonna go ahead and hit the reload page and look at that This should be a great feeling that you have right now.
>
> **[6:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=397)** The same file that we uploaded to our django project is showing here on the home page.
>
> **[6:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=403)** What's really magical about this is we added that image in the admin portion, a place that someone who visits your website will never see.
>
> **[6:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=411)** But, when they come to your home page, they will be able to see this.
>
> **[6:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=415)** And one quick thing that I'd like to show you here that I think you'd find interesting, is that if we right click in inspect or you could do view page source if you also wanna see that.
>
> **[7:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=424)** But I just wanna highlight the url that we have for this particular image. So in our code, when we said let's go ahead and move over to atom so that you can see that. So when we said the source of this image is job.image.url, what we actually got is it said okay, /media, /images /code.jpg So if you actually just take the name of our website let's go ahead and just copy this, and you paste it right here, you can actually get to that particular image. That's all that's going on here.
>
> **[7:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=457)** We just said "Hey this image tag here, point to this particular file here." And this is how you can get to it.
>
> **[7:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=463)** And why does it have the name media? Because we picked it.
>
> **[7:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/finishing-touches-in-django-design?u=76281980&t=466)** Why does it have the name images? Because we picked that as well. These are all customizable and up to you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), static (8), this, (4), delete (3), this. (3)
> **Env Vars:** url (4), root (3), media (3), static_url (2), media_root (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (3)
> **Tools:** atom (3)
> **Analogies:** just like (3)
> **File Paths:** home.html (1)
> **UI Navigation:** scroll down (1)


### 5. Object Details in Django

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Connecting URLs and templates in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=0)** - [Tutor] We've gone through all these effort to make a really beautiful website, that displays jobs that are inside of our database.
>
> **[0:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=7)** But we only have one measly job in the database, it's time to make sure that this thing actually works and we can see multiple jobs here on the home page.
>
> **[0:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=16)** So in order to do this, all we have to do is go to our admin panel.
>
> **[0:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=20)** And add some more, so go to slash admin.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=24)** Let's go to our jobs.
>
> **[0:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=25)** And let's add two more jobs with those temp images we have on the desktop, feel free to add as many as you'd like.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=31)** And again, whatever pictures that you'd like more preferably ones that come from your experience that you'd like to share with everyone else.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=39)** So let's go ahead and maybe say for this one, this is an app I made for a local hiking group.
>
> **[0:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=53)** Okay, and we'll go ahead and save this into the database and will also add another job.
>
> **[1:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=60)** Let's go ahead and do the website image now.
>
> **[1:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=65)** I'll say maybe something like this is a website I made for for ABC Inc and helped them make over a million dollars.
>
> **[1:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=83)** Yes this is why you want to hire me.
>
> **[1:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=87)** Okay so we'll go ahead and save that into the database.
>
> **[1:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=91)** And if we go back to our homepage now.
>
> **[1:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=94)** Oh yeah, look at that.
>
> **[1:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=95)** We've got three jobs here, all with different images, different summaries down below.
>
> **[1:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=101)** This is great stuff.
>
> **[1:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=103)** We now need to start moving towards the path of being able to find out more information about each of these.
>
> **[1:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=108)** If someone comes to our website and says, oh, they've made an app before!
>
> **[1:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=112)** I want to know a little bit more about that.
>
> **[1:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=113)** Maybe I want to see the image closer up.
>
> **[1:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=116)** If they go ahead and click on this, it'd be awesome to show them some more information.
>
> **[2:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=121)** Now before we go there, I'd like to move back to our admin panel where you may have noticed something that's a little bit hard to work with.
>
> **[2:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=128)** Now that we have more than one object inside of there.
>
> **[2:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=130)** If we go click on our jobs, you can see there's three jobs and they have really boring names there.
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=136)** Job object one, two, three it can be kind of hard to work through which one is which.
>
> **[2:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=141)** And there's an awesome way to be able to fix this.
>
> **[2:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=144)** So let's go ahead and move back into Atom.
>
> **[2:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=147)** And in order to give those proper names on the admin panel, we're going to go ahead and move into the models.py where we've created our job.
>
> **[2:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=156)** So inside of here, we're going to add a function to our job class that essentially says, Hey, when we're describing this particular object, we want to return back the summary.
>
> **[2:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=166)** Or you can choose some other way to customize this job.
>
> **[2:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=170)** But I think that'd be a pretty good way to do that.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=172)** So in order to do this, we're going to say death.
>
> **[2:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=174)** And we're going to do three underscores and we're going to say str three underscores, and in parentheses will say self with a colon.
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=185)** Then down below, we are going to return from this function self dot summary.
>
> **[3:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=192)** That's to say, if anyone wants to know, what's the description of this particular object?
>
> **[3:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=197)** Well, the summary I think, is a good way to say that.
>
> **[3:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=199)** So let's go ahead and save this.
>
> **[3:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=202)** We'll go back to Chrome here.
>
> **[3:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=204)** And if we reload the Django admin page, now we get nothing here.
>
> **[3:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=209)** That's because I've given one too many underscores, so we need this to be two underscores there two underscores there, let's save that come back to our admin page.
>
> **[3:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=220)** Reload, and look at that.
>
> **[3:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=222)** Now you can see, okay, these are the different ones so that if you wanted to make a change to one of them, you can quickly figure out which one is which.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=230)** Rather than having to click into each one.
>
> **[3:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=232)** And you can imagine let's say you had 20 jobs listed here that could really start to stack up to a lot of work really quickly.
>
> **[4:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=240)** Now before we finish up here, something that I'd like to know is that how can we figure out more information about each of these particular jobs, it'd be nice if we had a URL to go check out more about each of them.
>
> **[4:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=253)** Well, in order to do this, let's add a new path to our URLs.
>
> **[4:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=256)** So let's go into our portfolio folder into our urls.py we're going to be adding a new path.
>
> **[4:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=264)** So let's say lowercase path, let's add the comma after the parentheses.
>
> **[4:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=269)** Now, the name for this, this going to be a little bit different because it's not the homepage which was just blank, right?
>
> **[4:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=275)** In this case, we wanted to show a particular job and so you know, there's lots of different jobs in our case, we're going to number them so there might be you know, job one, two, three, four, five however many there are.
>
> **[4:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=287)** And so in this case, I think we should have the name of our website slash jobs slash and then have a number of that particular job.
>
> **[4:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=295)** So we're gonna type inside of here jobs slash and then we're going to with some angled brackets here, say that we want an int colon.
>
> **[5:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=308)** And then job underscore ID.
>
> **[5:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=311)** Now I know we just did a lot there.
>
> **[5:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=312)** So let's kind of talk through what we did.
>
> **[5:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=315)** What we're saying is, if someone goes to jobs slash, and then provides an int, we want to save that int into a variable called job_id.
>
> **[5:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=324)** That's all we're saying here.
>
> **[5:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=325)** If someone goes to jobs slash, and they provide an int, we want to save that into something called job_id.
>
> **[5:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=332)** Now, with this, we need to have a place for this to go.
>
> **[5:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=335)** So I'm going to say comma, and just like above, we're gonna say jobs dot views dot and then we need a new place here.
>
> **[5:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=343)** I'm going to call this detail and we also need to have a name for this.
>
> **[5:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=347)** And so I'm going to say name is equal to just like before, I'm going to say detail.
>
> **[5:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=355)** Great, so we have all of that in place.
>
> **[5:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=358)** Let's go ahead and save our urls.py.
>
> **[6:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=361)** Just to see if we're on the right path here and if this is working, let's go to our views.py, we told them that we would make a detail view here.
>
> **[6:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=370)** So let's go ahead and copy this go to our views.
>
> **[6:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=373)** Let's make a new function called detail, which still takes in a request.
>
> **[6:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=379)** And we'll go ahead and put a colon there.
>
> **[6:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=382)** And for the time being, we'll just go ahead and return back the home.html, put the ending parentheses there, we won't pass forward any jobs or anything.
>
> **[6:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=391)** But something I would like to do here is with this detail, because we specified in urls.py that there would be an int variable here called job_id, we have to with the name of the function here, say request, comma, job underscore ID, the exact same name that we had before.
>
> **[6:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=410)** And that means whenever this is called, the job ID gets forwarded here.
>
> **[6:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=414)** So just to see if this is working let's go ahead and print out whatever the job underscore id is.
>
> **[7:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=421)** So let's save this file, and if all works out in our terminal, we should see the job ID being printed.
>
> **[7:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=428)** So let's go ahead and move over to our Chrome browser here, we're going to go to the name of our website slash jobs, slash and then provide some number, like the number one.
>
> **[7:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=440)** So if we go ahead and do that, we still see the home.html without the jobs kind of plank down there, right?
>
> **[7:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=446)** What we should see is if we go over to our terminal, we should see a number one printed and look what we have there.
>
> **[7:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=453)** A number one is printed.
>
> **[7:35](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=455)** If we go ahead and go back here, and we say, you know, jobs, let's just put in some big number, hit enter on that.
>
> **[7:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=462)** Go back to our terminal will look at that.
>
> **[7:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=465)** That number was there.
>
> **[7:46](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=466)** Anytime we put an int inside of there, it's going to show up.
>
> **[7:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=470)** Now it does have to be an int.
>
> **[7:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=471)** If I, you know, do jobs slash nick or something like that and hit enter.
>
> **[7:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=476)** Well, then we're going to get an error there and it's saying hey, what you just entered in here does not match any of the things that you specified here.
>
> **[8:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=484)** So we have a problem.
>
> **[8:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/connecting-urls-and-templates-in-django?u=76281980&t=485)** But as long as you provide some sort of number it's going to say okay, I know exactly where to send this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), this, (6), this. (4), function (4), case, (3)
> **UI Navigation:** go to (6), click on (2)
> **File Paths:** urls.py (3), home.html (2), models.py (1), views.py (1)
> **CLI Commands:** make (6), find (1)
> **Tools:** terminal (3), atom (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Code Identifiers:** job_id (3)
> **Cross-References:** go back to (3)

#### Creating views in Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=0)** - [Nick Walter] So it's nice whenever we hit that URL that we can get the end to show up here, but that's not ultimately what we're looking for.
>
> **[0:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=7)** We wanna say if we go to jobs one that we wanna see the particulars of job one shown here on a special part of the website, not just the homepage showing all the jobs.
>
> **[0:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=19)** Just that one particular job.
>
> **[0:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=21)** So in this video, we're gonna walk through how we can grab that one particular job from the database and get it to show up here for the user of the website.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=31)** So, let's go ahead and move back into Adam.
>
> **[0:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=34)** and remember, we had made this new detail function here and we're printing out the job ID.
>
> **[0:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=39)** What we're going to do is use that job ID to grab a particular job from the database.
>
> **[0:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=45)** And django has an awesome function to be able to make this to work, after we have this import where we say, import render, do a comma and then after that, this is one big long string.
>
> **[0:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=55)** So stay with me here get, underscore object underscore, or underscore 404.
>
> **[1:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=65)** And essentially what this function does the name really kind of gives it away.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=68)** Is this going to try and get a singular particular object from the database, if it works, it's gonna return that if not, it's gonna spit back out a 404 page to say, hey, something went wrong, I couldn't find this.
>
> **[1:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=81)** So with this new function that we have here, what we're going to do is make a new variable here called job detail, we're gonna say job detail is equal to get object or 404.
>
> **[1:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=96)** Okay, and then do the open parentheses here, and what we're going to pass in his first, what sort of class are we working with, in this case, it's the job class.
>
> **[1:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=105)** We're going to do capital job, comma.
>
> **[1:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=107)** And then what we're going to provide is what the primary key is that we're looking for.
>
> **[1:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=113)** So we're going to say PK is equal to job ID.
>
> **[1:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=117)** And you might be saying, primary key PK what what we talking about here, we never covered this.
>
> **[2:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=122)** Well, every model inside of the database has what's called a primary key.
>
> **[2:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=128)** Is essentially a unique identifier to say, hey, this is, you know, this job that job, and essentially, it counts up from the number one.
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=136)** So there's the first job we ever created, has a primary key of one, then two, then three than four all the way up.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=143)** And in fact, you can kind of see this, if we go back to chrome must go to slash admin.
>
> **[2:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=150)** And let's check out of our jobs here.
>
> **[2:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=152)** So you can see we have the different jobs like Look, when I click on the very first job, it has jobs slash jobs slash one flash change, look what happens, if I change this to two.
>
> **[2:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=162)** Well, then it goes to the next job.
>
> **[2:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=164)** And if I change that to three, you guess it goes to the next one.
>
> **[2:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=168)** And if I change this thing to four, let's go to say, I can't find a job with an idea for it doesn't exist, maybe it was deleted, right?
>
> **[2:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=175)** So every model inside of the database has a primary key.
>
> **[3:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=180)** In fact, if you wanted to see this, if we go back to the migration that was created, right?
>
> **[3:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=185)** It added this ID as an automatic thing for us.
>
> **[3:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=189)** This is required anytime you have a model with django, it's gonna to be adding an ID for you.
>
> **[3:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=194)** So we can keep track of the different models that you have.
>
> **[3:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=198)** So with that knowledge, what we can do is let's go back to our views as we can say, the primary key is equal to whatever the job ideas, so it's gonna use that to look in the database and say, hey, is there a job with this idea?
>
> **[3:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=212)** If there is, it will show us back to us.
>
> **[3:34](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=214)** Or if there's not like, when I put in the number four on the admin side, and it couldn't find one, it's gonna spit back a 404 page, which is essentially an error page to say, hey, we couldn't find this, something must have happened.
>
> **[3:47](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=227)** Now, once we go ahead and get this job detail.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=230)** All this is, is a job object.
>
> **[3:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=232)** So it's going to have a summary and an image, we wanna pass this forward to the HTML file.
>
> **[3:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=237)** And right now, all we have is the home dot html, our job detail page is gonna be different from our home that HTML.
>
> **[4:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=244)** So let's go to our jobs app.
>
> **[4:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=247)** And inside of our templates, jobs, we have just home dot html right now, let's add a new file.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=254)** And this is going to be called detail dot html.
>
> **[4:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=258)** And you guessed it, this is going to be sharing some information about the detail of a particular job.
>
> **[4:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=264)** So for the time being, let's just do two curly brackets, we're just going to simply say job dot summary.
>
> **[4:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=273)** Okay, so we'll go ahead and save this.
>
> **[4:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=276)** Let's go back.
>
> **[4:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=277)** So this is looking for a job object to be passed forward to this detailed dot html.
>
> **[4:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=282)** So what we're going to do here, so we're going to say, okay, render the request, job slash home instead of home, we want this to be detail dot html.
>
> **[4:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=290)** So we're now pointing to this particular HTML file, and the set of passing forward jobs, this time, let's do our curly brackets here, we're going to be passing forward a singular job.
>
> **[5:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=302)** Remember, that's the name that we're looking for here.
>
> **[5:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=304)** So singular job colon, and what we're trying to provide is this job detail.
>
> **[5:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=310)** So I'm gonna say job underscore detail, just like that.
>
> **[5:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=315)** Let's save this.
>
> **[5:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=316)** Now, if this works, when we go to slash jobs, or jobs slash one, it should have the summary there for us on the screen.
>
> **[5:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=324)** So let's go ahead and do that.
>
> **[5:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=327)** We're going to say slash jobs slash one, look at that. Three months in Finland.
>
> **[5:32](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=332)** Let's try number three for instance, ABC, Inc. Let's do number four.
>
> **[5:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=337)** Oh, there's that 404 pages that have promised us.
>
> **[5:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=340)** isn't that cool?
>
> **[5:42](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=342)** So now we have the ability through these to go grab that now something that I've heard before from students as they say, hey, you know what, I deleted some things from the admin.
>
> **[5:51](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=351)** And now when I try to go to number one, it gives me an error, you know, how can I change these numbers back to number one, you can't change these primary keys nor should that be something you want to focus in worry about?
>
> **[6:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=363)** These are just meant to be reference points to say, hey, this is this particular job.
>
> **[6:07](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=367)** And so in the admin panel, if you end up deleting some jobs, adding some back, don't be worried that you have jobs like five six 18 and 17 now you know, and there's nothing in between there.
>
> **[6:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=379)** That's not going to wreck any functionality on your website.
>
> **[6:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=382)** Just know those are now their particular IDs.
>
> **[6:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=384)** And the way that we're going to structure our website, is it doesn't have to count numerically.
>
> **[6:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/creating-views-in-django?u=76281980&t=389)** You'll see that in the coming videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (4), this. (4), this, (3), for. (2)
> **UI Navigation:** go to (6), click on (1)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** html (3), url (1), abc (1)
> **Cross-References:** go back to (3)
> **Analogies:** just like (1), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [nick (1)

#### Designing object detail views
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=0)** - [Narrator] I'm really glad that we were able to create this detail URL to say hey, if we want to know more about job one, we can put in that URL and that's gonna give us the summary.
>
> **[0:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=9)** But this is really not all that great, right?
>
> **[0:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=12)** There's nothing super exciting about what we have here.
>
> **[0:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=15)** It'd be awesome if we could make this look great, just like our homepage looks great, right.
>
> **[0:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=20)** We have this nice image, and buttons, and all that stuff.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=23)** So that's what we're gonna do, is make our detail page look just as good as our homepage.
>
> **[0:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=28)** So, we're gonna copy a lot of the same code that we have from our home.html into detail, and just swap out a few things to make it look great.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=37)** So let's move back into Atom.
>
> **[0:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=40)** And let's go into our home.html, and like I saw I'm going to select all of the code there, copy it, come back to our detail.html.
>
> **[0:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=48)** I'm gonna leave that job summary just up there at the top, so that we can remember how we can reference that.
>
> **[0:55](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=55)** And what we're gonna do here is get rid of everything except for the jumbotron, which the jumbotron is just the information up at the top.
>
> **[1:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=64)** If we go back to our own home page, it's gonna be like, you know this name, this text below, a button and an image, things like that.
>
> **[1:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=71)** So let's go ahead and go back into Atom here, so this means that below that we were doing with the jobs we're gonna get rid of that, so we can just go ahead and delete there.
>
> **[1:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=82)** Only leave our main.
>
> **[1:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=85)** And then we're just gonna slowly start changing what we have here.
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=88)** So, for the jumbotron heading, instead of having the name like Nick Walter, this is going to be a great place to say that we are working with a particular job.
>
> **[1:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=98)** So here we can just say straight up this is our job detail, okay?
>
> **[1:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=103)** And then, for this that's a little bit smaller, this is where we're gonna have the job summary.
>
> **[1:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=109)** So we can scroll up to the top of this file, grab our job summary, and paste it down below here.
>
> **[2:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=120)** So then it's going to show whatever the job summary is going to be.
>
> **[2:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=124)** So, let's go ahead and save this, see what it looks like on Chrome.
>
> **[2:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=128)** So let's go to for example /jobs/1.
>
> **[2:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=133)** And look at this, job detail, I spent three months in Finland creating a backend service for farmers.
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=139)** So, we don't need an email button, and we want this picture to be of the particular job instead of just me.
>
> **[2:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=146)** So in order for this to all work, I'm actually gonna reverse the order of these two, and instead of being email button, I'm gonna have it be a back button.
>
> **[2:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=156)** Now I know every web browser has a back button, that's part of the way the web was designed but I think in a lot of modern web applications it's nice to have a button for the user to quickly just be able to say, whenever I click on one particular job I probably want to go back, I don't want to stay there forever.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=172)** And it can be nice to have that instead of the user having to go all the way up to the top corner and then you know hitting that back button.
>
> **[2:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=179)** So, let's go back to our code, I'm gonna switch the image and the button, so I'm gonna grab these P tags here, and I'm just gonna paste them below the image.
>
> **[3:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=191)** And with this particular button, instead of it being a mail to, and saying email me, I want this to say back.
>
> **[3:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=197)** So it's a nice little back button.
>
> **[3:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=199)** And where is it going to go back to?
>
> **[3:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=202)** Well it's gonna go back to the home page.
>
> **[3:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=204)** So let's go ahead and delete what we have inside of the href, and have it go to the home page.
>
> **[3:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=209)** Now in Django, we've never covered how to make an A tag or a hyperlink that goes to a particular page on our Django website.
>
> **[3:38](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=218)** Well it's really straightforward and it's really great.
>
> **[3:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=221)** All we have to do, is do our curly brackets with percentage signs in 'em, and inside of there we're just going to say, all lowercase, URL, and then inside of single quotes we're gonna give the name of the URL that we want to go to.
>
> **[3:56](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=236)** And do you remember, very back at the beginning when we were creating that urls.py and I said give names to each of these paths?
>
> **[4:03](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=243)** This is the reason for that.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=245)** Because now I can simply say, I want to go to the URL for home, I've given it the name home and I can simply link there.
>
> **[4:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=253)** If I want to go to a detail page I can do that.
>
> **[4:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=255)** So, this name home, that's where we want to move to.
>
> **[4:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=258)** So I'm gonna go back in detail.html, and say go to the URL of home, and that's it.
>
> **[4:25](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=265)** Django handles everything else for being able to send us back to the home page.
>
> **[4:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=270)** If we go back to Chrome here, let's reload this, here's this job detail, I hit the back button, look at that, all of a sudden it sends me back to the home page.
>
> **[4:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/designing-object-detail-views?u=76281980&t=280)** So let's do something like jobs/2, look at that, this is an app I made for a local hiking group, hit the back button, I'm back on the home page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (3), delete (2), super (1), switch (1)
> **UI Navigation:** go to (6), scroll up (1), click on (1)
> **Env Vars:** url (6)
> **File Paths:** home.html (2), detail.html (2), urls.py (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (4)
> **Analogies:** just like (1), for example (1), picture (1)
> **Tools:** atom (2)

#### URL paths with parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=0)** - [Instructor] Let's go ahead and put the finishing touches on this Django project by first addressing this job detail page.
>
> **[0:06](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=6)** It's still showing a picture of yours truly.
>
> **[0:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=9)** We want it to actually show the job image all blown up nice and big like this.
>
> **[0:13](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=13)** So in order to make this change, let's go ahead and move over into Atom.
>
> **[0:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=18)** Instead of just saying we want static nick.jpg, instead, we want information from the job.
>
> **[0:24](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=24)** Now, this is a good learning opportunity here.
>
> **[0:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=26)** Because, when we're getting to the job image and eventually it's URL, we aren't gonna use the curly bracket and percentage sides.
>
> **[0:33](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=33)** Instead, we're gonna be working with the two curly brackets.
>
> **[0:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=37)** And you might be wondering, well, when do you use one and when do you use the other?
>
> **[0:40](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=40)** You're going to use the double curly brackets anytime you're referencing information that has been passed to that HTML template.
>
> **[0:49](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=49)** Inside of our views.py, this information, this jobs dictionary that we pass forward in the singular job that we pass forward.
>
> **[0:57](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=57)** This is information that you would access with the double curly bracket.
>
> **[1:01](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=61)** So, what we're gonna do here is, we're gonna say we want the job.image.url.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=68)** Okay, that's gonna be equal to this image source.
>
> **[1:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=70)** Let's go ahead and save that.
>
> **[1:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=72)** Go back to Chrome.
>
> **[1:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=74)** Reload this page.
>
> **[1:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=75)** And yes, look at that.
>
> **[1:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=77)** We can see the code all nice and blown up.
>
> **[1:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=80)** Let's go to number two.
>
> **[1:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=81)** Oh look, there's that hiking app that all blown up, and I can see that information, and boom.
>
> **[1:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=86)** I hit back, and I'm on the home page.
>
> **[1:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=88)** Now, really the only missing piece that we have, is that when someone's on the homepage, they can't quickly just click on one of these and get to the proper information.
>
> **[1:37](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=97)** Instead, they'd have to know, somehow, that they're supposed to go to jobs slash and start picking numbers out of the air.
>
> **[1:44](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=104)** That's a horrible experience for someone visiting your website.
>
> **[1:48](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=108)** So, let's go ahead and change that.
>
> **[1:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=110)** So, we need to open up our home.html.
>
> **[1:53](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=113)** So, let's get into Atom and we'll go to our home.html.
>
> **[1:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=119)** And it's inside of this loop here, when we're creating all these different jobs that we need to say, hey, we want this to be a link to the particular job and its detail.
>
> **[2:10](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=130)** So right after we have this column md four, just below that, we are gonna make an opening A tag.
>
> **[2:16](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=136)** Make sure you give the proper closing for that.
>
> **[2:19](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=139)** So, right below here, let's do an ending A tag.
>
> **[2:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=143)** It can be really easy to get lost as to, you know, where things should be going, and what not.
>
> **[2:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=148)** So, make sure you have that all clean.
>
> **[2:30](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=150)** And with this A tag, we're gonna give it an href, meaning where this is supposed to go, and in this, we want it to go to a particular job detail.
>
> **[2:39](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=159)** Now, this is a little bit tricky because you might be wondering, well which job are we going to?
>
> **[2:45](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=165)** Well, we can reference it because we're inside of a loop, so we have access to a particular job, and we can get its ID.
>
> **[2:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=172)** So, we're gonna say inside of here, because we're not getting information that was passed to us in this case, this is gonna be kind of a weird little exception here, but we're gonna do the curly brackets with percentage signs, and we're gonna say we're looking for a URL and the name of this URL is detail.
>
> **[3:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=189)** But, if we try and just send someone to the URL of detail, we're gonna have some issues there, right?
>
> **[3:15](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=195)** Because if we go look at our urls.py, detail has to have a job ID.
>
> **[3:21](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=201)** If we literally go look at the views.py, detail requires a job ID.
>
> **[3:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=206)** It won't work unless we pass one of those.
>
> **[3:29](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=209)** So, in our home.html, we need to provide here what particular job we're looking for and we can do that by simply saying job.id So this is one particular case where inside one of the curly brackets with percentage sign, that we can get what was passed forward into this job template to say, okay, let's go get this particular ID.
>
> **[3:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=230)** So, now that we've done that.
>
> **[3:52](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=232)** Let's go ahead and hit the save button here, and then we're gonna move back to our home page.
>
> **[3:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=238)** Okay, let's go ahead and reload that and look at that, all of a sudden the text turned to blue.
>
> **[4:02](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=242)** This is a nice clue for the user that that works.
>
> **[4:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=245)** Also, you'll notice now when the user hovers over the images they get from just the arrow to the pointing finger, that is telling us, yes, this is something that can be clicked on.
>
> **[4:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=254)** And if I click on this website, boom, look at that.
>
> **[4:18](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=258)** It's showing that particular job.
>
> **[4:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=260)** It took us to the correct URL and everything.
>
> **[4:22](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=262)** If I hit the back button, all of a sudden I'm on the homepage and I click on this app here.
>
> **[4:27](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=267)** Bam.
>
> **[4:28](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=268)** It's gonna show me that piece of information.
>
> **[4:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/url-paths-with-parameters?u=76281980&t=271)** So, we successfully made it so that someone can come to our homepage, check out a few jobs that we have and, you know, come back, check out others if they'd like to, and ultimately send us an email if they'd like to learn more and connect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (3), this. (1), static (1), this, (1)
> **UI Navigation:** go to (4), click on (3)
> **File Paths:** home.html (3), views.py (2), urls.py (1)
> **Env Vars:** url (5), html (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3)
> **Tools:** atom (2)
> **Exercise Files:** template (2)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps for Django
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=0)** - [Nick] Thank you so much for coming along with me and building this portfolio.
>
> **[0:04](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=4)** I hope you enjoyed that.
>
> **[0:05](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=5)** I have some next steps for you if you'd like to move forward.
>
> **[0:09](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=9)** My first big recommendation is dive more into Django.
>
> **[0:12](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=12)** It has so much more to offer.
>
> **[0:14](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=14)** I'd really recommend checking out [djangoproject.com](https://djangoproject.com), that's the official website for Django.
>
> **[0:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=20)** There's some really cool topics you can dive into from a top level view.
>
> **[0:23](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=23)** Here are some that I think you might be interested in.
>
> **[0:26](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=26)** Class based views, Authentication, and REST APIs.
>
> **[0:31](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=31)** Now there's obviously more in Django than just those three, but I think those could be some launching points for you.
>
> **[0:36](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=36)** Also, we've created a website, but it's not out live on the internet.
>
> **[0:41](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=41)** It's living on your computer right now.
>
> **[0:43](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=43)** If you'd like to share your website with everybody that's called deploying your website, and there's lots of different places you can do that.
>
> **[0:50](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=50)** One of those is through Digital Ocean or Amazon Web Services.
>
> **[0:54](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=54)** You can do it through Heroku, Python Anywhere.
>
> **[0:58](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=58)** Lots of great tutorials out there.
>
> **[0:59](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=59)** My personal favorite is Digital Ocean, has a great walkthrough of getting your Django project deployed with prosgress, really good stuff.
>
> **[1:08](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=68)** Finally, here's my social media if you'd like to connect with me.
>
> **[1:11](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=71)** You can email me, nick@[ZappyCode.com](https://ZappyCode.com), or I'm on Twitter @ZappyCode.
>
> **[1:17](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=77)** I'd love to hear from you and how Django is going for you.
>
> **[1:20](https://www.linkedin.com/learning/building-a-personal-portfolio-with-django/next-steps-for-django?u=76281980&t=80)** Thank you so much.

> [!info]- Semantic Content
>
> **URLs:** [djangoproject.com](https://djangoproject.com) (1), [zappycode.com](https://zappycode.com) (1)
> **CLI Commands:** python (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** rest (1)
> **Speakers:** - [nick] (1)


## Instructor

- [[Nick Walter]]

## Resources

- Exercise files available

## Skills Covered

- Django

## Path Context

### In [[Become a Django Developer]]
← [[Deploying Django Apps- Make Your Site Go Live]] | **4 of 4**

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