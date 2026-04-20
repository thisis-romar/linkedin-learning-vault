---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: web-servers-and-apis-using-c-plus-plus
url: "https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus"
duration_minutes: 169
duration: 2h 49m
level: Intermediate
updated: 4/1/2025
learners: 8962
skills:
  - Web Servers
  - C++
  - Application Programming Interfaces (API)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHrBt9kMUW87g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568666500963?e=2147483647&amp;v=beta&amp;t=cW6jJz22RAucIpxgPlHj10WipwN3hS-RckYxD80DDVQ"
linkedin_topic: Software Development
learning_paths:
  - Getting Started with C++
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/web-servers
  - skill/c
  - skill/application-programming-interfaces-api
status: not-started
created: 2026-04-19
---

![Web Servers and APIs using C++](https://media.licdn.com/dms/image/v2/C4E0DAQHrBt9kMUW87g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568666500963?e=2147483647&amp;v=beta&amp;t=cW6jJz22RAucIpxgPlHj10WipwN3hS-RckYxD80DDVQ)

# Web Servers and APIs using C++

> C++ has re-emerged as a go-to language for developing high-performance websites and web applications. C++ compiles to machine code, making it faster to start up and execute. For users, this means less time waiting for a site to render. This course teaches developers how to build a website powered by a MongoDB database and deploy it with a Heroku cloud server, all with C++. Instructor Troy Miles—a 

> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus) | 2h 49m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Troy Miles]]

## Resources

- Exercise files available

## Skills Covered

- Web Servers
- C++
- Application Programming Interfaces (API)

## Table of Contents

### Introduction

#### Why use C++ to make a website?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=0)** - [Troy] Modern C++ is an amazingly powerful language.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=3)** It has the same features of other languages and one thing they don't, it compiles down to machine code.
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=10)** On the web, this means your users will wait less for your site to render.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=14)** Our goal in this LinkedIn Learning course is simple, show you how to build a website in C++ using MongoDB as the database and deploy it to the internet using Heroku as our cloud server.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=25)** Hi, my name is Troy Miles and I'm a Senior Software Engineer.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=29)** So join me as we take a look at all C++ has to offer.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [troy] (1)


### 1. Installing Our Tools

#### Installing Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=0)** - [Instructor] One of the hardest parts of using C++ is getting used to the complexities of its build chain.
>
> **[0:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=5)** Programs have separate build and link steps.
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=8)** Libraries must be installed on both development, build, and production machines.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=12)** If any piece isn't in sync, cryptic error messages appear.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=17)** Docker is the cure for this pain.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=19)** It enables us to create an image that contains all of the tools we need installed correctly and use that image for both development and production.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=28)** We will use the Community Edition of Docker, which is available for free at store.[docker.com](https://docker.com).
>
> **[0:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=36)** Click on the gray Community CE button.
>
> **[0:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=41)** Click on the button for your operating system.
>
> **[0:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=43)** Docker supports macOS, Windows, and most versions of Linux.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=47)** I'm gonna choose the Mac.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=51)** Be sure to download the stable version of Docker.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=54)** The Edge version has experimental features and shouldn't be used for development.
>
> **[0:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=58)** So let's click on the stable.
>
> **[1:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=62)** Once the package finishes downloading, open it and finish the installation.
>
> **[1:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=66)** When you finish, you will have the Docker app available from your desktop, and the Docker CLI from the terminal.
>
> **[1:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=75)** So here is the Docker app.
>
> **[1:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=80)** And if we go to the terminal, I can type docker -- version.
>
> **[1:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=86)** And there's the Docker CLI.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (10)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** cli (2)
> **Tools:** terminal (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** macos (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Exercise Files:** download the (1)

#### Installing Atom
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=0)** - [Instructor] You can use any programming editor you'd like in this course.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=3)** I'll be using Atom.
>
> **[0:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=5)** It is a free and open-source editor from GetHub.
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=7)** To install it, head over to [atom.io](https://atom.io), download the version for your OS, and follow the installation instructions.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=15)** I've already installed it on my machine.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=18)** I won't be using many of Atom's advanced features, but one that I will use is it's ability to launch from the command line.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=25)** I will type atom and then the name of a file or directory to open it in the editor.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=30)** This can save you a lot of time trying to find a file via the finder or explorer.

> [!info]- Semantic Content
>
> **Tools:** atom (4), command line (1)
> **CLI Commands:** find (1)
> **URLs:** [atom.io](https://atom.io) (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=0)** - [Instructor] Welcome to our C++ web development journey.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=3)** In this tutorial, you'll build your first web server using C++ and the Crow framework.
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=10)** I'll containerize with Docker.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=12)** We'll explore modern C++ web development techniques that are perfect for creating high-performance services.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=19)** Follow along and you will have a working web server in minutes.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=24)** The quickest way for us to get started is to use Git.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=28)** We can use my GitHub repo, which is hosted at [https://github.com/Rockncoder](https://github.com/Rockncoder) /web-servers-and-apis-using-cpp with each word separated by a dash and clone it to a directory named cppweb.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=51)** If you don't have Git installed on your machine, you can go to the repository, find the green Code button, click the down arrow on the right side of the button, and then click the Download ZIP link.
>
> **[1:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=71)** Once the file is downloaded, unzip it to a directory named cppweb and you'll be ready to roll.
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=79)** We start in the project directory cppweb.
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=99)** Your directory structure should now look like this.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=101)** We have three directories, data, hello-crow-eb, and hello_crow.
>
> **[1:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=112)** Let's open Visual Studio Code here.
>
> **[2:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=128)** Let's take a look at our Dockerfile.
>
> **[2:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=137)** Here's our two-stage Dockerfile in action.
>
> **[2:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=140)** First stage is our builder.
>
> **[2:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=142)** It starts with a slim Debian base, grabs all of our dev tools.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=152)** cmake, make, Boost libraries and MongoDB's C++ drivers.
>
> **[2:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=159)** We set up MongoDB properly by installing both its C core, libmongoc and C++ wrapper.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=166)** Create a cozy spot for our code, copy it in, and let cmake and make work their magic to build our executable.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=180)** Then comes the cool part.
>
> **[3:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=182)** Our runtime stage starts fresh with a clean Debian image and we just snag that finished executable, plus the MongoDB shared libraries from the builder.
>
> **[3:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=193)** No need for all those dev tools in production.
>
> **[3:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=196)** We tell Docker we'll be using port 8080 and boom, when this container fires up, it'll run our Crow server ready to handle both web traffic and MongoDB operations.
>
> **[3:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=207)** Lean, clean, and ready to deploy.
>
> **[3:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=211)** Next up, we have our .dockerignore.
>
> **[3:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=215)** The .dockerignore file is our project's cleanup crew.
>
> **[3:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=218)** It tells Docker which files to ignore when moving them from the host machine to the container, no compiled stuff like object files or libraries, no executables, and we're skipping the README in our container build.
>
> **[3:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=232)** It keeps your repository and Docker images lean and clean, focusing just on what matters: the source code.
>
> **[4:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=240)** Pretty handy when you don't want all those build artifacts cluttering up your workspace.
>
> **[4:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=248)** Now let's go into our hello_crow file
>
> **[4:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=259)** and let's take a look at .gitignore.
>
> **[4:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=262)** Here's the .gitignore file.
>
> **[4:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=264)** For us, it's nearly identical to the .dockerignore.
>
> **[4:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=267)** Not much to see here. Let's move on.
>
> **[4:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=271)** We've got our CMakeLists.txt.
>
> **[4:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=274)** This CMakeLists.txt file is your recipe for a C++ web server.
>
> **[4:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=280)** It grabs Boost and MongoDB, and here's the cool part, it bakes the Boost libraries right into your executable while keeping MongoDB flexible.
>
> **[4:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=289)** Sure, the static Boost makes things a bit bigger, but it's more portable.
>
> **[4:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=295)** Add in some threading magic with pthreads and MongoDB connectivity, and boom, you've got yourself a fully loaded Hello, Crow web server ready to handle both web traffic and database operations.
>
> **[5:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=309)** Check it out.
>
> **[5:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=310)** Crow_all.h is your entire web framework in one header file.
>
> **[5:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=315)** It's basically Flask for C++, letting you whip up endpoints with dead simple syntax.
>
> **[5:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=321)** Want a REST API?
>
> **[5:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=323)** Just slap a crow route on there.
>
> **[5:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=325)** Toss in a Lambda and you're cooking.
>
> **[5:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=327)** It handles all the HTTP heavy lifting, request parsing and JSON stuff under the hood.
>
> **[5:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=333)** Single header, zero fuss.
>
> **[5:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=336)** That's why they call it a micro framework.
>
> **[5:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=338)** Dive into the header yourself sometimes.
>
> **[5:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=340)** It's a great way to see how a modern C++ web framework ticks.
>
> **[5:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=346)** Main.cpp, here's our bare bones web server in action.
>
> **[5:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=350)** Just a handful of lines to get up and running.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=354)** We create a Crow app, set up a root route that shoots back a quick Hello, Crow in HTML, and then the cool part, it auto grabs a port from your environment variables or defaults to 8080 if none is set.
>
> **[6:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=370)** Finally, we kick it in gear with multithreading enabled because why not make it speedy?
>
> **[6:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=375)** Super clean, super simple, that's the beauty of Crow.
>
> **[6:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=380)** Here's with cooking.
>
> **[6:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=382)** Docker build with a -t hello_crow:latest tags our image with a friendly name.
>
> **[6:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=390)** That little dot at the end, it's telling Docker, hey, use the Dockerfile right here in this directory, one command to build your container from scratch.
>
> **[6:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=399)** Sweet and simple. Let's go ahead and build it.
>
> **[7:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=428)** This is where the magic happens.
>
> **[7:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=429)** We're firing up our container with a --rm to keep things tidy.
>
> **[7:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=435)** It'll clean itself up when we're done.
>
> **[7:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=437)** That -p 8080:8080 is saying, hey, connect my computer's port to the container's port so we can actually talk to our Crow server.
>
> **[7:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=450)** Then Hello, Crow is just telling Docker which image to run.
>
> **[7:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=455)** One command and boom, you got yourself a web server ready to rock.
>
> **[7:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=459)** So let's go ahead and run this.
>
> **[7:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=463)** Now, just pop open your favorite browser
>
> **[7:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=474)** and go to localhost: 8080 and boom, you'll see your Crow server respond with Hello, Crow right there in your browser.
>
> **[8:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=491)** Port mapping we set up is doing all the heavy lifting, connecting your browser straight to the container, and if we return to the terminal and type Control + C, the Crow server will stop and exit the container.
>
> **[8:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=509)** The container is also removed from the container registry.
>
> **[8:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=514)** Congratulations on launching and stopping your first web server.
>
> **[8:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=520)** You successfully ran a containerized application and learned how to properly terminate it using Control + C.
>
> **[8:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=526)** This fundamental Docker skill will serve you well throughout the course.
>
> **[8:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=530)** Well done.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (8), make (3), git (2), find (1), unzip (1)
> **Code Keywords:** let (8), this. (2), super (2), static (1), lambda (1)
> **Env Vars:** zip (1), readme (1), rest (1), api (1), http (1)
> **File Paths:** cmakelists.txt (2), crow_all.h (1), main.cpp (1)
> **Tools:** github (2), visual studio (1), terminal (1)
> **Code Identifiers:** hello_crow (3)
> **Prerequisites:** set up (3)
> **Ports:** port 8080 (1), :8080 (1)

#### Adding a volume
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=0)** - [Instructor] We are going to work on our host machine by build and run on the container.
>
> **[0:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=5)** In order to edit files on the Docker container from our host machine, we are going to create a volume.
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=10)** A volume is a directory shared by the host machine and one or more Docker containers.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=15)** We add a volume with the -v option of the docker run command.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=21)** The volume option begins with a -v, is followed by a space, and two halves separated by a colon.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=30)** The left half is the absolute path to the directory of the host machine.
>
> **[0:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=34)** The right half is the absolute path to the directory on the container.
>
> **[0:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=40)** I am going to create my volume using the cppweb directory that I created on the desktop.
>
> **[0:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=45)** Here is the Docker command to do that.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=49)** Please substitute your directory path for mine.
>
> **[0:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=52)** So it's docker run
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=54)** - v /Users /troymiles /Desktop /cppweb: /usr/src and /cppweb -ti cppbox:
>
> **[1:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=83)** latest bash.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=87)** Do note, the rest of the command is stuff we've seen before.
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=90)** The -ti puts Docker in terminal interactive mode, cppbox:latest is our local version of the cppbox image we built previously, and finally, bash puts us in the container's bash shell.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=105)** In the container, navigate to cd /usr /src /cppweb.
>
> **[1:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=117)** If we do an ls here, we can see the cpp box directory that we created.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=122)** What we're gonna do is we're gonna say touch, MY_FILE.txt, and this will create a file in the container.
>
> **[2:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=132)** We do ls we can see that file.
>
> **[2:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=135)** Now if we go back to the host machine, we go back to cppweb, we do an ls, we can see the same file.
>
> **[2:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=145)** MY_FILE.txt right there.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=147)** By using a volume, we are able to edit on our host machine, and build on the container.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), ls (3), cd (1)
> **Tools:** bash (3), terminal (1)
> **File Paths:** my_file.txt (2)
> **Env Vars:** my_file (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1), - v (1)
> **Code Keywords:** finally, (1)
> **UI Navigation:** navigate to (1)

#### Building Crow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=0)** - [Instructor] Crow is a C++ web micro framework.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=3)** It is available at [github.com/ipkn/crow](https://github.com/ipkn/crow).
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=8)** It is inspired by Flask, which is written in Python.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=12)** While Crow is not well known, it is well-liked with over four thousand stars on GitHub.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=17)** It is also easy to understand, easy to use, and fast.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=21)** Plus, it is header-only.
>
> **[0:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=23)** Which means to use it, all you need to do is include its header file in your project.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=29)** We need to download its header file.
>
> **[0:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=31)** Go to [github.com/ipkn/crowreleases](https://github.com/ipkn/crowreleases), or click the release link.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=38)** Scroll down 'til you see crow_all.h.
>
> **[0:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=42)** Click it to download the header file.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=47)** And we will copy it from the downloads, to the desktop to our cppweb, right there.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=54)** Let's start a new project.
>
> **[0:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=56)** On the container from the cppweb directory, create a new directory, hello_crow.
>
> **[1:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=64)** cd into that directory.
>
> **[1:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=69)** Let's put a copy of crow_all.h here as well.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=74)** cp ../crow_all.h and a single period.
>
> **[1:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=84)** And let's return to our editor with hello_crow as the project directory.
>
> **[1:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=88)** So we're gonna say atom .
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=94)** Now we have hello_crow.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=97)** We have the crow_all.h file.
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=99)** From right here, we're gonna do a right-click on the directory name and we're gonna say, new file and we're gonna create main.cpp.
>
> **[1:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=108)** We're gonna do that one more time and we're gonna create new file, and this one's gonna be CMakeLists.txt
>
> **[2:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=121)** CMakeLists.txt with the C, M and the L capitalized.
>
> **[2:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=126)** From within our hello_crow main.cpp let's go ahead and create our simple server.
>
> **[2:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=134)** We're gonna start out by saying #include crow_all.h.
>
> **[2:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=143)** We're gonna say using namespace std; We'll create our main function.
>
> **[2:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=153)** All C++ programs begin with the main function.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=157)** We're gonna say int argc, char pointer argv and square brackets.
>
> **[2:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=169)** Open and close curly braces.
>
> **[2:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=172)** Then we're gonna create our app variable.
>
> **[2:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=174)** So it's crow::SimpleApp app.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=181)** Then we're gonna create our first route.
>
> **[3:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=183)** CROW_ROUTE.
>
> **[3:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=186)** And we pass in the app variable and we pass in what the route is triggered by.
>
> **[3:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=193)** That's gonna be a string and just a forward slash.
>
> **[3:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=197)** Then we're gonna have a pair of parenthesis, square brackets, open and close parenthesis, open and close curly braces and a semicolon.
>
> **[3:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=209)** Then inside the curly brackets we're gonna say return and we're gonna return a string and that string is gonna be div h1.
>
> **[3:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=221)** Hello, Crow.
>
> **[3:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=226)** We're gonna close the h1 tag.
>
> **[3:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=229)** Close the div.
>
> **[3:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=232)** And there is our extremely simple webpage.
>
> **[3:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=237)** Then we're gonna say char pointer port.
>
> **[4:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=242)** We need to get which port we should use and we're gonna get that from an environment variable named PORT.
>
> **[4:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=252)** getenv PORT.
>
> **[4:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=255)** We need to cast it to a string.
>
> **[4:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=258)** We're gonna do a uint16_t and call it iPort and it's gonna be equal to a static cast of type uint16_t and the expression is gonna be port not equal to NULL.
>
> **[4:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=283)** If it's not equal to NULL, meaning that we actually have a port value.
>
> **[4:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=286)** We're gonna do a string to int port.
>
> **[4:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=292)** Otherwise we're gonna return a default port of 18080.
>
> **[4:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=299)** Then we're gonna do a cout right here so that we can see which port we're running under.
>
> **[5:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=305)** That is PORT equals iPort and then a carriage return.
>
> **[5:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=313)** Line feed and finally we're gonna create the app and get everything running.
>
> **[5:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=320)** We're gonna say app.port is equal to iPort.multithreaded.
>
> **[5:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=327)** We're gonna be running in multithreaded mode.
>
> **[5:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=332)** Finally we're gonna tell it to run, end with a semicolon.
>
> **[5:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=337)** Command + s or control + s on Windows to save off our file.
>
> **[5:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=342)** Next we're gonna do the CMakeLists.txt.
>
> **[5:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=346)** Our first line is gonna be cmake_minimum_required.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=354)** This tells cmake what's the minimum version that it can be for our code to work.
>
> **[6:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=360)** We're gonna say VERSION 3.7.
>
> **[6:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=363)** We're gonna give the project a name project hello_crow.
>
> **[6:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=371)** We are gonna set some compiler options.
>
> **[6:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=374)** Set CMAKE_CXX_STANDARD space 11 which means that we want version 11, or 2011, of C++.
>
> **[6:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=389)** We're gonna set THREADS_PREFER_PTHREAD_FLAG to on.
>
> **[6:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=407)** We're gonna try to find the boost library.
>
> **[6:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=410)** Find_package Boost COMPONENTS space,
>
> **[6:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=419)** these are the libraries that we need, system filesystem and they are REQUIRED which means that if cmake does not find these it will abort.
>
> **[7:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=433)** We also need the package Threads.
>
> **[7:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=440)** Next we're gonna do include_directories and we're gonna have ${Boost_INCLUDE_DIRS}
>
> **[7:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=455)** and we add_executable and the project name is hello_crow and the executable, or the file that needs to be compiled is main.cpp and finally we're gonna say target_link_libraries so the hello_crow project is built from ${Boost_LIBRARIES}
>
> **[8:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=490)** and Threads::Threads.
>
> **[8:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=497)** And that is it for our cmakelist.txt file.
>
> **[8:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=504)** Now let's go back to the terminal.
>
> **[8:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=507)** Now we're in the container that we created earlier.
>
> **[8:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=510)** We are going to say cd to hello_crow from here, we're gonna say mkdir build.
>
> **[8:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=520)** And this is by tradition C++ programs using cmake are usually built from a build directory.
>
> **[8:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=527)** We're gonna create the build directory, say, cd build and then we're gonna say cmake..
>
> **[8:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=534)** And kick off the process of creating the make file.
>
> **[8:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=539)** So it's created our make file.
>
> **[9:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=541)** Then we're gonna say make.
>
> **[9:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=544)** And the first thing that it's gonna do is it's gonna compile our main.cpp into an object file and then it's gonna link all of our libraries together and voila we have the built target, hello_crow.
>
> **[9:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=557)** If we do an ls from here, we can see that there is a file hello_crow, assuming everything went well, hello_crow is in our directory.
>
> **[9:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=569)** This is our web server's executable.
>
> **[9:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=571)** Congratulations.

