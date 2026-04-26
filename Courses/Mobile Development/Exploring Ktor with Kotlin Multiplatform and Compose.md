---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: exploring-ktor-with-kotlin-multiplatform-and-compose
url: "https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose"
duration_minutes: 89
duration: 1h 29m
level: Intermediate
updated: 9/2/2025
learners: 3069
skills:
  - Ktor
  - Kotlin
exercise_files: true
github: "https://github.com/LinkedInLearning/exploring-ktor-with-kotlin-multi-platform-6004176"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFfngO00MxqnQ/learning-public-crop_675_1200/B4EZjnfDwkIIAo-/0/1756230335761?e=2147483647&amp;v=beta&amp;t=jUfu6S51589bAn2Lh7Z106veCERpp9-E9PbKmSgGS1I"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Kotlin Professional Certificate by JetBrains]]'
prev_courses:
  - '[[Kotlin Multiplatform Development]]'
path_nav: '[{"path":"Kotlin Professional Certificate by JetBrains","position":4,"total":4,"prev":"Kotlin Multiplatform Development","next":null}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/ktor
  - skill/kotlin
status: not-started
created: 2026-04-21
---

![Exploring Ktor with Kotlin Multiplatform and Compose](https://media.licdn.com/dms/image/v2/D4E0DAQFfngO00MxqnQ/learning-public-crop_675_1200/B4EZjnfDwkIIAo-/0/1756230335761?e=2147483647&amp;v=beta&amp;t=jUfu6S51589bAn2Lh7Z106veCERpp9-E9PbKmSgGS1I)

# Exploring Ktor with Kotlin Multiplatform and Compose

> In this hands-on course, Troy Miles—an award-winning software engineer, speaker, and author—explores the powerful combination of Ktor and Kotlin Multiplatform to build full-stack applications that share code across platforms. Step through the full process of creating a data-rich server application with Ktor, deploying it to AWS, and building cross-platform mobile clients using Kotlin Multiplatform

> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose) | 1h 29m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Troy Miles]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/exploring-ktor-with-kotlin-multi-platform-6004176)

## Skills Covered

- Ktor
- Kotlin

## Table of Contents

### Introduction

#### Explore Ktor with Kotlin Multiplatform and Compose Multiplatform
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=0)** - Do you ever look at mobile apps and wonder how teams build for both Android and iOS without writing everything twice, or wish you could create a single backend that serves data to any platform?
>
> **[0:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=13)** In this LinkedIn Learning course, we'll build a complete cross platform app from the ground up using Kotlin's type safe, modern approach to multi-platform development.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=24)** I'm Troy Miles.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=25)** I'm a software engineer, land surfer, and all around tech nerd.
>
> **[0:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=29)** So fire up Android Studio, get ready to explore the Cosmos, and let's build something amazing together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - do (1)


### 1. Getting Started with Ktor Server

#### Set up Kotlin Multiplatform (KMP) projects with a Ktor server
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=0)** - [Instructor] Welcome.
>
> **[0:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=1)** In this first module, we're setting up the foundation of our Kotlin multi-platform project, which includes both a mobile frontend and a Ktor-powered server backend.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=12)** We'll start by examining the server setup, how we launch it, and how the major pieces come together.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=19)** Let's begin in Application.kt.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=22)** This is our entry point for the server.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=25)** If you've used Spring Boot or Express before, this is similar to your main function or index.js.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=32)** In Ktor, we created embedded server, specify the engine, here it's Netty, and provide a port, host, and a reference to the main application module.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=44)** We're using System.getenv port to allow overriding the port via environment variables, that makes it easier to deploy to different environments later.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=57)** When the server starts, it calls Application.module.
>
> **[1:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=62)** That's where the real setup happens.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=64)** We configure Koin for dependency injection, initialize the database, and install a few plugins.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=72)** Let's walk through each of those steps.
>
> **[1:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=75)** First, Koin. We call Koin and pass in a few modules, appConfigModule, databaseModule, and appModule.
>
> **[1:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=86)** These are declared in separate files and lets us cleanly define dependencies like configuration, database access, and services.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=95)** Next is initializeDatabase.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=98)** This connects us to our SQLite database using Exposed ORM.
>
> **[1:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=104)** We are using HikariCP as our connection pool.
>
> **[1:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=108)** And this setup ensures our schema is ready before any API calls are handled.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=114)** Then we configure several Ktor features.
>
> **[1:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=118)** These are added using extension functions like configureSerialization, configureRouting.
>
> **[2:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=124)** Each one of these lives in a separate file, making the code modular and testable.
>
> **[2:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=130)** Notably, we also have configureBackgroundJobs.
>
> **[2:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=134)** This function wires up recurring jobs, like fetching the astronomy picture of the day, APOD, and cleaning up expired entries.
>
> **[2:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=144)** We'll explore how that works in a later module.
>
> **[2:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=148)** Once all that is initialized, the server logs its startup.
>
> **[2:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=155)** And we're ready to accept HTTP request.
>
> **[2:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=158)** In the logs, you'll see lines like responding at [http://0.0.0.0:8080](http://0.0.0.0:8080), indicating that everything is up and running.
>
> **[2:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=170)** So to recap, our server entry point is main, which creates an embedded Netty server and invokes the Application.module method.
>
> **[3:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=180)** Inside that module, we install dependency injection, set up our databases, and register plugins that handle serialization, error handling, routing, monitoring, and background jobs.
>
> **[3:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=193)** This modular structure keeps our code clean, organized, and ready for scaling.

> [!info]- Semantic Content
>
> **Code Keywords:** module (6), let (2), function (2), pass (1)
> **Prerequisites:** setup (3), configure (2), install (2), set up (1)
> **Code Identifiers:** appconfigmodule (1), databasemodule (1), appmodule (1), initializedatabase (1), configureserialization (1)
> **Env Vars:** orm (1), api (1), apod (1), http (1)
> **File Paths:** application.kt (1), index.js (1)
> **Analogies:** similar to (1), picture (1)
> **URLs:** [http://0.0.0.0:8080](http://0.0.0.0:8080) (1)
> **Ports:** :8080 (1)

#### Essential Ktor plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=0)** - [InstruKtor] Now that the Ktor server is up and running, let's talk about the core plugins that make it actually useful.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=7)** These plugins are where Ktor gets its flexibility and they're the backbone of any serious Ktor application.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=16)** Let's start with content negotiation.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=19)** This plugin allows a server to automatically serialize and deserialize requests and response bodies.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=27)** We've configured it with Kotlinx serialization, which gives us a fast and type safe way to work with JSON.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=36)** With content negotiation in place, we can return Kotlin objects directly from our route handlers, and Ktor will take care of turning them into proper HTTP responses, same goes for request bodies.
>
> **[0:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=52)** Ktor will handle deserialization for us.
>
> **[0:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=55)** Next is call logging.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=57)** This adds structured request logging, which is incredibly helpful for debugging and observability.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=64)** You'll get logs like get - /API in your console, which is great for tracking how your server is behaving.
>
> **[1:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=73)** Let's just take a quick peek at that.
>
> **[1:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=75)** Let's go to the terminal and actually do a request.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=84)** And if we come back here to the debugger, we see that we get the get - /API/APOD/today in our logs.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=95)** Another critical plugin is status pages.
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=99)** This one intercepts exceptions and translates them into well-formed HTTP responses.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=105)** Instead of returning a raw stack trace or an internal server error, we can catch specific exceptions like not found exception and respond with a meaningful message and status code.
>
> **[1:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=119)** All of these plugins are configured in small focus files.
>
> **[2:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=123)** That keeps our code base modular and easy to maintain.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=128)** Each plugin is installed in the application.module function.
>
> **[2:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=133)** To sum it up, Ktor plugins handle a lot of the boring but necessary parts of web development, serialization, logging, error handling, compression.
>
> **[2:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=146)** We've wired them up in a clean, modular way so our server is easy to extend and debug.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (1), function (1)
> **Env Vars:** http (2), api (2), json (1), apod (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instruktor] (1)

