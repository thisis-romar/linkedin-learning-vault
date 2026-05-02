---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: kotlin-multiplatform-development
url: "https://www.linkedin.com/learning/kotlin-multiplatform-development"
duration_minutes: 153
duration: 2h 33m
level: Intermediate
updated: 5/21/2025
learners: 3069
skills:
  - Kotlin
  - Cross-platform Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGy6ak9gCh6EA/learning-public-crop_675_1200/B4EZbaHVwdGcAc-/0/1747416079622?e=2147483647&amp;v=beta&amp;t=hzdneffla9nn0g9EWrfoBcVeXyiV5XJ_1OLHuW2k5qE"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Kotlin Professional Certificate by JetBrains]]'
prev_courses:
  - '[[Kotlin Essential Training- Object-Oriented and Async Code]]'
next_courses:
  - '[[Exploring Ktor with Kotlin Multiplatform and Compose]]'
path_nav: '[{"path":"Kotlin Professional Certificate by JetBrains","position":3,"total":4,"prev":"Kotlin Essential Training- Object-Oriented and Async Code","next":"Exploring Ktor with Kotlin Multiplatform and Compose"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/kotlin
  - skill/cross-platform-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Kotlin%20Multiplatform%20Development.md)

![Kotlin Multiplatform Development](https://media.licdn.com/dms/image/v2/D4E0DAQGy6ak9gCh6EA/learning-public-crop_675_1200/B4EZbaHVwdGcAc-/0/1747416079622?e=2147483647&amp;v=beta&amp;t=hzdneffla9nn0g9EWrfoBcVeXyiV5XJ_1OLHuW2k5qE)

# Kotlin Multiplatform Development

> Master cross-platform development with Kotlin by creating sophisticated applications that run seamlessly across Android, iOS, web, and desktop. In this comprehensive course, instructor Colin Lee empowers you to make smart architectural choices between Compose Multiplatform's shared UI approach and platform-specific interfaces like SwiftUI, balancing code reuse with native feel. Learn how to create

> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development) | 2h 33m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Kotlin multiplatform development](#kotlin-multiplatform-development)
  - [What you should know](#what-you-should-know)
- [**1. Creating Our First Multiplatform App**](#1-creating-our-first-multiplatform-app) (7 videos)
  - [The problem Kotlin Multiplatform solves](#the-problem-kotlin-multiplatform-solves)
  - [Comparison with alternatives](#comparison-with-alternatives)
  - [Supported platforms and performance](#supported-platforms-and-performance)
  - [Just what the KDoctor ordered](#just-what-the-kdoctor-ordered)
  - [Android studio for KMP](#android-studio-for-kmp)
  - [Xcode for KMP](#xcode-for-kmp)
  - [Crafting a template with the Kotlin Multiplatform wizard](#crafting-a-template-with-the-kotlin-multiplatform-wizard)
- [**2. Combining Native with Multiplatform**](#2-combining-native-with-multiplatform) (6 videos)
  - [Building our first multiplatform app](#building-our-first-multiplatform-app)
  - [Whether to use Compose Multiplatform](#whether-to-use-compose-multiplatform)
  - [Expect and actual](#expect-and-actual)
  - [An actual example](#an-actual-example)
  - [Accessing operating system methods](#accessing-operating-system-methods)
  - [Multiplatform project structure](#multiplatform-project-structure)
- [**3. KMP and Swift**](#3-kmp-and-swift) (3 videos)
  - [Using Kotlin from Swift code](#using-kotlin-from-swift-code)
  - [Making it easier with Swift export](#making-it-easier-with-swift-export)
  - [KMP together with SwiftUI](#kmp-together-with-swiftui)
- [**4. Architecture**](#4-architecture) (2 videos)
  - [Recommended architecture with MVVM](#recommended-architecture-with-mvvm)
  - [Google ViewModel](#google-viewmodel)
- [**5. Sharing Network**](#5-sharing-network) (4 videos)
  - [Adding Ktor to your project](#adding-ktor-to-your-project)
  - [Modeling with Kotlinx-serialization](#modeling-with-kotlinx-serialization)
  - [Making network requests](#making-network-requests)
  - [Apollo GraphQL](#apollo-graphql)
- [**6. Sharing Database**](#6-sharing-database) (4 videos)
  - [Adding SQLDelight to your project](#adding-sqldelight-to-your-project)
  - [Setting up your database and adding objects](#setting-up-your-database-and-adding-objects)
  - [Creating queries](#creating-queries)
  - [Going with the flow](#going-with-the-flow)
- [**7. Quality of Life**](#7-quality-of-life) (5 videos)
  - [Kermit for logging](#kermit-for-logging)
  - [Managing resources](#managing-resources)
  - [KOIN for dependency injection](#koin-for-dependency-injection)
  - [Storing values in multiplatform-settings](#storing-values-in-multiplatform-settings)
  - [Dates in Kotlinx-datetime](#dates-in-kotlinx-datetime)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Kotlin multiplatform development
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=0)** - Are you ready to explore the magic of Kotlin Multiplatform?
>
> **[0:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=4)** In this course, I'll provide you with a broad overview of the topic.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=8)** For example, we will explore many libraries that make it possible for you to write an app that runs across many web, desktop, and mobile platforms.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=17)** But these solutions will require hardly any platform specific code.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=22)** Hi, I'm Colin Lee.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=24)** I'm an experienced mobile engineer at an AI startup.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=28)** I launched a Kotlin user group even before Google announced official support for Kotlin and Android.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=34)** So let's go.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/kotlin-multiplatform-development?u=76281980&t=35)** I'm excited to share with you the magic of Kotlin Multiplatform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin Multiplatform]] (2), [[Kotlin]] (2), web (1), ai (1), [[Google]] (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=0)** - [Instructor] Here's what you should know.
>
> **[0:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=1)** Since this course is not going to cover the basics, you may want to consider an intro to Kotlin.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=7)** You could simply read the Kotlin tour on the official website.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=11)** Just go to [kotlinlang.org](https://kotlinlang.org) and click on "Get Started."
>
> **[0:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=16)** The official Kotlin tour is short, sweet, and won't ask you to rate it five stars at the end.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=22)** However, you shouldn't need too much preparation.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=24)** If you've used a similar language with strong types, like Swift, Kotlin will feel quite familiar.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/what-you-should-know?u=76281980&t=30)** You will also need to know how to install software on your computer and how to use a terminal or command line in your operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), [[Swift (Programming Language)|Swift]] (1)
> **Tools:** terminal (1), command line (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [kotlinlang.org](https://kotlinlang.org) (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Creating Our First Multiplatform App

[↑ Back to Table of Contents](#table-of-contents)

#### The problem Kotlin Multiplatform solves
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=0)** - [Instructor] Why are we discussing Kotlin Multiplatform?
>
> **[0:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=3)** Cost complexity and trade-offs make it the best solution for many apps.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=9)** Let me explain.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=11)** Native apps have traditionally provided the best experience for users.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=16)** What is a native app?
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=17)** A native app uses the best language and user interface libraries to run natively on your system.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=25)** By using methods supported by your operating system vendor, your app is more likely to look like an app that belongs on that platform and to work in a way that is more intuitive to users of that operating system.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=38)** Writing a traditional native app across iOS, Android, MacOs, Windows, Linux, and web requires a large team of highly paid developers communicating closely with one another.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=52)** It is a very expensive and it's challenging to write one app that looks beautiful and runs nicely across all of these devices.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=62)** Typically, one developer lacks the specific knowledge of languages and frameworks and the time to port one app to all of these different systems.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=72)** Also, each platform ends up with unique bugs based upon the different development teams working on each platforms app.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=81)** Enter hybrid frameworks.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=84)** These were intended to solve the difficulty in knowing all of these systems, and to produce a native app across all of them.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=93)** Most hybrid frameworks substitute calls in one language, like JavaScript or Dart, with user interface calls in the native language.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=103)** While hybrid frameworks seem convenient and they would seem to solve the difficulty of producing an app across a wide spectrum of platforms, they have several key downsides.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=113)** Debugging is challenging since multiple languages are involved, and the programmer may not understand the native code.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=123)** The languages used tend to have poor performance, like JavaScript, or may be less known outside of hyper development, such as Dart.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=132)** Apps which require careful handling of device hardware, like camera, Bluetooth, and others, may be more challenging to write and to maintain.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=143)** Kotlin Multiplatform handles most of the downsides of hybrid frameworks admirably.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=149)** What is Kotlin Multiplatform?
>
> **[2:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=151)** In 2017, the Kotlin language team at JetBrains added support to allow running software written in Kotlin across a wide variety of different hardware and software types.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=163)** They added support to allow writing apps for the Java Virtual Machine, or JVM, native on the LLVM, and web.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=173)** However, each platform can still benefit from custom per-platform code in some instances.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=181)** So they added a mechanism to the core Kotlin language to allow running a different function or method depending upon the underlying platform.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=190)** That announcement was very popular and exciting, but it was still difficult to write software because you then had to write slightly different code to accommodate all the differences between platforms.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=203)** This all changed with the development of Kotlin Multiplatform libraries.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=209)** The complexity and cost of developing high-quality apps for many platforms has made native development a challenge.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=217)** Meanwhile, hybrid frameworks often fall short.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/the-problem-kotlin-multiplatform-solves?u=76281980&t=221)** Kotlin Multiplatform changed the game by offering a method to share logic while still embracing the unique strengths of each platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin Multiplatform]] (5), [[Kotlin]] (3), web (2), [[JavaScript]] (2), [[Hardware]] (2)
> **Env Vars:** jvm (1), llvm (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Comparison with alternatives
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=0)** - [Instructor] What if you could code native apps for every device without giving up on the performance, the flexibility, or the unique look and feel of each platform.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=11)** This is what KMP or Kotlin Multiplatform offers.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=15)** So how does KMP compare to hybrid alternatives?
>
> **[0:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=19)** Today, most software is composed of libraries.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=23)** Since 2017, many Kotlin software libraries have been written for Kotlin Multiplatform.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=30)** This means you might be able to write a simple app without writing any code specific to the operating system or at hardware.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=38)** In addition, you can mix and match Kotlin with other languages and incorporate shared business logic into native user interfaces.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=48)** For example, Kotlin Interoperates with Objective-C and Swift Code for writing apps for Apple devices like iOS, macOS, watchOS, and visionOS.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=59)** Your software teams can decide how much they want to share code to deliver software faster, or how much they would prefer to have native user interfaces that are easy to use and which native developers will feel more comfortable working with.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=75)** Since all of your code is actually running in the best native target for your operating system, Kotlin Multiplatform is also very fast and offers native performance.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=87)** Many companies have adopted KMP or Kotlin Multiplatform, and have found it to perform very well for their apps.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=94)** Here is a handful of companies that use KMP and have nice things to say about it.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=100)** I personally use KMP to revitalize the apps that we wrote at Meetup.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=105)** There are a lot of common misconceptions about KMP.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=108)** Here are a few.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=110)** Some assume it's simply another hybrid framework like React Native.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=115)** While there is a user interface framework available called Compose Multiplatform, KMP can be used with entirely native UI as well.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=126)** Also, KMP works across a very wide spectrum of platforms and is not limited to mobile or even client apps.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=134)** Many case studies are also very complex apps and they benefit extensively from the way that Kotlin Multiplatform allows sharing of logic.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=144)** Since KMP uses the best native code generator for most platforms, it is typically comparable in performance to native.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=152)** As I found during my Meetup project work, native developers can quickly start contributing code to KP projects if there's someone to support the team with Kotlin Multiplatform knowledge.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=164)** Finally, there is a large, robust community centered on KP mostly due to Android apps, which also share code with iOS.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=173)** That community is very competent and quite often does not limit their libraries exclusively to mobile.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=180)** Kotlin Multiplatform stands apart from hybrid frameworks.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/comparison-with-alternatives?u=76281980&t=184)** By combining the performance and the flexibility of Native, with the efficiency of shared business logic, KP allows infinite mixing and matching to find the most efficient solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin Multiplatform|Kmp]] (9), [[Kotlin Multiplatform]] (7), [[Kotlin]] (3), business (2), [[Hardware]] (1)
> **Env Vars:** kmp (9)
> **Code Identifiers:** ios (2), macos (1), watchos (1), visionos (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Supported platforms and performance
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=0)** - [Instructor] What app would you build if you knew it could work on every device and operating system?
>
> **[0:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=7)** Kotlin Multiplatform supports nearly all operating systems and hardware in wide use today; this includes mobile, desktop, web, and server.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=18)** In order to support this wide range of hardware and operating systems, Kotlin uses four code generators: their Java Virtual Machine or JVM; Native or LLVM; JavaScript, and WebAssembly.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=37)** These four code generators allow Kotlin to target most modern devices and operating systems: Android, iOS, Windows, Mac OS, Linux, web, WebAssembly, server-side backend web, watchOS, tvOS, even Raspberry Pi, or any device that can run Java, C, or JavaScript.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=61)** Kotlin is known to interoperate quite nicely with a good number of alternative programming languages.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=67)** The best are like Java, Objective-C, Swift.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=71)** It's decent at other JVM languages, C/C++, Rust, and JavaScript; and only okay maybe at like Go, Python, and any other language with C bindings.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=83)** Based on Kotlin's four code generators, there are also numerous options to choose in terms of user interface frameworks.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=91)** Here's a small sampling: Jetpack Compose, SwiftUI, React, any JavaScript framework, Flutter, Angular, Spring.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=100)** So how easy is it to use Kotlin on these platforms?
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=105)** What are the best-case platforms that are the easiest to use today?
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=109)** I would say the easiest is Android and iOS with Compose and SwiftUI, or Jetpack Compose, Windows, Mac OS, and Linux with Compose Desktop, and back-end web with Ktor and Spring.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=125)** Harder might be Kotlin with React and JavaScript frameworks or WebAssembly, which is still fairly young.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=132)** And hardest would be all the rest of the platforms.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=136)** Compose Multiplatform is a technology which uses the Jetpack Compose Android user interface library to create shared user interface code across nearly all supported devices.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=149)** There are also numerous software libraries supporting with this framework, which function decently across many of the devices.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=157)** As you have learned in this section, Kotlin Multiplatform offers exceptional support across a wide range of platforms.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=165)** It also supports interoperability with many other languages as well as user interface frameworks.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/supported-platforms-and-performance?u=76281980&t=173)** By using Kotlin, you should be able to target nearly any system once you have the right skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (7), [[JavaScript]] (5), web (3), [[Java]] (3), [[Android]] (3)
> **Code Identifiers:** ios (2), watchos (1), tvos (1)
> **Env Vars:** jvm (2), llvm (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Just what the KDoctor ordered
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=0)** - [Instructor] Before we get started programming, it's important to ask if our system is ready.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=5)** There could be a number of things required to build and run a Kotlin Multiplatform app.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=10)** To make sure that we're ready, we're going to take a trip to the doctor, specifically KDoctor.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=17)** Now KDoctor is only for macOS.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=20)** However, you won't generally be able to develop software for iOS or macOS unless you have a macOS device for development.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=30)** You will still be able to use Kotlin Multiplatform and take this course, however, even if you can't develop for Apple devices.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=38)** To get started installing KDoctor, you will need Homebrew.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=42)** If you don't already have it installed, you'll find the steps to install it at brew.sh.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=47)** I will walk through this with you.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=50)** Here I'm copying the URL and I'm going to go into a command line terminal and paste this content here into the terminal.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=61)** After you run the bash command to install Homebrew, it will walk you through the process.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=67)** Here I have to put in my sudo password and just follow along in the interactive terminal.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=75)** With Homebrew installed, we simply need to run the brew install kdoctor.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=82)** First I'm going to run through the steps here to add it to my path.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=88)** Just copy and paste and then brew install kdoctor.
>
> **[1:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=95)** Once installation is completed, we can then run KDoctor and it will run us through the steps needed to have a fully working Kotlin Multiplatform environment.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=106)** As you can see, it can't find Java or the Xcode command line tools.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=112)** It's using system Ruby, which is not good and does not have CocoaPods.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=116)** So keep running KDoctor until you no longer see required steps to perform.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=122)** If you're not developing on a macOS device, but are using Windows or Linux instead, we have a number of manual steps you're going to need to perform.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=130)** First, install Android Studio from the official website.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=134)** This will give you all the Android SDK tools, as well as Android Studio.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=139)** Second, make sure JAVA_HOME is set in your environment to working Java development kit.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=146)** Android Studio provides one, so try running Java from the command line and ensure that it runs without errors.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=155)** There we go, java -version.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=158)** And if it doesn't run correctly, make sure you add the correct Java development kit to your path.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=164)** Third, install the Kotlin Multiplatform plugin in your Android Studio.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=170)** So you go to Settings, Plugins, and Marketplace, and then you would search for it.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=178)** I already have it installed here as you can see, but just make sure that it's installed and fully updated.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/just-what-the-kdoctor-ordered?u=76281980&t=185)** Whether you're using macOS, Windows or Linux, following the outline setup process will ensure that you have the tools and the environment ready to build and to run your projects with confidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Android]] (5), [[Kotlin Multiplatform]] (4), [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** make (4), brew (3), find (2), sudo (1), ruby (1)
> **Tools:** command line (3), terminal (3), bash (1)
> **Prerequisites:** install (6), setup (1)
> **Code Identifiers:** macos (5), ios (1)
> **Env Vars:** url (1), sdk (1), java_home (1)
> **File Paths:** brew.sh (1)
> **UI Navigation:** go to (1)

