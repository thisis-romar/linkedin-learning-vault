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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Exploring%20Ktor%20with%20Kotlin%20Multiplatform%20and%20Compose.md)

![Exploring Ktor with Kotlin Multiplatform and Compose](https://media.licdn.com/dms/image/v2/D4E0DAQFfngO00MxqnQ/learning-public-crop_675_1200/B4EZjnfDwkIIAo-/0/1756230335761?e=2147483647&amp;v=beta&amp;t=jUfu6S51589bAn2Lh7Z106veCERpp9-E9PbKmSgGS1I)

# Exploring Ktor with Kotlin Multiplatform and Compose

> In this hands-on course, Troy Miles—an award-winning software engineer, speaker, and author—explores the powerful combination of Ktor and Kotlin Multiplatform to build full-stack applications that share code across platforms. Step through the full process of creating a data-rich server application with Ktor, deploying it to AWS, and building cross-platform mobile clients using Kotlin Multiplatform

> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose) | 1h 29m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Explore Ktor with Kotlin Multiplatform and Compose Multiplatform](#explore-ktor-with-kotlin-multiplatform-and-compose-multiplatform)
- [**1. Getting Started with Ktor Server**](#1-getting-started-with-ktor-server) (6 videos)
  - [Set up Kotlin Multiplatform (KMP) projects with a Ktor server](#set-up-kotlin-multiplatform-kmp-projects-with-a-ktor-server)
  - [Essential Ktor plugins](#essential-ktor-plugins)
  - [NASA Astronomy Picture of the Day (APOD) API integration](#nasa-astronomy-picture-of-the-day-apod-api-integration)
  - [APOD API endpoints with validation](#apod-api-endpoints-with-validation)
  - [Challenge: Enhanced date validation](#challenge-enhanced-date-validation)
  - [Solution: Enhanced date validation](#solution-enhanced-date-validation)
- [**2. Data Storage and Caching**](#2-data-storage-and-caching) (6 videos)
  - [SQLite setup with Exposed object-relational mapping (ORM)](#sqlite-setup-with-exposed-object-relational-mapping-orm)
  - [Data access layer implementation](#data-access-layer-implementation)
  - [Caching layer integration](#caching-layer-integration)
  - [Background jobs and scheduling](#background-jobs-and-scheduling)
  - [Challenge: Log each cached APOD](#challenge-log-each-cached-apod)
  - [Solution: Log each cached APOD](#solution-log-each-cached-apod)
- [**3. Advanced API Features**](#3-advanced-api-features) (6 videos)
  - [Enhanced error handling and status pages](#enhanced-error-handling-and-status-pages)
  - [Advanced routing and request processing](#advanced-routing-and-request-processing)
  - [Performance monitoring and optimization](#performance-monitoring-and-optimization)
  - [API documentation and testing](#api-documentation-and-testing)
  - [Challenge: Date range filtering](#challenge-date-range-filtering)
  - [Solution: Date range filtering](#solution-date-range-filtering)
- [**4. Kotlin Multiplatform Foundations**](#4-kotlin-multiplatform-foundations) (5 videos)
  - [KMP project architecture](#kmp-project-architecture)
  - [Shared data models and constants](#shared-data-models-and-constants)
  - [Dependency injection setup](#dependency-injection-setup)
  - [Challenge: Platform-specific logging](#challenge-platform-specific-logging)
  - [Solution: Platform-specific logging](#solution-platform-specific-logging)
- [**5. Shared Network Layer**](#5-shared-network-layer) (5 videos)
  - [Ktor client setup](#ktor-client-setup)
  - [Repository pattern with shared code](#repository-pattern-with-shared-code)
  - [Shared business logic](#shared-business-logic)
  - [Challenge: Repository error handling](#challenge-repository-error-handling)
  - [Solution: Repository error handling](#solution-repository-error-handling)
- [**6. Compose Multiplatform UI**](#6-compose-multiplatform-ui) (6 videos)
  - [Compose UI architecture](#compose-ui-architecture)
  - [APOD display screens](#apod-display-screens)
  - [Client integration](#client-integration)
  - [Use cases and clean architecture](#use-cases-and-clean-architecture)
  - [Challenge: Complete the FindScreen navigation](#challenge-complete-the-findscreen-navigation)
  - [Solution: Complete the FindScreen navigation](#solution-complete-the-findscreen-navigation)
- [**7. iOS Integration**](#7-ios-integration) (5 videos)
  - [Understanding iOS generation](#understanding-ios-generation)
  - [Xcode project configuration](#xcode-project-configuration)
  - [Running on iOS simulator](#running-on-ios-simulator)
  - [Challenge: Cross-platform verification](#challenge-cross-platform-verification)
  - [Solution: Cross-platform verification](#solution-cross-platform-verification)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and course summary](#next-steps-and-course-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore Ktor with Kotlin Multiplatform and Compose Multiplatform](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/exploring-ktor-with-kotlin-multiplatform-and-compose?u=76281980&t=0)** - Do you ever look at mobile apps and wonder how teams build for both [[Android]] and iOS without writing everything twice, or wish you could create a single backend that serves data to any platform? In this [[LinkedIn]] Learning course, we'll build a complete cross platform app from the ground up using [[Kotlin]]'s type safe, modern approach to multi-platform development. I'm Troy Miles. I'm a software engineer, land surfer, and all around tech nerd. So fire up Android Studio, get ready to explore the Cosmos, and let's build something amazing together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2), [[LinkedIn]] (1), [[Kotlin]] (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - do (1)


### 1. Getting Started with Ktor Server

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up Kotlin Multiplatform (KMP) projects with a Ktor server](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=0)** - [Instructor] Welcome. In this first module, we're setting up the foundation of our [[Kotlin]] multi-platform project, which includes both a mobile frontend and a [[Ktor]]-powered server backend. We'll start by examining the server setup, how we launch it, and how the major pieces come together. Let's begin in Application.kt. This is our entry point for the server. If you've used [[Spring Boot]] or Express before, this is similar to your main function or index.js. In Ktor, we created embedded server, specify the engine, here it's Netty, and provide a port, host, and a reference to the main application module. We're using System.getenv port to allow overriding the port via environment variables, that makes it easier to deploy to different environments later. When the server starts, it calls Application.module. That's where the real setup happens. We configure Koin for [[Dependency Injection]], initialize the database, and install a few plugins. Let's walk through each of those steps. First, Koin. We call Koin and pass in a few modules, appConfigModule, databaseModule, and appModule. These are declared in separate files and lets us cleanly define dependencies like configuration, database access, and services.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=95)** Next is initializeDatabase. This connects us to our SQLite database using Exposed ORM. We are using HikariCP as our connection pool. And this setup ensures our schema is ready before any API calls are handled. Then we configure several Ktor features. These are added using extension functions like configureSerialization, configureRouting. Each one of these lives in a separate file, making the code modular and testable. Notably, we also have configureBackgroundJobs. This function wires up recurring jobs, like fetching the astronomy picture of the day, APOD, and cleaning up expired entries. We'll explore how that works in a later module. Once all that is initialized, the server logs its startup. And we're ready to accept HTTP request. In the logs, you'll see lines like responding at [http://0.0.0.0:8080](http://0.0.0.0:8080), indicating that everything is up and running. So to recap, our server entry point is main, which creates an embedded Netty server and invokes the Application.module method. Inside that module, we install dependency injection, set up our [[Databases]], and register plugins that handle serialization, error handling,
>
> **[3:10](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-setup-with-ktor-server?u=76281980&t=190)** [[Routing]], monitoring, and background jobs. This modular structure keeps our code clean, organized, and ready for scaling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (3), [[Dependency Injection]] (2), [[Kotlin]] (1), [[Spring Boot]] (1), [[Databases]] (1)
> **Prerequisites:** setup (3), configure (2), install (2), set up (1)
> **Code Identifiers:** appconfigmodule (1), databasemodule (1), appmodule (1), initializedatabase (1), configureserialization (1)
> **Env Vars:** orm (1), api (1), apod (1), http (1)
> **File Paths:** application.kt (1), index.js (1)
> **Analogies:** similar to (1), picture (1)
> **URLs:** [http://0.0.0.0:8080](http://0.0.0.0:8080) (1)
> **Ports:** :8080 (1)

#### [Essential Ktor plugins](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=0)** - [InstruKtor] Now that the [[Ktor]] server is up and running, let's talk about the core plugins that make it actually useful. These plugins are where Ktor gets its flexibility and they're the backbone of any serious Ktor application. Let's start with content negotiation. This plugin allows a server to automatically serialize and deserialize requests and response bodies. We've configured it with Kotlinx serialization, which gives us a fast and type safe way to work with [[JSON]]. With content negotiation in place, we can return [[Kotlin]] objects directly from our route handlers, and Ktor will take care of turning them into proper HTTP responses, same goes for request bodies. Ktor will handle deserialization for us. Next is call logging. This adds structured request logging, which is incredibly helpful for debugging and observability. You'll get logs like get - /API in your console, which is great for tracking how your server is behaving. Let's just take a quick peek at that. Let's go to the terminal and actually do a request. And if we come back here to the debugger, we see that we get the get - /API/APOD/today in our logs.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/essential-ktor-plugins?u=76281980&t=95)** Another critical plugin is status pages. This one intercepts exceptions and translates them into well-formed HTTP responses. Instead of returning a raw stack trace or an internal server error, we can catch specific exceptions like not found exception and respond with a meaningful message and status code. All of these plugins are configured in small focus files. That keeps our code base modular and easy to maintain. Each plugin is installed in the application.module function. To sum it up, Ktor plugins handle a lot of the boring but necessary parts of [[Web Development]], serialization, logging, error handling, compression. We've wired them up in a clean, modular way so our server is easy to extend and debug.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (6), [[JSON]] (1), [[Kotlin]] (1), [[Web Development]] (1)
> **Env Vars:** http (2), api (2), json (1), apod (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instruktor] (1)

#### [NASA Astronomy Picture of the Day (APOD) API integration](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=0)** - [Instructor] Now that our server is set up, and the essential plugins are installed, it's time to connect to the real world, literally. In this module, we'll integrate with NASA's Astronomy Picture of the Day API, also known as APOD. The key logic for this module is in the APOD service and APOD routes files. We'll walk through how this service connects to NASA's API, caches responses locally in SQLite, and exposes a clean, restful interface to our front end. Let's start at the high level. The APOD service is where the business logic lives. Its job is to answer questions like, "What's today's photo? Give me a photo from last Wednesday." It can also return a random APOD or a paginated history. Here's how that works. When a client hits API APOD today, [[Ktor]] routes that request to the service. So we start here at /api/apod/today, and then it calls apodService.getTodayApod, and that brings us here to getTodayApod. Ktor routes that request to the service. The service checks the local SQLite database using apodDao. If the data is already cached, we serve it directly. If not, we make a request to the NASA API and save the response locally before returning it.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=96)** So here we are, we are going to do a check, we're going to get today's value. If it's not, if the cachedApod is not null, we can go ahead and just return it to whoever's calling us. If not, we have to make a request out to NASA. And if we get it, we go ahead and save it first and then return it. Otherwise we get some sort of an error, and here's our error message. Why cache it? Two reasons. First, performance. Reading from our local database is faster than reaching out over the internet. Second, resilience. The NASA API has rate limits, and if we hit them, our service gracefully falls back to cached data. Typically yesterday's photo with a clear message indicating it's a fallback. We use similar flow for other endpoints. For API APOD date, we validate the format, check the cache, and if needed, [[Fetch]] from NASA. We even guard against invalidate like future dates or anything before June 16th, 1995 when the APOD program started. There is also API APOD random, which fetches a random cached picture or goes to NASA if needed. And the APOD history provides paginated results using standard page and page size parameters. But here's where it gets even smarter. If the cache is empty or looks stale, we don't just return a blank result,
>
> **[3:11](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/nasa-apod-api-integration?u=76281980&t=191)** instead we proactively fill it. The service will automatically reach out to NASA and pull in data going back as far as 30 days. It uses a rate limited loop and logs its progress. This gives us a reliable cache of recent history, even if the server restarts or gets deployed to a fresh environment. The APOD API becomes a trusted upstream, and we treat it with care, throttling requests, checking for errors, and backing off when we get rate limited. By the end of this module, you've got a working API that talks to NASA, caches intelligently, and exposes four clean endpoints: today, date, random, and history. And let's go ahead and do a quick test. So this is the random API, we hit it. And the best thing to look at is just like the parts of the title. We see this as Galaxy Wars. Now if we do another request to the same endpoint, this time we get NGC 6946 and NGC 6939. So that's working. And if we take a look in our console, we can see these requests went out. So here's one for random, here's another one for random, and here's another one for random.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (2), [[Fetch]] (1)
> **Env Vars:** apod (11), api (10), nasa (9), ngc (2)
> **Code Identifiers:** gettodayapod (2), apodservice (1), apoddao (1), cachedapod (1)
> **Analogies:** picture (2), just like (1)
> **CLI Commands:** make (2)
> **API Endpoints:** /api/apod/today (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)

#### [APOD API endpoints with validation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=0)** - [Instructor] By now, our APOD API can return today's image, a specific date, a random photo, or a paginated history. But just because an API works doesn't mean it's reliable. In this module, we're going to tighten things up with validation and error handling. The goal here is to make the API safer for consumers, easier to debug, and more robust under edge cases. You'll notice most of this logic lives in the APOD service with a few helpers in the route definitions. If we take a closer look at the APOD date endpoint, users provide a date and a URL and we try to return a corresponding APOD. But what happens if the date is malformed? Or it's in the future? Or it's before June 16th, 1995, the start of the APOD archive? That's where our validateDate function comes in. It lives inside of ApodService and it needs to enforce three rules. First, the date must be a valid ISO date. Second, it can't be in the future. And third, it has to be on or after June 16th, 1995. Let's handle the first of those rules, but don't worry, we'll come back for the other two. If any condition fails, we throw an illegal argument exception. That exception bubbles up into our route handler, which catches it and responds with a 400 bad request
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=94)** along with a helpful error message. In fact, each route is wrapped in its own try-catch block. So here's the one for today. We can see that there is a try-catch block, and here's the corresponding error, and it will tell us what the error for that was. This allows us to catch specific errors, like validation issues, as well as more general ones like network failures or database problems. When something goes wrong, the API responds with a clear HTTP status code and an error response object. For example, if a user requests API APOD date Foobar, we respond with a 400 and the message invalid date format. So let's take a look at that. There's our Foobar. Oh wait, sorry, I didn't do what I said I was going to do. So here's the date one. And then we get the invalid date format. Use the YYYY-MM-DD format. We apply similar logic to the history route. It accepts a page and a size. Let's go to history. It accepts a page and a page size, and we enforce bounds on both. Page must be greater than zero,
>
> **[3:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-api-endpoints-with-validation?u=76281980&t=188)** and page size must be between one and 100, and we can see that right there. Any violation gets a 400 response, again with detailed message. This approach follows a consistent pattern, validate input early, log clearly, and fail gracefully. That way our API doesn't just work, it behaves predictably, and users always get feedback that they can act on. We don't just rely on runtime checks. These validations are small, testable pieces of code. You can cover them with unit tests or property-based testing, and be confident they'll continue to behave correctly as the app grows. To sum up, validation isn't just about catching bugs, it's about shaping the developer experience for whoever consumes our API.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), apod (6), url (1), iso (1), http (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** validatedate (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Enhanced date validation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-enhanced-date-validation?u=76281980&t=0)** - [Instructor] Let's add some business rules to our date validator. Right now, we are only checking that the input is a valid date format. In this challenge, you'll add two additional checks. The date should not be in the future, and it should not be before June 16th, 1995. If either of these rules fails, throw an error with a helpful message. For example, date cannot be in the future or no apod available before 1995/06/16. You can test your solution by requesting a valid date, like 2022/12/25 should succeed. A future date should fail. An early date like 1994/01/01 should also fail.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Enhanced date validation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=0)** - [Instructor] Hope you enjoyed this challenge. Here's how I solved it. The existing validator already parses the date string. I added two additional checks right after the parse step. One checks that the date is not after today. So we use local date now to get today's date. We check to see if the date that we are working with is after using the is after, and then throw a date cannot be in the future message. And then the other one, we check to see if the date is before 1995, 06, 16. And if not, we say no APOD available before this APOD date. So let's go to the terminal. Let's do one that should pass so we get a response back. Let's go to the future instead of 2022, we'll go to 2032 and run. And we get a date cannot be in the future. All right, well let's see if our time machine can take us to the past. Let's go back to 1990 and we get a no APOD available before 1995, 06, 16. And that's how I solved this challenge. And remember, as always, there's a million ways to write a program. So, so long as yours passes a validation,
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-enhanced-date-validation?u=76281980&t=92)** I'm sure you're probably fine.

> [!info]- Semantic Content
>
> **Env Vars:** apod (3)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Storage and Caching

[↑ Back to Table of Contents](#table-of-contents)

#### [SQLite setup with Exposed object-relational mapping (ORM)](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=0)** - [Instructor] Now that we have a working [[Ktor]] server, pulling data from NASA's APOD API, it's time to start storing that data locally. In this module, we'll hook up SQLite using JetBrains as Exposed ORM. You might have noticed there's no DB in the project, and that's on purpose. We don't check the database into [[Version Control]]. It gets created automatically at runtime and lives in a folder called data. The file's casually named randomspace.db, and you can ignore it most of the time. Just know the app creates and manages it for you. Also worth calling out, we're not storing any images. The database holds [[Metadata]] about each photo, things like title, date, explanation, and the URL where the picture is hosted on NASA servers. We establish a connection to SQLite in the initializeDatabase function. It uses HikariCP, and this is going to be at the top, to manage performance and concurrency, and connects with the connection string that's passed to JetBrains Exposed, which handles everything from there. Exposed is [[Kotlin]]'s type-safe [[SQL]] framework. It gives us a clean DSL, a domain-specific language for defining tables, columns, and queries. If we take a look at ApodDao, we can actually see this domain-specific language.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/sqlite-setup-with-exposed-orm?u=76281980&t=97)** So this is actually the Kotlin domain-specific language, Exposed. No annotations, no fragile query strings, just compile check structure. Our schema lives in the data access object layer. For example, ApodDao defines columns like title, date, mediaType, mapping them to SQLite types like VARCHAR and TEXT. Each of these maps directly to a property on the apod metadata object. On startup, we use schema create to ensure that tables exist. If the database file is missing, it's created automatically. If the schema is missing, it's initialized. It's one less thing to worry about when developing locally. And since we're using SQLite, we don't need to spin up Postgre or [[MySQL]] just to test our server. This makes development lightweight and portable. Later, if we want to move to a more scalable database, we can. Just update to [[Java Database Connectivity (JDBC)|JDBC]] driver and change the connectivity string. The best part, everything is pure Kotlin, so we get full support from the IDE plus compiler checks. It's safe, readable, and refactor-friendly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (3), [[Metadata]] (2), [[Ktor]] (1), [[Version Control]] (1), [[SQL]] (1)
> **Env Vars:** nasa (2), apod (1), api (1), orm (1), url (1)
> **Code Identifiers:** initializedatabase (1), mediatype (1)
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** mysql (1)
> **SQL:** varchar (1)
> **Speakers:** - [instructor] (1)

#### [Data access layer implementation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=0)** - [Instructor] Now that we've got SQLite wired up and the schema initialization in place, it's time to implement the data access layer. This is where we interact directly with the database. In this module, we'll define our DAO, data access object classes using JetBrains expose. Classes like apod DAO and Cache [[Metadata]] DAO, these classes are responsible for querying and updating tables in the database. Each one encapsulates logic for a specific table and all interactions happen through them. Let's take a look at apod DAO. This class handles the apod metadata. First, we define the table by subclass and table. Each column is declared using exposes DSL, domain specific language. We use VARCHAR for strings, text for long form content, and long for things like timestamps. Each column gets a type and a constraint. For example, the date column is a VARCHAR 10, and also the primary key. That ensures each apod entry is unique by date, which is how the real NASA archive works. After the table is defined, we implement a set of query functions. These are methods the service layer calls when it wants to read or write data. For example, get by date, get random,
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=96)** and get paginated, and finally, save. Each of these runs inside an exposed transaction block. That's important. Expose requires transactions to safely interact with the database. You can think of this as a cotton friendly wrapper around the [[Java Database Connectivity (JDBC)|JDBC]] transaction management. Let's take get by date as an example. Inside the transaction block, we query apod table using select. If a row is found, we map it to an apod response object using a custom to apod extension function. Similarly, the save function either inserts or replaces an existing row. We use insert or replace to make sure we are not duplicating entries, and we store the current timestamp in the [[Fetch]] at column. By isolating all this logic in the DAO, we can keep the code base clean. The service layer doesn't care how we talk to the database. It just says, Hey, give me the apod for July 15th, or save this new one. And the DAO takes care of the details. The same pattern applies to cache metadata DAO, which handles simple key value pairs in a separate table. This is great for tracking things like when the last cache maintenance job ran. To wrap up,
>
> **[3:09](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/data-access-layer-implementation?u=76281980&t=189)** the data access layer is where we do the actual querying. It is built entirely in [[Kotlin]], Expose and safe transaction handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[Java Database Connectivity (JDBC)|Jdbc]] (1), [[Fetch]] (1), [[Kotlin]] (1)
> **Env Vars:** dao (7), varchar (2), dsl (1), nasa (1), jdbc (1)
> **SQL:** varchar (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Caching layer integration](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=0)** - [Instructor] With the data layer in place, we now have all the tools we need to start caching APOD [[Metadata]] locally. In this module, we're going to connect everything together by adding a caching layer between the NASA API and the database. Most of the logic lives inside of the APOD service class. This service acts as the middleman and it decides whether to [[Fetch]] from the local database or call out to NASA. Let's start with a get today APOD method. This method first checks the local cache by calling APODDao get by date. If that returns a result, we use it. Otherwise, we fetch the APOD from NASA using the NASA API client. So right here we go and we get the date. If it's not null, we go ahead and return this APOD that's been cashed. Otherwise, we go ahead and fetch from the NASA API client. And once we get something, we go ahead and save it and return it. And just in case any sort of error or exception happens, this whole thing is wrapped in a try-catch block. What's nice about this design is that the API handler doesn't care where the data came from. The service extracts all of that, which makes testing and maintenance much easier. But we've also added [[Resiliency]]. Suppose NASA's API is rate limited or temporarily unavailable,
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/caching-layer-integration?u=76281980&t=93)** and that case we fall back to yesterday's cash photo if it exists. And we clearly label the response as a fallback. For historical browsing the getAPOD history method supports pagination and returns a paginated response. If the database is empty, it triggers a background cash fill from the last 30 days. That ensures we always have a minimum amount of content available without overwhelming the API. The same pattern is used in get APOD by date and get random APOD. In both cases, we check the cash limit first and only hit the network if necessary. This reduces latency, respects NASA's rate limits, and keeps the app responsive even when offline. And of course, every successful fetch gets saved with a fetched at time stamp. This is handy for later cleanup or freshness checks. The caching layer is really the brain of the system. It optimizes API calls, handles fallback behavior, and keeps our database synced with the external data source. Without it, the app would be slower, more fragile, and less user friendly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[Metadata]] (1), [[Resiliency]] (1)
> **Env Vars:** apod (7), nasa (7), api (7)
> **Code Identifiers:** getapod (1)
> **Speakers:** - [instructor] (1)

#### [Background jobs and scheduling](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=0)** - [Instructor] In this module, we're going to set up automated background jobs that help keep the cache up to date. These jobs run on a schedule and take care of fetching new data and cleaning out old records so you don't have to do it manually. You'll find this logic in the run daily cache maintenance jobs method inside of Apod Service. This method runs as part of a background job configured when the server starts up. The first thing the job does is try to [[Fetch]] and cache today's Apod. This ensures that if the app missed it earlier, for example, due to downtime, it gets another chance. Then it deletes old records from the database. We define a retention window using cached days property, typically 90 days. Anything older than that gets removed to keep the database lightweight. After cleanup, the job checks whether any recent dates are missing. For example, maybe the Apod from July 4th failed due to a network hiccup. The job looks for gaps and backfills those days using the same caching logic we wrote earlier. To keep track of when the job last ran, we use the cacheMetadataDao. It stores simple key value pairs like daily maintenance, last run, so we can check this info later if needed. All of this runs asynchronously using [[Kotlin]] co-routines, which means it won't block the main thread
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/background-jobs-and-scheduling?u=76281980&t=94)** or slow down incoming API requests. We also log every step, both successes and failures, so we can monitor job health in production. This isn't a full-blown task scheduler. We're just using simple Kotlin code and the server's built-in lifecycle hooks to run the job once per day. If you need more advanced behavior like Kron expressions, retries, or distributed execution, you could swap this out for something like Quartz or push it to a cloud task runner. But for small to medium maps, this approach works great. It's fast, reliable, and simple to maintain. All of your core data stays fresh without needing manual intervention or complex infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (2), [[Fetch]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** cachemetadatadao (1)
> **Env Vars:** api (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Log each cached APOD](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-log-each-catched-apod?u=76281980&t=0)** - [Instructor] Let's wrap up this chapter with something small but useful, visibility. Your task is to log each time an apod is saved to the database. Inside the save method, add a log line that includes the date, so we can track what's being cached and when. This helps during development and also gives us a trail for debugging if we ever need to investigate why a certain entry is missing or stale. You can test it by requesting any apod data and watching for the log output.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Log each cached APOD](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-log-each-catched-apod?u=76281980&t=5)** - [Instructor] Here's how I approach this one. We already have a working save method that writes APOD entries to the database. To make caching behavior more visible, I added a log message after each save. This message includes the date of the APOD, so we can track exactly what's being cached and when. This kind of logging information is useful, both during development and production diagnostic. You can request a few APODs from the API and as long as the server is writing to the log, you'll see confirmation that the cache is happening as expected. Let's take a little peek at this, go to the terminal. We get one APOD back. Go to the debugging page and we can see right here where it's returning APOD for 2022-12-15 from cache from the APOD service. And that's all for this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** apod (5), api (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced API Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Enhanced error handling and status pages](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=0)** - [Instructor] In this module, we are going to improve how our servers handles errors. Right now, if something goes wrong in a route or service, the error might bubble up and trigger a generic response or worse, no response at all. Let's make that better by setting up structured error handling using [[Ktor]]'s status pages plugin. This gives us full control over how the server responds to exceptions, both expected and unexpected. You'll see configuration in the configure status pages function. This is called from the application.module, When the Server Starts Up. Inside status pages, we use exception handlers to catch specific exception types and respond with appropriate HTTP status codes and messages. For example, when we throw an illegal argument exception, the server responds with a 400 bad request and a [[JSON]] body that includes a helpful message. We also have a catchall handler for generic durable errors. This ensures that if something unexpected happens like a null pointer or misconfigured DAO, the server won't crash. Instead, it logs the error and returns a 500 internal server error with a generic fallback message. Each response is wrapped in a consistent format using the error response class.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/enhanced-error-handling-and-status-pages?u=76281980&t=96)** This class contains a message field and optionally a stack trace in development mode. That helps front end developers debug without leaking sensitive details in production. We also added the HTTP status code extension KT file to centralize status codes and messages. That keeps things consistent and reduces duplication. If we want to return the same 404 format for multiple routes, we can use a helper like not found instead of repeating code. A small but powerful touch is logging every handled error. That way, we have visibility into the kinds of failures users are experiencing, and we can prioritize which ones to fix or improve. With this in place, users always get a meaningful response. Developers get better logs, and the app behaves more predictably under failure conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (1), [[JSON]] (1)
> **Env Vars:** http (2), json (1), dao (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Advanced routing and request processing](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=0)** - [Instructor] [[Routing]] is the heart of any web server. It defines how requests get handled and which logic responds to which path. In this module, we are going to refine our API routing and explore techniques for writing clean, scalable route handlers. You've already seen the basics in the APOD routes function Paths like today, date, date, random history are all registered in the API APOD. But there's more going on here than just wiring up paths. First, notice that each route handles its own validation and exception handling. That's intentional. We want every endpoint to be resilient and self-contained. For example, slash date slash date checks whether the date parameter is present and valid before calling into this service. Second, we use early returns to avoid deep nesting. If the date is missing or invalid, we return a 400 bad request immediately. That keeps the code flatten and easier to read. Third, we added an extension function called respond error. This wraps up error responses in a consistent [[JSON]] format and ensures we don't duplicate response logic throughout the file. Every error response includes the HTTP status code and message. Let's talk a little bit about [[Dependency Injection]].
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/advanced-routing-and-request-processing?u=76281980&t=95)** The APOD service instance is resolved using coin inject function. That lets us keep our route logic clean and testable. We're not manually wiring anything. We just declare what we need and let coin provide it. We also added an admin route /api/admin/db-status. This lets us inspect the database directly. It returns a JSON object with the list of tables, a success message, and some internal connection info. It's a handy tool for checking if the app is properly initialized, especially in staging or test environments under the hood. It uses a raw [[SQL]] query via exposed to list the table names. Even though most of our app uses Safe [[Kotlin]] DSL, there are times when going straight to the SQL makes sense and this is one of them. With these patterns in place, clean structure, early validation, inject services, and utility helpers, you've got a routing set up that's easy to expand, test and maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[JSON]] (2), [[SQL]] (2), [[Dependency Injection]] (1), [[Kotlin]] (1)
> **Env Vars:** apod (3), api (2), json (2), sql (2), http (1)
> **API Endpoints:** /api/admin/db-status (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Performance monitoring and optimization](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=0)** - [Instructor] Performance problems can sneak up on you, especially in a server that looks like it's working fine. In this module, we'll wire in basic monitoring and logging so we can detect bottlenecks and understand how the app behaves under load. First up is request logging. If you've checked out the configureMonitoring function, you'll see that we've installed [[Ktor]]'s CallLogging plugin. This logs in incoming requests, including method, path, and response time. You'll see lines like 200 OK: GET - /api/apod/random in 7ms printed in the console. These logs are incredibly useful during development, but they also help in production. If users report slow responses or random timeouts, request logs can tell you exactly where the delays are happening. We've configured our Logger using slf4j, which works nicely with Ktor and JetBrains Exposed. That means database operations and background jobs can log to the same system with consistent formatting. If you want to go deeper, consider adding correlation IDs to each request. That allows you to trace a request across services, even down to specific [[Database Queries]]. We haven't added that here, but it's a common next step for larger applications. Another tip is to monitor your cache rate hit.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/performance-monitoring-and-optimization?u=76281980&t=95)** In the APOD service, we log whether an entry was returned from the cache or fetched from the API. That tells us whether our caching strategy is working and how often we're hitting external rate limits. And speaking of caching, our logs now show how many entries were added, skipped, or cleaned during each maintenance job. That gives us visibility into how the system is evolving day by day. You don't need full observability to start optimizing performance. Even simple logging done consistently can help you identify trends, isolate slow routes, and understand the cost of different operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (2), [[Database Queries]] (1)
> **API Endpoints:** get  (1), /api/apod/random (1)
> **Env Vars:** apod (1), api (1)
> **Code Identifiers:** configuremonitoring (1)
> **Speakers:** - [instructor] (1)

#### [API documentation and testing](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=0)** - [Instructor] Even a great API is hard to use if people don't know how to use it. In this module, we'll focus on documenting and testing our API endpoints, so they're easy to understand, easy to explore, and easy to validate. While we haven't included OpenAPI or Swagger in this project yet, it's good practice to keep your endpoints well-structured and self-describing. The API APOD routes use clear paths and HTTP verbs. /today returns today's image, /date date fetches a date, /random gives you a surprise, and /history supports pagination with page and page size. For [[Manual Testing]], we've included an Insomnia workspace under the server/api-test/insomnia. This YAML file defines all the routes and example requests you'll need to explore the API from a [[Representational State Transfer (REST)|REST]] client. Insomnia makes it easy to simulate edge cases like requesting a missing date or hitting the API without pagination parameters. These scenarios help you validate both our happy path and our responses. Each route returns consistent [[JSON]], even when something goes wrong. For example, dates return a 400 with an error response object that includes a status and a message that helps front end developers handle errors
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/api-documentation-and-testing?u=76281980&t=94)** without guessing. If you want to automate, you could write integration tests using [[Ktor]]'s test application engine. That would let you simulate HTTP requests inside a test environment, check the response status, and assert on the body. We haven't done that in this course, but the architecture supports it. The goal here is not to just make the API work, but to make it trustworthy. Clear routes, consistent errors, and easy testing tools all contribute to a better experience for anyone using it, including future you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1), [[Ktor]] (1)
> **Env Vars:** api (6), http (2), apod (1), yaml (1), rest (1)
> **Tools:** insomnia (3)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Date range filtering](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-date-range-filtering?u=76281980&t=0)** - [Narrator] Let's make our API more flexible by adding support for date-based filters. Your task is to enhance the slash history endpoint to accept two optional query parameters, start date and end date. If present, the results should include only entries within that range. You'll need to validate that the start date is not after the end date. If it is, respond with a clear 400 error end message. To verify your changes, try calling slash api slash apod slash history. Question mark start date equals a date and end date equals another date. You should see only entries between those two dates.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Date range filtering](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=0)** (bright rhythmic music) (bright rhythmic music fading)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=5)** - [Instructor] How did you do? Hopefully, it went well for you, and here's how I solved the challenge. We made a few changes to support date range filtering, one in the route, one in the service, and one in the DAU. In the route, we check for both startDate and endDate. If they're both present, we pass them to the service. If only one is provided, we return a 400 to keep the behavior clear. The service method now also accepts optional start and endDates. If they're valid, we forward them to the DAO for filtering. If not, we throw an error that gets handled by the route layer. We gave our getPaginated method a suite upgrade to handle date range filtering. Think of it as teaching an old dog some new tricks, while keeping all of its original charm. Our method learned to accept startDate and endDate parameters, like giving it a calendar and saying, "Hey, only show me the cool space stuff from this time period." Now our method is like a helpful librarian who asks, "Do you want specific dates, or just everything?" When you ask for specific dates, it carefully converts your date strings into proper localDate objects, runs a targeted count query, how many pictures do we have between these dates, fetches the actual data with the same date filter, still keeping things sorted and properly paginated. When you want everything, the original behavior, it happily grabs all the records like it always did.
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-date-range-filtering?u=76281980&t=99)** There's no change here. The same trustee select-all approach that's been working great. Both paths still use the same reliable offset math, page-1 x pageSize, and limit offset combo. So your pagination stays buttery smooth, whether you're filtering by dates or not. The result your /history endpoint can now handle fancy date filtered requests, like passing its start and endDate, while still being totally cool with regular old pagination. Win-win. And so let's take a little look at this. We've got the server running in the back. Here, we have a history with a startDate of 2025-07-01, 1st of July, and endDate of 2025-07-10, so we should get back 10 objects. And if we scroll all the way to the bottom, we can see that the pageSize is 10, the totalItems is 10, and we got one page. And we can see, here are some of these 10 objects that we return. So I hope again that it went well for you, and if not, just take some time and study this code.

> [!info]- Semantic Content
>
> **Code Identifiers:** enddate (4), startdate (3), pagesize (2), enddates (1), getpaginated (1)
> **Env Vars:** dau (1), dao (1)
> **Non-Speech:** (bright rhythmic music) (1), (bright rhythmic music fading) (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)


### 4. Kotlin Multiplatform Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [KMP project architecture](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=0)** - [Instructor] [[Kotlin]] multi-platform lets us share logic across [[Android]], iOS, and even the backend. In this module, we're going to break down the structure of our [[Kotlin Multiplatform|KMP]] project and walk through how it all fits together. There are three key modules, shared, composeApp, and iosApp. Each of these plays a specific role. Let's start with shared. This is where most of our code lives, the business logic, networking layer, caching, and data models. It's organized using src sets, like commonMain, androidMain, and iosMain. Code in commonMain is shared by all platforms. The platform-specific folders let us add behavior that's unique to Android or iOS when needed. The shared module is compiled into an Android library for the Android app and into a Kotlin-native framework for iOS. That means, we only write our logic once. Both platforms can use it natively. Then we have composeApp. This is the Android UI layer. It depends on shared and builds a [[Jetpack Compose]] interface for the user to browse APOD [[Metadata]]. Because [[Jetpack Compose|Compose]] is still only Android only, this module stays platform specific, but everything it depends on, like repository models comes from shared.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/kmp-project-architecture?u=76281980&t=94)** By the way, newsflash, iOS is now able to use Compose. It's still in an experimental stage, but hopefully by the time this course comes out, it will be fully 1.0. We are using it. And finally, there's iosApp. This is the [[Xcode]] project and [[Swift (Programming Language)|Swift]] UI interface for iOS. It includes the generated Kotlin framework from the shared module, which means we can call shared Kotlin code directly from Swift. In this setup, iosCode focuses only on UI and lifecycle. No network or database logic lives here. This structure is designed to maximize code reuse without sacrificing platform-native UX. Backend logic, data models, business rules, and caching live in shared. UI and platform-specific hooks stay in their respective modules. KMP gives us the flexibility to write platform-specific code only when we need to. If a particular feature requires native APIs, like biometric authentication or camera access, we can implement it in androidMain and iosMain, while still keeping the interface shared through expect actual declarations. The big advantage is consistency. Both platforms use the same models, the same repository, and the same logic for things like pagination, validation, and formatting. That means fewer bugs, less duplication, and easier testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (6), [[Kotlin]] (4), [[Kotlin Multiplatform|Kmp]] (2), [[Jetpack Compose|Compose]] (2), [[Swift (Programming Language)|Swift]] (2)
> **Code Identifiers:** ios (5), composeapp (2), iosapp (2), commonmain (2), androidmain (2)
> **Env Vars:** kmp (2), apod (1)
> **Versions:** 1.0 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Shared data models and constants](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=0)** - [Instructor] In this module, we are going to focus on what goes into the shared module, and more specifically, how we define shared models and constants that work across all platforms. Shared models are the foundation of a clean, [[Kotlin]] multi-platform architecture. They let us define data ones and use it everywhere, on iOS, on [[Android]], and even the backend if we want to. You'll find most of these live in shared, source, commonMain, and Kotlin. That's the directory where we define platform-agnostic code. Inside you'll see data classes like ApodResponse, PaginatedResponse, and ErrorResponse. These are used for everything, parsing [[JSON]], communicating between services, and shaping what we send back to the UI. Because they live in commonMain, we can safely serialize and deserialize them on both Android and iOS using the same logic. We're using kotlinx.serialization here, which gives us fast and type-safe way to encode and decode data. Every model is annotated with @Serializable, and we can control things like default values and field names using Kotlin standard syntax. One benefit of sharing these models is consistency. When Android and iOS both rely
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-data-models-and-constants?u=76281980&t=95)** on the same ApodResponse structure, we avoid subtle bugs caused by mismatched field names, null ability issues, and platform-specific assumptions. In addition to models, we can also define constants here, like the default pagination size, allow date formats, API limits, and even human-readable error message that can all live in commonMain. If any constants do need to vary by platform, say, base URL for networking or file path for caching, we can handle that with expect actual mechanism. But most of the time a single shared constant is enough. This separation of data and logic make testing easier too. Because the models live in a pure Kotlin module, we can test them on JVM or in common test code, no emulator, simulator, or device required. Shared data models and constants are where structure starts. They're easy to overlook, but they're what makes true code reuse possible in a [[Kotlin Multiplatform|KMP]] project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), [[Android]] (3), [[JSON]] (1), [[Kotlin Multiplatform|Kmp]] (1)
> **Code Identifiers:** ios (3), commonmain (3)
> **Env Vars:** json (1), api (1), url (1), jvm (1), kmp (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Dependency injection setup](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=0)** - [Instructor] In this module, we are going to set up dependency objection for our shared code. If you're coming from [[Android]] or server-side [[Kotlin]], you might already be familiar with DI frameworks like Dagger, Hilt, or Coin. We're using Coin. The idea behind DI is simple. Instead of creating dependencies manually in each class, we define how to build them in one place called the module. Open shared modules, you'll see a function called shared module. This is where we define all singletons and factories for our shared code base. Let's walk through a few examples. First, we provide our APOD repository as a singleton That means it's created once and reused everywhere. We also define how to create the APOD service and database classes, passing any required parameters into each constructor. We're keeping things clean by splitting modules. Shared services go in one module while platform specific ones like Android's contacts or iOS delegates are defined separately in Android main or iOS main. If we switch to the Android module for a second, you'll find Platform Android KT. This file defines a platform module, which includes any platform specific dependencies. Then in main activity, we initialize Coin.
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/dependency-injection-setup?u=76281980&t=96)** The iOS side works similarly. What's powerful about this setup is that the shared code never needs to know what platform it's running on. It just asks for what it needs, like an APOD repository, and Coin provides the right instance. This decouples creation from usage, makes [[Unit Testing]] simple and sets the stage for replacing implementations if we want to test offline behavior or simulate errors. That's [[Dependency Injection]] in Kotlin multi-platform using Coin. Simple, flexible, and 100% testable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (5), [[Kotlin]] (2), [[Unit Testing]] (1), [[Dependency Injection]] (1)
> **Code Identifiers:** ios (3)
> **Env Vars:** apod (3)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** find (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Platform-specific logging](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-platform-specific-logging?u=76281980&t=5)** - [Instructor] We've been logging events on the server for a while now, but what about shared code? In this challenge, we're going to extend logging support to our shared [[Kotlin]] multi-platform module starting with [[Android]]. The goal is to let common code write log messages without knowing which platform it's running on. You'll start by defining an expect class in commonMain with two functions, one for info level logs, and one for error level logs. Then implement the actual class in androidMain using Android's Log.i and Log.e functions to write to Logcat. Once that's in place, call your logger from a shared class or service to confirm it works. You should see the output in Logcat when you run the app. This is a great way to get familiar with platform-specific declarations in [[Kotlin Multiplatform]]. And once you've got Android version working, it'll be easy to add support for iOS and other platforms later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[Kotlin]] (1), [[Kotlin Multiplatform]] (1)
> **Code Identifiers:** commonmain (1), androidmain (1), ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Platform-specific logging](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=5)** - [Instructor] How'd you do? Were you able to get logging working in shared code? Hopefully, you found an approach that felt clean and makes sense to you. There are different ways you could solve this, but here's how I tackled it. I started by defining an expect class called PlatformLogger in shared code. Notice that it has the expect before it. Then, I created the platform-specific versions in jvmMain. Here, we're using println and System.err.println. Also in androidMain, here we used the Log.i and Log.e. And finally, iosMain, where we use NSLog to print it out. Once that was in place, I called the logger from my shared service code. Now, what I actually do is a little different. I said, let's put this into our actual MainActivity. So here we get a message that says, "Hey, MainActivity launched." Now, the same logging call works no matter what. So if I take a look inside right now, I do have the [[Android]] app running in the background. It's been running for a bit. If I take a look in Logcat and I look for MainActivity launched, we can see it right here. Now, if you run your app now and trigger a few API calls, you should see those log messages show up in Android Logcat or an [[Xcode]] console
>
> **[1:39](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-platform-specific-logging?u=76281980&t=99)** depending on which platform you're testing. This is a great pattern to use anytime you want shared code to talk to the host, and it keeps things clean and testable. Nice job getting through this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2), [[Xcode]] (1)
> **Code Identifiers:** jvmmain (1), androidmain (1), iosmain (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 5. Shared Network Layer

[↑ Back to Table of Contents](#table-of-contents)

#### [Ktor client setup](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=0)** - [Instructor] In this module, we're going to set up the shared HTTP client that both [[Android]] and iOS will use to talk to the [[Ktor]] server. This will live entirely in our shared code module and use Ktor client to handle network calls in a multi-platform friendly way. This is where we configure our client. We're using Ktor's multi-platform HTTP client, which works across Android, iOS, and JVM out of the box. Inside the create client function, we install several useful plugins. First is content negotiation. This handles automatic [[JSON]] serialization and deserialization using Kotlinx serialization. That means we can send and receive typed [[Kotlin]] data models without writing any manual parsing code. Next is the logging plugin. This logs HTTP traffic, great for debugging requests and responses. You'll see requests URLs, headers, and responses log to the console depending on the log level. You can customize this configuration per environment. For example, during development, the client can point to local hosts in production, it can target a remote server. We manage this through [[Dependency Injection]] using a base URL that's injected via coin. The results is a flexible, shared HTTP client that works seamlessly across both Android and iOS
>
> **[1:38](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/ktor-client-setup?u=76281980&t=98)** with support for structured logging, timeouts, and automatic JSON handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[Ktor]] (3), [[JSON]] (2), [[Kotlin]] (1), [[Dependency Injection]] (1)
> **Env Vars:** http (4), json (2), jvm (1), url (1)
> **Code Identifiers:** ios (3)
> **Prerequisites:** set up (1), configure (1), install (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Repository pattern with shared code](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=0)** - [Instructor] Now that we've configured our shared [[Ktor]] client, let's build on top of it using the repository pattern. The goal here is to abstract away the details of the network access behind a clean, testable interface. This is our main entry point for fetching data from the server, APOD entries, histories, and so on. We define a simple interface for the repository, which includes methods like get today's APOD, get a APOD by date, get APOD history. Each of these corresponds to a server endpoint, but the details of how the request is made are hidden inside the implementation. The implementation of APOD repository uses the KTor client we set up in the last module. We pass it via Constructor Injection using Koin, which keeps things clean and decoupled. Each method sends a GET request using client dot get and maps the results directly into a shared [[Kotlin]] data class, like APOD response or paginated response. Because we're using Kotlin X serialization, we don't need to write any parsing logic. One nice touch is inside the repository, if a request fails, we catch the exception, and throw a structured error like network exception or a not found exception. That keeps the error logic out of the UI,
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/repository-pattern-with-shared-code?u=76281980&t=94)** and makes [[Unit Testing]] much easier. Another benefit of the repository pattern is testability. In our tests, we can inject a fake or mock implementation of APOD repository and simulate success or failure without making a real network call. The UI doesn't need to know how the data is fetched. It just asks for the repository for today's APOD or a list of entries and gets back a clean Kotlin object. This separation makes the code base easier to reason about and maintain across platforms. In short, the repository acts as a glue between the shared HTTP clients and the [[Representational State Transfer (REST)|rest]] of the app. It's the layer that turns raw HTTP responses into real data our features can use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (3), [[Ktor]] (2), [[Unit Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** apod (8), http (2)
> **API Endpoints:** get  (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Shared business logic](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=0)** - [Instructor] Now that we've built a clean repository interface over our network layer, let's talk about shared business logic. Where decisions get made, caching strategies are applied and platform agnostic rules are enforced. Most of this logic lives in APOD service. You've already seen this class on the server, but in the shared client code, we're using the same name for consistency. This is the class that coordinates request between the repository and the [[Representational State Transfer (REST)|rest]] of the app. Let's walk through what it does. When you call today APOD, the service checks if the results is already cashed if not, it fetches the repository and stores the result locally. The same thing happens for historical data. This pattern lets us reuse results, reduce network calls, and improve offline support, all in shared code. We also implement fallback behavior here. For example, if the request for today's image fails, we can fall back to yesterday's result. Assuming we have a cache, that's a great way to make the app feel more reliable without extra effort from the UI. We also use this layer to centralize validation. For instance, when we [[Fetch]] by date, the service checks that the date is valid in the past and after the APOD program started. That's not UI logic. It's not networking logic.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/shared-business-logic?u=76281980&t=95)** It belongs right here in the business layer. By isolating these decisions in the shared module, we avoid duplicating them on each platform. [[Android]] and iOS both benefit from the same logic and future platforms will too. And of course, this layer is fully testable. You can pass a fake repository and test how the service reacts to different conditions, empty results, failed requests, invalid inputs, all without hitting a network or UI. Think of this service as the smart middle layer. It doesn't talk directly to the network. It doesn't care about the UI. It just makes decisions, when to fetch how to cash and what to return. Keeping that logic and shared code means we're not just sharing code, we're sharing behavior, and that's what makes [[Kotlin]] multi-platform so powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Android]] (1), [[Kotlin]] (1)
> **Env Vars:** apod (3)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Repository error handling](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=5)** - [Instructor] Right now, our app is a little too quiet when things go wrong. A drop network connection, a crash server, the app just fails silently, no error, no retry, no explanation. Our users deserve better than that confusing, empty screen. So right now, everything works. We can click on this. We go to the details, come back. Now, let's stop the app. Let us go to server config. We are going to intentionally break the network connection. So now, server mode is equal to broken. It just needs to be something that isn't working. You can also just change that string itself. And now, we're going to restart everything.
>
> **[1:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=60)** All right, so here on the APOD gallery, if I click it, nothing happens. The screen is completely empty. Now, just in case you think there's a bug someplace else, if we go to the today screen, we notice that we get a fail to load today's picture, no internet connection. And we have a try again button, which will go out and eventually time out 'cause there is no internet. In this challenge, you will implement comprehensive error handling to surface network errors in the UI so users see helpful feedback when something breaks. The underlying error detection is already there. In the repository layer, you just need to connect it to the user interface. Your task is to add user-friendly error handling to the home screen that today's screen is working correctly and serves as your guide. Study how it handles errors and apply the same pattern to the home screen that is missing this functionality. To test your implementation, open server config and change server mode from working to broken. This will simulate network failures. Navigate to the home screen, click the refresh and see the silent failure, empty screen. No feedback. Then implement error handling, following the today's screen pattern and confirm that helpful error messages with retry buttons appear instead. Once you verified your error handling works across all screens, restore this server to working and ensure normal operation continues seamlessly.
>
> **[2:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-repository-error-handling?u=76281980&t=156)** Apps shouldn't fail silently. Let's make sure yours doesn't. Have fun with this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1), navigate to (1)
> **CLI Commands:** make (1)
> **Env Vars:** apod (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Repository error handling](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=5)** - [Instructor] How did you approach implementing error handling for your APOD app? The key to solving this challenge was using the today screen as your guide. The today screen already demonstrates the complete error handling pattern with its error field in today UI state. The on failure block in load today APOD,
>
> **[0:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=32)** and the error display UI that shows helpful messages with retry buttons on the today screen. To fix the home screen, you needed to add an error field to home UI state, then include an on failure block in load APOD history. The final step was adding the error display UI that checks for empty lists and error states, showing the user a clear message and retry button instead of leaving them with an empty screen. This approach transforms the silent failures into clear communication with users. Instead of having mysterious empty screens, the user now sees exactly what went wrong and have a clear path to retry their actions. So if we go ahead, and first off, let me make sure you see that we are in broken mode right now. We are on APOD gallery. So here is the home screen and we have an error loading data. Likewise, if we go to the today page, which was working before, we see that there's an error message here as well. Now, if I go ahead and fix this, well, first let me stop the app, and let's go ahead and fix it by committing in and committing out.
>
> **[2:08](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-repository-error-handling?u=76281980&t=128)** And if we do a retry, bam, now we see it. Remember to restore your server mode back to working in the server config so that your app functions normally again. And we can also just cruise around and see some cool pics.

> [!info]- Semantic Content
>
> **Env Vars:** apod (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. Compose Multiplatform UI

[↑ Back to Table of Contents](#table-of-contents)

#### [Compose UI architecture](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=0)** - [Instructor] Now that we have built a shared network and business layer, it's time to put it to work in the UI. In this chapter, we're focusing in on composed UI side of things, starting with architecture. Open up the [[Jetpack Compose|compose]] app module. This is where our composed multi-platform UI code lives. The architecture here follows the MVVM pattern. With unit directional data flow, state flows down from the view models, events bubble up from the UI. Take a look at APOD view model to see how the view model talks to the repository and emits state through state flow. Inside the view model, we use [[Kotlin]] routines to [[Fetch]] data and update state. When something goes wrong, say a network error. We update the state to reflect the error and the UI reacts accordingly. This keeps the business logic out of the composable. Take a look at the today screen, to see how UI renders whatever state it receives and sends users events back to the view model. This pattern helps us stay organized as apps grow, you can swap out the repository, mock the data and previews, or handle UI events consistently. And because all of this is built with composed multi-platform, it works the same whether you're tapping on an [[Android]] phone or running an iOS simulator. As you move into more advanced modules, this architecture will help keep the UI predictable,
>
> **[1:36](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/compose-ui-architecture?u=76281980&t=96)** testable, and maintainable. It's all Kotlin all the way down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (2), [[Jetpack Compose|Compose]] (1), [[Fetch]] (1), [[Android]] (1)
> **Env Vars:** mvvm (1), apod (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### [APOD display screens](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=0)** - [Instructor] In this module, we're building the screens that display astronomy picture of the day entries using Jetpack composed multi-platform. Start with today's screen. This screen uses APOD view model that loads today's APOD via the shared repository and exposes the state as state flow. We collect this state in composable using collect as state. The UI shows a title, the image, and an explanation. Images are loaded using async image, which supports multi-platform image loading and caching across [[Android]] and iOS. When there is an error or the user is offline, we display helpful messages with retry buttons instead of crashing. The state model drives this with flags like is loading, error and APOD data to control what the UI shows. Next look at home screen. For the APOD history list, it displays a scrollable list of cards each showing a title, thumbnail, and date. This screen supports pagination using lazy loading with a load more trigger. When the user scrolls near the end, we call view model to [[Fetch]] the next page. Both screens are powered by the same shared business logic, so they behave identically regardless of platform. These screens give us clean, responsive building blocks
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/apod-display-screens?u=76281980&t=94)** for displaying APOD content across all platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[Fetch]] (1)
> **Env Vars:** apod (5)
> **Code Identifiers:** ios (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Client integration](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=0)** - [Instructor] Now, let's connect the shared client with our composed UI, so everything flows smoothly. User tabs, API calls, local caching, and UI state updates. Look at Apod View Model to see how it acts as the bridge between the composed UI and the shared repository. When initialized, it calls repository methods and emits state via state flow. The composable collects this state using collect as state and renders whatever it receives, loading spinners, errors or data. The view model also handles user events. When the user pulls to the refresh, we call methods like refresh, which reruns the network calls and updates the state. No need to touch the UI code, just update the flow. Check out home screen to see this pattern in action. The view model loads paginated data and exposes a list of entries with flags like, is loading and has more data. When the composable detects scrolling to the end, it calls, load more items and the view model updates the state. The separation keeps things testable and consistent. The view model doesn't know about [[Jetpack Compose|compose]] and the UI doesn't know about HTTP calls or caching. We use App Module with Coin to inject the repository, making it easy to mock and test. By connecting the shared client
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/client-integration?u=76281980&t=94)** through lightweight view models, we've created a robust, platform-independent app flow that's portable, testable, and easy to extend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1)
> **Env Vars:** api (1), http (1)
> **Speakers:** - [instructor] (1)

#### [Use cases and clean architecture](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=0)** - [Instructor] In this module, we're structuring shared code around use cases to help scale your app without things getting tangled as it grows. Look in the domain use case package for classes like GetApodByDateUseCase. Each class defines one job, [[Fetch]] today's Apod, fetch by date, or fetch paginated history. They don't know about [[Jetpack Compose|compose]] or view models. They just expose a function and return a result. These use cases take dependencies through constructor parameters, usually a repository, and apply business rules, like validation or filtering. We wire them up using Coin and AppModule, making them easy to reuse across different screens. Check out how ApodViewModel becomes much thinner. It calls use cases, collects results, and emits state. This keeps presentation logic and business logic separated, which is the foundation of clean architecture. Another benefit is testability. You can write fast unit tests for each use case in isolation, mocking the repository, and asserting correct behavior. And because use cases are pure [[Kotlin]], they live entirely in the shared module. So [[Android]] and iOS use identical business logic. This architecture might feel like a lot at first, but it pays off as the app grows. When you need to add features or fix bugs, you know exactly where the logic lives.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/use-cases-and-clean-architecture?u=76281980&t=94)** We've connected everything from the UI to the network with clean separation and clear responsibilities at each step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[Jetpack Compose|Compose]] (1), [[Kotlin]] (1), [[Android]] (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Complete the FindScreen navigation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=0)** - [Instructor] The find screen can search Apods and show results, but there's one thing missing. When the user taps view full picture nothing happens yet. The button is there but it doesn't lead anywhere. You're task is to wire up that detail view. When tapped, the button should show the full Apod image, title and explanation along with a back button to return to search. Try searching a date like 2025-07-16.
>
> **[0:40](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-complete-the-findscreen-navigation?u=76281980&t=40)** Tap the button. And make sure everything flows smoothly. Search, view, back, repeat. Look at how today's screen handles detailed navigation and feel free to reuse components. A bit of local state is all you need to manage the transition. Let's complete the flow and make the experience feel polished.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Complete the FindScreen navigation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=0)** - [Instructor] How did you tackle this challenge? The solution centers on introducing local navigation state to toggle between search view and detail view within the find screen. A simple Boolean state variable controls which UI is displayed: false for search, true for detail view. Look at find screen to see the conditional that decides which UI to render. This pattern keeps both views in the same composable, avoiding complex navigation setups. Now, for us, if we take a look at App.kt, (laughs) that's what I like to call it, you can see here's the find screen, and then here's something called details screen. And if we look inside of the find screen, we see that there's an onApodClick, and that if so, it navigates to a route called details. Now, the fun thing about this is is that this is the same route that the home screen uses. So there's a, you click on something, you get a navigation controller, you navigate to the details screen. The detail view uses a standard scaffold with top app bar and back button. Tapping the back button resets the state to show search. Tapping the view full picture sets the state to display detail. This highlights an important principle in [[Jetpack Compose]]. For simple self-contained flows,
>
> **[1:32](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-complete-the-findscreen-navigation?u=76281980&t=92)** local state is often the cleanest solution. It keeps transition smooth, code easy to follow, and the design maintainable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose]] (1)
> **CLI Commands:** find (4)
> **UI Navigation:** toggle (1), click on (1), navigate to (1)
> **File Paths:** app.kt (1)
> **Code Identifiers:** onapodclick (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. iOS Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding iOS generation](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=0)** - [Instructor] In this module, we're going to explore how [[Jetpack Compose|Compose]] [[Kotlin Multiplatform|Multiplatform]] runs natively on iOS. You've already seen how shared code works on [[Android]]. On iOS, it's even more seamless. We're using the exact same Compose UI code. We're at the tip of the spear here. Unlike traditional [[Kotlin Multiplatform]] that generates frameworks for [[Swift (Programming Language)|Swift]], we're running Compose directly on iOS. That means no Swift code, no framework generation, just [[Kotlin]]. Pure Kotlin and Compose all the way down. Look at the iOS app module structure. So here we are, here's the iOS structure. You'll notice it contains only one Swift file. And quite frankly, this file doesn't do very much. The same home screen, today's screen, APOD view model that power your Android app, are running natively on iOS through Compose Multiplatform. When you build iOS, Kotlin/Native compiles your Compose code into a native iOS binary. The Compose runtime handles all the iOS-specific details, touch events, navigation, [[Memory Management]], while your business logic and UI stay identical across platforms. This approach eliminates traditional pain points of [[Cross-platform Development]]. No API translation layers, no platform-specific UI code to maintain, no synchronization issues between iOS and Android implementation.
>
> **[1:34](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/understanding-ios-generation?u=76281980&t=94)** The results is true code sharing at every level. Your view models, repositories, UI components, and even navigation logic work identically on both platforms. It's all Kotlin, all Compose everywhere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (8), [[Kotlin]] (4), [[Android]] (3), [[Swift (Programming Language)|Swift]] (3), [[Kotlin Multiplatform|Multiplatform]] (2)
> **Code Identifiers:** ios (10)
> **Env Vars:** apod (1), api (1)
> **Speakers:** - [instructor] (1)

#### [Xcode project configuration](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=0)** - [Instructor] In this module, we'll get your composed multi-platform app running on the iOS simulator without ever opening [[Xcode]]. The beauty of composed multi-platform is that you can develop, build, and test your iOS app entirely from [[Android]] studio. Make no mistake though, you still need Xcode. Only, it just runs in the background. Look at your run configurations. You'll see iOS simulator options alongside your Android targets. So if we do a dropdown here, we can see that there's an iOS app here. There's a [[Jetpack Compose|compose]] app, which is Android, which even can run tests from here and other things. [[Gradle]] handles everything, compiling [[Kotlin]] native, packaging the app, launching the simulator, and installing your app. The same APOD view model and today's screen that you've been testing on Android will appear on the iOS simulator. The iOS simulator runs your actual composed UI code, tap interaction, scroll, navigate, everything behaves like a native iOS app because it is a native iOS app, just written in Kotlin and composed instead of [[Swift (Programming Language)|Swift]] and Swift UI. If you need to debugs iOS specific behavior, you can use the same debugging tools you use for Android, set break points. In fact, let's go ahead and click on one of these pictures and you notice there's a break point and we ended up in the picture details page. Okay, so let's go ahead and let that finish running.
>
> **[1:35](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/xcode-project-configuration?u=76281980&t=95)** We go back, we go to today. Oh, and look, we've hit our break point again at picture detail screen. So we're doing a lot of code sharing here. If we go ahead and let that run one more time, and I think that you've guessed what's going to happen. So we type in a date, we say find the picture, we say view full picture, and we end up once again at the picture details page. Set break points in APOD repository or home screen, and they'll work on iOS too. They share code base means they share debugging experience. For network testing, remember to update server config to use the correct IP address for the iOS simulator. It can reach your development server just like the Android emulator can. This streamlined workflow means you can iterate quickly across both platforms without context switching between IDEs or learning platform specific tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (6), [[Xcode]] (2), [[Kotlin]] (2), [[Swift (Programming Language)|Swift]] (2), [[Jetpack Compose|Compose]] (1)
> **Code Identifiers:** ios (11)
> **Analogies:** picture (5), just like (1)
> **UI Navigation:** dropdown (1), click on (1), go to (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** apod (2)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)

#### [Running on iOS simulator](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=0)** - [Instructor] While your [[Jetpack Compose|Compose]] UI runs identically on both platforms, there are some platform specific behaviors worth understanding. Look at platform [[Android]] and platform iOS. So, we've got 'em here standing side by side. This is how we handle platform differences. The base URL configuration varies between emulator and device, iOS and Android. But the networking logic in APOD repository stays the same. Navigation adjusters differ slightly as well. iOS users expect swipe back navigation while Android users expect a back button. Compose Multi-platform handles these differences automatically, providing the appropriate navigation experience for each platform. System integration points like status bars, safe areas, keyboard handling are managed by the Compose Runtime. Your home screen and today's screen automatically adapt to iOS design guidelines without any platform-specific code. Image loading through AsyncImage works identical on both platforms, but iOS has different caching behaviors and [[Memory Management]]. The APOD View model doesn't need to know about these differences. The underlying implementation handles platform optimization. Error handling and APOD repository produces the same results on both platforms, but iOS may show slightly different network error messages at the system level.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/running-on-ios-simulator?u=76281980&t=93)** Your app's error handling logic remains consistent. The key insight is that while platforms have differences, Compose Multi-platform abstracts them away. You write your business logic once in APOD View model and your UI once in today's screen, and both platforms get the optimal experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (4), [[Android]] (3), [[Memory Management]] (1)
> **Code Identifiers:** ios (6)
> **Env Vars:** apod (4), url (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Cross-platform verification](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=0)** - [Instructor] Now that you have composed multi-platform running on both [[Android]] and iOS, your challenge is to verify that behavior is truly consistent across platforms. This isn't just about checking whether the app compiles and runs. It's about confirming that your shared logic in Apod view model and Apod repository behaves identically, no matter which platform calls it. Start by testing the same user flows on both platforms. Load today's Apod, browse history, search by date, check that data returned is identical, errors are handled the same way, and caching behavior is consistent. Use server config to simulate network failures on both platforms. Set server mode to broken and verify that both Android and iOS show the same error messages and retry behaviors. Your error handling should be identical because it's the same Apod view model code. Test pagination in the home screen on both platforms. Scroll to the bottom, trigger loads. Confirm the same number of items load with the same data. The Apod repository pagination logic should work identically. Try edge cases like invalid dates in the same search screen, network timeouts, and app backgrounding.
>
> **[1:33](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/challenge-cross-platform-verification?u=76281980&t=93)** Since you're using the same [[Kotlin]] code for everything, the behavior should be consistent. This verification builds confidence that your shared codebase truly delivers on the promise of write once, run everywhere functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2), [[Kotlin]] (1)
> **Code Identifiers:** ios (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Cross-platform verification](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=1)** - [Instructor] How did you verify consistent behavior across platforms? The key was testing the same flows and confirming identical results from your shared APOD view model, and APOD repository. In [[Software Development]], there is still some [[Manual Testing]]. This testing is for high value user flows that you want to guarantee are not broken, such as someone making a purchase in your store app or someone booking an appointment in your calendar app. Testing success cases first, both platforms returned identical data when calling the same repository methods. The APOD repository hits the same endpoints and processes responses identically. So the today screen and the home screen displayed the same content. For error scenarios, using server config to break the network showed that both platforms handled failures identically. The same error messages appear, the same retry logic triggers, and the same fallback behavior occurs because it's all shared [[Kotlin]] code. Pagination testing in home screen confirmed that scrolling behavior and data loading work the same way on both platforms. The APOD view model manages state identically and [[Jetpack Compose|Compose]] handles UI rendering consistently. Edge case testing revealed that input validation, network timeout, and error recovery are all behaving the same way across platforms.
>
> **[1:37](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/solution-cross-platform-verification?u=76281980&t=97)** This consistency comes from having zero platform-specific business logic. Everything lives in the shared Kotlin. The verification confirms that Compose [[Kotlin Multiplatform|Multiplatform]] delivers true code sharing. Not just shared models or networking, but shared UI, shared state management, and shared [[User Experience (UX)|user experience]]. Both platforms run the exact same application logic, just compiled for different targets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (2), [[Jetpack Compose|Compose]] (2), [[Software Development]] (1), [[Manual Testing]] (1), [[Kotlin Multiplatform|Multiplatform]] (1)
> **Env Vars:** apod (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and course summary](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-ktor-with-kotlin-multiplatform-and-compose/next-steps-and-course-summary?u=76281980&t=0)** - [Instructor] Congratulations on building a truly multi-platform app with [[Jetpack Compose|Compose]] multi-platform. We started with a [[Ktor]] server connected to NASA's APOD API, built a shared repository layer and created view models that work across platform. Then we built Compose UI that runs natively on both [[Android]] and iOS. No platform specific UI code required. You've seen how APODViewModel, TodayScreen and HomeScreen work identically on both platforms. The same error handling, the same navigation, the same [[User Experience (UX)|user experience]], all from shared [[Kotlin]] and compose code. This represents the future of [[Cross-platform Development]]. Instead of maintaining separate code bases or dealing with bridge layers, you write code once in Kotlin and Compose and deploy it everywhere. What's next, deploy your server. Add features like offline support or user preferences, and consider expanding to desktop or web targets. Compose multi-platform gives you the foundation to reach any platform while maintaining a single cohesive code base. Thanks for learning with me. You've experienced the cutting edge of multi-platform development, true code sharing from business logic all the way up to the UI layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (5), [[Kotlin]] (2), [[Ktor]] (1), [[Android]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** nasa (1), apod (1), api (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Troy Miles]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/exploring-ktor-with-kotlin-multi-platform-6004176)

## Skills Covered

- Ktor
- Kotlin

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