> [!info]- Semantic Content
>
> **Code Identifiers:** hello_crow (11), crow_all (5), iport (3), cmake_minimum_required (1), include_directories (1)
> **File Paths:** crow_all.h (5), main.cpp (4), cmakelists.txt (3), cmakelist.txt (1)
> **CLI Commands:** cd (3), make (3), find (2), python (1), cp (1)
> **Code Keywords:** let (5), function (2), pass (2), static (1), return. (1)
> **Env Vars:** port (3), null (2), crow_route (1), version (1), cmake_cxx_standard (1)
> **Tools:** github (3), atom (1), terminal (1)
> **Definitions:** is a  (2), means that (2)
> **UI Navigation:** go to (1), scroll down (1), right-click (1)

#### Serving the example
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=0)** - [Instructor] Let's run our web server directly in the container.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=3)** From the build directory, type ./hello_crow.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=12)** The output looks promising.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=13)** Our server tells us it is using PORT 18080.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=17)** Let's try accessing it from the browser.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=21)** We enter localhost:18080 and press Enter.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=29)** Uh-oh.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=30)** We can't access our site.
>
> **[0:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=32)** Why?
>
> **[0:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=34)** Each docker container is by default isolated.
>
> **[0:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=36)** None of its ports are open.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=38)** In order to access our server, we need to open a port and tell the server which port to use.
>
> **[0:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=46)** We open a port by adding the -p option to the docker run command.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=51)** The -p option opens a port and allows us to map it to the host machine.
>
> **[0:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=57)** The first number is the host machine's port number.
>
> **[1:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=60)** The second number is the container's port number.
>
> **[1:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=64)** The port numbers don't have to match.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=67)** The -e option allows us to create an environmental variable.
>
> **[1:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=72)** We'll use it to tell the server which port it is using.
>
> **[1:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=76)** So we go back to the terminal.
>
> **[1:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=80)** Control + C to stop that from running.
>
> **[1:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=82)** We can exit.
>
> **[1:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=84)** Then from here, we're gonna enter docker run -v to create our volume, Users/troymiles/Desktop /cppweb:/usr /src/cppweb -p, then we're gonna use port 8080 on the host machine and port 8080 in the container.
>
> **[1:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=119)** Then we need to tell the server which port it's using.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=122)** We're gonna create an environment variable,
>
> **[2:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=125)** - e PORT=8080 and we've got the cppbox:latest /usr/src/cppweb
>
> **[2:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=144)** /hello_crow/build/hello_crow.
>
> **[2:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=155)** So this is the absolute path to our executable hello crow web server.
>
> **[2:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=162)** Hit Enter.
>
> **[2:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=164)** Now this time we get a PORT = 8080.
>
> **[2:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=169)** We go back to the browser.
>
> **[2:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=171)** We do a localhost and this time it's 8080 and we hit Enter and there we have it.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=181)** Hello, Crow.
>
> **[3:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=183)** Congratulations.
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=185)** Your Crow web server is running.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type . (1), match. (1)
> **Ports:** port 8080 (2), port 18080 (1), :18080 (1)
> **CLI Commands:** docker (3)
> **Code Identifiers:** hello_crow (3)
> **Env Vars:** port (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1), - e (1)
> **URLs:** [localhost:18080](https://localhost:18080) (1)

#### Challenge: Modify the example page
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980&t=8)** - [Instructor] Are you ready to put your new skills to a challenge?
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980&t=10)** Let's make sure you got everything down and understand how to edit, compile, and execute your C++ web server.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980&t=18)** Change the server to render hello, and your name instead of hello, crow then, display it in the browser.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980&t=27)** Give yourself about five minutes to complete this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Solution: Modify the example page
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=0)** (chiming music)
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=7)** - [Instructor] So, how'd it go?
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=9)** Were you able to modify the server?
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=12)** Here are the three steps I used to solve this challenge.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=15)** First, I modified the main.cpp file.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=18)** Second, I used make to compile and link the server again.
>
> **[0:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=23)** And finally, I relaunched the server in the container.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=27)** Let's check out the steps in detail.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=30)** From Atom, I edit the main.cpp file and replace Hello, Crow with Hello, Troy.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=38)** Don't forget to save the change, Command + S or Control + S.
>
> **[0:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=44)** Next, I go back to the build directory.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=47)** I'm gonna do a Control + C here.
>
> **[0:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=50)** And then I'm going to go back to bash, and from bash, I'm gonna do a cd /usr/src /cppweb /hello_crow /build.
>
> **[1:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=71)** And if I do an LS, I can see my hello_crow file is still there.
>
> **[1:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=75)** But what I really need to do is I need to do a make right here, so I'm gonna type make.
>
> **[1:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=81)** It will relink and rebuild my hello_crow web server.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=87)** Then I'm gonna exit from the container, clear the screen, and let's bring this to the top.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=97)** I'm gonna relaunch the server.
>
> **[1:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=100)** Once again, I see the 8080.
>
> **[1:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=102)** I see that it is serving.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=103)** Let's go back to the browser.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=105)** I'm gonna refresh the browser, and there is my Hello, Troy.
>
> **[1:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=111)** Now you've had your first taste of Crow.
>
> **[1:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=113)** Even though it is written in C++, it has the lightweight feel of an Express.js app, only faster.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), cd (1), ls (1)
> **Code Keywords:** let (3), finally, (1)
> **File Paths:** main.cpp (2), express.js (1)
> **Code Identifiers:** hello_crow (3)
> **Cross-References:** go back to (3)
> **Tools:** bash (2), atom (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Deploying to AWS ElasticBeanstalk

#### Beanstalk
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=0)** - [Instructor] In this tutorial, you'll take your C++ web server to the cloud.
>
> **[0:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=4)** We'll guide you through containerizing your Crow application with Docker, pushing it to Docker Hub, and deploying it to AWS Elastic Beanstalk.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=14)** You'll learn essential DevOps skills for C++ web applications, including container management, cloud deployment, and proper cleanup procedures.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=24)** By the end, you'll have a publicly accessible web service running on AWS infrastructure.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=30)** Now let's make sure that we're in the cppweb directory and let's log into Docker.
>
> **[0:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=41)** The docker login -u command gets you connected to Docker Hub.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=47)** Drop in your username after the -u, mine is rockncoder, and Docker will prompt you for your password.
>
> **[0:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=55)** Once you're logged in, you'll be able to push your tagged images to Docker Hub for the world to use.
>
> **[1:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=64)** Give it my password.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=74)** All right, we're logged in.
>
> **[1:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=78)** Let's give ourselves some more room.
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=90)** The Docker tag command transforms your local image hello_crow:latest into a Docker Hub-friendly format by adding your username at the front and latest at the end, you're creating a properly structured tag that Docker Hub will recognize.
>
> **[1:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=106)** Now your image is ready to be pushed to the cloud.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=118)** We are using docker push to send our container to the Docker Hub.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=122)** From there, Elastic Beanstalk is able to find and use it.
>
> **[2:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=133)** Now let's move to the hello-crow-eb directory.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=138)** So we're going to do cd hello-crow-eb.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=147)** And let's take a look at what's in this from VS Code.
>
> **[2:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=154)** The Dockerrun.json file tells AWS Elastic Beanstalk how to run your Docker container in the cloud.
>
> **[2:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=161)** Just swap out your Docker Hub username with your actual Docker Hub username in the image section.
>
> **[2:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=174)** So mine is rockncoder.
>
> **[2:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=179)** Be sure to save that off.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=181)** This file also maps your container's port 8080 to the standard port 80, sets up logging, and configures your environment.
>
> **[3:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=190)** One small JSON file and AWS knows exactly how to deploy your web server.
>
> **[3:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=196)** All right, let's go back to the terminal.
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=205)** The eb init command sets up your Elastic Beanstalk application.
>
> **[3:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=209)** We're using -p docker to tell EB this is a Docker project, naming it hello-crow-app and specifying our AWS region.
>
> **[3:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=220)** Just replace your AWS region with something like us-west-2, which is what I'm using, or whichever region you want to deploy in.
>
> **[3:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=230)** This command gets everything ready for your AWS deployment.
>
> **[4:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=244)** This command tells Elastic Beanstalk to spin up a new environment called hello-crow-env for your app.
>
> **[4:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=252)** The cool part is we're using a t4g.micro instance that's AWS's ARM-based server that gives you decent performance while keeping costs down.
>
> **[4:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=261)** It's like getting a small but mighty server that's perfect for testing out your Crow application without burning through your cloud budget.
>
> **[4:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=269)** It'll take a bit for the server to spin up.
>
> **[4:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=278)** All right, with our environment deployed, let's go ahead and give ourselves a little bit of room on the screen, and we're going to do... The eb open command pops open your default browser and takes you straight to your deployed Crow server.
>
> **[4:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=299)** It's like typing in the URL, but easier.
>
> **[5:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=301)** You'll see that Hello, Crow message now coming from your live AWS environment.
>
> **[5:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=306)** So eb open.
>
> **[5:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=314)** And there's our Hello, Crow message now coming from AWS.
>
> **[5:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=330)** The eb status command gives you a quick health check of your Elastic Beanstalk environment.
>
> **[5:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=336)** It'll show if your app is running green, what URL it's available at, and other key details about your deployment.
>
> **[5:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=343)** Perfect for confirming everything is working as expected.
>
> **[5:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=350)** And there you go, you can see that we're green, you can see our CNAME, and you can see that we're running from the region us-west-2.
>
> **[6:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=372)** The eb logs command shows you what's happening under the hood, errors, warnings, and general activity from your running application.
>
> **[6:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=380)** Super helpful when you need to debug issues or just want to peek at what your Crow server is up to in the cloud.
>
> **[6:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=387)** And to exit hit Q.
>
> **[6:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=394)** Now that we've successfully pushed to the cloud, what's next?
>
> **[6:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=398)** Changes of course, but don't rush to push changes immediately to AWS.
>
> **[6:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=403)** Always test locally first.
>
> **[6:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=405)** It's way faster and completely free.
>
> **[6:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=408)** Make your code changes, rebuild your container, and check it out in your browser.
>
> **[6:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=413)** Once everything looks good locally, then push it to the cloud.
>
> **[6:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=416)** This simple cycle saves you tons of time and headaches.
>
> **[7:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=421)** So let's make a change.
>
> **[7:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=423)** Let's go into Visual Studio.
>
> **[7:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=428)** Go back to our main.cpp and let's just make one simple change.
>
> **[7:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=433)** We're going to change Hello, Crow to Hello, World.
>
> **[7:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=437)** Save it off.
>
> **[7:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=440)** Go back down to the terminal.
>
> **[7:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=442)** Go up one directory to cppweb.
>
> **[7:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=450)** Rebuild our application.
>
> **[7:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=465)** And run our app.
>
> **[7:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=472)** Let's go back to a localhost, refresh the screen, and now we see Hello, World.
>
> **[8:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=482)** Let's go ahead and stop the app.
>
> **[8:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=497)** Now we're going to tag the container again,
>
> **[8:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=508)** and push the container, and the push command sends it to Docker Hub.
>
> **[8:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=522)** Let's go back into the hello-crow-eb directory.
>
> **[8:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=538)** And now we're going to run the eb deploy command.
>
> **[9:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=546)** And just as a reminder, all AWS commands must be executed in the hello-crow-eb directory.
>
> **[9:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=554)** This command will deploy our edited container to Beanstalk.
>
> **[9:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=563)** This should be faster than when we created it.
>
> **[9:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=567)** And let's do eb open.
>
> **[9:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=577)** And now we see the Hello, World coming from AWS.
>
> **[9:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=583)** Just remember, keep this cycle going, code, test locally, then push to the cloud.
>
> **[9:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=588)** Way better than debugging directly in AWS.
>
> **[9:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=598)** Let's clear the screen.
>
> **[10:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=609)** The eb terminate command shuts down your Elastic Beanstalk environment.
>
> **[10:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=613)** Adding hello-crow-env tells it exactly which one to close.
>
> **[10:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=620)** We're not going to use this command right now, but it's crucial to properly shut down your resources.
>
> **[10:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=625)** AWS services continue to incur charges as long as they're running, even if you're not actively using them.
>
> **[10:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=633)** And congratulations on deploying your C++ application to the cloud.
>
> **[10:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=638)** You successfully containerized your web server, pushed it to Docker Hub, and launched it on AWS Elastic Beanstalk.
>
> **[10:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=646)** These DevOps skills are valuable for any modern C++ developer and provides a foundation for building scalable web services in real-world environments.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (19), aws (16), make (4), find (1), cd (1)
> **Env Vars:** aws (16), url (2), json (1), arm (1), cname (1)
> **Code Keywords:** let (15), super (1), continue (1)
> **Tools:** terminal (2), vs code (1), visual studio (1)
> **Cross-References:** go back to (3)
> **File Paths:** dockerrun.json (1), main.cpp (1)
> **Ports:** port 8080 (1), port 80 (1)
> **Analogies:** it's like (2)