#### NASA Astronomy Picture of the Day (APOD) API integration
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=0)** - [Instructor] Now that our server is set up, and the essential plugins are installed, it's time to connect to the real world, literally.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=7)** In this module, we'll integrate with NASA's Astronomy Picture of the Day API, also known as APOD.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=14)** The key logic for this module is in the APOD service and APOD routes files.
>
> **[0:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=21)** We'll walk through how this service connects to NASA's API, caches responses locally in SQLite, and exposes a clean, restful interface to our front end.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=32)** Let's start at the high level.
>
> **[0:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=34)** The APOD service is where the business logic lives.
>
> **[0:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=38)** Its job is to answer questions like, "What's today's photo?
>
> **[0:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=42)** Give me a photo from last Wednesday."
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=44)** It can also return a random APOD or a paginated history.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=49)** Here's how that works.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=51)** When a client hits API APOD today, Ktor routes that request to the service.
>
> **[0:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=59)** So we start here at /api/apod/today, and then it calls apodService.getTodayApod, and that brings us here to getTodayApod.
>
> **[1:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=73)** Ktor routes that request to the service.
>
> **[1:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=76)** The service checks the local SQLite database using apodDao.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=84)** If the data is already cached, we serve it directly.
>
> **[1:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=88)** If not, we make a request to the NASA API and save the response locally before returning it.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=96)** So here we are, we are going to do a check, we're going to get today's value.
>
> **[1:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=101)** If it's not, if the cachedApod is not null, we can go ahead and just return it to whoever's calling us.
>
> **[1:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=109)** If not, we have to make a request out to NASA.
>
> **[1:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=113)** And if we get it, we go ahead and save it first and then return it.
>
> **[1:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=117)** Otherwise we get some sort of an error, and here's our error message.
>
> **[2:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=121)** Why cache it?
>
> **[2:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=122)** Two reasons.
>
> **[2:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=123)** First, performance.
>
> **[2:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=124)** Reading from our local database is faster than reaching out over the internet.
>
> **[2:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=129)** Second, resilience.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=131)** The NASA API has rate limits, and if we hit them, our service gracefully falls back to cached data.
>
> **[2:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=138)** Typically yesterday's photo with a clear message indicating it's a fallback.
>
> **[2:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=144)** We use similar flow for other endpoints.
>
> **[2:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=147)** For API APOD date, we validate the format, check the cache, and if needed, fetch from NASA.
>
> **[2:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=155)** We even guard against invalidate like future dates or anything before June 16th, 1995 when the APOD program started.
>
> **[2:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=165)** There is also API APOD random, which fetches a random cached picture or goes to NASA if needed.
>
> **[2:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=173)** And the APOD history provides paginated results using standard page and page size parameters.
>
> **[3:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=182)** But here's where it gets even smarter.
>
> **[3:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=184)** If the cache is empty or looks stale, we don't just return a blank result, instead we proactively fill it.
>
> **[3:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=194)** The service will automatically reach out to NASA and pull in data going back as far as 30 days.
>
> **[3:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=200)** It uses a rate limited loop and logs its progress.
>
> **[3:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=207)** This gives us a reliable cache of recent history, even if the server restarts or gets deployed to a fresh environment.
>
> **[3:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=215)** The APOD API becomes a trusted upstream, and we treat it with care, throttling requests, checking for errors, and backing off when we get rate limited.
>
> **[3:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=227)** By the end of this module, you've got a working API that talks to NASA, caches intelligently, and exposes four clean endpoints: today, date, random, and history.
>
> **[4:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=240)** And let's go ahead and do a quick test.
>
> **[4:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=246)** So this is the random API, we hit it.
>
> **[4:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=249)** And the best thing to look at is just like the parts of the title.
>
> **[4:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=254)** We see this as Galaxy Wars.
>
> **[4:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=256)** Now if we do another request to the same endpoint, this time we get NGC 6946 and NGC 6939.
>
> **[4:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=267)** So that's working.
>
> **[4:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=268)** And if we take a look in our console, we can see these requests went out.
>
> **[4:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=273)** So here's one for random, here's another one for random, and here's another one for random.

> [!info]- Semantic Content
>
> **Env Vars:** apod (11), api (10), nasa (9), ngc (2)
> **Code Keywords:** module (3), let (2), interface (1)
> **Code Identifiers:** gettodayapod (2), apodservice (1), apoddao (1), cachedapod (1)
> **Analogies:** picture (2), just like (1)
> **CLI Commands:** make (2)
> **API Endpoints:** /api/apod/today (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)

#### APOD API endpoints with validation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=0)** - [Instructor] By now, our APOD API can return today's image, a specific date, a random photo, or a paginated history.
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=9)** But just because an API works doesn't mean it's reliable.
>
> **[0:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=13)** In this module, we're going to tighten things up with validation and error handling.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=18)** The goal here is to make the API safer for consumers, easier to debug, and more robust under edge cases.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=26)** You'll notice most of this logic lives in the APOD service with a few helpers in the route definitions.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=33)** If we take a closer look at the APOD date endpoint, users provide a date and a URL and we try to return a corresponding APOD.
>
> **[0:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=45)** But what happens if the date is malformed?
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=48)** Or it's in the future?
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=49)** Or it's before June 16th, 1995, the start of the APOD archive?
>
> **[0:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=55)** That's where our validateDate function comes in.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=60)** It lives inside of ApodService and it needs to enforce three rules.
>
> **[1:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=66)** First, the date must be a valid ISO date.
>
> **[1:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=69)** Second, it can't be in the future.
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=71)** And third, it has to be on or after June 16th, 1995.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=78)** Let's handle the first of those rules, but don't worry, we'll come back for the other two.
>
> **[1:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=83)** If any condition fails, we throw an illegal argument exception.
>
> **[1:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=87)** That exception bubbles up into our route handler, which catches it and responds with a 400 bad request along with a helpful error message.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=97)** In fact, each route is wrapped in its own try-catch block.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=103)** So here's the one for today.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=105)** We can see that there is a try-catch block, and here's the corresponding error, and it will tell us what the error for that was.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=114)** This allows us to catch specific errors, like validation issues, as well as more general ones like network failures or database problems.
>
> **[2:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=122)** When something goes wrong, the API responds with a clear HTTP status code and an error response object.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=131)** For example, if a user requests API APOD date Foobar, we respond with a 400 and the message invalid date format.
>
> **[2:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=143)** So let's take a look at that.
>
> **[2:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=149)** There's our Foobar.
>
> **[2:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=153)** Oh wait, sorry, I didn't do what I said I was going to do.
>
> **[2:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=157)** So here's the date one.
>
> **[2:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=161)** And then we get the invalid date format.
>
> **[2:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=164)** Use the YYYY-MM-DD format.
>
> **[2:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=170)** We apply similar logic to the history route.
>
> **[2:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=173)** It accepts a page and a size.
>
> **[2:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=175)** Let's go to history.
>
> **[3:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=181)** It accepts a page and a page size, and we enforce bounds on both.
>
> **[3:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=186)** Page must be greater than zero, and page size must be between one and 100, and we can see that right there.
>
> **[3:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=195)** Any violation gets a 400 response, again with detailed message.
>
> **[3:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=201)** This approach follows a consistent pattern, validate input early, log clearly, and fail gracefully.
>
> **[3:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=209)** That way our API doesn't just work, it behaves predictably, and users always get feedback that they can act on.
>
> **[3:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=217)** We don't just rely on runtime checks.
>
> **[3:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=220)** These validations are small, testable pieces of code.
>
> **[3:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=224)** You can cover them with unit tests or property-based testing, and be confident they'll continue to behave correctly as the app grows.
>
> **[3:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=233)** To sum up, validation isn't just about catching bugs, it's about shaping the developer experience for whoever consumes our API.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), apod (6), url (1), iso (1), http (1)
> **Code Keywords:** let (3), module (1), function (1), throw (1), continue (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** validatedate (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Enhanced date validation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=0)** - [Instructor] Let's add some business rules to our date validator.
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=9)** Right now, we are only checking that the input is a valid date format.
>
> **[0:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=13)** In this challenge, you'll add two additional checks.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=17)** The date should not be in the future, and it should not be before June 16th, 1995.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=24)** If either of these rules fails, throw an error with a helpful message.
>
> **[0:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=28)** For example, date cannot be in the future or no apod available before 1995/06/16.
>
> **[0:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=37)** You can test your solution by requesting a valid date, like 2022/12/25 should succeed.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=44)** A future date should fail.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=47)** An early date like 1994/01/01 should also fail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), throw (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Enhanced date validation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=0)** - [Instructor] Hope you enjoyed this challenge.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=7)** Here's how I solved it.
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=10)** The existing validator already parses the date string.
>
> **[0:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=13)** I added two additional checks right after the parse step.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=18)** One checks that the date is not after today.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=22)** So we use local date now to get today's date.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=24)** We check to see if the date that we are working with is after using the is after, and then throw a date cannot be in the future message.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=36)** And then the other one, we check to see if the date is before 1995, 06, 16.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=44)** And if not, we say no APOD available before this APOD date.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=49)** So let's go to the terminal.
>
> **[0:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=52)** Let's do one that should pass so we get a response back.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=58)** Let's go to the future instead of 2022, we'll go to 2032 and run.
>
> **[1:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=65)** And we get a date cannot be in the future.
>
> **[1:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=68)** All right, well let's see if our time machine can take us to the past.
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=71)** Let's go back to 1990 and we get a no APOD available before 1995, 06, 16.
>
> **[1:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=83)** And that's how I solved this challenge.
>
> **[1:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=86)** And remember, as always, there's a million ways to write a program.
>
> **[1:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=90)** So, so long as yours passes a validation, I'm sure you're probably fine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), throw (1), pass (1)
> **Env Vars:** apod (3)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Storage and Caching

#### SQLite setup with Exposed object-relational mapping (ORM)
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=0)** - [Instructor] Now that we have a working Ktor server, pulling data from NASA's APOD API, it's time to start storing that data locally.
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=9)** In this module, we'll hook up SQLite using JetBrains as Exposed ORM.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=15)** You might have noticed there's no DB in the project, and that's on purpose.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=19)** We don't check the database into version control.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=22)** It gets created automatically at runtime and lives in a folder called data.
>
> **[0:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=29)** The file's casually named randomspace.db, and you can ignore it most of the time.
>
> **[0:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=35)** Just know the app creates and manages it for you.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=39)** Also worth calling out, we're not storing any images.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=43)** The database holds metadata about each photo, things like title, date, explanation, and the URL where the picture is hosted on NASA servers.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=54)** We establish a connection to SQLite in the initializeDatabase function.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=60)** It uses HikariCP, and this is going to be at the top, to manage performance and concurrency, and connects with the connection string that's passed to JetBrains Exposed, which handles everything from there.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=78)** Exposed is Kotlin's type-safe SQL framework.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=81)** It gives us a clean DSL, a domain-specific language for defining tables, columns, and queries.
>
> **[1:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=89)** If we take a look at ApodDao, we can actually see this domain-specific language.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=97)** So this is actually the Kotlin domain-specific language, Exposed.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=103)** No annotations, no fragile query strings, just compile check structure.
>
> **[1:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=108)** Our schema lives in the data access object layer.
>
> **[1:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=113)** For example, ApodDao defines columns like title, date, mediaType, mapping them to SQLite types like VARCHAR and TEXT.
>
> **[2:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=127)** Each of these maps directly to a property on the apod metadata object.
>
> **[2:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=132)** On startup, we use schema create to ensure that tables exist.
>
> **[2:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=141)** If the database file is missing, it's created automatically.
>
> **[2:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=145)** If the schema is missing, it's initialized.
>
> **[2:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=148)** It's one less thing to worry about when developing locally.
>
> **[2:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=151)** And since we're using SQLite, we don't need to spin up Postgre or MySQL just to test our server.
>
> **[2:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=159)** This makes development lightweight and portable.
>
> **[2:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=162)** Later, if we want to move to a more scalable database, we can.
>
> **[2:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=166)** Just update to JDBC driver and change the connectivity string.
>
> **[2:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=172)** The best part, everything is pure Kotlin, so we get full support from the IDE plus compiler checks.
>
> **[3:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=180)** It's safe, readable, and refactor-friendly.