#### Android studio for KMP
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=0)** - [Instructor] For working with Kotlin Multiplatform, a number of integrated development environments or IDE options are supported.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=8)** For this course, we will use Android Studio for most of our development.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=13)** We will also use Xcode, which we'll cover in a later video.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=17)** A lot of improvements have been coming to Android Studio recently related to Kotlin Multiplatform.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=23)** As a result, you may want to consider using a beta or canary version of the IDE.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=29)** For this course, I recommend using Android Studio Meerkat, Narwhal, or later.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=35)** Starting with Meerkat, Android Studio has the capability to add shared module to your Android app projects for you.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=44)** Beginning with Narwhal, the IDE also has the capability to show compose multi-platform previews.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=51)** Let's take a look at an example project that I created.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=56)** First of all, you're going to generally want to switch from the Android view to the project view.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=61)** This is generally true with Kotlin Multiplatform projects in Android Studio.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=66)** There are a couple of plugins you should consider which will improve your development experience.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=73)** First, there is a compose multiplatform project, which is included in most recent versions of Android Studio.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=81)** This adds some useful functionality to make compose multiplatform easier to work with.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=88)** So you can see this is Jetpack Compose.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=90)** It's not the same one.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=91)** We want to go to this one, Compose Multiplatform IDE support and this will come with, I believe, Narwhal and later.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=101)** Also, you're going to want the Kotlin Multiplatform plugin, which I have right here, which will help as well.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=109)** This should allow you to run your iOS app directly from Android Studio.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=113)** If it doesn't show up automatically, you can still add iOS or desktop targets or any other by editing the run configurations.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=122)** If you want to run your app directly from Android studio for iOS, desktop, or web assembly, you may find you have to add a new run configuration manually.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=133)** Sometimes the iOS configuration appears automatically if you already have the Kotlin Multiplatform plugin installed.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=141)** If you want to run the desktop app, you should follow these steps.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=144)** First, go to the dropdown at the top of the IDE where you would select Android or iOS run configurations, you select Edit Configurations and then press the plus button.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=158)** Choose application, name your run configuration, select a recent Java version.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=164)** Here I'm going to choose the JetBrains Runtime that came with Android Studio.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=169)** Select the desktop main module, and then we need to select a main class here.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=175)** You tap this icon in the right corner, the document icon, and it searches and finds a main class.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=182)** It will not find one if you haven't created it.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=186)** So usually select the first option, press OK, and run the desktop app.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=193)** Okay, I had to update some Gradle versions, but now I should correctly run the desktop version.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=201)** You'll notice I made changes to both the Gradle Libs versions 2 ML file, as well as the Gradle wrapper properties file in order to update the versions of the project.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=213)** When I'm here and there's underlined text, you can put your mouse over, click, and then you just hit option enter and it'll update to the latest version, assuming that version works correctly.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=225)** Okay, here we go.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=226)** I'm just going to press run and it's going to run, and as you can see, it's correctly loading the version here.
>
> **[3:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=237)** So it'll show to you that it's coming from the desktop app.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=244)** Here, it's Java and the version of Java that is running.
>
> **[4:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=247)** So you can see that I managed to get the desktop configuration to work.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=251)** Web assembly or WASM JS in this case is more experimental.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=256)** We won't dive too deeply into this course due to more limited multi-platform library support today, but you can still run it from Android Studio.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=264)** Again, you go to the dropdown for run configurations, choose edit configuration, add a new one with Gradle as the type, here I'll put in web and this part, you have to type exactly the right thing.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=281)** I put down here WASM JS browser development run minus T.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=291)** Exactly that.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=293)** And now if I hit okay and I try running it, this should load my web browser and show a web assembly version of the project running.
>
> **[5:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=306)** As you can see here, it's running and showing WASM JS.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=309)** It's in my Safari browser, so everything's working.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=313)** I can also show you how to create this iOS app configuration if it does not create it for you.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=319)** Let me give this a go.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=321)** Do I press minus?
>
> **[5:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=323)** Say iOS application and we'll type in iOS here.
>
> **[5:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=328)** You have to choose the project file in the folder and here it is.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=335)** Then you have to wait for it, then choose the project scheme, and finally the configuration and the target.
>
> **[5:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=342)** So you're picking which type of simulator you want it to run on, and it says before launch, build iOS application.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=349)** All this stuff should be fine.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=350)** So I'm going to hit okay and now I can run it for iOS.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=354)** Now you're going to have to make sure you run X code before you do this, most likely because you have to accept the license terms or X code will not allow it to run the simulator.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=369)** It's now installing the simulator and here it is starting up the simulator.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=375)** It's going to then immediately run the app in our new iPhone simulator.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=381)** It's also possible to choose devices as targets, and as you can see, I click here.
>
> **[6:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=386)** It's got Hello iOS.
>
> **[6:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=388)** This is coming from the iOS specific code that's right here.
>
> **[6:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=391)** So now that we know how to run code against each platform, we should look into the features that Empower Kotlin Multiplatform development in Android studio.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=402)** First, we need to get our minds into the gutter.
>
> **[6:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=405)** That's the IDEs gutter, that is.
>
> **[6:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=410)** The gutter is the area just to the left of the main editor window.
>
> **[6:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=415)** Let's look at platform KT in the common main code.
>
> **[6:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=418)** You'll notice an A with a diamond surrounding it in the gutter.
>
> **[7:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=422)** If you click on it, it allows you to travel quickly to the different actual fun.
>
> **[7:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=426)** Get platform calls for each platform.
>
> **[7:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=430)** If you tap on the E with the diamond surrounding in the gutter, then you'll return to the Expect fund, so it will cover actual and expect a little more in a later video.
>
> **[7:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=440)** Let's say we want to delete one of the actual functions.
>
> **[7:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=444)** You'll notice that the word expect gets a red underline if we do that.
>
> **[7:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=450)** If you tap on it and hit option return to do the IDE Quick fix, it'll give you the option to create the missing function just like that.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=463)** The same thing implies to the interface.
>
> **[7:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=469)** Here you can tap on the eye to get to the implementations of the interface, and if you tap on the eye again, it will take you back.
>
> **[8:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=480)** If you want to go backwards and forwards on a Mac, you can do command option left arrow and right arrow, just like that.
>
> **[8:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=488)** You can also do cross platform refactoring, so let's try to rename the Expect Fund, get platform function right here.
>
> **[8:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=497)** Simply right click the name of the function, choose refactor, and then rename.
>
> **[8:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=504)** If you're using a track pad, you can also right click by tapping with two fingers.
>
> **[8:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=508)** Now, if we type the new name of the function and you'll see that all the actual funds have also been renamed, as you can see, all of these are now the same.
>
> **[8:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=518)** The same goes for interfaces across the platform boundary, except that you may need to check check boxes in the dialogue to ensure they're renamed properly, and then you can select all and then hit okay.
>
> **[8:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=536)** The same goes for refactoring to change the signature of the Expect Fund function.
>
> **[9:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=540)** You'll find that most refactorings simply work across these platform boundaries as long as you use a Kotlin multi-platform aware IDE like Android Studio.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=552)** So here I can change the signature and just add something new to it, and there I've added a string and you'll see each of the functions now has a string added to it.
>
> **[9:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=567)** So there you go.
>
> **[9:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=568)** Android Studio is definitely aware and will empower your cross-platform development.
>
> **[9:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=573)** I recommend it for now until they get IntelliJ working with all of these new features.
>
> **[9:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/android-studio-for-kmp?u=76281980&t=579)** It's probably your best option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (16), [[Kotlin Multiplatform]] (6), web (5), hit (5), [[Jetpack Compose|Compose]] (4)
> **Code Identifiers:** ios (12), iphone (1)
> **Env Vars:** ide (7), wasm (3)
> **UI Navigation:** go to (3), dropdown (2), select the (2), click on (1)
> **CLI Commands:** find (3), make (2)
> **Tools:** safari (1), intellij (1)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)

#### Xcode for KMP
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=0)** - [Instructor] If you're building an iOS app with KMP, you should know how to use Xcode to empower multi-platform and development with Kotlin.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=8)** You might be asking yourself, "If I have spent all of this energy building an app using both native iOS languages like Swift and Objective-C, will I still be able to debug my app in Xcode?"
>
> **[0:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=21)** The answer is yes.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=23)** Touchlab produced an excellent library that makes it possible to debug your KMP apps using Xcode across the Kotlin, Swift, Objective-C boundaries.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=35)** Installing the plugin is not difficult on a Mac.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=39)** You first make sure you have the homebrew package manager installed, which I do, so it's actually BrewMan's version.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=50)** And if it's not installed, go to brew.sh and run the one line command there to get started.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=55)** Next run brew install xcode-kotlin.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=62)** When that's done, simply run xcode-kotlin install.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=70)** I'll show you, xcode-kotlin install.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=77)** It's a yes, attempt to shut it down because you want it to restart, and now it's installation complete, it's now running with Xcode.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=87)** At this point, you should be up and running.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=89)** Whenever you upgrade Xcode, it's important to run xcode-kotlin with the sync command instead of install.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=97)** Again, to make sure that you keep your tools up-to-date and working with the latest version.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=102)** Now that you have the plugin installed, you can now add references to your Kotlin code to your iOS project inside of Xcode.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=112)** I can open my project in Xcode.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=116)** Be sure to set the option so it doesn't copy the files, instead references them in place.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=121)** Also, don't add them to a target since that will attempt to package them redundantly.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=126)** So I will go here, I would say Add Files to iOS app, and I can go to composeApp, src, commonMain.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=139)** I think that's correct, src like that. Hit Add.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=145)** Do not copy, reference them in place, and do not add them to targets.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=150)** You do want to create groups.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=153)** So now you can actually see all of your common Kotlin source inside of Xcode, and it will be able to handle it with syntax highlighting and everything working here, as you can see.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=166)** All of these Kotlin files are now searchable from inside of Xcode.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=172)** Now we can set break points in our Kotlin code and debug both Kotlin and Swift code from within Xcode.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=179)** When it comes time to actually run your project from Xcode, it should be pretty simple.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=182)** Chances are that if you have a simulator already installed and selected when you open your project, you can simply press the Run button.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=193)** You might need to first select the correct target at the top, only if there's more than one.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=198)** Right here.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=201)** However, oftentimes the only setup required is to set a team for signing purposes under your target's signing capabilities tab, which you click here on the project, you then would go here, select the target, which is the app, and then click Signing Capabilities.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=219)** And here you would add a team.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=222)** And this is going to require signing into your Apple account and all of that.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=226)** But right now it's actually installing and working.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=230)** I recommend creating a team and getting everything working.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=235)** Here it's launching and it's going to fire up this iPhone 16 Pro simulator right here.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=242)** Which will go to the main screen and then install the app, and finally, I can click, and it's working.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/xcode-for-kmp?u=76281980&t=250)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (15), [[Kotlin]] (11), [[Swift (Programming Language)|Swift]] (3), [[Kotlin Multiplatform|Kmp]] (2), next (2)
> **Code Identifiers:** ios (4), composeapp (1), commonmain (1), iphone (1)
> **Prerequisites:** install (5), make sure you have (1), setup (1)
> **CLI Commands:** make (2), brew (2)
> **UI Navigation:** go to (3), select the (1)
> **Env Vars:** kmp (2)
> **File Paths:** brew.sh (1)
> **Cross-References:** in the next (1)

#### Crafting a template with the Kotlin Multiplatform wizard
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=0)** - [Instructor] To write our first code, we should start from a template.
>
> **[0:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=4)** "Why not just get started writing?" you might ask?
>
> **[0:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=7)** There is a lot of custom setup to select which platforms to support and the directory structure required is quite complex to create it all from memory.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=16)** So, to avoid creating all of this boilerplate, first, let's go to the URL kmp.[jetbrains.com](https://jetbrains.com).
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=26)** After that, we can name our project with a title and a project ID.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=32)** Normally, a project ID is in reverse DNS notation.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=36)** So if our project is named hello, and our internet domain is [example.com](https://example.com), we would make the ID com.example.hello.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=46)** In this case, it's com.callingtheshots.project.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=50)** Next, let's select which platforms we would like to use.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=54)** The template supports Android, iOS, Desktop, Web, and Server.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=59)** Let's choose all except server for now.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=62)** You'll notice that the iOS platform lets you decide whether or not to share the UI using Compose Multiplatform.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=70)** Let's leave that checked for now.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=71)** Finally, let's press the DOWNLOAD button.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/crafting-a-template-with-kotlin-multiplatform-wizard?u=76281980&t=75)** We now have a functioning app, a very basic app that runs across all of these platforms and we can decompress it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin Multiplatform|Kmp]] (1), dns (1), next (1), [[Android]] (1), web (1)
> **Env Vars:** url (1), dns (1), download (1)
> **Exercise Files:** template (2), boilerplate (1)
> **Code Identifiers:** ios (2)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1), [example.com](https://example.com) (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 2. Combining Native with Multiplatform

[↑ Back to Table of Contents](#table-of-contents)

#### Building our first multiplatform app
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=0)** - [Narrator] In this video, we'll take a hands-on approach to building your first multiplatform app, guiding you through the process of using the custom template that you just downloaded.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=11)** By the end of this session, you'll have a working app running on multiple platforms and a clear understanding of how to make impactful changes to its functionality.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=21)** First, let's open the template that you just downloaded.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=24)** You'll need to uncompress the zip file into a directory.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=28)** In most cases, you can double-click the file in the file manager of your operating system, and this will start the process.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=36)** Next, we're going to open the project from within Android Studio.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=44)** If needed, we may be required to allow permission to let it build the project.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=50)** Then we want it to Gradle sync and choose the project view instead of Android, which is what we always use for Kotlin Multiplatform development.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=63)** First, I'm going to go into the Gradle directory and update some versions.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=67)** This should be 8.11.1.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=69)** It's the current today, and we'll update these to the current latest, 8.9.1.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=79)** If you hit Option + Enter, you can change to the latest version of each and then Gradle sync and wait for it.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=87)** If you press the elephant button up here, that will sync your project with the Gradle files.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=92)** It will also, if you've changed the Gradle files at all for a sync now option with the button at the top, and this is fine at the bottom there.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=101)** Now we are going to add any missing run configurations.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=104)** I'll go to edit configurations, add, application, we call it Desktop, select the Java version, desktopMain, the main class, and hit OK.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=123)** And then we'll add the web assembly version, which is Gradle.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=129)** We call this Web, and this has to be exactly this, wasmJSBrowserDevelopment, which is the branch we're running, then Run -t, just like that, and hit OK.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=147)** Now one by one, we can run each of these targets.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=150)** You try to run them all at once, you may run into some problems, so we're going to wait until the emulator starts to start the next one.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=158)** As you can see, I've got Android running here.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=160)** Close that now.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=162)** Here's JVM.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=164)** Says Hello, Java.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=165)** This is running in Mac OS right now.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=168)** I am going to then run web.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=176)** Here's web running, and now I can actually run iOS last.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=183)** And there's iOS.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=186)** Okay, I'm now running all four projects side by side.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=188)** Now you may notice I ran into some problems earlier on trying to build and run all four of them at the same time.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=195)** It does seem that there is a issue in Android Studio where it doesn't seem to want to execute all four at once.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=203)** You may need to try potentially stopping a task to start another and see if that helps.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=208)** But right now I have all four running and I can now demonstrate how you would add some changes to your project.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=216)** So after going through the steps for each platform, we should have our project running on Mac OS, an Android emulator, an iOS simulator, and a web browser.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=226)** If your device is not running Mac OS, you can instead run only on Android, web, and your desktop operating system.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=234)** Let's make a small change to our project and observe that the results have changed in each.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=242)** As you can see, I now have all four running at once.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=245)** I have made a small change and changed the text to read Hello LinkedIN Learning! in the shared code, and it's reflected in all four.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=254)** You've now seen how to set up, run, and customize your first Kotlin Multiplatform app using the custom template.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=262)** By following our steps, you successfully built a very simple project for multiple platforms.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=267)** Additionally, you made a small change and observed its impact across all of the platforms, reinforcing the power of this shared code.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/building-our-first-multiplatform-app?u=76281980&t=274)** With this setup complete, you're ready to dive deeper into Kotlin Multiplatform development and we're going to explore some more advanced features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (6), [[Gradle]] (6), web (6), [[Kotlin Multiplatform]] (3), hit (3)
> **Code Identifiers:** ios (3), desktopmain (1), wasmjsbrowserdevelopment (1)
> **UI Navigation:** open the (2), double-click (1), go to (1), select the (1)
> **Exercise Files:** template (3), zip file (1)
> **Prerequisites:** you'll need (1), required to (1), set up (1), setup (1)
> **CLI Commands:** make (2)
> **Versions:** 8.11.1 (1), 8.9.1 (1)
> **Definitions:** we call this (1), is a  (1)