#### Saving our container to Docker Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=0)** - [Instructor] Being able to use Docker images created by others is great, but it would also be nice to be able to share our images.
>
> **[0:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=6)** To do that, we need to use Docker Hub.
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=9)** What is Docker Hub?
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=11)** Docker Hub is a cloud-based registry service.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=13)** It is a place to both store and find Docker images.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=17)** It is free to sign up.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=18)** You can store as many public images as you'd like, and one private image.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=24)** Saving an image to Docker Hub is fairly easy.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=27)** I'm gonna log on to Docker Hub, tag the image, push the image, and then just verify the push.
>
> **[0:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=34)** So let's return to the terminal and the hello crow directory.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=38)** Go ahead and clear the screen and we're gonna do a docker login dash dash username and my username.
>
> **[0:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=53)** Then, once we're logged in, do a docker images to see what we have here.
>
> **[1:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=60)** And then we'll need to find the image we're gonna push and we can't push it directly because we need to tag all the images with our Docker username.
>
> **[1:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=69)** So we had hello crow and its image ID is right here and we're gonna say docker tag that image ID, remember to replace this image ID with yours.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=87)** Then I'm gonna say rockncoder/hello_crow:
>
> **[1:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=98)** and let's call this latest.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=101)** And hit Enter.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=103)** Now that we have it tagged, let's go ahead and push it.
>
> **[1:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=106)** So docker push rockncoder/hello_crow.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=116)** That'll push the image up to Docker Hub.
>
> **[2:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=121)** Our image has been pushed.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=123)** Let us go back to the browser.
>
> **[2:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=127)** Hub.[docker.com](https://docker.com).
>
> **[2:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=132)** I'm gonna go ahead and sign in.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=141)** And there we can see hello crow.
>
> **[2:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=144)** It has been successfully pushed to Docker Hub.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), find (2)
> **Code Keywords:** let (4), public (1), private (1)
> **Code Identifiers:** hello_crow (2)
> **Definitions:** is a  (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Best Practices:** remember to (1)


### 3. Building Websites

#### Creating HTML pages
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=0)** - [Instructor] In our first code example, we built the HTML snippet from a string.
>
> **[0:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=4)** Building HTML from strings is terrible and it would be a torturous way to build a website.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=11)** There are two main ways to create HTML in Crow.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=14)** The first is to put a pure HTML document in a file by itself and deliver the file when requested.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=21)** Nearly every web framework has this option, including Crow.
>
> **[0:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=26)** The second way is similar, but instead of the file containing pure HTML, it is a mixture of HTML and Mustache templates.
>
> **[0:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=33)** Mustache is a prominent web template system.
>
> **[0:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=36)** Its first release was in 2009 and there are ports available in nearly every modern language.
>
> **[0:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=42)** Mustache is excellent at mixing data into HTML and we'll cover it more once we add MongoDB into the mix.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=51)** Our recipe for creating HTML pages in Crow is simple.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=54)** For each page, let's create a matching HTML file and a route handler.
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=59)** It is possible for a singe route to handle multiple pages, but we'll keep it simple for now.
>
> **[1:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=65)** We'll store the HTML files together in the same directory.
>
> **[1:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=68)** Let's go back to the code.
>
> **[1:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=71)** From the file tree, right click to create a new folder.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=74)** Name it public, all lower case.
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=79)** New, Folder, public.
>
> **[1:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=84)** Right click on the public folder to create a new file.
>
> **[1:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=89)** We're gonna name it index.html.
>
> **[1:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=95)** Now, let's make it a proper web page.
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=99)** So it's gonna have a doc type, and that doc type's gonna be html.
>
> **[1:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=108)** And we're gonna put our open html and we're gonna tell it what language we're using, so lang equals en.
>
> **[1:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=119)** And we need to create our opening head tag.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=123)** And then our first tag inside of this is gonna be a meta tag, and this is gonna be for our charset.
>
> **[2:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=131)** And our charset is going to equal utf dash eight.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=138)** Next we'll have a title.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=141)** And the title for this would just be Crow C plus plus.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=147)** And close the title.
>
> **[2:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=150)** And then we're gonna close the head tag.
>
> **[2:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=155)** Open the body.
>
> **[2:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=159)** And then within the body, we'll have a div tag.
>
> **[2:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=164)** And in that div tag we'll have an h one.
>
> **[2:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=167)** And the h one will say hi, Crow.
>
> **[2:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=172)** Close the h one, close the div.
>
> **[2:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=177)** Close the body.
>
> **[3:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=182)** And finally close the html.
>
> **[3:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=186)** Make sure we save it, and this completes the creation of our first HTML page.

> [!info]- Semantic Content
>
> **Env Vars:** html (11)
> **Code Keywords:** let (3), public (3), case. (1), new, (1), type, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** is a  (2)
> **File Paths:** index.html (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)

#### Serving HTML pages
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=0)** - [Narrator] Route handlers look at the path passed to the website and decide which code should handle it.
>
> **[0:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=6)** The only handler that we currently have is for the root route, which matches either an empty string or a lone forward slash.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=13)** Let's update it to return an html file instead of a string.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=18)** So, first we want to come up here, and below our current using namespace, we'll add one more.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=25)** And this is gonna be for crow.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=28)** And we'll come down here to the crow route and we don't need any of this, so we'll delete the old code and here we're gonna say const request... req and then we'll say response, res.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=54)** And then the first thing that we're gonna do here is we're gonna say create an ifstream, name it in, and we're gonna pass to it a string, which is gonna be public /index.html.
>
> **[1:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=71)** That's right here.
>
> **[1:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=77)** And we're gonna pass to it an ifstream colon in because we want to read this file in.
>
> **[1:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=86)** Then, we're gonna say if in, we're gonna make sure that we actually got a file handler.
>
> **[1:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=92)** And if we did, we're gonna say create a string stream and call it contents and then we'll insert the file's contents into the string stream.
>
> **[1:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=106)** So, contents -- insertion operator -- in.rdbuf.
>
> **[1:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=117)** Do an in.close.
>
> **[1:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=119)** This closes off the file.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=122)** And finally we'll do a response res write to take the contents of that file and send them out, str.
>
> **[2:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=135)** And if we didn't find the file, for whatever reason, we'll do a res.write, not found.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=147)** At least give ourselves some kinda clue something's gone wrong.
>
> **[2:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=151)** And finally, we'll do a res.end to end our output to the response object.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=157)** So, we'll save the file, we will go back to the terminal, and we will do a make.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=166)** Let the program rebuild itself.
>
> **[2:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=169)** From the other directory, we'll relaunch the server.
>
> **[2:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=173)** And this is the same command we were doing before.
>
> **[2:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=175)** So, it's just a docker run -v.
>
> **[2:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=178)** Right here, we're setting up a volume, so that we can read everything that is on the host machine.
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=185)** On the container machine, we're opening up ports 80 80, and sending port 80 80 to the container as an environment variable.
>
> **[3:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=196)** So, we let that run.
>
> **[3:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=199)** Go ahead and refresh the page.
>
> **[3:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=201)** And uh oh, we get a not found.
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=205)** So, what could be the problem there?
>
> **[3:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=208)** Our problem is a bit sublime, but it's not too difficult to understand.
>
> **[3:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=213)** From the build directory, which is where we are running.
>
> **[3:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=217)** So, if you look at our path, we're going hello crow build and then we're executing hello_crow.
>
> **[3:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=222)** So, it's running in the build directory.
>
> **[3:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=225)** From our code, public is now, we have to go up one, dot dot, to get to it.
>
> **[3:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=235)** Save that off.
>
> **[3:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=238)** Go back down to the terminal.
>
> **[4:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=240)** Rebuild.
>
> **[4:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=245)** Then, we're gonna do a control c to stop the server.
>
> **[4:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=249)** And then, immediately restart it, and then refresh the page again.
>
> **[4:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=255)** And now, we get hi, crow.
>
> **[4:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=258)** And now, we know how to server an html file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), public (2), this, (1), delete (1)
> **CLI Commands:** make (2), find (1), docker (1)
> **Tools:** terminal (2), sublime (1)
> **File Paths:** index.html (1)
> **Code Identifiers:** hello_crow (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Serving static content
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=0)** - [Narrator] A website's static content are files delivered to the browser without being modified, such as index.html.
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=7)** We keep these files in the public directory and separate them by type.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=12)** The HTML files go in the root, the CSS files in the styles directory, the JavaScript in the scripts directory, and the images in the images directory.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=21)** This structure helps us keep our site organized.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=24)** Let's add some static content.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=27)** From the file tree, add three subfolders to the public folder.
>
> **[0:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=32)** So, we're gonna come over here, and we say New, Folder, and we'll say images.
>
> **[0:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=40)** And then, again, public, New, Folder, scripts.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=47)** And, third time's a charm, Folder, styles.
>
> **[0:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=55)** Next, we need to generalize the code to read a file.
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=59)** Right now, it is part of the root route handler, and only reads the index.html file.
>
> **[1:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=64)** We need to modify it so it can read any file.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=67)** Moreover, we need to put it in a function, so any handler can use it.
>
> **[1:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=72)** Just above the main function, add a new one named sendFile.
>
> **[1:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=77)** It returns void, and takes a response object and two strings, file name and content type.
>
> **[1:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=83)** So, right here, just above the main, we're gonna say, void sendFile.
>
> **[1:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=91)** It is going to take a response, and that's gonna be res, a string, filename, and another string, contentType.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=105)** And we'll open and close some curly brackets, do a little space between here and the other one.
>
> **[1:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=111)** Next, what we're gonna do is, we're just gonna take this method right here from out of the root route handler, cut it, and paste it here, and instead of it being a hardcoded string, we're gonna say + filename, and we're gonna change this.
>
> **[2:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=134)** We don't need the index.html anymore.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=138)** And then, we're gonna make another change right here, just above res.write, we're gonna put a res.set_header, and that is going to be our content type,
>
> **[2:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=151)** so that when browsers get our files, they know what they are.
>
> **[2:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=156)** So, Content-Type, and it's going to be the content type that got passed in, and we need a semicolon at the end there.
>
> **[2:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=165)** Then, here in the Else clause, we're gonna say, res.code = 404, which is the universal sign for "Can't find that file".
>
> **[2:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=176)** We got an extra space right here, let's delete that.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=180)** And that's our sendFile method, then just below it, we're gonna do a void sendHtml.
>
> **[3:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=190)** It is going to take a response object and a file name.
>
> **[3:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=200)** And then, it's gonna call sendFile with res, filename,
>
> **[3:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=208)** and this time, what I'm gonna do is, I'm going to append a .html to the end of this and pass it in a content type, which is gonna be text/html.
>
> **[3:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=223)** Then, in here, in the root route, I'm going to say, sendHtml, and it is going to send the response object
>
> **[3:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=236)** and the string index.
>
> **[4:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=241)** And, let's put our semicolon there.
>
> **[4:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=244)** There, now we've reduced the size of our route handler and made it easier to understand.
>
> **[4:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=250)** So, let's add a few more helper functions, and they're gonna be very similar to send.html.
>
> **[4:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=258)** The first one is gonna be sendImage, so we'll make a copy of it first.
>
> **[4:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=264)** We'll change the name to sendImage.
>
> **[4:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=269)** Takes the same inputs, and we're gonna call sendFile, only now, what we're gonna do, we're not gonna append anything to the end, but we will prepend the subdirectory here.
>
> **[4:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=286)** So, this is going to be images/.
>
> **[4:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=290)** The type is going to be image/jpeg.
>
> **[5:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=300)** And the next one's gonna be sendScript, and we're also gonna do one for style.
>
> **[5:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=305)** So, sendScript is very similar, except this is going to be scripts, and this is going to be text/javascript.
>
> **[5:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=322)** The sendStyle, and this is going to be styles, and the style is going to be text/css.
>
> **[5:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=338)** So, we got styles, scripts, images and HTML.
>
> **[5:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=343)** Now, let's create a couple more routes that it uses.
>
> **[5:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=349)** So, our first of these new routes is gonna be for styles.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=354)** So, it's gonna go /styles/, what's gonna come here is
>
> **[6:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=362)** angle bracket, angle bracket, and in the middle of the angle bracket, it's gonna be a string.
>
> **[6:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=367)** This is our first instance of a route parameter.
>
> **[6:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=370)** The words string surrounded by angle brackets will capture whatever text is in the route at this position, and pass it to the handler method as a parameter.
>
> **[6:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=380)** In our case, these two parameters are always gonna be present there, and then, the next one is going to be string filename.
>
> **[6:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=390)** It's important to know that you can also have ints here, doubles, and a few other variable types, and they must match, this string here must match here.
>
> **[6:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=402)** If you had an int here, it would have to be an int here, and whatever string goes here has to be able to be cast to that type of variable.
>
> **[6:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=412)** So, everything here can get cast to a string, so you're super safe there.
>
> **[6:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=416)** And in this case, now we have our file name, and we are gonna call sendStyle.
>
> **[7:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=425)** We are gonna pass it, instead of index, filename.
>
> **[7:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=432)** And then, we need to create a few more, just like this one.
>
> **[7:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=437)** So, one and two.
>
> **[7:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=445)** And, this one is going to be for scripts.
>
> **[7:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=452)** Still gonna take that string, and instead of calling sendStyle, I'm gonna call sendScript.
>
> **[7:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=458)** And down here, gonna have images, and we're gonna call sendImage.
>
> **[7:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=469)** All right, so we have all of our routes updated, and our helper functions complete, so let's add some test files.
>
> **[7:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=477)** So, we're going to go into the styles.
>
> **[7:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=478)** I'm gonna do a right-click, say New, File.
>
> **[8:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=481)** Gonna name this file styles.css, and I'm gonna keep it short and simple.
>
> **[8:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=487)** So, it's just gonna be a body, opening and closing brace, change the background color, and we're gonna make the background color light green.
>
> **[8:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=498)** Gonna save that, then for scripts, I'm going to say New, File, and I'm gonna call it test.js, and I'm gonna keep this one really short as well.
>
> **[8:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=510)** So, first, gonna just do a console.log, and the console log is just gonna say "Hello, JavaScript."
>
> **[8:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=522)** And, let's also go and alert him there.
>
> **[8:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=524)** So, I'm gonna say alert, "Hello from JavaScript land."
>
> **[8:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=533)** Going to save that off, then finally, for images, I am going to copy this picture right into the images folder.
>
> **[9:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=546)** There we go.
>
> **[9:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=549)** And we're gonna go into index.html.
>
> **[9:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=552)** Just before the closing head tag, we are going to create a link, and it is going to be a style sheet.
>
> **[9:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=565)** And, its href is going to be styles/styles.css.
>
> **[9:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=576)** Gonna have a closing angle bracket, then here, we're gonna say script source is going to equal scripts/test.js, and we'll close this script tag off.
>
> **[9:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=594)** Then, first off, let's go ahead and change our H1 tag just a little bit, so that we can always see the difference as we make our changes.
>
> **[10:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=604)** Create an image tag, and the source is going to equal images/test.jpg.
>
> **[10:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=614)** And then, we'll close off that tag, save this file, make sure we save off main.cpp, and then, go back to the terminal.
>
> **[10:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=626)** I'm going to stop the server.
>
> **[10:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=628)** I'll do it on Ctrl-C over here.
>
> **[10:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=631)** And then, in my other tab, where I have the actual container, I'm gonna do a make, let it rebuild itself, and then, come back over to the server side and restart it.
>
> **[10:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=643)** Go to the browser, refresh the page.
>
> **[10:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=647)** Hey, look at that, we got some JavaScript.
>
> **[10:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=649)** Hello from JavaScript land.
>
> **[10:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=651)** We got our green color, so our CSS is loading.
>
> **[10:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=654)** We have the picture of my cat, who, for the first time ever, has come when he was called.
>
> **[10:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=659)** And that is how you add static content to a website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), new, (4), static (3), public (3), type, (3)
> **Code Identifiers:** sendfile (5), sendimage (3), sendscript (3), sendstyle (3), sendhtml (2)
> **File Paths:** index.html (4), send.html (1), styles.css (1), test.js (1), styles/styles.css (1)
> **CLI Commands:** make (6), find (1), cat (1)
> **Analogies:** picture (2), such as (1), similar to (1), just like (1)
> **Env Vars:** html (2), css (2)
> **UI Navigation:** right-click (1), go to (1)
> **Cross-References:** go back to (1)

#### Challenge: Create a new webpage
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=0)** (metallic swishing)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=8)** - [Instructor] Are you up for another challenge?
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=9)** Let's show what we know and add a new page to our website.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=13)** Create a new page about.html.
>
> **[0:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=16)** The page should contain an H1 tag which reads, About.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=19)** Add a route handler for the page and a style sheet named, About.css.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=25)** The style sheet should color the background any color you'd like.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=30)** Give yourself about five or 10 minutes to complete this challenge.