> [!info]- Semantic Content
>
> **Env Vars:** nasa (2), apod (1), api (1), orm (1), url (1)
> **Code Keywords:** module (1), function (1)
> **Code Identifiers:** initializedatabase (1), mediatype (1)
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** mysql (1)
> **SQL:** varchar (1)
> **Speakers:** - [instructor] (1)

#### Data access layer implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=0)** - [Instructor] Now that we've got SQLite wired up and the schema initialization in place, it's time to implement the data access layer.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=7)** This is where we interact directly with the database.
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=10)** In this module, we'll define our DAO, data access object classes using JetBrains expose.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=18)** Classes like apod DAO and Cache metadata DAO, these classes are responsible for querying and updating tables in the database.
>
> **[0:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=29)** Each one encapsulates logic for a specific table and all interactions happen through them.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=36)** Let's take a look at apod DAO.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=39)** This class handles the apod metadata.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=43)** First, we define the table by subclass and table.
>
> **[0:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=46)** Each column is declared using exposes DSL, domain specific language.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=51)** We use VARCHAR for strings, text for long form content, and long for things like timestamps.
>
> **[0:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=59)** Each column gets a type and a constraint.
>
> **[1:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=62)** For example, the date column is a VARCHAR 10, and also the primary key.
>
> **[1:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=70)** That ensures each apod entry is unique by date, which is how the real NASA archive works.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=78)** After the table is defined, we implement a set of query functions.
>
> **[1:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=82)** These are methods the service layer calls when it wants to read or write data.
>
> **[1:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=87)** For example, get by date, get random,
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=96)** and get paginated, and finally, save.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=103)** Each of these runs inside an exposed transaction block.
>
> **[1:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=107)** That's important.
>
> **[1:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=108)** Expose requires transactions to safely interact with the database.
>
> **[1:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=113)** You can think of this as a cotton friendly wrapper around the JDBC transaction management.
>
> **[1:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=119)** Let's take get by date as an example.
>
> **[2:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=123)** Inside the transaction block, we query apod table using select.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=128)** If a row is found, we map it to an apod response object using a custom to apod extension function.
>
> **[2:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=137)** Similarly, the save function either inserts or replaces an existing row.
>
> **[2:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=143)** We use insert or replace to make sure we are not duplicating entries, and we store the current timestamp in the fetch at column.
>
> **[2:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=154)** By isolating all this logic in the DAO, we can keep the code base clean.
>
> **[2:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=160)** The service layer doesn't care how we talk to the database.
>
> **[2:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=164)** It just says, Hey, give me the apod for July 15th, or save this new one.
>
> **[2:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=170)** And the DAO takes care of the details.
>
> **[2:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=173)** The same pattern applies to cache metadata DAO, which handles simple key value pairs in a separate table.
>
> **[3:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=182)** This is great for tracking things like when the last cache maintenance job ran.
>
> **[3:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=187)** To wrap up, the data access layer is where we do the actual querying.
>
> **[3:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=193)** It is built entirely in Kotlin, Expose and safe transaction handling.

> [!info]- Semantic Content
>
> **Env Vars:** dao (7), varchar (2), dsl (1), nasa (1), jdbc (1)
> **Code Keywords:** let (2), function (2), module (1), finally, (1)
> **SQL:** varchar (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Caching layer integration
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=0)** - [Instructor] With the data layer in place, we now have all the tools we need to start caching APOD metadata locally.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=7)** In this module, we're going to connect everything together by adding a caching layer between the NASA API and the database.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=14)** Most of the logic lives inside of the APOD service class.
>
> **[0:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=20)** This service acts as the middleman and it decides whether to fetch from the local database or call out to NASA.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=27)** Let's start with a get today APOD method.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=30)** This method first checks the local cache by calling APODDao get by date.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=39)** If that returns a result, we use it.
>
> **[0:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=42)** Otherwise, we fetch the APOD from NASA using the NASA API client.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=47)** So right here we go and we get the date.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=51)** If it's not null, we go ahead and return this APOD that's been cashed.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=56)** Otherwise, we go ahead and fetch from the NASA API client.
>
> **[1:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=61)** And once we get something, we go ahead and save it and return it.
>
> **[1:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=65)** And just in case any sort of error or exception happens, this whole thing is wrapped in a try-catch block.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=72)** What's nice about this design is that the API handler doesn't care where the data came from.
>
> **[1:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=79)** The service extracts all of that, which makes testing and maintenance much easier.
>
> **[1:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=86)** But we've also added resiliency.
>
> **[1:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=88)** Suppose NASA's API is rate limited or temporarily unavailable, and that case we fall back to yesterday's cash photo if it exists.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=98)** And we clearly label the response as a fallback.
>
> **[1:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=104)** For historical browsing the getAPOD history method supports pagination and returns a paginated response.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=111)** If the database is empty, it triggers a background cash fill from the last 30 days.
>
> **[1:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=118)** That ensures we always have a minimum amount of content available without overwhelming the API.
>
> **[2:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=124)** The same pattern is used in get APOD by date and get random APOD.
>
> **[2:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=129)** In both cases, we check the cash limit first and only hit the network if necessary.
>
> **[2:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=137)** This reduces latency, respects NASA's rate limits, and keeps the app responsive even when offline.
>
> **[2:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=144)** And of course, every successful fetch gets saved with a fetched at time stamp.
>
> **[2:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=153)** This is handy for later cleanup or freshness checks.
>
> **[2:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=157)** The caching layer is really the brain of the system.
>
> **[2:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=160)** It optimizes API calls, handles fallback behavior, and keeps our database synced with the external data source.
>
> **[2:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=168)** Without it, the app would be slower, more fragile, and less user friendly.

> [!info]- Semantic Content
>
> **Env Vars:** apod (7), nasa (7), api (7)
> **Code Keywords:** module (1), class. (1), let (1), from. (1)
> **Code Identifiers:** getapod (1)
> **Speakers:** - [instructor] (1)

