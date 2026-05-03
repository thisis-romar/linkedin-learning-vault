---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-docker-compose
url: "https://www.linkedin.com/learning/learning-docker-compose"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 3/29/2022
learners: 27516
skills:
  - Docker Products
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFwAV1IoJuh4Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1648228730190?e=2147483647&amp;v=beta&amp;t=UDGSNEdQiarrcYq7yrPvpQh4bEBzohvyc5R0gT4Mjf8"
linkedin_topic: DevOps
learning_paths:
  - '[[Docker Foundations Professional Certificate]]'
prev_courses:
  - '[[Docker- Your First Project]]'
path_nav: '[{"path":"Docker Foundations Professional Certificate","position":3,"total":3,"prev":"Docker- Your First Project","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/docker-products
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Docker%20Compose.md)

![Learning Docker Compose](https://media.licdn.com/dms/image/v2/C560DAQFwAV1IoJuh4Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1648228730190?e=2147483647&amp;v=beta&amp;t=UDGSNEdQiarrcYq7yrPvpQh4bEBzohvyc5R0gT4Mjf8)

# Learning Docker Compose

> What is Docker Compose, what it is good at, and what can you do with it? In this course, instructor Nicole Rifkin answers these questions and more. She goes into some of the pain points in local development that Docker Compose was built to solve, and she covers some of the limitations of the technology. Nicole gives you a quick refresher on some core Docker features and demonstrates how to configu

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-docker-compose) | 36m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Implement Docker Compose](#implement-docker-compose)
  - [What you should know](#what-you-should-know)
- [**1. Understanding Docker Compose**](#1-understanding-docker-compose) (3 videos)
  - [Compose in the Docker tool ecosystem](#compose-in-the-docker-tool-ecosystem)
  - [Docker Compose basics](#docker-compose-basics)
  - [Where to use Docker Compose](#where-to-use-docker-compose)
- [**2. Getting Started with Docker Compose**](#2-getting-started-with-docker-compose) (2 videos)
  - [Writing a Docker Compose configuration](#writing-a-docker-compose-configuration)
  - [Core Docker Compose commands](#core-docker-compose-commands)
- [**3. Docker Compose Core Features**](#3-docker-compose-core-features) (5 videos)
  - [Build arguments](#build-arguments)
  - [Mounting volumes](#mounting-volumes)
  - [Named volumes](#named-volumes)
  - [Exposing ports](#exposing-ports)
  - [Enforcing start-up order](#enforcing-start-up-order)
- [**4. Dynamic Configurations in Docker Compose**](#4-dynamic-configurations-in-docker-compose) (3 videos)
  - [Named subsets of services](#named-subsets-of-services)
  - [Multiple compose files](#multiple-compose-files)
  - [Environment variables](#environment-variables)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Implement Docker Compose](https://www.linkedin.com/learning/learning-docker-compose/implement-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/implement-docker-compose?u=76281980&t=1)** - Docker [[Jetpack Compose|Compose]] is an incredibly powerful tool that takes the complexity out of local development in Docker. It makes local development easier and simpler. Learning Docker Compose can help your organization solve pain points for Docker users and make developers more efficient and happier. In this course, I'll help you understand what Docker Compose is and what it is not. I'll walk through all of the core functionality of Docker Compose using real world examples for each feature. Finally, I'll spend some time discussing all the ways Docker Compose can add flexibility to your systems. My name is Nicole Rifkin. I'm a software engineer and a containerization nerd, and I'm very excited to teach you all about Docker Compose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (6)
> **CLI Commands:** docker (8), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - docker (1)

#### [What you should know](https://www.linkedin.com/learning/learning-docker-compose/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/what-you-should-know?u=76281980&t=1)** - [Instructor] Before you get started with this course, you should already have some familiarity with software containerization tools in general and Docker in particular. This course covers a very specific tool in the Docker ecosystem and therefore, is not intended to be an introductory Docker course. If you can't yet explain the difference between a Docker image and a Docker container, you should watch a [[LinkedIn]] Learning course on core Docker concepts before watching this course. I'll be going over concepts like storage volumes and port mappings throughout the course. If these concepts are totally new to you, I'd suggest reading a bit about them before jumping in. If you're familiar with storage volumes and port mappings but are a little bit fuzzy on the details, not to worry. I'll briefly review each of them as they become relevant in this course so that you can still follow along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** docker (6)
> **Speakers:** - [instructor] (1)


### 1. Understanding Docker Compose

[↑ Back to Table of Contents](#table-of-contents)

#### [Compose in the Docker tool ecosystem](https://www.linkedin.com/learning/learning-docker-compose/compose-in-the-docker-tool-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/compose-in-the-docker-tool-ecosystem?u=76281980&t=1)** - [Instructor] Docker tutorials, including this one, typically walk through a simple example of starting one or two Docker containers. However, software systems out in the wild are rarely that simple. A mature software system will usually have at least a few Dockerized services, each with specific, individual configurations. There may be some shared third-party dependencies or some services may depend on each other, which means that they need to be initialized in a specific order. In a microservice architecture, there may be hundreds of services to contend with. The simple steps to follow for starting one or two containers become extremely tedious or even impossible for starting hundreds of containers. That's where Docker [[Jetpack Compose|Compose]] comes in. Docker Compose is an independent tool that comes standard with most downloadable Docker distributions. Fundamentally, you can think of Docker Compose as simply a markdown language. It provides scaffolding for software developers to specify their Docker configurations as code. Using Docker Compose instead of manually configuring and initializing many individual Docker containers, developers can simplify the process down to running a single configuration file. Docker Compose doesn't add any functionality to the Docker ecosystem, but it does make the existing functionality significantly easier to use. This course is intended to clarify what Docker Compose is and is not and will provide detailed examples of how to leverage Compose in any Docker-based software system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (7)
> **CLI Commands:** docker (13), make (1)
> **Definitions:** means that (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Docker Compose basics](https://www.linkedin.com/learning/learning-docker-compose/docker-compose-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/docker-compose-basics?u=76281980&t=1)** - [Instructor] Understanding configuration as code is core to understanding Docker [[Jetpack Compose|Compose]]. Configuration means all of the settings that allow the system to run, such as where persistent data lives, how to access and send messages to other internal and external services, and what environment-specific values to use. Most configuration as code tools, including Docker Compose, are declarative rather than procedural. With Docker Compose, configuring a Docker environment involves executing a set of procedural steps in a specific order. Each subsequent step relies on the previous step and there are some implicit assumptions about the state of your Docker environment baked in. There can be bugs if the state of the environment does not match those implicit assumptions. For example, you may have a set of procedural steps written to build and run a Docker container. These steps will work the first time they are run, but on the second time around, they will not run as expected. This is because if the original container is already running, the run step will fail unless the old container is explicitly stopped first. Declarative tools, like Docker Compose, allow you to specify the desired end result and will execute any steps to reach that result automatically. In this example, the desired end result is to have a container running. This means that no matter how many times you execute your Docker Compose configuration, it should produce the same result each time. How it reaches that end result, including startup and cleanup steps,
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-compose/docker-compose-basics?u=76281980&t=93)** are only implementation details, and those are fully managed by Docker Compose under the hood. In general, there are several other great advantages to configuration as code, too. A configuration file can be checked into [[Version Control]], which makes it easy to revert to previous versions if the configuration ever breaks. It's also self-documenting, so you never need to worry about trying to remember that one command you ran two months ago. Finally, it makes it significantly easier to manage multiple Docker environments, each with slightly different configurations, like local development and your testing environment. Each one can hae their own independent configuration file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (6), [[Version Control]] (1)
> **CLI Commands:** docker (10)
> **Analogies:** such as (1), for example (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Where to use Docker Compose](https://www.linkedin.com/learning/learning-docker-compose/where-to-use-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/where-to-use-docker-compose?u=76281980&t=1)** - [Instructor] Docker [[Jetpack Compose|Compose]] was designed as a tool for a single hosted server. It's well suited for local development, a staging server, or a [[Continuous Integration (CI)|continuous integration]] testing environment. It's not designed for distributed systems and has no tooling for running containers across multiple hosts. In a software system with any significant amount of user traffic, such as a production environment, Docker Compose is not the ideal tool. This is because it does not have support for independently scaling services or any kind of auto scaling. To show you what I mean, throughout this course, I'll use the case study KinetEco, a clean energy business. KinetEco has two primary online applications, a storefront for selling things like solar panels and inverters, and a scheduler for professional equipment installation. Let's say the online storefront is expecting a significant but temporary increase in web traffic due to a promotional sale. The only way to scale up to multiple instances of the storefront is to run the Docker Compose figuration on multiple hosts. This will also scale up the scheduler at the same time. That's a waste of resources, since the scheduler is not seeing any additional traffic. While you can use Docker Compose in production, it is designed specifically for non-production environments only. A dedicated orchestration tool, like Docker Swarm or [[Kubernetes]], are designed to solve these problems in production environments, they're much better suited to the task than Docker Compose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (5), [[Continuous Integration (CI)|Continuous integration]] (1), [[Kubernetes]] (1)
> **CLI Commands:** docker (6)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started with Docker Compose

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing a Docker Compose configuration](https://www.linkedin.com/learning/learning-docker-compose/writing-a-docker-compose-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/writing-a-docker-compose-configuration?u=76281980&t=1)** - [Instructor] To get started using Docker [[Jetpack Compose|Compose]], the first step is to create a configuration file inside the application directory. Every Docker Compose configuration must be in a YAML file format and be saved under the file name, docker-compose.yaml. YAML stands for yet another markup language, and is a standard syntax for data serialization. If you're familiar with [[JSON]], they're very similar. Many other configuration as code tools use YAML syntax as well. Inside the Docker Compose YAML file, typically the first line will specify which version of Docker Compose is being used. This will depend on which version of Docker you're running, but for the sake of this example, we can assume both Docker and Docker Compose are recent versions. Next, the keyword, services, is used to specify all of the containers the application needs to run. An indentation of either tabs or spaces will denote that the next line belongs inside of the services object we've just defined. I'll revisit the Kinetico example of an online storefront selling energy efficiency equipment. On the backend, it relies on a [[MySQL]] database, which stores inventory data. Under services, will define our first service, named storefront. We'll need to provide Compose with instructions for how to create the storefront Docker container. In this case, we want to build the image locally. So under storefront, we use the keyword, build, and provide a path to the Docker file. If the Docker file is in the root directory,
>
> **[1:36](https://www.linkedin.com/learning/learning-docker-compose/writing-a-docker-compose-configuration?u=76281980&t=96)** meaning the same directory as the Docker Compose YAML file, we can use the bash notation dot to mean current directory. I'll now define a second service, named database. MySQL already provides prebuilt Docker images available for download from Docker Hub. So we don't need to build this image ourselves. Under database, I'll add the keyword, image, and provide the image name MySQL as a parameter. Docker Compose will [[Fetch]] the MySQL image automatically. Docker Compose services can be named anything. If I wanted, I could go back and rename storefront to Alice and database to Bob. Service names are intended to be human readable and ideally should be meaningful to any other developer who may be working on the system. Congratulations. If you are following along, you've written your first Docker Compose configuration file. You know how to define multiple services, and how to use Compose to build images locally and fetch them remotely. Later videos in this series will talk about advanced options you can add to this configuration file. But the next lesson will cover how to use the Docker Compose configuration we've just written.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (13), [[MySQL]] (4), [[Fetch]] (2), [[JSON]] (1)
> **CLI Commands:** docker (18), mysql (4)
> **Env Vars:** yaml (5), json (1)
> **Definitions:** stands for (1), is a  (1)
> **File Paths:** docker-compose.yaml (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Core Docker Compose commands](https://www.linkedin.com/learning/learning-docker-compose/core-docker-compose-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/core-docker-compose-commands?u=76281980&t=1)** - [Instructor] Docker [[Jetpack Compose|Compose]] provides many commands for managing the lifecycle of Docker services, but the most common ones are up, down, stop, and restart. In a terminal, start by navigating to the same directory where the Docker Compose YAML file is saved. All Compose commands start with the keyword docker-compose. To start up all of the services defined in the Docker Compose YAML file, run docker-compose up. This will build the Docker images for each of the defined services, create the containers, and start them. If, for any reason, you'd prefer to perform each of these steps individually, build the image, create the container, and start, Docker Compose provides the commands, build, create, and start, to do just that. However, for most use cases, docker-compose up is going to be the convenient, all in one solution. If you have a large software system with many services and you're working on only one piece of it, you may not want to start up every single service. You can pass in a service name to any Docker Compose command to apply it to only that service. For example, docker-compose up storefront will bring up only the storefront container and any of its dependencies. I'll cover the concept of service dependencies in a later video. You may also have noticed an error in running the [[MySQL]] container. We'll go over environment variables in a later video that will fix that too.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-compose/core-docker-compose-commands?u=76281980&t=97)** Once your Docker services are running, you may want to stop them because of a change in their code, to save on computer battery life, or for some other reason. Docker-compose down is the a opposite of docker-compose up. It will stop and delete all running containers, and will remove any artifacts created as part of docker-compose up. Docker Compose also provides the commands stop and RM to stop and delete running containers as individual steps. In local development, docker-compose stop is useful for or simply saving battery or freeing up some memory. Whereas docker-compose down is more aggressive and helpful if you've made changes to the running application. The last commonly useful command is docker-compose restart, which will stop and then start all running containers. It is shorthand for executing docker-compose stop, followed immediately by docker-compose start. This is super convenient for fixing random system errors. It's the equivalent of turning it off and on again. Finally, the command docker-compose dash dash help will display a list of all of these commands plus several more, including descriptions of each. It serves as a helpful reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (20), [[MySQL]] (1)
> **CLI Commands:** docker (22), mysql (1), rm (1)
> **Env Vars:** yaml (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Docker Compose Core Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Build arguments](https://www.linkedin.com/learning/learning-docker-compose/build-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/build-arguments?u=76281980&t=1)** - [Instructor] Build arguments and environment variables are both powerful features that make Docker builds more flexible. Environment variables in Docker are visible from inside the running container. Build arguments, on the other hand, are a type of environment variable that are available to Docker only at build time, but not inside the container. Build arguments are useful for things like specifying a version for a certain build tool or cloud platform configuration. A common example I've seen is a build argument specifying the region for a cloud service provider like AWS. If a Docker container is hosted in multiple regions, for example, it becomes easy to switch between regions while still using the same singular Docker file. To specify a build argument in the Docker [[Jetpack Compose|Compose]] YAML file I first have to change the build path syntax from the shorthand to a more explicit syntax. The Docker build path value, which in the previous example was simply dot, is now moved to its own attribute context, which is nested under the build parameter. At the same nesting level as context add another attribute args. Under args include any number of named build arguments in list format. The syntax for this is argument name equals argument value with no spaces. Arguments can have any name and any value like Alice equals zero. The most common and simple use case I've seen for a Docker environment variable is for specifying things like a current runtime environment, such as dev or test.
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-compose/build-arguments?u=76281980&t=95)** This can be useful for things like logging or enabling a feature flag. However, environment variables really can be used for anything. To pass an environment variable to a Docker container using Compose, under the named service add an attribute environment. Then in list format include any environment variables that should be accessible to that container using the same syntax as build arguments. Including only an environment variable name without a value will pass the value of that environment variable from the host server. Running export runtime_env equals dev on the host machine, and then leaving equals dev out of the Docker Compose configuration will have the same effect as specifying it inside the file. This is provided that the host environment doesn't change. The [[MySQL]] Docker image relies on several environment variables for specifying a root password, user credentials, and a database. You may have noticed errors related to missing environment variables in the last exercise. Instead of naming each environment variable individually, Compose also supports passing in file paths to an environment configuration. The syntax for this is to replace environment with env_file. Underneath, in list format, include paths to any environment files you want the Docker container to have access to. In the exercise handouts
>
> **[3:14](https://www.linkedin.com/learning/learning-docker-compose/build-arguments?u=76281980&t=194)** I've created the file MySQL env_vars, which will provide the environment variables required for the MySQL container to run. The environment variable file should have all variables listed with the same syntax, variable name equals variable value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), [[MySQL]] (3)
> **CLI Commands:** docker (12), mysql (3), make (1), aws (1)
> **Code Identifiers:** runtime_env (1), env_file (1), env_vars (1)
> **Env Vars:** aws (1), yaml (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Mounting volumes](https://www.linkedin.com/learning/learning-docker-compose/mounting-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/mounting-volumes?u=76281980&t=1)** - [Instructor] Volumes are a Docker construct used for persisted storage, so that even when a container stops running important data does not get deleted. At a minimum, when mounting a volume to a Docker service you'll need to specify a target, although typically you'll want to include a source and mode as well. A target refers to the file directory path inside the running container where this volume data will live. Failing to provide this value will result in a configuration error. In Docker composed syntax, this looks like adding a volumes object to the service that needs to access the volume. Under that object, you'll specify the target path. Technically, we can name the target path anything. By default, my [[SQL]] writes its data files to the directory var, lib, my SQL. So we'll make that the destination path. Frequently, it is also important to specify a source which is where the volume data lives on the host machine outside of any containers. If the Docker [[Jetpack Compose|Compose]] volume configuration does not specify a source, Compose will create a source volume automatically. The syntax for specifying a non default source is written as source colon target. For example, I have a SQL data dump in the folder named my SQL. So the composed configuration for the source would look like dot slash my SQL colon target. This would mount the data in the host my SQL folder onto the data directory of the running my SQL container.
>
> **[1:36](https://www.linkedin.com/learning/learning-docker-compose/mounting-volumes?u=76281980&t=96)** Compose conforms to Bash standards for specifying a directory path. So there are several ways to point to a folder. Using a dot syntax such as dot slash directory name will specify the file path relative to the Docker Compose YAML file. Dot dot slash directory name will point to a directory one level above the Docker Compose configuration file and so on. Slash directory name is going to be an absolute path on the host machine. Finally, you may want to specify an access mode. The default access mode is read, write, or RW, but if the application only needs to read persisted data and does not need to update it, it is best to set the access mode to read only or RO. The complete syntax is source colon target colon mode. A basic example where read only access is needed is if we are using that data dump to initially see the database only. If I change the target to Docker entry point initdb.d, this is a my SQL default, I can then go ahead and change the access mode to read only. So the complete example, again is source, target and access mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Jetpack Compose|Compose]] (5)
> **Env Vars:** sql (8), yaml (1)
> **CLI Commands:** docker (7), make (1)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Tools:** bash (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Named volumes](https://www.linkedin.com/learning/learning-docker-compose/named-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/named-volumes?u=76281980&t=1)** - [Instructor] If you want [[Jetpack Compose|Compose]] to manage the volume life cycle alongside the container life cycle, it is recommended to use named volumes. In the previous example, we briefly covered mounting a nameless volume to var/lib/[[MySQL]]. This would persist any database data written inside the container and store it on the host machine. As it's currently configured, this will create a new randomly named volume each time Docker Compose up runs. To give the volume a name, below the services object in our Docker Compose configuration, I'll define a new object called volumes, with a named object nested underneath it. The volume can be named anything, but for this example, I'll call it Kinetico, since the database is shared by the whole Kinetico system. Now, instead of specifying a source path when mounting a service volume, I will instead specify the volume name. Advantages of using named volumes with Compose is that when running docker-compose up or restart, Compose will automatically copy volume data from old containers to new containers, and ensure that no data is lost. If you run docker-composed down with the volumes flag, --volumes, it will automatically delete any named volumes so that they don't hog too much memory on your machine. I've worked in systems that did not use named volumes, and therefore created a new volume each time docker-compose up ran. After a couple of months,
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-compose/named-volumes?u=76281980&t=93)** I couldn't run the application locally anymore because my computer had run out of memory. I discovered this was because I had about 40 gigabytes of unused volumes silently taking up space on my local machine. The examples we've covered so far use what is called the short syntax for configuring a volume, but all versions of Compose higher than 3.2 have a more verbose and human readable syntax as well. In the documentation, this is referred to as the long syntax, and the example we just went through in long syntax would look like the snippet on the left.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (8), [[MySQL]] (1)
> **CLI Commands:** docker (5), mysql (1)
> **Versions:** 3.2 (1)
> **Documentation:** the documentation (1)
> **Definitions:** is called (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Exposing ports](https://www.linkedin.com/learning/learning-docker-compose/exposing-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-docker-compose/exposing-ports?u=76281980&t=0)** - [Instructor] The advantage of a containerization tool like Docker is that an entire application can be fully encapsulated inside of a single container. But by default, things outside of the container cannot access or communicate with anything running inside of the container. Containerized services usually need to communicate with each other or with the outside world, and developers typically want to access a containerized application via a local host. The way to allow this is by specifically exposing a port that maps from the host machine to the Docker container. There are over 65,000 TCP ports. Most services have a specific port that they'll operate on by default. Using standard Docker syntax without [[Jetpack Compose|Compose]], you would have to add port mappings when you run each container. It can be difficult to remember which ports should be exposed for each Dockerized service cannot expose the same port twice on the same host machine. This makes Compose especially convenient for documenting every port mapping for every service. I'm going to return to the KinetEco example from earlier in this course. In the exercise files, I've moved the storefront service to its own directory and added a second scheduler service. Both the storefront and the scheduler are configured to run on Port 80, which is a default port for many applications receiving web traffic. Mapping both applications to Port 80 on the host machine will cause a port collision. Often, the port number on the host machine
>
> **[1:32](https://www.linkedin.com/learning/learning-docker-compose/exposing-ports?u=76281980&t=92)** and the port number inside the container will be the same, but they don't necessarily have to be. To avoid a collision, I'll map Port 81 on the host to Port 80 for the scheduler. Internally, the scheduler is still receiving traffic on Port 80 inside of the container, but to access the application from the host machine, I can now use Port 81. Port mappings use the syntax host port number colon container port number. I personally always think of it as from port to port. In the Docker Compose YAML file, under the storefront service, I'll add a port's object and map Port 80 on the host to 80 inside of the container. I'll do the same for scheduler, but this time with Port 81 on the host. It is recommended to put the mapping in quotes but not required unless you are a port number below 60. This nuanced constraint is specific to YAML parsing integers in base 60. A Docker service may be performing different functions over multiple ports. A common example I've seen is monitoring tools for collecting metrics and [[Metadata]] about an application. The storefront service is instrumented to report monitoring information on Port 443. There's also a collection agent running on the host machine on the same port. To allow this monitoring tool to collect data about the storefront container, expose a second Port, 443 to 443. Exposing ports is one
>
> **[3:07](https://www.linkedin.com/learning/learning-docker-compose/exposing-ports?u=76281980&t=187)** of the most common use cases for Docker Compose, given that basically every Docker container will need some way to communicate with the outside world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), [[Metadata]] (1)
> **Ports:** port 80 (5), port 81 (3), port 443 (1)
> **CLI Commands:** docker (7)
> **Env Vars:** yaml (2), tcp (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)

#### [Enforcing start-up order](https://www.linkedin.com/learning/learning-docker-compose/enforcing-start-up-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/enforcing-start-up-order?u=76281980&t=1)** - [Instructor] Many common application architectures have service dependencies, meaning one service cannot operate without another. In the case of Kinetico's Storefront application, it may require that the database exists for the application to work as intended. To run the application container, we need to make sure that the database container is running first. This can be done manually with regular Docker commands, but [[Jetpack Compose|Compose]] provides utilities to enforce startup order automatically using the depends on flag. Under a service definition in the Docker composed YAML file, Ada depends on object. Nested underneath it are service names in list format. In this example, that would be database. Now that this dependency relationship has been established, compose will start and stop services in dependency order. Docker-compose up will start the database before it starts storefront. And Docker-compose down will stop storefront before it stops database. If database had its own dependencies, those would be started first and stopped last. Services can have any number of dependencies and many services can share a single dependency. Starting a specific service by name like Docker-compose up storefront will also start all of its dependencies automatically. While there is support for enforcing the startup order for containers, modern versions of compose
>
> **[1:35](https://www.linkedin.com/learning/learning-docker-compose/enforcing-start-up-order?u=76281980&t=95)** explicitly do not guarantee that dependent containers are running or are healthy. It only guarantees that they've been started. That's because in a distributed system, it is not possible to know that a dependent service, database or application is always up and running. In fact, we can be confident that no one's service will ever have perfect 100% uptime. All Docker containers should have [[Resiliency]] when a dependency becomes unavailable. In the rare and specific use case that a dependent service absolutely must be running before a container can start, there are third party tools to solve for this. They'll wrap your container's initialization command so that the container will not start if a dependency is unhealthy. However, this is not supported natively by composed. It is not recommended to rely on this level of tight coupling in a distributed system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (6), [[Resiliency]] (1)
> **CLI Commands:** docker (6), make (1)
> **Env Vars:** yaml (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 4. Dynamic Configurations in Docker Compose

[↑ Back to Table of Contents](#table-of-contents)

#### [Named subsets of services](https://www.linkedin.com/learning/learning-docker-compose/named-subsets-of-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/named-subsets-of-services?u=76281980&t=1)** - [Narrator] Docker [[Jetpack Compose|Compose]] provides a utility to start named subsets of services inside a single Docker Compose YAML file. This feature can be really helpful for a number of use cases. Especially in a larger organization, it's fairly common to see clusters of Docker containers that are frequently run together, but don't necessarily explicitly depend on each other. Imagine our example corporation Kinetico has recently divided its engineering teams. One group is responsible for the storefront and all of the services that support purchasing. A second group is responsible for the scheduling experience and all of the services supporting installation. To save processing power, the storefront development group does not want the scheduler containers running on their local machines. And the scheduling group does not want the storefront containers running. You wouldn't necessarily want separate Docker Compose files for this situation since the containers will sometimes need to be run together for things like [[Integration Testing]]. At a higher level, these are conceptually all part of one system and therefore should probably have only one configuration. This is where service profiles come in. Service profiles allow you to put a Docker service in one or more categories. For the sake of this demonstration, I'll represent these with one service each, but in real life there might be several [[Microservices]] each for the storefront and scheduler applications. Under the storefront service,
>
> **[1:34](https://www.linkedin.com/learning/learning-docker-compose/named-subsets-of-services?u=76281980&t=94)** I'll use the profiles keyword, and then a list of one or more profile names. And I'll do the same thing for the scheduler.
>
> **[1:51](https://www.linkedin.com/learning/learning-docker-compose/named-subsets-of-services?u=76281980&t=111)** Now by both of these depend on the database. So we want the database to be included in both profiles. If we don't assign a profile to the database service, it will be automatically included in the default profile. That means it will run all the time with every service profile, no matter what it is. Alternatively, we could specify multiple profiles for the database, but I'm going to leave it as default for now. Once a default profile is specified in the configuration, Docker Compose commands will only apply to a service if its profile is explicitly enabled. That means running Docker Compose up just like we did earlier in this course, will now run only services that are part of the default profile. In this case, that's just running the database. There are several ways to enable a non default profile, but the simplest is just adding the profile flag to any Docker Compose command. To run all services that are part of the storefront services profile including all default services, run Docker Compose --profile, our profile name, which is storefront services, and then up.
>
> **[3:11](https://www.linkedin.com/learning/learning-docker-compose/named-subsets-of-services?u=76281980&t=191)** This syntax will work with all Compose commands, including down and restart too. Now that service profiles are configured, it becomes incredibly easy to run only storefront related services, only scheduling related services, or both.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (8), [[Integration Testing]] (1), [[Microservices]] (1)
> **CLI Commands:** docker (9)
> **Analogies:** imagine (1), just like (1)
> **Env Vars:** yaml (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [narrator] (1)

#### [Multiple compose files](https://www.linkedin.com/learning/learning-docker-compose/multiple-compose-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/multiple-compose-files?u=76281980&t=1)** - [Narrator] There are several instances where having multiple composed files is more valuable than another organization tool like service profiles. In general, a good use case for multiple composed files is any situation where there are two distinct sets of desired behavior, that will never coincide. A great example is having a separate composed override file for multiple environments like local staging and CI testing. That's because you will basically never have local and staging configurations running on the same host machine at the same time. On the other hand, having multiple composed files for different parts of a single system is not a good use case. That's because at some point, a developer may want to run the whole system at once. By default, Docker [[Jetpack Compose|Compose]] will read two configuration files, one named docker-compose.yaml, the defaults, and one named docker-compose.override.yaml. The override file essentially inherits from the main configuration file. Docker Compose will merge the two files together. During the merge, any fields that can handle an array of parameters like depends on, will include all values from both the primary and the override file. Any field that can handle only one value such as the build path will give preference to that override. It's important to note that any file pods referenced in the override file must be relative to the primary configuration file. Unlike the primary file,
>
> **[1:33](https://www.linkedin.com/learning/learning-docker-compose/multiple-compose-files?u=76281980&t=93)** the override file does not need to be complete to be valid. It can contain snippets of configuration, specific only to what is being overwritten. Taking advantage of the override feature means that one Docker Compose configuration can be easily shared between multiple projects or repositories. It is also possible to have multiple override files in the same repository. By convention, you can replace override in the file name with anything you want. In the exercise handouts, I've created docker-compose.local.yaml, and docker-compose.staging.yaml, with environment variable overrides. Neither of these configurations will be run by default. To run configuration file overrides, use the -f flag, which stands for file. To run all containers with the local development overrides, we'll use docker-compose-f, now provide the primary file path, that's docker-compose.yaml. The -f flag again for the override path, local docker-compose.local.yaml. And then the command we want to use which is up. In our local versus staging environment example, overriding a composed file makes it extremely easy to support different configuration behaviors in different environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (10)
> **CLI Commands:** docker (10)
> **File Paths:** docker-compose.yaml (2), docker-compose.local.yaml (2), docker-compose.override.yaml (1), docker-compose.staging.yaml (1)
> **Definitions:** means that (1), stands for (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Environment variables](https://www.linkedin.com/learning/learning-docker-compose/environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/environment-variables?u=76281980&t=1)** - [Instructor] If your Docker composed configuration needs to have different behaviors in different environments but you don't want to support configuration overrides for every environment, a good alternative is using environment variables. In an earlier session, we discussed passing environment variables into running Docker containers. We can do something very similar by passing environment variables from the host machine shell to the composed configuration. It's even possible to continue passing those variables down the chain where they can optionally be used as either build arguments or Docker environment variables inside the running container. Environment variables are most commonly used for things like tags, versions, or ports, although they can be used to substitute any part of the composed file to make it more flexible in different environments. Inside a Docker composed YAML configuration, the syntax for accessing an environment variable from the shell is dollar sign, environment variable name. In this example, I'll make the [[MySQL]] tag configurable with dollar sign tag. The curly braces are optional, but help with readability. Now, if the tag variable is not set in the host environment, Docker will default to an empty string. There are several other ways to specify a default. In the configuration itself inline, in an external environment file, or simply by requiring that the variable is not empty. The simplest is an inline syntax.
>
> **[1:37](https://www.linkedin.com/learning/learning-docker-compose/environment-variables?u=76281980&t=97)** Colon dash followed by whatever I want the default value to be. In this case, I'll use latest. Alternatively, Docker [[Jetpack Compose|Compose]] will automatically read a file named .EMV in the project route directory. To provide defaults for multiple environment variables, use the standard bash syntax name equals value. If you have an ENV file by a different name, or if it's outside of the project directory, perhaps because it is shared across several projects, you can explicitly the file in using the --ENV file flag. Any environment variable that is set in the shell will always override a default value, whether that default is set inline or in an ENV file. Finally, it is possible to require that an environment variable is present with the following colon question mark syntax. Any value after the question mark is an error message to include if tag is unset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** docker (6), make (2), mysql (1)
> **Env Vars:** env (3), yaml (1), emv (1)
> **Definitions:** is an  (2)
> **Cross-References:** we discussed (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-docker-compose/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-docker-compose/next-steps?u=76281980&t=1)** - [Nicole] Thanks for watching my course. I hope you find ways to leverage Docker [[Jetpack Compose|Compose]] within your organization to make local developments simpler and developers more efficient. The Docker Docs have a dedicated section on Compose that details all of the features I've covered and more. It will be an incredibly useful reference when you go to implement Docker Compose in your own system. Finally, if you liked this course and want to hear more about what I'm working on, you can follow me on [[LinkedIn]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (3), [[LinkedIn]] (1)
> **CLI Commands:** docker (3), find (1), make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [nicole] (1)


## Instructor

- [[Nicole Rifkin]]

## Resources

- Exercise files available

## Skills Covered

- Docker Products

## Path Context

### In [[Docker Foundations Professional Certificate]]
← [[Docker- Your First Project]] | **3 of 3**

## Part of

- [[Docker Foundations Professional Certificate]]

## Appears In

- [[Docker Foundations Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to Docker for Java Developers]] — Docker Products
- [[Docker- Your First Project]] — Docker Products
- [[Docker Essential Training]] — Docker Products
- [[Learning Docker]] — Docker Products

---

[↑ Back to top](#)