> [!info]- Semantic Content
>
> **File Paths:** about.html (1), about.css (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a new webpage
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=0)** (chiming music)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=8)** - [Instructor] How did you do with this challenge?
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=9)** Hopefully, you successfully completed it.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=11)** Either way, here's my solution.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=14)** I copied the index.html, deleted the script tag, copied the style.css, added the new route, and rebuilt the app.
>
> **[0:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=23)** Let me show you how I did it.
>
> **[0:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=26)** Let's go back to Atom.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=28)** First thing I did was I copied the index.html and named the copy about.html.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=38)** From with inside here, take the about.html.
>
> **[0:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=43)** I changed the title tag to About Page and changed the h1 tag to About, delete the scripts.js, rename styles.css to about.css, and let's go ahead and just get rid of this image.
>
> **[1:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=65)** We don't really need it here.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=67)** Save.
>
> **[1:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=69)** Then for the styles.css, make a copy of it.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=74)** Name the copy about.css.
>
> **[1:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=82)** For the about.css, I'm gonna change the color to cornsilk.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=87)** Then we're gonna go back to main.cpp.
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=90)** Gonna copy the root route.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=101)** And this is gonna be About.
>
> **[1:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=106)** And then we're gonna ask for the About Page.
>
> **[1:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=109)** Let's see, let's go over everything again.
>
> **[1:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=111)** I created a new route, created an about.html, created an about.css, inside of about.html, we're using about.css.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=123)** Inside of about.css, we've changed the color to cornsilk.
>
> **[2:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=128)** Make sure we save everything off.
>
> **[2:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=130)** Go back to the terminal.
>
> **[2:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=132)** Let's stop the server with a Control + C.
>
> **[2:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=137)** Go to the other tab where I have my make and say make.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=141)** Go back to the server, restart it.
>
> **[2:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=145)** Back to the browser.
>
> **[2:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=148)** Make sure everything's still working.
>
> **[2:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=151)** And do about.
>
> **[2:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=154)** And there's About.
>
> **[2:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=155)** There's our background color.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=157)** And that is my solution to adding a new page.

> [!info]- Semantic Content
>
> **File Paths:** about.css (6), about.html (4), index.html (2), styles.css (2), style.css (1)
> **Code Keywords:** let (6), delete (1)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (4)
> **Tools:** atom (1), terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chiming music) (1)


### 4. Data Access

#### Atlas
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=0)** - [Instructor] In this session, we'll connect our C++ web server to MongoDB Atlas, creating a complete cloud-based application stack.
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=8)** We'll learn how to set up a free MongoDB Atlas database, upload data, and modify our Crow application to retrieve and display information from the database.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=19)** This powerful combination of C++, Crow, and MongoDB enables you to build robust data-driven web applications with enterprise grade performance.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=30)** Let's get you started with MongoDB Atlas.
>
> **[0:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=33)** Simply head over to www.[mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas).
>
> **[0:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=42)** And click that Try Free button.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=47)** Feel free to sign up with Google or your email.
>
> **[0:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=52)** When they ask about your goals just pick "Learn MongoDB" or "Build a new application," whatever fits your plans best.
>
> **[1:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=61)** Now, I've already got an account, so let's go over to my account.
>
> **[1:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=66)** Now on databases, for clusters, what you're going to do is you're going to click Create.
>
> **[1:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=73)** Double check that it says Free, labeled as "M Zero Sandbox."
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=79)** We love free stuff.
>
> **[1:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=81)** Pick any cloud provider that catches your eye, AWS, Google Cloud, or Azure.
>
> **[1:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=86)** They all work great. I picked AWS.
>
> **[1:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=89)** Choose a region that's closest to you for the best performance.
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=94)** Again, I chose US West 2, since that's very close to my home.
>
> **[1:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=100)** Feel free to name your cluster something fun, or just stick with the Cluster Zero.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=105)** For no real reason I named mine Vehicle Database.
>
> **[1:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=109)** Hit the Create Cluster, take a short break while MongoDB works its magic in the background.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=116)** Let's create your user account.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=118)** So you're going to go over to Database Access.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=123)** You're going to click Add New Database User.
>
> **[2:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=128)** For Authentication Method, choose Password.
>
> **[2:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=133)** Give your user a name. Give them a strong password.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=138)** I highly do suggest clicking the Auto Generate Secure Password.
>
> **[2:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=145)** Give your user a description and come on down to add Built In Role.
>
> **[2:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=153)** Click this button, click on Select Role.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=157)** And for this tutorial, click Atlas Admin.
>
> **[2:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=161)** That'll give them a lot of powerful stuff, but it just makes doing this tutorial easier.
>
> **[2:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=167)** I don't recommend doing this in production.
>
> **[2:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=175)** And then click Add User.
>
> **[2:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=176)** I already have an admin user, so I'm not going to click that.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=181)** Next, you're going to need network access.
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=185)** So you're going to go Network Access.
>
> **[3:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=188)** You're going to say Add IP Address.
>
> **[3:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=191)** And for this tutorial, click Allow Access From Anywhere.
>
> **[3:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=197)** And, you know, unless you're planning on keeping this up for a long time, I would suggest highly going ahead and clicking the This Entry is Temporary and Will Be Deleted.
>
> **[3:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=211)** And in this case, six hours is fine. And click Confirm.
>
> **[3:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=215)** Or whatever time period, you know, suits you best.
>
> **[3:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=218)** They also have one day, one week, but you don't want to have just anybody being able to poke around with your MongoDB database.
>
> **[3:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=230)** So let me click Cancel. We're almost done with setup.
>
> **[3:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=234)** Let's grab your connection details. So come into Cluster.
>
> **[3:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=239)** And hopefully your cluster is up by now.
>
> **[4:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=241)** You're going to click on Connect.
>
> **[4:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=245)** Then click on Drivers.
>
> **[4:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=248)** Make sure it's selected to C++ 3.7 or later.
>
> **[4:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=252)** And then right here is your connection.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=256)** And you're going to want to copy that and keep it someplace safe.
>
> **[4:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=263)** All right, with our database up and running, let us head to the terminal.
>
> **[4:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=269)** And we are going to go into, oh, let's go to VS Code first.
>
> **[4:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=276)** And go to the data.
>
> **[4:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=277)** And inside the data folder there's a contacts.json.
>
> **[4:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=281)** And so this is our contact database that we're going to upload into MongoDB.
>
> **[4:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=287)** These are just made up randomly generated people, but they have first name, last name, email, photo, and a phone number.
>
> **[4:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=296)** So let's go back to the terminal.
>
> **[4:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=299)** Do a CD into the data directory.
>
> **[5:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=302)** This is super important. You must be where the data is.
>
> **[5:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=310)** Now we're going to need some tools from Homebrew.
>
> **[5:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=317)** And so we're going to do a brew, tap.
>
> **[5:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=340)** Then we're going to do a brew install mongodb-community@6.0.
>
> **[5:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=346)** Now most of these tools I already have installed.
>
> **[5:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=351)** Then we'll do a check.
>
> **[5:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=356)** And this just is a check to see if mongoimport is correctly installed by asking it what its version is.
>
> **[6:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=364)** And it comes up with a version number, letting us know it's there.
>
> **[6:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=368)** It's running fine, everything's okay.
>
> **[6:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=372)** And we're going to do a clear to go back to the top of the screen.
>
> **[6:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=375)** And again, we're in the same directory where our data is.
>
> **[6:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=378)** So we're in the data directory.
>
> **[6:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=386)** I'm assuming that you have created a database user named Admin that has administrator credentials.
>
> **[6:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=392)** This import command will create a database, named contacts, that also has a collection named contacts.
>
> **[6:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=400)** The import command will require your password when you execute the command.
>
> **[6:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=406)** Be sure to replace the host/database with your own from your connection string.
>
> **[7:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=423)** And there we go.
>
> **[7:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=425)** I entered my password, it connected to the MongoDB database, and imported 100 documents, our 100 contacts, into our contacts database contacts collection.
>
> **[7:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=439)** Let's go over to Atlas.
>
> **[7:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=448)** And say Browse Collections.
>
> **[7:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=452)** And click on the contacts collection.
>
> **[7:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=459)** And we can see our contacts, or at least the first 20 of them in the window.
>
> **[7:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=463)** Feel free to explore a little more on your own.
>
> **[7:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=479)** To access our database in C++ we need the MongoDB C++ driver.
>
> **[8:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=485)** Luckily, this driver is already baked into our code, our Docker file and Cmake list.text already have them included.
>
> **[8:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=495)** So let's go into main.cpp.
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=503)** Okay, so we're going to come here to our Crow_all and click it.
>
> **[8:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=509)** And right below it, let's add the four includes from the MongoDB C++ driver.
>
> **[8:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=517)** They are client.hpp, instance.hpp, uri.hpp, and bsoncxx/json.hpp.
>
> **[8:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=529)** Next we come down here just below the Crow SimpleApp app.
>
> **[8:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=537)** So again, first we added MongoDB specific includes at the top, bringing in necessary C++ drivers for making a connection.
>
> **[9:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=553)** Next, we initialize our MongoDB connection by creating an instance, retrieving the connection strength from an environment variable, establishing the database connection, and accessing our contacts collection.
>
> **[9:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=571)** Finally, we create a new /contacts route that retrieves all documents from our collection, converts them to JSON format, packages them into a structured response, and returns this data when someone visits the endpoint.
>
> **[9:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=589)** This transforms our simple web server into a data-driven API serving real information from our MongoDB Atlas database.
>
> **[10:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=604)** Make sure we save this off.
>
> **[10:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=608)** And let's return to the terminal.
>
> **[10:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=610)** Let's make sure we're in the CPP web directory.
>
> **[10:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=613)** So let's go up one.
>
> **[10:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=622)** Let's go ahead and rebuild our server.
>
> **[10:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=638)** Let's give ourselves the screen.
>
> **[10:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=646)** And let's get ready to run our web server again.
>
> **[10:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=649)** So this command launches our Crow web server container with a direct connection to our MongoDB Atlas database.
>
> **[10:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=655)** The -e flag passes our database connection string while -p8080 makes this server accessible in our browser.
>
> **[11:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=664)** The --rm flag keeps things tidy by removing the container when we're done.
>
> **[11:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=672)** So we go ahead and run this.
>
> **[11:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=674)** Let's go over to local host 8080.
>
> **[11:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=683)** Let's make sure we refresh.
>
> **[11:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=686)** And go to /contacts.
>
> **[11:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=697)** And we can see our contacts being displayed on the page, all 100 of them.
>
> **[11:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=702)** Congratulations, you've built a complete C++ web application with MongoDB.
>
> **[11:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=707)** You've set up MongoDB Atlas, connected your C++ Crow app to a real database, and created an API that serves JSON data.
>
> **[11:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=718)** This powerful C++ MongoDB combination gives you the foundations for building fast, scalable web applications.
>
> **[12:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=725)** Keep exploring and building great things.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), case, (1), super (1), require (1), finally, (1)
> **CLI Commands:** make (4), aws (2), brew (2), cd (1), docker (1)
> **Env Vars:** aws (2), json (2), api (2), cpp (1)
> **UI Navigation:** click on (4), go to (3)
> **Tools:** terminal (3), vs code (1)
> **Prerequisites:** set up (2), setup (1), install (1)
> **File Paths:** contacts.json (1), main.cpp (1)
> **Versions:** 3.7 (1), 6.0 (1)

#### Uploading JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=0)** - [Instructor] We have a MongoDB instance running in the cloud.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=3)** We need to install MongoDB locally so we can use its tools.
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=7)** Go to www.[mongodb.com/download-center](https://mongodb.com/download-center).
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=13)** Be sure to download the free community server edition for your operating system.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=17)** If you have a Mac, I highly recommend using home brew.
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=20)** I'm going to use it now, so let's go back to the terminal.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=24)** I'm gonna first do a brew update and then I'm gonna do a brew install MongoDB.
>
> **[0:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=37)** This will take just a few seconds and now we have MongoDB installed and we can use its tools.
>
> **[0:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=45)** We are going to seed our database with some contact information.
>
> **[0:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=48)** Included in the exercise files is contacts.json which is structured like the data on the slide.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=54)** Each contact has five fields, all strings.
>
> **[0:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=58)** So we have a first name, last name, email, photo, and phone for each contact.
>
> **[1:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=66)** We need to copy our connection string from mLab.
>
> **[1:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=69)** You can use the link on our app's dashboard on Heroku, so we can use this link right here, mLab MongoDB.
>
> **[1:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=77)** This will take us back to the database for our app and we need to copy the information just below where it says using the mongo shell and I'm gonna copy starting with the letter D all the way over to just before that first break and I'm gonna just do a command + C on the Mac, control + C on Windows, and copy that or you can just write it down, it's not that long, and I'm just gonna keep that in the clipboard for a second.
>
> **[1:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=104)** I'm gonna go back to the terminal and I'm gonna type cd.
>
> **[1:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=109)** I am going to get the URL to the exercise folder for this chapter, which is Desktop/Exercise\ Files/Ch\ 04/04_02 and I'm gonna go there to Directory.
>
> **[2:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=126)** I can see the contacts.json is there.
>
> **[2:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=129)** It's really important to pay attention on this next command.
>
> **[2:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=132)** It's kind of long and if you get any part of it wrong the error messages that you get don't really make sense.
>
> **[2:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=140)** So first we're gonna type mongoimport, we're gonna do a space and a -h and -h stands for host.
>
> **[2:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=150)** I'm gonna do a command + v, a copy of the string that I got from mLabs.
>
> **[2:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=155)** I'm gonna scroll all the way back 'til I get just before this forward slash.
>
> **[2:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=160)** I'm gonna delete it, put a space, do a -d, and that is for database, that is the name of our database.
>
> **[2:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=169)** Then I am going to do a -c.
>
> **[2:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=172)** This is for collections, we're gonna call this collections contacts.
>
> **[2:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=177)** I'm gonna do a -u, this is for user.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=181)** Our user's name is admin.
>
> **[3:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=184)** Then I'm gonna do a --file contacts.json.
>
> **[3:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=192)** It is, again, really important that you are in the directory where this file is.
>
> **[3:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=198)** File navigation does not work here.
>
> **[3:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=201)** Then I'm gonna do a --type, a space, and then put json, this is a json file, and the last command is --jsonArray.
>
> **[3:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=215)** The file is a json array and I'm gonna hit return.
>
> **[3:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=220)** It's gonna prompt me for my password and this is for the admin user.
>
> **[3:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=226)** And voila, we can see that it connected to our database, it imported 100 documents.
>
> **[3:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=233)** Let's go back up to mLab and verify this.
>
> **[3:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=236)** So we go back to the browser.
>
> **[3:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=238)** Here's where we were before where there were no collections, I do a refresh, we can see now that we have contacts, there's 100 documents, and also it's important to note that if I click here on this contacts, I can view all of the records.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=256)** I can also edit them, I can delete them, I can also add new documents right here from mLabs if I want to.
>
> **[4:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=269)** So there we have it, we've imported some data into our database so we have some data to query from our application.
>
> **[4:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=277)** Congratulations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (2), type, (1), return. (1), this. (1)
> **CLI Commands:** brew (3), mongo (1), cd (1), make (1)
> **Code Identifiers:** mlab (3), mlabs (2), jsonarray (1)
> **File Paths:** contacts.json (3)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), stands for (1)
> **Tools:** terminal (2)
> **Exercise Files:** download the (1), exercise files (1)