#### Background jobs and scheduling
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=0)** - [Instructor] In this module, we're going to set up automated background jobs that help keep the cache up to date.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=6)** These jobs run on a schedule and take care of fetching new data and cleaning out old records so you don't have to do it manually.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=14)** You'll find this logic in the run daily cache maintenance jobs method inside of Apod Service.
>
> **[0:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=20)** This method runs as part of a background job configured when the server starts up.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=26)** The first thing the job does is try to fetch and cache today's Apod.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=31)** This ensures that if the app missed it earlier, for example, due to downtime, it gets another chance.
>
> **[0:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=37)** Then it deletes old records from the database.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=40)** We define a retention window using cached days property, typically 90 days.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=47)** Anything older than that gets removed to keep the database lightweight.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=51)** After cleanup, the job checks whether any recent dates are missing.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=57)** For example, maybe the Apod from July 4th failed due to a network hiccup.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=64)** The job looks for gaps and backfills those days using the same caching logic we wrote earlier.
>
> **[1:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=70)** To keep track of when the job last ran, we use the cacheMetadataDao.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=78)** It stores simple key value pairs like daily maintenance, last run, so we can check this info later if needed.
>
> **[1:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=88)** All of this runs asynchronously using Kotlin co-routines, which means it won't block the main thread or slow down incoming API requests.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=97)** We also log every step, both successes and failures, so we can monitor job health in production.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=105)** This isn't a full-blown task scheduler.
>
> **[1:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=108)** We're just using simple Kotlin code and the server's built-in lifecycle hooks to run the job once per day.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=114)** If you need more advanced behavior like Kron expressions, retries, or distributed execution, you could swap this out for something like Quartz or push it to a cloud task runner.
>
> **[2:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=127)** But for small to medium maps, this approach works great.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=131)** It's fast, reliable, and simple to maintain.
>
> **[2:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=134)** All of your core data stays fresh without needing manual intervention or complex infrastructure.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Keywords:** module (1)
> **Code Identifiers:** cachemetadatadao (1)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Log each cached APOD
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=0)** - [Instructor] Let's wrap up this chapter with something small but useful, visibility.
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=10)** Your task is to log each time an apod is saved to the database.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=14)** Inside the save method, add a log line that includes the date, so we can track what's being cached and when.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=22)** This helps during development and also gives us a trail for debugging if we ever need to investigate why a certain entry is missing or stale.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=30)** You can test it by requesting any apod data and watching for the log output.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Log each cached APOD
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=5)** - [Instructor] Here's how I approach this one.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=8)** We already have a working save method that writes APOD entries to the database.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=12)** To make caching behavior more visible, I added a log message after each save.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=18)** This message includes the date of the APOD, so we can track exactly what's being cached and when.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=25)** This kind of logging information is useful, both during development and production diagnostic.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=31)** You can request a few APODs from the API and as long as the server is writing to the log, you'll see confirmation that the cache is happening as expected.
>
> **[0:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=42)** Let's take a little peek at this, go to the terminal.
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=48)** We get one APOD back.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=51)** Go to the debugging page and we can see right here where it's returning APOD for 2022-12-15 from cache from the APOD service.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=64)** And that's all for this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** apod (5), api (1)
> **Code Keywords:** let (1), this, (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced API Features

#### Enhanced error handling and status pages
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=0)** - [Instructor] In this module, we are going to improve how our servers handles errors.
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=5)** Right now, if something goes wrong in a route or service, the error might bubble up and trigger a generic response or worse, no response at all.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=16)** Let's make that better by setting up structured error handling using Ktor's status pages plugin.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=22)** This gives us full control over how the server responds to exceptions, both expected and unexpected.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=30)** You'll see configuration in the configure status pages function.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=36)** This is called from the application.module, When the Server Starts Up.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=43)** Inside status pages, we use exception handlers to catch specific exception types and respond with appropriate HTTP status codes and messages.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=54)** For example, when we throw an illegal argument exception, the server responds with a 400 bad request and a JSON body that includes a helpful message.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=67)** We also have a catchall handler for generic durable errors.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=72)** This ensures that if something unexpected happens like a null pointer or misconfigured DAO, the server won't crash.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=81)** Instead, it logs the error and returns a 500 internal server error with a generic fallback message.
>
> **[1:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=90)** Each response is wrapped in a consistent format using the error response class.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=96)** This class contains a message field and optionally a stack trace in development mode.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=103)** That helps front end developers debug without leaking sensitive details in production.
>
> **[1:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=109)** We also added the HTTP status code extension KT file to centralize status codes and messages.
>
> **[1:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=118)** That keeps things consistent and reduces duplication.
>
> **[2:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=122)** If we want to return the same 404 format for multiple routes, we can use a helper like not found instead of repeating code.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=131)** A small but powerful touch is logging every handled error.
>
> **[2:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=136)** That way, we have visibility into the kinds of failures users are experiencing, and we can prioritize which ones to fix or improve.
>
> **[2:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=147)** With this in place, users always get a meaningful response.
>
> **[2:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=150)** Developers get better logs, and the app behaves more predictably under failure conditions.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), let (1), function (1), throw (1), class. (1)
> **Env Vars:** http (2), json (1), dao (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Advanced routing and request processing
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=0)** - [Instructor] Routing is the heart of any web server.
>
> **[0:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=3)** It defines how requests get handled and which logic responds to which path.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=8)** In this module, we are going to refine our API routing and explore techniques for writing clean, scalable route handlers.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=17)** You've already seen the basics in the APOD routes function Paths like today, date, date, random history are all registered in the API APOD.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=30)** But there's more going on here than just wiring up paths.
>
> **[0:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=34)** First, notice that each route handles its own validation and exception handling.
>
> **[0:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=41)** That's intentional.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=43)** We want every endpoint to be resilient and self-contained.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=47)** For example, slash date slash date checks whether the date parameter is present and valid before calling into this service.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=56)** Second, we use early returns to avoid deep nesting.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=60)** If the date is missing or invalid, we return a 400 bad request immediately.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=67)** That keeps the code flatten and easier to read.
>
> **[1:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=70)** Third, we added an extension function called respond error.
>
> **[1:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=75)** This wraps up error responses in a consistent JSON format and ensures we don't duplicate response logic throughout the file.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=84)** Every error response includes the HTTP status code and message.
>
> **[1:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=91)** Let's talk a little bit about dependency injection.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=95)** The APOD service instance is resolved using coin inject function.
>
> **[1:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=101)** That lets us keep our route logic clean and testable.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=105)** We're not manually wiring anything.
>
> **[1:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=108)** We just declare what we need and let coin provide it.
>
> **[1:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=113)** We also added an admin route /api/admin/db-status.
>
> **[2:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=120)** This lets us inspect the database directly.
>
> **[2:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=125)** It returns a JSON object with the list of tables, a success message, and some internal connection info.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=131)** It's a handy tool for checking if the app is properly initialized, especially in staging or test environments under the hood.
>
> **[2:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=139)** It uses a raw SQL query via exposed to list the table names.
>
> **[2:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=145)** Even though most of our app uses Safe Kotlin DSL, there are times when going straight to the SQL makes sense and this is one of them.
>
> **[2:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=154)** With these patterns in place, clean structure, early validation, inject services, and utility helpers, you've got a routing set up that's easy to expand, test and maintain.

> [!info]- Semantic Content
>
> **Env Vars:** apod (3), api (2), json (2), sql (2), http (1)
> **Code Keywords:** function (3), let (2), module (1), self (1)
> **API Endpoints:** /api/admin/db-status (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Performance monitoring and optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=0)** - [Instructor] Performance problems can sneak up on you, especially in a server that looks like it's working fine.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=6)** In this module, we'll wire in basic monitoring and logging so we can detect bottlenecks and understand how the app behaves under load.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=14)** First up is request logging.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=17)** If you've checked out the configureMonitoring function, you'll see that we've installed Ktor's CallLogging plugin.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=24)** This logs in incoming requests, including method, path, and response time.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=31)** You'll see lines like 200 OK: GET - /api/apod/random in 7ms printed in the console.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=40)** These logs are incredibly useful during development, but they also help in production.
>
> **[0:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=45)** If users report slow responses or random timeouts, request logs can tell you exactly where the delays are happening.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=54)** We've configured our Logger using slf4j, which works nicely with Ktor and JetBrains Exposed.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=64)** That means database operations and background jobs can log to the same system with consistent formatting.
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=71)** If you want to go deeper, consider adding correlation IDs to each request.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=77)** That allows you to trace a request across services, even down to specific database queries.
>
> **[1:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=85)** We haven't added that here, but it's a common next step for larger applications.
>
> **[1:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=91)** Another tip is to monitor your cache rate hit.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=95)** In the APOD service, we log whether an entry was returned from the cache or fetched from the API.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=105)** That tells us whether our caching strategy is working and how often we're hitting external rate limits.
>
> **[1:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=113)** And speaking of caching, our logs now show how many entries were added, skipped, or cleaned during each maintenance job.
>
> **[2:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=121)** That gives us visibility into how the system is evolving day by day.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=128)** You don't need full observability to start optimizing performance.
>
> **[2:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=134)** Even simple logging done consistently can help you identify trends, isolate slow routes, and understand the cost of different operations.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1), function (1)
> **API Endpoints:** get  (1), /api/apod/random (1)
> **Env Vars:** apod (1), api (1)
> **Code Identifiers:** configuremonitoring (1)
> **Speakers:** - [instructor] (1)

#### API documentation and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=0)** - [Instructor] Even a great API is hard to use if people don't know how to use it.
>
> **[0:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=4)** In this module, we'll focus on documenting and testing our API endpoints, so they're easy to understand, easy to explore, and easy to validate.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=14)** While we haven't included OpenAPI or Swagger in this project yet, it's good practice to keep your endpoints well-structured and self-describing.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=24)** The API APOD routes use clear paths and HTTP verbs.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=30)** /today returns today's image, /date date fetches a date, /random gives you a surprise, and /history supports pagination with page and page size.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=43)** For manual testing, we've included an Insomnia workspace under the server/api-test/insomnia.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=54)** This YAML file defines all the routes and example requests you'll need to explore the API from a REST client.
>
> **[1:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=63)** Insomnia makes it easy to simulate edge cases like requesting a missing date or hitting the API without pagination parameters.
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=71)** These scenarios help you validate both our happy path and our responses.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=77)** Each route returns consistent JSON, even when something goes wrong.
>
> **[1:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=82)** For example, dates return a 400 with an error response object that includes a status and a message that helps front end developers handle errors without guessing.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=96)** If you want to automate, you could write integration tests using Ktor's test application engine.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=103)** That would let you simulate HTTP requests inside a test environment, check the response status, and assert on the body.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=111)** We haven't done that in this course, but the architecture supports it.
>
> **[1:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=116)** The goal here is not to just make the API work, but to make it trustworthy.
>
> **[2:02](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=122)** Clear routes, consistent errors, and easy testing tools all contribute to a better experience for anyone using it, including future you.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), http (2), apod (1), yaml (1), rest (1)
> **Code Keywords:** module (1), self (1), let (1), assert (1)
> **Tools:** insomnia (3)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Date range filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=0)** - [Narrator] Let's make our API more flexible by adding support for date-based filters.
>
> **[0:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=11)** Your task is to enhance the slash history endpoint to accept two optional query parameters, start date and end date.
>
> **[0:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=21)** If present, the results should include only entries within that range.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=27)** You'll need to validate that the start date is not after the end date.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=33)** If it is, respond with a clear 400 error end message.
>
> **[0:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=38)** To verify your changes, try calling slash api slash apod slash history.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=44)** Question mark start date equals a date and end date equals another date.
>
> **[0:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=50)** You should see only entries between those two dates.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Date range filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=0)** (bright rhythmic music) (bright rhythmic music fading)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=5)** - [Instructor] How did you do?
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=6)** Hopefully, it went well for you, and here's how I solved the challenge.
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=10)** We made a few changes to support date range filtering, one in the route, one in the service, and one in the DAU.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=18)** In the route, we check for both startDate and endDate.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=22)** If they're both present, we pass them to the service.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=25)** If only one is provided, we return a 400 to keep the behavior clear.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=31)** The service method now also accepts optional start and endDates.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=36)** If they're valid, we forward them to the DAO for filtering.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=39)** If not, we throw an error that gets handled by the route layer.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=44)** We gave our getPaginated method a suite upgrade to handle date range filtering.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=49)** Think of it as teaching an old dog some new tricks, while keeping all of its original charm.
>
> **[0:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=55)** Our method learned to accept startDate and endDate parameters, like giving it a calendar and saying, "Hey, only show me the cool space stuff from this time period."
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=64)** Now our method is like a helpful librarian who asks, "Do you want specific dates, or just everything?"
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=72)** When you ask for specific dates, it carefully converts your date strings into proper localDate objects, runs a targeted count query, how many pictures do we have between these dates, fetches the actual data with the same date filter, still keeping things sorted and properly paginated.
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=92)** When you want everything, the original behavior, it happily grabs all the records like it always did.
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=99)** There's no change here.
>
> **[1:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=101)** The same trustee select-all approach that's been working great.
>
> **[1:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=107)** Both paths still use the same reliable offset math, page-1 x pageSize, and limit offset combo.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=114)** So your pagination stays buttery smooth, whether you're filtering by dates or not.
>
> **[2:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=120)** The result your /history endpoint can now handle fancy date filtered requests, like passing its start and endDate, while still being totally cool with regular old pagination.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=131)** Win-win.
>
> **[2:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=133)** And so let's take a little look at this.
>
> **[2:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=135)** We've got the server running in the back.
>
> **[2:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=138)** Here, we have a history with a startDate of 2025-07-01, 1st of July, and endDate of 2025-07-10, so we should get back 10 objects.
>
> **[2:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=154)** And if we scroll all the way to the bottom, we can see that the pageSize is 10, the totalItems is 10, and we got one page.
>
> **[2:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=163)** And we can see, here are some of these 10 objects that we return.
>
> **[2:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=167)** So I hope again that it went well for you, and if not, just take some time and study this code.