#### Whether to use Compose Multiplatform
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=0)** - [Instructor] Let's look at what Compose Multiplatform offers, its benefits, and its limitations, and how to decide if it's the right choice for your project.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=11)** Compose Multiplatform has its origins with the user interface framework Jetpack Compose.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=18)** Jetpack Compose was written by Google for Android developers.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=22)** It shared some of the same main developers who originally wrote React.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=28)** I feel Compose has a wonderful developer experience for writing user interfaces in a declarative manner.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=35)** It's fast, and it's easy to work with.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=38)** Compose Multiplatform is a user interface library written by JetBrains, based upon Jetpack Compose for Android.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=48)** They figured out a neat trick to treat every platform as if it was an Android screen, simply by porting the Android graphics library Skia to each of these platforms.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=61)** They call it Skiko for Skia Kotlin.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=65)** While it's obvious that writing all of your user interface code once may save you a lot of time, there are reasons why this may not be a good idea for you.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=76)** Using the same UI in all apps may mean that your Android app looks identical to your iOS app, and your desktop and web apps.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=86)** This may seem favorable to some, but it also means that the controls might not look like the native controls for that platform.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=94)** This might cause some confusion, as icons and appearances are not the same as users would normally expect.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=103)** You might find that some animations behave differently or require custom tweaking.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=109)** You can get around some issues with the special KMP libraries, but a Compose Multiplatform app still may not appear the same on iOS, for example, as if you had written it using SwiftUI.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=123)** Also, if you work for a larger company, you might have existing development teams and investments into the native user interface libraries.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=133)** In this case, it might make sense to reuse existing user interface code and to only replace the code sections with shared Kotlin code when it makes sense.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=145)** A lot of larger companies share business logic between Android and iOS apps with Kotlin Multiplatform, while still using Jetpack Compose on Android and SwiftUI on iOS.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=158)** Here's some examples.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=160)** Compose Multiplatform can offer a huge savings in cost, time, and administrative overhead.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=166)** However, you must consider if a seamless native user experience may be more important to your organization than those savings.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=176)** Kotlin Multiplatform has the ability to empower both hybrid Compose and per-platform native user experiences, You can mix and match to your heart's content.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/whether-to-use-compose-multiplatform?u=76281980&t=189)** Using your new skills in KMP, the choice is ultimately yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (7), [[Android]] (7), [[Kotlin Multiplatform|Multiplatform]] (5), [[Jetpack Compose]] (4), [[Kotlin]] (2)
> **Code Identifiers:** ios (4)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** kmp (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Expect and actual
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=0)** - [Instructor] So far we've used a template to modify existing code to work on multiple platforms.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=6)** However, we haven't really explained how Kotlin Multiplatform works.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=11)** Under the hood, there are two special Kotlin language modifiers, which were added to the core Kotlin language back when KMP was added to Kotlin in 2017.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=23)** These are expect and actual.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=28)** When we write expect in Kotlin, we're telling the compiler that we want to create an interface.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=34)** However, unlike interfaces in most languages, a Kotlin expect interface is expected to have an actual implementation for each platform.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=46)** When we write actual in Kotlin, we're telling the compiler that this is the actual implementation of the interface we told the compiler to expect earlier.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=58)** The compiler can then look at the project directory structure to determine which platform this actual implementation serves.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=67)** Now, as I said, expect and actual both create and satisfy an interface.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=74)** However, they're also more powerful than interfaces or protocols in most languages.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=79)** In fact, there are at least seven different language constructs that can be used with expect and actual in Kotlin.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=87)** You can use expect and actual with functions, properties, objects, type aliases, enums, annotations, and now even classes, which is a new beta feature in the language.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=102)** Expect and actual classes should become stable soon, but may change slightly before they're considered final.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=109)** This is what an experimental feature means in the Kotlin world.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=113)** Doesn't mean that they're not usable yet, just means it might change a little bit.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=118)** You don't need to know how to use all of these different types of expect and actual to begin using Kotlin Multiplatform.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=127)** In fact, you can do most things with only expect and actual functions and properties.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=133)** All of the others are just there simply to make Kotlin Multiplatform more convenient.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=139)** Not only can you use expect and actual with functions and properties, but you can make the return types different for each actual statement.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=148)** You can return an interface that has a different implementation for each platform.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=154)** The main point I want to get across is that expect and actual are very powerful keywords in Kotlin.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=159)** You can use them to provide platform specific implementations of a great number of things.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/expect-and-actual?u=76281980&t=165)** These built-in language features are a big reason why Kotlin is possibly the most powerful multi-platform language today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (10), [[Kotlin Multiplatform]] (3), feature (2), [[Kotlin Multiplatform|Kmp]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** kmp (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### An actual example
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=0)** - [Instructor] In the last segment, I gave you an overview of the expect and actual keywords in Kotlin, but now it's time for a brief demonstration.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=10)** I will show you an example of using different implementations for each platform for Kotlin property and function.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=17)** First open your template project again in the IDE.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=22)** You'll need to wait for it to fully sync before every feature works as expected.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=28)** For starters, let's try a property.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=30)** Let's open the template project and go to the shared folder.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=34)** Typically, this code sits under commonMain slash kotlin for your app or library module.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=42)** You need to use the Project view, not the Android.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=46)** So here we have my shared code for my project.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=49)** You'll notice the existing code here already has some expect and actual functions.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=55)** Let's delete the existing Greeting.kt code and start over.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=59)** Delete all but the package statement.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=61)** Here we're going to add expect val_world: String and expect fun platformFunction.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=74)** As you type these lines, your IDE will likely underline the names in red.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=79)** Don't worry about this yet.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=80)** This is just here to remind you that you haven't yet written the actual implementations of these functions.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=88)** If you click the red underlines and hit Option + Enter, there's an option to add the missing actual declarations, and you can then select each one that you want to support and press OK.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=106)** And I can then do the same thing here with the other one.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=110)** Add missing, Desktop, Android, iOS, and WebAssembly.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=117)** Now you select all the platforms you want the implementations for on that quick fix screen.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=121)** You can choose iOS main instead of the individual check boxes for each of the different iOS targets, for example, this works because KMP uses a hierarchical approach, so you're not forced to write multiple implementations when it does not make any sense.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=137)** After you click through to this screen, the IDE will create files for each platform and will leave the implementation as TODO, Not yet implemented.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=147)** TODO is a built-in Kotlin function that will crash your app with that TODO message if you try to run it without writing the necessary code.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=155)** This crash is deliberate to remind you to finish your code before checking it in and sending it off to production or to a client.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=163)** You can also find all TODOs in your code using the TODO tool window in most JetBrains IDEs.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=169)** So that would go Tool Windows and then look for TODO, and it found four TODOs, as you can see.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=180)** Let's define the actual val greeting to four different values depending upon the platform.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=188)** Let's go to Android here for world, we're going to say, "Let's do the robot, Android!"
>
> **[3:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=201)** We're going to go to desktop, going to say, "Let's click around, desktop!"
>
> **[3:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=212)** And iOS will do, "Let's take a bite of the apple, iOS!"
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=226)** Finally, go to WebAssembly, we're going to say, "Let's rock the web, WASM!"
>
> **[3:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=236)** We're going to have to change some code here.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=240)** So if I go to shared code, we need to change this greeting here from Greeting.great to the new property called world.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=249)** You'll see it turn purple.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=251)** If I run this on any of the platforms, it should work.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=257)** I run for Android here.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=259)** If I click here, it says, Compose: Let's do the robot, Android!
>
> **[4:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=263)** So, and likewise, if I pick any other one of these, let's do web.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=267)** We should see the web version.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=274)** "Let's rock the web ,WASM!"
>
> **[4:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=276)** There we go.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=278)** Compose: Let's rock the web, WASM!
>
> **[4:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=280)** So there we go.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=281)** We've implemented an expect and actual val returning a string.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=286)** So as you can see, expect val is used for setting a value such that the result could be different per platform and calculated differently.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=295)** What if we simply wanted to run a function that works differently for each platform?
>
> **[5:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=300)** You could use a side effect of expect val, but that will be unexpected and awkward.
>
> **[5:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=305)** So instead, we're going to use expect and actual fun in this case.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=310)** You should expect fun in the next video, (laughs) pun intended, we're going to start calling platform-specific APIs directly from Kotlin.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/an-actual-example?u=76281980&t=318)** We'll make our app move around in unique ways for each individual operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (6), [[Kotlin]] (5), web (5), [[Jetpack Compose|Compose]] (2), feature (1)
> **Env Vars:** todo (5), ide (3), wasm (3), kmp (1)
> **Code Identifiers:** ios (5), commonmain (1), val_world (1), platformfunction (1)
> **UI Navigation:** go to (5), open the (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the last (1), in the next (1)
> **Exercise Files:** template (2)
> **File Paths:** greeting.kt (1)

#### Accessing operating system methods
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=0)** - [Instructor] In this video, we're going to call methods or functions that are specific for each operating system, but we're going to make that call from shared code.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=9)** You see here, I have created a platform function with expect fun, and I gave it the composable annotation.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=17)** This makes it a Compose Multiplatform function, so then we can actually make this call from Compose code and also take advantage of some of the Compose methods.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=27)** So we're going to use this expect fun to create a function interface that we satisfy with a different Kotlin function for each platform, so let's take a look at Android here.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=40)** Starting with Android, we create a sequence of toasts, so toast is a system message that briefly appears over the top of our app, covering everything underneath it.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=52)** In this case, we define our platform func to show two different messages with the Toast.makeText method, which only Android supports, passing in the Android context that we get from the composable, so LocalContext.current is the way, in Jetpack Compose, that you can get Android's context.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=73)** Here, we're passing into a launched effect, which allows you to use coroutines to run normal code inside of Compose rather than view code, and so here, we're in a coroutine, looping forever while true, meaning we continue this loop until the end of time unless this is no longer visible, which we'll show, and Toast.makeText is going to spit these two messages out with a two second delay between each of them, so this is going to show the two messages on repeat for Android.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=105)** So let's take a look at iOS.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=109)** For iOS, we changed the background color of our app's root window controller, as you can see here.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=117)** Take the key window.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=118)** We're using the UI application method, which is built into iOS, into the operating system, and shared application with key window, rootViewController.view, and from that, we can set the background color back and forth every two seconds.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=135)** This code will cycle back and forth between a cyan color and a yellow color background.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=142)** Next, we go to desktop.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=144)** For desktop, we're going to use Compose Multiplatform method that only works on desktop.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=149)** We're going to create a dialog window on the screen where the message in dialog for the title cycles between two different messages.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=160)** Again, we're using the launched effect with while true.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=162)** Every two seconds, we change it between the two marquee slogans.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=167)** Finally, we go to WebAssembly.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=171)** Again, WebAssembly, we're going to use a platform access to the browser's JavaScript to the document.title that allow us to change the title of the webpage.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=182)** I'm going to show this in Chrome, because if I show it in Safari, it doesn't show you the title, so we're going to go back and forth every two seconds between the two messages.
>
> **[3:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=191)** As you can see, using Kotlin Multiplatform, you can make calls to specific messages for each operating system on each platform while keeping the main majority of your codebase still shared and still reusable, and I'm going to demonstrate that quickly here.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=208)** So let's take a look at Android.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=212)** Here we go.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=213)** You see here that this is the messages going back and forth every two seconds.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=217)** If I close it so the view is no longer visible, these will stop.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=222)** There we go. Okay, so that's Android. iOS.
>
> **[3:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=228)** See, the colors are going to change in the background here, back and forth, and then we're going to check out web.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=238)** I'm going to open this instead in Chrome, and you'll notice the title changing right there.
>
> **[4:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=247)** Every two seconds, good, and finally, we're going to test desktop, and the title of the window's changing there.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=256)** So we've just demonstrated how we can run the platform functions of the operating system directly from actual functions and then calling it from shared code.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=265)** This approach not only simplifies cross-platform development, but it also ensures that platform-specific features integrate cleanly into your app.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/accessing-operating-system-methods?u=76281980&t=274)** Kotlin Multiplatform enables you to write maintainable code while leveraging the unique capabilities of each platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (8), [[Jetpack Compose|Compose]] (5), [[Kotlin Multiplatform|Multiplatform]] (2), application (2), [[Kotlin Multiplatform]] (2)
> **Code Identifiers:** ios (4), maketext (2), rootviewcontroller (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2)
> **Tools:** safari (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Multiplatform project structure
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=0)** - [Instructor] Now that we've looked at a bit of Kotlin Multiplatform code, we should familiarize ourselves with the project structure that makes it all possible.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=10)** Let's take a look at our template and identify each location where the different code goes for each platform and for shared code segments.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=20)** The template keeps all of its Kotlin code within a single module named composeApp.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=27)** All of its Kotlin code lives under composeApp/source in different folders with special names.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=35)** Share code always lives under a folder named Common Main.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=40)** Under this folder, there's a folder for composed resources and for Kotlin code.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=48)** Resources folders are used to store images, translatable strings, plurals fonts, raw files, that sort of thing.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=59)** The Kotlin folder contains the actual shared code with the keywords and code references to software libraries that provide shared code implementations in Kotlin Multiplatform.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=73)** In addition to the shared code folder, common Main, we'll have another folder for each platform or closely related group of platforms.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=83)** For example, iOS here is a group of platforms.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=87)** It includes ARM 64 for most actual iOS devices, and ARM 64 simulator, or x64 simulator for simulator is on Intel devices.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=100)** Because iOS is actually a group of platforms, it sometimes makes sense to share code across all of iOS, and sometimes it makes sense to make different code for each architecture.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=111)** You might want to use the more specific architectures if you're calling code that only works in that architecture.
>
> **[2:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=120)** Likewise, we can share code for all JVM platforms that use methods specific to the JVM, or we can create code under Android and desktop that are more specific than the JVM.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=134)** Each time we create both expect and actual implementations, we can decide for ourselves as a programmer which level is most appropriate to create our actual code implementation at.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=148)** Otherwise, each specific platform has its own code in directory name platform main.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=154)** For example, desktop is Desktop Main.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=157)** Android is Android Main.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=159)** iOS is iOS Main for all iOS platforms, device, and simulator on all architectures.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=165)** But you could get more specific like iOS simulator, ARM 64 main or less specific like Apple Main, which also supports Watch OS and Vision OS.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=175)** Web has wasmjsmain, which supports writing both web assembly as well as JavaScript code from Kotlin.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=185)** You might wonder how Kotlin knows which platforms you're supporting.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=189)** All of these settings are defined within the standard build system called Gradle.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=195)** You can also try Amper instead of Gradle, but that build system is still very new and less tested with complex configurations.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=202)** In Gradle, you would look in the main module directory for a file called Build Gradle.kts.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=212)** Within the Kotlin block, right here, you'll see multiple targets defined.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=217)** Ours has wasmjs, Android Target, Desktop, which in this case is a JVM target and iOS target.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=231)** We also define a desktop target by naming our separate JVM Target Desktop, as you can see here.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=238)** So you've seen that you can place your code in different folders for each module to support different platforms.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=244)** This doesn't really demonstrate how useful Kotlin Multiplatform is though.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=249)** What really makes KMP exciting is the plethora of useful libraries that provide both the expect and the actual code for us to use.
>
> **[4:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=260)** By using these libraries, we can access the network, store data in databases, key platform settings and key value stores, manage dates and times, handle dependency injection across platforms, and provide resources for all platforms.
>
> **[4:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/multiplatform-project-structure?u=76281980&t=276)** In the coming videos, I will demonstrate some of these libraries that provide all of the code for each platform for you, and I will show you how they will make your work much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (7), [[Android]] (4), [[Gradle]] (4), [[Kotlin Multiplatform]] (3), web (2)
> **Code Identifiers:** ios (9), composeapp (2)
> **Env Vars:** jvm (5), arm (3), kmp (1)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 3. KMP and Swift

