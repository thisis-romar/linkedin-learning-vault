---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: node-authentication
url: "https://www.linkedin.com/learning/node-authentication"
duration_minutes: 218
duration: 3h 38m
level: Advanced
updated: 6/30/2021
learners: 57292
skills:
  - Digital Authentication
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/node-authentication-2881188"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFfBze87e2Uzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624987747272?e=2147483647&amp;v=beta&amp;t=zJ1fGIb-yUPXCx5HLCtiWz-rOPG-TOpwqdwabKwI40w"
linkedin_topic: Web Development
learning_paths:
  - Explore Web Development with Node.js
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/digital-authentication
  - skill/node-js
status: not-started
created: 2026-04-20
---

![Node: Authentication](https://media.licdn.com/dms/image/v2/C560DAQFfBze87e2Uzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624987747272?e=2147483647&amp;v=beta&amp;t=zJ1fGIb-yUPXCx5HLCtiWz-rOPG-TOpwqdwabKwI40w)

# Node: Authentication

> If you have a website, you want visitors. And if you run a business through a website, you want those visitors to be customers. To do that, you need user registration and authentication. Authentication is the foundation of most web applications, letting you determine who is visiting your site and helping you connect them with privileges they should or should not have. In this course, Daniel Khan s

> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication) | 3h 38m | Advanced | 57K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Daniel Khan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/node-authentication-2881188)

## Skills Covered

- Digital Authentication
- Node.js

## Table of Contents

### Introduction

#### Real sites need authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=0)** - [Daniel] Obviously a user base is key for most successful websites.
>
> **[0:04](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=4)** Sometimes whole acquisitions are made just because the site has many users.
>
> **[0:10](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=10)** To turn plain visitors into users, you need to provide a way for them to register for an account, and then consequently, let them log in or authenticate themselves.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=21)** Implementing user-friendly, secure and seamless authentication is therefore an important task any web or app developer should be familiar with.
>
> **[0:31](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=31)** I'm going to show you how you can add user registration and authentication to any app built with Node.js and Express.
>
> **[0:38](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=38)** We will cover everything from simple logging, using a username and a password stored in a database, to more complex ways, like single sign-on against a third-party.
>
> **[0:47](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=47)** All of this will be done in a hands on way with realistic sample projects, so that you can apply your knowledge on your job immediately.
>
> **[0:55](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=55)** I'm Daniel Kahn. I've been working as a software engineer, architect and technology lead for more than 20 years.
>
> **[1:01](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=61)** Along the way, I also did my bachelor in software engineering and I'm really super excited to share what I know.
>
> **[1:07](https://www.linkedin.com/learning/node-authentication/real-sites-need-authentication?u=76281980&t=67)** If you're ready to learn how to build perfect authentication into your apps, then join me on my LinkedIn learning course on authentication with Node.js.

> [!info]- Semantic Content
>
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Code Keywords:** let (1), super (1)
> **Speakers:** - [daniel] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is not a beginner's course.
>
> **[0:02](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=2)** To get the most out of it, you should have some working knowledge with Node.js and Express, and you should also know recent language concepts like promises and async await, and ES6 syntax like destructuring assignments.
>
> **[0:15](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=15)** Also some basic knowledge of databases and maybe MongoDB will help you understand everything we cover during this course.
>
> **[0:23](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=23)** The exercise files for this course are on GitHub and while you don't need to do a rebase, basic GIT commands like commit, push, and pull should sound familiar to you.
>
> **[0:32](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=32)** If you feel you have to expand your knowledge a bit, you can first take my courses, building a website with Node.js and Express, advanced Express and Node.js databases.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=43)** There's also course called [[Learning Git and GitHub]] in the library.
>
> **[0:47](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=47)** If you have questions, please use the Q&A for this course, or really look into it frequently.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=52)** But let's get started now.
>
> **[0:53](https://www.linkedin.com/learning/node-authentication/what-you-should-know?u=76281980&t=53)** You can still branch off to other courses as we go.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), git (2)
> **File Paths:** node.js (3)
> **Code Keywords:** async (1), await (1), let (1)
> **Env Vars:** es6 (1), git (1)
> **Tools:** github (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Loading the exercise files from GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=0)** - [Instructor] All the files for this course are freely available at GitHub repo at this URL.
>
> **[0:05](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=5)** Please make sure that Git Client is installed on your machine and you have some basic knowledge about what Git and GitHub are and how they work.
>
> **[0:13](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=13)** If you're completely new to Git, please search the library for the topic.
>
> **[0:16](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=16)** I'd recommend to take the course [[Learning Git and GitHub]] by Ray Villalobos.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=21)** As Git and GitHub are so commonly used, I promise that this is a good investment into your career.
>
> **[0:26](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=26)** Now you can just follow along with me.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=29)** The repository is built so that there are branches for each of the videos where code was changed in this course.
>
> **[0:34](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=34)** You can use the branch pop up right here on the left to switch between the versions.
>
> **[0:41](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=41)** If you see a B at the end of the branch name, this means this is how the code looked at the beginning of the video.
>
> **[0:48](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=48)** And if you see an E, this means that this is how the code looked at the end of the video.
>
> **[0:53](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=53)** Also, there is a branch start, so this is the starting point for this course and then there is also branch main.
>
> **[1:05](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=65)** This is the state at the end of the course, and I also just created another branch that is called final, which is right now pointing to main, so final and main are basically the same.
>
> **[1:20](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=80)** So to clone this report, I click on this green Code button and then I select the SSH tab up there, so I'm cloning the SSH and then I click on this clipboard icon.
>
> **[1:34](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=94)** And now we can head over to the desktop and there I create a new folder node-authentication.
>
> **[1:44](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=104)** And of course you can put it anywhere on your system, depending on your preferences.
>
> **[1:49](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=109)** And then I open the terminal.
>
> **[1:51](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=111)** This might look different if you're on Windows, but from it's principal it should be the same.
>
> **[1:55](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=115)** I'm now changing into this directory by doing CD.
>
> **[1:59](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=119)** And I can now simply drag this directory into the terminal to copy that over.
>
> **[2:06](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=126)** And I'm now in node-authentication, that's important.
>
> **[2:10](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=130)** So now I'm running git clone --bare and now I'm pasting in the GitHub repo URL.
>
> **[2:18](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=138)** And then I add a blank and .git, that's important.
>
> **[2:22](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=142)** So, .git has to be here in the end.
>
> **[2:26](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=146)** Now, it's cloning the spare repository.
>
> **[2:29](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=149)** As you see this all looks a little bit complicated.
>
> **[2:32](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=152)** This is just because I really want to clone and really download all the branches.
>
> **[2:38](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=158)** Otherwise, this command looks way more simple, But in this case, we now have to add git config --bool core.bare false.
>
> **[2:51](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=171)** So nothing happens there, that's normal, but then I run git reset --hard, and now we really have cloned everything.
>
> **[3:05](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=185)** and to verify that I can now enter git branch and you see that we now have all the branches.
>
> **[3:14](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=194)** And we are now on branch main, which would mean that we are on the branch that contains already the end of the course, so I recommend you to do a git checkout start, so now we are on the start branch.
>
> **[3:31](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=211)** And now I'm also going to create a new branch from start that you can then use for your development.
>
> **[3:39](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=219)** And for that, I do git checkout -b and let's call it development.
>
> **[3:49](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=229)** And now we are on the branch development, which represents the starting point of this course.
>
> **[3:57](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=237)** And you can now get started from there.
>
> **[4:00](https://www.linkedin.com/learning/node-authentication/loading-the-exercise-files-from-github?u=76281980&t=240)** So, if you later then open this directory envicious to the code, you will be already on the development branch.

> [!info]- Semantic Content
>
> **CLI Commands:** git (13), ssh (2), node (2), make (1), cd (1)
> **Tools:** github (5), terminal (2)
> **Env Vars:** url (2), ssh (2)
> **UI Navigation:** click on (2), select the (1), open the (1)
> **Definitions:** is a  (2), means that (1), is called (1)
> **Code Keywords:** switch (1), case, (1), let (1)
> **Exercise Files:** github repo (2)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

#### Prepare your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=0)** - [Instructor] Before we can really kick things off, we first have to make sure that your development machine has all the software needed to be installed.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=7)** We'll take care of this in this chapter.
>
> **[0:09](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=9)** Please follow along with me and we will be done with that very quickly.
>
> **[0:12](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=12)** First of course, we have to have node js installed on our system.
>
> **[0:17](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=17)** I installed the current long-term supported or LTS version.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=21)** To verify my installation, I head over into the terminal and type node -v and I get the currently installed version.
>
> **[0:31](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=31)** So we are good to go with node js.
>
> **[0:33](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=33)** During this course, we will use Mongo DB as a database.
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=36)** Depending on your operating system, setting it up can be quite complicated.
>
> **[0:41](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=41)** That's why I decided to use Docker here.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=43)** Docker allows you to run independent containers on your system, and it comes with a large repository.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=49)** It's ready to run configurations.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=51)** If you are completely unfamiliar to databases in node js, I recommend you taking my course, node js databases first.
>
> **[0:58](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=58)** Yet, I'll explain all the needed setup steps during this course.
>
> **[1:03](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=63)** To get started with Docker.
>
> **[1:04](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=64)** We first have to install it on our system.
>
> **[1:07](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=67)** Docker is available for Mac, Windows, and Linux, and there installation instructions for each of them.
>
> **[1:12](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=72)** I already installed Docker on my system, you see also this little Docker icon in my task bar up there.
>
> **[1:18](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=78)** And when I head into the terminal, I can type docker -v and I get the currently installed version.
>
> **[1:26](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=86)** So we're good to go with Docker as well.
>
> **[1:28](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=88)** In the next video, I will then show you how to pull down the Mongo DB image and run Mongo DB using Docker.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=96)** Of course, we also need some editor for our code and I will be using Visual Studio Code.
>
> **[1:42](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=102)** Visual Studio Code is an open source ID that under the hood also uses node js.
>
> **[1:48](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=108)** Naturally it's node js support is excellent.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=110)** If you want to use it as well, just head to the website, download the installer for your operating system and you're good to go.
>
> **[1:57](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=117)** I already installed it and I also already opened the exercise files folder that we pulled down from Kita before.
>
> **[2:07](https://www.linkedin.com/learning/node-authentication/prepare-your-development-environment?u=76281980&t=127)** In the next video, as promised we will set up Mongo DB using Docker.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (10), node (7), mongo (4), make (1)
> **Tools:** terminal (2), visual studio (2)
> **Prerequisites:** setup (1), install (1), set up (1)
> **Cross-References:** in the next (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Env Vars:** lts (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Set up MongoDB
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=0)** - [Instructor] Authentication is very often performed against a user database, and we will use MongoDB for that.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=7)** And setting up MongoDB can be a bit complicated depending on your operating system, we will use Docker to run it.
>
> **[0:13](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=13)** Make sure that your Docker daemon is running.
>
> **[0:16](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=16)** Here, I'm going to make you see this Docker icon on my task bar, when I click it I see that the Docker desktop is running, and then I head into the terminal and there I now run docker pull mongo.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=35)** This will pull down the MongoDB image directly from Docker Hub.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=43)** Now we have the MongoDB image on our machine and, of course, we now have to run this Docker image.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=51)** And for that, I now run docker run --name, and we will call this running container mongodb, and then I do a port configuration, and there I add -p 37017:27017.
>
> **[1:14](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=74)** What this does is it maps the default MongoDB port, which is 27017 in the Docker container, to my localhost port, so the 7017, and I can use that port then to connect to Mongo DB.
>
> **[1:31](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=91)** And then I also have to add -d, for run it as a daemon, and then I also have to, of course, tell which image this is, and if I now hit return I have a running image.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=106)** I can verify that by typing docker ps, and there you see, here, we have this running Docker image now.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=114)** It might happen that this container stops, or you just restart your system and Docker is then not running anymore.
>
> **[2:00](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=120)** To restart this container again, you can always later run docker start mongodb, now, of course, MongoDB is already running.
>
> **[2:14](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=134)** When working with databases it's always a good idea to have some graphical interface to it so that you can look at the content in the database, and we will install one for MongoDB now.
>
> **[2:25](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=145)** I chose to use MongoDB Compass, it's free and provided by the company behind MongoDB.
>
> **[2:30](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=150)** Just look up MongoDB Compass, and you should end up on this page and you can, there, download MongoDB Compass for free.
>
> **[2:38](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=158)** I already did that, so now when I run MongoDB Compass it first will start up, this takes a little bit, and then I want to connect to MongoDB running on Docker, and for that I select, here, Fit in connection fields individually, and I want to connect to localhost and there I use 37017 as explained before, this is the port that is mapped to the internal port of the Docker container.
>
> **[3:09](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=189)** And for authentication we can leave it to none, and I can now, simply, click Connect.
>
> **[3:17](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=197)** If everything went well, you will be presented with a screen similar to what you see here.
>
> **[3:23](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=203)** So this shows, already, some system tables of main MongoDB, some system collections and, of course, when we then add our authentication databases they will show up here as well.
>
> **[3:36](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=216)** Now MongoDB is running on your system and that was actually quite easy.
>
> **[3:41](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=221)** Of course, for production deployment, setting up MongoDB is way more challenging.
>
> **[3:45](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=225)** There are a lot of configuration options like security storage engines, replications, and you might even want to consider tweaking your file system in kernel settings to make MongoDB run smoothly under high load.
>
> **[3:57](https://www.linkedin.com/learning/node-authentication/set-up-mongodb?u=76281980&t=237)** For a sample project, though, this setup will fully suffice, and we will look at them in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), make (3), mongo (2)
> **Tools:** docker desktop (1), terminal (1)
> **Prerequisites:** install (1), setup (1)
> **Code Keywords:** interface (1)
> **Ports:** :27017 (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Set up and understand the playground sample application
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=0)** - [Instructor] This course comes with two sample applications called Playground and Todolist.
>
> **[0:05](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=5)** Playground is a simple Express.js web application that uses MongoDB as its database in Mongoose, which is a popular object document mapper.
>
> **[0:15](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=15)** You don't have to be a MongoDB or Mongoose expert to take this course.
>
> **[0:19](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=19)** I will show you everything you need to know in the context of authentication as we go.
>
> **[0:24](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=24)** Ideally, you can then apply your learnings to any database you may choose.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=29)** To do list is a single page application that uses the JavaScript framework Vue.js.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=35)** No worries, for this course you don't have to know Vue.js at all, everything is already set up for you.
>
> **[0:42](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=42)** But the key thing is that Todolist will later in this course use an API provided by playground and there, I will show you how to authenticate REST API calls.
>
> **[0:54](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=54)** At the start, we only need the Playground app and to set it up, I have now opened Visual Studio Code, there I'm in the exercise files folder.
>
> **[1:02](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=62)** Now I'm opening the internal terminal official Studio Code by clicking on view and then terminal.
>
> **[1:10](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=70)** And first I'm going to change into the Playground directory and in there I first run NPM install to install all dependencies for this project.
>
> **[1:21](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=81)** If you look into this folder then let's open package.json and as you should know already, all the dependencies are listed in here.
>
> **[1:31](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=91)** But most importantly in line eight you see that we are using Nodemon to start the application during development.
>
> **[1:39](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=99)** Nodemon is a little tool that will reload your application whenever you change your code.
>
> **[1:44](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=104)** This spares you from constantly having to restart your application manually while developing.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=110)** Let's look a little bit further into this application, so let's start with the start script, it's in server bin start.js and in here, I basically had commented everything throughout the whole application.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=125)** And if you scroll down you see that down there in line 51 we are connecting to MongoDB using Mongoose and later then inline 60, we start listening with the web server on the given port, which is 3000.
>
> **[2:23](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=143)** Everything else down here, if we scroll through it is pretty standard.
>
> **[2:28](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=148)** Next let's look into the app.js file because in app.js we are setting up the Express application and as you see here as well, I commented everything so that you really know what's going on here.
>
> **[2:41](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=161)** Most importantly, we are using cookie sessions and they are initialized here in line 41.
>
> **[2:49](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=169)** And then further down we are setting up something that is called flash messaging.
>
> **[2:56](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=176)** And flash messaging allows you to create messages that are displayed to the user and are stored in the session.
>
> **[3:05](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=185)** So they will survive a reload or a redirect on the page.
>
> **[3:09](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=189)** If we scroll further, we also see that in line 84 we are initializing the routing system.
>
> **[3:15](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=195)** I'm using ExpressRoute to form a route and as you see this index route to here is called as a function and a pass in the config object, so let's look at this index route.
>
> **[3:27](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=207)** For that, I'm heading into routes and in there I open index.js and there you see that index.js.
>
> **[3:36](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=216)** So this module here is actually a function that takes a params argument.
>
> **[3:41](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=221)** So I can now pass down arguments to my routing modules.
>
> **[3:47](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=227)** And if we scroll through in line 12 we are rendering the index page and on line 17 we are rendering some of my account page that we will use later.
>
> **[3:59](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=239)** And everything else is basically hooking up the other routing modules to the rest of the routing system.
>
> **[4:07](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=247)** And if we look really quick into all these directories, we see that there are a lot of routing files and we will work with all of them throughout this course.
>
> **[4:17](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=257)** One more important things are the models, so Mongoose relies models that lets us communicate with the database and there we have models for the user, for the Todolist that we will use later and also one model that we'll use later to create tokens to reset a password.
>
> **[4:38](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=278)** One quick look into user model and you see, this is a typically Mongoose model.
>
> **[4:44](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=284)** As I said before, you don't have to be a Mongoose expert to make it through this course, I will explain everything that is important as we go.
>
> **[4:54](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=294)** We are not fully done yet, we also have a directory services and let's look into the services directory and there you see a user service and the to-do list service.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=304)** And if we open that you see that this user service, for instance, contains all the boilerplate methods that you need to communicate with the database.
>
> **[5:16](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=316)** I did that to really take away all that database queries from you so that we can really focus on purely authentication and what this is all about.
>
> **[5:27](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=327)** To finish this up, we also have one directory which is called middlewares and in there I have a validation middleware.
>
> **[5:35](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=335)** And these validation middlewares are using Express Validator to provide some sanity checks on user provided data, because of course we are dealing with user provided data whenever a user fills out some form.
>
> **[5:50](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=350)** And at the very last, you also see there is a file lib passport.
>
> **[5:56](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=356)** And this file is at this point empty, we will extend this file when we are using the passport authentication library later.
>
> **[6:06](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=366)** Now I think we are ready to finally start the application and for that, I'm now running NPM run dev, and you see that Nodemon starts the application.
>
> **[6:18](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=378)** We also see the message that we've successfully connected to MongaDB and that we are listening on port 3000.
>
> **[6:26](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=386)** And if you now here get an error message, this might mean that its either your MongoDB server is not running or maybe it's listening on the wrong port.
>
> **[6:36](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=396)** To change the connection string to the MongoDB instance, you can go into config, index.js and there you have on line 60, connection string to MongoDB.
>
> **[6:48](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=408)** So maybe if you are using a local MongoDB not the one in Docker, the port that you would have to fill in here would be 27017.
>
> **[6:57](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=417)** So that would be the default port of the MongoDB but we are using Docker and there we are listening, as you know, on this port that we have here in this file.
>
> **[7:09](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=429)** Finally, now it's, let's open the browser and head to local host port 3000 and the application starts, you also see the message that we have successfully connected to MongoDB.
>
> **[7:21](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=441)** And when we know click through it you see that we also have the basic views for registering a user, for logging in a user and also a view that gives us a form to reset the password.
>
> **[7:36](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=456)** Now, if we try to send such a form, so I'm trying now to reset the password for the user, foo@[bar.com](https://bar.com) and I click on reset password, I get this not implemented error.
>
> **[7:50](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=470)** Of course, because the implementation is what we are going to.
>
> **[7:54](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-playground-sample-application?u=76281980&t=474)** You get this not implemented error, of course, because the implementation is what we are going to do starting with the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), pass (2), module (1), finally, (1)
> **File Paths:** index.js (3), vue.js (2), app.js (2), express.js (1), package.json (1)
> **Definitions:** is a  (6), is called (3)
> **CLI Commands:** npm (2), docker (2), make (1)
> **Env Vars:** api (2), npm (2), rest (1)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** scroll down (1), open the (1), click on (1)
> **Prerequisites:** install (2), set up (1)


### 2. Registering New Users Handling Passwords