> [!info]- Semantic Content
>
> **Code Identifiers:** enddate (4), startdate (3), pagesize (2), enddates (1), getpaginated (1)
> **Code Keywords:** pass (1), throw (1), let (1), this. (1), return. (1)
> **Env Vars:** dau (1), dao (1)
> **Non-Speech:** (bright rhythmic music) (1), (bright rhythmic music fading) (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)


### 4. Kotlin Multiplatform Foundations

#### KMP project architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=0)** - [Instructor] Kotlin multi-platform lets us share logic across Android, iOS, and even the backend.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=6)** In this module, we're going to break down the structure of our KMP project and walk through how it all fits together.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=14)** There are three key modules, shared, composeApp, and iosApp.
>
> **[0:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=20)** Each of these plays a specific role.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=22)** Let's start with shared.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=25)** This is where most of our code lives, the business logic, networking layer, caching, and data models.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=31)** It's organized using src sets, like commonMain, androidMain, and iosMain.
>
> **[0:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=42)** Code in commonMain is shared by all platforms.
>
> **[0:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=46)** The platform-specific folders let us add behavior that's unique to Android or iOS when needed.
>
> **[0:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=53)** The shared module is compiled into an Android library for the Android app and into a Kotlin-native framework for iOS.
>
> **[1:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=61)** That means, we only write our logic once.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=64)** Both platforms can use it natively.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=67)** Then we have composeApp.
>
> **[1:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=69)** This is the Android UI layer.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=72)** It depends on shared and builds a Jetpack Compose interface for the user to browse APOD metadata.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=81)** Because Compose is still only Android only, this module stays platform specific, but everything it depends on, like repository models comes from shared.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=94)** By the way, newsflash, iOS is now able to use Compose.
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=99)** It's still in an experimental stage, but hopefully by the time this course comes out, it will be fully 1.0.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=105)** We are using it.
>
> **[1:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=107)** And finally, there's iosApp.
>
> **[1:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=109)** This is the Xcode project and Swift UI interface for iOS.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=114)** It includes the generated Kotlin framework from the shared module, which means we can call shared Kotlin code directly from Swift.
>
> **[2:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=123)** In this setup, iosCode focuses only on UI and lifecycle.
>
> **[2:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=130)** No network or database logic lives here.
>
> **[2:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=133)** This structure is designed to maximize code reuse without sacrificing platform-native UX.
>
> **[2:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=139)** Backend logic, data models, business rules, and caching live in shared.
>
> **[2:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=146)** UI and platform-specific hooks stay in their respective modules.
>
> **[2:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=151)** KMP gives us the flexibility to write platform-specific code only when we need to.
>
> **[2:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=157)** If a particular feature requires native APIs, like biometric authentication or camera access, we can implement it in androidMain and iosMain, while still keeping the interface shared through expect actual declarations.
>
> **[2:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=174)** The big advantage is consistency.
>
> **[2:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=176)** Both platforms use the same models, the same repository, and the same logic for things like pagination, validation, and formatting.
>
> **[3:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=185)** That means fewer bugs, less duplication, and easier testing.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (5), composeapp (2), iosapp (2), commonmain (2), androidmain (2)
> **Code Keywords:** module (4), interface (3), let (2), finally, (1)
> **Env Vars:** kmp (2), apod (1)
> **Versions:** 1.0 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Shared data models and constants
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=0)** - [Instructor] In this module, we are going to focus on what goes into the shared module, and more specifically, how we define shared models and constants that work across all platforms.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=12)** Shared models are the foundation of a clean, Kotlin multi-platform architecture.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=17)** They let us define data ones and use it everywhere, on iOS, on Android, and even the backend if we want to.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=26)** You'll find most of these live in shared, source, commonMain, and Kotlin.
>
> **[0:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=35)** That's the directory where we define platform-agnostic code.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=40)** Inside you'll see data classes like ApodResponse, PaginatedResponse, and ErrorResponse.
>
> **[0:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=50)** These are used for everything, parsing JSON, communicating between services, and shaping what we send back to the UI.
>
> **[0:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=59)** Because they live in commonMain, we can safely serialize and deserialize them on both Android and iOS using the same logic.
>
> **[1:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=69)** We're using kotlinx.serialization here, which gives us fast and type-safe way to encode and decode data.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=77)** Every model is annotated with @Serializable, and we can control things like default values and field names using Kotlin standard syntax.
>
> **[1:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=89)** One benefit of sharing these models is consistency.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=93)** When Android and iOS both rely on the same ApodResponse structure, we avoid subtle bugs caused by mismatched field names, null ability issues, and platform-specific assumptions.
>
> **[1:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=106)** In addition to models, we can also define constants here, like the default pagination size, allow date formats, API limits, and even human-readable error message that can all live in commonMain.
>
> **[2:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=123)** If any constants do need to vary by platform, say, base URL for networking or file path for caching, we can handle that with expect actual mechanism.
>
> **[2:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=135)** But most of the time a single shared constant is enough.
>
> **[2:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=139)** This separation of data and logic make testing easier too.
>
> **[2:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=143)** Because the models live in a pure Kotlin module, we can test them on JVM or in common test code, no emulator, simulator, or device required.
>
> **[2:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=155)** Shared data models and constants are where structure starts.
>
> **[2:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=160)** They're easy to overlook, but they're what makes true code reuse possible in a KMP project.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (3), commonmain (3)
> **Env Vars:** json (1), api (1), url (1), jvm (1), kmp (1)
> **Code Keywords:** module (3), let (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### Dependency injection setup
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=0)** - [Instructor] In this module, we are going to set up dependency objection for our shared code.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=6)** If you're coming from Android or server-side Kotlin, you might already be familiar with DI frameworks like Dagger, Hilt, or Coin.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=14)** We're using Coin.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=16)** The idea behind DI is simple.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=19)** Instead of creating dependencies manually in each class, we define how to build them in one place called the module.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=27)** Open shared modules, you'll see a function called shared module.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=33)** This is where we define all singletons and factories for our shared code base.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=39)** Let's walk through a few examples.
>
> **[0:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=42)** First, we provide our APOD repository as a singleton That means it's created once and reused everywhere.
>
> **[0:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=50)** We also define how to create the APOD service and database classes, passing any required parameters into each constructor.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=58)** We're keeping things clean by splitting modules.
>
> **[1:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=61)** Shared services go in one module while platform specific ones like Android's contacts or iOS delegates are defined separately in Android main or iOS main.
>
> **[1:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=73)** If we switch to the Android module for a second, you'll find Platform Android KT.
>
> **[1:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=85)** This file defines a platform module, which includes any platform specific dependencies.
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=92)** Then in main activity, we initialize Coin.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=96)** The iOS side works similarly.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=98)** What's powerful about this setup is that the shared code never needs to know what platform it's running on.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=105)** It just asks for what it needs, like an APOD repository, and Coin provides the right instance.
>
> **[1:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=112)** This decouples creation from usage, makes unit testing simple and sets the stage for replacing implementations if we want to test offline behavior or simulate errors.
>
> **[2:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=126)** That's dependency injection in Kotlin multi-platform using Coin.
>
> **[2:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=130)** Simple, flexible, and 100% testable.

> [!info]- Semantic Content
>
> **Code Keywords:** module (6), class, (1), function (1), let (1), switch (1)
> **Code Identifiers:** ios (3)
> **Env Vars:** apod (3)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** find (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Platform-specific logging
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=5)** - [Instructor] We've been logging events on the server for a while now, but what about shared code?
>
> **[0:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=11)** In this challenge, we're going to extend logging support to our shared Kotlin multi-platform module starting with Android.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=18)** The goal is to let common code write log messages without knowing which platform it's running on.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=25)** You'll start by defining an expect class in commonMain with two functions, one for info level logs, and one for error level logs.
>
> **[0:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=34)** Then implement the actual class in androidMain using Android's Log.i and Log.e functions to write to Logcat.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=43)** Once that's in place, call your logger from a shared class or service to confirm it works.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=49)** You should see the output in Logcat when you run the app.
>
> **[0:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=52)** This is a great way to get familiar with platform-specific declarations in Kotlin Multiplatform.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=58)** And once you've got Android version working, it'll be easy to add support for iOS and other platforms later.