[↑ Back to Table of Contents](#table-of-contents)

#### Using Kotlin from Swift code
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=0)** - [Instructor] The Kotlin native code generator was designed to interoperate seamlessly with Objective C code, Apple's original language of choice.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=9)** However, most developers who write code today for Apple devices use the Swift programming language, which offers more modern features than Objective C.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=21)** This video demonstrates how you can call Kotlin functions from your Swift code, and how you can handle Kotlin types from return variables.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=30)** Kotlin has top level functions and properties that can be called from anywhere.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=34)** These get mapped to Objective C and to Swift by using the Kotlin file name.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=40)** For example, a function, called Expect Fund platform function, and a file called Greeting KT would be called, greetingkt.platform function in Swift.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=52)** You can simply call the function in Swift by passing any appropriate arguments.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=58)** So let's try creating a new platform function here that does not depend on compose multi-platform or Jetpack compose.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=68)** So now we have to implement it for all of our platforms.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=76)** It's already in web assembly.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=79)** And here for iOS, I'm going to implement it.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=86)** I'll put it on the IO dispatcher so that it can run without blocking the main thread.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=91)** Copy the same code here,
>
> **[1:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=103)** and then here, we'll launch this to the main dispatcher
>
> **[1:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=111)** so that we can use the main thread, which is required to make UI updates on Android or iOS.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=126)** There we go.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=128)** So now we have this new call platform func, and we're going to go over to Xcode and add it to our Swift code.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=136)** First. We should probably remove this from our shared code.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=139)** I've done this right here.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=140)** I made it commented out, and then I go over to Xcode.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=146)** So just to show you here, if I start typing, greeting.kt, it auto completes it, and if I put platform func, should find that as well.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=159)** Looks like it hasn't built yet, so I might need to temporarily hold off and build.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=168)** I'd say, greeting_ioskt.platformfunc.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=176)** And now it found it.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=179)** Now you're going to see that when it builds and runs, the simulator is going to show the background changing between teal and yellow again.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=188)** If I remove this, run it again, it won't do that.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=194)** So you've just demonstrated how to directly call our code from the Swift code, for our Kotlin code.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=202)** You'll notice that we can make calls directly from Swift to Kotlin.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=206)** While this is impressive and looks easy, the hard part is usually designing the types of return values, such that it's easy to map from Kotlin types to Swift types.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=216)** If you want to learn how to do anything specific in Swift from Kotlin code, I recommend looking up the language construct you're trying to use within the Kotlin Swift interopedia.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=226)** It can answer any questions about what is supported out of the box and how best to use it.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=231)** For example, Kotlin seal classes and Swift's enum classes are often compared and they work quite similarly.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=238)** However, Kotlin seal classes aren't neatly translated into Swift's enums simply because Kotlin code is interpreted as Objective C, which has no similarly advanced concept.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=252)** However, there are a couple easier ways to use Kotlin from Swift.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=256)** First, a consulting company, called Touch Lab, created a third party library called Skie.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=262)** This library inspired an official Kotlin, multi-platform support library, called Swift Export.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=268)** These solutions provide easier translations between Kotlin and Swift, such as Seal classes and co-routines.
>
> **[4:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/using-kotlin-from-swift-code?u=76281980&t=276)** We'll dig deeper into this, in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (16), [[Swift (Programming Language)|Swift]] (16), [[Xcode]] (2), [[Programming]] (1), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** ios (2), greeting_ioskt (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** greeting.kt (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Making it easier with Swift export
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=0)** - [Instructor] In our previous video, we called our Kotlin code directly from Swift.
>
> **[0:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=4)** However, there are some small issues that may become annoying to Swift developers having to use our Kotlin code.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=11)** We discuss Kotlin Sealed classes as one example of a type that will be difficult to work with in traditional Kotlin Multiplatform code.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=19)** In this video, we'll discuss the solutions to make KMP code much easier to integrate for Swift developers.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=26)** After KMP came out and developers discovered some minor difficulties with certain aspects of the integration between Kotlin and Swift, a KMP consulting company called Touchlab realized that there could be a commercial opportunity in making it all easier.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=41)** In fact, this is the same company that wrote much of the documentation for KMP.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=47)** They wrote a product called Touchlab SKIE, S-K-I-E, which used compiler plugins to rewrite the code interface to be much easier to use along with Swift code.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=58)** This would help developers use Sealed classes, as Swift enums and Kotlin coroutine code from either combine or async/await.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=68)** After a while, they decided to open source this product, making a once costly library available for free.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=74)** And today, you can use it for your own code.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=77)** However, even though Touchlab SKIE can solve these problems for you, and it's a very viable solution, the core Kotlin team used the SKIE library as inspiration to create an official library.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=89)** Even though it's still young and could change in the coming months, I recommend learning to work with the new official Swift Export Library for KMP.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=99)** While we could work with our existing project template, it seems Swift Export and Compose Multiplatform aren't compatible just yet.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=106)** So, let's open a special Swift Export sample code instead, and I'll explain it.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=112)** You'll need to use Kotlin version 2.1.0 or newer as I have here in the gradle/libs.versions.toml file.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=121)** You'll also need to set experimental setting in the gradle.properties file, kotlin.experimental.swift-export.enabled=true.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=131)** This setting will eventually become default, but we're adding it here today to say that we want to use the new feature.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=137)** even though some details may change.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=140)** Experimental language features in Kotlin don't mean that they're broken or that they're going to blow up.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=145)** We're signing onto the idea that any app that we write today may require code changes one day if we upgrade the version of Kotlin, and if the feature is implemented differently in the final version of that language feature.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=160)** After doing that, we're going to need to add a swiftExport block to the project/shared/build.gradle.kts file for the shared code.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=170)** Here we have the swiftExport Block.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=173)** Just be sure to use the quick fix when you create it to import ExperimentalSwiftExportDsl OptIn or none of this will work when we try to build.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=184)** Also, make sure that the module name matches its old name, Shared in this case, and the flattenPackage structure should mimic your project structure.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=193)** Here it's com.github.jetbrrains.swiftexport.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=198)** At this point, you should gradle sync.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=200)** You can press the Elephant or the Sync Now button if that appears, and it should reimport the Gradle script and pick up any changes you've made.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=209)** Finally, you may want to open the Project X code and verify that the correct build phase is getting used.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=217)** This is so that Swift Export gets called instead of exporting our shared code framework to Objective-C.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=227)** Now let's look at the actual Kotlin code usages and X code.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=231)** If we open ContentView.Swift and command click on useClassFromA here, we'll dive into the shared code framework.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=242)** I have to wait for it to build first.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=245)** There it is, useClassFromA.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=250)** As you can see here, the exported framework is written in Swift instead of Objective-C as it usually would.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=257)** From here, we can add any custom code we want, including using Sealed classes that convert to enums from Kotlin to Swift.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=266)** Also, I'm confident that a solution will be found to allow using Composed Multiplatform code eventually within Swift Export modules.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-it-easier-with-swift-export?u=76281980&t=273)** Until that time, we can still use Swift Export as of today to provide business logic to our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (16), [[Kotlin]] (12), [[Kotlin Multiplatform|Kmp]] (5), [[Gradle]] (5), feature (3)
> **Env Vars:** kmp (5), skie (3)
> **Code Identifiers:** swiftexport (2), useclassfroma (2), flattenpackage (1)
> **File Paths:** gradle/libs.versions.toml (1), kotlin.experimental.swift (1), project/shared/build.gradle (1), contentview.swift (1)
> **CLI Commands:** make (2)
> **Versions:** version 2 (1), 1.0 (1)
> **UI Navigation:** open the (1), click on (1)
> **Exercise Files:** template (1), sample code (1)

#### KMP together with SwiftUI
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=0)** - [Instructor] In the last video, we learned one new way to make the integration easier between Kotlin and Swift.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=7)** In this new video, we'll use Kotlin together with Swift UI.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=11)** Swift UI is Apple's recommended user interface framework.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=15)** It's also declarative like Compose and has a lot of the same nice usability features.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=22)** Why would you want to work with Swift UI even when Compose multi-platform is available?
>
> **[0:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=28)** Maybe your company already has a lot of highly paid Swift UI developers for Apple products, and they want to produce the cleanest user interface integration that they can, even if it costs more or has to be redone for an Android Compose app.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=42)** Maybe you want to use existing Swift UI views that were custom designed for the problem that you're tackling.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=48)** Whatever the case is, there's plenty of support for using Kotlin together with Swift UI.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=54)** Here's a webpage that JetBrains provides that tells you how to use the two of them together.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=59)** Explains in good detail.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=61)** It's a little bit painful, but it can be done.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=63)** You can use Swift UI inside of Compose multi-platform.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=67)** However, Touch Lab has actually provided their own support library to make it easier to integrate Swift UI from within Compose.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=75)** It's called Compose Swift Bridge, and you can check out the sample here.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=80)** I had to make some little tweaks to it.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=81)** So you should check out the actual sample code we're providing to you in order to make sure that the Java tool chain is set up correctly so that you can run it.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=89)** This is a very big project.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=90)** It may take a long time to build, but it very nicely demonstrates how easy it can be to include Swift UI views from within your Compose multi-platform code.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=100)** Here we can take a look at this map view right here, and you can see there's this ExpectSwiftView annotation.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=108)** This is put there for use by the Compose Swift Bridge Library, which then goes through as a plugin and will replace this stuff with a version that will work to call Swift UI from inside of Compose very easily.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=124)** They actually have several different versions.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=126)** They get ut to work with Skie, S-K-I-E, as well as other methods of integrating your views.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=132)** Here I have the project running with everything in Compose on Android, and over here we have both a UI kit as well as a Swift UI view here for the map view.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=143)** And this is getting integrated, this native map view, into this shared code here.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=149)** So since I have the same function, new title, I can paste in actual coordinates of where LinkedIn is.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=157)** I can go ahead and do the same thing over here with the Android code as well.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=162)** And you'll notice everything works just fine even though I'm using both Compose as well as Swift UI at the same time.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=171)** So there you go.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=172)** The title isn't showing up, but that's because it's a different type of view, and it's not showing titles at this moment.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=176)** So this is the Google Maps from Android, and this is a different map view from Swift UI that's highly custom for iOS.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=184)** That's Apple Maps, this is Google Maps.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/kmp-together-with-swiftui?u=76281980&t=187)** It's all just working natively in exactly the way you'd want it to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (16), [[Jetpack Compose|Compose]] (11), [[Android]] (4), [[Kotlin]] (3), [[Google]] (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Code Identifiers:** ios (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** sample code (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)


### 4. Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### Recommended architecture with MVVM
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=0)** - [Presenter] Why is software architecture important?
>
> **[0:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=3)** I often joke, "Never argue with an app developer.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=8)** We're always changing our views."
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=11)** Architecture is important because the user interfaces in our app are constantly changing, and it's vital to keep them separated from other layers for a variety of reasons.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=22)** Ever since Microsoft introduced the Model-View-ViewModel or MVVM architecture in 2005, it has consistently been one of the most popular app architectures.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=34)** Google recommends it for Android apps.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=36)** Most iOS apps also implement it.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=39)** We should talk about architecture and why it matters, but I don't intend to go over all of the options in this course.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=46)** MVVM makes special sense for Kotlin Multiplatform development in part because Google publishes opinionated KMP library implementations of this architecture for both Android and iOS apps, and even desktop and others, but it is not the only option.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=63)** For this section of the course, a key question you might have is why is software architecture important?
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=70)** A common answer everyone uses is it makes testing your code easier.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=76)** By separating the view from the view model and the rest of your data, it's easier to verify that each step is producing the correct output that you would expect.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=85)** However, there is another reason specific to multiplatform development.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=91)** Structuring your application will make it easier to verify your code's behavior after you decide which layers should be shared and which should be customized for each platform.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=102)** You want to be able to verify that all platforms produce the correct answer at each layer regardless of the underlying library code.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=111)** Most modern software architectures exist primarily to separate the view or the user interfaces from the logic code.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=119)** This is important because views can change very often whenever the design changes, but the underlying logic generally does not change very much, and the logic result should be tested.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=130)** MVVM creates a simple binding from the model data to the VM model to the view that works very well with modern declarative user interface libraries like Compose and SwiftUI.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=144)** Many useful support libraries have been written to make MVVM easier to implement in Kotlin Multiplatform apps.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=153)** It is also important to note that using a view model makes it easier to change decisions later about how to implement your user interface.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=162)** Until a Compose Multiplatform came out, most Kotlin Multiplatform apps only use shared code up to the view model layer.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/recommended-architecture-with-mvvm?u=76281980&t=170)** By having a clear separation between layers, it makes it easier to later change your decisions about which code is shared at which layer and which code is instead unique and customized to each platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin Multiplatform]] (3), [[Software Architecture]] (2), [[Google]] (2), [[Android]] (2), data (2)
> **Env Vars:** mvvm (4), kmp (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (2)
> **Speakers:** - [presenter] (1)

#### Google ViewModel
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=0)** - [Instructor] To support compose multi-platform, Google offers the common view model library as part of its Jetpack series of libraries.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=9)** In this video, we'll use Google's common view model to share code across platforms.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=15)** First, we're going to go into our project, which I have here, and we have to paste in the Gradle dependency for lifecycle view model compose into the dependency section for our app.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=30)** As you can see here, I already have it added to my libs versions two ml file.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=34)** This is the version number, and here, I use the version number further down right here, and referencing it here.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=43)** That's the one.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=44)** You have to correctly spell all of this.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=47)** We're going to put a link in so that you can see the documentation for how to add this.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=51)** It's right here.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=54)** You're basically doing the same thing here, except we're just using the Gradle version catalogs to define it, right here.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=61)** So we've added the lifecycle view model compose, as well as androidx-lifecycle-runtime-compose, and androidx-lifecycle-viewmodel-android, okay?
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=73)** And then we need to add these to our common build, Gradle KTS file.
>
> **[1:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=78)** So we come down here, you can see, Android has nothing special added, but we've added all these lifecycle, lifecycle view model, lifecycle runtime compose, lifecycle view model compose, all of them to the common main shared dependencies.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=92)** Didn't have to touch desktop, iOS, or Android, just the common section.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=98)** And that takes care of that.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=100)** Now, we should start to create a common view model for a composed multi-platform project.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=105)** So if I go in here, I did create it already, but we can talk about it, if you're doing this for your own projects, don't call it main view model, probably.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=117)** I mean, it's up to you.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=118)** I recommend choosing a descriptive file name appropriate to whatever screen or user interface level you're writing for.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=125)** We start by declaring a new class extending from view model, which is defined as androidx-lifecycle-viewmodel, even though it's a common shared code version of the Android view model.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=139)** To use best practices, we create a UI state.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=142)** This is a data class typically, and we would expose the UI state with a public version of the private variable.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=152)** You're using the as state flow function.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=154)** So we have a mutable state flow and a immutable state flow here.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=161)** This creates a stream of updates which, each change we make can be easily observed by our composed code.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=168)** Because we used a mutable state flow that we kept as private, it can only be changed by methods inside of our view model.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=177)** This is important, but we can observe a public version instead that is not modifiable.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=184)** This is helpful for encapsulation to prevent external code from becoming dependent upon the inner workings of the view model never changing.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=193)** Because let's be honest, our change code is constantly changing, we're always changing our views.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=199)** Now let's modify our app KT code here to depend upon our new common view model.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=205)** You'll see we have a view model passed into our app, and this is being created by a default value.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=214)** This is a default variable.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=216)** So this function here is a builder that creates a view model, and we have to do this special version of the view model function because in Android, we can use injection and have it handle it automatically.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=233)** But when we're doing this in any other platform, we don't have all of the components that we need so that this block here has to define our view model.
>
> **[4:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=243)** You could possibly inject it into this block, but this here has to be where it gets defined for a common view model.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=251)** After we've added it here, we can then make use of it.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=254)** Here, we're using the UI state collective state.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=257)** Remember, UI state, we created as the public, non-modifiable UI state for our view model.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=264)** And the collective state function is very important because it converts our data class here into a state's data class.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=273)** So now, state is one of the core ideas behind compose, state allows us to automatically observe changes as they occur and update our UI in real time.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=284)** Okay?
>
> **[4:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=287)** Finally, we want to replace the code, updating the show content variable here.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=291)** So we have this view model toggle showing content function that I defined, and this will update the UI state.
>
> **[4:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=299)** The UI state update function here that we're calling on our state flow allows us to atomically update the value of our mutable state flow.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=310)** And here, we're using the copy function.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=312)** This allows us to change one variable without touching any other part.
>
> **[5:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=316)** We don't have to define everything all over again.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=318)** We can just say copy it, change this one parameter and nothing else.
>
> **[5:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=323)** And so this will autonomically make the update in a way that won't break when we're working on multiple thread.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=330)** And then this will present the greeting if I go back here.
>
> **[5:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=334)** When we tap on the button, it will then change the value of the show content variable here to then make this visible.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=344)** We're not even using this anymore, so I can get rid of that.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=348)** So we present our greeting using state value show content, and then it uses state value greeting to reflect the actual greeting.
>
> **[5:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=357)** So state flow must be unwrapped with the value call, as you see here, to obtain its current value.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=363)** Now we can run our app and see that the functionality has not changed, but now we're providing it with a view model that leads to better architecture and better testability.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/google-s-viewmodel?u=76281980&t=375)** There it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (7), [[Android]] (5), [[Gradle]] (3), data (3), [[Google]] (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3), defined as (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** kts (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)