#### Adding the MongoDB C++ drivers
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=0)** - In order to access our database on mLab, we need to add the MongoDB C++ driver library to our code. Unfortunately, we can't simply download it. We need to build it.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=13)** And before we can build the C++ library, we need to first build the C library it requires.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=19)** Let's get a new Docker image that will build and install the libraries.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=24)** So let's return to Atom. In Atom, we're gonna right click on "hello crow". We're gonna say new, folder, we're gonna name this folder "bbox".
>
> **[0:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=36)** Then, the Docker file we need is a bit complicated.
>
> **[0:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=40)** So to reduce errors I've provided a copy of it in the exercise files for Chapter 4 in section 04_03.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=51)** So let's go back to our "Exercise Files", 04, 03.
>
> **[0:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=56)** Here's our Docker file. We're gonna do a Command + C to copy it. Then we're gonna come back to Atom, we are gonna right click on "bbox".
>
> **[1:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=66)** We're gonna click on "Show in Finder", with "bbox" selected. We're gonna do a Command + V to paste the Docker file.
>
> **[1:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=76)** And we can just close that guy up.
>
> **[1:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=78)** Come back here, reveal it, and click it.
>
> **[1:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=83)** Now, here is our new Docker file.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=87)** The Docker file begins like the first one we built.
>
> **[1:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=89)** Lines 1 through 9 are creating a C++ development environment. Lines 11 through 28 contain three new commands.
>
> **[1:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=102)** "WORKDIR" sets the current working directory on the Docker image we are building.
>
> **[1:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=107)** Next, the "RUN git" command builds the Mongo C Driver library. It gets the source code from GitHub, then uses CMake to create the make file, builds and installs the library.
>
> **[2:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=121)** And the last command, right here, "ldconfig", tells the operating system that there is a new library.
>
> **[2:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=131)** The last "RUN git" command builds the Mongo C++ driver.
>
> **[2:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=135)** By getting the source code again from GitHub, then it executes CMake, the options pass include "DBSONCXX_POLY_USE_MNMLSTC" which brings C++ 14 and beyond features to C++ 11.
>
> **[2:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=150)** And "DCMAKE_BUILD_TYPE=release" which builds a production release of the driver.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=157)** The other options simply tell the build where different components are located in the file system. The command concludes with "ldconfig" which tells the system about the new library. So now if we go to the terminal, we wanna be in the "bbox" directory.
>
> **[2:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=174)** So we should only see the single Docker file here.
>
> **[2:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=177)** We're gonna type in the command "docker build --rm --squash --no-cache -t bbox:latest ."
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=195)** Hit return. This command builds the "bbox" image.
>
> **[3:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=200)** The "--rm" tells Docker to remove intermediate containers after a successful build.
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=205)** The "squash" option squashes newly built layers into a single layer. And the "-t" gives it the tag "bbox:latest". This will take a while.
>
> **[3:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=216)** But luckily, we only need to do it once.
>
> **[3:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=219)** So it might be a good time to take a break and stretch your legs.
>
> **[3:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=226)** Now we have a Docker image with all of the tools and libraries we'll need to build our web server.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (11), git (2), mongo (2), rm (2), make (1)
> **Code Keywords:** let (3), new, (1), pass (1), return. (1), while. (1)
> **Tools:** atom (3), github (2), terminal (1)
> **Env Vars:** run (2), workdir (1), dbsoncxx_poly_use_mnmlstc (1), dcmake_build_type (1)
> **UI Navigation:** click on (3), go to (1)
> **Exercise Files:** exercise files (2), source code (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** mlab (1)

#### Querying Mongo data
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=0)** - [Instructor] We now have the MongoDB C++ driver in our Docker image.
>
> **[0:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=4)** In order to use it we'll need to update our root Docker file, change a few lines in CMakeLists.txt and add code to main.cpp.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=13)** Let's get started.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=15)** So we're gonna open up the root Dockerfile.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=17)** So here's hello_crow.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=18)** We're not in bbox.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=19)** We're gonna open up this root Dockerfile.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=21)** We're gonna change where it says hello_crow to hello bbox:latest, and I'm gonna put a little space in there.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=30)** This WORKDIR I'm going to make a copy of that line so I have two of them.
>
> **[0:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=35)** The first one I'm gonna delete off the build from the end and I'm gonna type COPY. . which is just gonna copy our hello_crow source code onto our Docker image.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=49)** Then after the second WORKDIR with the build on it I am gonna say RUN cmake .
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=59)** And I'm gonna say RUN make.
>
> **[1:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=63)** And then I'm gonna keep the command that says /hello_crow.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=67)** And that's gonna be it.
>
> **[1:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=68)** I'm gonna save that off.
>
> **[1:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=70)** Next we're gonna go into CMakeLists.txt.
>
> **[1:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=73)** Inside of CMakeLists.txt the first thing I'm gonna do is here where it says find_package(Threads) I'm gonna put a space and add the REQUIRED here.
>
> **[1:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=82)** Required just makes it so that in case it doesn't find this library it will error out of the build process, which is a good thing.
>
> **[1:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=91)** You don't wanna build for five or 10 minutes and then find out something that you needed was missing once it was trying to link it.
>
> **[1:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=98)** Then we're gonna add another find_package.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=101)** And this find_package is looking for libmongocxx, and it too is required.
>
> **[1:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=113)** Next I'm gonna just rearrange a couple of lines.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=116)** So here on line 13 I'm gonna take the add executable and move it before the include directory.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=123)** So it's just gonna say add_executable(hello_crow main.cpp).
>
> **[2:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=127)** Then on line 13 I'm going to modify this line so that it says target_include_directories.
>
> **[2:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=137)** I am gonna say hello_crow space.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=141)** We're gonna keep the boost libraries, but I'm gonna add a PRIVATE right here.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=147)** Then I'm gonna say space $ {} and then inside the curly braces I'm going to write LIBMONGOCXX_INCLUDE_DIRS.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=166)** So that's our LIBMONGOCXX_INCLUDE_DIRS directories.
>
> **[2:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=170)** Then on the final line the target link libraries, I'm gonna do a space here.
>
> **[2:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=177)** I am gonna say another $ {}, and here I'm gonna do LIBMONGOXCC_LIBRARIES,
>
> **[3:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=192)** and then I'm gonna save that off.
>
> **[3:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=194)** Go to main.cpp, close to the top of the file, right underneath where it says include crow_all I'm gonna add some more includes, and the first ones that I'm gonna include are gonna be #include, and this is gonna be &lt;fstream&gt;,
>
> **[3:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=219)** #include &lt;iostream&gt;, and we're gonna include &lt;vector&gt; and we're gonna include &lt;cstdlib&gt;, the C standard lib.
>
> **[3:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=236)** And the final thing I'm gonna include is gonna be &lt;boost/filesystem.hpp&gt;
>
> **[4:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=251)** and close that angle bracket.
>
> **[4:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=253)** I'm gonna put a little space in here.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=256)** Next I have three bson includes.
>
> **[4:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=258)** The first one is gonna be &lt;bsoncxx/builder/stream/document.hpp&gt;.
>
> **[4:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=275)** And I'm gonna do #include &lt;bsoncxx/json.hpp&gt;,
>
> **[4:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=285)** and I'm gonna do #include &lt;bsoncxx/oid.hpp&gt;.
>
> **[4:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=294)** This is working with Mongo's object ID.
>
> **[4:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=298)** Then I'm gonna put one more space and then I've got four Mongo includes.
>
> **[5:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=303)** So it's gonna be #include &lt;mongocxx/client.hpp&gt;,
>
> **[5:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=315)** #include &lt;mongocxx/stdx.hpp&gt;,
>
> **[5:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=328)** &lt;mongocxx/uri.hpp&gt;, and #include &lt;mongocxx/instance.hpp&gt;.
>
> **[5:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=345)** Now I'm gonna add some using statements.
>
> **[5:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=348)** There's gonna be seven bson using statements and one Mongo using statement.
>
> **[5:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=352)** So using bsoncxx::builder::stream.
>
> **[6:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=364)** Now there are gonna be six more of these.
>
> **[6:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=366)** So I'm gonna just make copies of them.
>
> **[6:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=368)** That's one, two, three, four, five, six, seven all together.
>
> **[6:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=373)** First one's gonna be ::close_array, ::close_document, ::document, ::finalize, ::open_array, ::open_document, and finally the last one actually is not a stream, it is basic::kvp, for key value pair.
>
> **[6:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=412)** And then we're gonna have a using mongocxx::cursor.
>
> **[6:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=419)** Now we're gonna scroll all the way down to our main function.
>
> **[7:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=424)** Inside of our main function, right after it says crow::SimpleApp app we're gonna go ahead and establish our connection with the database so we're gonna say mongocxx::instance.
>
> **[7:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=440)** The variable name is inst with {}; then we're gonna say string mongoConnect= std::string
>
> **[7:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=456)** and we're gonna call getenv, so we're gonna get an environmental variable, and this variable's name comes from Heroku.
>
> **[7:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=462)** This is the thing that it told us on the settings page, it's MONGODB_URI.
>
> **[7:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=469)** So we're gonna get that environmental variable because it's going to hold our connection string.
>
> **[7:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=475)** And then we're gonna do a mongocxx::client and we're creating our connection and the variable's gonna be called conn.
>
> **[8:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=486)** We're gonna have {}, here is what we're gonna instantiate this with, mongocxx::uri{} mongoConnect and then a ;
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=503)** and then we're gonna say auto collection = con we're gonna have two pairs of square braces and a semicolon.
>
> **[8:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=516)** Inside the second one is gonna go the name of the collection, which for us is contacts.
>
> **[8:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=524)** Inside of the first one, let us go to Heroku, go up to our database, we're gonna click on overview, click on mLab mongoDB.
>
> **[8:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=535)** And it says database: this is the name of our database.
>
> **[9:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=540)** I'm gonna do a command c to copy that name, go back to Atom, and then I'm gonna put some "" and inside those "" I'm gonna copy the name of our database.
>
> **[9:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=552)** So we've got our name of our database, name of our collection here.
>
> **[9:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=556)** Now I'm gonna scroll down and then just before our root route I am gonna create another route and we're gonna have app, and then the name of the route is gonna be contacts, and then after that we are gonna have some () and inside the () the first thing is gonna be some [] and in that [] this is our lambda capture.
>
> **[9:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=586)** We want to capture the collection.
>
> **[9:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=587)** So it's &collection.
>
> **[9:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=591)** Then we're gonna have our parameters, we're not taking any.
>
> **[9:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=595)** Then we're gonna have some {} and a ; and I'm gonna open this up right here between the {} and we're gonna say mongocxx::options::find
>
> **[10:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=612)** and we're gonna create a variable called opts and we're gonna say opts.limit.
>
> **[10:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=618)** So we're gonna use the mongolimit to limit the collection to the first 10 documents it finds.
>
> **[10:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=627)** Then we're gonna say auto docs = collection.find.
>
> **[10:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=634)** We're not gonna give it any query parameters but we are gonna pass in our options in order to limit it to the first 10.
>
> **[10:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=642)** Then we're gonna do an std::ostringstream, space,
>
> **[10:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=651)** and this is gonna be os.
>
> **[10:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=653)** And then we're gonna do a range base for, so we're gonna say auto &&, two &&, doc : docs.
>
> **[11:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=666)** We're gonna iterate over our documents.
>
> **[11:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=669)** And for each one we are going to write out bsoncxx::to_json and we're gonna write out the document.
>
> **[11:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=680)** And we'll also add a return \n and finally we're gonna return crow::response os.
>
> **[11:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=694)** and we're gonna convert it to a stream and add a ;.
>
> **[11:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=700)** All right so now we're gonna go back to the terminal.
>
> **[11:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=702)** We need to do a cd :: and go to the root directory.
>
> **[11:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=707)** Let's just do an ls, yep.
>
> **[11:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=710)** That's the root and we are going to do a docker build and this should be familiar now,
>
> **[11:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=717)** - -rm --squash -- no-cache -t hello_crow:latest .
>
> **[12:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=732)** This should not take that long to run since it's only gonna build our source code and then link it.
>
> **[12:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=741)** So it's gonna compile and link our source code in the Docker container.
>
> **[12:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=746)** So the next thing that we need to do, first thing we're gonna do is we're gonna go back to Heroku, go to the settings tab, reveal our config vars.
>
> **[12:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=757)** Here's our MONGODB_URI.
>
> **[12:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=759)** I'm gonna click in this box and do a command a to select everything.
>
> **[12:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=764)** And then I'm gonna do a command c to copy it.
>
> **[12:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=767)** And I'm gonna come back to the terminal and I'm gonna type docker run -p 8080:8080.
>
> **[12:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=779)** That's gonna open up my port.
>
> **[13:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=781)** Then I'm gonna do a -e.
>
> **[13:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=783)** The PORT I'm gonna pass in the port environment variable, so PORT=8080, space, and I'm gonna do another environment variable, -e and this is gonna be MONGODB_URI=, and I'm gonna have a pair of "", and then inside those "" I'm gonna do a command v to copy the connection string that I copied from Heroku.
>
> **[13:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=813)** And I'm gonna do a space and then it's hello_crow:latest and I'm gonna hit enter.
>
> **[13:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=823)** And we can see our server is now running on port 8080 so let's go to our browser.
>
> **[13:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=830)** Let's go back here, do a refresh.
>
> **[13:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=832)** We see we get our JavaScript message.
>
> **[13:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=835)** And now let's try our new endpoint, contacts, and voila, we've got data.
>
> **[14:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=845)** Let's just take a quick look.
>
> **[14:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=846)** We can see that there's 10 documents that are being displayed here.
>
> **[14:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=850)** The 10th one, the first name is Aila.
>
> **[14:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=854)** So let's have just a wee bit of fun.
>
> **[14:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=857)** We're gonna come back to Atom.
>
> **[14:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=860)** Right here where it says opts.limit(10), just before that line I'm gonna say opts.skip(9); and I'm just gonna save that off.
>
> **[14:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=874)** I'm gonna go back down to the terminal.
>
> **[14:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=876)** I'm gonna do a control c, and then I'm gonna do an up arrow to get back to my build command for hello_crow.
>
> **[14:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=884)** I'm gonna rebuild it.
>
> **[14:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=887)** And again this shouldn't take that long 'cause it's just gonna compile and link.
>
> **[14:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=891)** Then I'm gonna do an up arrow to get back to my command with all the connection information.
>
> **[14:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=897)** So I'm gonna run the server.
>
> **[15:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=900)** We're running again.
>
> **[15:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=901)** I'm gonna go back to the browser, and we can see that Donnajean is contact number one, Aila is contact number 10.
>
> **[15:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=908)** If I refresh the browser at this point, now Aila is contact number one and we've got nine new contacts.
>
> **[15:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=917)** So congratulations, we've written our first MongoDO query in C++.

> [!info]- Semantic Content
>
> **Code Identifiers:** hello_crow (9), find_package (3), mongoconnect (2), add_executable (1), target_include_directories (1)
> **CLI Commands:** docker (6), find (4), make (3), mongo (3), cd (1)
> **Code Keywords:** let (8), function (2), pass (2), delete (1), private (1)
> **Env Vars:** mongodb_uri (3), workdir (2), run (2), libmongocxx_include_dirs (2), port (2)
> **UI Navigation:** go to (5), click on (2), scroll down (1)
> **File Paths:** cmakelists.txt (3), main.cpp (3)
> **Tools:** terminal (3), atom (2)
> **Cross-References:** go back to (4)