> [!info]- Semantic Content
>
> **Code Identifiers:** commonmain (1), androidmain (1), ios (1)
> **Code Keywords:** module (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Platform-specific logging
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=5)** - [Instructor] How'd you do?
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=6)** Were you able to get logging working in shared code?
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=10)** Hopefully, you found an approach that felt clean and makes sense to you.
>
> **[0:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=13)** There are different ways you could solve this, but here's how I tackled it.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=18)** I started by defining an expect class called PlatformLogger in shared code.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=24)** Notice that it has the expect before it.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=27)** Then, I created the platform-specific versions in jvmMain.
>
> **[0:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=34)** Here, we're using println and System.err.println.
>
> **[0:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=38)** Also in androidMain, here we used the Log.i and Log.e.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=43)** And finally, iosMain, where we use NSLog to print it out.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=49)** Once that was in place, I called the logger from my shared service code.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=54)** Now, what I actually do is a little different.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=57)** I said, let's put this into our actual MainActivity.
>
> **[1:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=66)** So here we get a message that says, "Hey, MainActivity launched."
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=71)** Now, the same logging call works no matter what.
>
> **[1:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=74)** So if I take a look inside right now, I do have the Android app running in the background.
>
> **[1:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=79)** It's been running for a bit.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=81)** If I take a look in Logcat and I look for MainActivity launched, we can see it right here.
>
> **[1:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=90)** Now, if you run your app now and trigger a few API calls, you should see those log messages show up in Android Logcat or an Xcode console depending on which platform you're testing.
>
> **[1:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=102)** This is a great pattern to use anytime you want shared code to talk to the host, and it keeps things clean and testable.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=111)** Nice job getting through this one.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1), let (1)
> **Code Identifiers:** jvmmain (1), androidmain (1), iosmain (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 5. Shared Network Layer

#### Ktor client setup
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=0)** - [Instructor] In this module, we're going to set up the shared HTTP client that both Android and iOS will use to talk to the Ktor server.
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=9)** This will live entirely in our shared code module and use Ktor client to handle network calls in a multi-platform friendly way.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=19)** This is where we configure our client.
>
> **[0:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=23)** We're using Ktor's multi-platform HTTP client, which works across Android, iOS, and JVM out of the box.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=32)** Inside the create client function, we install several useful plugins.
>
> **[0:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=37)** First is content negotiation.
>
> **[0:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=41)** This handles automatic JSON serialization and deserialization using Kotlinx serialization.
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=48)** That means we can send and receive typed Kotlin data models without writing any manual parsing code.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=56)** Next is the logging plugin.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=58)** This logs HTTP traffic, great for debugging requests and responses.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=64)** You'll see requests URLs, headers, and responses log to the console depending on the log level.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=72)** You can customize this configuration per environment.
>
> **[1:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=75)** For example, during development, the client can point to local hosts in production, it can target a remote server.
>
> **[1:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=82)** We manage this through dependency injection using a base URL that's injected via coin.
>
> **[1:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=90)** The results is a flexible, shared HTTP client that works seamlessly across both Android and iOS with support for structured logging, timeouts, and automatic JSON handling.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), json (2), jvm (1), url (1)
> **Code Keywords:** module (2), function (1)
> **Code Identifiers:** ios (3)
> **Prerequisites:** set up (1), configure (1), install (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Repository pattern with shared code
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=0)** - [Instructor] Now that we've configured our shared KTor client, let's build on top of it using the repository pattern.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=6)** The goal here is to abstract away the details of the network access behind a clean, testable interface.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=16)** This is our main entry point for fetching data from the server, APOD entries, histories, and so on.
>
> **[0:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=23)** We define a simple interface for the repository, which includes methods like get today's APOD, get a APOD by date, get APOD history.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=33)** Each of these corresponds to a server endpoint, but the details of how the request is made are hidden inside the implementation.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=43)** The implementation of APOD repository uses the KTor client we set up in the last module.
>
> **[0:50](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=50)** We pass it via Constructor Injection using Koin, which keeps things clean and decoupled.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=56)** Each method sends a GET request using client dot get and maps the results directly into a shared Kotlin data class, like APOD response or paginated response.
>
> **[1:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=70)** Because we're using Kotlin X serialization, we don't need to write any parsing logic.
>
> **[1:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=76)** One nice touch is inside the repository, if a request fails, we catch the exception, and throw a structured error like network exception or a not found exception.
>
> **[1:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=91)** That keeps the error logic out of the UI, and makes unit testing much easier.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=97)** Another benefit of the repository pattern is testability.
>
> **[1:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=101)** In our tests, we can inject a fake or mock implementation of APOD repository and simulate success or failure without making a real network call.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=111)** The UI doesn't need to know how the data is fetched.
>
> **[1:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=115)** It just asks for the repository for today's APOD or a list of entries and gets back a clean Kotlin object.
>
> **[2:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=124)** This separation makes the code base easier to reason about and maintain across platforms.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=131)** In short, the repository acts as a glue between the shared HTTP clients and the rest of the app.
>
> **[2:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=139)** It's the layer that turns raw HTTP responses into real data our features can use.

> [!info]- Semantic Content
>
> **Env Vars:** apod (8), http (2)
> **Code Keywords:** interface (2), let (1), abstract (1), module (1), pass (1)
> **API Endpoints:** get  (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Shared business logic
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=0)** - [Instructor] Now that we've built a clean repository interface over our network layer, let's talk about shared business logic.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=8)** Where decisions get made, caching strategies are applied and platform agnostic rules are enforced.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=15)** Most of this logic lives in APOD service.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=18)** You've already seen this class on the server, but in the shared client code, we're using the same name for consistency.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=26)** This is the class that coordinates request between the repository and the rest of the app.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=33)** Let's walk through what it does.
>
> **[0:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=35)** When you call today APOD, the service checks if the results is already cashed if not, it fetches the repository and stores the result locally.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=47)** The same thing happens for historical data.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=51)** This pattern lets us reuse results, reduce network calls, and improve offline support, all in shared code.
>
> **[0:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=59)** We also implement fallback behavior here.
>
> **[1:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=63)** For example, if the request for today's image fails, we can fall back to yesterday's result.
>
> **[1:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=70)** Assuming we have a cache, that's a great way to make the app feel more reliable without extra effort from the UI.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=77)** We also use this layer to centralize validation.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=81)** For instance, when we fetch by date, the service checks that the date is valid in the past and after the APOD program started.
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=92)** That's not UI logic. It's not networking logic.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=95)** It belongs right here in the business layer.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=98)** By isolating these decisions in the shared module, we avoid duplicating them on each platform.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=105)** Android and iOS both benefit from the same logic and future platforms will too.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=111)** And of course, this layer is fully testable.
>
> **[1:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=114)** You can pass a fake repository and test how the service reacts to different conditions, empty results, failed requests, invalid inputs, all without hitting a network or UI.
>
> **[2:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=127)** Think of this service as the smart middle layer.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=131)** It doesn't talk directly to the network.
>
> **[2:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=134)** It doesn't care about the UI.
>
> **[2:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=136)** It just makes decisions, when to fetch how to cash and what to return.
>
> **[2:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=142)** Keeping that logic and shared code means we're not just sharing code, we're sharing behavior, and that's what makes Kotlin multi-platform so powerful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), module (1), pass (1), return. (1)
> **Env Vars:** apod (3)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Repository error handling
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=5)** - [Instructor] Right now, our app is a little too quiet when things go wrong.
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=9)** A drop network connection, a crash server, the app just fails silently, no error, no retry, no explanation.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=18)** Our users deserve better than that confusing, empty screen.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=22)** So right now, everything works. We can click on this.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=26)** We go to the details, come back.
>
> **[0:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=29)** Now, let's stop the app.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=33)** Let us go to server config.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=36)** We are going to intentionally break the network connection.
>
> **[0:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=41)** So now, server mode is equal to broken.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=44)** It just needs to be something that isn't working.
>
> **[0:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=46)** You can also just change that string itself.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=49)** And now, we're going to restart everything.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=60)** All right, so here on the APOD gallery, if I click it, nothing happens.
>
> **[1:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=65)** The screen is completely empty.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=67)** Now, just in case you think there's a bug someplace else, if we go to the today screen, we notice that we get a fail to load today's picture, no internet connection.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=77)** And we have a try again button, which will go out and eventually time out 'cause there is no internet.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=84)** In this challenge, you will implement comprehensive error handling to surface network errors in the UI so users see helpful feedback when something breaks.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=95)** The underlying error detection is already there.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=98)** In the repository layer, you just need to connect it to the user interface.
>
> **[1:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=103)** Your task is to add user-friendly error handling to the home screen that today's screen is working correctly and serves as your guide.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=111)** Study how it handles errors and apply the same pattern to the home screen that is missing this functionality.
>
> **[1:59](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=119)** To test your implementation, open server config and change server mode from working to broken.
>
> **[2:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=125)** This will simulate network failures.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=128)** Navigate to the home screen, click the refresh and see the silent failure, empty screen. No feedback.
>
> **[2:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=136)** Then implement error handling, following the today's screen pattern and confirm that helpful error messages with retry buttons appear instead.
>
> **[2:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=146)** Once you verified your error handling works across all screens, restore this server to working and ensure normal operation continues seamlessly.
>
> **[2:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=156)** Apps shouldn't fail silently.
>
> **[2:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=158)** Let's make sure yours doesn't. Have fun with this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), else, (1), interface (1)
> **UI Navigation:** go to (3), click on (1), navigate to (1)
> **CLI Commands:** make (1)
> **Env Vars:** apod (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Repository error handling
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=5)** - [Instructor] How did you approach implementing error handling for your APOD app?
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=10)** The key to solving this challenge was using the today screen as your guide.
>
> **[0:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=14)** The today screen already demonstrates the complete error handling pattern with its error field in today UI state.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=22)** The on failure block in load today APOD,
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=32)** and the error display UI that shows helpful messages with retry buttons on the today screen.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=43)** To fix the home screen, you needed to add an error field to home UI state, then include an on failure block in load APOD history.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=57)** The final step was adding the error display UI that checks for empty lists and error states, showing the user a clear message and retry button instead of leaving them with an empty screen.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=72)** This approach transforms the silent failures into clear communication with users.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=77)** Instead of having mysterious empty screens, the user now sees exactly what went wrong and have a clear path to retry their actions.
>
> **[1:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=87)** So if we go ahead, and first off, let me make sure you see that we are in broken mode right now.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=93)** We are on APOD gallery.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=95)** So here is the home screen and we have an error loading data.
>
> **[1:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=100)** Likewise, if we go to the today page, which was working before, we see that there's an error message here as well.
>
> **[1:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=107)** Now, if I go ahead and fix this, well, first let me stop the app, and let's go ahead and fix it by committing in and committing out.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=128)** And if we do a retry, bam, now we see it.
>
> **[2:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=133)** Remember to restore your server mode back to working in the server config so that your app functions normally again.
>
> **[2:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=141)** And we can also just cruise around and see some cool pics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Env Vars:** apod (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. Compose Multiplatform UI

#### Compose UI architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=0)** - [Instructor] Now that we have built a shared network and business layer, it's time to put it to work in the UI.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=6)** In this chapter, we're focusing in on composed UI side of things, starting with architecture.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=12)** Open up the compose app module.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=15)** This is where our composed multi-platform UI code lives.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=19)** The architecture here follows the MVVM pattern.
>
> **[0:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=23)** With unit directional data flow, state flows down from the view models, events bubble up from the UI.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=30)** Take a look at APOD view model to see how the view model talks to the repository and emits state through state flow.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=39)** Inside the view model, we use Kotlin routines to fetch data and update state.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=44)** When something goes wrong, say a network error.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=47)** We update the state to reflect the error and the UI reacts accordingly.
>
> **[0:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=53)** This keeps the business logic out of the composable.
>
> **[0:57](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=57)** Take a look at the today screen, to see how UI renders whatever state it receives and sends users events back to the view model.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=67)** This pattern helps us stay organized as apps grow, you can swap out the repository, mock the data and previews, or handle UI events consistently.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=78)** And because all of this is built with composed multi-platform, it works the same whether you're tapping on an Android phone or running an iOS simulator.
>
> **[1:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=89)** As you move into more advanced modules, this architecture will help keep the UI predictable, testable, and maintainable.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=98)** It's all Kotlin all the way down.