### 5. Sharing Network

[↑ Back to Table of Contents](#table-of-contents)

#### Adding Ktor to your project
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=0)** - [Instructor] These days, there's hardly a single app that doesn't need to talk to a network.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=6)** Even apps that used to only work offline nowadays use the network to check for updates or to send crash reports or analytics data.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=15)** As a result, you'll very likely need a solution for talking to clients or servers over the internet.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=23)** Fortunately, the company that originally made Kotlin also builds a multi-platform networking library that works for you as both a client and a server.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=32)** It's called Ktor, K-T-O-R, and it supports the HTTP REST protocol that is most popular on the internet.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=42)** We're going to make a good number of changes to our example project in this section.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=46)** These changes will make it possible to handle network requests and responses from Kotlin multi-platform code using the Ktor library.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=54)** Let's start from the example project for the section.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=56)** I'll describe each of the changes that I made in order.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=60)** First, we're going to make changes to our Gradle configuration for the app.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=65)** Again, Gradle is the primary build system Kotlin uses for most apps.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=70)** You need to tell Gradle about which library dependencies to include in your app.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=75)** You start by updating the version catalog first, which I have open here, and then you can add the libraries from the version catalog to the build.gradle.kts file.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=86)** In order to use Ktor to make REST requests and to parse the results with the Kotlinx serialization library, we're going to need to add five libraries.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=97)** You can see I added the version here for Ktor, and I have five libraries down below here.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=104)** These five libraries are: ktor-client-core, ktor-client-okhttp, which is a very popular JVM HTTP library, ktor-client-darwin, which Darwin is a Apple reference, ktor-client-content-negotiation, and then, finally, ktor-serialization-json.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=127)** We need all of these.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=129)** And then we add as well a new plugin for Kotlinx serialization.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=134)** The plugin will help serialize our types for us to and from JSON, in this case.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=142)** We'll also need to provide this build plugin.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=145)** We need to provide the version catalog with the details it needs to access these libraries.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=149)** We do so by providing a full module version or name here, as well as a version reference to Ktor.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=157)** You can see they're sharing the same version here.
>
> **[2:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=159)** If there were any reason why you would want a different version of any one of these, you would need to make a new version reference or just cut this off and then put the version in here.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=170)** Either way.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=172)** Because they're all the same version number, I'm referencing Ktor five times here.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=176)** The easy way to find these module names and version numbers is to search for these libraries on GitHub and to copy the module name from either the README file on the front page of the library or from its docs.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=189)** So we've already entered the names and version numbers here for the five libraries in one plugin.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=193)** So let's focus on the changes now for the build.gradle.kts file.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=198)** Again, this is under composeApp.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=200)** It's specific to our app.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=202)** Here we're looking at the build.gradle.kts file, and we see that the plugins, the very last one here, we've added our Kotlinx serialization plugin.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=212)** This has to be at the top of the file.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=213)** You cannot put plugins later down.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=216)** It's dependent on the order, and so this matters.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=219)** These are also dependent on order, but, generally speaking, they seem to not mind being in the wrong order unless it's something that's very, very integral, like Kotlin, for example.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=232)** Usually, I just add new third-party libraries to the end of the plugin block.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=238)** As we come down here, under androidMain, we've added the one OkHttp library, which provides our Android implementation.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=248)** Down here under commonMain, for our share code, I added three libraries: ktor.client.core, ktor.client.content.negotiation, and ktor.serialization.json, okay?
>
> **[4:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=261)** Finally, for iOS, we add the Darwin Library.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=265)** And for desktopMain because we're using JVM for desktop, I'm using the OkHttp library that works for both Android and for JVM generally.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=275)** There we go.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=277)** So next we want to make sure that we have the necessary permissions to reach the internet.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=281)** This is important, especially for Android, because an Android app will not function without the necessary permission.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=289)** Here you can see I added the uses-permission: android:name="android.permission.INTERNET."
>
> **[4:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=296)** If you don't put that there, nothing will work, and that is just normal on Android.
>
> **[5:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-ktor-to-your-project?u=76281980&t=301)** At this point, we're ready to set up our network models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ktor]] (14), [[Android]] (7), [[Gradle]] (6), [[Kotlin]] (4), [[JSON]] (3)
> **Env Vars:** jvm (3), http (2), rest (2), json (1), readme (1)
> **CLI Commands:** make (6), find (1)
> **Code Identifiers:** composeapp (1), androidmain (1), commonmain (1), ios (1), desktopmain (1)
> **File Paths:** build.gradle (3), ktor.serialization.json (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Tools:** github (1)

#### Modeling with Kotlinx-serialization
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=0)** - [Presenter] So after setting up our network client, we now need to define the models.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=5)** To do so, we need to make them serializable.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=8)** You'll remember earlier that we set up a build plugin for kotlinx serialization, as well as ctor libraries for json serialization and deserialization.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=21)** I think I'll show you here again.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=22)** This is it, as well as at the top here.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=26)** It needs both a plugin and the dependency.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=29)** So what is Kotlin Externalization?
>
> **[0:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=32)** This is an add-on library for Kotlin provided by JetBrains, for the purpose of converting data between formats through the process of serialization and deserialization.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=43)** Here, we're going to send Kotlin data classes to our networking library, ctor, which our serialization library will then convert into json to send over the wire.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=55)** When we receive a response back over the internet, come back as json.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=60)** We'll want that JSON deserialized back into our Kotlin data classes.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=65)** Kotlinx serialization generates most of the code for us to do this across KMP platforms.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=73)** I use the Hacker News API to provide a simple example, since it does not require us to provide any authentication.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=81)** However, since their json API is polymorphic, we have to use a sealed interface to define our models.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=88)** I'll pull that up here very fast.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=91)** Sorry, models here.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=93)** We use the Serializable annotations as well as the serial name, and we have to have this null response to handle situations where, for whatever reason, what comes back is not of type story.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=107)** As you see here, we have this customized serializer, which I wouldn't need otherwise, except that the API has the capability to return multiple types of objects in a polymorphic way as a generic data type.
>
> **[2:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=122)** So we had to do some complicated stuff here.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=124)** For our code example, we're only concerned with the type of story.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=127)** We had to set a serial name for a type to match it by name specifically.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=131)** Normally, this would be fine without it, but because of the case difference I had to do this.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=138)** We also created a special json content polymorphic serializer, which then handles the different types that are allowed for an item response from the Hacker News API.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=151)** We then have to mark every one of these types here, once, twice, three times, as serializable in order for the Kotlinx serialization build plugin to generate the necessary code to handle serializing them.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=167)** You'll notice our data class for story has all the json attributes here, which are returned in the top stories HTTP response.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=177)** If we set the isLenient setting on our json for ctor library, right here, then we don't need to include every single one of them.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=187)** We can get away with deserializing to a much simpler data class that does not need to handle every attribute returned by the API.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=194)** This can be very useful if your API is adding new attributes regularly, which might otherwise crash your app when you're not handling them.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=202)** You can be inconsistent as long as you have this set here.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=208)** Unless they change the names, for example.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=211)** It can also be helpful to reduce the memory requirements here for storing data that we don't use.
>
> **[3:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=216)** Like, for example, if we don't need descendants or kids or any of this to display our UI, we could just remove it, and this would all be none the wiser as long as we can pass both ways with their story objects.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=232)** You've learned how to serialize kotlin data classes now, to send them over the internet as json, and to handle the json response as a data class.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/modeling-with-kotlinx-serialization?u=76281980&t=241)** This library, Kotlinx serialization, also handles other formats besides json, which you can read about on the project webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (11), data (9), api (6), [[Kotlin]] (5), [[Kotlin Multiplatform|Kmp]] (1)
> **Env Vars:** api (6), json (1), kmp (1), http (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** islenient (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Making network requests
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=0)** - [Instructor] Now that we know a bit about serialization, we want to set up our API.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=5)** We need to define an HTTP client.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=8)** Then we want to create the functions which use that client to send requests and handle the responses.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=15)** So let's take a look at this news API.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=18)** Now, typically we'll want to create our client using dependency injection, but I wanted to keep this example very simple and easy to read.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=26)** At the top of the news API, you'll notice that we created a client variable.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=32)** We gave it the capability to handle JSON serialization by installing the content negotiation module with the JSON block here.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=42)** We are pretty printing and is lenient.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=44)** These are totally optional, but again, as lenient means you don't have to have every single attribute for it to work necessarily unless it's there required.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=53)** And pretty print means that it's going to add all the extra white space to make it easier to read.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=59)** After creating our models, we can write methods to send HTTP requests and to handle responses.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=65)** Here I wrote a getTopStories method.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=68)** This is going to perform http get request.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=72)** As you see here, get, client.get.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=75)** It's referencing this client and we're calling client.get with a URL string.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=81)** It performs an HTTP get request against the Hacker News API to get a list of the top stories by their numeric IDs.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=91)** You see we return list of long and grabbing from the body from this URL.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=97)** Then we take the first 10 IDs returns, storiesIDs.take10.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=102)** This is a Kotlin stream API here.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=104)** Only take the ones that are not null 'cause we don't want ones that are not stories, if there were any.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=110)** And finally, return the details of each of the 10 stories as a list, which we get from this URL.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=117)** So we're actually making 11 requests here and getting the bodies and returning them as a list of story.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=123)** Next, let's take a look at our view model.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=127)** We made a couple of updates.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=129)** First, we of added a news API, which is something we normally, again, provide via dependency injection.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=137)** Second, we've added a suspend function, which can run on a background thread or in case like a Kotlin co-routine on a background thread.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=145)** The suspend function then calls the news API and updates our UI state with the result.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=151)** Again, we're using this update method to atomically update the contents of our UI state.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=158)** And here we're calling this news API.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=161)** You see here in the gutter, we have this call that tells you it's a suspend function call, which means that this is going to suspend execution and it's going to come back later.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=172)** Keep waiting until it gets past it.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=174)** But meanwhile, other code can still run.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=176)** This is a function of Kotlin co-routines to have suspend functions like this.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=181)** So this will wait here again, jumping in and out of the function, allowing things to run while it gets the top stories from the internet.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=189)** Prints the results of just the titles, and then update our UI state and showing this content and adding the top stories to the top stories list in the UI state.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=203)** Now we should take a look at App.kt and our changes to our composed multi-platform UI.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=210)** You'll notice we've added a co-routine scope here, which allows us to run the code in the background.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=217)** So then we come down here.
>
> **[3:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=219)** When you press the button, it launches a co-routine from this default scope and runs our view model code in the background.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=229)** So we'll use the default dispatcher.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=231)** I would actually normally recommend using the IO dispatcher for anything that's internet-based, like network request, but you can get away with this a lot of the time.
>
> **[4:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=243)** Finally, we update the animated visibility section down here to show a lazy column containing the titles of the Top 10 Hacker News stories, as you see here, instead of what we previously showed, which is just a static image and some text from our shared code.
>
> **[4:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=261)** So I'm going to run it here on desktop, and I click that, it spits out the current top 10 Hacker News stories.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=269)** Likewise, I should be able to do this on other platforms.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=275)** Here's an Android and iOS.
>
> **[4:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=280)** Now in practice, you're going to want to provide some kind of error handling for this, possibly retry.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=286)** This is just a very quick, dirty example.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=291)** And as you can see, it's now working on all of the platforms, we had Android, iOS, and desktop.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=298)** What you'll notice though from this code is that we did not have to define any platform specific code other than providing a different client library for each one of the platforms in our Gradle configuration.
>
> **[5:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/making-network-requests?u=76281980&t=310)** It's pretty cool, huh?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (8), [[Kotlin]] (3), [[Dependency Injection]] (2), [[JSON]] (2), [[Android]] (2)
> **Env Vars:** api (8), http (3), url (3), json (2)
> **Code Identifiers:** ios (2), gettopstories (1), storiesids (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** app.kt (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Apollo GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=0)** - [Instructor] While most of the internet is based upon REST, another protocol has also grown.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=6)** GraphQL was popularized by Facebook for managing complex APIs, which would normally be split between numerous microservices.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=16)** The solution makes it much easier as a client to interact with only one endpoint using customized requests rather than making many requests to multiple microservice hosts for the same thing.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=29)** In Kotlin Multiplatform, the Apollo GraphQL Library has excellent support and it's easy to use.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=36)** We're going to integrate the Apollo GraphQL KMP client into our app for accessing the GitHub API.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=43)** First, we're going to add the library build plugin dependency to our Gradle version catalog.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=49)** We open libs.versions.toml.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=53)** This is in our Gradle folder.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=56)** We then add a versions entry for Apollo, a libraries reference for the runtime, and finally, a plugins entry for the build plugin.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=67)** Next we jump over to our app's build.gradle.kts file, which is under composeApp, and we add a plugin under the plugins block at the top of the file, the runtime under a commonMain.dependencies, and finally, an Apollo block.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=88)** Here we set the service name, set a package name.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=93)** This affects the naming of the generated files.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=96)** This affects the package that classes are generated in.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=99)** And finally, we set the endpoint for our Apollo service, as well as the schema file, where it's located.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=108)** At this point, we need to download the schema for our graph.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=112)** We need to go to this URL to download the public schema for GitHub.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=117)** The schema defines what queries and mutations are available for us to perform requests against.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=123)** We can use it to assemble our custom requests and mutations.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=128)** So now we have to copy the schema file we've downloaded to src, commonMain/graphql.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=137)** And it's very important we have to rename it, so the file extension is graphqls.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=143)** This is the new schema extension.
>
> **[2:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=145)** After you've done this and you've put it in place and you rebuild your app, then Apollo will generate code under commonMain that will allow you to access the schema from both shared and platform-specific code.
>
> **[2:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=158)** At this point, we should start writing our queries.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=161)** You can put your queries and mutations in the same directory as a schema file, or you can put in a subdirectory.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=168)** I recommend using a subdirectory.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=170)** This helps you find your queries later as well as your mutations by the feature that they're associated with.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=178)** The only difference between a query mutation is that a query returns data from the API without changing any, whereas a mutation is meant to change the data remotely.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=189)** It's like the difference between a GET request and a POST or a PUT request when you're using REST.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=195)** And this is what a query looks like.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=197)** If you haven't used GraphQL, you can look all this stuff up online and learn how to create your own.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=203)** But I've created one here to search the top repos, grab the first 10, sort them by the number of stars they have.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=210)** So this is going to give me the 10 most popular repositories on GitHub by a number of stars that are also public.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=218)** Before you're able to test and use your queries, though, you will need to authenticate to the GitHub GraphQL API.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=225)** This is going to require two steps.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=227)** First, you need to create your personal access token for the GitHub API.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=231)** Then you need to create an authentication interceptor, which I did here for Apollo, and then apply it.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=238)** This is a temporary key, it'll go away.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=241)** To create the token, simply go to this URL and make sure that you grant it the appropriate public repo permission.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=250)** The HDP interceptor has an example in our sample code under MainViewModel.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=255)** Here we're adding both an authorization interceptor and a logging intercept as well.
>
> **[4:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=260)** Two different interceptors in the list, and we're creating our Apollo client here and pressing the server URL here for it.
>
> **[4:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=271)** Normally you would inject this via dependency injection.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=275)** So now we can write this function here to show our top repos.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=278)** You'll notice it's a suspend function, which is important in Kotlin because the suspending function can be run on a Kotlin coroutine on another thread.
>
> **[4:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=287)** This allows us to run a background request while our app does not have its UI frozen, which would be very bad, especially in say, a mobile app, for example.
>
> **[4:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=298)** In a true MVVM app, you would want to go one level deeper than this and actually call this function from a repository class from the view model, rather than just calling directly from the view model.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=312)** So also, we should set up our Apollo client, which we do here, and we set the server URL and we add the interceptor.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=319)** And then finally, we call the query, which we execute, and we grab this data object here, dataAssertNoErrors.search.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=329)** That will return the list of the top repos.
>
> **[5:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=334)** And then finally, we update the _uiState.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=336)** Again, this is an atomic operation.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=338)** It's going to change the _uiState with the copy function where we can update just two properties without changing anything else.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=347)** And we can now show the app running as expected on each platform.
>
> **[5:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=352)** You can see, I just click that and wait.
>
> **[5:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=356)** And here, this is the top 10 GitHub repos on GitHub sorted by stars.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=362)** Here's it working on Android.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=366)** And finally here we have it running on iOS.
>
> **[6:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=370)** So we've learned how to communicate easily across the internet using both REST and GraphQL models by writing only shared code.
>
> **[6:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/apollo-graphql?u=76281980&t=378)** I hope you can quickly realize the power this provides to you as a programmer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[GitHub]] (7), api (4), [[Representational State Transfer (REST)|Rest]] (3), [[Gradle]] (3)
> **Env Vars:** api (4), url (4), rest (3), kmp (1), post (1)
> **Tools:** github (7)
> **Code Identifiers:** commonmain (3), composeapp (1), dataassertnoerrors (1), ios (1)
> **API Endpoints:** get  (1), post  (1), put  (1)
> **Exercise Files:** download the (2), sample code (1)
> **File Paths:** libs.versions.toml (1), build.gradle (1)
> **CLI Commands:** find (1), make (1)