#### Adding dynamic data to a page
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=0)** - [Narrator] We've written our first database query, but the output is pretty ugly.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=3)** Let's change that.
>
> **[0:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=5)** Crow supports a logic list template system named mustache.
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=9)** Mustache makes our C++ data available when the HTML page renders.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=14)** To use mustache, we need to make a few changes to our code.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=17)** So let's go ahead and return to Atom, and the very first change that we need to make is just below the namespace crow, we're gonna say using namespace crow::mustache.
>
> **[0:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=32)** Next we're gonna add a function called getview, and it's gonna return a type of string and getview, and it's gonna take in a const string reference to filename and a context, context, reference called x,
>
> **[0:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=55)** open and closed parentheses.
>
> **[0:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=56)** This has just one line, that one line is return load, and we're gonna say filename plus .HTML, so we're adding HTML to the end of the line.
>
> **[1:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=70)** Gonna do a .render x semicolon, then we need to just make one more small change.
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=79)** We're gonna copy this ..public and the plus sign and add it here as well.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=87)** Then we're gonna scroll down to the main function.
>
> **[1:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=91)** So right here in main, right after SimpleApp, let's put a little spacing there, and we're gonna have a set_base, and that's just gonna be a dot.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=105)** This sets the location of the mustache template, and for us, we're just gonna use our normal navigation that we've been using for our HTML files, and so we're just gonna put a dot here.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=116)** This is mandatory.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=118)** Without set_base, mustache will not work, so we have to include it even though we're not really using it.
>
> **[2:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=124)** We're gonna scroll down more until we get into our contact route.
>
> **[2:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=128)** Now, inside of our contacts route, first thing we're gonna do is we're gonna go ahead and delete the variable os, 'cause we're not using it anymore, and we're gonna have crow::json::wvalue, and we're gonna call that dto for data transfer object, and we're gonna have a vector of crow::json::rvalue
>
> **[2:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=156)** and call that contacts.
>
> **[2:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=158)** Now we already know that we're gonna have at least 10 contacts, so we're gonna say contacts.reserve.
>
> **[2:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=168)** We're gonna reserve enough room for at least 10 contacts, then we're gonna come down into our for loop, and we're gonna get rid of the double ampersands because we don't need those anymore, and we're also going to delete this whole line right here, and we're gonna replace the line with contacts.push_back
>
> **[3:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=194)** json::load, and that's gonna take bsoncxx::to_json
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=205)** and the doc, and then add a semicolon to finish that line up.
>
> **[3:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=210)** Next we need to tell the dto, what are we calling the contacts vector from within the HTML template?
>
> **[3:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=221)** Well we're gonna call it contacts.
>
> **[3:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=223)** Let's make it easy on ourselves, and it's gonna be equal to contacts.
>
> **[3:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=228)** And the final thing that we need to do here is that instead of returning a crow response, we're going to return getview, and we're gonna pass getview contacts comma dto.
>
> **[4:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=243)** So just out of a few lines, not too many, we're creating the dto object, creating our contacts, reserving space for 10 contacts, putting each of the documents into the contacts vector, pointing to the contacts vector from the dto object, and finally calling getview on contacts of dto.
>
> **[4:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=264)** Now we need to actually create the contacts.HTML, and we're gonna start that off by selecting the index.HTML, doing a command C, then selecting the public, and do a command V.
>
> **[4:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=275)** So we're just gonna make a copy of index.HTML, and I'm gonna call this contacts.HTML, and I'm gonna open it up and select it.
>
> **[4:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=286)** First thing I'm gonna do is change the title to contacts.
>
> **[4:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=291)** I'm gonna delete this Javascript file here.
>
> **[4:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=295)** I'm gonna change the style sheet, and the style sheet is now going to point to [https://cdnjs.cloudflare.com/ajax/libs/bulma](https://cdnjs.cloudflare.com/ajax/libs/bulma),
>
> **[5:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=318)** B-U-L-M-A, and bulma is a lightweight css framework similar to like the bootstrap or something.
>
> **[5:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=326)** It's really lightweight and gives you a lot of bang for the buck.
>
> **[5:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=330)** So, we're gonna say version is 0.7.1/css/bulma.min.css.
>
> **[5:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=344)** Now, from within inside the body, I'm gonna just delete everything.
>
> **[5:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=348)** And then I'm gonna start off with a section tag and the class on the section tag is section.
>
> **[5:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=356)** And I'm gonna close off the section tag so I don't forget.
>
> **[6:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=362)** Then inside the section tag is going to be a div tag, and the class of the div tag is content.
>
> **[6:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=373)** Close off that div.
>
> **[6:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=376)** Then, inside of here we're gonna have an h1 tag, and the class of the h1 is title, and the title is contacts.
>
> **[6:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=389)** Let's close off this h1 tag.
>
> **[6:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=392)** Then below the h1 tag we're gonna create a good, old-fashioned table, and the class of the table is table.
>
> **[6:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=401)** And we'll close off the table tag, and inside of here the first thing we're gonna do is have a table header, thead, and close off thead.
>
> **[6:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=417)** And inside of there we're gonna have a table row.
>
> **[7:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=420)** Close the table row, and here each table row's gonna have some table headings, so th, and we'll close th, and I need four of those altogether.
>
> **[7:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=433)** One, two, three, and four.
>
> **[7:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=437)** The first one, the first heading, is gonna be first name.
>
> **[7:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=442)** The second one is going to be last name, then email, then phone.
>
> **[7:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=452)** Now I'm gonna be a little bit lazy, and I'm just gonna copy the whole entire thead and change the first one to tbody, and change it to tbody down here as well.
>
> **[7:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=467)** The t row stays, these th's are gonna get changed into td and close td, and I'll delete these th's and make four copies of the td as well.
>
> **[8:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=483)** One, two, three, and four.
>
> **[8:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=486)** And the first one is gonna be double curly braces, first name.
>
> **[8:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=494)** Notice I did that.
>
> **[8:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=496)** Then it's gonna be double curly braces, last name, and we're spelling these exactly the same way that they're spelled in the contacts collection.
>
> **[8:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=509)** And double curly braces, email, and double curly brace, phone.
>
> **[8:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=517)** To have it render each document as a table row, we wrap the row with a section tag, and the section tag begins with a pound sign and then the name of the data field.
>
> **[8:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=529)** So, double curly braces, pound sign, contacts, and then to end the section tag we drop down here after the closing tr, double curly braces, forward slash, contacts.
>
> **[9:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=546)** And then we save that off, then we go to terminal.
>
> **[9:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=550)** We stop the server, let's just do a clear screen, and we're gonna rebuild.
>
> **[9:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=561)** Alright, and now we'll restart the server.
>
> **[9:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=566)** Server's running.
>
> **[9:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=567)** Here we are on the contacts page.
>
> **[9:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=570)** Let's just do a refresh, and there are our contacts using a bulma style, and that's very nice.
>
> **[9:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=578)** Now, before we go away, let's go back to our code and take a look at one thing.
>
> **[9:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=584)** Let's go back to main.cpp, take a look at the contacts route.
>
> **[9:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=587)** Right now we're returning a bunch of contacts.
>
> **[9:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=590)** How would we create a route for a single specific contact?
>
> **[9:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=594)** Well, that's not too difficult, so let's just go ahead and add it right now.
>
> **[9:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=598)** First thing that we want to do is we're just gonna come all the way back up to the top again, and I'm gonna add one more using statement, and this is gonna be using bsoncxx::builder::basic::make_document.
>
> **[10:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=618)** We need this in order to create our query.
>
> **[10:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=621)** And we'll go back down to the route, and then just before the crow route, we're gonna create another crow route and this is gonna be crow_route, app, and then our URL for this is gonna be /contact/.
>
> **[10:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=641)** Now we need a route parameter again, just like we have above and this is gonna be a string route parameter.
>
> **[10:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=648)** Then below here we're going to have, here's our lambda capture, we still need collection because that's pretty much the only document collection we're gonna work from.
>
> **[10:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=657)** So we go ahead and we pass that into our lambda capture, and for our parameters, we actually have parameters this time.
>
> **[11:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=665)** It's the email, so we're gonna use the email address of the contact, and it's a good choice since it is unique for each person.
>
> **[11:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=673)** So we're gonna say string email.
>
> **[11:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=676)** We're gonna have an open and closing curly brace, a semicolon, and then inside of the curly braces, we only need two lines of code.
>
> **[11:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=684)** First one we're gonna say auto doc = collection.find_one
>
> **[11:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=692)** and we're gonna say make_document, and then inside of the document we're gonna say kvp, key value pair, and then we're gonna pass in a string email.
>
> **[11:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=706)** That is the name of the key we're looking for, and then the value is gonna be equal to the email variable.
>
> **[11:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=716)** And then we're gonna say return crow::response bsoncxx::to_json, and then we're gonna take that document,
>
> **[12:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=733)** we're gonna get its value, and then in order for us to use that value, we're gonna get the view, and we're gonna send that into to_json, and put a semicolon on there, save that off.
>
> **[12:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=748)** Let's do a quick check, see if I see anything wrong.
>
> **[12:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=752)** No, let's go ahead back to the terminal.
>
> **[12:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=755)** We're gonna stop the server with the control C.
>
> **[12:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=758)** We're gonna up arrow until we get back to the build commands, so docker build.
>
> **[12:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=763)** Let it go ahead and build out our app, then we'll restart the server, do a refresh.
>
> **[12:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=773)** Okay, looks like everything's fine.
>
> **[12:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=775)** I will grab the email address for the first contact right here, Aila.
>
> **[13:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=781)** Then I'm gonna come up to the URL, I'm gonna delete the S, do a forward slash, then the email address, and I can see here's Aila's contact information.
>
> **[13:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=791)** Let's go back and grab another one just to be sure.
>
> **[13:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=795)** We'll grab the second to the last one.
>
> **[13:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=797)** Again, I'll modify the URL so that it's just contact and then an email address, and now we've got our contact route is working and we have two different routes, both querying our MongoDB database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), delete (6), pass (3), function (2), public (2)
> **Env Vars:** html (9), url (3)
> **Code Identifiers:** to_json (3), set_base (2), make_document (2), push_back (1), crow_route (1)
> **CLI Commands:** make (6), docker (1)
> **File Paths:** contacts.html (2), index.html (2), 0.7.1/css/bulma.min.css (1), main.cpp (1)
> **Tools:** terminal (2), atom (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Exercise Files:** template (3)

#### Challenge: Create a webpage with data
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=0)** (soft bell chiming)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=8)** - [Instructor] Let's test our knowledge with a challenge.
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=10)** Create an HTML page named contact.html in the public folder.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=15)** Modify the contact route to use contact.html.
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=20)** Use Mustache to render the contact data.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=24)** Use Bulma to style the page.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=27)** Give yourself 15 minutes or so to solve this challenge.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=30)** Good luck.

> [!info]- Semantic Content
>
> **File Paths:** contact.html (2)
> **Code Keywords:** let (1), public (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a webpage with data
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=0)** (upbeat delicate music)
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=7)** - [Instructor] How did you do with this challenge?
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=9)** Hopefully it wasn't difficult.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=11)** Here's how I solved it.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=13)** I modified the contact route to pass the contact data.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=17)** Then I created contact.html by copying contacts.html, and finally I modified the contact's html markup, and added the contact data to it.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=29)** Let's begin.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=30)** Go back into Atom, and right here, let's go ahead and modify.
>
> **[0:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=37)** The very first unit we need to do, is we're gonna say, crow colon colon json colon colon wvalue and that's gonna be our dto.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=49)** Then I say dto.
>
> **[0:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=52)** The name of the data in the dto is gonna be contact singular.
>
> **[0:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=57)** And it's gonna be equal to and I'm just gonna copy everything that is right here except I don't need that last set of parentheses.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=67)** And the only other thing that I need to do is I need to force send this through json load.
>
> **[1:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=73)** So json colon colon load then wrap this parentheses and so this bson to json doc.value.view and that's gonna be our contact data.
>
> **[1:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=91)** And then our return object is going to be getView.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=97)** And the name of the view is contact and the data is in dto.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=103)** And then we just need a semicolon at the end of that line.
>
> **[1:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=107)** Now we're going to come over here, select contacts.
>
> **[1:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=113)** Do you a command C and a command V.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=116)** We're gonna rename this to contact singular so I'm gonna delete that S, save it.
>
> **[2:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=123)** Go ahead and come down here.
>
> **[2:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=126)** Now I'm gonna change the contacts title to contact and I'm gonna change the h1 tag to contact.
>
> **[2:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=135)** Then I'm gonna take everything that's inside of the table right up into my section tag and I'm just gonna delete it.
>
> **[2:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=144)** And then after my section tag I'm gonna delete all of that as well.
>
> **[2:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=149)** So now my table is only partially there.
>
> **[2:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=153)** And I'm gonna change this TR to a div and also change it's closing tag.
>
> **[2:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=159)** Then I'm gonna replace each one of these td's with a ptag for paragraph.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=166)** So we're not gonna do anything fancy.
>
> **[2:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=168)** Bt this will look pretty nice nonetheless.
>
> **[2:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=171)** So ptag, ptag.
>
> **[2:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=176)** Ptag and ptag.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=180)** The other thing I'm going to do is just a nicety I'm gonna go ahead and take the last name, put a space right here and put the last name and the first name together.
>
> **[3:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=188)** Get rid of this ptag right there.
>
> **[3:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=190)** And one more thing I'm gonna do is there is an image tag so when we look we can see that there is photo and this photo has a URL.
>
> **[3:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=203)** And I'm gonna go ahead put that image tag on the page so right below all my ptags I'm gonna do an img source equals double quotes and inside the double quotes double curly braces and photo.
>
> **[3:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=220)** And then I'm gonna close that photo tag.
>
> **[3:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=223)** And then here I'm gonna change this from contacts to content.
>
> **[3:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=229)** And likewise here I'm gonna change it to contact as well.
>
> **[3:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=233)** So now they're singular and these are referring to keys in the object.
>
> **[4:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=242)** We save everything off.
>
> **[4:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=244)** Go down to the terminal.
>
> **[4:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=247)** I'm going to stop the server by typing control C.
>
> **[4:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=252)** I'm going to rebuild it.
>
> **[4:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=258)** All right and then I'm gonna start the server again.
>
> **[4:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=261)** Go back to the browser.
>
> **[4:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=264)** Refresh the page and there we go.
>
> **[4:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=267)** We've got our contact, the name is in one line now.
>
> **[4:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=271)** We've got an email, our phone number and the image of our contact.
>
> **[4:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=275)** You can try that with any of those.
>
> **[4:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=278)** Remember your code does not have to match mine perfectly it just has to solve the problem.
>
> **[4:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=283)** There are millions of different ways to write the exact same piece of code that are all equally correct.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2), pass (1)
> **File Paths:** contact.html (1), contacts.html (1)
> **Tools:** atom (1), terminal (1)
> **Code Identifiers:** getview (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. RESTful APIs

#### Creating an endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=0)** - [Instructor] Even though it isn't explicitly stated, the routes in crow only handle the GET method by default.
>
> **[0:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=6)** This makes sense since it is the most-used method.
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=9)** It is the one issued by the browser when you type in a URL.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=14)** If you wish to write a RESTful API, you'll need to know how to write route handlers for the other HTTP methods.
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=20)** In order to test the code in this section, you will need software which can issue requests using other HTTP methods.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=28)** I am going to use the free Restlet Client Chrome extension.
>
> **[0:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=34)** But there are others available and many are also free.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=38)** Adding support for other HTTP methods is relatively straightforward, but remember one important thing.
>
> **[0:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=45)** There can only be one handler for each route period.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=49)** So if you want to handle more than one method on a single route, they will have to share it.
>
> **[0:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=57)** Let's see how this is done.
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=59)** Let's go back into Atom.
>
> **[1:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=62)** Just ahead of our route route, we're gonna create a new route.
>
> **[1:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=68)** We're gonna say CROW_ROUTE.
>
> **[1:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=72)** We're gonna say app.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=74)** The name of this route is gonna be /rest_test.
>
> **[1:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=80)** To support the other methods, we have to chain methods to crow route.
>
> **[1:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=88)** So methods, and then as parameters, as arguments, we have to put in each HTTP method we wish to handle.
>
> **[1:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=98)** Let's begin by just putting in post.
>
> **[1:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=100)** So it's HTTPMethod::Post.
>
> **[1:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=107)** The next part of our code is similar to what we've already written.
>
> **[1:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=110)** Gonna add an open and closed parentheses, our lambda capture with nothing in it, then our lambdas argument.
>
> **[1:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=119)** We're gonna pass in the const request, and this is going to be &req.
>
> **[2:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=130)** Then we're gonna do a response &res.
>
> **[2:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=139)** Then we're gonna have open and closed curly braces, a semicolon on the end.
>
> **[2:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=143)** We're gonna open up right here.
>
> **[2:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=146)** Then the first thing that we're gonna do is, we're gonna need to know which HTTP method called us.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=152)** In order to know that, we have to get the request object.
>
> **[2:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=156)** So string method = method_name.
>
> **[2:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=163)** Then we pass in req.method.
>
> **[2:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=169)** This tells us which method called us and converts its name to a string.
>
> **[2:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=176)** Next we're gonna wanna set up our response object, so res.
>
> **[3:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=181)** We need to call set_header on our response object.
>
> **[3:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=186)** Our header is going to be of "Content-Type", and the content type for this one is gonna be text/plain, and then a semicolon.
>
> **[3:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=202)** Then we're gonna do a res.write.
>
> **[3:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=206)** We're just gonna write back a string which says, "Who called us?"
>
> **[3:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=211)** So method + " rest_test".
>
> **[3:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=219)** And finally, we're gonna do a res.end.
>
> **[3:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=224)** Save that off.
>
> **[3:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=226)** We're gonna go to the Terminal.
>
> **[3:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=229)** Go ahead and do a Ctrl+C to stop the server.
>
> **[3:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=232)** I'm going to use the up arrow until I see docker build command and run it again by hitting Return.
>
> **[4:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=240)** Hopefully this shouldn't take very long since we are just compiling and linking.
>
> **[4:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=246)** Now we're gonna relaunch the server.
>
> **[4:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=251)** I'm going to go to the browser.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=256)** I'm going to go to the Restlet Client and I'm gonna change this method to POST.
>
> **[4:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=263)** For the URL, I'm gonna say rest_test and I'm gonna say Send.
>
> **[4:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=271)** If we look down here, we can see it says POST rest_test.
>
> **[4:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=277)** That shows that our method is working.
>
> **[4:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=279)** If we do this, say, for instance, with a GET method and say Send, we get a 404 Not Found.
>
> **[4:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=286)** Try it with a PUT, Send, we get a 404 Not Found.
>
> **[4:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=291)** That's because we're not handling either of those methods.
>
> **[4:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=293)** Let's go back to the code and we'll add a couple of more methods in here.
>
> **[4:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=298)** So we'll say HTTPMethod::Get.
>
> **[5:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=305)** Let's go ahead and make a new line.
>
> **[5:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=307)** HTTPMethod::Put.
>
> **[5:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=313)** Now we're handling three different methods.
>
> **[5:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=315)** We're gonna save the code with the Command+S.
>
> **[5:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=318)** Go back to the Terminal.
>
> **[5:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=320)** Ctrl+C to stop the server.
>
> **[5:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=323)** Up arrow until I get to the docker build command.
>
> **[5:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=327)** I'm going to build the server again, restart the server, go back to the Restlet Client.
>
> **[5:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=338)** We can see the PUT command right here, and we'll do the Send again.
>
> **[5:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=342)** This time we get a PUT rest_test and 200 OK, meaning it all worked.
>
> **[5:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=348)** Let's try GET, try sending.
>
> **[5:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=351)** We get a GET rest_test.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=354)** Let's try DELETE, Send.
>
> **[5:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=357)** We get a 404 as expected because that's not a method we are currently handling.
>
> **[6:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=364)** That is all you have to do to create RESTful end points in crow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), default. (1), lambda (1), const (1)
> **Env Vars:** http (5), put (3), url (2), post (2), api (1)
> **Code Identifiers:** rest_test (6), method_name (1), set_header (1)
> **API Endpoints:** get  (3), put  (2), post  (1)
> **CLI Commands:** docker (2), make (1)
> **Cross-References:** go back to (3)
> **Tools:** terminal (2), atom (1)
> **UI Navigation:** go to (3)