> [!info]- Semantic Content
>
> **Env Vars:** mvvm (1), apod (1)
> **Code Keywords:** module (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### APOD display screens
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=0)** - [Instructor] In this module, we're building the screens that display astronomy picture of the day entries using Jetpack composed multi-platform.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=8)** Start with today's screen.
>
> **[0:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=11)** This screen uses APOD view model that loads today's APOD via the shared repository and exposes the state as state flow.
>
> **[0:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=19)** We collect this state in composable using collect as state.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=25)** The UI shows a title, the image, and an explanation.
>
> **[0:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=31)** Images are loaded using async image, which supports multi-platform image loading and caching across Android and iOS.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=40)** When there is an error or the user is offline, we display helpful messages with retry buttons instead of crashing.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=51)** The state model drives this with flags like is loading, error and APOD data to control what the UI shows.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=60)** Next look at home screen.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=64)** For the APOD history list, it displays a scrollable list of cards each showing a title, thumbnail, and date.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=72)** This screen supports pagination using lazy loading with a load more trigger.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=78)** When the user scrolls near the end, we call view model to fetch the next page.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=84)** Both screens are powered by the same shared business logic, so they behave identically regardless of platform.
>
> **[1:31](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=91)** These screens give us clean, responsive building blocks for displaying APOD content across all platforms.

> [!info]- Semantic Content
>
> **Env Vars:** apod (5)
> **Code Keywords:** module (1), async (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Client integration
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=0)** - [Instructor] Now, let's connect the shared client with our composed UI, so everything flows smoothly.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=6)** User tabs, API calls, local caching, and UI state updates.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=12)** Look at Apod View Model to see how it acts as the bridge between the composed UI and the shared repository.
>
> **[0:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=20)** When initialized, it calls repository methods and emits state via state flow.
>
> **[0:27](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=27)** The composable collects this state using collect as state and renders whatever it receives, loading spinners, errors or data.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=36)** The view model also handles user events.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=39)** When the user pulls to the refresh, we call methods like refresh, which reruns the network calls and updates the state.
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=48)** No need to touch the UI code, just update the flow.
>
> **[0:53](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=53)** Check out home screen to see this pattern in action.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=56)** The view model loads paginated data and exposes a list of entries with flags like, is loading and has more data.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=64)** When the composable detects scrolling to the end, it calls, load more items and the view model updates the state.
>
> **[1:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=73)** The separation keeps things testable and consistent.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=77)** The view model doesn't know about compose and the UI doesn't know about HTTP calls or caching.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=84)** We use App Module with Coin to inject the repository, making it easy to mock and test.
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=92)** By connecting the shared client through lightweight view models, we've created a robust, platform-independent app flow that's portable, testable, and easy to extend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), module (1)
> **Env Vars:** api (1), http (1)
> **Speakers:** - [instructor] (1)

#### Use cases and clean architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=0)** - [Instructor] In this module, we're structuring shared code around use cases to help scale your app without things getting tangled as it grows.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=8)** Look in the domain use case package for classes like GetApodByDateUseCase.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=15)** Each class defines one job, fetch today's Apod, fetch by date, or fetch paginated history.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=22)** They don't know about compose or view models.
>
> **[0:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=26)** They just expose a function and return a result.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=30)** These use cases take dependencies through constructor parameters, usually a repository, and apply business rules, like validation or filtering.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=40)** We wire them up using Coin and AppModule, making them easy to reuse across different screens.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=47)** Check out how ApodViewModel becomes much thinner.
>
> **[0:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=51)** It calls use cases, collects results, and emits state.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=54)** This keeps presentation logic and business logic separated, which is the foundation of clean architecture.
>
> **[1:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=61)** Another benefit is testability.
>
> **[1:04](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=64)** You can write fast unit tests for each use case in isolation, mocking the repository, and asserting correct behavior.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=72)** And because use cases are pure Kotlin, they live entirely in the shared module.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=78)** So Android and iOS use identical business logic.
>
> **[1:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=82)** This architecture might feel like a lot at first, but it pays off as the app grows.
>
> **[1:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=88)** When you need to add features or fix bugs, you know exactly where the logic lives.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=94)** We've connected everything from the UI to the network with clean separation and clear responsibilities at each step.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), function (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Complete the FindScreen navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=0)** - [Instructor] The find screen can search Apods and show results, but there's one thing missing.
>
> **[0:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=11)** When the user taps view full picture nothing happens yet.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=15)** The button is there but it doesn't lead anywhere.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=18)** You're task is to wire up that detail view.
>
> **[0:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=21)** When tapped, the button should show the full Apod image, title and explanation along with a back button to return to search.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=30)** Try searching a date like 2025-07-16.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=40)** Tap the button.
>
> **[0:43](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=43)** And make sure everything flows smoothly.
>
> **[0:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=45)** Search, view, back, repeat.
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=48)** Look at how today's screen handles detailed navigation and feel free to reuse components.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=56)** A bit of local state is all you need to manage the transition.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=60)** Let's complete the flow and make the experience feel polished.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Complete the FindScreen navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=0)** - [Instructor] How did you tackle this challenge?
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=8)** The solution centers on introducing local navigation state to toggle between search view and detail view within the find screen.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=16)** A simple Boolean state variable controls which UI is displayed: false for search, true for detail view.
>
> **[0:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=23)** Look at find screen to see the conditional that decides which UI to render.
>
> **[0:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=28)** This pattern keeps both views in the same composable, avoiding complex navigation setups.
>
> **[0:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=36)** Now, for us, if we take a look at App.kt, (laughs) that's what I like to call it, you can see here's the find screen, and then here's something called details screen.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=49)** And if we look inside of the find screen, we see that there's an onApodClick, and that if so, it navigates to a route called details.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=58)** Now, the fun thing about this is is that this is the same route that the home screen uses.
>
> **[1:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=65)** So there's a, you click on something, you get a navigation controller, you navigate to the details screen.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=72)** The detail view uses a standard scaffold with top app bar and back button.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=77)** Tapping the back button resets the state to show search.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=81)** Tapping the view full picture sets the state to display detail.
>
> **[1:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=86)** This highlights an important principle in Jetpack Compose.
>
> **[1:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=90)** For simple self-contained flows, local state is often the cleanest solution.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=95)** It keeps transition smooth, code easy to follow, and the design maintainable.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **UI Navigation:** toggle (1), click on (1), navigate to (1)
> **File Paths:** app.kt (1)
> **Code Keywords:** self (1)
> **Code Identifiers:** onapodclick (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. iOS Integration

#### Understanding iOS generation
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=0)** - [Instructor] In this module, we're going to explore how Compose Multiplatform runs natively on iOS.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=6)** You've already seen how shared code works on Android.
>
> **[0:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=10)** On iOS, it's even more seamless.
>
> **[0:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=12)** We're using the exact same Compose UI code.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=15)** We're at the tip of the spear here.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=17)** Unlike traditional Kotlin Multiplatform that generates frameworks for Swift, we're running Compose directly on iOS.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=25)** That means no Swift code, no framework generation, just Kotlin.
>
> **[0:30](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=30)** Pure Kotlin and Compose all the way down.
>
> **[0:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=34)** Look at the iOS app module structure.
>
> **[0:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=37)** So here we are, here's the iOS structure.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=40)** You'll notice it contains only one Swift file.
>
> **[0:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=45)** And quite frankly, this file doesn't do very much.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=49)** The same home screen, today's screen, APOD view model that power your Android app, are running natively on iOS through Compose Multiplatform.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=60)** When you build iOS, Kotlin/Native compiles your Compose code into a native iOS binary.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=67)** The Compose runtime handles all the iOS-specific details, touch events, navigation, memory management, while your business logic and UI stay identical across platforms.
>
> **[1:19](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=79)** This approach eliminates traditional pain points of cross-platform development.
>
> **[1:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=84)** No API translation layers, no platform-specific UI code to maintain, no synchronization issues between iOS and Android implementation.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=94)** The results is true code sharing at every level.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=97)** Your view models, repositories, UI components, and even navigation logic work identically on both platforms.
>
> **[1:46](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=106)** It's all Kotlin, all Compose everywhere.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (10)
> **Code Keywords:** module (2)
> **Env Vars:** apod (1), api (1)
> **Speakers:** - [instructor] (1)