### 6. Sharing Database

[↑ Back to Table of Contents](#table-of-contents)

#### Adding SQLDelight to your project
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=0)** - [Narrator] Now that we know how to write shared network code, the next logical step is to figure out how to store that information.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=7)** We'd like a single database that works across all platforms, which makes it simple to store and search for information.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=15)** We can use this as a network cache, as storage for data created by users, or in any way we'd like.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=23)** For Kotlin Multiplatform, the most popular and flexible option is SQLDelight, a KMP library written by the same engineers who built the Cash App.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=34)** Let's start by adding SQLDelight, to our existing project.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=38)** First, we need to add the plugin and database drivers for each platform.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=43)** We do this in the gradle libs.versions.toml file.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=48)** Each of these database drivers provides everything you need to both query and write data to an SQLite database on each supported platform using KMP code.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=58)** So, let's look at the libs.versions.toml file.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=62)** We'll add one plugin and three database drivers: Android, native for iOS, and JVM for desktop.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=69)** Here we put the version in.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=73)** We add the Android driver, the coroutine extensions for working on background threads, or that sort of thing, a native driver and JVM driver.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=85)** Finally, we add a plugin at the bottom.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=88)** Then we go over to our composeApp, buildgradle.kts file again.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=94)** We add the plugin at the top.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=100)** We add the Android driver under androidMain.dependencies.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=104)** We add the coroutine extensions under commonMain.dependencies.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=110)** We're actually adding Linux datetime and Apollo datetime.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=114)** It's useful because we needed it for the GraphQL, but we also need date time to handle the date and time types in our database.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=124)** For iosMain, we add the native driver.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=126)** And then in desktopMain, we're adding the JVM driver.
>
> **[2:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=131)** All of that right here. Okay?
>
> **[2:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=135)** And then we come down here, we create a SQLDelight block with databases.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=138)** I'm creating one called cashDB, and I'm sending a package name here.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=144)** So, next we want to create the queries that we're going to need to use.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=150)** So, here we have both TopRepos for GitHub, and we have TopStorys for Hacker News.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=157)** So, the TopRepos, we're going to create a table here.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=160)** This is all SQL code.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=162)** If you're not familiar, you can look online and learn how to write SQL.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=166)** And then we have created a selectALL function, an upsert function, upsertFullRepo, and a delete function.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=175)** SQLight does actually have a native upsert function in newer versions, but because not every platform supports the newest versions out of the box, we're going to simplify here by using INSERT OR REPLACE instead.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=189)** Likewise, we're doing the same thing with TopStory.
>
> **[3:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=191)** So we have a selectAll, which will select star from TopStory, and order them.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=197)** And then two upsert functions, and a delete function.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=201)** I'm demonstrating here with the two different upsert functions, that you can either allow the user to pass in every value like this, or you can have functions where these are pre-specified, or you can have one where it simply takes all of the values allowed for that database entry, and it's a single question mark that fills all of them in for you.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=223)** Very simple.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=224)** So, all of this is just SQL code, and it's going to be used to generate source code that we can use from Kotlin Multiplatform.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=233)** So, then we can go over to create the actual functions.
>
> **[3:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=237)** If I go into my common code here, here I have a expect fun createDriver function, and then a createDatabase function.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=249)** So, my createDatabase function is what I would call from common code.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=252)** It's using the createDriver function then to return the CacheDB database.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=258)** At that point then we have to, of course, define the actual functions as you see here.
>
> **[4:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=265)** For desktop, we use the JdbcSqlightDriver that we've imported right here.
>
> **[4:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=271)** Then we have iOS. We have a native SQLight driver.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=275)** We just named it test.db for the database file name.
>
> **[4:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=279)** And finally, on Android, we have to do something a little special because Android requires context.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=286)** Context is a very powerful object in Android.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=288)** You do not want to leak this object because it uses a lot of memory.
>
> **[4:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=292)** Here we are referencing our app object.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=295)** I had to create a special app object for our project to provide the application context, as you can see here.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=304)** This is all special for Android.
>
> **[5:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=305)** If you're not familiar with context, it's something you always just need.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=309)** I prefer not doing this, and instead using dependency injection here if you can.
>
> **[5:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=316)** But here we've created our AndroidSqlightDriver.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=319)** This will allow Android to access the database.
>
> **[5:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=322)** Now that we've added all the necessary dependencies as well as methods to set up the database drivers, we will need to define any queries that we want to provide.
>
> **[5:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/adding-sqldelight-to-your-project?u=76281980&t=331)** SQLDelight provides some basic type safety that makes it easier to write these, and I'll cover that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), [[Android]] (8), next (3), [[SQL]] (3), data (2)
> **Code Identifiers:** ios (2), selectall (2), createdriver (2), createdatabase (2), composeapp (1)
> **Env Vars:** jvm (3), sql (3), kmp (2), insert (1), replace (1)
> **File Paths:** libs.versions.toml (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### Setting up your database and adding objects
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=0)** - [Instructor] So now that we have SQL Delight set up in our code base, we need to make sure that the queries are defined for our database.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=8)** We took a brief look at these in the last video.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=9)** I just wanted to go into a little more detail.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=12)** So we had to create these two .SQ files within the SQL Delight folder in common made.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=20)** Each file defines the SQL commands to create the database Table and Fields.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=25)** Plus it defines any queries like select or SQL methods to update the database, like inserts, updates, replaces, or if supported upserts.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=36)** Take a look at the files I created here.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=39)** When we create the table, we set the field types and their constraints.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=45)** The first field is almost always the ID Field, ID Fields are special in databases.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=50)** Nearly everything gets an ID because it's the only way to link or join data between objects reliably.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=57)** In general, IDs are never allowed to be null, and they almost always have the auto increment keyword.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=63)** That means you can pass null to create an object and it'll automatically set it to the next ID.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=70)** After that, we set the names and types for each field in that table.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=75)** String types are text, lungs are integer, doubles are real.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=80)** Binary types are blob.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=82)** If you want special support for float into short types.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=85)** You can also add special type adapter libraries for SQL Delight when you'd prefer not to do manual type conversions.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=94)** All these types can also have the special constraint, not null.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=99)** Not null, of course, means that there must always be a value passed for this variable or parameter.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=105)** It cannot be null.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=107)** So this is useful in Kotlin because then you don't have the question mark and have to deal with null safety and optionals.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=114)** You can create custom queries against database by using the select keyword.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=119)** You can add new items to the database with insert and you can update existing items.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=125)** With update, you can then delete from an item from the database with delete, and this is taking an ID so that you can choose which one to delete.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=134)** You can use upsert to either insert or replace an item if it already exists.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=142)** If you're having trouble filling out the SQL statements for your models, I recommend looking up examples on the internet.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=147)** SQL can get quite complicated, especially for many to many relationships or complex joins between objects.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=154)** Once you've got the SQL right here in these two files, SQL Delight will generate the code that takes to make type safe calls to your database.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=162)** SQL Delight also supports transactions, which is a way of performing multiple SQL operations where if anyone fails, then all of it rolls back.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/setting-up-your-database-and-adding-objects?u=76281980&t=174)** In the next video, we're going to take a look at using the generated queries from this code, from these .SQ files in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11), database (7), next (2), [[Databases]] (1), data (1)
> **Env Vars:** sql (11)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating queries
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=0)** - [Instructor] Earlier we added database models for our top story and top repo types.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=6)** These SQ light files provide SQL delight with all the generated type safe code for queries that we'll be able to use in our project.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=16)** Now we're going to use that generated code.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=18)** The first thing that you should do is either rebuild your project or run the generate SQL delight interface Gradle task.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=26)** This is going to generate the code to make queries against our new database models.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=31)** And after we've run it, now that we have the generated code, we can add code to our view model to add the data to our database and to query it.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=41)** So normally in a complex app, it's not unusual to have a repository class that will handle the complex caching strategy between your network and your database, and also, which isolates that complexity from your view model.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=55)** You will also need a reference to your database class in the view model.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=60)** One would normally inject that with dependency injection, but we haven't covered that yet.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=64)** So for here now we're just going to add it directly here.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=70)** Let's add two methods for each of our models, top stories and top repos.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=75)** For each, we're going to want a query method to return each item in the database and an insert method, which will attempt to upsert the new data from the network.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=86)** Beware that upserts referred to an SQ light data method that may be newer, may not be available in the default database on each platform.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=94)** As a result, we're using insert update instead, which is a little bit less efficient, but does the job.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=101)** For each of these methods, this inserts top stories and database, insert fake story and top repos from database.
>
> **[1:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=110)** We're going to access the new classes available from our database class to directly call generated Kotlin methods.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=118)** These classes and methods are named based upon the file names and the query names, like topRepoQueries.selectall, topStoryQueries.upsert.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=130)** Here we have top story queries, upsert and topStoryQueries.selectAll.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=136)** These are all based upon the methods we created here.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=141)** So to upsert the new stories from the network into the database here, we call database.topStoryQueries.upsert for each story and to query the top stories from each database, we need database.topStories.selectAll.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=162)** We've learned how to insert values into our database and how to make queries against it.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/creating-queries?u=76281980&t=167)** In the next video, we'll learn how you can use Kotlin Coroutine flows to actually watch the database values in real time and react to them as they update in our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (17), data (3), [[SQL]] (2), [[Kotlin]] (2), [[Gradle]] (1)
> **Code Identifiers:** topstoryqueries (3), selectall (2), toprepoqueries (1), topstories (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Going with the flow
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=0)** - [Instructor] If you've used reactive coding methods, you'll find Kotlin coroutine flows immediately familiar.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=6)** Much like observables and subjects in Rx flows offer a means of watching a value as a stream of values that changes over time while we observe it.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=18)** In the case of database programming flows allow us a mean to watch values in our database and to react immediately in the user interface whenever any value changes.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=31)** SQL Delight offers the possibility to query our database in a manner that observes the stream of updated values as a Kotlin flow.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=40)** To do this, we first need a new library.
>
> **[0:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=43)** We added it already here, but that is SQL Delight coroutines, extensions.
>
> **[0:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=50)** So we go into this Libs versions 2 ML file in the Gradle directory and add this right?
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=56)** If we haven't already, we can then add it to the apps, build Gradle KTS file again under compose app build Gradle KTS, and here we go into Common Maine and we add Libs SQL light, coroutines extensions.
>
> **[1:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=73)** At this point, we can simply Gradle sync to make sure we have the library there that's either hit sync now or press the elephant.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=82)** And then we use the new function as flow, which allows us to convert our one-time database results instead into a flow of results changing over time.
>
> **[1:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=95)** Instead of one list of top stories, we get a series of lists of top stories, each one representing the new values in our database.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=108)** Now we can add changes directly to our database and then watch as they're immediately applied and added to the user interface.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=115)** So we're going to add a new text field and a button to insert a fake story into our Hacker News top stories with a very high score so that it appears at the top.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=127)** Then we'll add an order bias score descending to the top story thing here.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=133)** When we do our select, the order by score descending and that will make certain that our new fake story appears on top.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=142)** And then when we add our fake story, this will prove that we can write to our user interface and instantly track the changes and even animate them as they appear in our view.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=153)** So I'm going to do that right now.
>
> **[2:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=157)** So here I have click here to get some top stories from the internet, and here I can add a fake story
>
> **[2:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=171)** and then it appeared in real time, as you can see because this down here is watching the database in real time as it changes.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=180)** So as you can see, it's not too difficult to add a database to your multi-platform app and you hardly need to write any platform specific code to use it.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=190)** You only have to learn a little bit of SQL and Kotlin and suddenly you can use a database anywhere.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=198)** Here it is in Android.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=204)** There we go.
>
> **[3:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=206)** Note that if you're building for iOS, you might have to make one special change.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=211)** I had to go in here, open the project, you click this line right here at the top, top row, and then target, build settings, I'll type in linker, go to linking general other linker flags and add in SQL light three with a plus sign, minus L-S-Q-L-I-T-E-E three.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=233)** If you add that, then you're not going to get any weird linker errors, which you might get otherwise with SQL Delight.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=242)** And now we can actually run our project with iOS.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=246)** So I'm going to get some top HN stories and insert my own fake story.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=254)** There we go. And as you can see, it added in real time, same way it works with Android and with desktop.
>
> **[4:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=261)** So I can do it here on Android
>
> **[4:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=271)** and it added it right there, see?
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/going-with-the-flow?u=76281980&t=274)** So make sure you remember to add your linker flag if you run into a bunch of linking errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[SQL]] (6), [[Gradle]] (4), [[Kotlin]] (3), [[Android]] (3)
> **Env Vars:** sql (6), kts (2)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** ios (2)
> **UI Navigation:** open the (1), go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 7. Quality of Life