#### Registering new users
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=0)** - [Instructor] Now we are finally ready to start coding.
>
> **[0:03](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=3)** In this chapter we will implement the user registration flow, we will look at how to deal with passwords in a secure way, we will make it a requirement for users to verify their email address, and we will provide a way to reset a forgotten password.
>
> **[0:19](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=19)** Before a user can be authenticated, there needs to be a user account.
>
> **[0:23](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=23)** In most cases, such an account is created by user registration flow.
>
> **[0:27](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=27)** In our Playground application, you find the menu item; registration.
>
> **[0:31](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=31)** Let's click on that, and there you are presented with a user registration form.
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=36)** When we accept user input, it's key that we validate this data because not all users have good intentions.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=43)** Partly, this validation could be done on the browser.
>
> **[0:46](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=46)** HTML5 gives us a range of validations already, yet it's very easy to circumvent them on the client.
>
> **[0:54](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=54)** So we can still not trust the data we are getting.
>
> **[0:57](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=57)** This is why for this form, I omitted all HTML validations just to give you a better feel of what it takes to ensure that the provided data is valid.
>
> **[1:08](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=68)** In the end, validation on the client is mostly for convenience for the user to let them know about unintended mistakes before the form is submitted.
>
> **[1:18](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=78)** So let's fill out this form and now deliberately just add bogus data.
>
> **[1:24](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=84)** So let's type something, a short username, not an email address, passwords that don't match, and are maybe also too short and I click on Create Account.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=96)** And you see that flesh messages that I mentioned before.
>
> **[1:40](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=100)** So we let the user know that the provided inputs are invalid.
>
> **[1:42](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=102)** And we did this all now on the server.
>
> **[1:45](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=105)** So let's click away these notifications and now let's fill in the form properly.
>
> **[1:52](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=112)** So for the username, let say the username is 'jdonaldson', that's our test user, one of them, and the email address is jdonaldson@[explorecalifornia.com](https://explorecalifornia.com),
>
> **[2:11](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=131)** and for the password, I now type in 'some secret'.
>
> **[2:18](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=138)** So literally, 'some secret' twice because we validate the password here.
>
> **[2:24](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=144)** And then I click on Create Account.
>
> **[2:26](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=146)** Now we get this not implemented message, of course, we made it now through the form validation, but now we ended up in a part of the code that now needs to be implemented.
>
> **[2:37](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=157)** So let's head into visual studio code to do that.
>
> **[2:41](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=161)** And here you already see that I'm even logging out the past in form data.
>
> **[2:48](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=168)** So this can help us now with the implementation.
>
> **[2:51](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=171)** Let's head into the route where all this is happening.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=174)** For that, I open server, routes, auth, and there, the file registration.js.
>
> **[3:06](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=186)** So here on line 14, you see the route that renders the registration form and further down there is this post route that should now do the registration.
>
> **[3:18](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=198)** And here you see also studying line 25, all the middlewares that I am using to validate the user input.
>
> **[3:26](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=206)** And as I showed you before the middlewares are defined here in middlewares validation.
>
> **[3:32](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=212)** So if you want to know what exactly they are doing, you can look them up there.
>
> **[3:37](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=217)** Now let's scroll further.
>
> **[3:39](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=219)** You see we have here this path starting in line 34 to 42, where we generate these error messages that you saw before.
>
> **[3:49](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=229)** And further down, you see that if there are errors, this is line 53, then we will just return the registration form again, and also render the errors in there.
>
> **[4:01](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=241)** You see this in line 58, but what we now want to do is we want to implement the logic that creates the user in the database if validator was provided.
>
> **[4:12](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=252)** Here also in line 44, you see this console log statement that locked out the input that they provided before.
>
> **[4:21](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=261)** So what should we do now first?
>
> **[4:22](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=262)** First we should make sure that the given user name and also the given email are not already in our database because those two should really be unique.
>
> **[4:33](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=273)** And also this is a constraint on the database.
>
> **[4:36](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=276)** So username and email address, these are unique properties that really belong to one user.
>
> **[4:43](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=283)** So let's first start with implementing this logic.
>
> **[4:50](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=290)** So let's remove the block here, 43.
>
> **[4:53](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=293)** And I start coding by now adding 'const exiting email = await'.
>
> **[5:05](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=305)** So now we have to have a method that looks up an email address in the database, and for that they use user service.
>
> **[5:14](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=314)** And where is this user service now coming from?
>
> **[5:16](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=316)** Let's scroll up and there you see that I'm bringing in user service already here in line four.
>
> **[5:24](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=324)** So this is something I already did for you.
>
> **[5:26](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=326)** And as I showed you before the user services here in services, and there we have a method find the email, and this is the method that you're using now.
>
> **[5:38](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=338)** So let's head back to line 43 and here I am now calling "userservice.findbyemail", and I pass in 'req.body.email'.
>
> **[5:57](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=357)** So this is the form data that was provided.
>
> **[6:00](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=360)** So now if the email exists already, it's stored in existing email.
>
> **[6:04](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=364)** Also note that I'm using a weight here and the method, so the routing function up here is marked as 'async' in line 29.
>
> **[6:13](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=373)** Right next let's do the same for the username.
>
> **[6:16](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=376)** So add 'const existingusername = await', 'userservice.findbyusername', and this is also 'request body' and then 'user name'.
>
> **[6:36](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=396)** So now we have to check for an existing email or an existing username.
>
> **[6:40](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=400)** And for that, I will now add 'if existing email' or 'existing username', then I want to push into my errors array.
>
> **[6:55](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=415)** So I want to mark this field as an error, error push
>
> **[7:03](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=423)** and there, an email.
>
> **[7:05](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=425)** So there is logic in the view file that will mark the form fields that are in this error array in red.
>
> **[7:14](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=434)** So it's 'error push email', and I also do 'error push username'.
>
> **[7:25](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=445)** And then I also want to create a nice flesh message that tells the user that something is wrong here.
>
> **[7:32](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=452)** So add 'request.session'.
>
> **[7:35](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=455)** So this is now the flesh messaging system that we will also use throughout the course, 'messages.push'.
>
> **[7:44](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=464)** And in here at first define the text that should be displayed to the user.
>
> **[7:51](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=471)** Text is the email address or the username or exists already.
>
> **[8:05](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=485)** Let's call it the given email address, so username exists already.
>
> **[8:09](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=489)** And then I can also add an arrow type that basically just determines which color this message box has, and there are defined danger.
>
> **[8:20](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=500)** This gives us like a red message box.
>
> **[8:23](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=503)** You might now wonder why we don't explicitly just check for the email address.
>
> **[8:29](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=509)** And warn about an email address, that is not unique and a user that is not unique and let the user know exactly what's wrong.
>
> **[8:37](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=517)** But we really want to be a little bit ambiguous here because we basically otherwise leak which username or email might exist in the database.
>
> **[8:49](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=529)** With this method here, we are not so clear about if the email address or the username already exists in the database, which is a little bit of a safety measure.
>
> **[8:58](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=538)** And you see this often on websites that this is done exactly like that.
>
> **[9:04](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=544)** So now we have checked validation errors and here we can remove this to do because we just created that.
>
> **[9:13](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=553)** And also the next return not implemented can be removed.
>
> **[9:20](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=560)** Now here in line 60 again, we have the error checking.
>
> **[9:24](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=564)** So if there was an error, now we will return the form again.
>
> **[9:31](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=571)** And we are done with that.
>
> **[9:32](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=572)** We are returning from this function, but if we make it past it, this means we don't have an error.
>
> **[9:38](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=578)** So what we will do now is we can finally create our user.
>
> **[9:45](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=585)** So here in line 72, I add the weight, 'userservice' and user service gives us a method; 'create user'.
>
> **[9:56](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=596)** And this create user function takes three arguments, the username and email and the password.
>
> **[10:05](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=605)** So I now add 'request.body.username',
>
> **[10:14](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=614)** 'request.body.email', and 'request.body.password'.
>
> **[10:24](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=624)** And now we are ready to give the user a success message.
>
> **[10:28](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=628)** So if we make it past that and not land in the catch block, because there was an exception in the easing function that we just called, we can now do 'request session.messages.push' and there we now tell the user that your account was created, yay.
>
> **[10:55](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=655)** And the type of the message is now 'success'.
>
> **[11:01](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=661)** The names of this message types are taken from bootstrap.
>
> **[11:06](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=666)** So them, they map to styles defined by the bootstrap framework, which is the style framework I'm using here for the front-end.
>
> **[11:14](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=674)** So we still have here, this is not implemented.
>
> **[11:17](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=677)** So what do we do after the user was created?
>
> **[11:20](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=680)** I want to redirect the user then to the login form.
>
> **[11:23](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=683)** This is also good practice when dealing with forms, redirect the user in the end so that they can not hit the form again and again, and maybe trigger an error or resend it all the time and maybe create one database entry after the other.
>
> **[11:40](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=700)** So best practice is to return a 'response.redirect', and we redirect to the route 'auth/login'.
>
> **[11:55](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=715)** Okay with that, we should be done.
>
> **[11:58](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=718)** Let's head back to the browser.
>
> **[12:00](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=720)** Now we should be able to just reload this page because the form data is here in this case, still stored in the browser.
>
> **[12:06](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=726)** So I do a reload and the browser asks me if I want to do that. And I click continue.
>
> **[12:14](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=734)** And you see I get the message 'your account was created'.
>
> **[12:17](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=737)** And it was also redirected to the login form.
>
> **[12:21](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=741)** So now let's look into the database to see what is now stored in Mongo DB.
>
> **[12:26](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=746)** So let's open Mongo DB compass that we installed before in the beginning.
>
> **[12:32](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=752)** And there we have this recent connection.
>
> **[12:35](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=755)** Let's click on that and then click connect.
>
> **[12:39](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=759)** And there you see, we now have a new database, 'linkedIn note authentication'.
>
> **[12:44](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=764)** This was created automatically.
>
> **[12:46](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=766)** And if you click into that, we also see that there is now a collection for reset tokens, to do list items.
>
> **[12:53](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=773)** These were also created automatically with the models we defined in the application.
>
> **[12:59](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=779)** And there is also a collection users.
>
> **[13:02](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=782)** Let's look into the users collection now.
>
> **[13:04](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=784)** And then we see that newly created user along with some fields like the created date and the updated date and the objected deed that is maintained by Mongo DB.
>
> **[13:18](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=798)** There is also verification token.
>
> **[13:20](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=800)** We will talk about that in a bit, and you also see that there is my password in plain text, 'some secret'.
>
> **[13:27](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=807)** If we head back into the browser I'll show you something else, we also have this little helper view called user list.
>
> **[13:35](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=815)** And if I click on that, on this user view you also see that my password is now displayed in plain text and for everyone to see.
>
> **[13:44](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=824)** Now please take a moment to think about why storing the password like that is a bad idea.
>
> **[13:50](https://www.linkedin.com/learning/node-authentication/registering-new-users?u=76281980&t=830)** We will talk about this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), function (4), const (2), await (2), match, (1)
> **CLI Commands:** make (4), mongo (3), find (2)
> **UI Navigation:** click on (5), scroll up (1)
> **Definitions:** is a  (3)
> **Env Vars:** html5 (1), html (1)
> **Best Practices:** good practice (1), best practice (1)
> **File Paths:** registration.js (1)
> **Code Identifiers:** linkedin (1)

#### Why plaintext passwords are bad
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=0)** - [Instructor] So we stored the user's password in plain text, and we also displayed as such now on our website.
>
> **[0:06](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=6)** And it does not take much to create such a user list and forget to protect it.
>
> **[0:11](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=11)** And this is not just great theory.
>
> **[0:13](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=13)** I'm sure you've heard about some data breach lately.
>
> **[0:16](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=16)** Did you ever check your email address at [haveIbeenpwned.com](https://haveIbeenpwned.com)?
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=21)** It will tell you if your credentials have leaked, and if the breach site stored the password in plain text, your password is now in the open.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=29)** Did you maybe use this email and password combination frequently, like many of us do?
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=35)** Well then, someone may just give it a try to check if your PayPal account has the same credentials.
>
> **[0:42](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=42)** In short, if you store passwords in plain text and your site gets compromised in any way, the intruder will gain access to all passwords as well.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=52)** And this is bad.
>
> **[0:54](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=54)** This is why we should always only store hashed passwords.
>
> **[0:59](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=59)** But what is this? And how does it work?
>
> **[1:03](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=63)** A hash is the product of a hashing function.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=66)** And as you can not reproduce original potatoes from your hash browns, a good hashing function makes it impossible to calculate the original string from a hash.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=77)** What it guarantees though, is that the same hashing function will create the same hash, then provide it with the same arguments.
>
> **[1:25](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=85)** That's different from making hash browns.
>
> **[1:28](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=88)** The hashing function that we will use is provided by a module called bcrypt.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=93)** It's kind of the gold standard for hashing in Node.js.
>
> **[1:37](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=97)** Bcrypt takes three input arguments.
>
> **[1:40](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=100)** First, it takes the string that we want to hash here.
>
> **[1:43](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=103)** It's called supersecret.
>
> **[1:45](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=105)** Then it takes a so-called salt, and also, it takes the number of hashing rounds it should perform.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=114)** And the more rounds you use, the harder it will be to reproduce a password or a string from the given hash.
>
> **[2:02](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=122)** The resulting hash has a well-defined format, and it consists of the version information and the number of rounds, the salt that has been used, and the actual hash.
>
> **[2:14](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=134)** Now we have a hash that we can store in the database, and no one will be able to regenerate the original string, the password from it.
>
> **[2:23](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=143)** But how do we now find out if a given password is correct?
>
> **[2:27](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=147)** Luckily, the bcrypt is deterministic.
>
> **[2:30](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=150)** This means that, as I said before, given the same input arguments, it will always end up with the same hash.
>
> **[2:37](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=157)** And I showed you before that the hash contains the number of rounds and also the salt in the well-defined form.
>
> **[2:43](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=163)** So we have those input arguments together with our secret.
>
> **[2:49](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=169)** And if we pass it now to a compare function provided by bcrypt as well, we will end up with the same hash that we had before.
>
> **[2:58](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=178)** This compare function also has a linear execution time to prevent so-called timing attacks.
>
> **[3:06](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=186)** These are attacks that use the execution time of a comparison to guess how close a given password is to the real one.
>
> **[3:13](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=193)** So this was bcrypt in a nutshell.
>
> **[3:15](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=195)** If you want to learn more about how it works also under the hood, please use the link shown below.
>
> **[3:21](https://www.linkedin.com/learning/node-authentication/why-plaintext-passwords-are-bad?u=76281980&t=201)** Now that we know the theory, let's now implement proper password hashing in our playground application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), module (1), pass (1), let (1)
> **CLI Commands:** node (1), find (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** haveibeenpwned (1)
> **URLs:** [haveibeenpwned.com](https://haveibeenpwned.com) (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Hashing and validating passwords with bcrypt
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=0)** - Mongoose models provide so-called pre-save hooks that we can use to make sure that passwords are always hashed as soon as they're saved to the database.
>
> **[0:10](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=10)** If you like to use any other database, the provided functionality of the database may differ, but the actual hashing should work similar.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=18)** So to create such a pre-save hook I now head into Server, Models, and then into User Model.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=29)** The first thing I have to do is I have to install bcrypt.
>
> **[0:33](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=33)** So I'm stopping the Node.js process now with Ctrl C, and then I'll run npm install-S bcrypt.
>
> **[0:47](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=47)** Next we of course have to require bcrypt in our model file.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=51)** So add const bcrypt = require bcrypt
>
> **[0:59](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=59)** and now we are ready to implement this pre-save hook for that scroll down somewhere of the line 44.
>
> **[1:08](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=68)** First I will create a helper that will do the actual password hashing.
>
> **[1:13](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=73)** Bcrypt today offers a promise based interface, a callback based interface, and also a synchronous one.
>
> **[1:20](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=80)** Using callbacks or promises is fine, but you should really avoid to use the synchronous hashing function, as it can really block your Node.js process from serving new requests, because it's a rather CPU heavy operation.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=93)** So create an async function generateHash, which takes the password as an argument, and it simply returns bcrypt.hash.
>
> **[1:53](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=113)** And the first argument is the password, and the second argument is the number of rounds that we want to make, and I will use 12 rounds, which is pretty safe.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=125)** Next, we also have to implement the actual pre-save hook.
>
> **[2:09](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=129)** And for that I'm using now mongoose syntax, and this is user schema.pre, and then the hook is save, so the first argument is save and then I add the function that should be called before saving, and I call it pre save and in this function takes a next, very similar to express.
>
> **[2:39](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=159)** So to return when finished.
>
> **[2:42](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=162)** And then I first write this into user.
>
> **[2:46](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=166)** So this is in this case, the context of the model when the pre-save hook is called.
>
> **[2:53](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=173)** Which points to the actual data of the model.
>
> **[2:57](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=177)** So this means that this now points to the user.
>
> **[3:00](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=180)** And then I use a built in function of mongoose that checks if a field was actually modified.
>
> **[3:06](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=186)** So add user.isModified and there I check for the field for the property password.
>
> **[3:16](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=196)** So only if password was actually modified, I want to apply the hashing function.
>
> **[3:22](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=202)** And if this is the case of return, generate hash, and a pass in user.password.
>
> **[3:31](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=211)** So that's the password property of my model.
>
> **[3:34](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=214)** And as this returns a promise and now have a then, which gets the hash as a result.
>
> **[3:44](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=224)** And then I will simply write this hash to the password.
>
> **[3:50](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=230)** So I add user.password = hash, and then I can return next.
>
> **[4:01](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=241)** And in case of errors we'll add a catch block.
>
> **[4:04](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=244)** Catch error, I return.
>
> **[4:11](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=251)** Very similar to express, next error.
>
> **[4:17](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=257)** And then let's not forget if the password was not modified, I will just return next down here, in line 62.
>
> **[4:27](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=267)** Next, we also want to add a function that makes it easy to compare a password with the hash.
>
> **[4:33](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=273)** So add usersSchema.methods, and we call the methods compare password, and this is now an async function.
>
> **[4:52](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=292)** And we call it compare password, which takes us an argument that candidate password, and it returns bcrypt.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=307)** And as I said, bcrypt gives us a method to compare a password in the hash, compare.
>
> **[5:16](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=316)** And there, the first argument is the candidate password.
>
> **[5:20](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=320)** And the second is this password, which again, now points to the data stored in the model.
>
> **[5:27](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=327)** And in this case is the hash.
>
> **[5:31](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=331)** And with that and a little bit of formatting, we should be done.
>
> **[5:35](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=335)** Now let's start the Node application again by running npm run dev.
>
> **[5:41](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=341)** Now let's head over to the browser and try it, if this hashing now really work.
>
> **[5:45](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=345)** As you see here, I just modified the model now.
>
> **[5:48](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=348)** So I did not have to change anything in my routes.
>
> **[5:52](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=352)** So let's head into registration and there I try again, jdonaldson, and email address is jdonaldson@[explorecalifornia.com](https://explorecalifornia.com)
>
> **[6:11](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=371)** and password is mysecret, and I confirm it.
>
> **[6:18](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=378)** And let's hit create account.
>
> **[6:20](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=380)** And now you see, we get the message that the given email address or the username already exists.
>
> **[6:26](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=386)** So this was now a test to verify that what we did before really worked.
>
> **[6:30](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=390)** So let's try just another username and another email address.
>
> **[6:35](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=395)** I use lcorla and also the name is now lcorla and let's hit create account again.
>
> **[6:47](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=407)** And we see I get the message that the account was created.
>
> **[6:50](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=410)** Now I'm really excited to look into the user list because if everything went well, we now should see a hash password.
>
> **[6:58](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=418)** And we see that indeed, as intended, the password is now hashed.
>
> **[7:03](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=423)** Now let's delete this jdonaldson user because there we still have the unsafe plain text password, and for that I just click here on the red waste bin, and it should delete the user.
>
> **[7:17](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=437)** And it did.
>
> **[7:18](https://www.linkedin.com/learning/node-authentication/hashing-and-validating-passwords-with-bcrypt?u=76281980&t=438)** So the next step is to use this compare password function to actually log in a user and we will do this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (8), require (2), interface (2), async (2)
> **CLI Commands:** node (3), make (2), npm (2)
> **Code Identifiers:** generatehash (1), ismodified (1), usersschema (1)
> **File Paths:** node.js (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** similar to (2)
> **Prerequisites:** install (2)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)

#### Implementing login and logout
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=0)** - [Instructor] So far, we have implemented everything needed to register a user and we also made sure that the password is stored in a secure way.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=7)** Next, we of course also have to provide a way for users to login.
>
> **[0:11](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=11)** Technically this means that we have to compare the credentials provided by the user with the ones in our database, and if the match persist is successful logging in the user session.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=21)** The Playground App already comes with the login form, so if you click on login in the top nav, or also on this screen login button, you end up at this login form that asks for username and the password.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=35)** It also comes with a remember me feature, we will cover that a bit later, and it also offers a social login via GitHub, and we will cover that later in this course.
>
> **[0:47](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=47)** First, we will head into Visual Studio Code, to implement the validation of the user's credentials for that I open playground. server, routes, auth and there we have a dedicated file login.js, and as you see again in line three, we require the user service, which we use to talk to the database.
>
> **[1:12](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=72)** In line 11 We have to get route which renders the login form.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=77)** As I did not show you that before, if you click into view, auth login, there, you also have the template for this form that is rendered using the template engine HS, but we don't need to change anything here, so I head back into login.js there.
>
> **[1:35](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=95)** Here I scroll down and starting at line 18, we have the post route, which receives the data when a user submits the login form, and if we scroll down further, the first scene line 20 that creates this errors array there, and then further down, we will now start to implement the logic to find out if the user is valid, and for that I first, just check if the given user name is in the database.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=125)** So add const user equals await, and I'm using the user service, and there the method find by username, and I pass it request.body, with username, so this is coming from the form.
>
> **[2:26](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=146)** If you wonder how this finds the username looks like, so let's go over and click control and click on it.
>
> **[2:34](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=154)** There you have this find the username and user service, you see that we are just using user model, but find one very simply and passing the username to look that up, and now, after trying to find using the database, I can now add if not user, so if there was no user with the given username, I want to provide an error to the user.
>
> **[3:00](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=180)** So add errors.push username.
>
> **[3:05](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=185)** So the username is invalid, and let's also again, add errors.push password, because again, we want to be ambiguous about if it's the username or the password that is wrong, we just say something is wrong here, and for that I add request.session.messages and put into this messages array, the text, invalid username or password.
>
> **[3:41](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=221)** Again, so not saying that it's just the username.
>
> **[3:46](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=226)** no, it might be either one, and this is of course of type danger.
>
> **[3:53](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=233)** This will give us a nice red box, but if we got the user, we can continue with the else.
>
> **[4:00](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=240)** Branch here in line 32, we're now at the logic to figure out if the provided password is valid by using this compare password method that we created in the user model before.
>
> **[4:12](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=252)** Let's head real quick into the user model to review that.
>
> **[4:17](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=257)** So in models, user model, scroll down and there is this method here in line 65, which is available on each user object that we get from our views, and it's called compare password, and it uses the bcrypt compare function to validate or compare a given password with the password that is on the database.
>
> **[4:43](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=283)** So let's hit back into login.js, and there right now, can add const is valid equals await, and there is this user object that we loaded from MongoDB and they are now called compare password, and then pass in req.body.password.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=307)** Now, this is now pretty straightforward.
>
> **[5:11](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=311)** If this is not valid, so if not isValid, I will provide the same error that I created before.
>
> **[5:20](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=320)** So I copy everything from line 26 to 31 and paste it in here.
>
> **[5:26](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=326)** So now we have done the validation and now down in line 44, if there was an error, so if the errors array has content, then we will again render the form and show the error to the user, and now if you end up beyond that, this means that there were no errors and everything was fine and the password was fine, so we now have to handle this case, and for that I remove this return, not implemented in line 56, and I now add req.session.userId, because we now have to store the login user into the session and the user ID is on user.id.
>
> **[6:11](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=371)** So this is given to us by MongoDB and Mongoose, and this contains the unique ID of the user, and I also want to let user know that this now works, so I add req.session.messages.push,
>
> **[6:31](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=391)** and there I now provide the text.
>
> **[6:36](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=396)** You are logged in now, and this should be a nice green box, so the type is success, and again, we must not forget to end this request, and there I want to return res.redirect, so redirecting the user and then redirecting them to the index page, and while we are here, let's also already implement the log out method, which is very simply, let's scroll down because there we already have the route for log out, so now we'll just here add, request.session.userId equals null.
>
> **[7:25](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=445)** So I'm setting this user ID on the session object to null, and I will just copy the message that I had before with the login to line 73, and there, I now say you're logged out now, and let's make this an info message, and then of course, I also have to do the redirect, I copied it from line 61.
>
> **[8:00](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=480)** It's again, just a redirect to the index page, and then I don't meet the next argument here, this advances here, so let's remove next here in line 71, and we should be all done.
>
> **[8:16](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=496)** Let's try this out in the browser.
>
> **[8:18](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=498)** So in this form, I now want to log in and before, if you remember, let's look into the users list before I created this user, lcorla, and the username was lcorla, and the password I used was my secret.
>
> **[8:33](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=513)** So let's head back into login form and to use this lcorla, and I enter first, or let's add something wrong here first.
>
> **[8:43](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=523)** So it's a wrong username and the right password, and I get invalid username or password.
>
> **[8:51](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=531)** Let's use the right user name and the wrong password, and again, gets this error, and now let's use the right credentials, lcorla, my secret and let's click login and I get the message that I'm logged in now, but actually nothing changed on the page, now I still see the login button on the top right, and I would expect to see somehow that I'm logged in now.
>
> **[9:21](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=561)** Let's look into the template of this nav bar to see what the application actually would expect.
>
> **[9:30](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=570)** So I open views, partials, nav, and if I scroll down there, I see that I'm looking here in line 24 for locals.user, so that user object should be there.
>
> **[9:46](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=586)** If I look further here, you even see in line 36, that I want to render out user that user.username.
>
> **[9:54](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=594)** So we would need the user object and not just the user ID.
>
> **[9:57](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=597)** So the application would expect this differently, and it also makes sense to of course load the user, but right now we just store the user in the session.
>
> **[10:07](https://www.linkedin.com/learning/node-authentication/implementing-login-and-logout?u=76281980&t=607)** So what we have to do next is to create the middleware that does this, loading the user with the given user ID from the database, and then providing it to the rest of the application, and we will do this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), const (2), await (2), pass (2), require (1)
> **UI Navigation:** scroll down (5), click on (2)
> **CLI Commands:** find (5), make (1)
> **File Paths:** login.js (3)
> **Code Identifiers:** userid (2), isvalid (1)
> **Exercise Files:** template (3)
> **Cross-References:** later in (1), in the next (1)
> **Tools:** github (1), visual studio (1)

#### Deserializing the logged in user from the database
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=0)** - So we are in theory, log in now.
>
> **[0:02](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=2)** The userID is stored in the session, but now we have to create middleware that DC realizes this user, by the given userID from the database; and for that, I head back into Visual Studio Code, in there, I open server, app-js; and if we scroll down already edit a comment to do comment where they should go.
>
> **[0:28](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=28)** So here I have implemented middleware that restores the user from the database, if the userID is present.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=35)** So I'll start with writing the middleware, so an app dot use, and it's asynchronous because we want to access the database, request, response and next; and we also need to use a service.
>
> **[0:53](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=53)** As you see right now, the user service is not being loaded.
>
> **[0:58](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=58)** If everything works right in your Visual Studio Code installation, you can, should not be able to do something like that.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=66)** First I add if not request dot session, dot userID, return, next.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=77)** So this means there is no locked in new users, so we can just continue with the express execution, but otherwise I want to load the user from the database.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=93)** So add const user equals await and now I'm adding userservice you see and I'm getting this here by auto completion; and if I do that, Visual Studio Code should add this dependency as a require here in line 12.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=114)** If this didn't work for you, you just have to add, constitutes as service equals require and then the past to use the service.
>
> **[2:02](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=122)** Let's scroll back.
>
> **[2:04](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=124)** So here, I add user service, find by ID.
>
> **[2:08](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=128)** So it's again, very simple method on the database and the past in request dot session, dot userID.
>
> **[2:20](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=140)** So this gives us now the user with this userID.
>
> **[2:25](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=145)** Next I have to validate if the user was actually found, maybe the userID on the session is for some reason wrong, or the user was deleted, so I add if not user, I will first set request session, userID to null because you know, well obviously this user ID is wrong and then I will return next.
>
> **[2:55](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=175)** So for the next week, we will not try to load the user again because something is wrong.
>
> **[3:00](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=180)** But otherwise, if we have a user, I can now store the user in the request object to add request dot user, equals user with that, we now have the user object available in each route.
>
> **[3:16](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=196)** And with that, we can also verify if the user is actually logged in.
>
> **[3:20](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=200)** If we have a valid user and then also to ask at something else at response dot locals, dot user equals user.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=209)** So if you know express, this now means that we have the use object also available in all templates, because with response locals, you can access a global object that all templates have access to; and when we're done with that, I can now return next.
>
> **[3:51](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=231)** Right, let's head into the browser again.
>
> **[3:54](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=234)** Now I'm just reloading because the userID should be still on the session.
>
> **[3:59](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=239)** So I'm reloading the page and to see that I now get this red log pop up there because we now have this logged in user; and I also have a new menu item there.
>
> **[4:12](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=252)** It's my account, and if I click on that, I just get the dump of the user object in the database; and there is also a button to connect the account by social login with Kitab.
>
> **[4:25](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=265)** But we will cover that later in this course, but I will now try, is to log out the user; and if I click there, you see, I get the message that we are locked up now.
>
> **[4:35](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=275)** So this is working as well; and if we look back into the login form though, we see that there is this remember me feature, and this is not implemented yet.
>
> **[4:47](https://www.linkedin.com/learning/node-authentication/deserializing-the-logged-in-user-from-the-database?u=76281980&t=287)** We will do this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (2), return, (1), continue (1), const (1)
> **Code Identifiers:** userid (9)
> **Tools:** visual studio (3)
> **Cross-References:** later in (1), in the next (1)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - so (1)

#### Offer remember me
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=0)** - [Instructor] So, what does remember me?
>
> **[0:02](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=2)** To understand this, you have to know that by default, a cookie's only stored for the current browser session.
>
> **[0:08](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=8)** This means that the session will be gone if you close the browser.
>
> **[0:12](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=12)** I'm here talking about the whole browser application, like Chrome, and not just the tab.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=18)** Sometimes a user wants to stay logged in, even if they, for instance, restart the computer.
>
> **[0:23](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=23)** We can achieve that by changing the properties of the session cookie to contain an expiration date.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=29)** And this property is called max age.
>
> **[0:33](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=33)** It has to be set every time we send that cookie.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=35)** And for that, we need the logic in the log-in route to first set this, and the middleware to refresh this property with each request.
>
> **[0:44](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=44)** Let's implement it now.
>
> **[0:46](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=46)** And first let's look on this form and there I click on this checkbox and inspect to know how this form field is actually called.
>
> **[0:55](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=55)** And you see here that it's called "remember" With that knowledge, let's head back into VisualStudio Code, and there I open again routes, auth, login.
>
> **[1:09](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=69)** And here in the post route, I now head down to where we end up when the user was successfully logged in.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=77)** And before we do the redirect, I now add if request dot body remember, if this checkbox was checked, request the session options dot maxage.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=93)** So this is provided by the session management system and gives us access to this max age property.
>
> **[1:40](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=100)** And there I now add 24 times 60 times 60 times thousand
>
> **[1:49](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=109)** times 14, and this would be 14 days in milliseconds.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=114)** But what they also have to do is have to somehow store in my session that the user actually selected this remember me to later use this knowledge then in my middleware.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=125)** So add request dot session dot rememberme equals
>
> **[2:14](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=134)** and I set it to the max age that we defined before.
>
> **[2:18](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=138)** So this now persists also the information that the user selected remember me before, and we need that to refresh that then with each new request and that also do something else.
>
> **[2:32](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=152)** I add an else block.
>
> **[2:34](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=154)** So if remember is not set, I'm just a good citizen and set this rememberme to null.
>
> **[2:44](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=164)** The reason for that is that maybe it's somehow left over in the session.
>
> **[2:48](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=168)** And then the remember me stays set.
>
> **[2:50](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=170)** And then the expiry date is set though the user does not want that, so this is just to be very sure, and what I also will do is, and for that, I copy this line here, I scroll down to log out and here also after I set the user ID to null, I will also set the remember me to null, otherwise we would basically persist this decision of the user that they want to be remembered beyond even the login session of the user.
>
> **[3:22](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=202)** So with that, we can really reset the stage when the user logs out.
>
> **[3:27](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=207)** Now, as I said, we also have to implement a middleware that acknowledges this remember me.
>
> **[3:33](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=213)** So this will now set this max age on the session object once, but that is not enough because we want to refresh that now with each request, and for that, I now head into app.js and there I scroll down to this middleware we have for loading the user.
>
> **[3:57](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=237)** And further down, after we know that we have a valid user, I will now add request dot session options dot maxage.
>
> **[4:11](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=251)** And we now take this from req session dot rememberme.
>
> **[4:18](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=258)** So this means that we are refreshing this max age now from the value that we have stored in the session.
>
> **[4:26](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=266)** And if, for some reason, this is not set, I will simply set this to maxage, because if you look up to the initialization of the session object of the session management, you see that we set maxage there to null.
>
> **[4:47](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=287)** So if this is not set, then the max age will always be null again.
>
> **[4:54](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=294)** So with that, we should have a working remember me function, so let's try that out.
>
> **[4:59](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=299)** So I will first now open in Chrome, the Chrome developer tools, for that they click on the three dots here on the top right, then on more tools and then developer tools.
>
> **[5:15](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=315)** And there I'm interested in the network tab.
>
> **[5:19](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=319)** Then I want to log in again with lcorla and my secret.
>
> **[5:25](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=325)** And for now I will leave the remember me checkbox unchecked, just to see what happens then.
>
> **[5:32](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=332)** So I click on login.
>
> **[5:34](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=334)** And now if I look into the login request, I see if I now click on the tab cookies, the max age is set to session, and also for the redirect that brings me back to local hosts, I see that the max age is also set to session.
>
> **[5:53](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=353)** This means that the cookie will expire with the process session.
>
> **[5:58](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=358)** Now let's log out again and let's go to log in again and let's log in now again, but now with remember me enabled.
>
> **[6:10](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=370)** And I click on remember me and click on login.
>
> **[6:14](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=374)** And if I now look into the login route there, the session cookie is not set for the post to the login route, but the redirect then, you see, already contains this max age property on the session, and this is now set to 14 days.
>
> **[6:32](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=392)** And now if I click further around in the page, you see that this max age is now set through the middleware with each request that we make.
>
> **[6:42](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=402)** Now, if I kill the browser and open it up again, and I go to local host 3000, we see that we are logged in still.
>
> **[6:50](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=410)** So this now work because we have the remember me function enabled.
>
> **[6:56](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=416)** So there's one more thing that I want to add to this registration and login flow.
>
> **[7:00](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=420)** And this is verification of the user.
>
> **[7:04](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=424)** That's a very common technique that is used to make sure that the email address of the user is actually valid.
>
> **[7:10](https://www.linkedin.com/learning/node-authentication/offer-remember-me?u=76281980&t=430)** We will implement it in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), function (2), default, (1), else. (1)
> **UI Navigation:** click on (6), checkbox (3), scroll down (2), go to (2)
> **Definitions:** means that (3), is called (1)
> **CLI Commands:** make (2)
> **File Paths:** app.js (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Prerequisites:** initialization (1)

#### Require user verification
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=0)** - [Instructor] It's a good practice to require users to verify their email address.
>
> **[0:04](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=4)** I'm sure you've seen this before.
>
> **[0:06](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=6)** Technically this works by sending a link containing a token, which is a random string that cannot be guessed, to the email address, and then requiring the user to follow this link.
>
> **[0:15](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=15)** The route behind this link will then load the user and toggle a flag on the user record in the database.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=21)** If you click on My Account in our Playground application, you'll see this dump of the user object in the database, and you see that we already have a verified flag there, which is false, and we also have a verification token there, which is already filled with some random string.
>
> **[0:40](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=40)** I will show you where this token comes from in a bit.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=43)** To spare us from having to set up mail sending, I've already added a verification link to the User List.
>
> **[0:50](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=50)** For that, first let's log out our user, and then let's click on the User List, and there you see that there is this green check mark, and this green check mark is for user verification.
>
> **[1:03](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=63)** It contains the link that you usually would send by email.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=66)** If we hover over it, you should also see on the button of the browser that we are calling here auth, verify, and then we have one string, then a slash, and then one more string.
>
> **[1:19](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=79)** So if I click on it, we also see it now in the address bar.
>
> **[1:23](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=83)** We get not implemented because, of course, it's not implemented yet, and again, here you see auth, verify, and there is one string, and there is another one.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=93)** The first string is the actual user ID and the second string is this verification token, so we basically have a tuple, so the user ID and the token that belongs to this given user ID.
>
> **[1:48](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=108)** So let's look into Visual Studio Code and see how this is implemented.
>
> **[1:52](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=112)** First I want to show you now where this token is coming from.
>
> **[1:55](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=115)** So I click on server, models, and I open UserModel JS, and if I scroll down there, starting with line 33, you see this verification token.
>
> **[2:06](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=126)** You also see that it has a default value, which means it will create a 20-byte-long hexadecimal string, and you also see that we have this verified property here in line 29 and it defaults to false, so every user automatically, once they are created and saved, will have this one verification token, and this is a token that will also not expire, which you would do with some other kinds of token.
>
> **[2:35](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=155)** It's really a matter of security.
>
> **[2:36](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=156)** In this case, the worst thing that could happen if someone would be eavesdropping this token would be that they can verify our users, so there would not be much harm.
>
> **[2:47](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=167)** This is why I chose to make this a static token on the user object which won't expire.
>
> **[2:55](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=175)** Later, we will also use a token for resetting passwords, and in this case, we will apply stronger security measures, but for our use case here now, this is fully sufficient.
>
> **[3:05](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=185)** We now have to implement two things.
>
> **[3:07](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=187)** First, we have to make sure that we only log in verified users, and second, we also have to finalize the route that does the verification.
>
> **[3:16](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=196)** Let's start with the login route.
>
> **[3:17](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=197)** So for that, I open routes, auth, and there I open the login JS file.
>
> **[3:24](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=204)** We've been there already, and we will now extend this login route.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=209)** So what do we have to do?
>
> **[3:31](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=211)** You see that we have this one if statement, if there is no user, so that's fine, and then we have this else statement, and before we do this else statement, we will now add else if, and there we now add user, so if there is a user and if the user is not verified, we now come up with an error message, and in this case, we really can tell the user what is wrong, and this would be first errors, push, username, so that's still fine, and then errors, push, password, just to signal again that there are errors,
>
> **[4:24](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=264)** and then we add a message, request.session.messages.push., and in there, we now put a text which says, "Please verify your email address," and then the type should be, you've guessed it, danger.
>
> **[4:51](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=291)** So with that, it should not be possible anymore to log in non-verified users.
>
> **[4:59](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=299)** Just for completeness, of course, in registration, you would send out the validation links down here.
>
> **[5:08](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=308)** As soon as you know that the user was created, you will send out the verification link to the user, but as I said, we have this login route now in our User List to make things easier.
>
> **[5:22](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=322)** So next, let's try this out now.
>
> **[5:24](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=324)** So it should now be not possible anymore to log in the user that we have.
>
> **[5:30](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=330)** So I head back into the application and click on Login and type lcorla and my secret that was my password all the time.
>
> **[5:43](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=343)** Then I'll click on Login.
>
> **[5:45](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=345)** I get this error, "Please verify your email address," so I cannot log in anymore.
>
> **[5:50](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=350)** So now we have to implement this verification route.
>
> **[5:53](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=353)** Again, head to the User List, so this route that will be triggered by clicking on this green check mark.
>
> **[6:00](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=360)** So I'm heading back into Visual Studio Code and there we already have a file ready.
>
> **[6:05](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=365)** It's called verification JS in auth, so there is this route already.
>
> **[6:10](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=370)** Again, the UserService is already available.
>
> **[6:13](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=373)** It's loaded in line four, and there you see this GET route which has two params, the user ID and the token.
>
> **[6:23](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=383)** So as you know, if you know Express, these are named params that we can now use in our code, and to do that, we will now add const user = await UserService, so we are loading now their user with this given user ID, findById, and we pass in request.params, so this is the name params.userId, and then after loading this user, we can now do a simple check that is if not user or user.verificationToken is not request.params.token.
>
> **[7:15](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=435)** So this is now the token that we got with the URL, and if the token on the user object does not match what we just passed in by URL, we have an error, so we will provide the error message which is request.session.messages.push, and we provide a text, which is, "Invalid credentials provided."
>
> **[7:47](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=467)** Usually if someone ends up on this link with an invalid token, something is fishy there anyways, and the type is danger.
>
> **[7:59](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=479)** So this should actually not really happen unless the user was deleted meanwhile, but we have to, of course, handle this case anyways, and else we can say, okay, we can now directly operate on the user object, so for that, I did not create a dedicated method on the service.
>
> **[8:21](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=501)** It just says user.verified = true, and then I'm simply awaiting user.save.
>
> **[8:33](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=513)** If something goes wrong, you see that we have a try-catch block here, and it will then create an error, so we are safe here, and then I will add a new message to let the user know that everything went fine, request.session, messages.push, text, "You have been verified," and the type is success, of course, and then in the very end, regardless if there was an error or if it worked, we will now return response.redirect, and we will redirect to the index page.
>
> **[9:17](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=557)** So as you see, we are not re-rendering the page as we did before, because if someone ends up at this page, it either works or it doesn't, so there is no point in reloading the same page.
>
> **[9:30](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=570)** So with that, we should be good, and let's try that out now by heading into the browser.
>
> **[9:36](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=576)** Now I'm clicking this verify route.
>
> **[9:39](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=579)** Let's do that, and I see I get this message, "You have been verified."
>
> **[9:44](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=584)** Now let's try that out.
>
> **[9:46](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=586)** So I'm clicking on Login and I'm using lcorla again and the password, my secret, and I click on Login, and you see now I can log in, and if I look into My Account, you see that the verified flag is now set to true.
>
> **[10:04](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=604)** With that, we can now verify users.
>
> **[10:06](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=606)** As I said, in a real application, you would send a verification link, of course, via email, but the flow would be the same.
>
> **[10:13](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=613)** Next we will cover one more very important feature every system that authenticates users should have, resetting passwords.
>
> **[10:21](https://www.linkedin.com/learning/node-authentication/require-user-verification?u=76281980&t=621)** We will do this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (3), require (1), from. (1), static (1)
> **UI Navigation:** click on (7), toggle (1), scroll down (1), open the (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** findbyid (1), userid (1), verificationtoken (1)
> **Definitions:** is a  (3)
> **Env Vars:** url (2)
> **Tools:** visual studio (2)
> **API Endpoints:** get  (1)

#### Resetting passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=0)** - I'm now on the login form, but now unfortunately I forgot my password.
>
> **[0:05](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=5)** In this case, any user will look for a way to reset their password.
>
> **[0:09](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=9)** And luckily I find a link for that in the navigation.
>
> **[0:12](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=12)** So I click on reset password.
>
> **[0:15](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=15)** Here I can enter my email address and this will start the password reset flow.
>
> **[0:20](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=20)** And this actually involves several steps.
>
> **[0:23](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=23)** Let's look at them.
>
> **[0:26](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=26)** First, we displayed a password reset form that we just saw.
>
> **[0:30](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=30)** Now, the user enters the email address there.
>
> **[0:33](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=33)** And then we sent this email to a post route, which is called auth reset password.
>
> **[0:40](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=40)** in this route we try to find the user by email, and if we find them we will create a token.
>
> **[0:46](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=46)** And this token is a token that actually has an expired date on it.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=51)** Because if you have this token, you basically can change the password of a user.
>
> **[0:56](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=56)** So this is pretty powerful.
>
> **[0:57](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=57)** So we will add additional security to it.
>
> **[1:01](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=61)** Now we would send this token to the user.
>
> **[1:05](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=65)** In our example, again, a edit functionality to a user list that will provide a reset link.
>
> **[1:12](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=72)** Once we created such a token.
>
> **[1:15](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=75)** Now the user in one way or the other receives this link, and clicks on it, and this will lead now to a get route, which is called auth reset password.
>
> **[1:27](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=87)** And there we again send in the user ID and this recent token.
>
> **[1:31](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=91)** So again, we have this typo that is basically pretty secure because the user and the recent token has to match.
>
> **[1:41](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=101)** And of course, then we will verify this token in this route.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=106)** And if this token is valid, we will render the change password firms.
>
> **[1:51](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=111)** So this is not the form where I can enter my new password.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=114)** If I post this form, I will end up on a post route that again contains this user at the enter reset token.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=125)** And there we verified the token changed the password finally, and then we delete the token.
>
> **[2:13](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=133)** So as you see, that's plenty.
>
> **[2:16](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=136)** Let's have a quick look into the code to see what we have already.
>
> **[2:21](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=141)** So in vicious to the code, and now I want to show you how this expirable tokens are made.
>
> **[2:28](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=148)** So I go into server, models and, there is this reset token model.
>
> **[2:34](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=154)** As you see here, we are using a dedicated collection here for these tokens.
>
> **[2:39](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=159)** And this token is again created with crypto random bytes.
>
> **[2:43](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=163)** But most importantly, if we scroll down here in line 24, we see that we set an index with the experiment.
>
> **[2:51](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=171)** In our case, the token will now be valid for one hour.
>
> **[2:55](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=175)** After that Mongodb will automatically delete this record.
>
> **[2:59](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=179)** So that's a built in feature of Mongodb.
>
> **[3:02](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=182)** We don't have to care for deleting or expiring the tokens manually.
>
> **[3:08](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=188)** To change the expire date you will have to delete this index.
>
> **[3:11](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=191)** In this case the easiest way is to head into Mongodb compass, delete the whole password, reset tokens collections, and then restart the app.
>
> **[3:19](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=199)** Which will unload on the mongos model, recreate the collection NT index, but we will leave it at 3,600 seconds.
>
> **[3:28](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=208)** One more thing. I also added methods that let us work with these reset tokens to our user service. So if I open services, use the service chess and scroll down.
>
> **[3:41](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=221)** You see that I have, for instance, here, the method create password reset to talk to.
>
> **[3:45](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=225)** We will have all methods needed to work with this tokens collection in a user service.
>
> **[3:53](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=233)** All right, this was plenty of theory.
>
> **[3:55](https://www.linkedin.com/learning/node-authentication/resetting-passwords?u=76281980&t=235)** In the next video, we will implement all the needed routes to finalize the password reset flow.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (3), case, (2), match. (1), finally, (1)
> **CLI Commands:** find (3)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - i (1)

#### Implementing the password reset flow
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=0)** - [Instructor] To implement the password reset flow, we first have to do this password reset form and for that, I now head into server, routes, auth, and there you have this reset password chest file where all the codes related to password reset is seen.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=18)** And you see that with, to get route, we are rendering this reset password form, and then we have this post route that will then receive the email address that the user puts in.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=29)** And as you see, they're already in line 22, I'm using regular email validation just to make sure that the email is actually a valid one.
>
> **[0:37](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=37)** And then I have this validation flow that we had before the checks for validation errors there.
>
> **[0:44](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=44)** And then in the Else branch, we now have to try to find this user and create the reset token.
>
> **[0:50](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=50)** And for that, I will now remove this not implemented and you should now already know how we would load the user.
>
> **[0:59](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=59)** So add const user equals await user service, and I do a find by email and request body dot email.
>
> **[1:18](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=78)** So that's already very familiar to you most likely.
>
> **[1:21](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=81)** Now, if there is a user, I want to create this reset token and for that, and now add const reset token equals await user service, create password reset token and a pass in the user ID, user dot ID.
>
> **[1:45](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=105)** So that will create the password reset token for this given user.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=110)** Let us look real quick back into the model.
>
> **[1:53](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=113)** So in model, in reset token model, you will see that we also of course have the user ID that identifies the user, the token belongs to, okay, now we have a reset token.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=125)** It's already saved to the database.
>
> **[2:07](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=127)** So this is what the method does.
>
> **[2:10](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=130)** And there, we would now send this password reset token to the user.
>
> **[2:16](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=136)** In our case, we are not doing this now, so we will leave the token alone.
>
> **[2:20](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=140)** And so we have to also tell Eastland that this unused variable is fine.
>
> **[2:24](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=144)** So I'm clicking on this reset token variable. And there, I have this little light bulb and there I say, this has no unused virus for this line.
>
> **[2:35](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=155)** So with that, we won't get an error. Here is linked.
>
> **[2:40](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=160)** Here is the error checking. And then if there was no error, we will now be very ambiguous because either way, if the email address was basically a valid one, we will now just tell the user by adding request dot session dot messages dot push and again, we are doing it this way to make sure that no one can abuse this form to check which email addresses are stored in the database.
>
> **[3:15](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=195)** So we just say, if we found a matching user, you will receive a password reset link and they will get this message either way.
>
> **[3:32](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=212)** So even if we did not find a matching user with this email address, they will get this this message.
>
> **[3:39](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=219)** So we will keep things ambiguous here, anthesis in info message.
>
> **[3:45](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=225)** And now down here, we will just return response dot redirect.
>
> **[3:53](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=233)** And then we redirect again to the index page.
>
> **[3:58](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=238)** So now if you fill out this form and if this email address is in the database, the token will be created.
>
> **[4:04](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=244)** So let's try this out.
>
> **[4:06](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=246)** So we head into the browser and there are first at just the bogus email address, food part dot com click reset password.
>
> **[4:16](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=256)** And you see, I get this message.
>
> **[4:19](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=259)** So I don't know if Food part dot com is in the database, but now I serious and that really have to look up now the email address. So it's Lpola and go again into reset password.
>
> **[4:35](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=275)** And now I'm sending this email address click reset password. I get, again, this message.
>
> **[4:43](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=283)** Now, if I click into user list, I see that we now have this button here that points us to this reset password route.
>
> **[4:52](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=292)** So this list does nothing else than checking.
>
> **[4:55](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=295)** If there is a token for a given user.
>
> **[4:58](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=298)** And if you click on that, we get this not implement, of course, because we have to implement it now as well.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=304)** So we had back individuals to the code and there we have to implement this, get route to verify the reset token and show the form to change the password.
>
> **[5:15](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=315)** Let's see if we get the user ready and to rest token as request params.
>
> **[5:20](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=320)** So what will we do now? I add const, reset, token equals await user service.
>
> **[5:31](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=331)** And there I have a method prepared that is verify password reset token, which takes request that params dot user ID and request, dot params dot reset token as arguments.
>
> **[5:54](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=354)** If you want to see how this looks like, let's have a real quick look.
>
> **[5:58](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=358)** So you see that I'm looking into the password reset model and find an entry with the given token and pick given user ID. If this reset token is invalid or wasn't found, and now add if not reset token, then I will again, print out an error message request dot session dot messages dot push and the messages.
>
> **[6:27](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=387)** Now the provided token is invalid type danger, and I will right away return Res dot redirect some redirecting the user away and sent them to auth reset password.
>
> **[6:47](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=407)** So to the form again, because obviously they did something wrong.
>
> **[6:51](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=411)** So maybe let's let them try this again.
>
> **[6:54](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=414)** In any other case, we seem to have a valid token here.
>
> **[6:59](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=419)** So I can now let's remove this not implemented first.
>
> **[7:03](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=423)** And then I add return.
>
> **[7:07](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=427)** Res dot render So I'm now rendering this form to change the password.
>
> **[7:15](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=435)** And this is auth change password, and it just passing a few more things.
>
> **[7:23](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=443)** First I provide the page.
>
> **[7:26](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=446)** This is just used for the navigation so that this menu item is highlighted, and this is still reset password.
>
> **[7:35](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=455)** So we are still in the reset password flow.
>
> **[7:37](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=457)** And then I'm also adding the user ID because the form, again, needs these credentials and the show you why in a second.
>
> **[7:45](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=465)** So at request dot params dot user ID, and we also want to provide the reset token.
>
> **[7:55](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=475)** And this is request dot params dot reset token came as promised, Let's look at this change password fuse real quick.
>
> **[8:07](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=487)** So you find that in fuse auth change password.
>
> **[8:13](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=493)** And there you see that on the form, I'm rendering the user ID into reset token as post link.
>
> **[8:22](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=502)** So form action so that we are posting directly to this route.
>
> **[8:27](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=507)** And so this route will again be very fallible for your user at the, the reset token.
>
> **[8:33](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=513)** And we will now implement also this route right away and there, you'll see again, we have this parents user ID and Teresa token, it's a post route. And now we also validate the password And we also validate if the password matches, because you will see in a second that this form again has a password and the password for validation in it.
>
> **[8:56](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=536)** So we do this validation there and if this password match, so we will get past this arrow later then, but first we will now right away verify if the credentials are even right. So add now const reset, token equals await user service.
>
> **[9:18](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=558)** And again, I do this verify password reset token with request params dot user ID and request dot params dot reset token.
>
> **[9:37](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=577)** And then if there is no reset token, I can, now it's starting to get old, but I think it's pretty much the last time, maybe the last time where we have to do that add request dot session, dot messages, dot push.
>
> **[9:58](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=598)** And the text is the provided token is invalid and to type is danger.
>
> **[10:10](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=610)** And if so, we want to return res dot direct.
>
> **[10:14](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=614)** And again, we just redirect into auth reset password.
>
> **[10:23](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=623)** If we get past that, then we also check for the validation errors.
>
> **[10:27](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=627)** So you know that already.
>
> **[10:29](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=629)** And if we get past this check for errors length, we now are ready to really do the change of the password and what do we have to do now, first we do a wait and this is a fine forget.
>
> **[10:43](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=643)** We don't want to know the result of that because if it's an error, it will end up in the catch block anyways.
>
> **[10:50](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=650)** So we just add user service, dot change password.
>
> **[10:56](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=656)** So there we have a method change password, which is pretty simple.
>
> **[11:00](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=660)** It just takes the request of params, dot user ID and also request dot body password.
>
> **[11:10](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=670)** So that was the password that the user feels in them.
>
> **[11:14](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=674)** And then we also want to do await user service, and then we do it delete password reset token.
>
> **[11:23](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=683)** So this actually removes the password reset token from the database we used it. So it does not need to stay in there.
>
> **[11:31](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=691)** We don't want to wait for the expiry even. So ad request, params dot reset token.
>
> **[11:40](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=700)** And then again, we want to print out the message to the user.
>
> **[11:44](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=704)** Now let's be lazy and copy that from line 127.
>
> **[11:49](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=709)** And the message is your password was successfully changed
>
> **[12:04](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=724)** and to type is success.
>
> **[12:09](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=729)** And then of course we have to redirect the user and redirect them to the login page. So to auth slash login, all right, that's it, let's try this out.
>
> **[12:21](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=741)** Let's head into the browser.
>
> **[12:23](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=743)** Let's head back to this password reset list.
>
> **[12:26](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=746)** And now let's click into this link and you CV half a valid token and a valid user, and let's try out what happens when this token would not be valid for that.
>
> **[12:40](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=760)** I will just simply first copy this URL and I'll remove the last digit here.
>
> **[12:47](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=767)** And you see that now we get the message that the token is invalid and we get redirected.
>
> **[12:53](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=773)** Let's head back to the valid form and there we can now change the password.
>
> **[12:58](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=778)** So to my secret, to my secret, to very secure password and then click on reset password.
>
> **[13:08](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=788)** And it tells me that my password was successfully changed.
>
> **[13:12](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=792)** So let's make the tests. So I'm not typing Lcarla.
>
> **[13:18](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=798)** And my secret to you have to trust me. You don't see it, but if I now click on login, you see that I'm successfully locked in now.
>
> **[13:27](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=807)** And if I look back into the user list, you also see that this password reset icon is gone again, because we just deleted this token again.
>
> **[13:38](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=818)** So we're all set.
>
> **[13:40](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=820)** So with that, we have implemented plenty of functionality related to handling authentication with users.
>
> **[13:47](https://www.linkedin.com/learning/node-authentication/implementing-the-password-reset-flow?u=76281980&t=827)** In the next chapter, we will look at the standard library for no chairs for basically handling authentication and it simplifies and formalizes a few things about authentication in Natchez.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), await (5), const (4), case, (2), pass (1)
> **CLI Commands:** find (5), make (3)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Using Passport.js

#### Using Passport.js for authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=0)** - Passport is the most widely used authentication module for Node.js.
>
> **[0:05](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=5)** You'll find it at [passportjs.org](https://passportjs.org) and on GitHub.
>
> **[0:09](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=9)** Conceptually, Passport provides an authenticate function.
>
> **[0:14](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=14)** This function uses a so-called strategy to authenticate the user.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=18)** There are over 500 strategies available.
>
> **[0:22](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=22)** Strategies are plugable authentication modules that can be installed separately.
>
> **[0:27](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=27)** Through these strategies, Passport covers a variety of backends or use cases from local authentication that is mostly used to authenticate against the local database, to strategies for many third party systems.
>
> **[0:40](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=40)** including things and non-providers and log-ins for social media accounts like, Facebook or GitHub, or even rather exotic systems like Shibboleth.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=49)** Once a user successfully authenticated passport also takes care of things like storing the user in the session and also restoring it for every request.
>
> **[1:00](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=60)** To use passport in express, it needs to be hooked into the application with two middleware functions.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=66)** What do these two middle ware functions do?
>
> **[1:09](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=69)** The first function is passport initialize, and it provides a middleware function that uses the request object to store passport internal data in it.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=77)** The second function is passport session.
>
> **[1:20](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=80)** This middleware basically looks into the session and if there is user data in this session.
>
> **[1:26](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=86)** It will use this data to decentralize the user.
>
> **[1:29](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=89)** For instance, you can store the user ID with the session and decentralize function built in.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=96)** Fetch the user with this user ID from the database, and then it will provide this user and the request that user to all following middleware and droughts.
>
> **[1:48](https://www.linkedin.com/learning/node-authentication/using-passport-js-for-authentication?u=76281980&t=108)** In the next videos, we're going to add passport to a playground application, and start using it for authentication.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), module (1)
> **CLI Commands:** node (1), find (1)
> **Tools:** github (2)
> **File Paths:** node.js (1)
> **URLs:** [passportjs.org](https://passportjs.org) (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - passport (1)

#### Implementing local authentication with Passport.js
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=0)** - [Instructor] We are now going to implement so-called Passport Strategy, that tries to authenticate the user against the database.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=7)** To kick this off, you first have to of course installed Passport and also the Local Strategy Module.
>
> **[0:15](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=15)** For that, I'm stopping the Node.js process by pressing Control C in the console and there now type npm install -S passport passport-local.
>
> **[0:32](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=32)** So that's the LocalStrategy.
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=36)** The LocalStrategy is always used when you have to implement your own logic on how credentials should be verified.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=43)** In our case, now this means that we will validate against MongoDB.
>
> **[0:46](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=46)** I already prepared the empty module where we will implement all the authentication logic.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=52)** So I'm going to open Server, Lib, and in there, there is Passport in the Index.js file.
>
> **[1:01](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=61)** So you see, this is an empty module, we just load the user service there already because we will use it to talk to the MongoDB.
>
> **[1:10](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=70)** I will also start the Node.js process again by running npm run dev.
>
> **[1:15](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=75)** And now first I will bring in the passport module by adding const passport equals require passport.
>
> **[1:27](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=87)** And then I will load the LocalStrategy by adding const LocalStrategy equals require passport local.Strategy
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=106)** after the parenthesis.
>
> **[1:48](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=108)** And now in the module body starting with line 11, we can now start implementing this strategy.
>
> **[1:55](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=115)** And for that we use passport.use so that's a method provided by passport and it look similar to what we have in express.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=125)** And in there, I will now add new LocalStrategy and LocalStrategy as constructor and into this constructor, I will now first add a config object and there, I first add passReqToCallback and that's true.
>
> **[2:27](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=147)** And this is needed so that we get the request object back into the callback that we will define later and we will then use to request object again, to access the session object, to create flash messages.
>
> **[2:42](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=162)** There are more settings that you could add here.
>
> **[2:45](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=165)** For instance, you could add usernameField.
>
> **[2:48](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=168)** Because passport will try to extract username and password from the payload as we did it before with request.body and it assumes that the usernameField is username.
>
> **[3:02](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=182)** And then there is also the passwordField that we could set, and the default is password.
>
> **[3:10](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=190)** So as you see this resembles what we have anyways, so a usernameField is called username and our passwordField is called password.
>
> **[3:18](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=198)** So we'll remove that again.
>
> **[3:20](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=200)** But for instance, if you want to use the email address as usernameField, so authenticating using email address, then you would change it here.
>
> **[3:30](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=210)** Now, after this config object, we will add the callback and the callback looks like that so add a comma and then async internet define an anonymous function, and this now gets request, because we have this passRequestToCallback true the username, the password, and then also a done callback that is then used to return from this function.
>
> **[3:58](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=238)** Alright, after pressing Save, this is now looking a little bit more pretty.
>
> **[4:03](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=243)** And now in there, I will start with adding a try-catch block pass between asynchronous things in there, and we have to catch that.
>
> **[4:13](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=253)** And in case of an error, we will return done error.
>
> **[4:18](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=258)** And now we can define the logic that is needed to verify a user against the database.
>
> **[4:24](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=264)** And this is actually very similar to what we did before in the login route so I will now head to Routes, auth, login.js and scroll down to the post login route where we verify the user and this now here starts with line 24, this I copy now, and I copy down to line 49.
>
> **[4:51](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=291)** So this whole block now goes also into this passport strategy.
>
> **[4:59](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=299)** And there we have to fix a few things we don't use this error.push anymore because error verification now works differently.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=307)** And this is how we use this request object to provide the error to the user and we have to here now use the done callback every time something goes wrong so add return done, null and false.
>
> **[5:25](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=325)** So there is no error, but also no user and passport will then know that this authentication attempt failed.
>
> **[5:34](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=334)** And then we can remove the else block and make it a simple if, and there again, in case the user is not verified, we print out the error, but again, return null and false.
>
> **[5:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=349)** Then we can, again here now, remove the else block and continue with the validation.
>
> **[5:56](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=356)** So now here line 34, we do the validation of the password and if the password is not valid I again, return done, null and false.
>
> **[6:10](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=370)** So we can now return done, null, no error, but the user object and passport will know, okay, now we have a user object so the authentication worked.
>
> **[6:23](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=383)** I have to add two more functions to set up passport properly, this is serializing and deserializing users, and you will understand what this is about in a second.
>
> **[6:34](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=394)** So after this declaration of the LocalStrategy, I now add passport.serializeUser and again, we define here a callback async.
>
> **[6:47](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=407)** And what do we return from our authentication function?
>
> **[6:52](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=412)** We return a whole user.
>
> **[6:55](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=415)** So first we get the user object and this also has a done callback.
>
> **[7:01](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=421)** So the question is now, what will we store will serialize into the session?
>
> **[7:06](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=426)** And as before we won't serialize the whole user into the session, but just the user.id.
>
> **[7:12](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=432)** And this means that we will just return, null, no era.user.id, this means that when passport writes the user to the session, it will just use the user.id for that.
>
> **[7:27](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=447)** As we have a serialized user, we also have to find a way to deserialize the user and this is again, similar to what we did before.
>
> **[7:34](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=454)** We have to fetch the user with the given user.id from the database.
>
> **[7:40](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=460)** So add passport.deserializeUser and this is an async function, it gets id that's the user.id and again, there is a done callback.
>
> **[7:53](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=473)** And as I'm doing that, I see that actually the serializedUser does not have to be async so let's remove this async up here in line 49, and let's continue by adding now, try catch again.
>
> **[8:08](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=488)** If there is an error, we will return done (errr) and we will now load the user with the given user.id from the database so I add const user equals await UserService.findById and there I know passing the id.
>
> **[8:33](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=513)** And then again, I will just return done null, user and in this case now if the user was not found, the variable will be empty and then passport will also know that something went wrong.
>
> **[8:46](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=526)** So we don't have to handle this case explicitly.
>
> **[8:50](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=530)** And then in the very end here, let's not forget this is important return passport.
>
> **[8:59](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=539)** So with that, we have a central module where we configure passport and set everything up that we need.
>
> **[9:08](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=548)** Next, we have to hook this module now up with the rest of the application.
>
> **[9:12](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=552)** For that, I open app.js and right after via requiring the UserService I now add const setupPassport equals require,
>
> **[9:28](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=568)** and this is now in lib/passport.
>
> **[9:33](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=573)** And then you know that the passport is actually a function, so we have to call this function somewhere.
>
> **[9:40](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=580)** For that I scroll down and right after I'm instantiating express, I can add const passport equals setupPassport and we pass in the config object.
>
> **[9:56](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=596)** The config object is not needed right now, but we will need it later.
>
> **[10:00](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=600)** And there are two more things we have to do to setupPassport for that I have to scroll down right after the session management is done.
>
> **[10:09](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=609)** And right after the cookieParser, I now add app.use and passport comes with middlewares that we have to call now.
>
> **[10:21](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=621)** The first is passport.initialize so this initializes the actual passport library, and then also as passport relies on information stored in the session, we have to add app.use passport.session.
>
> **[10:41](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=641)** So this is where then actually passport for instance, calls this deserialized to load the user then from the session.
>
> **[10:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=649)** This and that's important has to run after the session management was initiated because otherwise there is no session available in express and passport would not work properly.
>
> **[11:02](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=662)** And then we have to do one more thing in this file, let's scroll down and you see that we're still here loading the user by id so there is a manual authentication management still, and we can remove that now.
>
> **[11:17](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=677)** So we can remove the whole section here from the if statement in line 75, to down where we then deal with, rememberme this will stay, but we still want to have the user in our templates and luckily this is stored in req.user so let's remove request.user equals user this is already set by passport, but then we write request.user into res.locals.user.
>
> **[11:51](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=711)** So with that, we are back to how it worked before, but now using passport.
>
> **[11:56](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=716)** Now, of course I see that (indistinct) is still marking this file as red something is still, maybe wrong here it looks red, yeah, we don't need the UserService anymore because now we are doing that through passport so let's remove that.
>
> **[12:14](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=734)** And now the last thing that is left is that I have to head to login.js, there I can now remove this whole block that I copied before so everything from line 24 to 49 can be gone so it's always a good feeling, right?
>
> **[12:30](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=750)** When we can remove code.
>
> **[12:34](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=754)** And we can also remove the whole error checking here, because this is also not needed anymore.
>
> **[12:42](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=762)** We can remove the storing of the user.id into the session this is all done the passport.
>
> **[12:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=769)** (indistnict) rememberme stays as it is.
>
> **[12:53](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=773)** And now we have to of course use passport.
>
> **[12:56](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=776)** And for that, I can now just simply bring in passport, right on top of the file I add now const passport equals require passport and passport as a module maintains a global state so this passport object that you have here now also have to have this LocalStrategy configured that we set up before so this is the same passport object.
>
> **[13:24](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=804)** You can compare it with the Singleton.
>
> **[13:26](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=806)** And with that, I can now simply add to the login route, to the post route, the middleware of passport that is called authenticate and for that I will now add passport.authenticate and as first argument I have to now tell which strategy to use, and this is in this case local.
>
> **[13:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=829)** And then it also takes a conflict object and the error can define where to redirect in case of a failure.
>
> **[13:57](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=837)** And now case the failure redirect is /auth/login.
>
> **[14:08](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=848)** So if this fails, we will be redirected, now let's save and then it gets nicely formatted again.
>
> **[14:15](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=855)** And we still don't see an error when it reloads so this is a good sign.
>
> **[14:19](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=859)** So now we have implemented the login now is using passport, but we are missing one more thing.
>
> **[14:25](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=865)** And this is the log out because now also the log out works differently.
>
> **[14:30](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=870)** So I will now use passport to log out and passport gives us a handy little function on the request object, which is logout so I can now call request logout don't forget the parenthesis, and now passport is handling the logout as well.
>
> **[14:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=889)** So now let's try this out, let's head into the browser and first let's do the logout, and this works and now let's login the user again, let's log I think the user, yes was lcola and I changed the password before now it's my secret too type this in my secret too, and the login and you see that this works.
>
> **[15:13](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=913)** So now we can log in using passport and you may have figured that the code that we wrote was not way less than we did before, but now we have a central location where this is all handled and its handled by passport, but we will see more use cases for passport later where it makes even more sense to use it.
>
> **[15:31](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=931)** But I want to show you one more important thing.
>
> **[15:33](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=933)** So we know that there is this My Account link, and we only show this when the user is logged in.
>
> **[15:39](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=939)** But that's not really security, right?
>
> **[15:42](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=942)** So I could still access this route even when I'm not logged in by simply typing in this URL.
>
> **[15:48](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=948)** So let's try this out.
>
> **[15:49](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=949)** I log out and then I'm accessing this URL again.
>
> **[15:53](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=953)** And you see that we get an rt error message caused by the template trying to access the user object, which is null.
>
> **[16:00](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=960)** And this is just a rather harmless implication by not properly securing routes.
>
> **[16:05](https://www.linkedin.com/learning/node-authentication/implementing-local-authentication-with-passport-js?u=76281980&t=965)** So we have to make sure that only authenticated users can access routes where we assume that the user has to be logged in to access them, and we will implement it in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), module (8), function (7), const (6), async (5)
> **Code Identifiers:** usernamefield (4), setuppassport (3), passwordfield (2), passreqtocallback (1), passrequesttocallback (1)
> **Definitions:** means that (3), is an  (3), is called (3), is a  (3)
> **CLI Commands:** node (2), npm (2), make (2), find (1)
> **File Paths:** node.js (2), login.js (2), index.js (1), app.js (1)
> **Analogies:** for instance (3), similar to (2)
> **UI Navigation:** scroll down (4)
> **Prerequisites:** set up (2), install (1), configure (1)

#### Securing routes
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=0)** - Most applications that deal with authenticated users, they're routes that only should be accessible if a user is logged in.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=7)** In our case we were careless, and did not secure the my account route.
>
> **[0:11](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=11)** And while, in this particular case, this just triggers an error and does not give us access to restricted functionality, it is still something that needs to be avoided by any means.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=21)** Imagine you bookmark this page and your login session expired, and this is what you get when you try to access it again.
>
> **[0:28](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=28)** In this video, we will add a little helper middleware that sends the user to the login form when they try to access a page without being logged in.
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=36)** Plus, we will try to redirect the user to the page they tried to access in the first place if the login was successful.
>
> **[0:43](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=43)** So let's head into wishes for the code and then we now install this helper.
>
> **[0:48](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=48)** So I terminate the node process by pressing Control C in the console, and then I install in PIM install dash S, and the module is called connect-ensure-login.
>
> **[1:03](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=63)** And this is actually also by the same author as Passport is, so it integrates also very well with Passport.
>
> **[1:10](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=70)** All right then, let's head into server, routes, Index JX because there we have, you see it in line 16, is my account route and we want to secure it now.
>
> **[1:24](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=84)** So the first thing I'm going to do is I now bring in this module by adding const, and then I'm using curly brackets because we are using destructuring here.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=96)** Ensure, logged in equals require, connect-ensure-login.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=106)** So this will now get us connect-ensure-login dot ensure logged in.
>
> **[1:52](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=112)** So that's a middleware provided by this module.
>
> **[1:55](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=115)** And this middleware does nothing else than looking into the request object and the data structures created by Passport in there to see if a user is actually logged in.
>
> **[2:05](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=125)** So to use it now, we scroll down to the my account route, and there I will now simply add ensure logged in, and there's an argument that just passing the route, the user should be redirected too if they're not logged in.
>
> **[2:20](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=140)** And this is in our case auth login, so we sent them to the login form, and that's it.
>
> **[2:26](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=146)** So with that, this route should already be secured.
>
> **[2:29](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=149)** I can only access it if I'm logged in.
>
> **[2:32](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=152)** I wanted to do one more thing.
>
> **[2:34](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=154)** So I head into auth, log interest, because as I said, I also want to redirect the user back to the page they wanted to access after the data logging.
>
> **[2:45](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=165)** And for that, this middleware also stores the initial URL in the session and this property is called return to.
>
> **[2:53](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=173)** So now, inside login, we can simply scroll down to line 36 where we do the redirect and now say we want to redirect to request that session dot return to, and if this is not set, then we will default again to the index page.
>
> **[3:16](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=196)** Now let's start another application again, and we get no error, that's a good sign, And then let's head into the browser again.
>
> **[3:26](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=206)** So if I reload now this my account page, and I'm not logged in, then I should be redirected to the login form.
>
> **[3:33](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=213)** So let's try that.
>
> **[3:34](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=214)** And this works and next, I will now try to log in lcorla, my secret too, and let's click on login and this now should bring us back to the my account page.
>
> **[3:49](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=229)** So let's see if this works, and you see, yes, we are back at the my account page, and that's a very good user experience because you wanted to access the page, but you had to provide your credentials first, but now you're back on the page where you wanted to go in the first place.
>
> **[4:04](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=244)** With that we can authenticate users using Passport, and we can also secure routes with it.
>
> **[4:09](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=249)** One of the strengths of Passport is that it comes with hundreds of strategies for every authentication mechanism you can think of.
>
> **[4:17](https://www.linkedin.com/learning/node-authentication/securing-routes?u=76281980&t=257)** And starting with the next video, we will look into what needs to be done to secure REST APIs using Passport.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (3), while, (1), case, (1), const (1)
> **Env Vars:** pim (1), url (1), rest (1)
> **UI Navigation:** scroll down (2), click on (1)
> **Prerequisites:** install (3)
> **Definitions:** is called (2)
> **CLI Commands:** node (1)
> **Cross-References:** next video (1)
> **Analogies:** imagine (1)

#### Set up and understand the ToDo list sample application
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=0)** - [Instructor] For the rest of this chapter, we will take a look at how to secure single-page applications, as they are very common these days and have specific requirements when it comes to authentication.
>
> **[0:11](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=11)** The single-page application we will be working with is a todolist implemented with Vue.js This application is fully implemented, so there is no need to understand Vue.js.
>
> **[0:24](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=24)** All you need to know is that it utilizes an API provided by the Playground app.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=29)** Also, please keep in mind that this single-page application supports multitenancy.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=35)** This means that a registered user can maintain their individual todolist, in contrast to all users getting just access to a shared list.
>
> **[0:44](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=44)** Let's look at the API routes on the Playground app the todolist app relies on.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=49)** So first we have the login route.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=51)** So it's a POST request to api/login and their essential credentials too, and then I expect the API to log me in in some way, and there are some caveats about that when it comes to APIs and we come to that later.
>
> **[1:05](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=65)** Also, we have a route that gives us just the current user so that the single-page application can show the currently logged-in user.
>
> **[1:15](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=75)** Also, there is a route of course, that gives us all todolist items, it's GET /api/todolist and here very importantly, this will just give us the items for the logged-in user.
>
> **[1:27](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=87)** Also, there is a method that lets us create a new todolist item, it's a POST request to api/todolist, again, this new todolist item will of course be assigned to the logged-in user.
>
> **[1:41](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=101)** Then we have another route that lets us update todolist item with the given ID, so PUT to api/todolist/ and then the id of the todolist item, and then we also have a delete route, it's DELETE api/todolist/, enter id of the item to be deleted.
>
> **[2:02](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=122)** With the basics now sorted out, let's look at the API in Visual Studio Code before we set up the app.
>
> **[2:07](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=127)** So here in Visual Studio Code, I open playground, server, routes, and here you see this folder, api and if we look at the index file, you'll see that we have a login route here and it's right now not implemented, and also this route, whoami, which is also not implemented, and then if you scroll down, you also see that we are mounting here the todolistRouter on /todolist, and in this router, you find an index file that we have all these methods that we talked about before, and as you see, they are all already implemented and they use a services/TodolistService, and if you want to look at it, find it here in services.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=174)** The test is addItem, updateItems, so it's operating the database, very similar to the user service before.
>
> **[3:02](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=182)** So now let's set up and run this todolist application.
>
> **[3:05](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=185)** For that, I open another integrate terminal by clicking on this plus here on the top right of the terminal, and in here I change now into, todolist and as it's a new project then I'll have to run npm install, and this will now pull down a lot of stuff because it's a Vue.js application, and of course it's all those front-end projects, it has a lot of dependencies.
>
> **[3:32](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=212)** While this is running let's just have one look into the, todolist application, so open todolist and in source, you find all the Vue.js components, and there is also a folder api, and in there you find actually the whole metric that deals with the rest API.
>
> **[3:52](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=232)** You see that the base URL points to local host 3000, so that's the API URL of our application, and when I scroll down, then you see that here are all those methods that correspond to an API call to the rest API.
>
> **[4:11](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=251)** We also see for very recent numb moderates security vulnerabilities, they would need to be addressed before we deploy the todolists into production to the open.
>
> **[4:22](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=262)** Now to run this todolist, I can, again, just enter npm run dev and now all this black magic related to WEPEC and front-end apps is running and it now packs and builds the application, and when it's done, it will serve the application on local host 8080.
>
> **[4:45](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=285)** So let's head to local host 8080, so I click command and onto this link, and then I ended up in the browser and you see that we have there a very familiar looking form.
>
> **[4:57](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=297)** So it's very similar to what we saw on the Playground app.
>
> **[5:00](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=300)** So now let me open from developer tools.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=304)** So I'm clicking on this three dots, then on More Tools, and Developer Tools, because I want to look at the XHR traffic, so I'm selecting that one and now I'm trying to login.
>
> **[5:17](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=317)** So I type lcorla and then mysecret2, and I click login and you see, we get an error back, so let's see what's happening here.
>
> **[5:29](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=329)** What are we sending?
>
> **[5:31](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=331)** So in the headers, you see the request headers, and down there, you see the payload and it's username lcorla, password mysecret, and we get back this not implemented error, because yes, you saw it before in the API, we have to implement this still and there now is a caveat.
>
> **[5:53](https://www.linkedin.com/learning/node-authentication/set-up-and-understand-the-todo-list-sample-application?u=76281980&t=353)** We cannot use the same login mechanism that we had with the regular web application, there's some huge difference that has to be addressed by a different mechanism of authentication, and I will show you that starting with the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), post (2), url (2), put (1), delete (1)
> **Code Keywords:** let (7), delete (2)
> **CLI Commands:** find (4), npm (2)
> **API Endpoints:** post  (2), get  (1), /api/todolist (1), put  (1), delete  (1)
> **Definitions:** is a  (4), means that (1)
> **File Paths:** vue.js (4)
> **Tools:** visual studio (2), terminal (2)
> **Code Identifiers:** todolistrouter (1), additem (1), updateitems (1)

#### Authenticating API calls
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=0)** - [Instructor] I teased already that authentication works differently when dealing with single page applications and APIs.
>
> **[0:06](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=6)** But let's first look at how we identify an authenticated user in our playground app using cookies previously.
>
> **[0:13](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=13)** In a playground application, the user posts their credentials using the login form.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=18)** The server will then try to authenticate the user, and if the credentials are valid, the user ID of the authenticated user is written to the session.
>
> **[0:28](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=28)** A common way to persist a user session throughout requests are cookies.
>
> **[0:32](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=32)** The server now replies with the response header that contains the session cookie.
>
> **[0:37](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=37)** The browser will now as with any regular web application, load a new page and will then and this is important, persist the session cookie directly in the browser.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=49)** From now on, and this works automatically until the cookie expires, it will send this cookie whenever it request a page from the domain the cookie is connected to.
>
> **[1:00](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=60)** We are using cookie sessions so we are sending a cookie with an encrypted payload that contains all the session data, including the ID of the authenticated user.
>
> **[1:09](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=69)** If you use regular maybe database based sessions, the cookie may contain a session ID that is then used to read the session from the database when the server receives.
>
> **[1:20](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=80)** The cookie may just contain the session ID that is then used to read the session ID from the database.
>
> **[1:25](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=85)** Either way, the server will receive the session cookie and knows how deserialized the session from it.
>
> **[1:33](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=93)** If the session contains the user ID in our case, the user is authenticated.
>
> **[1:38](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=98)** This takes place with each request from the browser.
>
> **[1:41](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=101)** Every time we deserialize the session from the cookie, the browser sends to the server.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=106)** Now let's look at API calls from single page applications.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=110)** In single page applications, the page only loads once from the server with the initial request, the rest is done by JavaScript and communication with the service done through API calls with XHR or Fetch.
>
> **[2:03](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=123)** Let's assume we're now sending username and password to the regular login route that used cookie-based session.
>
> **[2:10](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=130)** Likely and commonly when using APIs, this API will listen on a different port than the front end, or is even on a different domain.
>
> **[2:19](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=139)** The server will still authenticate the user because it gets the username and the password, and it will, in most cases, even reply with the session cookie as before.
>
> **[2:29](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=149)** Now the trouble starts.
>
> **[2:31](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=151)** There is a whole set of rules and restrictions that define if a browser will accept a cookie coming back from an XHR request in things get more complicated when different domains or sub domains or ports are in the mix.
>
> **[2:45](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=165)** In most cases, the browser will not automatically store the cookie and in many cases, it won't even allow access to it using JavaScript.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=174)** This is a security measure to make sure that XHR request cannot arbitrarily change cookie values.
>
> **[3:01](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=181)** Consequently, this means that a subsequent XHR request back to the server won't contain the cookie and this means that the request won't be authenticated.
>
> **[3:12](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=192)** In short, single page applications and XHR don't mix well with cookies.
>
> **[3:18](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=198)** So there have to be other ways and JSON Web Tokens, short JWT are one of them.
>
> **[3:24](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=204)** Let's look at the same flow and now we are using JWT.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=209)** Again, send username and password using XHR to our API.
>
> **[3:34](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=214)** The server will again, try to authenticate the user and if it works, a JWT Token will be created.
>
> **[3:42](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=222)** Along with other properties, this token contains a payload which contains in our case, the user ID.
>
> **[3:50](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=230)** The server now sends this token back with the payload, this means this can be arbitrary JSON, a property called Token or JWT, where this token then is stored.
>
> **[4:01](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=241)** Inside our app, we can of course access this payload and we can persist this token simply in a variable within our application.
>
> **[4:11](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=251)** And here we can also, and even did this for our to do list, store this token in a cookie so that it survives page reloads.
>
> **[4:20](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=260)** Now with every request to the server, we sent the token in a header called authentication and a property Bearer.
>
> **[4:29](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=269)** So we have to do this code wise.
>
> **[4:31](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=271)** This is not done automatically as with cookies, we really have to set this header in our code in UHS.
>
> **[4:38](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=278)** On the server then, we decrypt and validate the token signature and if it is valid, we can again, deserialize the user from the token payload.
>
> **[4:48](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=288)** Let's see how this token looks like.
>
> **[4:50](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=290)** So JWT Tokens have two main properties.
>
> **[4:55](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=295)** It's first the header, where we defined algorithm and the type it's always JWT.
>
> **[5:01](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=301)** And then we have a payload, in our case I'm sending here the user ID and also expiration date.
>
> **[5:08](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=308)** So this is how long this token should be valid.
>
> **[5:12](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=312)** There are many more different properties that we can set here, but in our case, we are just using this.
>
> **[5:18](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=318)** Now, when preparing this token, the header and the payload are encoded using Base64.
>
> **[5:26](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=326)** And then they're signed using a secret that has to be provided by us.
>
> **[5:32](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=332)** So this signature can then be used to ensure that this header has not been changed somewhere along the way.
>
> **[5:39](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=339)** In the end, the token then look somewhat like that.
>
> **[5:42](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=342)** So first in green, you have the header, then you have the payload.
>
> **[5:47](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=347)** And then in the end you have in orange, the signature for this token that ensures that it has not been tampered with.
>
> **[5:55](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=355)** JWT Tokens are not the solution to all problems, and they come with their own limitations as well.
>
> **[6:01](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=361)** Let's take a quick look at that.
>
> **[6:03](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=363)** So first the main use-case of JWT are request between services.
>
> **[6:08](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=368)** So not directly single-page applications, if you have microservice architecture and services have to send information back and forth, JWT is a good way to do that.
>
> **[6:19](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=379)** In single page applications, the secret cannot be protected.
>
> **[6:23](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=383)** You cannot store the secret somewhat on the browser.
>
> **[6:26](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=386)** This means the token can be decoded.
>
> **[6:29](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=389)** You could read the contents of it, but you cannot change and sign it afterwards.
>
> **[6:35](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=395)** If someone eavesdrops this token, the request can still be forged unless you try different things like adding the API of the client to the payload, and then trying to validate that the request comes from the same API, but this all has its problems for instance, if the API changes.
>
> **[6:54](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=414)** Yet, without the secret an attacker cannot create and sign a token to assume another user's identity.
>
> **[7:01](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=421)** So this means without the secret, I cannot create my own token.
>
> **[7:05](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=425)** So the server would not accept this token because the signature would not match.
>
> **[7:10](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=430)** We will use the token just as a standardized means to sign and transport the user ID similarly as we did with the cookie session.
>
> **[7:20](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=440)** Additionally, and that's one reason to use it, we will use the expiration feature, so that tokens won't be valid endlessly.
>
> **[7:28](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=448)** So if we set the expiration, passport will then take care for us that an expired token won't be accepted.
>
> **[7:36](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=456)** If you want to find out more, there's a dedicated page, JWT.
>
> **[7:40](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=460)** It also comes with a debugger where you can paste in your tokens and then look at its contents and I highly recommend you have a look at it.
>
> **[7:48](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=468)** Passport comes with the strategy for reading JWT tokens from a request, but we still have to first create the token and then send it with the payload.
>
> **[7:57](https://www.linkedin.com/learning/node-authentication/authenticating-api-calls?u=76281980&t=477)** And we will implement the strategy as well as the creation of the token in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (11), api (7), xhr (6), json (2), uhs (1)
> **Code Keywords:** let (6), case, (3), this. (1), protected (1), match. (1)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Creating and sending JWT tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=0)** - [Instructor] I'm back in my playground app and I also have the terminal of the playground app open.
>
> **[0:06](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=6)** So if you're still on the terminal of the to-do list, just use the dropdown on the top right to switch back so that you see the same what I see.
>
> **[0:17](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=17)** When I talked about the token before, I told you that we are using a secret to sign it.
>
> **[0:23](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=23)** And I will show you now how I'm dealing with secrets in general in my application.
>
> **[0:30](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=30)** So if I look into server, config, index.js, we see that I have required dotenv here in line two and dotenv is a very simple module that will read configuration from a file dotenv from the root of the project and then make it available in process.env.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=52)** And in my case, you see here in line 12, I'm having here JWTSECRET and I'm getting it via process.env.JWTSECRET.
>
> **[1:02](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=62)** You can ignore the next two lines.
>
> **[1:04](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=64)** We will use that later.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=66)** But to set the secret now, let's look into our file tree and you see that there is a file called env.sample.
>
> **[1:14](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=74)** And I will now copy this env.sample and paste it and then rename it to .env.
>
> **[1:25](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=85)** And then let's make sure that I'm really opening that one file.
>
> **[1:28](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=88)** So I'm now in .env and I want to now set this JWTSECRET now here and I will just call it myverysecuresecret123.
>
> **[1:44](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=104)** So it just has to be some arbitrary string, of course, the longer, the better.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=110)** And now there is one more thing to this story.
>
> **[1:52](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=112)** If we look into gitignore and scroll way down, you see that in line 58, I have added .env to the ignore list.
>
> **[2:01](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=121)** If I now commit and push to GitHub, for instance, this file won't be committed and this means that my credentials, secret, whatever, won't ever be leaked into GitHub because that's a very common security problem that happens once in a while that people just commit their secret tokens to GitHub.
>
> **[2:22](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=142)** With that done, let's now implement the route that creates this JWT token and for that, I open routes, api, and there index.js.
>
> **[2:36](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=156)** And as so often with Node.js, there is already a module that helps us with dealing with JSON web tokens and I install it now.
>
> **[2:44](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=164)** So I run npm install -S jsonwebtoken.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=174)** And then I'm starting the application right away again and here around line two, I now add const jwt equals require jsonwebtoken
>
> **[3:10](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=190)** and I also bring in passport.
>
> **[3:12](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=192)** So I add const passport equals require passport.
>
> **[3:19](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=199)** So the route that we want to change is the login route, the post login route in line nine and what we want to do now, we want to authenticate the user with username and passport and we actually already have the logic for that implemented.
>
> **[3:35](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=215)** We just have to add now passport.authenticate as we did before and we are using the local strategy because that's really technically the same as we did for the form before.
>
> **[3:51](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=231)** And as configuration option now, we add session: false because as we are using JWT now, we don't want the user to be stored in the session at all.
>
> **[4:04](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=244)** Then let's not forget the comma after this and let's save to get this formatted, so that looks good already.
>
> **[4:12](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=252)** So next, what do we want to do.
>
> **[4:15](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=255)** In the body, in the callback of this middleware, we, of course, want to create this token now.
>
> **[4:22](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=262)** And for that, I now add const token equals jwt and the method is called sign and it gets first an object with the payload and the payload in our case is userId and it's request.user.id.
>
> **[4:42](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=282)** So this is again coming from passport that authenticated our user before and we only end up here in this body of this route if the authentication worked.
>
> **[4:55](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=295)** A second argument, so after this curly bracket, we now add config.JWTSECRET.
>
> **[5:03](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=303)** So the second argument it expects is the secret.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=307)** And now we also see that config is underlined because it's not yet defined but luckily, we get it through params because params contains config as a property and that's one reason why I always define modules as functions because then I can just easily pass down things like the config.
>
> **[5:28](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=328)** So I can now add const and in curly brackets, config and that's in params.
>
> **[5:35](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=335)** So this will give us params.config and store it in config.
>
> **[5:41](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=341)** And then we will add, after line 21, one more thing.
>
> **[5:46](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=346)** We want to set an expiry date and this is another config object and there I set expiresIn and I can simply add here 24 hours.
>
> **[5:56](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=356)** So this is given to us by this JWT module.
>
> **[6:02](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=362)** And in the end, I want to return this token.
>
> **[6:07](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=367)** So I add return and I want to return a JSON payload, so it's res.json and in there, I know send an object and the property's jwt and the value is token.
>
> **[6:23](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=383)** And please note that this is completely arbitrary, so in my Vue app, I just know that the token has to come along in a property called jwt but you could also just call it token, for instance, so that's completely up between the API and the consumer of the API.
>
> **[6:43](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=403)** And with that, we can already try this out in our Vue.js app.
>
> **[6:49](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=409)** And now let's try to log in.
>
> **[6:50](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=410)** So I'm using lcorla again.
>
> **[6:52](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=412)** And first, I will enter a wrong password, just seeing if this works.
>
> **[6:57](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=417)** And you see that I'm getting back an error 401.
>
> **[7:00](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=420)** Of course, this could be a more friendly error message but it basically tells us that the authentication or the validation of the user via passport works.
>
> **[7:10](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=430)** And now I'm using the right password hopefully.
>
> **[7:15](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=435)** And I click Login again and you see, it somehow already works.
>
> **[7:20](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=440)** So when we look at this one request that is not failed, we see that the response, so you can click into the response tab here and you see that we get the JWT token back as a payload and then the application sees the JWT payload and stores it already but then it fails, so it tries to call whoami to show the username and this again gives us this not implemented.
>
> **[7:49](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=469)** Why is it like that?
>
> **[7:51](https://www.linkedin.com/learning/node-authentication/creating-and-sending-jwt-tokens?u=76281980&t=471)** Because we have not yet created the strategy and configured the strategy for passport to check for the JWT tokens, and we will do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (4), module (3), require (2), switch (1)
> **Env Vars:** jwt (6), jwtsecret (4), json (2), api (2)
> **File Paths:** index.js (2), process.env (2), node.js (1), params.config (1), res.json (1)
> **Tools:** github (3), terminal (2)
> **CLI Commands:** make (2), node (1), npm (1)
> **Definitions:** is a  (2), means that (1), is called (1)
> **Code Identifiers:** userid (1), expiresin (1)
> **Analogies:** for instance (2)

#### Implementing JWT authentication with passport
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=0)** - [Instructor] In this video, we will now configure a passport JWT strategy so that we can authenticate requests with a JWT bearer token and then we will also use this strategy in the respective routes so that our Todo List sample application works.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=18)** So let's kick this off by heading into Visual Studio Code and there, I open playground, server, lib, passport and there index.js because we are going to implement this strategy, of course, there again.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=35)** And of course, passport comes with a JWT strategy but we have to install it first.
>
> **[0:42](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=42)** So I'm stopping this process here in the terminal and I now type npm install -S passport-jwt.
>
> **[0:54](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=54)** So this is the passport-jwt strategy.
>
> **[0:57](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=57)** And I run Node.js again and I will now start by first bringing in the strategy.
>
> **[1:05](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=65)** So add const passportJWT equals require passport-jwt.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=77)** And then we need two parts of this module.
>
> **[1:19](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=79)** So after we require UserService, I now add const JWTStrategy equals passportJWT.Strategy.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=96)** So that's the strategy.
>
> **[1:37](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=97)** We know that already from the local strategy but we need one more thing and this is const ExtractJWT.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=106)** So that's a helper that extracts JWT.
>
> **[1:49](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=109)** We will see in a second how this works.
>
> **[1:52](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=112)** But first, let's bring this in and it's passportJWT.ExtractJWT.
>
> **[2:00](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=120)** Notice the lowercase here.
>
> **[2:02](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=122)** So I used uppercase JWT but the model is called lowercase jwt but we will leave it like that.
>
> **[2:11](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=131)** And next, we are going to implement now or configure more or less this strategy.
>
> **[2:16](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=136)** For that, I scroll down.
>
> **[2:20](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=140)** And right before we do the serializeUser and after the local strategy configuration, I now add passport.use, the same as with the local strategy and now I add new JWTStrategy and then we have this configuration object and there we now define jwtFromRequest and this is done now via ExtractJWT.fromAuthAsBearerToken.
>
> **[3:02](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=182)** So this uses this ExtractJWT helper to extract the JWT token from this bearer token header that we are sending from the Vue.js application.
>
> **[3:15](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=195)** And just real quick, so in case you don't believe me, let's head into this application real quick.
>
> **[3:21](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=201)** So in todolist, if you look into src and there into api, you have this index.js file and there you see that really each request has this Authorization: Bearer jwt header with it.
>
> **[3:35](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=215)** So this is coming from the Vue.js application and here in our passport configuration, we are configuring that we want to extract this header.
>
> **[3:46](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=226)** And then there is another property we have to set, secretOrKey, because, of course, we want to verify the signature of this token, and for that we need the secret and its config, and you remember that hopefully.
>
> **[4:02](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=242)** JWTSECRET.
>
> **[4:05](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=245)** So it's the same, of course, that we used when signing this key.
>
> **[4:10](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=250)** Ignore the error that we are getting here.
>
> **[4:12](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=252)** This is just because we're not yet done with setting this up because we now have to define a callback and it's async, so you see it's the next argument in this JWTStrategy constructor and this gets the jwtPayload and also a done callback.
>
> **[4:41](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=281)** And now in there, I add a try catch block.
>
> **[4:47](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=287)** That's the same as we do always, return done error if there is an error.
>
> **[4:53](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=293)** So what do we have to do now here?
>
> **[4:55](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=295)** Well, we have to load the user.
>
> **[4:57](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=297)** Const user equals await UserService.
>
> **[5:03](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=303)** So that's familiar already.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=304)** findById and where is the ID now?
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=307)** Well, if you remembered, when we created the token here in routes, api, index.js, we wrote it into userId.
>
> **[5:20](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=320)** So it is now inside the payload of the token and with that, we can just fetch it from jwtPayload.userId.
>
> **[5:33](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=333)** And in case everything works fine, we will have a user then and we will now return null and the user, as we did before.
>
> **[5:43](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=343)** So this will, of course, only work if the token was valid, also not expired.
>
> **[5:50](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=350)** Then passport executes this callback and tries to fetch the user now with this given userId it gets from the payload from the token.
>
> **[6:01](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=361)** Now, we are almost done but we also have to, of course, apply this middleware.
>
> **[6:06](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=366)** For that, I now head back into the routes file.
>
> **[6:09](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=369)** So I'm now back in routes, api, index.js and there we already have passport but we now also have to use this strategy for the respective routes.
>
> **[6:22](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=382)** So let's start with the whoami route.
>
> **[6:25](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=385)** So this route should actually give us back the currently authenticated user or the username of this user.
>
> **[6:32](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=392)** So I now add passport.authenticate and the strategy is now not local but jwt, so we instruct passport to look into the header and try to extract the JWT token there and again, session is false because we don't need a session or the user stored into the session here.
>
> **[6:58](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=418)** Then, of course, we also don't want to return not implemented but we will return res.json and in this JSON object, I now write username: request.user.username.
>
> **[7:19](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=439)** Again, the Vue.js application is configured in a way so that it expects the username in this property.
>
> **[7:27](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=447)** We can remove the next argument here and with that, the whoami route works.
>
> **[7:34](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=454)** Again, this works because if passport manages to get a valid JWT token from the header and then can also load a user, we will end up this callback and then, of course, we will have a user in request.user.
>
> **[7:50](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=470)** Now we also have to authenticate all the API requests for the todo list and for that, we can now just do the same as we did before but now we do it in this mount of the todolist router.
>
> **[8:05](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=485)** So just copy now this line from line 33 and I paste it in here.
>
> **[8:13](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=493)** And with that, all requests to the API will be authenticated and also require authentication via JWT.
>
> **[8:23](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=503)** If you look into the todolist here, you will see that we are, for instance, when we add an item here in line nine, we are relying that we have a request.user.id to add this item and assign the right user to it.
>
> **[8:39](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=519)** So really, this API relies on the user being transmitted via this token.
>
> **[8:45](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=525)** So with that, we should be now good to try this out.
>
> **[8:47](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=527)** So I'm opening the browser again.
>
> **[8:50](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=530)** So before we try to log in, let's open the Chrome Developer Tools because I really want to see what's going on here under the hood and now let's try to log in.
>
> **[9:00](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=540)** Lcorla and my secret too.
>
> **[9:05](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=545)** And I'm in.
>
> **[9:06](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=546)** So I'm now in the Todo List application.
>
> **[9:09](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=549)** You see first we are doing the login and if we scroll down, we see that I'm sending here the username and the password and this gives us back this JWT token that we created in the backend on the API.
>
> **[9:26](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=566)** Then we are calling whoami.
>
> **[9:28](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=568)** This is then used to fill out this logged in as section and you see that it returns the username and then we try to fetch the todolist and this is right now empty but what's interesting here is now if you look at the headers, and scroll down to the request headers, you see that I'm sending here Authorization: Bearer.
>
> **[9:52](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=592)** So that's not a bearer token.
>
> **[9:54](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=594)** And I told you already that this is done programmatically.
>
> **[9:57](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=597)** This means I'm doing that in my Vue.js code and I'll show you that real quick.
>
> **[10:02](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=602)** So in Visual Studio Code, I open todolist, src, and api and there in index.js, you see that each of those methods that call into the API gets this JWT token as an argument that JWT token is stored in the application itself and then we're sending the header like you see, starting with line 18.
>
> **[10:29](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=629)** Authorization: Bearer and then this JWT token.
>
> **[10:34](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=634)** Now let's switch back to the browser to use now this todo list, so I'm adding a new to-do item, finish course.
>
> **[10:44](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=644)** Then work through beta tests.
>
> **[10:52](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=652)** Talk to producer.
>
> **[10:57](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=657)** And as you see there, items are now added to the list and I can even click on them to cross them out, to mark them as done or I can also edit them by clicking on this edit icon here and I can say work through beta tests again and you will see this will also be updated.
>
> **[11:19](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=679)** Of course, I can also delete items by just clicking on the delete button.
>
> **[11:26](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=686)** If we look at what's going on here under the hood, and you see in the request URL that it contains the ID of the item that we want to update as the last pass argument.
>
> **[11:39](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=699)** And if you scroll down, you can also see the payload and you see that this was an action that marked one item as done, completed: true.
>
> **[11:49](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=709)** And you see that this was the update and the action that marked an item as completed.
>
> **[11:55](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=715)** Now, to make this a little bit more fun, I also want to show you that this is really capable of doing multi-tenancy.
>
> **[12:04](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=724)** So I'm heading to localhost:3000 and I'm creating a new user by clicking to Registration and the user is jdonaldson and the email address is jdonaldson@[explorecalifornia.com](https://explorecalifornia.com) and I'm setting a password.
>
> **[12:26](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=746)** And I click on Create Account.
>
> **[12:30](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=750)** All right, now let's log out this one user and I want to show you one more thing first.
>
> **[12:35](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=755)** If I reload, I'm still logged in and this works just because I'm setting a cookie from Vue.js that contains the JWT token and in my application, I'm just looking if there is a cookie and if there is that cookie, I'm using this JWT token again.
>
> **[12:52](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=772)** So that's the reason why we can we even reload the page, otherwise I would be logged out because the Vue.js application cannot persist anything beyond a reload of the browser.
>
> **[13:03](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=783)** Now let's log out and let's try to log in this user.
>
> **[13:07](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=787)** So it's jdonaldson.
>
> **[13:09](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=789)** And I'm providing the password.
>
> **[13:12](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=792)** And if I click on Login, you see that I get the 401 error.
>
> **[13:16](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=796)** So something is still wrong and I know exactly what it is.
>
> **[13:20](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=800)** We have to verify this user.
>
> **[13:22](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=802)** So I click on the user list and click on this verify button and now the user's verified.
>
> **[13:29](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=809)** Now let's try it again.
>
> **[13:31](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=811)** I hit Login and I'm now in the to-do list of jdonaldson and I can again add items here.
>
> **[13:41](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=821)** So this works now.
>
> **[13:42](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=822)** We have a multi-tenant to-do list application that you could now deploy to the web and offer it as a service.
>
> **[13:52](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=832)** There is just one more thing that I want to show you.
>
> **[13:55](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=835)** So let's look at what happens if I update an item.
>
> **[14:00](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=840)** So let's click on go fishing.
>
> **[14:04](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=844)** And let's say it's go fishing again and if I look at this request, you see as before, I'm doing this put request and I'm sending it to the URL that contains the ID of the item that I want to change and in the payload, I send the new description that should be updated.
>
> **[14:24](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=864)** Now, let's look into Visual Studio Code and let's follow this path a little bit.
>
> **[14:28](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=868)** So if I go into server, routes, let's close the index here, and head into api and todolist and index.js, let's look for this update route.
>
> **[14:43](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=883)** So it has to be a put and here it is.
>
> **[14:45](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=885)** So it's put and then there is the item, ID is an argument.
>
> **[14:50](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=890)** And then I'm calling TodolistService.updateItem with the itemId and the body.
>
> **[14:57](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=897)** So if I open that, and up here, and you see that I'm just doing a findOne with the ID and then I'm updating item.completed and item.description before I save this item.
>
> **[15:10](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=910)** And here we have a very typically security flaw hidden.
>
> **[15:14](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=914)** This is very often overseen and I invite you to look at it and try to figure out what could be the problem here.
>
> **[15:21](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=921)** The problem is in updateItem and also in deleteItem.
>
> **[15:25](https://www.linkedin.com/learning/node-authentication/implementing-jwt-authentication-with-passport?u=76281980&t=925)** I will show you what's the problem here in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), const (4), require (3), delete (2), module (1)
> **Env Vars:** jwt (15), api (5), url (2), jwtsecret (1), json (1)
> **Code Identifiers:** passportjwt (3), userid (3), jwtpayload (2), updateitem (2), serializeuser (1)
> **File Paths:** index.js (6), vue.js (6), node.js (1), res.json (1)
> **UI Navigation:** click on (6), scroll down (4), open the (1)
> **Tools:** visual studio (3), terminal (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **Prerequisites:** configure (2), install (2)

#### Ensuring object level authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=0)** - [Instructor] Did you figure it out?
>
> **[0:01](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=1)** Well, let's look at the routes again.
>
> **[0:04](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=4)** So I'm heading into API to do list index chairs.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=7)** And there we have this update route.
>
> **[0:10](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=10)** We know that everything on the slash to do list is protected by a password. So if you look into index chairs, we see that down here where we have a mount slash to-do list, you're using passport authenticate.
>
> **[0:24](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=24)** So there is no doubt that the user that ends up with their request on the slash API slash to-do list has a valid JWT token.
>
> **[0:35](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=35)** And from then on, we trust the user blindly.
>
> **[0:37](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=37)** So everyone that has an account must be a good person because the update and the delete route, delete or update an item without even checking if this item belongs to the user.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=49)** So let's look at the portrait again.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=51)** So we get this item ID, and then we just do this update by providing the item ID that we got by request arguments, and we send the body with the data that should be updated.
>
> **[1:06](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=66)** And the same is true for the delete route.
>
> **[1:08](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=68)** So if I know the object ID I can do basically anything with this object, granted in our case, it would be hard to guess this object ID, but maybe we provide a way to view to do list items of other users.
>
> **[1:25](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=85)** And there we leak out the object ID through the API or, and it happens so often, we are just using ascending integers as the item ID.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=96)** Then I can just use a script and send delete request to all items in the database, if I just have a valid user.
>
> **[1:44](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=104)** So that's bad, we need so-called object level authorization.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=110)** We need to make sure that an object that we manipulate really belongs to the user that is currently logged in.
>
> **[1:57](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=117)** In our case, this can be done with a simple fix.
>
> **[2:00](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=120)** So what I'm doing now is I'm adding an argument to update item, and this is request dot user dot ID.
>
> **[2:11](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=131)** And I do the same for the delete request.
>
> **[2:18](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=138)** I'm also adding request user ID as the first argument.
>
> **[2:22](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=142)** Now I'm heading into the to do list service and there I add now this argument and it's the user ID and also for delete it's the user ID, and now what I'm doing, and that's rather trivial. I'm not just adding user ID.
>
> **[2:42](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=162)** So that's the shortcut. You could also write user ID, colon, user ID, but that's the same.
>
> **[2:50](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=170)** So we can just leave the property here as a find argument.
>
> **[2:55](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=175)** So now the query really tries to find an object that has the ID that is provided and also the user ID that I provide.
>
> **[3:04](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=184)** So with that, there is no chance that I can access the object if I don't have the user ID with me, and I only can provide this user ID, if I'm actually logged in.
>
> **[3:14](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=194)** The same, I do now for delete item.
>
> **[3:17](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=197)** So I'm also updating it here to add the user ID and with that our items should be protected now.
>
> **[3:25](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=205)** And let's try this out in the browser.
>
> **[3:28](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=208)** So let's click on this item. You see, it's crossed out, let's click on it again and it's updated again.
>
> **[3:36](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=216)** So let's change, go fishing into go hiking, and I can still do this.
>
> **[3:41](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=221)** So now everything is still working, but I can be sure that no user accesses an item that don't belong to them.
>
> **[3:48](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=228)** So when implementing APIs, you should always look out for such security holes.
>
> **[3:52](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=232)** They are so common and really cause a lot of trouble.
>
> **[3:56](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=236)** With that, our, to do list application is done and you can stop the app because we won't need it any longer.
>
> **[4:03](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=243)** In the next chapter, we will focus on a very popular aspect of authentication, it's single or social sign-on.
>
> **[4:11](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=251)** We want to make it super easy for our users to sign into our application and so we let them use an existing account from another site.
>
> **[4:21](https://www.linkedin.com/learning/node-authentication/ensuring-object-level-authorization?u=76281980&t=261)** Also here, passport will simplify things, dramatically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (7), protected (2), case, (2), this. (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** api (3), jwt (1)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### 4. Single Sign-On (SSO)

#### Authentication, authorization, and single sign-on (SSO)
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=0)** - [Instructor] In this chapter, I'm going to show you how to log in users using single sign on without any need to provide credentials to our app.
>
> **[0:07](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=7)** Single sign on is actually a pretty complex topic.
>
> **[0:10](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=10)** And this is why this video gives you a short preview.
>
> **[0:13](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=13)** Please note that each of the technologies I will be mentioning would deserve a course of its own.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=18)** I just focus on what you need to know to satisfy the common use case of logging in users using an account at this third-party.
>
> **[0:25](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=25)** First, let's introduce two basic terms that we haven't covered in detail yet.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=29)** It's authentication and authorization.
>
> **[0:33](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=33)** While they sound similar, they described two related, but different things.
>
> **[0:37](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=37)** First, authentication ensures the identity of a user.
>
> **[0:41](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=41)** When we logged into the application before, we authenticated the user using a username and a password.
>
> **[0:47](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=47)** Authorization on the other hand ensures that the user can only access resources they are allowed to.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=52)** We did use authorization implicitly before when we made sure that the user is authorized to modify or delete the to-do list item.
>
> **[1:01](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=61)** The authorization rule was in this case that the user can only modify or delete their own resources.
>
> **[1:07](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=67)** In large applications you might add users with access levels like regular users and admins with elevated permissions to perform specific operations.
>
> **[1:17](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=77)** In enterprises, authorization is also often used to make sure that the user has even access or is allowed to access a given internal application.
>
> **[1:27](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=87)** Next, let's look at how single sign on works.
>
> **[1:30](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=90)** And I'll really show you this in a very simplified way.
>
> **[1:34](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=94)** And it really depends on which technology or standard that you're using, but in a nutshell, it works like that.
>
> **[1:41](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=101)** So in the morning, you come to the office and switch on your computer.
>
> **[1:45](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=105)** And you want to access some internal application like email.
>
> **[1:50](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=110)** Let's imagine you work in a company that uses single sign on.
>
> **[1:53](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=113)** In the morning, you start your computer and want to access your email or some other resource with your browser.
>
> **[1:59](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=119)** Let's call this resource the service provider.
>
> **[2:02](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=122)** The service provider is configured to authenticate users using single sign on.
>
> **[2:06](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=126)** And right now, your request does not contain the expected credentials.
>
> **[2:10](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=130)** It will now redirect you to a so-called identity provider, short IP.
>
> **[2:15](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=135)** Now, it depends on if the identity provider can authenticate you.
>
> **[2:18](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=138)** If not, it will send you to a login page.
>
> **[2:21](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=141)** And hopefully, you come back with a valid user session containing authentication information.
>
> **[2:27](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=147)** So basically, now, your user profile is stored with your session.
>
> **[2:30](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=150)** Still we don't know if you're allowed to access the service provided by the service provider.
>
> **[2:37](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=157)** So now, the authorization server comes into play.
>
> **[2:40](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=160)** It will look up if you are allowed to access the service.
>
> **[2:47](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=167)** And if you are, it will then send you with an authentication session back to the service provider.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=174)** And you can finally access to your email.
>
> **[2:56](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=176)** The way how this authorization information provided to the service provider.
>
> **[3:00](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=180)** Now, it really depends on which technology or standard you're using for authorization.
>
> **[3:07](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=187)** Key is here that the service provider trusts the identity provider and the authorization server.
>
> **[3:14](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=194)** And delegates authentication and authorization to it.
>
> **[3:18](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=198)** Of course, there are well-known standards for implementing SSO today.
>
> **[3:22](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=202)** The oldest and most popular one is SAML.
>
> **[3:26](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=206)** It's security assertion and markup language.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=209)** And it's an open standard for exchanging authentication and authorization data between parties.
>
> **[3:36](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=216)** In particular, between an identity provider and the service provider.
>
> **[3:40](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=220)** And the typical use case for that is Enterprise SSO.
>
> **[3:43](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=223)** So if you're working in an enterprise.
>
> **[3:45](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=225)** And you have maybe a log in against an Asia-active directory or something similar, you're using most likely SAML.
>
> **[3:54](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=234)** Then there is OAuth 2.0 aka OAuth2.
>
> **[3:58](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=238)** This is an open standard for authorization.
>
> **[4:01](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=241)** A typical use case is to grant websites applications access to the information on other websites, but without giving them passwords.
>
> **[4:09](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=249)** Very often, this is used to authenticate API requests to other websites.
>
> **[4:14](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=254)** Additionally, and this is important because we will do this in this chapter.
>
> **[4:17](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=257)** It can also be used for authorization in single sign on.
>
> **[4:20](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=260)** So that's a bit of a contradiction because we said before, it can only be used for authorization, but you will see this in a bit.
>
> **[4:28](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=268)** And most recently, OpenID Connect entity stage.
>
> **[4:31](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=271)** And it's an identity layer built on top of the OAuth2 framework.
>
> **[4:35](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=275)** And it provides real standardized authentication.
>
> **[4:39](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=279)** Today's most typical use case is Consumer SSO.
>
> **[4:42](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=282)** So single sign on for regular consumer apps, but we will see what the future will bring.
>
> **[4:47](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=287)** And it might want to even replace SAML, as it's more likely.
>
> **[4:51](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=291)** Which standard or technology to use highly depends on the use case.
>
> **[4:55](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=295)** And often, you don't have much of a choice because you have to use what the third-party, like your company's SSO server supports.
>
> **[5:03](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=303)** Regardless, passport likely comes with a strategy for it.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=307)** For our example, we will use GitHub as OAuth provider.
>
> **[5:10](https://www.linkedin.com/learning/node-authentication/authentication-authorization-and-single-sign-on-sso?u=76281980&t=310)** And I will show you a popular way to use it for authentication, although it does not support OpenID Connect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (2), switch (1), case. (1)
> **Env Vars:** sso (4), saml (3), api (1)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### The GitHub OAuth2 authorization (and authentication) flow
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=0)** - [Instructor] Social login is a form of single sign-on using existing information from a social networking service to log into another service without providing username and password for it.
>
> **[0:10](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=10)** I'm sure you've already used your Google, Twitter, Facebook, or LinkedIn account to sign in to some other application and also hi that behind the scenes, you were using OAuth 2.0 for this.
>
> **[0:22](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=22)** Technically, this means you were giving the app you were using access to the API of the service on your behalf.
>
> **[0:29](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=29)** As I said, actually OAuth 2.0 does not support authentication, yet for social sign on, it is used regardless.
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=36)** After this video, you will understand how this is done.
>
> **[0:39](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=39)** We will use GitHub to implement social sign on.
>
> **[0:42](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=42)** It is an OAuth provider as well.
>
> **[0:45](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=45)** OAuth 2.0 flows are always rather similar but they have their specifics.
>
> **[0:49](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=49)** Let's look at how this works with GitHub.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=52)** First, you have to register your site as an OAuth app in GitHub.
>
> **[0:56](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=56)** We will do this in the next video together but the process contains some key information you will need to understand the authentication flow.
>
> **[1:04](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=64)** When you set up the app, you provide, along with some other information, a callback URL and as you see here, this is relative to the client.
>
> **[1:12](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=72)** This means that we can use the respective URL on localhost here as this is where the browser will be redirected too.
>
> **[1:21](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=81)** After registering the application, you end up on the screen that provides you with a client ID, as well as with the button to generate the client secret.
>
> **[1:31](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=91)** After this step, you have a registered app, client ID and the client secret.
>
> **[1:36](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=96)** Now let's look at the authorization and authentication flow and brace yourself because now you will learn what UML sequence diagrams were made for.
>
> **[1:45](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=105)** All right, we have the browser, we have the playground app and we have GitHub.
>
> **[1:49](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=109)** In the browser, you click now on this sign up with GitHub button.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=114)** This now leads you to auth/github, so that's a GET request against the playground app and there we have the passport.authenticate middleware and it uses the GitHub strategy.
>
> **[2:06](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=126)** This strategy will now redirect the browser to [github.com/login/oauth/authorize](https://github.com/login/oauth/authorize) and it will send along the client_id, this is what we acquired before, the redirect_uri, this is something we configure with the strategy in passport and it has to match the callback URL that we defined before when setting up the app.
>
> **[2:31](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=151)** It also contains the scope and the scope defines to which data we want to have access to.
>
> **[2:38](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=158)** And it also contains an argument state and state is a random string that is just used for security reasons.
>
> **[2:47](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=167)** So now the browser redirects to GitHub and sends along the arguments from before.
>
> **[2:53](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=173)** Now, in GitHub, you get the authorization screen.
>
> **[2:55](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=175)** So this is the screen where you're asked if you really want to grant authorization to this given app.
>
> **[3:02](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=182)** And if you grant authorization, your browser is again redirected.
>
> **[3:06](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=186)** Now it's redirected to auth/github/callback on localhost.
>
> **[3:11](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=191)** This is the callback URL you defined before.
>
> **[3:14](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=194)** And GitHub also sends along its GET argument a code.
>
> **[3:18](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=198)** This is just a very short code that will expire after a few minutes.
>
> **[3:22](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=202)** So now the browser follows this redirect and heads to auth/github/callback.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=209)** And there again, we have the passport.authenticate middleware and the middleware will now do a POST request to login/oauth/access_token on GitHub and send along the client_id, now also the client_secret, the code it got before, the redirect_uri and also the state argument, which is still a random string.
>
> **[3:54](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=234)** When everything goes well, GitHub will now reply with the so-called access_token.
>
> **[3:59](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=239)** This is the token that allows us now to communicate with the GitHub API on behalf of the user.
>
> **[4:07](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=247)** And now authorization is basically done because now we have authorized our app against GitHub and now the authentication of our user starts because what we are now doing is we send a request to api.[github.com/user](https://github.com/user) and send the access_token with it.
>
> **[4:27](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=267)** And with this access-Token, we are now allowed to fetch the user information and get back the user profile.
>
> **[4:34](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=274)** And with that, we have now, though OAuth does not provide authentication directly, identified the user.
>
> **[4:41](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=281)** As you can see, this is rather complex but luckily the GitHub passport strategy does most of the work for us.
>
> **[4:48](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=288)** Now before we implement this, there is one more thing.
>
> **[4:51](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=291)** Ideally, you should have two GitHub accounts.
>
> **[4:54](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=294)** Account one would be your regular GitHub account and you would use it to register the OAuth application.
>
> **[5:02](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=302)** So this is the app owner.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=304)** And then we would ideally need a second account, which would be just a temporary test account.
>
> **[5:10](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=310)** You can create it with a separate email address and this would be then the user we use for login.
>
> **[5:16](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=316)** This is basically just to emphasize that the user of the OAuth app is registered to is technically unrelated to the user who uses the OAuth app then to authenticate.
>
> **[5:26](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=326)** If you don't want to create an additional account, you can use your regular GitHub account to own the OAuth app, as well as to log in.
>
> **[5:34](https://www.linkedin.com/learning/node-authentication/the-github-oauth2-authorization-and-authentication-flow?u=76281980&t=334)** Just keep in mind again that the user you register the app to does not need to be the same user who logs in then.

> [!info]- Semantic Content
>
> **Tools:** github (22)
> **Code Identifiers:** access_token (3), client_id (2), redirect_uri (2), client_secret (1)
> **Env Vars:** url (4), api (2), uml (1), post (1)
> **Code Keywords:** let (2), this. (1), for. (1), this, (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **API Endpoints:** get  (2), post  (1)
> **Versions:** 2.0 (3)
> **URLs:** [github.com](https://github.com) (2)

#### Prepare Passport.js for GitHub OAuth2
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=0)** - [Instructor] Now to kick this off, let's now register this Oauth app in github for that I head into the browser and on the top, right where my profile pic is I click on settings and then I scroll down and select developer settings.
>
> **[0:18](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=18)** And there, I can now click on auth apps and there, and I now click on new OAuth app and then give the app name.
>
> **[0:27](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=27)** That's my playground app.
>
> **[0:32](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=32)** The homepage URL is in this case, https [test.com](https://test.com) or whatever.
>
> **[0:38](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=38)** This is just to inform the user when they try to authenticate for which app or which page they're authenticating.
>
> **[0:45](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=45)** And then, and this is very important.
>
> **[0:48](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=48)** This is now the callback url I talked about before.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=51)** This is http local host port 3000, and it's auth, github callback.
>
> **[1:04](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=64)** Needless to say that we have to implement this callback route later, but now let's register the application and there we already have the client ID.
>
> **[1:13](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=73)** And we also need this client secret.
>
> **[1:16](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=76)** And for that I click on generate the client secret, and it will give me the secret and I can just copy it by clicking on this clipboard.
>
> **[1:27](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=87)** Now let's head back into Visual Studio Code, and there I open playground.env.
>
> **[1:34](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=94)** As I said before, this is where we want to store our secrets.
>
> **[1:38](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=98)** And I will now paste the GitHub client secret into the respective line.
>
> **[1:46](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=106)** And we also need the client ID so I head back into the browser and copy this client ID as well.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=114)** Right, as I said before, then in server config index js, this is then written by a process.env to the respective config variables.
>
> **[2:09](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=129)** So now we have a registered auth app running on GitHub.
>
> **[2:13](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=133)** Next, we need a strategy for GitHub and for that we install, npm install - S passport, and now be careful github2 because this is the most recent version that supports the latest GitHub API.
>
> **[2:32](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=152)** So let's install this and now I head into server lib in passport index and let's bring in now the GitHub strategy.
>
> **[2:44](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=164)** So under the local strategy at const.
>
> **[2:49](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=169)** GitHubStrategy = require ('passport-github2').Strategy So that's now for sure pretty familiar already Now let's scroll down.
>
> **[3:09](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=189)** And as before, as with local and GWT, we have to now configure and set up the strategy.
>
> **[3:17](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=197)** And for that again, do a passport.use and in there I add new GitHubStrategy.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=209)** And as before we have some configuration here to do.
>
> **[3:34](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=214)** First, we pass in the client ID and this is now in config.
>
> **[3:40](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=220)** GITHUB_CLIENT_ID and also we want to provide the client secret, and this is config.
>
> **[3:54](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=234)** GITHUB_CLIENT_SECRET Additionally as mentioned before, I want to provide the scope.
>
> **[4:03](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=243)** So this is what we actually want to acquire from the profile of what we want to be able to read and it's scope I define ['user:email'] That's all we want to know.
>
> **[4:18](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=258)** Of course we could do way more.
>
> **[4:19](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=259)** We could get access, even admin access to the whole repository, but this is not what we want to do.
>
> **[4:25](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=265)** We just want to identify the user, not use to GitHub API really on behalf of the user.
>
> **[4:32](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=272)** Next, I provide a callback URL and this is now http:// 127.0.0.1 for local hosts port 3000 and /auth/github/callback So this is also what we saw in the URL sequence diagram before.
>
> **[4:58](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=298)** And then also this is something we had before I want to passReqToCallback: true, Now, we have to implement the respective callback function.
>
> **[5:10](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=310)** So add async (req, ) and then the next argument is the accessToken.
>
> **[5:19](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=319)** Let's just real quick save that away.
>
> **[5:22](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=322)** So that eslint is happy.
>
> **[5:24](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=324)** So it's request accessToken, a refreshToken, a profile, and the done callback.
>
> **[5:35](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=335)** So what are these arguments?
>
> **[5:36](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=336)** So the request is clear.
>
> **[5:38](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=338)** Access token is the access token we talked about before.
>
> **[5:42](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=342)** So this is then used for each subsequent API request and we use it to then request the user profile.
>
> **[5:49](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=349)** If we really wanted to create a GitHub Integration.
>
> **[5:53](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=353)** This means if we wanted to really continuously fetch information from GitHub, then we would need to store this accessToken.
>
> **[6:02](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=362)** In our case, we don't need it because behind the scenes, when this callback is called, the strategy already has used this accessToken to fetch the user profile.
>
> **[6:13](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=373)** The next argument is the refreshToken.
>
> **[6:16](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=376)** We don't need it, and it will also be empty because expire able tokens are right now, opt in feature in GitHub.
>
> **[6:25](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=385)** And we haven't enabled that.
>
> **[6:26](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=386)** So the refreshToken will be empty.
>
> **[6:29](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=389)** If enabled the feature in GitHub.
>
> **[6:31](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=391)** We would need the refreshToken to refresh the accessToken once it expired.
>
> **[6:38](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=398)** And finally, the next argument is the profile.
>
> **[6:41](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=401)** So this is really what we care about because this contains the user identity that we need for authentication.
>
> **[6:49](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=409)** And then the done callback, you know, that already is used to return from the current callback.
>
> **[6:54](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=414)** Now let's add first try-catch block.
>
> **[6:56](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=416)** So at try catch (err) and return done (err).
>
> **[7:07](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=427)** And for now up here, I will just do a console.log profile because I want to show you that and we will return done (null, false) So we will not yet try to fetch a user.
>
> **[7:25](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=445)** We will do this a bit later.
>
> **[7:29](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=449)** Next of course, we have to set up this corporate route.
>
> **[7:31](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=451)** This is where we basically get the data from.
>
> **[7:34](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=454)** So I head into routes, auth, github.
>
> **[7:40](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=460)** And the first thing I will do is I bring in passport, const passport equals require passport.
>
> **[7:53](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=473)** And then we have this route of github and there we add passport.authenticate, and we want to authenticate against GitHub, that's it.
>
> **[8:08](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=488)** So this will start this GitHub flow and start with the redirect of the browser, to GitHub.
>
> **[8:16](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=496)** And now we have to implement the callback route.
>
> **[8:19](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=499)** And as you see I don't have provided boilerplate here because now for the last chapter, I thought it would be a good idea to really do a few things from scratch so that you really know what you're doing.
>
> **[8:31](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=511)** So add router.get, and this is now /callback.
>
> **[8:37](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=517)** So this would now listen to auth GitHub callback and again at passport.authenticate('github') So the passport strategy will basically know where in the process we are, depending on the data it gets.
>
> **[8:57](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=537)** And this is again, a callback async request respond, next, and enter We add first try catch block.
>
> **[9:19](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=559)** And for now we can enter return next('not implemented') Because for now we just want to start this flow and see what happens and see the profile.
>
> **[9:34](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=574)** But we don't want to create the user yet because this process is rather complicated.
>
> **[9:38](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=578)** And we need a little bit more time for that.
>
> **[9:41](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=581)** Now let's start this application npm run dev and now I head back to GitHub.
>
> **[9:49](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=589)** And if you created two accounts, you should do the same.
>
> **[9:54](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=594)** And I know sign out here.
>
> **[9:57](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=597)** All right.
>
> **[9:58](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=598)** So now I'm signed out from GitHub and now I'm signing in again, let's say I'm already signed in with the respective user.
>
> **[10:05](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=605)** And for me, it's in this case lcola.
>
> **[10:09](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=609)** So this is the lcola user.
>
> **[10:11](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=611)** So this is the account of our user lcola and I login.
>
> **[10:18](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=618)** So now I'm logged in with this fresh user.
>
> **[10:20](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=620)** Now let's head back to Visual Studio Code.
>
> **[10:23](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=623)** Let's see if everything is running, we should be fine.
>
> **[10:27](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=627)** So now let's open localhost 3000 and I'm here again, now in the playground application.
>
> **[10:34](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=634)** And now I want to register my user.
>
> **[10:37](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=637)** And in this case, I want to sign up using GitHub.
>
> **[10:41](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=641)** So let's click on that.
>
> **[10:43](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=643)** And there we see an error that the redirect url, must match to the registered callback url for this application.
>
> **[10:49](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=649)** So that's interesting.
>
> **[10:50](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=650)** Let's see what we did wrong here.
>
> **[10:53](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=653)** So let's look into Visual Studio Code again, and there into passport index.
>
> **[10:59](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=659)** And what is it?
>
> **[11:01](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=661)** Yeah, I know it already.
>
> **[11:03](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=663)** So what I did is I used 127.0.0.1.
>
> **[11:07](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=667)** Let's see if it works with localhost as well.
>
> **[11:09](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=669)** Because on GitHub, I used localhost and these two URLs have to match.
>
> **[11:15](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=675)** That's another means of security to make sure that really the app is the same as the one that was configured before.
>
> **[11:23](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=683)** So now let's try this again.
>
> **[11:25](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=685)** I head back to the browser and reload for that to have to head back and load here.
>
> **[11:33](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=693)** And now I click sign up using GitHub again.
>
> **[11:37](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=697)** And now you see I'm now in this authorization menu we talked about before.
>
> **[11:43](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=703)** So now I'm asking if a really wants to authorize the my playground app.
>
> **[11:47](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=707)** So that's exactly what we want to see.
>
> **[11:50](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=710)** And now I'm clicking on authorized the account and I'm redirected.
>
> **[11:55](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=715)** And I get this unauthorized, which is fine because this just means that passport could not find the user because we haven't implemented it yet.
>
> **[12:04](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=724)** But when we now look into the console, we see that we get now a whole bunch of information.
>
> **[12:09](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=729)** Let's scroll all the way up and here you see, this is the profile.
>
> **[12:13](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=733)** So everything else is the raw information, but this is the profile.
>
> **[12:17](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=737)** And there is the profile ID that uniquely identifies the ID of the user.
>
> **[12:22](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=742)** And this is what we're interested in because we will use this ID to store it on the user, to identify the user again, when they try to log in, back it up again.
>
> **[12:32](https://www.linkedin.com/learning/node-authentication/prepare-passport-js-for-github-oauth2?u=76281980&t=752)** So let's head over to the next video and start implementing that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), case, (3), const (2), require (2), async (2)
> **Tools:** github (25), visual studio (3)
> **Code Identifiers:** accesstoken (5), refreshtoken (4), passreqtocallback (1)
> **Env Vars:** url (3), api (3), gwt (1), github_client_id (1), github_client_secret (1)
> **UI Navigation:** click on (5), scroll down (2)
> **Prerequisites:** install (3), set up (2), configure (1)
> **CLI Commands:** npm (2), make (1), find (1)
> **Cross-References:** we talked about (2), next video (1)

#### Extend the application for single sign-on
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=0)** - [Instructor] In our last step, we now have to implement a rather interesting flow.
>
> **[0:03](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=3)** We also need to extend the database a bit to support storing the profile ID.
>
> **[0:09](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=9)** The main challenge is that GitHub supports multiple email addresses and that for us, the email address is a mandatory field.
>
> **[0:17](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=17)** So if we get the profile with two email addresses, which one should we take?
>
> **[0:22](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=22)** So it's better to provide a way for the user to complete their profile with a valid email address.
>
> **[0:28](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=28)** And while I'm at it, I also want to let them set their username.
>
> **[0:31](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=31)** So I want them to be able to log in using GitHub but I don't want to force them to use a given username or use an arbitrary email address that might not be the one that they want to use.
>
> **[0:45](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=45)** So let's kick this off by extending the database to support arbitrary social profiles.
>
> **[0:51](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=51)** For that, I open server, models, UserModel and there somewhere down there after the verification token, I now add a structure for the profile ID.
>
> **[1:05](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=65)** And I want this to be an array because I want to be able to maybe store later a Facebook ID or a Google ID or whatever.
>
> **[1:16](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=76)** So this should be agnostic to the provider of the OAuth.
>
> **[1:22](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=82)** So I call this field oauthprofiles.
>
> **[1:25](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=85)** And as I said, this is an array, so that's a notation to create an array structure in MongoDB and in there, I can now define the data this array holds.
>
> **[1:39](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=99)** And first, I want to have a field provider and this is type: String and I also want to have a field profileId.
>
> **[1:54](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=114)** So in our case, this would be the GitHub and the profileId that we just got and this is again, most of the time a number, but I still think it's better to store it as a string.
>
> **[2:07](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=127)** And then I also want to define an index.
>
> **[2:13](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=133)** Why?
>
> **[2:13](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=133)** Because I have to look up the user by provider and profile ID and having an index here really speeds up things, especially when you have many users and this is something usually just figure out when you have many users but then it's pretty annoying to create a new index.
>
> **[2:34](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=154)** So add now userSchema.index and I create the combined index in MongoDB and for that, I add oauthprofiles.provider
>
> **[2:49](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=169)** and it can be ascending, so that's the direction of the index, the sort order.
>
> **[2:54](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=174)** And also oauthprofiles.profileId.
>
> **[3:04](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=184)** So with that, our database is now ready to deal with OAuth profiles.
>
> **[3:10](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=190)** So with that, our database is now ready to deal with social profiles and I now also have to extend the service, the user service a little bit, so open services, UserService.
>
> **[3:23](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=203)** So as I said before, I did not want to scaffold everything here.
>
> **[3:27](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=207)** So now we really have to add two more methods here and the first is createSocialUser and for that, we can basically copy the createUser but instead of the password, we now accept an argument oauthProfile.
>
> **[3:52](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=232)** So let's remove this not implemented.
>
> **[3:57](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=237)** We have to rename the function, of course.
>
> **[4:00](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=240)** createSocialUser.
>
> **[4:03](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=243)** And instead of user.password, we say user.oauthprofiles, and as this is a new user here, we can now just store the oauthprofile that we will pass in then later there.
>
> **[4:21](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=261)** And there is one more thing.
>
> **[4:23](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=263)** We also have to somehow set the password and for that, I will just set a random password.
>
> **[4:31](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=271)** The user can always use password reset later to set their own password and then can log in with username and password, as well as with the social profile but by default, the password will be just unknown to the user and random.
>
> **[4:49](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=289)** For that, we have to bring in crypto.
>
> **[4:53](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=293)** So add at the very top const crypto equals require crypto and then we use the already familiar function crypto.randomBytes and in this case, let's just use 10 bytes here and let's make it a hex string then.
>
> **[5:25](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=325)** And this will now create a new user with a social profile and a random password.
>
> **[5:31](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=331)** We also need one more function that finds a user using this oauthProfile information.
>
> **[5:38](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=338)** So we will need that later to try loading the user.
>
> **[5:42](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=342)** So I scroll down to put this method where it belongs to.
>
> **[5:47](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=347)** This is then somewhere here close to findById.
>
> **[5:52](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=352)** So add static async findByOAuthProfile
>
> **[6:03](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=363)** and there I get the provider.
>
> **[6:08](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=368)** And the profileId.
>
> **[6:12](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=372)** And there I just return UserModel.findOne, so that's now MongoDB syntax and then I add oauthprofiles and colon and then I add .elemMatch, so this matches the elements of an array and there I just pass in provider and profileId.
>
> **[6:42](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=402)** Again, you should know the shortcut syntax, so technically, this would be the same as writing something like provider: provider but no one would do that if there is this shortcut version of it.
>
> **[6:56](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=416)** And in the end, we add exec.
>
> **[6:58](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=418)** That's a little bit of a MongoDB Mongoose-ism because this then gives us back a real valid promise.
>
> **[7:07](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=427)** And with that, we can already extend now our passport function to try to find the given user.
>
> **[7:17](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=437)** So in passport, index.js, I now scroll down again to the GitHub strategy and right now, we have not much in there.
>
> **[7:28](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=448)** And first, I will now set a session variable to null and you will in a second understand what it does.
>
> **[7:37](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=457)** First, and now to request.session.tempOAuthProfile equals null.
>
> **[7:50](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=470)** So this session variable will later be used for something.
>
> **[7:56](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=476)** And in a bit, you will know for what.
>
> **[8:00](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=480)** Now I will try to load the user first.
>
> **[8:02](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=482)** So I add const user equals await UserService.findByOAuthProfile and there I now use profile.
>
> **[8:16](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=496)** So this is now what I get from the authentication OAuth request through the flow that was covered before.
>
> **[8:24](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=504)** So in profile, there is a field provider that is set by OAuth and it's, in this case, of course, GitHub and the profile also has this field id.
>
> **[8:35](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=515)** So we try now to load the user from the database with that profile.id that we got and now we have to handle the case that we don't find the user in the database.
>
> **[8:45](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=525)** So we will now say if not user.
>
> **[8:49](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=529)** Then we want to now store this user into the session because we need it later because we have a little bit of an extended flow because we want the user to complete their information, so we need some way to persist this OAuth information.
>
> **[9:07](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=547)** So I do request.sessoin.tempOAuthProfile equals and now I set provider to profile.provider.
>
> **[9:18](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=558)** I'm lazy, I'm copy, pasting here.
>
> **[9:21](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=561)** And the profileId is the profile.id, profile.id
>
> **[9:29](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=569)** that we get here in this request.
>
> **[9:33](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=573)** And now I can just return done null, no error and user.
>
> **[9:43](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=583)** So if we found the user, we will send it.
>
> **[9:44](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=584)** If we did not find the user, nothing will happen.
>
> **[9:48](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=588)** But now there comes a key component because where will we now end up in case no user was found?
>
> **[9:56](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=596)** Before, we saw that we get this default, not authenticated message through passport but we now want to do something else.
>
> **[10:04](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=604)** We want to let the user extend the information because the social login likely was valid but still, we have no valid user.
>
> **[10:13](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=613)** So we now have to head into routes, auth, github.js and there we can first do one thing because this route of get for get, auth, GitHub, we will never end up in the body, in the callback there because this only starts the GitHub flow, so we can remove everything here and just leave it with passport.authenticate.
>
> **[10:42](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=642)** This starts the GitHub flow because the real logic then happens in the callback.
>
> **[10:48](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=648)** Then starting here in line 13.
>
> **[10:51](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=651)** And in this callback, now the, let's say magic happens because now I'm saying this config argument, so a second argument after the strategy named GitHub and now add failureRedirect and the failureRedirect is now /auth/github/complete.
>
> **[11:19](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=679)** I either find the user, then everything is fine and the user is authenticated and we will handle this then in the callback done here now, starting at line 18.
>
> **[11:31](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=691)** But if there is any failure and even if the social login was valid but we could not find the user, we will end up in the failure redirect and we will implement it later.
>
> **[11:42](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=702)** So first, let's implement what happens when we end up here.
>
> **[11:46](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=706)** If we end up here, we found the user, everything is fine, so the user was already created and the profile is valid and they have the social login attached to it.
>
> **[11:56](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=716)** So we can now say request.session.messages.push
>
> **[12:04](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=724)** and the text is you are logged in via GitHub now.
>
> **[12:16](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=736)** And type this success and then we do a return res.redirect and as before, with the regular login, we do a request.session.returnTo.
>
> **[12:36](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=756)** So this is as before.
>
> **[12:38](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=758)** If the user tried to access some page they were not allowed to go, then the returnTo URL is set on the session and we send them back there once they are logged in successfully or you send them to the index page.
>
> **[12:55](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=775)** So this is now the callback.
>
> **[12:57](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=777)** As we know, the real work really happens within passport, within the strategy.
>
> **[13:03](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=783)** So this does everything so that we even get to the profile.
>
> **[13:07](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=787)** Now we have to implement this complete route.
>
> **[13:11](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=791)** And there we have actually a gap in the post route and we start with router.get /complete.
>
> **[13:24](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=804)** And it's an async function.
>
> **[13:27](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=807)** Request, response, next.
>
> **[13:32](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=812)** First, let's do the standard try catch block.
>
> **[13:36](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=816)** Try catch error, return next error.
>
> **[13:44](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=824)** And in the try block, we now evaluate if we have this tempOAuthProfile.
>
> **[13:52](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=832)** If we don't have it, then actually, the whole authentication flow has failed because we did not end even in the callback with the profile.
>
> **[14:04](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=844)** So I can now add if not request.session.tempOAuthProfile.
>
> **[14:16](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=856)** Make sure that you don't have a typo.
>
> **[14:18](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=858)** It's a pretty long variable here.
>
> **[14:20](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=860)** And I say request.session.messages.push
>
> **[14:30](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=870)** and the text is login via GitHub has failed.
>
> **[14:40](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=880)** And the type is, in this case, danger.
>
> **[14:46](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=886)** And we can then right away return response.redirect to /auth/login.
>
> **[14:57](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=897)** So let's send them back to the login page.
>
> **[15:00](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=900)** Something went wrong.
>
> **[15:03](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=903)** Now we come to a rather interesting case and this is contra linking.
>
> **[15:06](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=906)** So it's possible that a user is already logged in and then tries to link their GitHub profile to their account to in the future use GitHub for logging in.
>
> **[15:17](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=917)** So we have to handle that as well and for that, we have to extend the correctly logged in user now with the profile information.
>
> **[15:26](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=926)** And for that, I now add if request.user.
>
> **[15:30](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=930)** So we have a logged in user.
>
> **[15:33](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=933)** We ended up here.
>
> **[15:34](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=934)** The GitHub login went into the failure state.
>
> **[15:38](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=938)** We have a tempOAuthprofile and we have a user.
>
> **[15:42](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=942)** So this means that this user basically now just needs to get this profile information attached and everything is fine.
>
> **[15:49](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=949)** So I add const user equals await UserService.findById and I use request.user.id.
>
> **[16:05](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=965)** And now I just have to extend this oauthprofile property.
>
> **[16:09](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=969)** So I say if not user.oauthprofiles, so there is no property oauthprofiles on this user.
>
> **[16:19](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=979)** I will now set oauthprofiles to an array.
>
> **[16:28](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=988)** And then I can simply user.oauthprofiles.push
>
> **[16:36](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=996)** and there I just push in this request.session.tempOAuthProfile because there is the provider and the profileId in there so we can use that as is.
>
> **[16:48](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1008)** And then we can just await user.save.
>
> **[16:52](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1012)** And then let's put out a message.
>
> **[16:55](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1015)** Let's copy the one from over there but now make it a success and the message is your GitHub profile was successfully linked!
>
> **[17:14](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1034)** And we can again do this the same that we did before.
>
> **[17:18](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1038)** I'm now copying that from line 25.
>
> **[17:21](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1041)** So we'll have a successful login, one way or the other.
>
> **[17:28](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1048)** And we can return res.redirect so session.returnTo or to the next page.
>
> **[17:35](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1055)** But if all of that is not true, we can do a response.render and I created the template for that for you already.
>
> **[17:46](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1066)** So it's in the view's directory.
>
> **[17:48](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1068)** There is an auth/complete and this is now the form that lets you add the username and the email address and the page's registration, just to mark it in the navigation.
>
> **[18:09](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1089)** So let's look into the browser and see where we're at right now.
>
> **[18:13](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1093)** So I'm heading into the browser.
>
> **[18:15](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1095)** Click on Registration.
>
> **[18:17](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1097)** It doesn't really matter because the functionality's always the same actually with the sign up or log in via GitHub and I click on that.
>
> **[18:27](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1107)** And you see that I now end up on this page, please complete your profile.
>
> **[18:32](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1112)** And this form now will post its data to auth/github/complete.
>
> **[18:38](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1118)** So we now have to create this post route that receives the data and then completes the user and then saves the user.
>
> **[18:45](https://www.linkedin.com/learning/node-authentication/extend-the-application-for-single-sign-on?u=76281980&t=1125)** We will do this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (5), case, (4), const (3), await (3)
> **Code Identifiers:** profileid (7), tempoauthprofile (6), returnto (3), createsocialuser (2), oauthprofile (2)
> **Tools:** github (19)
> **CLI Commands:** find (5), make (3)
> **Definitions:** is a  (3), is an  (2), means that (1)
> **UI Navigation:** scroll down (2), click on (2)
> **File Paths:** index.js (1), github.js (1)
> **Env Vars:** url (1)

#### Finalize and test the single sign-on flow
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=0)** - [Instructor] The last thing we are missing now is this post complete route.
>
> **[0:03](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=3)** So let's look into server, routes, auth and GitHub.
>
> **[0:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=11)** And let's scroll down here, and here we have the get complete route.
>
> **[0:16](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=16)** And further down, let's now implement this post route here.
>
> **[0:21](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=21)** And it turns out that this route is very similar to the one we have for the registration.
>
> **[0:27](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=27)** So what I'm doing now is I open registration JS, and I will now use this post register route and just copy it over.
>
> **[0:38](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=38)** Of course, we have to change a few things, but it gives us a good starting point.
>
> **[0:45](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=45)** So the first thing I'm doing is I change post register to complete.
>
> **[0:52](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=52)** So this is where we end up when the user provides username and email, so it's valid to do validation here, just not for the password, because the password is, of course, not provided, because it's a single sign on flow.
>
> **[1:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=71)** But what we need to bring in is now this validation middleware, and that's easy.
>
> **[1:16](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=76)** So we scroll up and under the user service, I'll now add const validation equals require, and we have to go two levels up.
>
> **[1:29](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=89)** Yes, there are the middlewares and there we have validation.
>
> **[1:35](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=95)** All right, so with that, we can scroll back to the post route and do our changes here.
>
> **[1:42](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=102)** So first of all, the validation here, starting in line 72, can stay as it is.
>
> **[1:49](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=109)** Then, we check for existing email and existing username.
>
> **[1:53](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=113)** That's also still valid, so that's still the same, so we can leave everything here the same.
>
> **[2:00](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=120)** And here, down there, starting in line 100, we render auth registration, which is not where we want to end up now.
>
> **[2:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=131)** We want to render auth complete, of course, because that's the complete route.
>
> **[2:16](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=136)** And then I want to render the form again, where the user adds the username and password.
>
> **[2:22](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=142)** And also show the errors that occurred when we end up here.
>
> **[2:26](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=146)** So if we don't run into an error, we end up down here, and now we have to change, create user into create social user.
>
> **[2:37](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=157)** And as you know, we pass in the username, the email, and then we want to pass in this temporary OAuth profile.
>
> **[2:47](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=167)** And let's copy that.
>
> **[2:49](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=169)** We have it in the session.
>
> **[2:51](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=171)** So it's the request session temp OAuth profile, because it contains the provider, GitHub, and also the profile ID.
>
> **[3:01](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=181)** So you can now replace the password with just this object that is stored in the session.
>
> **[3:09](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=189)** And then we say here, your account was created and linked with GitHub, so that we really know that we are in the GitHub flow now.
>
> **[3:21](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=201)** And let's see if we have to do something else.
>
> **[3:26](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=206)** No, that looks all good.
>
> **[3:29](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=209)** So now we should be good.
>
> **[3:32](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=212)** Right, now we are ready to test it out.
>
> **[3:34](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=214)** So I'm heading into the browser.
>
> **[3:36](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=216)** The first thing I'm doing is I'm also opening this account that I have on GitHub for lcorla and go back into settings, and when I scroll down, there is this applications link in the menu bar.
>
> **[3:53](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=233)** And there I had to authorize OAuth apps, because there, you see, this is the OAuth app that we authenticated for the user in the flow before.
>
> **[4:03](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=243)** And I want to revoke that now again, to really test all scenarios that we have now with authentication.
>
> **[4:10](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=250)** So I choose revoke all and I have to type in my username to confirm that, and now this is revoked, so we end up in this authorization flow also on the page to authorize this OAuth app for this given user.
>
> **[4:27](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=267)** So let's try that out.
>
> **[4:28](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=268)** So I'm heading into registration.
>
> **[4:31](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=271)** I click on sign up using GitHub, and you see here, I'm really ending up in this authorization flow again.
>
> **[4:39](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=279)** And now I click cancel to test the scenario when the user does not want to authorize us, and let's see what happens then.
>
> **[4:50](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=290)** And you see, yeah, we end up in the log in form again.
>
> **[4:54](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=294)** So that's okay, but if you remember that, if we look into the code and up here, this is the get complete route.
>
> **[5:04](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=304)** We actually would want to show an error here.
>
> **[5:07](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=307)** So we would want to show log in via GitHub has failed.
>
> **[5:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=311)** But for some reason, now our messages do not work.
>
> **[5:15](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=315)** And I was struggling with finding the reason for that before.
>
> **[5:18](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=318)** So I'm now showing you how I found out what's wrong here.
>
> **[5:22](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=322)** So for that, I'm now heading into the browser again.
>
> **[5:27](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=327)** Now I'm opening Chrome developer tools and the network tab.
>
> **[5:31](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=331)** Let's try this flow again.
>
> **[5:33](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=333)** So I click on log in via GitHub.
>
> **[5:36](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=336)** Then, I cancel.
>
> **[5:38](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=338)** So now I'm ending up here again, very nicely.
>
> **[5:41](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=341)** You also see the whole flow of redirects that we have here.
>
> **[5:46](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=346)** So here you see, for instance, we are on a redirect that contains the callback and the error with access denied.
>
> **[5:55](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=355)** And when I click on this, you also see, I can also disable this button.
>
> **[6:01](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=361)** So there is this checkbox show filtered out request cookies, and if I look at that, you see that request cookies have been filtered directly by the Chrome browser.
>
> **[6:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=371)** And when I hover over this same site strict, you see that this cookie was blocked, because we have same site strict as cookie option.
>
> **[6:22](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=382)** And this means, technically, that Chrome filters a cookie that comes in through a redirect from GitHub.
>
> **[6:29](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=389)** So from a third party and not from the same site, and this is a problem because then, suddenly, we create, basically, a new session on the server, which is obviously a problem, And so that's also the reason why we suddenly cannot write the messages into the session.
>
> **[6:48](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=408)** So we have to change something here.
>
> **[6:50](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=410)** And this is rather easy, while the theory behind this is rather complex, because it's about standards and cookies.
>
> **[6:57](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=417)** But for us now, let's just fix this by heading into app JS And there, if we scroll down, you see that there is the same site strict, and I will now change this to lax.
>
> **[7:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=431)** So I'm having to relax these security constraints a little bit, otherwise, the session will be gone on this redirect.
>
> **[7:20](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=440)** And now I can try this again.
>
> **[7:23](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=443)** So I will now try to log in via GitHub.
>
> **[7:29](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=449)** Then I cancel.
>
> **[7:31](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=451)** And you see now I also get this error message, because the session is preserved, and this is technically what we really want to have.
>
> **[7:40](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=460)** Now, let's try this again.
>
> **[7:41](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=461)** So I click again on log in via GitHub, but now I see authorize.
>
> **[7:48](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=468)** And I come back.
>
> **[7:50](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=470)** This is now the get routes to complete.
>
> **[7:53](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=473)** And there I will now first try lcorla, lcorla@[explorecalifornia.com](https://explorecalifornia.com)
>
> **[8:06](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=486)** And let's click on create account.
>
> **[8:09](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=489)** And you see, we get this error message that the email address or the username exists already.
>
> **[8:13](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=493)** Also exactly as intended.
>
> **[8:14](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=494)** See already, I'm really trying all the variations here.
>
> **[8:20](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=500)** So now let's try lcorla2, still the same email address.
>
> **[8:25](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=505)** And you see, I get the same error still.
>
> **[8:28](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=508)** So now let's use this email address as well, lcorla2.
>
> **[8:32](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=512)** And now let's click on create account.
>
> **[8:37](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=517)** And now I see that my account was created and linked to GitHub.
>
> **[8:40](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=520)** And now I still have to log in via GitHub.
>
> **[8:45](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=525)** And what I also have to do is, to create the valid user, is I have to verify the email address, and I do this as we did before, by just clicking on this verify user button.
>
> **[8:58](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=538)** Now the user is verified.
>
> **[9:00](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=540)** And now, I can hit log in and log in via GitHub.
>
> **[9:08](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=548)** and I'm lcorla2.
>
> **[9:09](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=549)** So now, I don't have to enter anything.
>
> **[9:12](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=552)** Behind the scenes though, we really made the whole round trip here.
>
> **[9:17](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=557)** So again, we called into GitHub.
>
> **[9:19](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=559)** So the whole authentication flow was running now behind the scenes still.
>
> **[9:24](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=564)** And then we got the profile with the profile ID, and we were able to pull up the user and lock in the user then.
>
> **[9:33](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=573)** So now let's try something else.
>
> **[9:35](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=575)** For that, I head to the user list.
>
> **[9:38](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=578)** And I have added one more feature to the user list.
>
> **[9:42](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=582)** You see that there is this red GitHub icon.
>
> **[9:46](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=586)** With that you can unlink the GitHub profile from this user.
>
> **[9:51](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=591)** It's just deleting this profile information from the database.
>
> **[9:56](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=596)** So if I click on that, this is canceled.
>
> **[9:58](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=598)** Now, the lcorla user is no longer associated with the user on GitHub.
>
> **[10:05](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=605)** This is good because now I want to link the lcorla, so the real lcorla user, with the GitHub profile, because sometimes you have an existing user and you now want to link this user to an existing social profile.
>
> **[10:21](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=621)** Because, in the future, they want to use social login, and we can do that easily.
>
> **[10:25](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=625)** And technically, the flow for that is completely identical with the authentication flow.
>
> **[10:31](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=631)** So you can basically click on any GitHub button that I have here in the app, because they all will go to auth GitHub, and then start this flow.
>
> **[10:41](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=641)** So let's log out lcorla.
>
> **[10:44](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=644)** And while we are here, let's delete this lcorla user, so to avoid confusion.
>
> **[10:51](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=651)** Now, let's log in with this user.
>
> **[10:58](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=658)** So now, I'm authenticated regularly, as we were authenticated before.
>
> **[11:04](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=664)** And now, I'm heading to my account, and there I have this connect account with GitHub button.
>
> **[11:11](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=671)** Again, you see in the browser, on the bottom left, this points to auth GitHub.
>
> **[11:17](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=677)** That's exactly the same flow.
>
> **[11:18](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=678)** It's just now, as you know, that in our route, and let's look at that maybe again, so in GitHub JS, if we look at this get complete route, you see that we look into the request, if there is an authenticated user, and if so, we just assign this profile to the user by saving the profile information to it, so, with that, we can just click on connect account with GitHub and you see now, my GitHub profile was successfully linked again.
>
> **[11:52](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=712)** Now, when I log out lcorla and I go to log in, I can now log in via GitHub.
>
> **[12:00](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=720)** And you see, now I'm lcorla again.
>
> **[12:02](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=722)** So now the whole GitHub authentication flow works end-to-end.
>
> **[12:07](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=727)** And if you look into the database, so in models, user model, again, you see that we are agnostic to which OAuth provider we use.
>
> **[12:19](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=739)** So this could be as well, Facebook or Google or something else.
>
> **[12:22](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=742)** So with this structure, you can really authenticate against any OAuth provider that is out there.
>
> **[12:32](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=752)** So all you have to do is basically install the respective passport strategy, configure it, and then also add the respective copic routes, and you're good to go.
>
> **[12:42](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=762)** The database would be ready for it.
>
> **[12:45](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=765)** And with that, we have a working application that supports various kinds of authentication.
>
> **[12:51](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=771)** Of course, we can improve a few things.
>
> **[12:54](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=774)** For instance, it does not make sense to show registration or log in for a user that is already logged in, but this is something you just have to fix in the template.
>
> **[13:04](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=784)** I just left it this way to make the handling in the Playground app, and during development, a little bit simpler.
>
> **[13:10](https://www.linkedin.com/learning/node-authentication/finalize-and-test-the-single-sign-on-flow?u=76281980&t=790)** But if you really understood everything we did now, within this course, you can really say that you have authentication with Node JS, pretty much down.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), else. (3), pass (2), const (1), require (1)
> **Tools:** github (28)
> **UI Navigation:** click on (8), scroll down (3), go to (2), scroll up (1), in the menu (1)
> **CLI Commands:** make (2), node (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for instance (2)
> **Prerequisites:** install (1), configure (1)
> **URLs:** [explorecalifornia.com](https://explorecalifornia.com) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=0)** - [Daniel] Thank you for taking this course.
>
> **[0:01](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=1)** I hope you enjoyed it.
>
> **[0:03](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=3)** In this course, we covered the key concepts of authentication with Node.js, and we also went through more complex topics like JWT or single sign-on.
>
> **[0:12](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=12)** I'm convinced that you are now ready to implement your own authentication flows, especially with the help of Passport.js.
>
> **[0:20](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=20)** If you want to expand your knowledge in authentication, there is a dedicated course in OAuth and OpenID Connect available in the library.
>
> **[0:28](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=28)** If you were a little struggling with the usage of databases in this course, why don't you take my course, "Node.js Databases" next?
>
> **[0:36](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=36)** Or if you feel you want to expand your knowledge in Express, there are the courses "Building Websites with Node.js and Express", and "Advanced Express" waiting for you.
>
> **[0:46](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=46)** Either way, I would also recommend you to just get going, build your own website, add authentication, and learn as you go.
>
> **[0:54](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=54)** If you liked this course, I'd be happy if you click on the like button on the top-right of this page.
>
> **[0:58](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=58)** And I'm also always happy if you reach out to provide feedback.
>
> **[1:02](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=62)** You find me on LinkedIn or on Twitter, and you can also use the Q&A function here on this page.
>
> **[1:09](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=69)** Again, thank you for taking this course.
>
> **[1:11](https://www.linkedin.com/learning/node-authentication/next-steps?u=76281980&t=71)** I'm Daniel Khan.

> [!info]- Semantic Content
>
> **File Paths:** node.js (3), passport.js (1)
> **CLI Commands:** node (3), find (1)
> **Code Keywords:** function (1)
> **Env Vars:** jwt (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [daniel] (1)


## Path Context

### In [[Explore Web Development with Node.js]]
← [[Node.js- Securing RESTful APIs]] | **10 of 11** | [[Node.js- Microservices]] →

## Appears In

- [[Explore Web Development with Node.js]]

## Related Courses

_Courses sharing skills:_

- [[PHP- User Authentication]] — Digital Authentication
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js

---

[↑ Back to top](#)