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
  - '[[Getting Started with C++]]'
prev_courses:
  - '[[Learning C++]]'
next_courses:
  - '[[Nail Your C++ Interview]]'
path_nav: '[{"path":"Getting Started with C++","position":4,"total":5,"prev":"Learning C++","next":"Nail Your C++ Interview"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/web-servers
  - skill/c
  - skill/application-programming-interfaces-api
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Web%20Servers%20and%20APIs%20using%20C%2B%2B.md)

![Web Servers and APIs using C++](https://media.licdn.com/dms/image/v2/C4E0DAQHrBt9kMUW87g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568666500963?e=2147483647&amp;v=beta&amp;t=cW6jJz22RAucIpxgPlHj10WipwN3hS-RckYxD80DDVQ)

# Web Servers and APIs using C++

> C++ has re-emerged as a go-to language for developing high-performance websites and web applications. C++ compiles to machine code, making it faster to start up and execute. For users, this means less time waiting for a site to render. This course teaches developers how to build a website powered by a MongoDB database and deploy it with a Heroku cloud server, all with C++. Instructor Troy Miles—a 

> [LinkedIn Learning](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus) | 2h 49m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Why use C++ to make a website?](#why-use-c-to-make-a-website)
- [**1. Installing Our Tools**](#1-installing-our-tools) (8 videos)
  - [Installing Docker](#installing-docker)
  - [Installing Atom](#installing-atom)
  - [Docker](#docker)
  - [Adding a volume](#adding-a-volume)
  - [Building Crow](#building-crow)
  - [Serving the example](#serving-the-example)
  - [Challenge: Modify the example page](#challenge-modify-the-example-page)
  - [Solution: Modify the example page](#solution-modify-the-example-page)
- [**2. Deploying to AWS ElasticBeanstalk**](#2-deploying-to-aws-elasticbeanstalk) (2 videos)
  - [Beanstalk](#beanstalk)
  - [Saving our container to Docker Hub](#saving-our-container-to-docker-hub)
- [**3. Building Websites**](#3-building-websites) (5 videos)
  - [Creating HTML pages](#creating-html-pages)
  - [Serving HTML pages](#serving-html-pages)
  - [Serving static content](#serving-static-content)
  - [Challenge: Create a new webpage](#challenge-create-a-new-webpage)
  - [Solution: Create a new webpage](#solution-create-a-new-webpage)
- [**4. Data Access**](#4-data-access) (7 videos)
  - [Atlas](#atlas)
  - [Uploading JSON data](#uploading-json-data)
  - [Adding the MongoDB C++ drivers](#adding-the-mongodb-c-drivers)
  - [Querying Mongo data](#querying-mongo-data)
  - [Adding dynamic data to a page](#adding-dynamic-data-to-a-page)
  - [Challenge: Create a webpage with data](#challenge-create-a-webpage-with-data)
  - [Solution: Create a webpage with data](#solution-create-a-webpage-with-data)
- [**5. RESTful APIs**](#5-restful-apis) (6 videos)
  - [Creating an endpoint](#creating-an-endpoint)
  - [Parsing the path](#parsing-the-path)
  - [Reading the query string](#reading-the-query-string)
  - [Converting to JSON data](#converting-to-json-data)
  - [Challenge: Create an endpoint](#challenge-create-an-endpoint)
  - [Solution: Create an endpoint](#solution-create-an-endpoint)
- [**6. WebSockets and Crow**](#6-websockets-and-crow) (3 videos)
  - [Reviewing the JavaScript client code](#reviewing-the-javascript-client-code)
  - [Creating the C++ server code](#creating-the-c-server-code)
  - [Running WebSocket on Heroku](#running-websocket-on-heroku)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use C++ to make a website?](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/why-use-c-plus-plus-to-make-a-website-25621006?u=76281980&t=0)** - [Troy] Modern C++ is an amazingly powerful language. It has the same features of other languages and one thing they don't, it compiles down to machine code. On the web, this means your users will wait less for your site to render. Our goal in this [[LinkedIn]] Learning course is simple, show you how to build a website in C++ using [[MongoDB]] as the database and deploy it to the internet using Heroku as our cloud server. Hi, my name is Troy Miles and I'm a Senior Software Engineer. So join me as we take a look at all C++ has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[MongoDB]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [troy] (1)


### 1. Installing Our Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Docker](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-docker?u=76281980&t=0)** - [Instructor] One of the hardest parts of using C++ is getting used to the complexities of its build chain. Programs have separate build and link steps. Libraries must be installed on both development, build, and production machines. If any piece isn't in sync, cryptic error messages appear. Docker is the cure for this pain. It enables us to create an image that contains all of the tools we need installed correctly and use that image for both development and production. We will use the Community Edition of Docker, which is available for free at store.[docker.com](https://docker.com). Click on the gray Community CE button. Click on the button for your operating system. Docker supports macOS, [[Windows]], and most versions of [[Linux]]. I'm gonna choose the Mac. Be sure to download the stable version of Docker. The Edge version has experimental features and shouldn't be used for development. So let's click on the stable. Once the package finishes downloading, open it and finish the installation. When you finish, you will have the Docker app available from your desktop, and the Docker [[CLI]] from the terminal. So here is the Docker app. And if we go to the terminal, I can type docker -- version. And there's the Docker CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Windows]] (1), [[Linux]] (1)
> **CLI Commands:** docker (10)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** cli (2)
> **Tools:** terminal (2)
> **Code Identifiers:** macos (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Exercise Files:** download the (1)

#### [Installing Atom](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/installing-atom?u=76281980&t=0)** - [Instructor] You can use any programming editor you'd like in this course. I'll be using Atom. It is a free and open-source editor from GetHub. To install it, head over to [atom.io](https://atom.io), download the version for your OS, and follow the installation instructions. I've already installed it on my machine. I won't be using many of Atom's advanced features, but one that I will use is it's ability to launch from the command line. I will type atom and then the name of a file or directory to open it in the editor. This can save you a lot of time trying to find a file via the finder or explorer.

> [!info]- Semantic Content
>
> **Tools:** atom (4), command line (1)
> **CLI Commands:** find (1)
> **URLs:** [atom.io](https://atom.io) (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Docker](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=0)** - [Instructor] Welcome to our C++ [[Web Development]] journey. In this tutorial, you'll build your first web server using C++ and the Crow framework. I'll containerize with Docker. We'll explore modern C++ web development techniques that are perfect for creating high-performance services. Follow along and you will have a working web server in minutes. The quickest way for us to get started is to use [[Git]]. We can use my [[GitHub]] repo, which is hosted at [https://github.com/Rockncoder](https://github.com/Rockncoder) /web-servers-and-apis-using-cpp with each [[Microsoft Word|word]] separated by a dash and clone it to a directory named cppweb. If you don't have Git installed on your machine, you can go to the repository, find the green Code button, click the down arrow on the right side of the button, and then click the Download ZIP link. Once the file is downloaded, unzip it to a directory named cppweb and you'll be ready to roll. We start in the project directory cppweb.
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=99)** Your directory structure should now look like this. We have three directories, data, hello-crow-eb, and hello_crow. Let's open Visual Studio Code here.
>
> **[2:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=128)** Let's take a look at our Dockerfile.
>
> **[2:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=137)** Here's our two-stage Dockerfile in action. First stage is our builder. It starts with a slim Debian base, grabs all of our dev tools. cmake, make, Boost libraries and [[MongoDB]]'s C++ drivers. We set up MongoDB properly by installing both its C core, libmongoc and C++ wrapper. Create a cozy spot for our code, copy it in, and let cmake and make work their magic to build our executable.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=180)** Then comes the cool part. Our runtime stage starts fresh with a clean Debian image and we just snag that finished executable, plus the MongoDB shared libraries from the builder. No need for all those dev tools in production. We tell Docker we'll be using port 8080 and boom, when this container fires up, it'll run our Crow server ready to handle both web traffic and MongoDB operations. Lean, clean, and ready to deploy. Next up, we have our .dockerignore. The .dockerignore file is our project's cleanup crew. It tells Docker which files to ignore when moving them from the host machine to the container, no compiled stuff like object files or libraries, no executables, and we're skipping the README in our container build. It keeps your repository and Docker images lean and clean, focusing just on what matters: the source code. Pretty handy when you don't want all those build artifacts cluttering up your workspace. Now let's go into our hello_crow file
>
> **[4:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=259)** and let's take a look at .gitignore. Here's the .gitignore file. For us, it's nearly identical to the .dockerignore. Not much to see here. Let's move on. We've got our CMakeLists.txt. This CMakeLists.txt file is your recipe for a C++ web server. It grabs Boost and MongoDB, and here's the cool part, it bakes the Boost libraries right into your executable while keeping MongoDB flexible. Sure, the static Boost makes things a bit bigger, but it's more portable. Add in some threading magic with pthreads and MongoDB connectivity, and boom, you've got yourself a fully loaded Hello, Crow web server ready to handle both web traffic and database operations. Check it out. Crow_all.h is your entire web framework in one header file. It's basically Flask for C++, letting you whip up endpoints with dead simple syntax. Want a [[Representational State Transfer (REST)|REST]] API? Just slap a crow route on there. Toss in a Lambda and you're cooking. It handles all the HTTP heavy lifting, request parsing and [[JSON]] stuff under the hood. Single header, zero fuss. That's why they call it a micro framework. Dive into the header yourself sometimes. It's a great way to see how a modern C++ web framework ticks. Main.cpp, here's our bare bones web server in action. Just a handful of lines to get up and running.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=354)** We create a Crow app, set up a root route that shoots back a quick Hello, Crow in [[HTML]], and then the cool part, it auto grabs a port from your environment variables or defaults to 8080 if none is set. Finally, we kick it in gear with multithreading enabled because why not make it speedy? Super clean, super simple, that's the beauty of Crow. Here's with cooking. Docker build with a -t hello_crow:latest tags our image with a friendly name. That little dot at the end, it's telling Docker, hey, use the Dockerfile right here in this directory, one command to build your container from scratch. Sweet and simple. Let's go ahead and build it.
>
> **[7:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=428)** This is where the magic happens. We're firing up our container with a --rm to keep things tidy. It'll clean itself up when we're done. That -p 8080:8080 is saying, hey, connect my computer's port to the container's port so we can actually talk to our Crow server. Then Hello, Crow is just telling Docker which image to run. One command and boom, you got yourself a web server ready to rock. So let's go ahead and run this. Now, just pop open your favorite browser
>
> **[7:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/docker?u=76281980&t=474)** and go to localhost: 8080 and boom, you'll see your Crow server respond with Hello, Crow right there in your browser. Port mapping we set up is doing all the heavy lifting, connecting your browser straight to the container, and if we return to the terminal and type Control + C, the Crow server will stop and exit the container. The container is also removed from the container registry. Congratulations on launching and stopping your first web server. You successfully ran a containerized application and learned how to properly terminate it using Control + C. This fundamental Docker skill will serve you well throughout the course. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Web Development]] (2), [[Git]] (2), [[GitHub]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** docker (8), make (3), git (2), find (1), unzip (1)
> **Env Vars:** zip (1), readme (1), rest (1), api (1), http (1)
> **File Paths:** cmakelists.txt (2), crow_all.h (1), main.cpp (1)
> **Tools:** github (2), visual studio (1), terminal (1)
> **Code Identifiers:** hello_crow (3)
> **Prerequisites:** set up (3)
> **Ports:** port 8080 (1), :8080 (1)

#### [Adding a volume](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=0)** - [Instructor] We are going to work on our host machine by build and run on the container. In order to edit files on the Docker container from our host machine, we are going to create a volume. A volume is a directory shared by the host machine and one or more Docker containers. We add a volume with the -v option of the docker run command. The volume option begins with a -v, is followed by a space, and two halves separated by a colon. The left half is the absolute path to the directory of the host machine. The right half is the absolute path to the directory on the container. I am going to create my volume using the cppweb directory that I created on the desktop. Here is the Docker command to do that. Please substitute your directory path for mine. So it's docker run
>
> **[0:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=54)** - v /Users /troymiles /Desktop /cppweb: /usr/src and /cppweb -ti cppbox:
>
> **[1:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-a-volume?u=76281980&t=83)** latest bash. Do note, the [[Representational State Transfer (REST)|rest]] of the command is stuff we've seen before. The -ti puts Docker in terminal interactive mode, cppbox:latest is our local version of the cppbox image we built previously, and finally, bash puts us in the container's bash shell. In the container, navigate to cd /usr /src /cppweb. If we do an ls here, we can see the cpp box directory that we created. What we're gonna do is we're gonna say touch, MY_FILE.txt, and this will create a file in the container. We do ls we can see that file. Now if we go back to the host machine, we go back to cppweb, we do an ls, we can see the same file. MY_FILE.txt right there. By using a volume, we are able to edit on our host machine, and build on the container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** docker (6), ls (3), cd (1)
> **Tools:** bash (3), terminal (1)
> **File Paths:** my_file.txt (2)
> **Env Vars:** my_file (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1), - v (1)
> **UI Navigation:** navigate to (1)

#### [Building Crow](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=0)** - [Instructor] Crow is a C++ web micro framework. It is available at [github.com/ipkn/crow](https://github.com/ipkn/crow). It is inspired by Flask, which is written in [[Python (Programming Language)|Python]]. While Crow is not well known, it is well-liked with over four thousand stars on [[GitHub]]. It is also easy to understand, easy to use, and fast. Plus, it is header-only. Which means to use it, all you need to do is include its header file in your project. We need to download its header file. Go to [github.com/ipkn/crowreleases](https://github.com/ipkn/crowreleases), or click the release link. Scroll down 'til you see crow_all.h. Click it to download the header file. And we will copy it from the downloads, to the desktop to our cppweb, right there. Let's start a new project. On the container from the cppweb directory, create a new directory, hello_crow. cd into that directory. Let's put a copy of crow_all.h here as well. cp ../crow_all.h and a single period. And let's return to our editor with hello_crow as the project directory. So we're gonna say atom . Now we have hello_crow.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=97)** We have the crow_all.h file. From right here, we're gonna do a right-click on the directory name and we're gonna say, new file and we're gonna create main.cpp. We're gonna do that one more time and we're gonna create new file, and this one's gonna be CMakeLists.txt
>
> **[2:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=121)** CMakeLists.txt with the C, M and the L capitalized. From within our hello_crow main.cpp let's go ahead and create our simple server. We're gonna start out by saying #include crow_all.h. We're gonna say using namespace std; We'll create our main function. All C++ programs begin with the main function. We're gonna say int argc, char pointer argv and square brackets. Open and close curly braces. Then we're gonna create our app variable. So it's crow::SimpleApp app. Then we're gonna create our first route. CROW_ROUTE. And we pass in the app variable and we pass in what the route is triggered by. That's gonna be a string and just a forward slash. Then we're gonna have a pair of parenthesis, square brackets, open and close parenthesis, open and close curly braces and a semicolon. Then inside the curly brackets we're gonna say return and we're gonna return a string
>
> **[3:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=216)** and that string is gonna be div h1. Hello, Crow. We're gonna close the h1 tag. Close the div. And there is our extremely simple webpage. Then we're gonna say char pointer port. We need to get which port we should use and we're gonna get that from an environment variable named PORT. getenv PORT. We need to cast it to a string. We're gonna do a uint16_t and call it iPort and it's gonna be equal to a static cast of type uint16_t and the expression is gonna be port not equal to NULL. If it's not equal to NULL, meaning that we actually have a port value. We're gonna do a string to int port. Otherwise we're gonna return a default port of 18080. Then we're gonna do a cout right here so that we can see which port we're running under. That is PORT equals iPort and then a carriage return.
>
> **[5:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=313)** Line feed and finally we're gonna create the app and get everything running. We're gonna say app.port is equal to iPort.multithreaded. We're gonna be running in multithreaded mode. Finally we're gonna tell it to run, end with a semicolon. Command + s or control + s on [[Windows]] to save off our file. Next we're gonna do the CMakeLists.txt. Our first line is gonna be cmake_minimum_required.
>
> **[5:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=354)** This tells cmake what's the minimum version that it can be for our code to work. We're gonna say VERSION 3.7. We're gonna give the project a name project hello_crow. We are gonna set some compiler options. Set CMAKE_CXX_STANDARD space 11 which means that we want version 11, or 2011, of C++. We're gonna set THREADS_PREFER_PTHREAD_FLAG to on.
>
> **[6:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=407)** We're gonna try to find the boost library. Find_package Boost COMPONENTS space,
>
> **[6:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=419)** these are the libraries that we need, system filesystem and they are REQUIRED which means that if cmake does not find these it will abort. We also need the package Threads. Next we're gonna do include_directories and we're gonna have ${Boost_INCLUDE_DIRS}
>
> **[7:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=455)** and we add_executable and the project name is hello_crow and the executable, or the file that needs to be compiled is main.cpp and finally we're gonna say target_link_libraries so the hello_crow project is built from ${Boost_LIBRARIES}
>
> **[8:10](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/building-crow?u=76281980&t=490)** and Threads::Threads. And that is it for our cmakelist.txt file. Now let's go back to the terminal. Now we're in the container that we created earlier. We are going to say cd to hello_crow from here, we're gonna say mkdir build. And this is by tradition C++ programs using cmake are usually built from a build directory. We're gonna create the build directory, say, cd build and then we're gonna say cmake.. And kick off the process of creating the make file. So it's created our make file. Then we're gonna say make. And the first thing that it's gonna do is it's gonna compile our main.cpp into an object file and then it's gonna link all of our libraries together and voila we have the built target, hello_crow. If we do an ls from here, we can see that there is a file hello_crow, assuming everything went well, hello_crow is in our directory. This is our web server's executable. Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Python (Programming Language)|Python]] (1), [[Windows]] (1)
> **Code Identifiers:** hello_crow (11), crow_all (5), iport (3), cmake_minimum_required (1), include_directories (1)
> **File Paths:** crow_all.h (5), main.cpp (4), cmakelists.txt (3), cmakelist.txt (1)
> **CLI Commands:** cd (3), make (3), find (2), python (1), cp (1)
> **Env Vars:** port (3), null (2), crow_route (1), version (1), cmake_cxx_standard (1)
> **Tools:** github (3), atom (1), terminal (1)
> **Definitions:** is a  (2), means that (2)
> **UI Navigation:** go to (1), scroll down (1), right-click (1)

#### [Serving the example](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=0)** - [Instructor] Let's run our web server directly in the container. From the build directory, type ./hello_crow.
>
> **[0:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=12)** The output looks promising. Our server tells us it is using PORT 18080. Let's try accessing it from the browser. We enter localhost:18080 and press Enter.
>
> **[0:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=29)** Uh-oh. We can't access our site. Why? Each docker container is by default isolated. None of its ports are open. In order to access our server, we need to open a port and tell the server which port to use. We open a port by adding the -p option to the docker run command. The -p option opens a port and allows us to map it to the host machine. The first number is the host machine's port number. The second number is the container's port number. The port numbers don't have to match. The -e option allows us to create an environmental variable. We'll use it to tell the server which port it is using. So we go back to the terminal. Control + C to stop that from running. We can exit. Then from here, we're gonna enter docker run -v to create our volume, Users/troymiles/Desktop /cppweb:/usr /src/cppweb -p, then we're gonna use port 8080 on the host machine and port 8080 in the container. Then we need to tell the server which port it's using. We're gonna create an environment variable,
>
> **[2:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=125)** - e PORT=8080 and we've got the cppbox:latest /usr/src/cppweb
>
> **[2:24](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=144)** /hello_crow/build/hello_crow.
>
> **[2:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-the-example?u=76281980&t=155)** So this is the absolute path to our executable hello crow web server. Hit Enter. Now this time we get a PORT = 8080. We go back to the browser. We do a localhost and this time it's 8080 and we hit Enter and there we have it. Hello, Crow. Congratulations. Your Crow web server is running.

> [!info]- Semantic Content
>
> **Ports:** port 8080 (2), port 18080 (1), :18080 (1)
> **CLI Commands:** docker (3)
> **Code Identifiers:** hello_crow (3)
> **Env Vars:** port (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1), - e (1)
> **URLs:** [localhost:18080](https://localhost:18080) (1)
> **Tools:** terminal (1)

#### [Challenge: Modify the example page](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-modify-the-example-page?u=76281980&t=8)** - [Instructor] Are you ready to put your new skills to a challenge? Let's make sure you got everything down and understand how to edit, compile, and execute your C++ web server. Change the server to render hello, and your name instead of hello, crow then, display it in the browser. Give yourself about five minutes to complete this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Modify the example page](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=0)** (chiming music)
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=7)** - [Instructor] So, how'd it go? Were you able to modify the server? Here are the three steps I used to solve this challenge. First, I modified the main.cpp file. Second, I used make to compile and link the server again. And finally, I relaunched the server in the container. Let's check out the steps in detail. From Atom, I edit the main.cpp file and replace Hello, Crow with Hello, Troy. Don't forget to save the change, Command + S or Control + S. Next, I go back to the build directory. I'm gonna do a Control + C here. And then I'm going to go back to bash, and from bash, I'm gonna do a cd /usr/src /cppweb /hello_crow /build. And if I do an LS, I can see my hello_crow file is still there. But what I really need to do is I need to do a make right here, so I'm gonna type make. It will relink and rebuild my hello_crow web server. Then I'm gonna exit from the container, clear the screen, and let's bring this to the top. I'm gonna relaunch the server. Once again, I see the 8080.
>
> **[1:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-modify-the-example-page?u=76281980&t=102)** I see that it is serving. Let's go back to the browser. I'm gonna refresh the browser, and there is my Hello, Troy. Now you've had your first taste of Crow. Even though it is written in C++, it has the lightweight feel of an [[Express.js]] app, only faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Express.js]] (1)
> **CLI Commands:** make (3), cd (1), ls (1)
> **File Paths:** main.cpp (2), express.js (1)
> **Code Identifiers:** hello_crow (3)
> **Cross-References:** go back to (3)
> **Tools:** bash (2), atom (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Deploying to AWS ElasticBeanstalk

[↑ Back to Table of Contents](#table-of-contents)

#### [Beanstalk](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=0)** - [Instructor] In this tutorial, you'll take your C++ web server to the cloud. We'll guide you through containerizing your Crow application with Docker, pushing it to Docker Hub, and deploying it to AWS Elastic Beanstalk. You'll learn essential [[DevOps]] skills for C++ web applications, including container management, cloud deployment, and proper cleanup procedures. By the end, you'll have a publicly accessible web service running on AWS infrastructure. Now let's make sure that we're in the cppweb directory and let's log into Docker. The docker login -u command gets you connected to Docker Hub. Drop in your username after the -u, mine is rockncoder, and Docker will prompt you for your password. Once you're logged in, you'll be able to push your tagged images to Docker Hub for the world to use. Give it my password.
>
> **[1:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=74)** All right, we're logged in. Let's give ourselves some more room.
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=90)** The Docker tag command transforms your local image hello_crow:latest into a Docker Hub-friendly format by adding your username at the front and latest at the end, you're creating a properly structured tag that Docker Hub will recognize. Now your image is ready to be pushed to the cloud.
>
> **[1:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=118)** We are using docker push to send our container to the Docker Hub. From there, Elastic Beanstalk is able to find and use it.
>
> **[2:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=133)** Now let's move to the hello-crow-eb directory. So we're going to do cd hello-crow-eb.
>
> **[2:27](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=147)** And let's take a look at what's in this from VS Code. The Dockerrun.[[JSON]] file tells AWS Elastic Beanstalk how to run your Docker container in the cloud. Just swap out your Docker Hub username with your actual Docker Hub username in the image section. So mine is rockncoder. Be sure to save that off. This file also maps your container's port 8080 to the standard port 80, sets up logging, and configures your environment. One small JSON file and AWS knows exactly how to deploy your web server. All right, let's go back to the terminal.
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=205)** The eb init command sets up your Elastic Beanstalk application. We're using -p docker to tell EB this is a Docker project, naming it hello-crow-app and specifying our AWS region. Just replace your AWS region with something like us-west-2, which is what I'm using, or whichever region you want to deploy in. This command gets everything ready for your AWS deployment.
>
> **[4:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=244)** This command tells Elastic Beanstalk to spin up a new environment called hello-crow-env for your app. The cool part is we're using a t4g.micro instance that's AWS's ARM-based server that gives you decent performance while keeping costs down. It's like getting a small but mighty server that's perfect for testing out your Crow application without burning through your cloud budget. It'll take a bit for the server to spin up.
>
> **[4:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=278)** All right, with our environment deployed, let's go ahead and give ourselves a little bit of room on the screen, and we're going to do... The eb open command pops open your default browser and takes you straight to your deployed Crow server. It's like typing in the URL, but easier. You'll see that Hello, Crow message now coming from your live AWS environment. So eb open. And there's our Hello, Crow message now coming from AWS.
>
> **[5:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=330)** The eb status command gives you a quick health check of your Elastic Beanstalk environment. It'll show if your app is running green, what URL it's available at, and other key details about your deployment. Perfect for confirming everything is working as expected. And there you go, you can see that we're green, you can see our CNAME, and you can see that we're running from the region us-west-2.
>
> **[6:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=372)** The eb logs command shows you what's happening under the hood, errors, warnings, and general activity from your running application. Super helpful when you need to debug issues or just want to peek at what your Crow server is up to in the cloud. And to exit hit Q. Now that we've successfully pushed to the cloud, what's next? Changes of course, but don't rush to push changes immediately to AWS. Always test locally first. It's way faster and completely free. Make your code changes, rebuild your container, and check it out in your browser. Once everything looks good locally, then push it to the cloud. This simple cycle saves you tons of time and headaches. So let's make a change. Let's go into Visual Studio. Go back to our main.cpp and let's just make one simple change. We're going to change Hello, Crow to Hello, World. Save it off. Go back down to the terminal. Go up one directory to cppweb.
>
> **[7:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=450)** Rebuild our application.
>
> **[7:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=465)** And run our app. Let's go back to a localhost, refresh the screen, and now we see Hello, World. Let's go ahead and stop the app.
>
> **[8:17](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=497)** Now we're going to tag the container again,
>
> **[8:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=508)** and push the container, and the push command sends it to Docker Hub. Let's go back into the hello-crow-eb directory.
>
> **[8:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=538)** And now we're going to run the eb deploy command. And just as a reminder, all AWS commands must be executed in the hello-crow-eb directory. This command will deploy our edited container to Beanstalk. This should be faster than when we created it. And let's do eb open.
>
> **[9:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=577)** And now we see the Hello, World coming from AWS. Just remember, keep this cycle going, code, test locally, then push to the cloud. Way better than debugging directly in AWS.
>
> **[9:58](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=598)** Let's clear the screen.
>
> **[10:09](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/beanstalk?u=76281980&t=609)** The eb terminate command shuts down your Elastic Beanstalk environment. Adding hello-crow-env tells it exactly which one to close. We're not going to use this command right now, but it's crucial to properly shut down your resources. AWS services continue to incur charges as long as they're running, even if you're not actively using them. And congratulations on deploying your C++ application to the cloud. You successfully containerized your web server, pushed it to Docker Hub, and launched it on AWS Elastic Beanstalk. These DevOps skills are valuable for any modern C++ developer and provides a foundation for building scalable web services in real-world environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[JSON]] (2)
> **CLI Commands:** docker (19), aws (16), make (4), find (1), cd (1)
> **Env Vars:** aws (16), url (2), json (1), arm (1), cname (1)
> **Tools:** terminal (2), vs code (1), visual studio (1)
> **Cross-References:** go back to (3)
> **File Paths:** dockerrun.json (1), main.cpp (1)
> **Ports:** port 8080 (1), port 80 (1)
> **Analogies:** it's like (2)

#### [Saving our container to Docker Hub](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=0)** - [Instructor] Being able to use Docker images created by others is great, but it would also be nice to be able to share our images. To do that, we need to use Docker Hub. What is Docker Hub? Docker Hub is a cloud-based registry service. It is a place to both store and find Docker images. It is free to sign up. You can store as many public images as you'd like, and one private image. Saving an image to Docker Hub is fairly easy. I'm gonna log on to Docker Hub, tag the image, push the image, and then just verify the push. So let's return to the terminal and the hello crow directory. Go ahead and clear the screen and we're gonna do a docker login dash dash username and my username. Then, once we're logged in, do a docker images to see what we have here. And then we'll need to find the image we're gonna push and we can't push it directly because we need to tag all the images with our Docker username. So we had hello crow and its image ID is right here and we're gonna say docker tag that image ID, remember to replace this image ID with yours. Then I'm gonna say rockncoder/hello_crow:
>
> **[1:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=98)** and let's call this latest. And hit Enter. Now that we have it tagged, let's go ahead and push it. So docker push rockncoder/hello_crow. That'll push the image up to Docker Hub. Our image has been pushed. Let us go back to the browser. Hub.[docker.com](https://docker.com). I'm gonna go ahead and sign in.
>
> **[2:21](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/saving-our-container-to-docker-hub?u=76281980&t=141)** And there we can see hello crow. It has been successfully pushed to Docker Hub.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), find (2)
> **Code Identifiers:** hello_crow (2)
> **Definitions:** is a  (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 3. Building Websites

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating HTML pages](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=0)** - [Instructor] In our first code example, we built the [[HTML]] snippet from a string. Building HTML from strings is terrible and it would be a torturous way to build a website. There are two main ways to create HTML in Crow. The first is to put a pure HTML document in a file by itself and deliver the file when requested. Nearly every web framework has this option, including Crow. The second way is similar, but instead of the file containing pure HTML, it is a mixture of HTML and Mustache templates. Mustache is a prominent web template system. Its first release was in 2009 and there are ports available in nearly every modern language. Mustache is excellent at mixing data into HTML and we'll cover it more once we add [[MongoDB]] into the mix. Our recipe for creating HTML pages in Crow is simple. For each page, let's create a matching HTML file and a route handler. It is possible for a singe route to handle multiple pages, but we'll keep it simple for now. We'll store the HTML files together in the same directory. Let's go back to the code. From the file tree, right click to create a new folder. Name it public, all lower case. New, Folder, public. Right click on the public folder to create a new file. We're gonna name it index.html. Now, let's make it a proper web page.
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-html-pages?u=76281980&t=99)** So it's gonna have a doc type, and that doc type's gonna be html. And we're gonna put our open html and we're gonna tell it what language we're using, so lang equals en. And we need to create our opening head tag. And then our first tag inside of this is gonna be a meta tag, and this is gonna be for our charset. And our charset is going to equal utf dash eight. Next we'll have a title. And the title for this would just be Crow C plus plus. And close the title. And then we're gonna close the head tag. Open the body. And then within the body, we'll have a div tag. And in that div tag we'll have an h one. And the h one will say hi, Crow. Close the h one, close the div. Close the body. And finally close the html. Make sure we save it, and this completes the creation of our first HTML page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (15), [[MongoDB]] (1)
> **Env Vars:** html (11)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** is a  (2)
> **File Paths:** index.html (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)

#### [Serving HTML pages](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=0)** - [Narrator] Route handlers look at the path passed to the website and decide which code should handle it. The only handler that we currently have is for the root route, which matches either an empty string or a lone forward slash. Let's update it to return an [[HTML]] file instead of a string. So, first we want to come up here, and below our current using namespace, we'll add one more. And this is gonna be for crow. And we'll come down here to the crow route and we don't need any of this, so we'll delete the old code and here we're gonna say const request... req and then we'll say response, res. And then the first thing that we're gonna do here is we're gonna say create an ifstream, name it in, and we're gonna pass to it a string, which is gonna be public /index.html. That's right here. And we're gonna pass to it an ifstream colon in because we want to read this file in. Then, we're gonna say if in, we're gonna make sure that we actually got a file handler. And if we did, we're gonna say create a string stream
>
> **[1:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=99)** and call it contents and then we'll insert the file's contents into the string stream. So, contents -- insertion operator -- in.rdbuf. Do an in.close. This closes off the file. And finally we'll do a response res write to take the contents of that file and send them out, str. And if we didn't find the file, for whatever reason, we'll do a res.write, not found. At least give ourselves some kinda clue something's gone wrong. And finally, we'll do a res.end to end our output to the response object. So, we'll save the file, we will go back to the terminal, and we will do a make. Let the program rebuild itself. From the other directory, we'll relaunch the server. And this is the same command we were doing before. So, it's just a docker run -v. Right here, we're setting up a volume, so that we can read everything that is on the host machine. On the container machine, we're opening up ports 80 80, and sending port 80 80 to the container as an environment variable.
>
> **[3:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-html-pages?u=76281980&t=196)** So, we let that run. Go ahead and refresh the page. And uh oh, we get a not found. So, what could be the problem there? Our problem is a bit sublime, but it's not too difficult to understand. From the build directory, which is where we are running. So, if you look at our path, we're going hello crow build and then we're executing hello_crow. So, it's running in the build directory. From our code, public is now, we have to go up one, dot dot, to get to it. Save that off. Go back down to the terminal. Rebuild. Then, we're gonna do a control c to stop the server. And then, immediately restart it, and then refresh the page again. And now, we get hi, crow. And now, we know how to server an html file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **CLI Commands:** make (2), find (1), docker (1)
> **Tools:** terminal (2), sublime (1)
> **File Paths:** index.html (1)
> **Code Identifiers:** hello_crow (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Serving static content](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=0)** - [Narrator] A website's static content are files delivered to the browser without being modified, such as index.[[HTML]]. We keep these files in the public directory and separate them by type. The HTML files go in the root, the CSS files in the styles directory, the [[JavaScript]] in the scripts directory, and the images in the images directory. This structure helps us keep our site organized. Let's add some static content. From the file tree, add three subfolders to the public folder. So, we're gonna come over here, and we say New, Folder, and we'll say images. And then, again, public, New, Folder, scripts. And, third time's a charm, Folder, styles.
>
> **[0:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=55)** Next, we need to generalize the code to read a file. Right now, it is part of the root route handler, and only reads the index.html file. We need to modify it so it can read any file. Moreover, we need to put it in a function, so any handler can use it. Just above the main function, add a new one named sendFile. It returns void, and takes a response object and two strings, file name and content type. So, right here, just above the main, we're gonna say, void sendFile. It is going to take a response, and that's gonna be res, a string, filename, and another string, contentType. And we'll open and close some curly brackets, do a little space between here and the other one. Next, what we're gonna do is, we're just gonna take this method right here from out of the root route handler, cut it, and paste it here, and instead of it being a hardcoded string, we're gonna say + filename, and we're gonna change this. We don't need the index.html anymore. And then, we're gonna make another change right here, just above res.write, we're gonna put a res.set_header, and that is going to be our content type,
>
> **[2:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=151)** so that when browsers get our files, they know what they are. So, Content-Type, and it's going to be the content type that got passed in, and we need a semicolon at the end there. Then, here in the Else clause, we're gonna say, res.code = 404, which is the universal sign for "Can't find that file". We got an extra space right here, let's delete that. And that's our sendFile method, then just below it, we're gonna do a void sendHtml. It is going to take a response object and a file name.
>
> **[3:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=200)** And then, it's gonna call sendFile with res, filename,
>
> **[3:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=208)** and this time, what I'm gonna do is, I'm going to append a .html to the end of this and pass it in a content type, which is gonna be text/html. Then, in here, in the root route, I'm going to say, sendHtml, and it is going to send the response object
>
> **[3:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=236)** and the string index. And, let's put our semicolon there. There, now we've reduced the size of our route handler and made it easier to understand. So, let's add a few more helper functions, and they're gonna be very similar to send.html. The first one is gonna be sendImage, so we'll make a copy of it first. We'll change the name to sendImage. Takes the same inputs, and we're gonna call sendFile, only now, what we're gonna do, we're not gonna append anything to the end, but we will prepend the subdirectory here. So, this is going to be images/. The type is going to be image/jpeg.
>
> **[5:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=300)** And the next one's gonna be sendScript, and we're also gonna do one for style. So, sendScript is very similar, except this is going to be scripts, and this is going to be text/javascript. The sendStyle, and this is going to be styles, and the style is going to be text/css.
>
> **[5:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=338)** So, we got styles, scripts, images and HTML. Now, let's create a couple more routes that it uses. So, our first of these new routes is gonna be for styles. So, it's gonna go /styles/, what's gonna come here is
>
> **[6:02](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=362)** angle bracket, angle bracket, and in the middle of the angle bracket, it's gonna be a string. This is our first instance of a route parameter. The words string surrounded by angle brackets will capture whatever text is in the route at this position, and pass it to the handler method as a parameter. In our case, these two parameters are always gonna be present there, and then, the next one is going to be string filename. It's important to know that you can also have ints here, doubles, and a few other variable types, and they must match, this string here must match here. If you had an int here, it would have to be an int here, and whatever string goes here has to be able to be cast to that type of variable. So, everything here can get cast to a string, so you're super safe there. And in this case, now we have our file name, and we are gonna call sendStyle. We are gonna pass it, instead of index, filename. And then, we need to create a few more, just like this one. So, one and two.
>
> **[7:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=445)** And, this one is going to be for scripts. Still gonna take that string, and instead of calling sendStyle, I'm gonna call sendScript. And down here, gonna have images, and we're gonna call sendImage. All right, so we have all of our routes updated, and our helper functions complete, so let's add some test files. So, we're going to go into the styles. I'm gonna do a right-click, say New, File. Gonna name this file styles.css, and I'm gonna keep it short and simple. So, it's just gonna be a body, opening and closing brace, change the background color, and we're gonna make the background color light green. Gonna save that, then for scripts, I'm going to say New, File, and I'm gonna call it test.js, and I'm gonna keep this one really short as well. So, first, gonna just do a console.log, and the console log is just gonna say "Hello, JavaScript." And, let's also go and alert him there. So, I'm gonna say alert, "Hello from JavaScript land."
>
> **[8:53](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=533)** Going to save that off, then finally, for images, I am going to copy this picture right into the images folder. There we go. And we're gonna go into index.html. Just before the closing head tag, we are going to create a link, and it is going to be a style sheet. And, its href is going to be styles/styles.css.
>
> **[9:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=576)** Gonna have a closing angle bracket, then here, we're gonna say script source is going to equal scripts/test.js, and we'll close this script tag off.
>
> **[9:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/serving-static-content?u=76281980&t=594)** Then, first off, let's go ahead and change our H1 tag just a little bit, so that we can always see the difference as we make our changes. Create an image tag, and the source is going to equal images/test.jpg. And then, we'll close off that tag, save this file, make sure we save off main.cpp, and then, go back to the terminal. I'm going to stop the server. I'll do it on Ctrl-C over here. And then, in my other tab, where I have the actual container, I'm gonna do a make, let it rebuild itself, and then, come back over to the server side and restart it. Go to the browser, refresh the page. Hey, look at that, we got some JavaScript. Hello from JavaScript land. We got our green color, so our CSS is loading. We have the picture of my cat, who, for the first time ever, has come when he was called. And that is how you add static content to a website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[JavaScript]] (6)
> **Code Identifiers:** sendfile (5), sendimage (3), sendscript (3), sendstyle (3), sendhtml (2)
> **File Paths:** index.html (4), send.html (1), styles.css (1), test.js (1), styles/styles.css (1)
> **CLI Commands:** make (6), find (1), cat (1)
> **Analogies:** picture (2), such as (1), similar to (1), just like (1)
> **Env Vars:** html (2), css (2)
> **UI Navigation:** right-click (1), go to (1)
> **Cross-References:** go back to (1)

#### [Challenge: Create a new webpage](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=0)** (metallic swishing)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-new-webpage?u=76281980&t=8)** - [Instructor] Are you up for another challenge? Let's show what we know and add a new page to our website. Create a new page about.[[HTML]]. The page should contain an H1 tag which reads, About. Add a route handler for the page and a style sheet named, About.css. The style sheet should color the background any color you'd like. Give yourself about five or 10 minutes to complete this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **File Paths:** about.html (1), about.css (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a new webpage](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=0)** (chiming music)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=8)** - [Instructor] How did you do with this challenge? Hopefully, you successfully completed it. Either way, here's my solution. I copied the index.[[HTML]], deleted the script tag, copied the style.css, added the new route, and rebuilt the app. Let me show you how I did it. Let's go back to Atom. First thing I did was I copied the index.html and named the copy about.html. From with inside here, take the about.html. I changed the title tag to About Page and changed the h1 tag to About, delete the scripts.js, rename styles.css to about.css, and let's go ahead and just get rid of this image. We don't really need it here. Save. Then for the styles.css, make a copy of it. Name the copy about.css. For the about.css, I'm gonna change the color to cornsilk. Then we're gonna go back to main.cpp. Gonna copy the root route.
>
> **[1:41](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-new-webpage?u=76281980&t=101)** And this is gonna be About. And then we're gonna ask for the About Page. Let's see, let's go over everything again. I created a new route, created an about.html, created an about.css, inside of about.html, we're using about.css. Inside of about.css, we've changed the color to cornsilk. Make sure we save everything off. Go back to the terminal. Let's stop the server with a Control + C. Go to the other tab where I have my make and say make. Go back to the server, restart it. Back to the browser. Make sure everything's still working. And do about. And there's About. There's our background color. And that is my solution to adding a new page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **File Paths:** about.css (6), about.html (4), index.html (2), styles.css (2), style.css (1)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (4)
> **Tools:** atom (1), terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (chiming music) (1)


### 4. Data Access

[↑ Back to Table of Contents](#table-of-contents)

#### [Atlas](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=0)** - [Instructor] In this session, we'll connect our C++ web server to [[MongoDB]] Atlas, creating a complete cloud-based application stack. We'll learn how to set up a free MongoDB Atlas database, upload data, and modify our Crow application to retrieve and display information from the database. This powerful combination of C++, Crow, and MongoDB enables you to build robust data-driven web applications with enterprise grade performance. Let's get you started with MongoDB Atlas. Simply head over to www.[mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas).
>
> **[0:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=42)** And click that Try Free button. Feel free to sign up with [[Google]] or your email. When they ask about your goals just pick "Learn MongoDB" or "Build a new application," whatever fits your plans best. Now, I've already got an account, so let's go over to my account. Now on [[Databases]], for clusters, what you're going to do is you're going to click Create. Double check that it says Free, labeled as "M Zero Sandbox." We love free stuff. Pick any cloud provider that catches your eye, AWS, [[Google Cloud Platform (GCP)|Google Cloud]], or [[Microsoft Azure|Azure]]. They all work great. I picked AWS. Choose a region that's closest to you for the best performance. Again, I chose US West 2, since that's very close to my home. Feel free to name your cluster something fun, or just stick with the Cluster Zero. For no real reason I named mine Vehicle Database. Hit the Create Cluster, take a short break while MongoDB works its magic in the background. Let's create your user account. So you're going to go over to Database Access. You're going to click Add New Database User. For Authentication Method, choose Password. Give your user a name. Give them a strong password.
>
> **[2:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=138)** I highly do suggest clicking the Auto Generate Secure Password. Give your user a description and come on down to add Built In Role. Click this button, click on Select Role. And for this tutorial, click Atlas Admin. That'll give them a lot of powerful stuff, but it just makes doing this tutorial easier. I don't recommend doing this in production. And then click Add User. I already have an admin user, so I'm not going to click that. Next, you're going to need network access. So you're going to go Network Access. You're going to say Add IP Address. And for this tutorial, click Allow Access From Anywhere. And, you know, unless you're planning on keeping this up for a long time, I would suggest highly going ahead and clicking the This Entry is Temporary and Will Be Deleted. And in this case, six hours is fine. And click Confirm. Or whatever time period, you know, suits you best. They also have one day, one week, but you don't want to have just anybody being able to poke around with your MongoDB database. So let me click Cancel. We're almost done with setup.
>
> **[3:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=234)** Let's grab your connection details. So come into Cluster. And hopefully your cluster is up by now. You're going to click on Connect. Then click on Drivers. Make sure it's selected to C++ 3.7 or later. And then right here is your connection. And you're going to want to copy that and keep it someplace safe. All right, with our database up and running, let us head to the terminal. And we are going to go into, oh, let's go to VS Code first. And go to the data. And inside the data folder there's a contacts.[[JSON]]. And so this is our contact database that we're going to upload into MongoDB. These are just made up randomly generated people, but they have first name, last name, email, photo, and a phone number. So let's go back to the terminal. Do a CD into the data directory. This is super important. You must be where the data is. Now we're going to need some tools from Homebrew. And so we're going to do a brew, tap.
>
> **[5:40](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=340)** Then we're going to do a brew install mongodb-community@6.0. Now most of these tools I already have installed. Then we'll do a check. And this just is a check to see if mongoimport is correctly installed by asking it what its version is. And it comes up with a version number, letting us know it's there. It's running fine, everything's okay. And we're going to do a clear to go back to the top of the screen. And again, we're in the same directory where our data is. So we're in the data directory. I'm assuming that you have created a database user named Admin that has administrator credentials. This import command will create a database, named contacts, that also has a collection named contacts. The import command will require your password when you execute the command. Be sure to replace the host/database with your own from your connection string.
>
> **[7:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=423)** And there we go. I entered my password, it connected to the MongoDB database, and imported 100 documents, our 100 contacts, into our contacts database contacts collection. Let's go over to Atlas. And say Browse Collections. And click on the contacts collection. And we can see our contacts, or at least the first 20 of them in the window. Feel free to explore a little more on your own.
>
> **[7:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=479)** To access our database in C++ we need the MongoDB C++ driver. Luckily, this driver is already baked into our code, our Docker file and Cmake list.text already have them included. So let's go into main.cpp.
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=503)** Okay, so we're going to come here to our Crow_all and click it. And right below it, let's add the four includes from the MongoDB C++ driver. They are client.hpp, instance.hpp, uri.hpp, and bsoncxx/json.hpp. Next we come down here just below the Crow SimpleApp app.
>
> **[8:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=537)** So again, first we added MongoDB specific includes at the top, bringing in necessary C++ drivers for making a connection.
>
> **[9:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=553)** Next, we initialize our MongoDB connection by creating an instance, retrieving the connection strength from an environment variable, establishing the database connection, and accessing our contacts collection. Finally, we create a new /contacts route that retrieves all documents from our collection, converts them to JSON format, packages them into a structured response, and returns this data when someone visits the endpoint. This transforms our simple web server into a data-driven API serving real information from our MongoDB Atlas database.
>
> **[10:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=604)** Make sure we save this off. And let's return to the terminal. Let's make sure we're in the CPP web directory. So let's go up one.
>
> **[10:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=622)** Let's go ahead and rebuild our server.
>
> **[10:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=638)** Let's give ourselves the screen. And let's get ready to run our web server again. So this command launches our Crow web server container with a direct connection to our MongoDB Atlas database. The -e flag passes our database connection string while -p8080 makes this server accessible in our browser. The --rm flag keeps things tidy by removing the container when we're done. So we go ahead and run this. Let's go over to local host 8080. Let's make sure we refresh. And go to /contacts.
>
> **[11:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/atlas?u=76281980&t=697)** And we can see our contacts being displayed on the page, all 100 of them. Congratulations, you've built a complete C++ web application with MongoDB. You've set up MongoDB Atlas, connected your C++ Crow app to a real database, and created an API that serves JSON data. This powerful C++ MongoDB combination gives you the foundations for building fast, [[Scalable Web Applications]]. Keep exploring and building great things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (20), [[JSON]] (4), [[Google]] (1), [[Databases]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** make (4), aws (2), brew (2), cd (1), docker (1)
> **Env Vars:** aws (2), json (2), api (2), cpp (1)
> **UI Navigation:** click on (4), go to (3)
> **Tools:** terminal (3), vs code (1)
> **Prerequisites:** set up (2), setup (1), install (1)
> **File Paths:** contacts.json (1), main.cpp (1)
> **Versions:** 3.7 (1), 6.0 (1)

#### [Uploading JSON data](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=0)** - [Instructor] We have a [[MongoDB]] instance running in the cloud. We need to install MongoDB locally so we can use its tools. Go to www.[mongodb.com/download-center](https://mongodb.com/download-center). Be sure to download the free community server edition for your operating system. If you have a Mac, I highly recommend using home brew. I'm going to use it now, so let's go back to the terminal. I'm gonna first do a brew update and then I'm gonna do a brew install MongoDB. This will take just a few seconds and now we have MongoDB installed and we can use its tools. We are going to seed our database with some contact information. Included in the exercise files is contacts.[[JSON]] which is structured like the data on the slide. Each contact has five fields, all strings. So we have a first name, last name, email, photo, and phone for each contact. We need to copy our connection string from mLab. You can use the link on our app's dashboard on Heroku, so we can use this link right here, mLab MongoDB. This will take us back to the database for our app and we need to copy the information just below where it says using the mongo shell and I'm gonna copy starting with the letter D all the way over to just before that first break and I'm gonna just do a command + C on the Mac,
>
> **[1:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=96)** control + C on [[Windows]], and copy that or you can just write it down, it's not that long, and I'm just gonna keep that in the clipboard for a second. I'm gonna go back to the terminal and I'm gonna type cd. I am going to get the URL to the exercise folder for this chapter, which is Desktop/Exercise\ Files/Ch\ 04/04_02 and I'm gonna go there to Directory. I can see the contacts.json is there. It's really important to pay attention on this next command. It's kind of long and if you get any part of it wrong the error messages that you get don't really make sense. So first we're gonna type mongoimport, we're gonna do a space and a -h and -h stands for host. I'm gonna do a command + v, a copy of the string that I got from mLabs. I'm gonna scroll all the way back 'til I get just before this forward slash. I'm gonna delete it, put a space, do a -d, and that is for database, that is the name of our database. Then I am going to do a -c. This is for collections, we're gonna call this collections contacts. I'm gonna do a -u, this is for user. Our user's name is admin. Then I'm gonna do a --file contacts.json.
>
> **[3:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/uploading-json-data?u=76281980&t=192)** It is, again, really important that you are in the directory where this file is. File navigation does not work here. Then I'm gonna do a --type, a space, and then put json, this is a json file, and the last command is --jsonArray. The file is a json array and I'm gonna hit return. It's gonna prompt me for my password and this is for the admin user. And voila, we can see that it connected to our database, it imported 100 documents. Let's go back up to mLab and verify this. So we go back to the browser. Here's where we were before where there were no collections, I do a refresh, we can see now that we have contacts, there's 100 documents, and also it's important to note that if I click here on this contacts, I can view all of the records. I can also edit them, I can delete them, I can also add new documents right here from mLabs if I want to. So there we have it, we've imported some data into our database so we have some data to query from our application. Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (6), [[JSON]] (6), [[Windows]] (1)
> **CLI Commands:** brew (3), mongo (1), cd (1), make (1)
> **Code Identifiers:** mlab (3), mlabs (2), jsonarray (1)
> **File Paths:** contacts.json (3)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), stands for (1)
> **Tools:** terminal (2)
> **Exercise Files:** download the (1), exercise files (1)

#### [Adding the MongoDB C++ drivers](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=0)** - In order to access our database on mLab, we need to add the [[MongoDB]] C++ driver library to our code. Unfortunately, we can't simply download it. We need to build it. And before we can build the C++ library, we need to first build the C library it requires. Let's get a new Docker image that will build and install the libraries. So let's return to Atom. In Atom, we're gonna right click on "hello crow". We're gonna say new, folder, we're gonna name this folder "bbox". Then, the Docker file we need is a bit complicated. So to reduce errors I've provided a copy of it in the exercise files for Chapter 4 in section 04_03. So let's go back to our "Exercise Files", 04, 03. Here's our Docker file. We're gonna do a Command + C to copy it. Then we're gonna come back to Atom, we are gonna right click on "bbox". We're gonna click on "Show in Finder", with "bbox" selected. We're gonna do a Command + V to paste the Docker file. And we can just close that guy up. Come back here, reveal it, and click it. Now, here is our new Docker file. The Docker file begins like the first one we built. Lines 1 through 9 are creating a C++ development environment. Lines 11 through 28 contain three new commands.
>
> **[1:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=102)** "WORKDIR" sets the current working directory on the Docker image we are building. Next, the "RUN [[Git]]" command builds the Mongo C Driver library. It gets the source code from [[GitHub]], then uses CMake to create the make file, builds and installs the library. And the last command, right here, "ldconfig", tells the operating system that there is a new library. The last "RUN git" command builds the Mongo C++ driver. By getting the source code again from GitHub, then it executes CMake, the options pass include "DBSONCXX_POLY_USE_MNMLSTC" which brings C++ 14 and beyond features to C++ 11. And "DCMAKE_BUILD_TYPE=release" which builds a production release of the driver. The other options simply tell the build where different components are located in the file system. The command concludes with "ldconfig" which tells the system about the new library. So now if we go to the terminal, we wanna be in the "bbox" directory. So we should only see the single Docker file here. We're gonna type in the command "docker build --rm --squash --no-cache -t bbox:latest ."
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-the-mongodb-c-plus-plus-drivers?u=76281980&t=195)** Hit return. This command builds the "bbox" image. The "--rm" tells Docker to remove intermediate containers after a successful build. The "squash" option squashes newly built layers into a single layer. And the "-t" gives it the tag "bbox:latest". This will take a while. But luckily, we only need to do it once. So it might be a good time to take a break and stretch your legs. Now we have a Docker image with all of the tools and libraries we'll need to build our web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[GitHub]] (2), [[MongoDB]] (1)
> **CLI Commands:** docker (11), git (2), mongo (2), rm (2), make (1)
> **Tools:** atom (3), github (2), terminal (1)
> **Env Vars:** run (2), workdir (1), dbsoncxx_poly_use_mnmlstc (1), dcmake_build_type (1)
> **UI Navigation:** click on (3), go to (1)
> **Exercise Files:** exercise files (2), source code (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** mlab (1)

#### [Querying Mongo data](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=0)** - [Instructor] We now have the [[MongoDB]] C++ driver in our Docker image. In order to use it we'll need to update our root Docker file, change a few lines in CMakeLists.txt and add code to main.cpp. Let's get started. So we're gonna open up the root Dockerfile. So here's hello_crow. We're not in bbox. We're gonna open up this root Dockerfile. We're gonna change where it says hello_crow to hello bbox:latest, and I'm gonna put a little space in there. This WORKDIR I'm going to make a copy of that line so I have two of them. The first one I'm gonna delete off the build from the end and I'm gonna type COPY. . which is just gonna copy our hello_crow source code onto our Docker image. Then after the second WORKDIR with the build on it I am gonna say RUN cmake . And I'm gonna say RUN make. And then I'm gonna keep the command that says /hello_crow. And that's gonna be it. I'm gonna save that off. Next we're gonna go into CMakeLists.txt. Inside of CMakeLists.txt the first thing I'm gonna do is here where it says find_package(Threads) I'm gonna put a space and add the REQUIRED here. Required just makes it so that in case it doesn't find this library it will error out of the build process, which is a good thing. You don't wanna build for five or 10 minutes
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=94)** and then find out something that you needed was missing once it was trying to link it. Then we're gonna add another find_package. And this find_package is looking for libmongocxx, and it too is required. Next I'm gonna just rearrange a couple of lines. So here on line 13 I'm gonna take the add executable and move it before the include directory. So it's just gonna say add_executable(hello_crow main.cpp). Then on line 13 I'm going to modify this line so that it says target_include_directories. I am gonna say hello_crow space. We're gonna keep the boost libraries, but I'm gonna add a PRIVATE right here. Then I'm gonna say space $ {} and then inside the curly braces I'm going to write LIBMONGOCXX_INCLUDE_DIRS.
>
> **[2:46](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=166)** So that's our LIBMONGOCXX_INCLUDE_DIRS directories. Then on the final line the target link libraries, I'm gonna do a space here. I am gonna say another $ {}, and here I'm gonna do LIBMONGOXCC_LIBRARIES,
>
> **[3:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=192)** and then I'm gonna save that off. Go to main.cpp, close to the top of the file, right underneath where it says include crow_all I'm gonna add some more includes, and the first ones that I'm gonna include are gonna be #include, and this is gonna be &lt;fstream&gt;,
>
> **[3:39](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=219)** #include &lt;iostream&gt;, and we're gonna include &lt;vector&gt; and we're gonna include &lt;cstdlib&gt;, the C standard lib. And the final thing I'm gonna include is gonna be &lt;boost/filesystem.hpp&gt;
>
> **[4:11](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=251)** and close that angle bracket. I'm gonna put a little space in here. Next I have three bson includes. The first one is gonna be &lt;bsoncxx/builder/stream/document.hpp&gt;.
>
> **[4:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=275)** And I'm gonna do #include &lt;bsoncxx/[[JSON]].hpp&gt;,
>
> **[4:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=285)** and I'm gonna do #include &lt;bsoncxx/oid.hpp&gt;.
>
> **[4:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=294)** This is working with Mongo's object ID. Then I'm gonna put one more space and then I've got four Mongo includes. So it's gonna be #include &lt;mongocxx/client.hpp&gt;,
>
> **[5:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=315)** #include &lt;mongocxx/stdx.hpp&gt;,
>
> **[5:28](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=328)** &lt;mongocxx/uri.hpp&gt;, and #include &lt;mongocxx/instance.hpp&gt;.
>
> **[5:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=345)** Now I'm gonna add some using statements. There's gonna be seven bson using statements and one Mongo using statement. So using bsoncxx::builder::stream.
>
> **[6:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=364)** Now there are gonna be six more of these. So I'm gonna just make copies of them. That's one, two, three, four, five, six, seven all together. First one's gonna be ::close_array, ::close_document, ::document, ::finalize, ::open_array, ::open_document, and finally the last one actually is not a stream, it is basic::kvp, for key value pair. And then we're gonna have a using mongocxx::[[Cursor]]. Now we're gonna scroll all the way down to our main function. Inside of our main function, right after it says crow::SimpleApp app we're gonna go ahead and establish our connection with the database so we're gonna say mongocxx::instance. The variable name is inst with {}; then we're gonna say string mongoConnect= std::string
>
> **[7:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=456)** and we're gonna call getenv, so we're gonna get an environmental variable, and this variable's name comes from Heroku. This is the thing that it told us on the settings page, it's MONGODB_URI. So we're gonna get that environmental variable because it's going to hold our connection string. And then we're gonna do a mongocxx::client and we're creating our connection and the variable's gonna be called conn. We're gonna have {}, here is what we're gonna instantiate this with, mongocxx::uri{} mongoConnect and then a ;
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=503)** and then we're gonna say auto collection = con we're gonna have two pairs of square braces and a semicolon. Inside the second one is gonna go the name of the collection, which for us is contacts. Inside of the first one, let us go to Heroku, go up to our database, we're gonna click on overview, click on mLab mongoDB. And it says database: this is the name of our database. I'm gonna do a command c to copy that name, go back to Atom, and then I'm gonna put some "" and inside those "" I'm gonna copy the name of our database. So we've got our name of our database, name of our collection here. Now I'm gonna scroll down and then just before our root route I am gonna create another route and we're gonna have app, and then the name of the route is gonna be contacts, and then after that we are gonna have some () and inside the () the first thing is gonna be some [] and in that [] this is our lambda capture. We want to capture the collection. So it's &collection. Then we're gonna have our parameters, we're not taking any.
>
> **[9:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=595)** Then we're gonna have some {} and a ; and I'm gonna open this up right here between the {} and we're gonna say mongocxx::options::find
>
> **[10:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=612)** and we're gonna create a variable called opts and we're gonna say opts.limit. So we're gonna use the mongolimit to limit the collection to the first 10 documents it finds. Then we're gonna say auto docs = collection.find. We're not gonna give it any query parameters but we are gonna pass in our options in order to limit it to the first 10. Then we're gonna do an std::ostringstream, space,
>
> **[10:51](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=651)** and this is gonna be os. And then we're gonna do a range base for, so we're gonna say auto &&, two &&, doc : docs.
>
> **[11:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=666)** We're gonna iterate over our documents. And for each one we are going to write out bsoncxx::to_json and we're gonna write out the document. And we'll also add a return \n and finally we're gonna return crow::response os. and we're gonna convert it to a stream and add a ;. All right so now we're gonna go back to the terminal. We need to do a cd :: and go to the root directory. Let's just do an ls, yep. That's the root and we are going to do a docker build and this should be familiar now,
>
> **[11:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=717)** - -rm --squash -- no-cache -t hello_crow:latest .
>
> **[12:12](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=732)** This should not take that long to run since it's only gonna build our source code and then link it. So it's gonna compile and link our source code in the Docker container. So the next thing that we need to do, first thing we're gonna do is we're gonna go back to Heroku, go to the settings tab, reveal our config vars. Here's our MONGODB_URI. I'm gonna click in this box and do a command a to select everything. And then I'm gonna do a command c to copy it. And I'm gonna come back to the terminal and I'm gonna type docker run -p 8080:8080.
>
> **[12:59](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=779)** That's gonna open up my port. Then I'm gonna do a -e. The PORT I'm gonna pass in the port environment variable, so PORT=8080, space, and I'm gonna do another environment variable, -e and this is gonna be MONGODB_URI=, and I'm gonna have a pair of "", and then inside those "" I'm gonna do a command v to copy the connection string that I copied from Heroku. And I'm gonna do a space and then it's hello_crow:latest and I'm gonna hit enter. And we can see our server is now running on port 8080 so let's go to our browser. Let's go back here, do a refresh. We see we get our [[JavaScript]] message. And now let's try our new endpoint, contacts, and voila, we've got data. Let's just take a quick look. We can see that there's 10 documents that are being displayed here. The 10th one, the first name is Aila. So let's have just a wee bit of fun. We're gonna come back to Atom. Right here where it says opts.limit(10), just before that line I'm gonna say opts.skip(9); and I'm just gonna save that off.
>
> **[14:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/querying-mongo-data?u=76281980&t=874)** I'm gonna go back down to the terminal. I'm gonna do a control c, and then I'm gonna do an up arrow to get back to my build command for hello_crow. I'm gonna rebuild it. And again this shouldn't take that long 'cause it's just gonna compile and link. Then I'm gonna do an up arrow to get back to my command with all the connection information. So I'm gonna run the server. We're running again. I'm gonna go back to the browser, and we can see that Donnajean is contact number one, Aila is contact number 10. If I refresh the browser at this point, now Aila is contact number one and we've got nine new contacts. So congratulations, we've written our first MongoDO query in C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[JSON]] (1), [[JavaScript]] (1)
> **Code Identifiers:** hello_crow (9), find_package (3), mongoconnect (2), add_executable (1), target_include_directories (1)
> **CLI Commands:** docker (6), find (4), make (3), mongo (3), cd (1)
> **Env Vars:** mongodb_uri (3), workdir (2), run (2), libmongocxx_include_dirs (2), port (2)
> **UI Navigation:** go to (5), click on (2), scroll down (1)
> **File Paths:** cmakelists.txt (3), main.cpp (3)
> **Tools:** terminal (3), atom (2)
> **Cross-References:** go back to (4)

#### [Adding dynamic data to a page](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=0)** - [Narrator] We've written our first database query, but the output is pretty ugly. Let's change that. Crow supports a logic list template system named mustache. Mustache makes our C++ data available when the [[HTML]] page renders. To use mustache, we need to make a few changes to our code. So let's go ahead and return to Atom, and the very first change that we need to make is just below the namespace crow, we're gonna say using namespace crow::mustache. Next we're gonna add a function called getview, and it's gonna return a type of string and getview, and it's gonna take in a const string reference to filename and a context, context, reference called x,
>
> **[0:55](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=55)** open and closed parentheses. This has just one line, that one line is return load, and we're gonna say filename plus .HTML, so we're adding HTML to the end of the line. Gonna do a .render x semicolon, then we need to just make one more small change. We're gonna copy this ..public and the plus sign and add it here as well. Then we're gonna scroll down to the main function. So right here in main, right after SimpleApp, let's put a little spacing there, and we're gonna have a set_base, and that's just gonna be a dot. This sets the location of the mustache template, and for us, we're just gonna use our normal navigation that we've been using for our HTML files, and so we're just gonna put a dot here. This is mandatory. Without set_base, mustache will not work, so we have to include it even though we're not really using it. We're gonna scroll down more until we get into our contact route. Now, inside of our contacts route, first thing we're gonna do is we're gonna go ahead and delete the variable os, 'cause we're not using it anymore, and we're gonna have crow::[[JSON]]::wvalue, and we're gonna call that dto for data transfer object, and we're gonna have a vector of crow::json::rvalue
>
> **[2:36](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=156)** and call that contacts. Now we already know that we're gonna have at least 10 contacts, so we're gonna say contacts.reserve.
>
> **[2:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=168)** We're gonna reserve enough room for at least 10 contacts, then we're gonna come down into our for loop, and we're gonna get rid of the double ampersands because we don't need those anymore, and we're also going to delete this whole line right here, and we're gonna replace the line with contacts.push_back
>
> **[3:14](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=194)** json::load, and that's gonna take bsoncxx::to_json
>
> **[3:25](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=205)** and the doc, and then add a semicolon to finish that line up. Next we need to tell the dto, what are we calling the contacts vector from within the HTML template? Well we're gonna call it contacts. Let's make it easy on ourselves, and it's gonna be equal to contacts. And the final thing that we need to do here is that instead of returning a crow response, we're going to return getview, and we're gonna pass getview contacts comma dto. So just out of a few lines, not too many, we're creating the dto object, creating our contacts, reserving space for 10 contacts, putting each of the documents into the contacts vector, pointing to the contacts vector from the dto object, and finally calling getview on contacts of dto. Now we need to actually create the contacts.HTML, and we're gonna start that off by selecting the index.HTML, doing a command C, then selecting the public, and do a command V. So we're just gonna make a copy of index.HTML, and I'm gonna call this contacts.HTML, and I'm gonna open it up and select it. First thing I'm gonna do is change the title to contacts. I'm gonna delete this [[JavaScript]] file here. I'm gonna change the style sheet, and the style sheet is now going to point
>
> **[5:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=301)** to [https://cdnjs.cloudflare.com/ajax/libs/bulma](https://cdnjs.cloudflare.com/ajax/libs/bulma),
>
> **[5:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=318)** B-U-L-M-A, and bulma is a lightweight css framework similar to like the bootstrap or something. It's really lightweight and gives you a lot of bang for the buck. So, we're gonna say version is 0.7.1/css/bulma.min.css.
>
> **[5:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=344)** Now, from within inside the body, I'm gonna just delete everything. And then I'm gonna start off with a section tag and the class on the section tag is section. And I'm gonna close off the section tag so I don't forget. Then inside the section tag is going to be a div tag, and the class of the div tag is content. Close off that div. Then, inside of here we're gonna have an h1 tag, and the class of the h1 is title, and the title is contacts. Let's close off this h1 tag. Then below the h1 tag we're gonna create a good, old-fashioned table, and the class of the table is table. And we'll close off the table tag, and inside of here the first thing we're gonna do is have a table header, thead, and close off thead.
>
> **[6:57](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=417)** And inside of there we're gonna have a table row. Close the table row, and here each table row's gonna have some table headings, so th, and we'll close th, and I need four of those altogether. One, two, three, and four. The first one, the first heading, is gonna be first name. The second one is going to be last name, then email, then phone. Now I'm gonna be a little bit lazy, and I'm just gonna copy the whole entire thead and change the first one to tbody, and change it to tbody down here as well. The t row stays, these th's are gonna get changed into td and close td, and I'll delete these th's and make four copies of the td as well. One, two, three, and four. And the first one is gonna be double curly braces, first name. Notice I did that. Then it's gonna be double curly braces, last name, and we're spelling these exactly the same way that they're spelled in the contacts collection. And double curly braces, email,
>
> **[8:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=512)** and double curly brace, phone. To have it render each document as a table row, we wrap the row with a section tag, and the section tag begins with a pound sign and then the name of the data field. So, double curly braces, pound sign, contacts, and then to end the section tag we drop down here after the closing tr, double curly braces, forward slash, contacts. And then we save that off, then we go to terminal. We stop the server, let's just do a clear screen, and we're gonna rebuild. Alright, and now we'll restart the server. Server's running. Here we are on the contacts page. Let's just do a refresh, and there are our contacts using a bulma style, and that's very nice. Now, before we go away, let's go back to our code and take a look at one thing. Let's go back to main.cpp, take a look at the contacts route. Right now we're returning a bunch of contacts. How would we create a route for a single specific contact? Well, that's not too difficult, so let's just go ahead and add it right now. First thing that we want to do is we're just gonna come all the way back up to the top again, and I'm gonna add one more using statement,
>
> **[10:06](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=606)** and this is gonna be using bsoncxx::builder::basic::make_document.
>
> **[10:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=618)** We need this in order to create our query. And we'll go back down to the route, and then just before the crow route, we're gonna create another crow route and this is gonna be crow_route, app, and then our URL for this is gonna be /contact/. Now we need a route parameter again, just like we have above and this is gonna be a string route parameter. Then below here we're going to have, here's our lambda capture, we still need collection because that's pretty much the only document collection we're gonna work from. So we go ahead and we pass that into our lambda capture, and for our parameters, we actually have parameters this time. It's the email, so we're gonna use the email address of the contact, and it's a good choice since it is unique for each person. So we're gonna say string email. We're gonna have an open and closing curly brace, a semicolon, and then inside of the curly braces, we only need two lines of code. First one we're gonna say auto doc = collection.find_one
>
> **[11:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=692)** and we're gonna say make_document, and then inside of the document we're gonna say kvp, key value pair, and then we're gonna pass in a string email. That is the name of the key we're looking for, and then the value is gonna be equal to the email variable. And then we're gonna say return crow::response bsoncxx::to_json, and then we're gonna take that document,
>
> **[12:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/adding-dynamic-data-to-a-page?u=76281980&t=733)** we're gonna get its value, and then in order for us to use that value, we're gonna get the view, and we're gonna send that into to_json, and put a semicolon on there, save that off. Let's do a quick check, see if I see anything wrong. No, let's go ahead back to the terminal. We're gonna stop the server with the control C. We're gonna up arrow until we get back to the build commands, so docker build. Let it go ahead and build out our app, then we'll restart the server, do a refresh. Okay, looks like everything's fine. I will grab the email address for the first contact right here, Aila. Then I'm gonna come up to the URL, I'm gonna delete the S, do a forward slash, then the email address, and I can see here's Aila's contact information. Let's go back and grab another one just to be sure. We'll grab the second to the last one. Again, I'll modify the URL so that it's just contact and then an email address, and now we've got our contact route is working and we have two different routes, both querying our [[MongoDB]] database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[JSON]] (3), [[JavaScript]] (1), [[AJAX]] (1), [[MongoDB]] (1)
> **Env Vars:** html (9), url (3)
> **Code Identifiers:** to_json (3), set_base (2), make_document (2), push_back (1), crow_route (1)
> **CLI Commands:** make (6), docker (1)
> **File Paths:** contacts.html (2), index.html (2), 0.7.1/css/bulma.min.css (1), main.cpp (1)
> **Tools:** terminal (2), atom (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Exercise Files:** template (3)

#### [Challenge: Create a webpage with data](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=0)** (soft bell chiming)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-a-webpage-with-data?u=76281980&t=8)** - [Instructor] Let's test our knowledge with a challenge. Create an [[HTML]] page named contact.html in the public folder. Modify the contact route to use contact.html. Use Mustache to render the contact data. Use Bulma to style the page. Give yourself 15 minutes or so to solve this challenge. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **File Paths:** contact.html (2)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a webpage with data](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=0)** (upbeat delicate music)
>
> **[0:07](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=7)** - [Instructor] How did you do with this challenge? Hopefully it wasn't difficult. Here's how I solved it. I modified the contact route to pass the contact data. Then I created contact.[[HTML]] by copying contacts.html, and finally I modified the contact's html markup, and added the contact data to it. Let's begin. Go back into Atom, and right here, let's go ahead and modify. The very first unit we need to do, is we're gonna say, crow colon colon [[JSON]] colon colon wvalue and that's gonna be our dto. Then I say dto. The name of the data in the dto is gonna be contact singular. And it's gonna be equal to and I'm just gonna copy everything that is right here except I don't need that last set of parentheses. And the only other thing that I need to do is I need to force send this through json load. So json colon colon load then wrap this parentheses and so this bson to json doc.value.view and that's gonna be our contact data. And then our return object is going to be getView. And the name of the view is contact and the data is in dto.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=103)** And then we just need a semicolon at the end of that line. Now we're going to come over here, select contacts. Do you a command C and a command V. We're gonna rename this to contact singular so I'm gonna delete that S, save it. Go ahead and come down here. Now I'm gonna change the contacts title to contact and I'm gonna change the h1 tag to contact. Then I'm gonna take everything that's inside of the table right up into my section tag and I'm just gonna delete it. And then after my section tag I'm gonna delete all of that as well. So now my table is only partially there. And I'm gonna change this TR to a div and also change it's closing tag. Then I'm gonna replace each one of these td's with a ptag for paragraph. So we're not gonna do anything fancy. Bt this will look pretty nice nonetheless. So ptag, ptag. Ptag and ptag. The other thing I'm going to do is just a nicety I'm gonna go ahead and take the last name, put a space right here and put the last name and the first name together. Get rid of this ptag right there. And one more thing I'm gonna do is there is an image tag so when we look we can see
>
> **[3:18](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-a-webpage-with-data?u=76281980&t=198)** that there is photo and this photo has a URL. And I'm gonna go ahead put that image tag on the page so right below all my ptags I'm gonna do an img source equals double quotes and inside the double quotes double curly braces and photo. And then I'm gonna close that photo tag. And then here I'm gonna change this from contacts to content. And likewise here I'm gonna change it to contact as well. So now they're singular and these are referring to keys in the object. We save everything off. Go down to the terminal. I'm going to stop the server by typing control C. I'm going to rebuild it. All right and then I'm gonna start the server again. Go back to the browser. Refresh the page and there we go. We've got our contact, the name is in one line now. We've got an email, our phone number and the image of our contact. You can try that with any of those. Remember your code does not have to match mine perfectly it just has to solve the problem. There are millions of different ways to write the exact same piece of code that are all equally correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[HTML]] (3)
> **File Paths:** contact.html (1), contacts.html (1)
> **Tools:** atom (1), terminal (1)
> **Code Identifiers:** getview (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. RESTful APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating an endpoint](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=0)** - [Instructor] Even though it isn't explicitly stated, the routes in crow only handle the GET method by default. This makes sense since it is the most-used method. It is the one issued by the browser when you type in a URL. If you wish to write a RESTful API, you'll need to know how to write route handlers for the other HTTP methods. In order to test the code in this section, you will need software which can issue requests using other HTTP methods. I am going to use the free Restlet Client Chrome extension. But there are others available and many are also free. Adding support for other HTTP methods is relatively straightforward, but remember one important thing. There can only be one handler for each route period. So if you want to handle more than one method on a single route, they will have to share it. Let's see how this is done. Let's go back into Atom. Just ahead of our route route, we're gonna create a new route. We're gonna say CROW_ROUTE. We're gonna say app. The name of this route is gonna be /rest_test. To support the other methods, we have to chain methods to crow route. So methods, and then as parameters, as arguments, we have to put in
>
> **[1:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=95)** each HTTP method we wish to handle. Let's begin by just putting in post. So it's HTTPMethod::Post. The next part of our code is similar to what we've already written. Gonna add an open and closed parentheses, our lambda capture with nothing in it, then our lambdas argument. We're gonna pass in the const request, and this is going to be &req. Then we're gonna do a response &res.
>
> **[2:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=139)** Then we're gonna have open and closed curly braces, a semicolon on the end. We're gonna open up right here. Then the first thing that we're gonna do is, we're gonna need to know which HTTP method called us. In order to know that, we have to get the request object. So string method = method_name. Then we pass in req.method. This tells us which method called us and converts its name to a string. Next we're gonna wanna set up our response object, so res. We need to call set_header on our response object. Our header is going to be of "Content-Type", and the content type for this one is gonna be text/plain, and then a semicolon. Then we're gonna do a res.write. We're just gonna write back a string which says, "Who called us?" So method + " rest_test". And finally, we're gonna do a res.end. Save that off. We're gonna go to the Terminal. Go ahead and do a Ctrl+C to stop the server. I'm going to use the up arrow
>
> **[3:54](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=234)** until I see docker build command and run it again by hitting Return. Hopefully this shouldn't take very long since we are just compiling and linking. Now we're gonna relaunch the server. I'm going to go to the browser. I'm going to go to the Restlet Client and I'm gonna change this method to POST. For the URL, I'm gonna say rest_test and I'm gonna say Send. If we look down here, we can see it says POST rest_test. That shows that our method is working. If we do this, say, for instance, with a GET method and say Send, we get a 404 Not Found. Try it with a PUT, Send, we get a 404 Not Found. That's because we're not handling either of those methods. Let's go back to the code and we'll add a couple of more methods in here. So we'll say HTTPMethod::Get. Let's go ahead and make a new line. HTTPMethod::Put. Now we're handling three different methods. We're gonna save the code with the Command+S. Go back to the Terminal. Ctrl+C to stop the server. Up arrow until I get to the docker build command. I'm going to build the server again,
>
> **[5:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-an-endpoint?u=76281980&t=332)** restart the server, go back to the Restlet Client. We can see the PUT command right here, and we'll do the Send again. This time we get a PUT rest_test and 200 OK, meaning it all worked. Let's try GET, try sending. We get a GET rest_test. Let's try DELETE, Send. We get a 404 as expected because that's not a method we are currently handling. That is all you have to do to create RESTful end points in crow.

> [!info]- Semantic Content
>
> **Env Vars:** http (5), put (3), url (2), post (2), api (1)
> **Code Identifiers:** rest_test (6), method_name (1), set_header (1)
> **API Endpoints:** get  (3), put  (2), post  (1)
> **CLI Commands:** docker (2), make (1)
> **Cross-References:** go back to (3)
> **Tools:** terminal (2), atom (1)
> **UI Navigation:** go to (3)
> **Analogies:** similar to (1), for instance (1)

#### [Parsing the path](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=0)** - We've already seen Atom incorporate a single parameter into a route handler but what if we need more parameters? That's not a problem. You can use as many parameters as your route needs. Let's return to the contact route handler. Currently, we have a route handler which searches for the contact via a single route parameter, the email address. Let's write another handler, this time passing the first and last names. So, we'll make a copy. And put it right below it. Go ahead and adjust. And now, we're gonna add a second string, so string. And this is gonna be firstname, and the second one is gonna be lastname. Now, we're gonna have to make another change, here, and that is that we need the request and response objects. So, I'm gonna say const request reference req. Response reference res. I need to modify this getView and I'll explain in just one moment why we're gonna modify it but now, we're gonna call it with a res contact. Here, let's add a little space. We're now gonna search for first name and last name, so first with a capital N, Name, and that's gonna be firstname.
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=94)** And then, we need to create another key value pair, so kvp. The property is lastName with a capital N, and lastname. Then, we're gonna go to the top and I'm going to change this getView from returning string to returning void. It is now gonna take the response, reference res. And then, inside here, we're gonna say res.set_header and it's gonna set the header to Content-Type, and the content type for an [[HTML]] file is text/html. This is the thing that's missing. It's not sending the content type when we are creating templates using Mustache. It's only sending the data and even though almost every browser in the universe will render this, neatness still counts, so now I'm gonna have auto text, and that is going to be equal to this value, right here. Then, we're gonna say res.write(text) and finally, we'll end with res.end to close off the response object. Let's just take another quick look.
>
> **[3:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=185)** We got res, res here, alright. Then, we're gonna go down and then just before the main function, I'm gonna add another helper function. And this helper function is gonna be return type void. Its name is notFound. It is going to take a response reference res and a const string reference to message. And it's going to res.code = 404 and that should be res, and then it's gonna res.write. Message + a string. Colon space Not Found. And then, res.end. And that's just a helper method when we need to throw a 404, I can just call this method, instead. Then, from with inside of our contact string string, I am going to do the following. If find one does not find a document, doc is set to false, so I am going to put if(!doc), meaning if doc is false, then return notFound with res
>
> **[4:38](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=278)** and the message is gonna be Contact, so it's just gonna say contact not found. Now, we need to go, carefully, through the code and make an update, and I wanna copy this, first, and up here, I'm gonna make the change so that it's just directly calling getView, passing the response. Let's see where else getView might be. There's one. Let's find another. Oh, there's one, right there. And we need to add to the parameters. So, let's see if there's any more. So, here's getView, turns void. There's the first one and it has the parameters. There's the second one and it has the parameters, and there's a third one, and it has the parameters. So, we save this off. Go to the terminal. Go Control + C to stop the server. And if you'll up arrow to find the docker build command, we're gonna run it so that it rebuilds hello_crow. And now, we're gonna rerun the server, go to the browser, refresh the contacts page, okay. Good, that's still rendering. We're gonna get Isabeau Luff.
>
> **[6:13](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=373)** Come up to the URL line. I'm gonna delete the S, add a forward slash, do a paste, and add another forward slash in between their first and last names, and hit Enter, and there goes Isabeau Luff. Let's go back, here, and let's get Maureen. Do the exact same thing. Delete that, add that, and add a backslash. Oops, I forgot the slash. Alright, so we get that. Now, let's search for a name I'm pretty sure isn't in there.
>
> **[6:56](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=416)** And we get a Contact: Not Found. Okay, so. Now, we know how to create handlers with more than one parameter. Let's return to Atom and we're gonna create three new routes, and I'll just create them right here. What these routes are gonna do, they're all gonna be named add. The first one's gonna add two integers, the second one's gonna add two doubles, and the third one will concatenate two strings. So, I'm gonna say CROW_ROUTE. It's gonna be app. It is a... Forward slash add, and then the first one's gonna be int. Int. We're not gonna do anything in our lambda capture. Inside of our parameters, we're gonna take, well, let's just copy request and response. I'm just gonna copy those from the method above. Paste them right there. Then, we're gonna have our open and close curly braces, and then, inside the curly braces, we'll start writing some code. They should actually be indented one over. This is actually gonna be some fairly simple methods. So, we're just gonna say res.set_header and the Content-Type is going to be text/plain.
>
> **[8:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=510)** Then, we're gonna create an ostringstream called os and on the first one, we're gonna say os Integer, colon space, and I'm gonna say A, then a space + space, and then B, then a space = space, and then A + B. And then, we're gonna end this with a \n and a semicolon. Now, let's go ahead and put those route parameters in, so we've got an int A and an int B. Then, we'll do a res.write, os.str, and a semicolon and a res.end, and a semicolon. We're creating a route called add. It takes two integers. It is gonna call the first integer A, the second integer B. We're going to display A + and then display B, and then say =, and then, do the math A + B. Now, I'm gonna create two more handlers very, very similar to this, so we're gonna do Command + C to copy, and the first one, remember, now, I absolutely have
>
> **[10:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=605)** to change the names of these routes. Otherwise, I will get a runtime error. First one's gonna be double. And this needs to be a double. So, A is a double and B is a double. But the math remains the same and I'm gonna just change that to say double. Likewise, down here, let's get it lined up. This is gonna be a string and this is gonna be a string, and then A is a string, and B is a string. And now, we're going to put string, here but otherwise the math remains the same. So, I'm gonna do a Command + S to save this. Go to the terminal. Do Control + C to stop the server. Go ahead and build. And restart the server. Go to the browser. And we're going to say add. Let's just do something really simple, one and two, and notice, I get an integer. One plus two equals three. If instead I say add 10.5 and 20.2, now I get double. 10.5, 20.2 equals 30.7 and if I say add thunder and cat,
>
> **[11:42](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=702)** I get a string, thunder plus cat equals thundercat. Now, what happens when you mix the types? Well, if I come in here and I say, add 10, which is an integer, and 29.1, which is a double. Double's gonna handle it and the reason why is because the route does not match integer but 10 works as a double as well as an integer. So, the router took a look at int, and int said nope, doesn't match. He took a look at double and double said, yes. It matches. Likewise, if I say seven plus dust, so now we've got an integer and a string, and its string is going to handle it. So, it took a look and it said, does it match integer and integer? No, does it match double and double? No, does it match string and string? Yes because everything matches a string and this brings up kinda the final point, here, is that the order of these routes is critically important because the router will stop the first time it finds a route which matches and everything matches a string. If you have a string handler and you have number handlers, the string has to go after the number handlers. To kinda demonstrate that, we'll make one quick change, and what I'm gonna do is I'm just gonna take this string handler for add that adds string and string,
>
> **[13:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/parsing-the-path?u=76281980&t=796)** I'm gonna cut it out, and I'm gonna put it just before the int handler. Alright, so I'm gonna save that. I'm gonna go back to the terminal. Control + C to stop the server. Let's build. Start the server. Go back to the browser and I say, add one and two. And you notice what it says, string. One plus two equals 12. Well, that's probably not what I wanted. Let's do 100.1 and 102.7. Two doubles and I get string. 100.1 and 102.7, and then, it just gives me a mismatched thing but it's treating it as a string. So, it's just concatenating everything together and we get 100.1102.7. Again, the order of your route is important. The router will stop when it finds the first route that matches and everything matches string. So, if you have ints, ints only match ints. Doubles can match both ints and doubles. Strings can match everything. Now you know how to create a route handler with multiple route parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (5), find (4), cat (2), docker (1)
> **Code Identifiers:** getview (5), set_header (2), notfound (2), lastname (1), hello_crow (1)
> **Versions:** 10.5 (2), 20.2 (2), 100.1 (2), 102.7 (2), 30.7 (1)
> **Definitions:** is a  (5), is an  (1)
> **Tools:** terminal (3), atom (2)
> **UI Navigation:** go to (5)
> **Env Vars:** html (1), url (1), crow_route (1)

#### [Reading the query string](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=0)** - [Narrator] Query strings are the part of the URL that comes after the question mark. They're never used to determine a route handler, but since they are related, let's see how to parse them in Crow. To access the query string, you'll need the request object. So, let's go ahead and just build a very simple handler to test this out, and so we're gonna say crow underscore route. and we have an app. The name of our handler is going to be forward-slash query, and we are going to have nothing in our lambda capture. Inside of our parameters list, we're gonna take the... Let's go ahead and just grab them from up here... The request and response objects, so paste those right there, and then we have an open and close in curly braces. The semicolon, we're gonna open that up, and what we're gonna do, is we're gonna say auto first name equals R-E-Q for the request, U-R-L underscore param, and that's with an S, params. And then we're gonna call the get method, and say first name, and we're gonna do the same thing for the last name, and last name here.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=97)** We're gonna create another O-string stream and call it OS again, and we're gonna say OS hello with a space, insertion operator. And I'm gonna just do a ternary check here. I'm gonna say first name, question mark. If first name is set, so right here, if it does a get for first name and it doesn't find anything first name will get set to null pointer, And null pointer is something you can check against. I'm gonna just say first name, and if first name is valid, we'll return the first name. Otherwise, we're gonna return an empty string. And I'm gonna do another insertion operator, and let's go down to the line below, and here I am going to say, just put a space in between in case there are words there. Gonna do the exact same thing that I did up here, only now with last name, so we've got last name in last name. And then I'm going to do another insertion operator, and we'll do end-l this time. Then we'll say res dot set, header, and again I'll use content, type, and text forward slash plain to a res, write, OS dot STR. And res dot end.
>
> **[3:15](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=195)** We're going to check to see if there's a first name that's being sent. Check to see if there's a last name that's being sent. And then we're going to create this hilt greetings, and using potentially the first name and the last name, and then write this out. So let's save this, go to the terminal, control C to stop the server, rebuild, then we'll restart the server, Go to the browser. We'll say query. And then I'll do a question mark, first name equals [[John the Ripper|John]] ampersand. Last name equals Smith. And we get a hello, John Smith. Now the order that these guys are in doesn't matter, so I can change them around and say last name is Smith, first name John, and it still works. Just to make sure that you believe me, let's change that to Joe Smith, and if I take one of these off, so now I've got a last name of Smith and no first name, notice now I get just Hello Smith. Likewise, if I change this to first name, and let's make it Anna, and it'll just say hello Anna. That's pretty much all there is to retrieving values from the query string.
>
> **[4:48](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reading-the-query-string?u=76281980&t=288)** Crow makes it simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (3)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** url (1), str (1)
> **UI Navigation:** go to (2)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Converting to JSON data](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=0)** - [Instructor] [[JSON]] is an extremely popular data format. Many [[Web Servers]], especially those used by [[JavaScript]] front-ends like [[Angular]] and [[React.js|React]], use JSON as their default format. How can we return JSON data from crow? Let's return to Atom. Let's take a look at the contacts handler, and this is contacts plural. It returns a webpage with 10 contacts rendered in an [[HTML]] table. We will make a version of it that returns JSON data instead of a webpage. Let's begin by making a copy of the contact's handler. So I'm just going to copy this whole thing, right here. Now I got the whole thing copied. Now remember, there can only be one of every route so instead of calling this one contacts, I'm going to call it api/contacts. I'm gonna go ahead and delete the response object because I'm not gonna need it. And we've got mongo. Skip, skip. Vector. Yeah, that's all fine. And then right here, instead of saying getView, so right now my dto holds my contacts and instead of calling getView on 'em, I'm gonna instead call return crow ::response and these are curly braces, dto. And just for the sake of neatness, I'm gonna move this dto guy down to here.
>
> **[1:37](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/converting-to-json-data?u=76281980&t=97)** The reason why is just, you should always declare stuff closest as you possibly can to where they're actually used. That is pretty much it. Crow has a constructor for the JSON data. In fact, when it creates a response object from crow::json::wvalue it automatically sets the content type to application JSON, for us. So let's save this. Let's go back to the terminal. Control-C. Let's rebuild and restart the server. Go back to the browser. Now this time I'm gonna call api/contacts and there you go. Here's my data as JSON data. We can validate this in the Restlet Client. So if I come in here and I paste that same route and I say get. Do a send. I get a 200 OK. Right here, it says that it's application/json and here you can see that it is JSON objects. We've got series of key value pairs. That's all there is to creating a JSON endpoint in crow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (11), [[Web Servers]] (1), [[JavaScript]] (1), [[Angular]] (1), [[React.js|React]] (1)
> **Env Vars:** json (9), html (1)
> **CLI Commands:** make (1), mongo (1)
> **Code Identifiers:** getview (2)
> **Cross-References:** go back to (2)
> **Tools:** atom (1), terminal (1)
> **Definitions:** is an  (1)
> **Best Practices:** you should always (1)

#### [Challenge: Create an endpoint](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=0)** (wooshing)
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/challenge-create-an-endpoint?u=76281980&t=8)** - [Instructor] Let's put everything we've learned together with another challenge. Modify the api/contacts route handler to use two query parameters, skip and limit. If skip is valid set the [[MongoDB]] skip option to its value. Otherwise, use zero. If limit is valid set the MongoDB limit option to its value. Otherwise, use 10. Here's a little hint of how to convert from string to integer. Give yourself about 10 minutes to solve this challenge and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Create an endpoint](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=8)** - I hope you had fun with the challenge and got it working. Let's see how I solved it. Remember our programs don't have to look identical in order for both to be valid. Very quickly I created two stings to hold the query paramaters. skipVal and limitVal and then I create two integers, skip and limit and both of these check to see if skipval and limitval, respectively are valid and if so uses stoi to convert the string in to integer. Otherwise the default values are used. And finally I set skip and limit options using skip and limit variables. So let's take a look at this in code. Let's go to Adam Let us find, the api contacts route and so what we're gonna do right at the beginning I'm gonna say auto skipVal equals req, the request object and it's gonna be ur underscore params dot get and we're looking for a query parameter named skip. I'm gonna the same thing auto, limitVal equals let's just be a little lazy and copy this. Alright and change this to limit Then we're gonna have an int skip equals skipVal
>
> **[1:44](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=104)** question mark. This is a ternary statement so if skipVal is valid, meaning that it is holding a string, we are gonna call stoi using skipVal otherwise we're gonna set this to zero. And we're gonna do an int limit equals limitVal question mark, otherwise stoi limitVal colon 10
>
> **[2:16](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/solution-create-an-endpoint?u=76281980&t=136)** is the default for this one. Now with those two values in hand they're either gonna be some number or zero, some number or 10 We're gonna change the skip option to use skip and the limit option to use limit and I'm gonna save that off I am gonna return to the terminal, do a control c, rebuild and run the server, turn to the browser and what we're gonna do here is api contacts question mark skip and we're gonna set it for nine and then set limit to ten, this is kind of the initial value equals ten and you notice that it doesn't seem like anything's changed but if I say skipped, is that skip to zero? And if we take a look right here, cause our very first one is Aila and we're gonna change it so that skip is now zero and Aila should go to number ten. And we can see that Aila moved, let's go and just be wild and say skip 50 and give me 20. So there we go. Now we are able to query our [[MongoDB]] data using dynamic skip and limit values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **Code Identifiers:** skipval (5), limitval (4)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)


### 6. WebSockets and Crow

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing the JavaScript client code](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=1)** - [Instructor] The [[JavaScript]] file, [[WebSocket]].js and its associated webpage, chat.[[HTML]] are both stored in the root directory for chapter six. Copy the JavaScript file to Public Scripts, so we're gonna do a Command + C to copy it, gonna go to Hello Crow, go to public, go to scripts, and do a Command + V, and we'll go back, copy the chat.html, Command + C, go to the public folder and do a Command + V, now we have both of those files. Let's go ahead and go back to Atom, open up websocket.js. Web Socket is a communication protocol which enables [[Real-Time]] data transfer between a client and server over a single TCP channel. Web Socket uses both the WS and WSS protocols for Web Socket and Web Socket Secured. Crow supports both protocols. In order to use Web Socket in the browser, we will need a client written in JavaScript. Don't worry, it's less than 40 lines of code. The first line of our client websocket.js creates the URL to the server's Web Socket implementation, so we are getting the location.origin, changing the http to WS and whether it's http or https, it will be replaced correctly and then we add a backslash S which is the handler for Web Socket.
>
> **[1:34](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/reviewing-the-javascript-client-code?u=76281980&t=94)** Then we create a new Web Socket object named socket, we use J Query to give us references to the three UI elements, the input box, the text area, and the submit button, we then create a random number and assign it to ID. We will use this to identify which user sent a given message. We then have create message, which is a helper function which takes an ID, a type, and a body, and puts it in the correct message format. We then have handlers for the four Web Socket events that we are supporting here on open, on close, on error, and on message. And finally, the last bit of code is the handler for the on submit event which is triggered by either pressing return from the message box or clicking the submit button. That is all there is to the JavaScript Web Socket code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[WebSocket]] (3), [[HTML]] (2), [[Real-Time]] (1)
> **File Paths:** websocket.js (3), chat.html (2)
> **UI Navigation:** go to (4)
> **Env Vars:** tcp (1), wss (1), url (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** atom (1)
> **Speakers:** - [instructor] (1)

#### [Creating the C++ server code](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=0)** - [Instructor] In order to implement web socket, we need to add two header files, unordered set and mutex. So let's go to the main cpp, go to the top of the file and we're gonna say include unordered underscore set
>
> **[0:20](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=20)** and include mutex. Unordered set is a container, which stores data in no particular order. The mutex helps make the code thread safe. Now we go down to the main function. And then right here in the main function, we're gonna do std colon colon mutex mtx.
>
> **[0:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=52)** And below it, we're gonna say std colon colon unordered underscore set.
>
> **[1:03](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=63)** And this is gonna be an unordered set of crow colon colon web socket colon colon connection and an asterisk pointer. And then this is gonna be called users. Okay then we go down just a little bit and we'll make this our first route. Give us a little space. Crow underscore route app comma ws.
>
> **[1:35](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=95)** As we said in the [[JavaScript]] file, ws is our route handler for web socket. Now what comes next is different than anything we've done so far. We're just going to, notice there's no semicolon at the end of that line, we're gonna indent one and we're gonna say dot web socket. And this is gonna chain this method to the one above it. And that's all there is to the web socket part. Now we need to implement on open, on close, and on message. So we say dot on open and then we're gonna have a lambda capture and the lambda capture's gonna take the ampersand and then inside of that we're gonna have a crow colon colon web socket colon colon connection
>
> **[2:29](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=149)** and it's gonna be a reference to conn. Then we're gonna have our open and closed curly braces, no semicolon, and we're gonna open that up and then inside we're gonna say std colon colon lock underscore guard. We're going to locking mutex to standard, std, mutex close angle bracket underscore mtx semicolon.
>
> **[3:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=180)** We're gonna say users dot insert and we're gonna insert the connection. That's how we're gonna keep track and that's just reference conn and then a semicolon. Let me drop down one line and we're gonna say dot on close and on close is going to look a lot like the one above it so I'm gonna save some time and just copy it. So it's gonna have a lambda capture, we're gonna pass in some parameters, and we are going to have a const string reference reason
>
> **[3:45](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=225)** and this is why the connection closed, open and closed curly braces and a closing parentheses, but still no semicolon. And we're gonna do something very similar to what we did above so let's just copy that. And instead of saying insert, now we're gonna say erase and we're gonna delete that connection. Then we do the final event handler, on message. And again, it's gonna start very similar so let's save a little time by doing a little cut and paste. Again we have the lambda capture, the connection, only this time we don't actually use the connection so I'm going to comment that out, but notice it has to be here because these parameters have to come in order and we're just letting anyone who comes along know that we're not actually using the connection in this code. So then we have a const string and this is gonna be data and it's followed by a bool, is underscore binary. Then we're gonna have an open and closed curly braces, a closing parentheses, and finally a semicolon. Then we're gonna do the same thing that we've done up here. We're going to put a lock guard on the mutex. And below that, we're gonna do a range for
>
> **[5:22](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=322)** and it's gonna be a for auto user colon users.
>
> **[5:31](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=331)** And then the first line inside we say if is underscore binary then we're going to user send underscore binary.
>
> **[5:50](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=350)** And what we're sending is data. Else, we're gonna do a user send text.
>
> **[6:01](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=361)** And this is also gonna send data. Then we're gonna have another route handler. So I'll just copy this one. And this route handler is going to be for forward slash chat. It's gonna have an empty lambda capture. It is going to take in a const request res
>
> **[6:32](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=392)** and a response and, I'm sorry, this should be req, R-E-Q, and then response, which is a reference to res, open and closed curly braces, ending semicolon. And then this is just a one line route handler and it just says send [[HTML]] with res. And the name of the file is going to be chat. And then a semicolon. Get rid of this extra space, do a command S to save, go down to the terminal, do a control + C to stop the server. Let's just go ahead and do a clear here. Let's build it and, again, all I'm doing is just doing the up arrow to cycle through commands I've already entered before. Let's restart the server. And let's go to the server. First thing I'm gonna do is just refresh the page that I'm on just to make sure everything is still alive and kicking then I'm going to change the route to forward slash chat. And there is our chat program. Let's type a message, oh, that's a good message. Hello world and send. And let us open up Safari and I want to grab this URL.
>
> **[8:04](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=484)** Let's make this smaller and let's make this one smaller too so I can see them both at the same time. And in this one I'm gonna respond by saying hola. And then if over here I say that some dogs are brown.
>
> **[8:23](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/creating-the-c-plus-plus-server-code?u=76281980&t=503)** The desert is hot. We can see our chat messages are going back and forth using web sockets. And that is our implementation of web socket using Crow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[HTML]] (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3)
> **Env Vars:** html (1), url (1)
> **Tools:** terminal (1), safari (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Running WebSocket on Heroku](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=0)** - [Instructor] Let's deploy our web server to Heroku again so we can check everything out in the cloud. So first thing I'm gonna do is go ahead and do a Control-C to stop the server running on my own docker container. I am going to do a clear screen. And I'm gonna go ahead and build it one more time even though I just did so. Again, just cause I like to be sure. With the app built, let's go ahead and do a heroku login. And I'm gonna go ahead and just clear this screen and do heroku login and it's gonna ask for my password and my two-factor authentication code. Now, next I do a heroku container:login and normally this does not prompt me for anything if I'm already logged in. Alright, so my login succeeded and I noticed that there is a Heroku update but I'm gonna skip that for now. And next, I'm gonna do a heroku container:push web -a For this command and for the next two after it, remember to replace the name of my app, which is infinite-falls-24876, with the name of your app. So I do a
>
> **[1:30](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=90)** - a infinite-falls-24876.
>
> **[1:43](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=103)** And next, we're gonna do a heroku container:release
>
> **[1:52](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=112)** again with, web -a infinite-falls-24876.
>
> **[2:05](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=125)** and the final command that we're gonna run is heroku open - a infinite-falls-24876
>
> **[2:19](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=139)** and that should open up my website. And give it a few seconds for the server to spin up on the cloud. We've got our Hello from [[JavaScript]] land. We say okay. There goes the picture of my cat. And now let's go to the chat. There goes our chat. Let's also bring up the chat in Safari. Let's go to Heroku. Alright, and so let's type a message. Hello and we see it in both of them. If I say Hola, over here, we see it on both of them and there is our chat app doing [[WebSocket]] in the cloud through Heroku. All of our other routes are still live and valid. So for instance, we can say contacts and there go our contacts. Let's stretch this out a little bit further. Make it look prettier. We can take one of these contacts and say single contact and search it by first and last name and there goes our contact, that way, and we can also say api/contacts
>
> **[3:47](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/running-websocket-on-heroku?u=76281980&t=227)** and here it is as [[JSON]] data and I can do things like say, ?skip=10 &limit=20 and there's my JSON data. So feel free to fully check out your C++ web server running in the Heroku cloud. I hope you've enjoyed this. This is pretty exciting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[JavaScript]] (1), [[WebSocket]] (1)
> **CLI Commands:** docker (1), cat (1), make (1)
> **Env Vars:** json (2)
> **UI Navigation:** go to (2)
> **Analogies:** picture (1), for instance (1)
> **Speakers:** - [instructor] (1), - a (1)
> **Tools:** safari (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-servers-and-apis-using-c-plus-plus/next-steps?u=76281980&t=0)** - [Instructor] Thanks for watching this course on [[Web Servers]] and APIs using C++. I hope you've enjoyed the information and will find some creative ways to put it to good use. There are a wide variety of courses covering C++ found in our library. Take care and keep on learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Troy Miles]]

## Resources

- Exercise files available

## Skills Covered

- Web Servers
- C++
- Application Programming Interfaces (API)

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