[↑ Back to Table of Contents](#table-of-contents)

#### Kermit for logging
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=0)** - [Instructor] Those of us who maintain apps for a living know that logging is important.
>
> **[0:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=5)** It's often how we discover what's broken or what happened behind the scenes to results in an outcome.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=11)** However, we don't want all of our debugging logs dumped to the console in a production app, for a lot of reasons.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=17)** Instead, if we intend to diagnose customer bugs and issues, we need them sent to a crash reporting solution in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=26)** Touch Lab's Kermit Library provides the solution for our apps.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=31)** Named after the pun, Kermit the Log, Kermit can hide or strip debug logs in production and then send those logs instead to a variety of different crash reporting solutions from a Kotlin multi-platform app.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=45)** For crash reporting solutions, Kermit has support for Google's Crash Lytics, Bug Snag and Sentry.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=52)** You simply add the correct library dependency to your project and you'll be able to integrate logging with these solutions.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=60)** Let's start as usual by adding the libraries to the Libs version to ML file in the Gradle folder.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=67)** So first, we need to get Kermit, the latest version right now.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=75)** Then we need to add the library dependency for both Kermit and Kermit Crashlytics.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=86)** Here we go.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=89)** And that's it as far as the- Those versions to a ml file is concerned.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=94)** Now we have to go back as usual to compose apps, build Gradle KTS file.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=101)** Here we have to add our Kermit dependencies.
>
> **[1:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=104)** So you'll notice I have to add it here under Android main, under iOS main, but not under desktop, as there's no desktop support right now for Crashlytics in Kermit.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=117)** I'm going to just use Kermit in the common main folder however here so that you can see that the actual logging support to hide the logs in production will work across the board for any platform.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=132)** So if I sync now, that will then bring in our new dependencies.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=137)** Actually using Kermit is simple.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=139)** All we have to do is just add calls to logger star methods throughout our code to then send messages and stack traces to our logging methods.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=149)** To add logging to your crash supporting solution, simply call logger dot set log writer with the name of the appropriate log writer.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=160)** Here's some examples here.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=162)** We added some logger messages directly into our main vm model, right here.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=170)** Every time we add something to the database, we add log messages that will show only in debug, but not in production.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=178)** In production, it will go instead to our crash reporting solution.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=184)** I'm going to then run my code right here.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=187)** Cuz I'm running in debug we expect to see the logs spit out right here.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=192)** As you can see, I have info top stories insert in a database right here and that is coming from my logger.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=201)** The line of code right here.
>
> **[3:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=203)** And if I were to add a top story, then we end up with another line there.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=211)** So these log messages, we can sprinkle 'em throughout our code and the production version of our app will not show these messages to somebody if they run it with a tool like Log Cat, for example.
>
> **[3:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/kermit-for-logging?u=76281980&t=220)** But in production, it will also send them the message to our crash reporting solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (2), database (2), [[Debugging]] (1), cloud (1), [[Kotlin]] (1)
> **CLI Commands:** cat (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** kts (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Managing resources
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=0)** - [Instructor] When it comes to developing an app across many different platforms, one simple area to reduce overhead is to share different types of resources between all of the apps.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=11)** We can share translated strings for different languages, including plain strings, strings with templates, plurals, string arrays.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=19)** We can include fonts to share as well as image and file assets.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=23)** We can also create different directories for alternate versions of resources depending upon qualifiers.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=30)** For example, you can have different strings for different languages or use different images depending on day versus night mode theming.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=39)** You would normally need to add the compose component resources dependency, but we've actually been using it all along.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=45)** You'll notice that it's included as part of compose with the Compose Multiplatform plugin.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=53)** Let's start by adding the Comic Sans TrueType font.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=56)** What better way to troll all the font purists out there?
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=59)** So we will simply add the font file to commonMain, composeResources, font folder, and we put this TrueType font in there, which everyone will recognize from its infamy, and at that point, we can then create a compose FontFamily based upon that file, so if I go over here to Fonts, I have created a composable function that creates a FontFamily based on the Comic Sans font, and this will work on every platform that we have here, so finally, we can change the text of one of our buttons in our app to use the edgy new FontFamily, so here we have the insert_story button to add a fake story,
>
> **[1:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=109)** which will now be in Comic Sans format, so if I go here and run it, you see I now have a Comic Sans Insert a fake story, and the same thing would happen if I were to run it on Android, for example.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=125)** As you can see, the font has changed here to Comic Sans on Android, and the same would apply for iOS, so the original app we started from already included a vector image here of the compose-multiplatform logo in XML image drawable format.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=142)** The vector drawable on Android is a format very similar to SVG, or Scalable Vector Graphics.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=148)** However, because Android doesn't natively support SVGs, exactly, we can support all of the platforms for everything that compose-multiplatform supports if we use a vector-drawable format, like Android supports.
>
> **[2:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=163)** We can also use rasterized image formats like JPEG, PNG, bitmap, WebP, all of these work, but will work best if you provide different images for each qualifier directory so that you can support screens with different pixel densities.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=180)** Otherwise, you'll make blurry images that don't look very good.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=185)** Perhaps the most useful aspect of sharing resources for multiplatform Kotlin projects is to share translations.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=192)** Here we have a strings file where we have English text, and then we have another one with everything translated by AI into Spanish.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=202)** Hopefully, these are fairly accurate.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=204)** I'm not worried if they're not because this is a example.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=209)** In order to provide translations, you need to create a default strings file for your default language first.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=215)** We're using English as our default right now, so after you've created this, then you can create alternate directories for each language and locale using the resource qualifiers in the directory name.
>
> **[3:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=226)** In this case, es is español, so we have our Spanish translations, so here we're translating our app into Spanish.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=235)** We need to create this values directory here, and then the values-es and populate both of those, so you copy the strings.xml file here, and you change all these values within the string tags into Spanish.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=252)** Be aware that, like, if you use AI to do translations, that it does make mistakes, but in this case, it's just good enough for testing, and at this point, we can actually run our app in Spanish, for example, and it should just work.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=268)** As you can see here, the application has been translated into Spanish based upon the strings we put in values-es/strings.xml.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/managing-resources?u=76281980&t=277)** All of these are correctly shown here, and the app still works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (6), [[Android]] (5), [[Kotlin Multiplatform|Multiplatform]] (4), ai (2), [[Kotlin]] (1)
> **Code Identifiers:** commonmain (1), composeresources (1), insert_story (1), ios (1)
> **Env Vars:** xml (1), svg (1), jpeg (1), png (1)
> **Analogies:** for example (3), similar to (1)
> **File Paths:** strings.xml (1), values-es/strings.xml (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)