#### Parsing the path
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=0)** - We've already seen Atom incorporate a single parameter into a route handler but what if we need more parameters?
>
> **[0:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=6)** That's not a problem.
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=8)** You can use as many parameters as your route needs.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=11)** Let's return to the contact route handler.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=14)** Currently, we have a route handler which searches for the contact via a single route parameter, the email address.
>
> **[0:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=21)** Let's write another handler, this time passing the first and last names.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=25)** So, we'll make a copy.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=28)** And put it right below it.
>
> **[0:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=31)** Go ahead and adjust.
>
> **[0:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=33)** And now, we're gonna add a second string, so string.
>
> **[0:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=39)** And this is gonna be firstname, and the second one is gonna be lastname.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=49)** Now, we're gonna have to make another change, here, and that is that we need the request and response objects.
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=54)** So, I'm gonna say const request reference req.
>
> **[1:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=61)** Response reference res.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=67)** I need to modify this getView and I'll explain in just one moment why we're gonna modify it but now, we're gonna call it with a res contact.
>
> **[1:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=78)** Here, let's add a little space.
>
> **[1:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=83)** We're now gonna search for first name and last name, so first with a capital N, Name, and that's gonna be firstname.
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=94)** And then, we need to create another key value pair, so kvp.
>
> **[1:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=100)** The property is lastName with a capital N, and lastname.
>
> **[1:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=107)** Then, we're gonna go to the top and I'm going to change this getView from returning string to returning void.
>
> **[1:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=116)** It is now gonna take the response, reference res.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=122)** And then, inside here, we're gonna say res.set_header and it's gonna set the header to Content-Type, and the content type for an HTML file is text/html.
>
> **[2:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=142)** This is the thing that's missing.
>
> **[2:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=144)** It's not sending the content type when we are creating templates using Mustache.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=152)** It's only sending the data and even though almost every browser in the universe will render this, neatness still counts, so now I'm gonna have auto text, and that is going to be equal to this value, right here.
>
> **[2:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=170)** Then, we're gonna say res.write(text) and finally, we'll end with res.end to close off the response object.
>
> **[3:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=184)** Let's just take another quick look.
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=185)** We got res, res here, alright.
>
> **[3:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=188)** Then, we're gonna go down and then just before the main function, I'm gonna add another helper function.
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=195)** And this helper function is gonna be return type void.
>
> **[3:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=199)** Its name is notFound.
>
> **[3:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=201)** It is going to take a response reference res and a const string reference to message.
>
> **[3:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=212)** And it's going to res.code = 404 and that should be res, and then it's gonna res.write.
>
> **[3:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=226)** Message + a string.
>
> **[3:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=231)** Colon space Not Found.
>
> **[3:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=236)** And then, res.end.
>
> **[4:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=240)** And that's just a helper method when we need to throw a 404, I can just call this method, instead.
>
> **[4:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=248)** Then, from with inside of our contact string string, I am going to do the following.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=256)** If find one does not find a document, doc is set to false, so I am going to put if(!doc), meaning if doc is false, then return notFound with res and the message is gonna be Contact, so it's just gonna say contact not found.
>
> **[4:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=288)** Now, we need to go, carefully, through the code and make an update, and I wanna copy this, first, and up here, I'm gonna make the change so that it's just directly calling getView, passing the response.
>
> **[5:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=309)** Let's see where else getView might be.
>
> **[5:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=313)** There's one.
>
> **[5:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=314)** Let's find another.
>
> **[5:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=315)** Oh, there's one, right there.
>
> **[5:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=322)** And we need to add to the parameters.
>
> **[5:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=326)** So, let's see if there's any more.
>
> **[5:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=329)** So, here's getView, turns void.
>
> **[5:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=333)** There's the first one and it has the parameters.
>
> **[5:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=335)** There's the second one and it has the parameters, and there's a third one, and it has the parameters.
>
> **[5:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=342)** So, we save this off.
>
> **[5:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=345)** Go to the terminal.
>
> **[5:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=346)** Go Control + C to stop the server.
>
> **[5:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=349)** And if you'll up arrow to find the docker build command, we're gonna run it so that it rebuilds hello_crow.
>
> **[6:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=360)** And now, we're gonna rerun the server, go to the browser, refresh the contacts page, okay.
>
> **[6:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=368)** Good, that's still rendering.
>
> **[6:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=369)** We're gonna get Isabeau Luff.
>
> **[6:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=373)** Come up to the URL line.
>
> **[6:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=375)** I'm gonna delete the S, add a forward slash, do a paste, and add another forward slash in between their first and last names, and hit Enter, and there goes Isabeau Luff.
>
> **[6:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=389)** Let's go back, here, and let's get Maureen.
>
> **[6:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=393)** Do the exact same thing.
>
> **[6:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=395)** Delete that, add that, and add a backslash.
>
> **[6:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=400)** Oops, I forgot the slash.
>
> **[6:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=404)** Alright, so we get that.
>
> **[6:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=406)** Now, let's search for a name I'm pretty sure isn't in there.
>
> **[6:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=416)** And we get a Contact: Not Found.
>
> **[6:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=418)** Okay, so.
>
> **[6:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=419)** Now, we know how to create handlers with more than one parameter.
>
> **[7:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=425)** Let's return to Atom and we're gonna create three new routes, and I'll just create them right here.
>
> **[7:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=433)** What these routes are gonna do, they're all gonna be named add.
>
> **[7:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=436)** The first one's gonna add two integers, the second one's gonna add two doubles, and the third one will concatenate two strings.
>
> **[7:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=443)** So, I'm gonna say CROW_ROUTE.
>
> **[7:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=448)** It's gonna be app.
>
> **[7:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=449)** It is a... Forward slash add, and then the first one's gonna be int.
>
> **[7:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=458)** Int.
>
> **[7:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=461)** We're not gonna do anything in our lambda capture.
>
> **[7:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=465)** Inside of our parameters, we're gonna take, well, let's just copy request and response.
>
> **[7:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=476)** I'm just gonna copy those from the method above.
>
> **[7:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=478)** Paste them right there.
>
> **[8:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=481)** Then, we're gonna have our open and close curly braces, and then, inside the curly braces, we'll start writing some code.
>
> **[8:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=488)** They should actually be indented one over.
>
> **[8:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=493)** This is actually gonna be some fairly simple methods.
>
> **[8:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=496)** So, we're just gonna say res.set_header and the Content-Type is going to be text/plain.
>
> **[8:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=510)** Then, we're gonna create an ostringstream called os and on the first one, we're gonna say os Integer, colon space, and I'm gonna say A, then a space + space, and then B, then a space = space, and then A + B.
>
> **[9:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=545)** And then, we're gonna end this with a \n and a semicolon.
>
> **[9:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=551)** Now, let's go ahead and put those route parameters in, so we've got an int A and an int B.
>
> **[9:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=562)** Then, we'll do a res.write, os.str, and a semicolon and a res.end, and a semicolon.
>
> **[9:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=575)** We're creating a route called add.
>
> **[9:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=578)** It takes two integers.
>
> **[9:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=581)** It is gonna call the first integer A, the second integer B.
>
> **[9:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=584)** We're going to display A + and then display B, and then say =, and then, do the math A + B.
>
> **[9:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=594)** Now, I'm gonna create two more handlers very, very similar to this, so we're gonna do Command + C to copy, and the first one, remember, now, I absolutely have to change the names of these routes.
>
> **[10:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=607)** Otherwise, I will get a runtime error.
>
> **[10:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=610)** First one's gonna be double.
>
> **[10:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=614)** And this needs to be a double.
>
> **[10:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=617)** So, A is a double and B is a double.
>
> **[10:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=621)** But the math remains the same and I'm gonna just change that to say double.
>
> **[10:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=628)** Likewise, down here, let's get it lined up.
>
> **[10:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=631)** This is gonna be a string and this is gonna be a string, and then A is a string, and B is a string.
>
> **[10:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=644)** And now, we're going to put string, here but otherwise the math remains the same.
>
> **[10:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=652)** So, I'm gonna do a Command + S to save this.
>
> **[10:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=655)** Go to the terminal.
>
> **[10:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=657)** Do Control + C to stop the server.
>
> **[11:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=661)** Go ahead and build.
>
> **[11:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=665)** And restart the server.
>
> **[11:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=668)** Go to the browser.
>
> **[11:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=670)** And we're going to say add.
>
> **[11:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=674)** Let's just do something really simple, one and two, and notice, I get an integer.
>
> **[11:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=680)** One plus two equals three.
>
> **[11:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=682)** If instead I say add 10.5 and 20.2, now I get double.
>
> **[11:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=693)** 10.5, 20.2 equals 30.7 and if I say add thunder and cat, I get a string, thunder plus cat equals thundercat.
>
> **[11:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=707)** Now, what happens when you mix the types?
>
> **[11:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=711)** Well, if I come in here and I say, add 10, which is an integer, and 29.1, which is a double.
>
> **[12:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=721)** Double's gonna handle it and the reason why is because the route does not match integer but 10 works as a double as well as an integer.
>
> **[12:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=730)** So, the router took a look at int, and int said nope, doesn't match.
>
> **[12:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=734)** He took a look at double and double said, yes.
>
> **[12:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=736)** It matches.
>
> **[12:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=738)** Likewise, if I say seven plus dust, so now we've got an integer and a string, and its string is going to handle it.
>
> **[12:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=748)** So, it took a look and it said, does it match integer and integer?
>
> **[12:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=751)** No, does it match double and double?
>
> **[12:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=753)** No, does it match string and string?
>
> **[12:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=755)** Yes because everything matches a string and this brings up kinda the final point, here, is that the order of these routes is critically important because the router will stop the first time it finds a route which matches and everything matches a string.
>
> **[12:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=778)** If you have a string handler and you have number handlers, the string has to go after the number handlers.
>
> **[13:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=786)** To kinda demonstrate that, we'll make one quick change, and what I'm gonna do is I'm just gonna take this string handler for add that adds string and string, I'm gonna cut it out, and I'm gonna put it just before the int handler.
>
> **[13:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=807)** Alright, so I'm gonna save that.
>
> **[13:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=809)** I'm gonna go back to the terminal.
>
> **[13:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=812)** Control + C to stop the server.
>
> **[13:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=815)** Let's build.
>
> **[13:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=819)** Start the server.
>
> **[13:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=821)** Go back to the browser and I say, add one and two.
>
> **[13:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=828)** And you notice what it says, string.
>
> **[13:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=830)** One plus two equals 12.
>
> **[13:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=833)** Well, that's probably not what I wanted.
>
> **[13:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=835)** Let's do 100.1 and 102.7.
>
> **[14:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=842)** Two doubles and I get string.
>
> **[14:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=845)** 100.1 and 102.7, and then, it just gives me a mismatched thing but it's treating it as a string.
>
> **[14:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=852)** So, it's just concatenating everything together and we get 100.1102.7.
>
> **[14:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=860)** Again, the order of your route is important.
>
> **[14:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=865)** The router will stop when it finds the first route that matches and everything matches string.
>
> **[14:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=875)** So, if you have ints, ints only match ints.
>
> **[14:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=879)** Doubles can match both ints and doubles.
>
> **[14:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=882)** Strings can match everything.
>
> **[14:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=885)** Now you know how to create a route handler with multiple route parameters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this, (3), function (3), const (2), delete (2)
> **CLI Commands:** make (5), find (4), cat (2), docker (1)
> **Code Identifiers:** getview (5), set_header (2), notfound (2), lastname (1), hello_crow (1)
> **Versions:** 10.5 (2), 20.2 (2), 100.1 (2), 102.7 (2), 30.7 (1)
> **Definitions:** is a  (5), is an  (1)
> **Tools:** terminal (3), atom (2)
> **UI Navigation:** go to (5)
> **Env Vars:** html (1), url (1), crow_route (1)

#### Reading the query string
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=0)** - [Narrator] Query strings are the part of the URL that comes after the question mark.
>
> **[0:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=4)** They're never used to determine a route handler, but since they are related, let's see how to parse them in Crow.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=12)** To access the query string, you'll need the request object.
>
> **[0:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=17)** So, let's go ahead and just build a very simple handler to test this out, and so we're gonna say crow underscore route.
>
> **[0:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=27)** and we have an app.
>
> **[0:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=30)** The name of our handler is going to be forward-slash query, and we are going to have nothing in our lambda capture.
>
> **[0:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=40)** Inside of our parameters list, we're gonna take the... Let's go ahead and just grab them from up here... The request and response objects, so paste those right there, and then we have an open and close in curly braces.
>
> **[1:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=60)** The semicolon, we're gonna open that up, and what we're gonna do, is we're gonna say auto first name equals R-E-Q for the request, U-R-L underscore param, and that's with an S, params.
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=79)** And then we're gonna call the get method, and say first name, and we're gonna do the same thing for the last name, and last name here.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=97)** We're gonna create another O-string stream and call it OS again, and we're gonna say OS hello with a space, insertion operator.
>
> **[1:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=112)** And I'm gonna just do a ternary check here.
>
> **[1:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=115)** I'm gonna say first name, question mark.
>
> **[1:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=119)** If first name is set, so right here, if it does a get for first name and it doesn't find anything first name will get set to null pointer, And null pointer is something you can check against.
>
> **[2:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=130)** I'm gonna just say first name, and if first name is valid, we'll return the first name.
>
> **[2:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=137)** Otherwise, we're gonna return an empty string.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=141)** And I'm gonna do another insertion operator, and let's go down to the line below, and here I am going to say, just put a space in between in case there are words there.
>
> **[2:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=153)** Gonna do the exact same thing that I did up here, only now with last name, so we've got last name in last name.
>
> **[2:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=165)** And then I'm going to do another insertion operator, and we'll do end-l this time.
>
> **[2:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=171)** Then we'll say res dot set, header, and again I'll use content, type, and text forward slash plain to a res, write, OS dot STR. And res dot end.
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=195)** We're going to check to see if there's a first name that's being sent. Check to see if there's a last name that's being sent. And then we're going to create this hilt greetings, and using potentially the first name and the last name, and then write this out.
>
> **[3:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=213)** So let's save this, go to the terminal, control C to stop the server, rebuild, then we'll restart the server, Go to the browser. We'll say query.
>
> **[3:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=232)** And then I'll do a question mark, first name equals John ampersand. Last name equals Smith.
>
> **[4:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=246)** And we get a hello, John Smith.
>
> **[4:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=248)** Now the order that these guys are in doesn't matter, so I can change them around and say last name is Smith, first name John, and it still works.
>
> **[4:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=261)** Just to make sure that you believe me, let's change that to Joe Smith, and if I take one of these off, so now I've got a last name of Smith and no first name, notice now I get just Hello Smith.
>
> **[4:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=274)** Likewise, if I change this to first name, and let's make it Anna, and it'll just say hello Anna.
>
> **[4:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=285)** That's pretty much all there is to retrieving values from the query string.
>
> **[4:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=288)** Crow makes it simple.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), lambda (1), type, (1), this, (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** url (1), str (1)
> **UI Navigation:** go to (2)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Converting to JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=0)** - [Instructor] JSON is an extremely popular data format.
>
> **[0:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=3)** Many web servers, especially those used by JavaScript front-ends like Angular and React, use JSON as their default format.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=11)** How can we return JSON data from crow?
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=14)** Let's return to Atom.
>
> **[0:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=16)** Let's take a look at the contacts handler, and this is contacts plural.
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=20)** It returns a webpage with 10 contacts rendered in an HTML table.
>
> **[0:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=26)** We will make a version of it that returns JSON data instead of a webpage.
>
> **[0:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=31)** Let's begin by making a copy of the contact's handler.
>
> **[0:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=34)** So I'm just going to copy this whole thing, right here.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=38)** Now I got the whole thing copied.
>
> **[0:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=39)** Now remember, there can only be one of every route so instead of calling this one contacts, I'm going to call it api/contacts.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=51)** I'm gonna go ahead and delete the response object because I'm not gonna need it.
>
> **[0:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=57)** And we've got mongo.
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=59)** Skip, skip.
>
> **[1:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=61)** Vector.
>
> **[1:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=62)** Yeah, that's all fine.
>
> **[1:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=64)** And then right here, instead of saying getView, so right now my dto holds my contacts and instead of calling getView on 'em, I'm gonna instead call return crow ::response and these are curly braces, dto.
>
> **[1:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=88)** And just for the sake of neatness, I'm gonna move this dto guy down to here.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=97)** The reason why is just, you should always declare stuff closest as you possibly can to where they're actually used.
>
> **[1:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=104)** That is pretty much it.
>
> **[1:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=107)** Crow has a constructor for the JSON data.
>
> **[1:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=109)** In fact, when it creates a response object from crow::json::wvalue it automatically sets the content type to application JSON, for us.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=122)** So let's save this.
>
> **[2:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=125)** Let's go back to the terminal.
>
> **[2:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=127)** Control-C.
>
> **[2:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=130)** Let's rebuild and restart the server.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=138)** Go back to the browser.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=141)** Now this time I'm gonna call api/contacts and there you go.
>
> **[2:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=149)** Here's my data as JSON data.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=152)** We can validate this in the Restlet Client.
>
> **[2:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=156)** So if I come in here and I paste that same route and I say get.
>
> **[2:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=163)** Do a send.
>
> **[2:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=164)** I get a 200 OK.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=166)** Right here, it says that it's application/json and here you can see that it is JSON objects.
>
> **[2:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=173)** We've got series of key value pairs.
>
> **[2:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=177)** That's all there is to creating a JSON endpoint in crow.