#### Xcode project configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=0)** - [Instructor] In this module, we'll get your composed multi-platform app running on the iOS simulator without ever opening Xcode.
>
> **[0:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=8)** The beauty of composed multi-platform is that you can develop, build, and test your iOS app entirely from Android studio.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=15)** Make no mistake though, you still need Xcode.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=18)** Only, it just runs in the background.
>
> **[0:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=20)** Look at your run configurations.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=22)** You'll see iOS simulator options alongside your Android targets.
>
> **[0:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=28)** So if we do a dropdown here, we can see that there's an iOS app here.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=32)** There's a compose app, which is Android, which even can run tests from here and other things.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=40)** Gradle handles everything, compiling Kotlin native, packaging the app, launching the simulator, and installing your app.
>
> **[0:48](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=48)** The same APOD view model and today's screen that you've been testing on Android will appear on the iOS simulator.
>
> **[0:56](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=56)** The iOS simulator runs your actual composed UI code, tap interaction, scroll, navigate, everything behaves like a native iOS app because it is a native iOS app, just written in Kotlin and composed instead of Swift and Swift UI.
>
> **[1:13](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=73)** If you need to debugs iOS specific behavior, you can use the same debugging tools you use for Android, set break points.
>
> **[1:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=82)** In fact, let's go ahead and click on one of these pictures and you notice there's a break point and we ended up in the picture details page.
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=92)** Okay, so let's go ahead and let that finish running.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=95)** We go back, we go to today.
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=98)** Oh, and look, we've hit our break point again at picture detail screen.
>
> **[1:42](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=102)** So we're doing a lot of code sharing here.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=105)** If we go ahead and let that run one more time, and I think that you've guessed what's going to happen.
>
> **[1:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=115)** So we type in a date, we say find the picture, we say view full picture, and we end up once again at the picture details page.
>
> **[2:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=125)** Set break points in APOD repository or home screen, and they'll work on iOS too.
>
> **[2:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=131)** They share code base means they share debugging experience.
>
> **[2:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=135)** For network testing, remember to update server config to use the correct IP address for the iOS simulator.
>
> **[2:23](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=143)** It can reach your development server just like the Android emulator can.
>
> **[2:28](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=148)** This streamlined workflow means you can iterate quickly across both platforms without context switching between IDEs or learning platform specific tools.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (11)
> **Analogies:** picture (5), just like (1)
> **Code Keywords:** let (4), module (1)
> **UI Navigation:** dropdown (1), click on (1), go to (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** apod (2)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)

#### Running on iOS simulator
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=0)** - [Instructor] While your Compose UI runs identically on both platforms, there are some platform specific behaviors worth understanding.
>
> **[0:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=7)** Look at platform Android and platform iOS.
>
> **[0:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=11)** So, we've got 'em here standing side by side.
>
> **[0:15](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=15)** This is how we handle platform differences.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=17)** The base URL configuration varies between emulator and device, iOS and Android.
>
> **[0:24](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=24)** But the networking logic in APOD repository stays the same.
>
> **[0:29](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=29)** Navigation adjusters differ slightly as well.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=32)** iOS users expect swipe back navigation while Android users expect a back button.
>
> **[0:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=39)** Compose Multi-platform handles these differences automatically, providing the appropriate navigation experience for each platform.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=47)** System integration points like status bars, safe areas, keyboard handling are managed by the Compose Runtime.
>
> **[0:55](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=55)** Your home screen and today's screen automatically adapt to iOS design guidelines without any platform-specific code.
>
> **[1:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=63)** Image loading through AsyncImage works identical on both platforms, but iOS has different caching behaviors and memory management.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=72)** The APOD View model doesn't need to know about these differences.
>
> **[1:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=77)** The underlying implementation handles platform optimization.
>
> **[1:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=81)** Error handling and APOD repository produces the same results on both platforms, but iOS may show slightly different network error messages at the system level.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=93)** Your app's error handling logic remains consistent.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=97)** The key insight is that while platforms have differences, Compose Multi-platform abstracts them away.
>
> **[1:45](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=105)** You write your business logic once in APOD View model and your UI once in today's screen, and both platforms get the optimal experience.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (6)
> **Env Vars:** apod (4), url (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Cross-platform verification
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=0)** - [Instructor] Now that you have composed multi-platform running on both Android and iOS, your challenge is to verify that behavior is truly consistent across platforms.
>
> **[0:17](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=17)** This isn't just about checking whether the app compiles and runs.
>
> **[0:22](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=22)** It's about confirming that your shared logic in Apod view model and Apod repository behaves identically, no matter which platform calls it.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=32)** Start by testing the same user flows on both platforms.
>
> **[0:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=35)** Load today's Apod, browse history, search by date, check that data returned is identical, errors are handled the same way, and caching behavior is consistent.
>
> **[0:49](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=49)** Use server config to simulate network failures on both platforms.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=54)** Set server mode to broken and verify that both Android and iOS show the same error messages and retry behaviors.
>
> **[1:03](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=63)** Your error handling should be identical because it's the same Apod view model code.
>
> **[1:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=69)** Test pagination in the home screen on both platforms.
>
> **[1:12](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=72)** Scroll to the bottom, trigger loads.
>
> **[1:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=74)** Confirm the same number of items load with the same data.
>
> **[1:20](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=80)** The Apod repository pagination logic should work identically.
>
> **[1:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=85)** Try edge cases like invalid dates in the same search screen, network timeouts, and app backgrounding.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=93)** Since you're using the same Kotlin code for everything, the behavior should be consistent.
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=99)** This verification builds confidence that your shared codebase truly delivers on the promise of write once, run everywhere functionality.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Cross-platform verification
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=1)** - [Instructor] How did you verify consistent behavior across platforms?
>
> **[0:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=9)** The key was testing the same flows and confirming identical results from your shared APOD view model, and APOD repository.
>
> **[0:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=18)** In software development, there is still some manual testing.
>
> **[0:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=21)** This testing is for high value user flows that you want to guarantee are not broken, such as someone making a purchase in your store app or someone booking an appointment in your calendar app.
>
> **[0:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=33)** Testing success cases first, both platforms returned identical data when calling the same repository methods.
>
> **[0:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=41)** The APOD repository hits the same endpoints and processes responses identically.
>
> **[0:47](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=47)** So the today screen and the home screen displayed the same content.
>
> **[0:52](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=52)** For error scenarios, using server config to break the network showed that both platforms handled failures identically.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=60)** The same error messages appear, the same retry logic triggers, and the same fallback behavior occurs because it's all shared Kotlin code.
>
> **[1:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=71)** Pagination testing in home screen confirmed that scrolling behavior and data loading work the same way on both platforms.
>
> **[1:18](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=78)** The APOD view model manages state identically and Compose handles UI rendering consistently.
>
> **[1:26](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=86)** Edge case testing revealed that input validation, network timeout, and error recovery are all behaving the same way across platforms.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=97)** This consistency comes from having zero platform-specific business logic.
>
> **[1:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=101)** Everything lives in the shared Kotlin.
>
> **[1:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=104)** The verification confirms that Compose Multiplatform delivers true code sharing.
>
> **[1:51](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=111)** Not just shared models or networking, but shared UI, shared state management, and shared user experience.
>
> **[2:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=120)** Both platforms run the exact same application logic, just compiled for different targets.

> [!info]- Semantic Content
>
> **Env Vars:** apod (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps and course summary
> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=0)** - [Instructor] Congratulations on building a truly multi-platform app with Compose multi-platform.
>
> **[0:06](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=6)** We started with a Ktor server connected to NASA's APOD API, built a shared repository layer and created view models that work across platform.
>
> **[0:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=16)** Then we built Compose UI that runs natively on both Android and iOS.
>
> **[0:21](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=21)** No platform specific UI code required.
>
> **[0:25](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=25)** You've seen how APODViewModel, TodayScreen and HomeScreen work identically on both platforms.
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=32)** The same error handling, the same navigation, the same user experience, all from shared Kotlin and compose code.
>
> **[0:41](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=41)** This represents the future of cross-platform development.
>
> **[0:44](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=44)** Instead of maintaining separate code bases or dealing with bridge layers, you write code once in Kotlin and Compose and deploy it everywhere.
>
> **[0:54](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=54)** What's next, deploy your server.
>
> **[0:58](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=58)** Add features like offline support or user preferences, and consider expanding to desktop or web targets.
>
> **[1:07](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=67)** Compose multi-platform gives you the foundation to reach any platform while maintaining a single cohesive code base.
>
> **[1:14](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=74)** Thanks for learning with me.
>
> **[1:16](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=76)** You've experienced the cutting edge of multi-platform development, true code sharing from business logic all the way up to the UI layer.

> [!info]- Semantic Content
>
> **Env Vars:** nasa (1), apod (1), api (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Kotlin Professional Certificate by JetBrains]]
← [[Kotlin Multiplatform Development]] | **4 of 4**

## Part of

- [[Kotlin Professional Certificate by JetBrains]]

## Appears In

- [[Kotlin Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Kotlin Multiplatform Development]] — Kotlin
- [[Kotlin Essential Training- Object-Oriented and Async Code]] — Kotlin
- [[Kotlin Essential Training Functions Collections And I O]] — Kotlin

---

[↑ Back to top](#)