#### KOIN for dependency injection
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=0)** - [Instructor] Dependency injection is very popular among experienced software developers.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=6)** It offers improvements to the decoupling, testability, and reusability of software components.
>
> **[0:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=13)** For Kotlin Multiplatform, the most popular dependency injection solution of choice is called Koin, with a K.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=23)** It has a simple, easy to use DSL, domain specific language, and can be used with annotations to simplify adding it to your classes.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=33)** Let's start by adding Koin to our project.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=36)** Then we should add dependency injection to improve our existing code.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=40)** As usual, we should add the actual library dependencies to the project.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=44)** If we go to gradle folder, libs.versions.toml, we add Koin version 4.0.4 is the current one right now, maybe newer when you look at it.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=59)** And then we add three actual libraries, koin-android, specific to Android, koin-compose-viewmodel, for injecting view models, and koin-core.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=72)** We don't end up needing a plugin for this.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=75)** So when we go over here, again, we don't need a plugin.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=82)** We add koin-android under androidMain.dependencies.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=87)** We add koin-core and koin-composed-viewmodel under the commonMain.dependencies, and that's it there, and there's nothing else to do in that file.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=97)** Next, we need to add the code to initialize Koin on startup.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=101)** We need to run the startKoin command for each platform with all the modules and the logging configured.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=108)** When producing multi-platform projects, there's a common Koin pattern where the project will have a list of modules including a common module and a platform module.
>
> **[1:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=118)** By defining the platform module in shared code as expect val platformModule, as we do here, we can define it differently for each platform.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=130)** First, let's identify common code modules to add to the common module.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=135)** We can add the MainViewModel with viewModelOf, the HTTP client, the NewsApi, the SQL driver, and our database.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=148)** Every one of these can be added as a singleton, except for the view model, using the singleOf method.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=156)** The view model has a special viewModelOf method to use instead, because it has to be injected differently.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=164)** Now that we have our common modules to find in a module, to identify any platform specific modules to add, at this point, there are none.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=173)** Every library that we've used in this project has shared code provided for each platform, but it's good practice to have these modules ready.
>
> **[3:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=182)** So we're going to create an empty platform module for each platform.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=187)** Here's desktopMain, iOS, and Android.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=196)** At this point, we should wire up the Koin initialization.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=202)** Android needs special configuration due to Android's context, so we'll need to create a custom Android application class and wire up its onCreate in order to start Koin.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=213)** We'll first create an AndroidApp class extending from Android's application class as we do here.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=221)** Then after overriding the onCreate here as I do, we also have to add this name parameter to our application.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=230)** This ensures that our app is started up using this new custom application.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=236)** Here, we run startKoin. We pass in the androidLogger class.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=241)** We pass androidContext with the application context.
>
> **[4:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=247)** And we pass modules of appModule, which as you remember, is a list of the common module with everything in it and the platform module with everything in it.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=258)** And like I said, we have to make sure that we define our app here.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=262)** Otherwise, none of this code is going to get used when we start our app.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=267)** Now we have to do the same kind of thing for iOS.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=269)** However, we have a initKoin class in shared code here.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=274)** This can be reused for both iOS and desktop, basically for all platforms that don't need anything special as far as context or the Android logger.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=286)** Here, we just set the printLogger for everything debug and above, and we pass the appModule again.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=293)** Now, if we go over to iOSApp.swift, I'm going to wire it this way, I'm going to add a UIApplicationDelegateAdaptor, and create an AppDelegate, so that I can then import ComposeApp.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=309)** ComposeApp here is our XCFramework, our shared library that I created, I'll show you.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=318)** Right here, we created ComposeApp as the baseName, and we made it static.
>
> **[5:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=322)** You can do this a lot of ways, but here we have all of our iOS logic for shared code bound up into a shared framework called ComposeApp.
>
> **[5:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=333)** So here we import ComposeApp, and then that makes available the KoinSharedKt.doInitKoin method.
>
> **[5:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=341)** This looks really ugly, but this is a builtin method of the UI application delegate.
>
> **[5:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=347)** So we are just adding a new function call to something builtin that needs to be overridden.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=353)** Anytime our application starts up, we initialize Koin.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=358)** Now we need to wire up each of the places where we should be injecting our classes instead of constructing them on the fly.
>
> **[6:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=365)** Remember in NewsApi, if go there, we were originally creating our client on the fly, but now we actually create our client here with the client KT method that does this.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=383)** So we can say singleOf client, and it'll reference this, and we no longer need to do it on the fly here.
>
> **[6:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=390)** We can just say, by inject.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=393)** And this is important, NewsApi needs to subclass KoinComponent.
>
> **[6:39](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=399)** This makes this inject method function.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=402)** In MainViewModel, we should be injecting our NewsApi by inject as well.
>
> **[6:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=408)** This makes sure it's the same instance, because we use singleOf, remember?
>
> **[6:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=412)** And the database, we were using this createDatabase call.
>
> **[6:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=415)** Now we can just say by inject.
>
> **[6:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=417)** As you can see here, we call createDatabase like this.
>
> **[7:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=422)** We no longer need to have all the extra junk.
>
> **[7:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=427)** We can simply have createDriver and createDatabase as singles here, and all of the magic happens in MainViewModel.
>
> **[7:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=434)** It just finds it by doing CacheDB by inject.
>
> **[7:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=438)** Again, I add KoinComponent here to our MainViewModel so that we can inject to it.
>
> **[7:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=444)** Finally, we need to do one more thing.
>
> **[7:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=447)** To make everything work in compose, and to be able to inject into compose, get rid of that, we add a KoinContext surrounding the top level of the entire compose app.
>
> **[7:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=462)** This then allows me to inject things with things like KoinViewModel or the call to get or call to inject.
>
> **[7:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=471)** Remember, I used to have to define my view model here in the constructor with a default value.
>
> **[7:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=478)** Now I can just inject it, and it's going to always use the right view model.
>
> **[8:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=486)** This right here, and that's all coming again from this.
>
> **[8:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=490)** At this point, the app should now run on all platforms and we're now properly using dependency injection to share singletons instead of passing in a brand new instance each time that could cause us terrible bugs down the road.
>
> **[8:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/koin-for-dependency-injection?u=76281980&t=504)** This should make it more testable and much easier to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (9), application (7), [[Dependency Injection]] (4), [[Jetpack Compose|Compose]] (4), database (2)
> **Code Identifiers:** ios (4), singleof (3), createdatabase (3), startkoin (2), viewmodelof (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** dsl (1), http (1), sql (1)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** libs.versions.toml (1), iosapp.swift (1)
> **Versions:** version 4 (1), 0.4 (1)
> **UI Navigation:** go to (1)

#### Storing values in multiplatform-settings
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=0)** - [Instructor] We've talked about how to persist data by storing it into a database with custom SQL code.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=6)** However, many times we want to persist values and apps, we don't need a complex database.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=12)** A simple key value store is enough for most purposes, like app settings or preferences, for these purposes, there's a very useful KMP library called multi-platform settings.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=26)** It's a common pattern in apps to have an onboarding screen that you only ever show once.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=30)** You may have app settings like choosing whether to show dark mode or light mode.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=36)** In these cases, it often doesn't make sense to store the values in a database with all of the overhead of making special database tables and queries.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=46)** This is why settings exist, like user defaults on iOS or shared preferences or data store on Android.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=55)** Additionally, you might want to encrypt certain settings if they contain sensitive values like your OAuth tokens or your encryption keys.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=64)** Safe encryption and storage of these values at rest demands safe and effective solutions like key chain storage on iOS or encrypted shared preferences on Android.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=75)** You'll be happy to know that multi-platform settings helps you manage both cases so that you can securely store both encrypted and plain text settings across multiple platforms.
>
> **[1:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=86)** Note that if you don't need encrypted preferences, the KMP integration is far easier using the no ARG dependency for multi-platform settings.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=96)** However, I'm going to show you the tricks needed to set up your own custom factories and use coins named dependencies to inject two different versions of the same type, both encrypted and unencrypted settings into the same single settings repository class.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=114)** So let's first go to Libs.versions, toml in the Gradle folder as we always do.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=119)** We need to add the multi-platform settings dependency, which I have the version here, and I have the module here.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=129)** You're also going to need Android X security crypto KTX, which I have the version here.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=135)** And here I have the module for the library.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=140)** So the latter library for Android is technically deprecated by Google, but it still remains the quickest way to create encrypted preferences on Android.
>
> **[2:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=149)** Data store should hopefully have something soon.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=151)** Until then, this is how you do it.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=154)** For desktop, we have one more solution, which is we have the encryption for desktop credential storage.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=160)** I have a version here and I have a version here.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=165)** It's from Microsoft and it's for the JVM.
>
> **[2:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=167)** So with those three libraries, then we should be set.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=171)** So we can go over to the build.gradle KTS in the composeApp folder, and we have to add these libraries just as we did before.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=181)** There's nothing to add up here for plugins.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=183)** As we go down here we see Android security Crypto has been added to androidMain, and we've added multi-platform settings to common Main because it's our shared code.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=196)** iOS has a special case because it uses the built-in key chain settings from multi-platform settings.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=202)** We do not need to add a special iOS main dependency because it's built into the shared code.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=209)** On Desktop Main, we add the credential storage JBM, and we don't need to do anything down here.
>
> **[3:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=215)** That's all taken care of.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=217)** Just need to add all the libraries under dependencies and we're good.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=222)** So now we're going to add a settings repository class to our shared code.
>
> **[3:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=227)** I created one down here.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=229)** I made it a coin component, which again, this allows you to inject into the class.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=236)** And here we're doing a special trick with coin injection.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=239)** We're injecting name dependencies.
>
> **[4:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=242)** Now, if you have more than one way of injecting something of the same type, you need to name them because there's no other way to tell them apart.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=251)** So here we're injecting them by name, and if you look at the coin shared stuff, you see settings repository here.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=258)** But what you don't see is how we're getting plain text encrypted.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=262)** So for each individual platform, if I look at the coin shared platform module, we have a factory for settings that creates it by name, encrypted and plain text.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=274)** So for Android, we have encrypted settings factory, which this get here is a way of saying that we want coin to inject into it.
>
> **[4:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=284)** And what's happening here is this is looking for encrypted shared preferences that we're automatically going to pass into the encrypted settings factory.
>
> **[4:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=294)** Likewise here we set up shared preferences.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=297)** I create a plain text database for shared preferences and then pass it into these shared preferences settings, which is built into multi-platform settings.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=309)** By the way, encrypted settings factory is something I created here.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=313)** Basically it's still using shared preferences settings, but because encrypted shared preferences actually creates an instance of shared preferences, they're both the same type.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=325)** Both the encrypted and the unencrypted version are using shared preferences.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=329)** The difference here is how I created this with a master key that goes into your key chain in a way that all of this is secure.
>
> **[5:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=338)** This code down here is going to make sure that our shared preferences and when you write them that they're encrypted.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=345)** Okay, going down to desktop, we had to do some very special stuff.
>
> **[5:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=351)** Here I have this provide encrypted preferences settings function that I got from open source.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=358)** You can check it out in the sample code, but this takes care of all of that using the Microsoft credential storage.
>
> **[6:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=366)** And for plain text, we just use a regular preferences settings with Java preferences, which are very common.
>
> **[6:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=374)** Here for iOS, we're doing key chain settings, which again, this is built into multi-platform settings and it's user default settings, which is just how preferences or settings are normally done on iOS.
>
> **[6:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=388)** And we pass in the standard user defaults.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=392)** This is a platform function of iOS.
>
> **[6:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=395)** So now that we've got all of this dependency injection set up, each of them by name, then the logic will work in our injection to these settings repository.
>
> **[6:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=407)** And this is shared code.
>
> **[6:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=409)** So all of this here will allow us to put the scene onboarding Boolean in there in an unencrypted format.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=416)** Because I'm using plain text settings, it'll allow us to put the last name of the fake story text so we can store the field value for next time and it will store our auth token.
>
> **[7:07](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=427)** This isn't very useful right now because I'm hard coding the auth token, but if you were getting a token from a server from REST, this would be a great way to store it to keep it safe from prying eyes.
>
> **[7:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=438)** And then a finally, a clear function for both settings, instances that just calls duck clear on each and this will wipe them all out.
>
> **[7:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=446)** So now that I've created this settings repository, I can inject it as well.
>
> **[7:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=450)** If I go to app.kt here again, we have the coin context.
>
> **[7:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=453)** That means we can inject into the top level composed class.
>
> **[7:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=458)** And here we're using coin inject to inject the settings repository directly into our composable function, our coin context.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=467)** The fake story text here where I think you'd want to say, remember, mutable state of fake story text and then dismissed onboarding.
>
> **[7:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=477)** This is just false, but what we're going to do is when the user dismisses onboarding or sees onboarding for the first time, we're automatically going to set it to true in the settings.
>
> **[8:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=494)** Yeah, here I'm setting the fake story text when we press the button to insert a fake story that then saves it.
>
> **[8:22](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=502)** And down here we're using settings.clear.
>
> **[8:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=506)** If we haven't dismissed onboarding and the value is false for has shown onboarding, here we have a launch effect that is going to set, has shown onboarding to true.
>
> **[8:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=515)** Launch effect is again, just a way of using a co-routine to run some code in our composable.
>
> **[8:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=521)** Instead of having to put views here, we can just run code.
>
> **[8:47](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=527)** This is a little confusing, the word unit.
>
> **[8:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=529)** When you put unit into launch effect, you're saying that I only ever want this to run once, not every time some value changes.
>
> **[8:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=536)** So you could put a variable in here and then every time that variable changes, it runs agaain.
>
> **[9:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=541)** This is a way of saying I only want it to run one time.
>
> **[9:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=546)** We've added all of our preferences, both encrypted and unencrypted, and now if I run it, clear sittings and run it again, you didn't see the message because I already ran it, but here is the message that I've created that only appears one time.
>
> **[9:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=564)** If I run the app again, it's not going to appear.
>
> **[9:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=568)** And at this point I can type in something.
>
> **[9:31](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=571)** This is a fake story and if I go back, run it again, it should still say that.
>
> **[9:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=581)** There we go.
>
> **[9:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=583)** So we have our shared preferences being stored in the Android app and jump over to, let's do desktop next.
>
> **[9:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=593)** As you can see, desktop is the onetime message.
>
> **[9:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=596)** And I can say, this is a fake story, insert.
>
> **[10:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=602)** And then if I rerun it, expect to see the same thing.
>
> **[10:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=606)** There we go. That's desktop.
>
> **[10:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=610)** And here is an iOS. So an iOS, we have the one time message.
>
> **[10:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=615)** Let's say this is a fake story, insert a fake story.
>
> **[10:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=624)** Run it again. Stop and rerun.
>
> **[10:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=630)** And it didn't show the one time message and it kept the text.
>
> **[10:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=633)** So all three of them now are storing settings or preferences into a key value store, storing encrypted stuff in encrypted settings and non-encrypted stuff in unencrypted settings.
>
> **[10:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=643)** Now let me just prove that this worked.
>
> **[10:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=645)** I'm going to go over to device manager and here I can bring up the device explorer like this bigger go to data, data, find our app, the list, and then shared preferences.
>
> **[11:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=664)** If you look at the plain text, this is seen onboarding, true, fake story, this is a fake story.
>
> **[11:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=670)** Encrypted XML, you'll notice has all of this.
>
> **[11:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=674)** If I go out to a running device here for a second and make some requests, expect this to crash.
>
> **[11:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=681)** So don't worry 'cause I didn't put a API key in there.
>
> **[11:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=687)** Okay, if I look at this now, it's opened up.
>
> **[11:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=690)** I'm go device explorer. Close that.
>
> **[11:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=693)** You can look at the encrypted settings and now you can see there's a new encrypted setting.
>
> **[11:37](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=697)** This one has the key name encrypted as well as the value encrypted.
>
> **[11:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=702)** You can see it's a symmetric cipher, but yeah, you can't read any of this.
>
> **[11:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=706)** This is hopeless if you're a hacker.
>
> **[11:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=709)** So you would have to get it the key, which is stored in the key chain.
>
> **[11:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=712)** And so this is secure on Android.
>
> **[11:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=714)** On iOS, it's a little bit harder to get at.
>
> **[11:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=717)** If you're using the simulator, you go to window, devices and simulators.
>
> **[12:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=721)** If it's a device, you can just download the entire container.
>
> **[12:04](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=724)** If it's a simulator, you need to get this identifier and go to a very specific directory, which is going to be a pain.
>
> **[12:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=730)** And I'm not going to say it's going to be quick or easy.
>
> **[12:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=734)** You can look this stuff up online.
>
> **[12:16](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=736)** The folder you want is going to be under the hidden directory, the library, under your home directory, it's going to be library developer, core simulator devices, and then the identifier you got here with data containers, data application, the app id, library preferences, and then the applications bundle id.plist.
>
> **[12:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=758)** So if you can find it, you can hunt for it with the terminal's fine command, looking for .plist files.
>
> **[12:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=765)** This file contains your unencrypted settings, I can show you one right now.
>
> **[12:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=772)** So this is an example where it's stored, seen onboarding with the setting.
>
> **[12:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=776)** It's hard to read, but it's there.
>
> **[12:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=778)** You can see the settings are being stored.
>
> **[13:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=780)** That's the unencrypted one.
>
> **[13:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=782)** The encrypted one, you're going to have to get even more fancy for.
>
> **[13:05](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=785)** I have the database browser for SQLite, and here's the directory with the device id.
>
> **[13:12](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=792)** It's going to be long and hard to get at.
>
> **[13:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=794)** You need to look in the GenP folder, once you find the right database.
>
> **[13:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=799)** And then go to this AGRP column, find your team ID and the full bundle ID here.
>
> **[13:28](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=808)** And then you go to the data column and tap into that.
>
> **[13:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=812)** And you can look over here and see that there are SF Cipher texts, authentication codes hidden here that you can't read.
>
> **[13:40](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=820)** So just to show you, iOS has a hidden too.
>
> **[13:43](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=823)** I'm not going to bother going into desktop at this point, but you can also verify that that works correctly.
>
> **[13:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=828)** At this point, congratulations, you can now handle storing both settings and sensitive data storage, both from Kotlin multi-platform across multiple platforms.
>
> **[13:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=839)** This is again, super useful.
>
> **[14:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/storing-values-in-multiplatform-settings?u=76281980&t=841)** I hope you can make great use of it in your apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Android]] (9), database (7), [[Kotlin Multiplatform|Kmp]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** ios (11), composeapp (1), androidmain (1)
> **Env Vars:** kmp (2), sql (1), arg (1), ktx (1), jvm (1)
> **Definitions:** is a  (8), is an  (2)
> **CLI Commands:** make (4), find (4)
> **UI Navigation:** go to (6)
> **Prerequisites:** set up (3)
> **File Paths:** build.gradle (1), app.kt (1)

#### Dates in Kotlinx-datetime
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=0)** - [Instructor] Dates are hard.
>
> **[0:02](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=2)** There's a joke that engineers, much like Microsoft Excel, both struggle to know when something is a date, but also the very nature of dates and times is unbelievably complex.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=15)** Most regular people don't understand this, but there are so many examples.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=20)** To get an idea, I recommend Googling, "Falsehoods engineers believe about time."
>
> **[0:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=27)** Once you get basic date handling working, you then start to deal with time zones, and then fractional time zones, and once time zones seem all right, you then have to deal with daylight savings time, even sometimes fractional daylight savings time within the same time zone.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=42)** Once you've got your time working right, you'll be very lucky if you never have to deal with historical times or dates before the laws change what the times and dates mean.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=52)** The point of this is all very simple.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=54)** Never ever roll your own date and time handling logic, unless you absolutely have to.
>
> **[1:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=61)** It's foolish and is only ever going to make you very, very sad, especially when you have to support your code and the serious mistakes that it causes.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=70)** It's also recommended to rely upon the very best available date and time libraries available.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=77)** In Kotlin Multiplatform, there's a special library for this, called Kotlinx-datetime.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=83)** So we're going to add code to perform date math and to show the date in different internationalized formats.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=90)** Without the library we have access to, this task would be hard and you wouldn't know whether your code was dangerous and broken until somebody traveled to a new time zone using your app, or maybe they found daylight savings time caused the time to roll back.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=105)** And it wouldn't show the month and days swapped in a way people would expect in their region.
>
> **[1:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=111)** In America, we prefer the month before the day, while in Europe and much of the world, prefers the day before the month.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=117)** If you show these backwards, it can cause great confusion.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=121)** I will note to you that this library is a work in progress and that it cannot implement certain low cal dependent things that we take for granted in the Java date, time libraries, like 12 hour time being handled automatically when you're using your date formats.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=138)** This is because a number of the Kotlin platforms do not yet have access to the rather essential concept of locales.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=147)** So ISO date format will always work with this library, but it isn't ideal for a lot of use cases.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=154)** You can also then manually construct your own custom date formats, as needed, by handling each section of the date individually in your common code.
>
> **[2:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=164)** So for this, let's start, as usual, by making sure we have the necessary dependencies.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=169)** We need Kotlinx-datetime.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=171)** We've got the version here, and the library here.
>
> **[2:57](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=177)** You may already have it added from previous exercises because we had dates within our return values from some of these network APIs, we added in the Apollo date, time support section.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=190)** Now let's add dates to our top hacker news stories.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=194)** So we need to update topstory.sq under SQLDelights, under Common Main.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=199)** So here we have a time, integer not null, and we added a new method that should allow us to update the dates.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=209)** We're using the upsert method here, this one, which has insert or replace in the top story.
>
> **[3:34](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=214)** And when we put a new time in here, it's going to populate and replace the existing entry.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=221)** So using this, we can go to main view model, and we can create a new function.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=231)** Add four hours.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=233)** So here we're taking advantage of the date math capabilities of our Kotlinx-datetime library.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=241)** So we're doing a select on a particular ID in top story queries.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=246)** So I think I had to add that.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=250)** You'll see there's a select star where ID equals question mark that allows you to select not all of the stories, but just the one.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=257)** Here, we're doing select execute as one, which then returns a single top story, based on the ID.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=266)** Here we do instant from epoch second, so this is taking the time, which is stored, in this case, in seconds since 1970, and it's adding four hours to the time, and then returning epoch seconds again.
>
> **[4:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=282)** So then finally, we do database top story queries, upsert.
>
> **[4:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=285)** This is again, going to do an insert or replace.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=289)** You could do an update instead, which would be more recommended, in my opinion, but we're going to replace here, and it's going to replace every single one of those with the new time inserted.
>
> **[5:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=300)** So we have top story ID, top story type, top story by, all of these are the same except for the time.
>
> **[5:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=306)** This will change everything, assuming that it all happens atomically on one thread.
>
> **[5:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=311)** So if I run the code here, I run desktop first.
>
> **[5:21](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=321)** Now I have all these hacker news stories with the date and time, which as you can see, if I go look at app Ducket, I changed this as well.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=329)** The logic to show date and time. Here we go.
>
> **[5:32](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=332)** So I create a by Unicode pattern, create this date format, and I say instant from epoch seconds, step format, date format.
>
> **[5:42](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=342)** And then this allows me to show the date and time.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=345)** Now keep in mind, when you're trying to do date formats with this library, it doesn't handle 12 hour time, and that kind of sucks.
>
> **[5:52](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=352)** It's a work in progress, and when the locales are supported, you'll be able to do all the things you can do at the Java Library.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=358)** Going back to our thing here, every time I press one of these, you can see the time increases four hours and the date will increase when I go over the end of the day.
>
> **[6:10](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=370)** And this button was added for each story, so you can mess with it.
>
> **[6:14](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=374)** There's still ordered by score, so you're not going to change the order by doing this, but you can at least see that the date math is correct.
>
> **[6:24](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=384)** Okay?
>
> **[6:29](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=389)** We can do the same thing now for Android.
>
> **[6:33](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=393)** And we can do it for iOS.
>
> **[6:38](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=398)** Okay, here we go.
>
> **[6:41](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=401)** As you can see, dates roll over, and date math is correctly handled.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=406)** So I hope this helps you.
>
> **[6:48](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=408)** Hopefully they soon figure out a way to support locales across more platforms.
>
> **[6:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=413)** That would be very nice so that you're not forced to do JVM-specific solutions or having to roll your own date and time formats based upon what is supported.
>
> **[7:03](https://www.linkedin.com/learning/kotlin-multiplatform-development/dates-in-kotlinx-datetime?u=76281980&t=423)** I hope that was helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Microsoft Excel]] (1), [[Kotlin Multiplatform]] (1), [[Kotlin]] (1), database (1)
> **Env Vars:** iso (1), jvm (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=0)** - Congratulations on completing this epic journey into the wild world of Kotlin Multiplatform.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=6)** I hope you found this course very helpful as your first step down the road to mastery.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=11)** To continue on your adventure, I recommend watching the free YouTube videos from recent Kotlin conferences.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=18)** These have outstanding content from top engineers at innovative companies.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=23)** To learn more about the Kotlin language, there are a ton of resources.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=27)** Consider the book "Kotlin in Action", which goes into great depth, or just build something useful to you, which is always a great way to learn.
>
> **[0:35](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=35)** You can also follow me on LinkedIn, where I often share content related to the newest innovations in both Kotlin and Compose Multiplatform.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=44)** Follow me for tips, hot takes, and posts that'll make your manager think you're researching something.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=51)** Thank you for joining me.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=53)** I'm sure you're excited to use all that you've learned.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=56)** Remember, always celebrate responsibly.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-multiplatform-development/next-steps?u=76281980&t=59)** Friends don't let friends push straight to production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (4), [[Kotlin Multiplatform]] (1), [[LinkedIn]] (1), [[Jetpack Compose|Compose]] (1), [[Kotlin Multiplatform|Multiplatform]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Colin Lee]]

## Resources

- Exercise files available

## Skills Covered

- Kotlin
- Cross-platform Development

## Path Context

### In [[Kotlin Professional Certificate by JetBrains]]
← [[Kotlin Essential Training- Object-Oriented and Async Code]] | **3 of 4** | [[Exploring Ktor with Kotlin Multiplatform and Compose]] →

## Part of

- [[Kotlin Professional Certificate by JetBrains]]

## Appears In

- [[Kotlin Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Exploring Ktor with Kotlin Multiplatform and Compose]] — Kotlin
- [[Kotlin Essential Training- Object-Oriented and Async Code]] — Kotlin
- [[Kotlin Essential Training Functions Collections And I O]] — Kotlin
- [[React Native Ecosystem and Workflow]] — Cross-platform Development
- [[C- Cross-Platform Development]] — Cross-platform Development

---

[↑ Back to top](#)