> [!info]- Semantic Content
>
> **Env Vars:** json (9), html (1)
> **Code Keywords:** let (6), delete (1), this. (1)
> **CLI Commands:** make (1), mongo (1)
> **Code Identifiers:** getview (2)
> **Cross-References:** go back to (2)
> **Tools:** atom (1), terminal (1)
> **Definitions:** is an  (1)
> **Best Practices:** you should always (1)

#### Challenge: Create an endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=0)** (wooshing)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=8)** - [Instructor] Let's put everything we've learned together with another challenge.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=12)** Modify the api/contacts route handler to use two query parameters, skip and limit.
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=20)** If skip is valid set the MongoDB skip option to its value.
>
> **[0:26](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=26)** Otherwise, use zero.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=28)** If limit is valid set the MongoDB limit option to its value.
>
> **[0:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=33)** Otherwise, use 10.
>
> **[0:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=36)** Here's a little hint of how to convert from string to integer.
>
> **[0:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=41)** Give yourself about 10 minutes to solve this challenge and good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create an endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=8)** - I hope you had fun with the challenge and got it working.
>
> **[0:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=11)** Let's see how I solved it.
>
> **[0:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=13)** Remember our programs don't have to look identical in order for both to be valid.
>
> **[0:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=18)** Very quickly I created two stings to hold the query paramaters.
>
> **[0:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=24)** skipVal and limitVal and then I create two integers, skip and limit and both of these check to see if skipval and limitval, respectively are valid and if so uses stoi to convert the string in to integer.
>
> **[0:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=39)** Otherwise the default values are used.
>
> **[0:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=41)** And finally I set skip and limit options using skip and limit variables.
>
> **[0:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=47)** So let's take a look at this in code.
>
> **[0:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=50)** Let's go to Adam Let us find, the api contacts route and so what we're gonna do right at the beginning I'm gonna say auto skipVal equals req, the request object and it's gonna be ur underscore params dot get and we're looking for a query parameter named skip.
>
> **[1:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=81)** I'm gonna the same thing auto, limitVal equals let's just be a little lazy and copy this.
>
> **[1:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=91)** Alright and change this to limit Then we're gonna have an int skip equals skipVal
>
> **[1:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=104)** question mark.
>
> **[1:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=106)** This is a ternary statement so if skipVal is valid, meaning that it is holding a string, we are gonna call stoi using skipVal otherwise we're gonna set this to zero.
>
> **[2:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=122)** And we're gonna do an int limit equals limitVal question mark, otherwise stoi limitVal colon 10
>
> **[2:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=136)** is the default for this one.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=138)** Now with those two values in hand they're either gonna be some number or zero, some number or 10 We're gonna change the skip option to use skip and the limit option to use limit and I'm gonna save that off I am gonna return to the terminal, do a control c, rebuild and run the server, turn to the browser and what we're gonna do here is api contacts question mark skip and we're gonna set it for nine and then set limit to ten,
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=185)** this is kind of the initial value equals ten and you notice that it doesn't seem like anything's changed but if I say skipped, is that skip to zero?
>
> **[3:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=200)** And if we take a look right here, cause our very first one is Aila and we're gonna change it so that skip is now zero and Aila should go to number ten.
>
> **[3:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=212)** And we can see that Aila moved, let's go and just be wild and say skip 50 and give me 20.
>
> **[3:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=222)** So there we go.
>
> **[3:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=224)** Now we are able to query our MongoDB data using dynamic skip and limit values.

> [!info]- Semantic Content
>
> **Code Identifiers:** skipval (5), limitval (4)
> **Code Keywords:** let (6), this. (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)


### 6. WebSockets and Crow

#### Reviewing the JavaScript client code
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=1)** - [Instructor] The JavaScript file, websocket.js and its associated webpage, chat.html are both stored in the root directory for chapter six.
>
> **[0:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=9)** Copy the JavaScript file to Public Scripts, so we're gonna do a Command + C to copy it, gonna go to Hello Crow, go to public, go to scripts, and do a Command + V, and we'll go back, copy the chat.html, Command + C, go to the public folder and do a Command + V, now we have both of those files.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=38)** Let's go ahead and go back to Atom, open up websocket.js.
>
> **[0:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=43)** Web Socket is a communication protocol which enables real-time data transfer between a client and server over a single TCP channel.
>
> **[0:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=51)** Web Socket uses both the WS and WSS protocols for Web Socket and Web Socket Secured.
>
> **[0:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=59)** Crow supports both protocols.
>
> **[1:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=61)** In order to use Web Socket in the browser, we will need a client written in JavaScript.
>
> **[1:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=67)** Don't worry, it's less than 40 lines of code.
>
> **[1:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=70)** The first line of our client websocket.js creates the URL to the server's Web Socket implementation, so we are getting the location.origin, changing the http to WS and whether it's http or https, it will be replaced correctly and then we add a backslash S which is the handler for Web Socket.
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=94)** Then we create a new Web Socket object named socket, we use J Query to give us references to the three UI elements, the input box, the text area, and the submit button, we then create a random number and assign it to ID.
>
> **[1:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=112)** We will use this to identify which user sent a given message.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=118)** We then have create message, which is a helper function which takes an ID, a type, and a body, and puts it in the correct message format.
>
> **[2:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=127)** We then have handlers for the four Web Socket events that we are supporting here on open, on close, on error, and on message.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=138)** And finally, the last bit of code is the handler for the on submit event which is triggered by either pressing return from the message box or clicking the submit button.
>
> **[2:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=150)** That is all there is to the JavaScript Web Socket code.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (1), function (1), type, (1), finally, (1)
> **File Paths:** websocket.js (3), chat.html (2)
> **UI Navigation:** go to (4)
> **Env Vars:** tcp (1), wss (1), url (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** atom (1)
> **Speakers:** - [instructor] (1)

#### Creating the C++ server code
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=0)** - [Instructor] In order to implement web socket, we need to add two header files, unordered set and mutex.
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=7)** So let's go to the main cpp, go to the top of the file and we're gonna say include unordered underscore set
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=20)** and include mutex.
>
> **[0:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=25)** Unordered set is a container, which stores data in no particular order.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=29)** The mutex helps make the code thread safe.
>
> **[0:33](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=33)** Now we go down to the main function.
>
> **[0:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=38)** And then right here in the main function, we're gonna do std colon colon mutex mtx.
>
> **[0:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=52)** And below it, we're gonna say std colon colon unordered underscore set.
>
> **[1:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=63)** And this is gonna be an unordered set of crow colon colon web socket colon colon connection and an asterisk pointer.
>
> **[1:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=76)** And then this is gonna be called users.
>
> **[1:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=79)** Okay then we go down just a little bit and we'll make this our first route.
>
> **[1:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=85)** Give us a little space.
>
> **[1:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=87)** Crow underscore route app comma ws.
>
> **[1:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=95)** As we said in the JavaScript file, ws is our route handler for web socket.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=101)** Now what comes next is different than anything we've done so far.
>
> **[1:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=105)** We're just going to, notice there's no semicolon at the end of that line, we're gonna indent one and we're gonna say dot web socket.
>
> **[1:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=114)** And this is gonna chain this method to the one above it.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=118)** And that's all there is to the web socket part.
>
> **[2:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=121)** Now we need to implement on open, on close, and on message.
>
> **[2:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=126)** So we say dot on open and then we're gonna have a lambda capture and the lambda capture's gonna take the ampersand and then inside of that we're gonna have a crow colon colon web socket colon colon connection
>
> **[2:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=149)** and it's gonna be a reference to conn.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=152)** Then we're gonna have our open and closed curly braces, no semicolon, and we're gonna open that up and then inside we're gonna say std colon colon lock underscore guard.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=166)** We're going to locking mutex to standard, std, mutex close angle bracket underscore mtx semicolon.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=180)** We're gonna say users dot insert and we're gonna insert the connection.
>
> **[3:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=190)** That's how we're gonna keep track and that's just reference conn and then a semicolon.
>
> **[3:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=196)** Let me drop down one line and we're gonna say dot on close and on close is going to look a lot like the one above it so I'm gonna save some time and just copy it.
>
> **[3:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=209)** So it's gonna have a lambda capture, we're gonna pass in some parameters, and we are going to have a const string reference reason
>
> **[3:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=225)** and this is why the connection closed, open and closed curly braces and a closing parentheses, but still no semicolon.
>
> **[3:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=234)** And we're gonna do something very similar to what we did above so let's just copy that.
>
> **[4:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=240)** And instead of saying insert, now we're gonna say erase and we're gonna delete that connection.
>
> **[4:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=249)** Then we do the final event handler, on message.
>
> **[4:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=256)** And again, it's gonna start very similar so let's save a little time by doing a little cut and paste.
>
> **[4:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=263)** Again we have the lambda capture, the connection, only this time we don't actually use the connection so I'm going to comment that out, but notice it has to be here because these parameters have to come in order and we're just letting anyone who comes along know that we're not actually using the connection in this code.
>
> **[4:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=285)** So then we have a const string and this is gonna be data and it's followed by a bool, is underscore binary.
>
> **[4:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=299)** Then we're gonna have an open and closed curly braces, a closing parentheses, and finally a semicolon.
>
> **[5:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=309)** Then we're gonna do the same thing that we've done up here.
>
> **[5:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=311)** We're going to put a lock guard on the mutex.
>
> **[5:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=318)** And below that, we're gonna do a range for and it's gonna be a for auto user colon users.
>
> **[5:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=331)** And then the first line inside we say if is underscore binary then we're going to user send underscore binary.
>
> **[5:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=350)** And what we're sending is data.
>
> **[5:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=352)** Else, we're gonna do a user send text.
>
> **[6:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=361)** And this is also gonna send data.
>
> **[6:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=366)** Then we're gonna have another route handler.
>
> **[6:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=370)** So I'll just copy this one.
>
> **[6:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=374)** And this route handler is going to be for forward slash chat.
>
> **[6:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=381)** It's gonna have an empty lambda capture.
>
> **[6:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=384)** It is going to take in a const request res
>
> **[6:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=392)** and a response and, I'm sorry, this should be req, R-E-Q, and then response, which is a reference to res, open and closed curly braces, ending semicolon.
>
> **[6:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=408)** And then this is just a one line route handler and it just says send HTML with res.
>
> **[6:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=417)** And the name of the file is going to be chat.
>
> **[7:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=423)** And then a semicolon.
>
> **[7:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=424)** Get rid of this extra space, do a command S to save, go down to the terminal, do a control + C to stop the server.
>
> **[7:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=435)** Let's just go ahead and do a clear here.
>
> **[7:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=438)** Let's build it and, again, all I'm doing is just doing the up arrow to cycle through commands I've already entered before.
>
> **[7:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=448)** Let's restart the server.
>
> **[7:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=452)** And let's go to the server.
>
> **[7:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=455)** First thing I'm gonna do is just refresh the page that I'm on just to make sure everything is still alive and kicking then I'm going to change the route to forward slash chat.
>
> **[7:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=466)** And there is our chat program.
>
> **[7:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=468)** Let's type a message, oh, that's a good message.
>
> **[7:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=470)** Hello world and send.
>
> **[7:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=474)** And let us open up Safari and I want to grab this URL.
>
> **[8:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=484)** Let's make this smaller and let's make this one smaller too so I can see them both at the same time.
>
> **[8:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=491)** And in this one I'm gonna respond by saying hola.
>
> **[8:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=494)** And then if over here I say that some dogs are brown.
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=503)** The desert is hot.
>
> **[8:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=507)** We can see our chat messages are going back and forth using web sockets.
>
> **[8:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=512)** And that is our implementation of web socket using Crow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), lambda (5), const (3), function (2), pass (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3)
> **Env Vars:** html (1), url (1)
> **Tools:** terminal (1), safari (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Running WebSocket on Heroku
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=0)** - [Instructor] Let's deploy our web server to Heroku again so we can check everything out in the cloud.
>
> **[0:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=6)** So first thing I'm gonna do is go ahead and do a Control-C to stop the server running on my own docker container.
>
> **[0:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=14)** I am going to do a clear screen.
>
> **[0:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=19)** And I'm gonna go ahead and build it one more time even though I just did so.
>
> **[0:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=23)** Again, just cause I like to be sure.
>
> **[0:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=28)** With the app built, let's go ahead and do a heroku login.
>
> **[0:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=31)** And I'm gonna go ahead and just clear this screen and do heroku login and it's gonna ask for my password and my two-factor authentication code.
>
> **[0:49](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=49)** Now, next I do a heroku container:login and normally this does not prompt me for anything if I'm already logged in.
>
> **[1:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=61)** Alright, so my login succeeded and I noticed that there is a Heroku update but I'm gonna skip that for now.
>
> **[1:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=68)** And next, I'm gonna do a heroku container:push web -a For this command and for the next two after it, remember to replace the name of my app, which is infinite-falls-24876, with the name of your app.
>
> **[1:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=89)** So I do a
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=90)** - a infinite-falls-24876.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=103)** And next, we're gonna do a heroku container:release
>
> **[1:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=112)** again with, web -a infinite-falls-24876.
>
> **[2:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=125)** and the final command that we're gonna run is heroku open - a infinite-falls-24876
>
> **[2:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=139)** and that should open up my website.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=141)** And give it a few seconds for the server to spin up on the cloud.
>
> **[2:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=149)** We've got our Hello from JavaScript land.
>
> **[2:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=152)** We say okay.
>
> **[2:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=154)** There goes the picture of my cat.
>
> **[2:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=157)** And now let's go to the chat.
>
> **[2:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=161)** There goes our chat.
>
> **[2:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=163)** Let's also bring up the chat in Safari.
>
> **[2:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=167)** Let's go to Heroku.
>
> **[2:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=170)** Alright, and so let's type a message.
>
> **[2:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=173)** Hello and we see it in both of them.
>
> **[2:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=176)** If I say Hola, over here, we see it on both of them and there is our chat app doing WebSocket in the cloud through Heroku.
>
> **[3:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=187)** All of our other routes are still live and valid.
>
> **[3:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=190)** So for instance, we can say contacts and there go our contacts.
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=195)** Let's stretch this out a little bit further.
>
> **[3:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=197)** Make it look prettier.
>
> **[3:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=199)** We can take one of these contacts and say single contact and search it by first and last name and there goes our contact, that way, and we can also say api/contacts
>
> **[3:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=227)** and here it is as JSON data and I can do things like say, ?skip=10 &limit=20 and there's my JSON data.
>
> **[4:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=244)** So feel free to fully check out your C++ web server running in the Heroku cloud.
>
> **[4:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=250)** I hope you've enjoyed this.
>
> **[4:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=252)** This is pretty exciting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (1)
> **CLI Commands:** docker (1), cat (1), make (1)
> **Env Vars:** json (2)
> **UI Navigation:** go to (2)
> **Analogies:** picture (1), for instance (1)
> **Speakers:** - [instructor] (1), - a (1)
> **Tools:** safari (1)
> **Definitions:** is a  (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980&t=0)** - [Instructor] Thanks for watching this course on Web Servers and APIs using C++.
>
> **[0:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980&t=5)** I hope you've enjoyed the information and will find some creative ways to put it to good use.
>
> **[0:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980&t=10)** There are a wide variety of courses covering C++ found in our library.
>
> **[0:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980&t=15)** Take care and keep on learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with C++]]
← [[Learning C++]] | **4 of 5** | [[Nail Your C++ Interview]] →

## Appears In

- [[Getting Started with C++]]

## Related Courses

_Courses sharing skills:_

- [[Nail Your C++ Interview]] — C++
- [[Learning C++]] — C++
- [[Introducing Functional Programming in C++]] — C++
- [[C++ Design Patterns- Structural]] — C++
- [[C Plus Plus Essential Training]] — C++

---

[↑ Back to top](#)