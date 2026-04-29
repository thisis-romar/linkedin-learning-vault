---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: api-testing-foundations-22763217
url: "https://www.linkedin.com/learning/api-testing-foundations-22763217"
duration_minutes: 95
duration: 1h 35m
level: Intermediate
updated: 12/12/2025
learners: 90346
skills:
  - API Testing
exercise_files: true
github: "https://github.com/LinkedInLearning/api-testing-foundations-4403636"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGYSZSvOzrO-Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697137417352?e=2147483647&amp;v=beta&amp;t=CbxnBoZy9FzikMp3LPBSxgo1Qmjo3M71PRfamwuoC3k"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[JMeter- Performance and Load Testing]]'
next_courses:
  - '[[Postman Essential Training]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":8,"total":12,"prev":"JMeter- Performance and Load Testing","next":"Postman Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/api-testing
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/API%20Testing%20Foundations.md)

![API Testing Foundations](https://media.licdn.com/dms/image/v2/D4E0DAQGYSZSvOzrO-Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697137417352?e=2147483647&amp;v=beta&amp;t=CbxnBoZy9FzikMp3LPBSxgo1Qmjo3M71PRfamwuoC3k)

# API Testing Foundations

> The ability to quickly and effectively test APIs is a critical skill for software testers and QA engineers. In this intermediate-level course, instructor Dave Westerveld covers the basics of API testing, sharing how to work with several industry-standard tools for testing APIs at scale in an organization. After providing a primer on web services and important API terminology, Dave shows how to use

> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217) | 1h 35m | Intermediate | 90K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Standing out as an API tester
- [**1. Getting Started with API Testing**](#1-getting-started-with-api-testing) (5 videos)
  - Calling an API
  - Your first tool: Postman
  - Introduction to web services
  - Types of APIs
  - Risks of using services and APIs
- [**2. Exploratory API Testing**](#2-exploratory-api-testing) (4 videos)
  - Install and set up API challenges
  - Exploring an API
  - Challenge: API discovery
  - Solution: API discovery
- [**3. API Authorization**](#3-api-authorization) (5 videos)
  - Overview of authorization and authentication
  - Basic auth in API calls
  - Using authorization tokens
  - Finding Bearer Tokens
  - Setting up OAuth
- [**4. Hands-On API Testing**](#4-hands-on-api-testing) (9 videos)
  - Testing GET calls
  - Testing PUT calls
  - Testing DELETE calls
  - Challenge: Break the API
  - Solution: Break the API
  - Understanding POST calls
  - Testing POST calls
  - Challenge: Access protected endpoints
  - Solution: Access protected endpoints
- [**5. Additional API Testing Consideration**](#5-additional-api-testing-consideration) (4 videos)
  - Using mocks, stubs, and fakes in API testing
  - API automation
  - Performance testing
  - Security testing
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Standing out as an API tester
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=0)** - [Narrator] Many software testers can sense that there's change afoot in the software testing world.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=5)** The ability to quickly understand and analyze an API will be a key skillset for testers to have going forward In this course, I show you how to use APIs to improve the testing that you already do and also demonstrate the basic foundations that underlie effective API testing.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=20)** The best way to learn is by doing, and so I provide you with hands-on challenges that help you put into practice the ideas and concepts that you're learning.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=27)** I'm Dave Westerveld.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=29)** I've been testing for many years and I'm excited to share with you what I've learned in this course about API testing.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/stand-out-as-an-api-tester?u=76281980&t=34)** So join me and let's start testing.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started with API Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Calling an API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=0)** - [Instructor] API testing is super fun.
>
> **[0:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=2)** We'll get into some of the theory of it soon, but I want to get you started with just enjoying some of the fun of it.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=7)** So let's dive right in with making some API requests.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=11)** Now I'm a dad, so of course I'm going to use the Dad Joke API for this.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=15)** You can see the documentation for it here.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=18)** And for now, don't worry about all this different stuff that you see here.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=21)** We'll be getting into what some of this kind of stuff means as we go through the course.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=26)** All you need to know at the moment is that a GET request is just an HTTP request that's sent over the network.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=33)** This is actually the exact same thing that your browser does for you when you go to a website.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=38)** And so what that means is I can actually copy this URL, go to a new tab and paste it in, and you can see that I get back a response.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=52)** Now it is interesting 'cause this response gives me back a webpage, which seems weird.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=58)** Aren't APIs kind of a different thing than going to a webpage?
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=61)** And they kind of are.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=62)** But like I said earlier, an API call and a request to navigate to a webpage are under the hood, fundamentally the same thing.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=70)** So let's go back here and take another look at the documentation.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=74)** You can see that we have these different API response formats, and by default, the default response format here you can see is actually HTML.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=85)** Usually when we think of a restful API, which is what we will be discussing in this course, we think of JSON responses.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=92)** And you can see that we can get back a JSON response here by setting the accept header to application/json.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=99)** But how do you specify that?
>
> **[1:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=102)** Well, if we scroll down a little here, we can see that it shows this example using the CURL tool.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=108)** Now, CURL is a command line tool that comes built in to most operating systems.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=114)** And so what I can do is I'll just copy this entire command here, and you can see that the minus H here for headers is specifying that accept header being set to application/json.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=126)** And if I go over to the terminal or command prompt, I can just paste this in and send this off.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=133)** So this is going to send a request to the URL and it's going to say, I want a JSON response in this case.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=142)** So we send that off and now we get back a response in a format that's more like what we would kind of typically think of when we think of an API call.
>
> **[2:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=150)** It's kind of got these curly braces and it's got key value pairs.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=153)** It's a JSON response like we would expect.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=156)** And so I have the heart of a lion and a lifetime ban from the San Diego Zoo.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=163)** So we'll be diving into a lot more details on what these different parts of an API call mean in the upcoming videos.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/calling-an-api?u=76281980&t=170)** But for now, let's just take a minute to celebrate the fun of having made your first API call.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), json (4), url (2), curl (2), http (1)
> **Code Keywords:** let (3), super (1), this. (1), default, (1), case. (1)
> **UI Navigation:** go to (2), navigate to (1), scroll down (1)
> **Tools:** command line (1), terminal (1), command prompt (1)
> **CLI Commands:** curl (2)
> **Documentation:** the documentation (2)
> **API Endpoints:** get  (1)
> **Definitions:** is a  (1)

#### Your first tool: Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=0)** - [Instructor] If we want to test APIs, we're going to need to use tools that will let us easily send and receive commands from the APIs we're testing.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=7)** In this course, it's not about one particular tool, so we're not just going to stick to talking about one thing, but I do want to introduce you to Postman as one of the main tools that we'll use.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=17)** So, Postman is easy and intuitive to use, and it's also free and has a large and active user base, so there's many resources if you find yourself Googling for answers.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=27)** You can install it on whatever platform you're on from their site here at [postman.com](https://postman.com).
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=34)** And once you've done that, you can open the Postman app and get started right away.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=37)** You can also access Postman directly from the web by going to web.[postman.co](https://postman.co), where you'll be taken to a page where you need to sign in to use it.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=49)** So, if you don't have an account, you should set one up.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=52)** It is possible to use the desktop version of Postman without an account, but it's much easier to use it if you have an account, so I would highly recommend set one up.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=61)** It's free to use, free to sign up, so go ahead and do that.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=65)** There's really no reason not to.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=67)** The Postman web app works pretty well, but some of the examples in this course will involve working with files that are on your local machine.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/your-first-tool-postman?u=76281980&t=74)** So, I would highly recommend that you download and install the desktop version as well if you want to follow along with those examples.

> [!info]- Semantic Content
>
> **Tools:** postman (8)
> **URLs:** [postman.com](https://postman.com) (1), [postman.co](https://postman.co) (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Introduction to web services
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=0)** - [Instructor] APIs rule the internet.
>
> **[0:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=2)** Several different companies that help route internet traffic have analyzed the requests that they get.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=7)** And estimates are that between 60 and 80% of traffic on the internet is from API calls.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=14)** But where are these calls coming from?
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=16)** And more importantly, as a tester, how do you get involved in analyzing these calls?
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=20)** In order to understand that, let's talk for a minute about web services.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=24)** You may have heard about web services or service oriented architecture or things like microservices, but what exactly are these things?
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=31)** It can be hard to pin down terms like this, but for the purposes of this course, let's define web services as a function that we can access over the web.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=39)** Let's look at the implications that this definition has for testing.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=42)** So to do that, I want to take a step back to something I learned in grade school when the concept of mathematical functions was introduced to me.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=49)** And don't worry, we're not going to get into deep math here or anything, but we can think about it this way.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=54)** A function takes in an input, performs an action on the input, and then produces an output.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=61)** Sticking with the math theme, we'll look at the Math JS service.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=66)** As it's input, this service takes in API calls that specify a mathematical formula and then it will do the necessary calculations and return the answer back to you.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=75)** So you can see we've got a formula here.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=77)** If I click on this, it gives us the answer for that formula.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=81)** So this API is what allows us to send the inputs to the service.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=86)** And in this case, the inputs are this mathematical expression.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=89)** And then the service takes care of figuring out what we want to do, and then it gives us back an answer.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=94)** To us sending the API calls, the service itself is a black box.
>
> **[1:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=97)** We don't know how it's doing its calculation or what language it's using, et cetera.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=101)** All we do is give it a certain input and it gives us back a response.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=106)** In this course, we will treat services as black boxes.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=109)** That means that we'll try to use some black box testing techniques when we're trying to find problems with them.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=114)** We'll explore what that means and how it works.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=117)** So there are many different kinds of services on the internet.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=120)** We've got cloud providers that are made up of different services that you can interact with through APIs.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=126)** Some services are just small and targeted, so Math JS is an example of this although sometimes services are even smaller than that.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=133)** Sometimes a service is an entire application and can have lots of different interrelated functionality available.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=139)** Some services will be internal to your company, they'll belong to your company, and some are external to your company.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=145)** You'll want to take different testing approaches in these situations, and so we'll dig into some of that as we go through this course.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=151)** Web services are all around us and APIs are the glue that hold them together.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/introduction-to-web-services?u=76281980&t=156)** Let's take a look at some of the different kinds of APIs and how we can go about testing them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), function (2), case, (1)
> **Env Vars:** api (4)
> **Definitions:** is an  (2), is a  (1), means that (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Types of APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=0)** - [Instructor] A very common way of creating APIs is called REST.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=4)** When you make a REST API, you're following a set of standards laid out in the doctoral thesis of a guy named Roy Fielding.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=10)** These are a set of principles that help make API development consistent and accessible.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=15)** So REST is an acronym for REpresentation State Transfer and it's a way to create a simple and consistent interface for interacting with the service.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=24)** Probably most APIs today are RESTful-ish in nature, and if you aren't sure what kind of API you're working with, a good guess is that it's RESTful.
>
> **[0:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=32)** All the APIs that we've looked at so far in this course have been RESTful but there's other approaches as well.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=38)** And another approach that you can use to define an API is the SOAP API approach.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=43)** SOAP stands for Simple Object Access Protocol.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=47)** And we're not going to get into a lot of details on this but SOAP APIs used to be very popular and there's still many of them around, so it's worth knowing a little bit about them and how they work.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=57)** The biggest difference between a REST API and a SOAP API is that a SOAP API is more standardized.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=63)** So it follows a standard set of rules known as the Web Services Description Language or WSDL and that defines what a SOAP message has to take and also what the response has to look like.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=77)** So these things are usually defined in XML and they're defined upfront as a standard that you must stick to in order for the API to work.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=86)** So let's actually take a look at an example of calling a SOAP API.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=91)** For this example, I'll make calls to a site that gives us information about different countries, and then we'll request a list of all the country names.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=99)** So let's go to the URL here for list countries by name.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=104)** And we're going to use the SOAP 1.2 version of this.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=109)** And in order to do it, we need to give it this exact structure that it needs to have.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=114)** And I can just copy this structure from here.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=118)** So I'll copy that, and then we'll go over to Postman.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=122)** And you can see I have the URL in here already.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=126)** So on the body tab, I'll go to raw and make sure that XML is selected and then paste this into here.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=134)** So this is that structure that a SOAP API needs to have.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=139)** And then also for this one, I need to have a content type header in place that is set to application/soap+xml.
>
> **[2:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=155)** And there's just one more thing we need to do here.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=158)** A SOAP request is usually sent with a POST call.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=162)** So I'll switch this to POST, and then I can send this request and get back a XML list of all the different countries that this service has.
>
> **[2:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=174)** And one last type of API that I want to mention is GraphQL.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=178)** So the QL in this name stands for Query Language and it allows you to access data on a service in a more fine-grained manner than you can with a REST or a SOAP API.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=189)** So this was first defined by Meta, or Facebook at the time, in 2015 and it's been steadily growing in popularity since.
>
> **[3:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=197)** So let's take a look at another service that gives us information about different countries but this time, it's going to be using GraphQL.
>
> **[3:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=205)** So we'll start with the endpoint here.
>
> **[3:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=208)** You can see there's just this one endpoint.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=210)** So I'll copy it and go over to Postman, add a new request, paste it in here, and then return to here, copy this query, go back to Postman.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=227)** And in the body here, I'm going to select the GraphQL option and I'll paste the query into here.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=236)** Now, I'm just going to make a couple of tweaks to this query to show you a little bit of how GraphQL works.
>
> **[4:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=241)** So first of all, I'm Canadian.
>
> **[4:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=243)** So let's just change this to ca, the Canadian Country Code.
>
> **[4:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=247)** And let's say I'm just not interested in the currency.
>
> **[4:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=250)** So we'll get rid of this currency and then we'll send this request.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=255)** And you can see we get back a list of all the items that we've requested.
>
> **[4:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=260)** There's no currency in here because we didn't request that.
>
> **[4:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=263)** So if we add it back in, say currency, and send this request again, you can see that we now have the currency included.
>
> **[4:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=272)** So this is the power of GraphQL.
>
> **[4:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=274)** It lets you be very targeted in this information that you're getting from the server.
>
> **[4:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=278)** So we've just learned a lot of new words and terminology and it might all be a little overwhelming, but don't worry, as we go through this course together, these things are going to become more clear.
>
> **[4:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/types-of-apis?u=76281980&t=288)** So enjoy the ride.

> [!info]- Semantic Content
>
> **Env Vars:** api (13), soap (11), rest (5), xml (3), url (2)
> **Code Keywords:** let (5), interface (1), this. (1), switch (1)
> **CLI Commands:** make (5)
> **Definitions:** stands for (2), is called (1), is an  (1)
> **Tools:** postman (3)
> **UI Navigation:** go to (2), select the (1)
> **API Endpoints:** post  (1)
> **Versions:** 1.2 (1)

#### Risks of using services and APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=0)** - [Presenter] One of the main goals of testing is to reduce risk, and API testing is no different.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=5)** But what kind of risks might an API present?
>
> **[0:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=8)** Well, in this video, I'm going to go over a few areas of risk that you might want to consider in API testing.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=14)** Things like API changes, availability, timing, performance, and security.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=20)** So what kind of things might change in an API and how might that introduce risk?
>
> **[0:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=26)** Well, if you're using a public API, the maintainers usually try not to change the way that it works, but version changes can introduce a lot of risk if you need to move over to using a new version of an API.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=38)** And then if you're testing a private API, it might be more flexible in when and how things change and not be as strict about versioning the interface itself so the endpoint names or the data that they require could change.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=49)** This can be quite frustrating if you have to keep changing your tests.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=53)** And as with any code, changes also introduce the risk of bugs.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=58)** But just because the interface doesn't change doesn't mean there are no risks.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=62)** So even if your interface isn't changing, there might still be risks there from things happening on the server that can introduce risks.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=70)** Availability risks have to do with making sure that the API is available when it should be and is not available when it should not be.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=78)** So one thing that can affect this is network issues.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=81)** In this course, we're learning about testing web-based APIs.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=84)** And that means that we generally need to send and receive these requests through the internet.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=89)** And you're testing, you should be trying to figure out what might happen if there's network flakiness.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=94)** Another thing that can affect availability is the permission settings on an API.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=98)** Permissions are used to stop unauthorized people from accessing different parts of the API.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=103)** But in testing this risk, you should be looking at both sides of that coin, right?
>
> **[1:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=108)** Are we only allowing the correct people to see what they're allowed to and are we also stopping people from seeing things that they're not allowed to see?
>
> **[1:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=119)** The timing of API calls can also be an important testing consideration.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=122)** It's easy to think of API testing as making sure that each endpoint does what it should, but APIs are used as part of a broader ecosystem and this can cause some interesting failure points.
>
> **[2:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=132)** For example, I've seen situations where calls could get processed in a different order than they were sent, maybe due to a network glitch or another race condition.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=140)** A call that was sent second was received first.
>
> **[2:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=143)** And this is an important risk to think about as it can sometimes cause some very strange behaviors.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=149)** Another timing risk is around slow calls.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=151)** Can a call time out?
>
> **[2:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=153)** If it does, how does the server deal with it?
>
> **[2:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=154)** If not, does it cause any issues for other calls?
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=157)** It can be difficult to create test conditions for slow calls, but this is an important risk to think about in API testing.
>
> **[2:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=164)** Another important risk is concurrency.
>
> **[2:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=166)** Most modern applications can handle multiple users at the same time and do a pretty good job of managing conflicts, but it's still worth investigating how your API handles it when two users want to manipulate the same resource at the same time.
>
> **[2:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=179)** Performance is also an important risk to think about.
>
> **[3:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=182)** Generally, when a person is using a website UI, they can only interact with it as fast as they can click, tap, or scroll.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=189)** But APIs are designed for programmatic access.
>
> **[3:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=192)** That means they're often meant to be interacted with through code, and code can be set up to call a lot of things very quickly.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=199)** So it's important to think about API performance.
>
> **[3:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=202)** Rate limiting is a way that you can limit the number of calls that one user or script can make in a given time period.
>
> **[3:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=208)** So if the API that you're testing has rate limiting, you'll want to consider how that might affect things.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=213)** And if it doesn't have rate limiting, you might want to look at what could happen if a malicious user or even just some buggy code were to suddenly send a big spike of requests.
>
> **[3:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=224)** Since it's fairly easy to program scripts that interact with APIs, they form a very common attack vector when people are trying to attack a site.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=233)** This course isn't about performance or security testing, but even if you aren't an expert in these things, it's still helpful to think about them and to be aware of some of the risks that come with them.
>
> **[4:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=244)** Testing is about mitigating risks.
>
> **[4:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/risks-of-using-services-and-apis?u=76281980&t=246)** So let's continue on with some practical examples of how to approach mitigating the risks that we've talked about in this video.

> [!info]- Semantic Content
>
> **Env Vars:** api (17)
> **Code Keywords:** interface (3), public (1), private (1), require (1), let (1)
> **Definitions:** is an  (2), means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)


### 2. Exploratory API Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Install and set up API challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=0)** - [Instructor] I firmly believe that the best way for you to learn is by trying things out.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=5)** You can certainly learn things by just following along with these videos, but you will learn a lot more if you try to take some of the theory from this course and put it into action.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=14)** In order to help you with this, I put together a simple to-do list application that I'll use throughout this course.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=20)** I'll use it to show some worked examples of the different theories and concepts that we learn in this course, and I'll also use it for some hands-on challenges that I want you to do so that you can cement the theory with practice.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=31)** This application is written in Python, and if you have Python installed you can run it locally.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=36)** There are instructions for how to do this in the README on GitHub, which you can follow if you're interested.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=42)** However, if you're not interested in doing that, there's a simpler way to create a copy of the site that you can use.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=48)** So you'll need a GitHub account for this, but you can easily create one for free.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=51)** Once you've done that, you can come into this repo and you can click on Code here and go to Codespaces and create a new codespace.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=61)** Now, it'll take a few minutes to open and install everything, and probably the first time that you do this, you'll need to authorize it to have access, which you can safely do.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=70)** But once that time has passed, you'll be able to create a site easily inside of here.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=77)** Once it has finished setting everything up, building a container, and installing all the dependencies, you should see something like this.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=84)** And the important part here is the terminal down at the bottom.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=88)** We're going to run some commands in here to set things up.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=91)** So we can run make run-dev, and then hit Enter.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=99)** And this will start the application inside of this dev container that we're using.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=105)** Once it has started it up, we need to expose it so that it's available to be used.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=110)** So we can do that on the ports tab here so we can forward a port and that if it doesn't automatically add it, and you can see that it has automatically added that.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=120)** But the important part here is we can make public.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=122)** So I can make it public here by clicking on that, which should update the visibility here.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=130)** Or you can just click on this or right-click on this to change the port visibility in here as well.
>
> **[2:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=136)** But you need to make sure that it's publicly visible so that you can see it outside of this container.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=142)** And then we can open this in the browser and we can say, okay, this just warning us that this is a local application.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=152)** And then you can see here in the browser you have this ToDo application.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=156)** Note that if you aren't using this codespace, eventually it's going to time out and it's gonna shut things down.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=162)** If that happens, you just need to go back to the GitHub repo for this, reopen your workspace.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=170)** So you'll go back into here.
>
> **[2:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=172)** If I refresh this page, we should be able to see the codespace in here.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=178)** So you can click on this to go into the codespace.
>
> **[3:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=180)** Mine's up and running right now, so I don't need to click on this, but if it has died, it's not active anymore, you can click on this to reopen it.
>
> **[3:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=188)** You'll probably need to rerun make run-dev at the terminal to restart it and make sure that the site's public again.
>
> **[3:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=196)** And note that when you do that, probably this URL up here will change as well.
>
> **[3:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=200)** So any scripts that you're using that reference that URL will need to be updated.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/install-and-set-up-api-challenges?u=76281980&t=204)** But with that, you should be able to set up and use this site as we go through this course and exercise some hands-on activities for the maximum learning opportunity.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (5), public (3), this. (1)
> **CLI Commands:** make (6), python (2)
> **UI Navigation:** click on (5), go to (1), right-click (1)
> **Tools:** github (3), terminal (2)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **Env Vars:** url (2), readme (1)
> **Warnings:** note that (2), warning (1)
> **Documentation:** the readme (1)

#### Exploring an API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=0)** - [Instructor] A big part of testing is discovering what there is to test.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=4)** You could say that a tester is an explorer and for this video, I want you to put on your explorer hat.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=9)** We're going to spend a few minutes exploring this to-do list application that I've made.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=14)** There'll be some challenges later on in this course where you can try your hand at testing this API but for now, let's try some exploratory testing techniques to see if we can figure out what this API does.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=24)** So the first and most obvious thing is to put a to-do item in this text box and then click add.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=29)** But how does that help us with figuring out what the API does?
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=33)** Well, every browser has something called the Developer Tools and on Chrome, I can get to it on the menu here.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=38)** More Tools and Developer Tools.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=40)** With most browsers, you can also bring this up using the keyboard shortcut F12.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=45)** Now that I've got the Developer Tools open, I want to make sure that I'm on the network tab here because API requests are network requests.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=52)** They're sent over the network.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=53)** And then I've also filtered it down here to just these fetch XHR requests because I'm not really interested in JavaScript and CSS and some of these other types of requests.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=62)** I just want to see these fetch requests that an API sends.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=67)** All right, so now let's try using this.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=69)** Let's put a to-do item in here.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=72)** Let's say watch this video and then we'll click add.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=78)** And you can see over here in the Developer Tools that a bunch of requests go by, including this tasks request.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=84)** And if I click on this, I can go to the headers and I can see there's the URL that we sent to.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=90)** This is the method that was used as a POST because we were creating things.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=94)** And on the payload tab, I can see the data that we sent along with our POST request.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=98)** On the response tab, I can see the data that we got back from the server.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=102)** And this preview tab just kind of shows that response in a nice format for us.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=107)** So now that we've found this endpoint, let's try it out in Postman.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=112)** So I'll copy the URL here and over here in Postman, I'll add a request.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=120)** Let's call it Create Todo.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=124)** I'll paste the URL in here and I'm going to set it to POST.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=130)** But in order to do that, I need a body.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=131)** I need to send some data along with it to tell the server what to-do item to create.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=137)** So I'll go back over here, I'll go to the payload.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=140)** I'll change the view source so that I can kind of get the raw data.
>
> **[2:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=143)** It's a little easier to copy.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=145)** So I'll copy that and return to Postman and I'll select Raw and then JSON because this is JSON data.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=153)** I'll paste it in here.
>
> **[2:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=154)** I'll click beautify just to make it look nicer.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=157)** And let's change the description here to create a new task.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=161)** We'll say finish course and I'll click on send.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=169)** And you can see, it's created that task for us.
>
> **[2:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=171)** So pretty cool.
>
> **[2:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=172)** But what other endpoints might this application have?
>
> **[2:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=175)** Well, one thing you can do is make an educated guess.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=177)** And so in this case, we can guess that there's probably some way to get some information about to-do tasks.
>
> **[3:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=183)** So we've got the ID of 73 here.
>
> **[3:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=185)** So let's try, let's put that at the end.
>
> **[3:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=187)** 73, let's change this to a GET so we can get some information about it and send that.
>
> **[3:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=193)** And you can see, indeed, we get back information about that task.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=199)** This is a very common way to design APIs.
>
> **[3:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=202)** So what about modifying this object?
>
> **[3:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=204)** Well, let's try doing a PUT here to modify it and let's change the status here to in progress and we'll click on send.
>
> **[3:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=215)** We can see it gives back this error.
>
> **[3:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=216)** Value is not a valid enumeration.
>
> **[3:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=218)** It needs to be in progress with capitals.
>
> **[3:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=221)** All right, so In Progress, and let's send this again.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=227)** And you can see that our finished course task has now been updated to be in progress.
>
> **[3:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=232)** All right, so let's just do one more quick check here and see if delete works.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=236)** So I'll choose delete, I'll try to delete this task.
>
> **[4:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=240)** And I get back a not authenticated error.
>
> **[4:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=242)** So it seems like there's some kind of restrictions on deleting.
>
> **[4:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=246)** It requires some kind of authentication.
>
> **[4:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=247)** And we're going to look at how to do auth a little later in this course.
>
> **[4:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=251)** Now, there's probably more API endpoints in this application.
>
> **[4:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=254)** In fact, I know for sure there are, but we'll save digging into those for a little later in the course.
>
> **[4:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/exploring-an-api?u=76281980&t=259)** So hopefully this gives you some ideas on how to go about exploring an API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), delete (3), this. (1), this, (1), case, (1)
> **Env Vars:** api (7), url (3), post (3), json (2), f12 (1)
> **UI Navigation:** click on (3), go to (2)
> **API Endpoints:** post  (2), get
 (1), put  (1)
> **CLI Commands:** make (3)
> **Tools:** postman (3)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** later in (1)

#### Challenge: API discovery
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=5)** - [Instructor] There's no such thing as a perfect API.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=8)** I say this to absolve myself in case you find any bugs in my software but also because I want to encourage you to have confidence as a tester.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=15)** My goal with this course is for you to learn how APIs work and how you can interact with them, but this course is about API testing, and so I also want to teach testing skills along the way.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=26)** And, of course, an important part of testing is being able to design tests.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=30)** When it comes to API Testing, good test design requires that you know what the API does, what endpoints it has and how they might relate to each other.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=38)** To help you learn this, I'm going to give you a challenge that will give you some practice at discovering how an API works.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=44)** For this challenge, I want you to explore the API for the Todo application, and you can look at the previous couple of videos to see how to get started with using it.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=52)** And I want you to find the different endpoints that it has.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=55)** Then I want you to figure out what each of these endpoints can do.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=60)** In the next video, I'm going to walk you through a solution for this challenge, but if you're serious about learning API testing, I would highly encourage you to try this out on your own before looking at how I did it.
>
> **[1:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=71)** The best possible way to learn something is by trying to do it.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=75)** However, I will give a couple of hints on how you can go about discovering what an API does.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=80)** As I mentioned already in the previous video, the dev tools are a great way to figure out how an API works.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=86)** I also have some documentation available for this API that you can find at /docs.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=92)** So if you open up the application here and then go to /docs, you can see a list of the documentation that's available.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=100)** However, there are some undocumented endpoints, and there might be some endpoints that are documented incorrectly, so be careful when you're trying to figure things out with that.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=110)** You should also try calling each of the endpoints that you discover with different actions like get, post, et cetera to see how they work.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=117)** At the end of this challenge, you should have a list of some sort that shows you the different endpoints that you could find in the app along with some of the methods that each endpoint supports.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=125)** In the next video, I'll show you how I went about generating this list, but at this point, you should pause the course and try this out on your own.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-api-discovery?u=76281980&t=133)** Have fun.

> [!info]- Semantic Content
>
> **Env Vars:** api (10)
> **CLI Commands:** find (4)
> **Cross-References:** in the next (2), previous video (1)
> **Code Keywords:** this, (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Solution: API discovery
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=0)** - [Narrator] You've had the chance to explore the to-do list API and to try and discover what the various endpoints do.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=11)** In this video, I'm going to walk you through one way that you could have found the various endpoints.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=16)** Let's start with the most obvious place, the documentation.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=22)** Now, in order to keep this video from getting too boring, I'm not going to write down every endpoint in this list but I want to show you a few things.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=28)** First of all, let's look at this token endpoint.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=31)** This endpoint is used to get a token so that users can access certain data in the system.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=35)** And you can see down here it requires you to provide a username and a password.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=39)** And then it also has some other optional arguments.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=42)** And of course, from a testing perspective you want to check all of these arguments, but you'd want to note that some are required and some are optional so that you can test them differently.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=49)** You can also see up here that it requires the data to be passed in this X WWW form URL encoded format.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=59)** Up until now all the endpoints that we've used have required JSON data.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=63)** So let's take a quick look at how to call something like this in Postman.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=70)** So I'll add a request and it'll say get token.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=76)** Now I've already defined a variable in here, the base URL.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=81)** you can see it's in my environment and it's set to the local host for my application.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=88)** So I'll use that and then I'll add slash token to the end of it.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=93)** And then on the body tab we can select this form URL encoded option here.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=99)** And you can see that it gives us this form.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=101)** So we have to give a key and a value.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=103)** If we look back on here we need the key, the username, and the password.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=108)** So let's fill those in.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=109)** Username is userone, and the password is 12345.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=119)** And again, this information is told us here in the documentation.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=123)** So now that we've got that set, let's send this request and it says, method not allowed.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=129)** Ah, that's because here, this token requires a post method.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=134)** So we're sending this body data it wants us to send as a post method.
>
> **[2:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=138)** So let's switch it to post and let's send it again.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=141)** And you can see that we get back this bearer token.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=145)** Now back here in the documentation, you can see that some of these endpoints have this lock icon beside them.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=152)** This means that they require you to provide some kind of authentication in order to access them.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=157)** If we look at one of them, let's look at this user slash me endpoint.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=161)** It doesn't really tell us what exactly we need to do to specify the authorization, but let's try it out in Postman for a second and see if we can figure it out.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=169)** So we'll add another request here.
>
> **[2:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=174)** Get me, and once again, I'll use this curly brace to find the variable for our tenant.
>
> **[3:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=181)** And then we'll do users slash me.
>
> **[3:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=185)** Now we need to provide some authorization.
>
> **[3:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=187)** So I'll go to the authorization tab here.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=189)** I'll select bearer token, and back here I'll copy the token that we got earlier.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=198)** And you can see it's a bearer token.
>
> **[3:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=200)** I will paste it into here and let's send this request.
>
> **[3:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=207)** And you can see it tells us, hey, this token belongs to user one.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=210)** And that's what we would expect it to do.
>
> **[3:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=212)** So that's good.
>
> **[3:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=214)** Now, the rest of the documented endpoint should have been pretty straightforward to understand but I wonder if there's any undocumented endpoints?
>
> **[3:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=222)** So let's go back to the web app and I'll bring up the dev tools by hitting F12.
>
> **[3:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=231)** And I'm here on the network tab.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=233)** So now let's put in a task, do something.
>
> **[3:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=239)** And we've already seen these, the token and the me and the tasks.
>
> **[4:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=243)** We've seen all these endpoints already.
>
> **[4:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=245)** But let's try editing this task and see what happens.
>
> **[4:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=248)** Do something else.
>
> **[4:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=252)** Okay, so we've seen this one before as well.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=255)** It's just to put, to modify that task with the task ID.
>
> **[4:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=258)** So that seems fine.
>
> **[4:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=259)** But now let's change this to in progress.
>
> **[4:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=263)** And it's interesting because we've got this in progress endpoint here, and I won't show you right now but if you go look through the documentation you'll see it's not there.
>
> **[4:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=273)** There's no documentation for this endpoint.
>
> **[4:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=277)** Now, if we were testing this application, that's definitely something we want to make note of that we found this endpoint that is undocumented and we'd want to talk about why that's the case.
>
> **[4:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=287)** Now, once again, I didn't write down a list of all the endpoints that I found but hopefully your notes include at least some of these interesting things that we went through in this video.
>
> **[4:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=295)** But if you miss stuff, don't be discouraged.
>
> **[4:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-api-discovery?u=76281980&t=297)** The important thing is just keep trying and keep learning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), switch (1), require (1), else. (1), case. (1)
> **Env Vars:** url (3), api (1), www (1), json (1), f12 (1)
> **Documentation:** the documentation (4)
> **CLI Commands:** find (1), make (1)
> **Tools:** postman (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)


### 3. API Authorization

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of authorization and authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=0)** - [Dave] One of the more difficult parts of working with APIs is security.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=4)** Since APIs can be used programmatically, they can be attacked in many ways and a lot of thought and effort needs to be put into making sure that they're secure.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=12)** This is good, but from a testing perspective it can also make it a bit more difficult to work with.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=17)** When an API is secured, we need to know how to navigate through the security.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=21)** If we want to call the different endpoints for testing them we need to first figure out how we can even access those endpoints.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=28)** As testers, we need to have a bit of an understanding of how security measures work so that we can also test those security options themselves.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=36)** There are a number of different protocols that can be used to secure an API and we'll get into them a bit in future videos, but I want to start with understanding the difference between authorization and authentication.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=47)** In essence, authentication is about verifying who you are and authorization is about verifying what you can do.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=56)** Now that sounds pretty abstract and might be a bit hard to get your mind around, so let's think this through with a real life example.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=62)** Let's say you want to rent a car and the rental place requires that you reserve the car ahead of time.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=67)** When you get there, they ask to see your ID.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=70)** They're trying to verify who you are.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=72)** With your ID they can authenticate that you are who you say you are by matching up the picture on your ID.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=78)** They look at the picture, they look at you, they say, "Okay, it looks like you really are Dave Westervelt."
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=85)** Now that they know that I'm actually the person that I say I am, they can check to see if this Dave Westervelt person is authorized to rent a car.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=94)** Am I allowed to do the action that I'm requesting to do?
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=98)** In other words, they can check, see if I've made a reservation ahead of time.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=102)** There are two ways though that you could fail to get a rental car.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=105)** In the first way they could determine you're not actually who you say you are.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=109)** They look at your ID and, you know, it's got someone else's picture on it, for example.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=112)** In that case, you've failed to be authenticated.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=115)** However, you could also present a valid ID that's your own and still not be able to rent the car.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=120)** If they check the reservation list and your name's not on it, then you're not authorized to rent the car, even if you've been authenticated to be who you say that you are.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=130)** With API security, we often combine the authorization and authentication together.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=135)** You only need to give one token that can be used to validate both who you are and what you're allowed to do.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/overview-of-authorization-and-authentication?u=76281980&t=142)** So we'll dig into some ways to do this in the next few videos, but hopefully this helps to make those concepts a little more clear for now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), abstract (1), case, (1)
> **Analogies:** picture (3), for example (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Speakers:** - [dave] (1)

#### Basic auth in API calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=0)** - [Instructor] When it comes to authenticating yourself on an API, there are a number of options that we can use.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=5)** On the authorization tab here in Postman, you can see that Postman provides quite a long list of different auth options.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=12)** We aren't going to go through all of these, but let's just take a look at a couple of them.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=16)** We'll start with the basic auth method.
>
> **[0:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=19)** And this Postman Echo URL that I'm using here is just a simple service that Postman provides that you can use when learning about different things, in this case about basic auth.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=28)** So using basic auth is similar to logging into a website.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=31)** You can see I've got the username as Postman here and the password is set to password.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=37)** And that's what works for this test URL here.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=41)** Now Postman, you can see what data is being planned to send to the server when we hit Send.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=46)** So if I go over to the Headers tab here, you can see that it's automatically put this authorization header in place.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=52)** And by the way, if you can't see this, you might have to select this Hidden Headers option.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=58)** And if an API is using basic auth, it needs to send that information to the server via this authorization header.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=64)** So it puts this word basic at the start.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=67)** And it's a way of saying to the server, "Hey, this is the basic auth spec "that you're going to need to use "to decode this information."
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=74)** Now you can see after this there's a bunch of random characters here, and this is just a base 64 encoding of the username and password.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=84)** It's important to note that a base 64 encoding is actually trivial to decode.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=89)** So I'll copy this value and head over to [base64decode.org](https://base64decode.org).
>
> **[1:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=96)** I'll paste it in here.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=98)** And I will decode it.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=100)** And you can see that it shows us the username and password here.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=105)** This means that if you're ever sending an API request that uses basic auth, you need to be careful that it's sent over a secure connection.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=112)** If anyone was to intercept your request, they could easily figure out what your username and password are.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=117)** This course is about testing APIs and not just using Postman.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=121)** So it's important to understand how this is working under the hood.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=124)** When we put in our username and password here into Postman, it's automatically creating this authorization header for us.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=134)** But we could make this header ourselves if we really wanted to.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=137)** So let's go to another tab, and we'll make this request.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=144)** But this time, instead of using that authorization helper, we're going to just add our own authorization header.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=151)** So we'll go here, we'll put in authorization header.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=156)** We'll start it with basic and then a space.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=161)** And then I'm going to need a base 64-encoded hash of my username and password.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=167)** So I'll go over to base64encode and type in my username, postman, and my password.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=177)** So colon and then password.
>
> **[3:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=180)** And I will encode it.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=184)** Now I can copy this, go back over to Postman, paste it in here, and then send this request.
>
> **[3:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=195)** And you can see that it returns authenticated equals true.
>
> **[3:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=197)** So that worked.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=199)** The reason I wanted to show this manual creating of this header is because there's essentially three ways to get information to a server when making an API call.
>
> **[3:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=208)** You can have data in the URL, or in the body of the request, or in the headers.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=213)** There's a lot of different kinds of auth available for APIs, and a lot of different ways to implement them.
>
> **[3:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/basic-auth-in-api-calls?u=76281980&t=219)** But knowing they all have to somehow send information through one of those three channels can be really helpful when you're trying to figure out how they actually work.

> [!info]- Semantic Content
>
> **Tools:** postman (10)
> **Env Vars:** api (4), url (3)
> **Code Keywords:** let (2), this, (2)
> **CLI Commands:** make (2)
> **URLs:** [base64decode.org](https://base64decode.org) (1)
> **Documentation:** spec (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)

#### Using authorization tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=0)** - [Instructor] In the last video, I showed you how to use basic auth in an API request.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=4)** There are some downsides to that type of authentication though, and so it has become much more common for APIs to use some form of an authorization token instead.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=13)** These tokens combine together both authentication and authorization.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=17)** In essence, the server says, anyone who presents me with this token is allowed to do the things that this token has been set up to do.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=24)** So, let's take a look at an example of this in practice.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=27)** If I log into GitHub, I can go to the developer settings in my account, go to personal access tokens and generate a new token.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=39)** Now, this token can have an expiration for how long it's valid for, and then we can pick different endpoints and actions that this token should be allowed to use.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=50)** So, I'll give it full access to the repos endpoint here, which means that I should be able to read information about all my repos, as well as create new ones.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=60)** However, if we scroll down here, I will not give it the ability to delete a repo.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=65)** So, now, let's generate this token after we name it.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=76)** And I will copy this and try it out in Postman.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=82)** So, here, on the authorization tab, and I'm accessing the GitHub API here, I'll go to the bearer token and I will paste in the one that I copied, and I'll send this request.
>
> **[1:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=97)** And you can see that I get back information about some of the different repositories that I have access to.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=104)** If you look on the header's tab of this, you can see that just like with the basic auth, Postman has automatically added an authorization header for us, and in this case, it prepends the token with bearer to let the server know that this is a bearer style token.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=120)** Now, if I go to the body tab here and set the type to JSON, I can put in a JSON object here.
>
> **[2:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=132)** Let's say name is test two, and then I'll change the type here to post.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=140)** And I'll send this request, and you can see it creates a new repo for me called test two.
>
> **[2:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=148)** And now, let's try deleting this repo.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=152)** So, over here, I've got the test two repo specified and if I give it my bearer token, so it's got my bearer token here, and I send this, say must have admin rights to the repository, so it's a forbidden response.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=169)** I do not have the permission to delete this repository.
>
> **[2:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=172)** So, we set up this token, I can create, I can get information, but I can't delete.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-authorization-tokens?u=76281980&t=176)** So, you can see how useful tokens like this are, and in the next video we'll dive a little deeper in how to get them and use them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (3), this, (2), for, (1), case, (1)
> **UI Navigation:** go to (4), scroll down (1)
> **Env Vars:** api (2), json (2)
> **Tools:** github (2), postman (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (2)
> **Analogies:** just like (1)

#### Finding Bearer Tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=0)** - [Instructor] You've already seen some examples of how to use tokens in the previous video, but it kind of begs the question, how do you find them in the first place?
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=7)** Where do they come from?
>
> **[0:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=9)** The answer to that is, it depends.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=12)** As with most things in REST APIs, there are no hard and fast rules that every application must follow.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=18)** There are, however, some general patterns that most applications use.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=21)** So let's look at some example APIs and see if we can come up with some strategies for finding API tokens.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=28)** We'll use this GitHub repo, which has a list of many different types of APIs and we're going to look at a few of the ones that use auth.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=35)** So I'll start with this IUCN list of threatened species.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=41)** And first of all, you can see that it's got this link here to generate a token.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=46)** So I'll click on it and it says that I need to fill out a form to apply to get a token.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=50)** Now, I'm not going to do that right now, but this is a pretty common way to get a token.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=53)** A token should be given to someone that's authenticated, and so you usually need some kind of form or account so that they know who this token belongs to.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=61)** But let's go back and look at this API.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=64)** Now you can see here in this first API in their doc that it takes in a token as a query string parameter.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=72)** And this is actually pretty unusual.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=74)** Normally tokens are passed in through headers.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=76)** However, as I've said before, every API is different.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=79)** So if I click on this example country list, you can also see that up here in the URL bar, they've got this example token here.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=90)** So even without applying for a token, you could just copy this example one to try a few things out on your own and get a feeling for how this API works.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=98)** So that's one example of how an API might pass tokens.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=102)** But let's look at another API.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=105)** This time we'll go to the Petfinder API.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=111)** and you can see that once again there's a button here to get an API key and a form that I need to fill out if I click on that button.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=120)** And if we go back and look at the documentation, it shows us that it uses this client ID and client secret to get the token on the token endpoint.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=133)** So this example here, curl is a command that you can use for API requests, and -d option here just means that you need to send the client ID and credentials in the body of the request.
>
> **[2:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=146)** When you do this you'll then get back the actual token that you can use, and you can add it as an authorization header on any API call that you want to make after that.
>
> **[2:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=155)** So this workflow where you exchange your client ID and your secret for the actual token is known as an OAuth workflow, and it's a very common auth scheme for APIs.
>
> **[2:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=164)** So we'll dig into it a bit more in the next video.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=167)** Okay, one more.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=170)** This time, let's look through The Dog API.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=176)** So this one here on the homepage, it shows this picture of a dog, and I bet this image is being generated by calling The Dog API.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=184)** So let's take a look at the dev tools and see if there's anything interesting to note here.
>
> **[3:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=190)** So I'll refresh the page.
>
> **[3:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=192)** And when I click on this first request here and look at the request headers, you can see down on the bottom it's got this X-Api-Key header on it.
>
> **[3:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=202)** And this shows another way that some developers will do authentication.
>
> **[3:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=205)** They will want your API key to be passed in through some custom header that they've defined.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=210)** Often these custom headers will start with X to let you know that they're custom, but they don't have to.
>
> **[3:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=215)** You'll want to pay attention to the documentation of whatever app you're using to make sure that you're providing your authorization in the way that the API expects.
>
> **[3:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=224)** So now that we've seen how a few different APIs handle tokens, what are things that we can learn from this?
>
> **[3:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=230)** Well, first of all, to get an API token, you probably need to create an account of some sort or at least fill out a form to request one.
>
> **[3:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=237)** Sometimes you are directly given an API token, but other times you might have to get one using your client ID and secret.
>
> **[4:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=244)** Once you have the token, you need to read the documentation carefully to see how to use it.
>
> **[4:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=250)** There's a lot of different ways that tokens can be used, and it's important to use it in the way that the API expects.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=255)** Otherwise, things won't work.
>
> **[4:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=257)** Sometimes looking at examples of how an API is used can be really helpful for quick and dirty testing or to figure things out.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/finding-bearer-tokens?u=76281980&t=265)** With this information, you should now be able to navigate through the auth process of most APIs.

> [!info]- Semantic Content
>
> **Env Vars:** api (19), rest (1), iucn (1), url (1)
> **Code Keywords:** let (6), pass (1)
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** make (2), find (1), curl (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** github (1)

#### Setting up OAuth
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=0)** - [Instructor] Have you ever used the login with Google option when signing up for a site?
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=4)** Do you know that this uses API tokens?
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=7)** It uses a very common auth workflow known as OAuth 2.0.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=10)** Now, OAuth can get a bit complicated, so I want to spend a few minutes making sure you understand how it works and I'm going to use the Imager API to show you.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=18)** So if you want to follow along at home, you'll need to make sure you have an Imager account.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=23)** Let's first look at trying to call one of their API endpoints without any auth setups.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=29)** There's no auth on here.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=30)** Let's send this and you can see that we get a unauthorized response.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=36)** All right, so let's try setting up an OAuth workflow in Imager.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=40)** The first thing that we're going to need to do is to actually register a client or kind of create an application that is going to use this endpoint.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=50)** We can do that by going to this oauth2/addclient URL on their API and we'll create an application here.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=59)** I'll just call this MyTestApplication and it needs to have an authorization callback URL specified here.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=69)** So this is just a URL that tells Imager where to send the user after they've provided their credentials.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=75)** For this app, I don't really care about that, so I'm going to put in a dummy callback URL that Postman has made for these kind of situations.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=82)** So [https://www.getpostman.com/oauth2/callback](https://www.getpostman.com/oauth2/callback).
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=99)** I'll then put in an email and a short description, verify that I am not a robot and submit to create this application.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=116)** So now that I've created an application, let's go back to Postman and try to request the images associated with my account again, but we'll set up an OAuth 2.0.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=127)** Now, we don't have a token for this yet, so let's scroll down on here and configure a new token.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=134)** So we'll call this my Imager App Token.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=137)** And the grant type is an authorization code.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=140)** So the callback URL is the same one that I put into the app, just this Postman dummy callback.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=147)** The auth URL here is the endpoint that the application provides for us to say, hey, can I get a token please?
>
> **[2:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=154)** When this endpoint gets a request like this, it'll prompt the user, letting them know, hey, this application would like to have a token.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=160)** Are you okay with that?
>
> **[2:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=161)** And the user can confirm they're okay with that by putting in their username and password.
>
> **[2:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=166)** And then this authorization endpoint will send the application a short-lived code that it can use in this next endpoint here, this token one, to get an access token.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=177)** The client ID and the client secret here are copied from the application and they identify which application it is that is requesting to have access to this token.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=189)** Wow, that was a lot of stuff to set up.
>
> **[3:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=191)** But let's take a quick look at a diagram that shows us what we just did with this setting up this new access token button.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=198)** So first, the application sends a request to the authorization server, which then prompts the user and says, hey, this application would like to have access to this.
>
> **[3:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=208)** Please give me your username and password.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=210)** The user provides those if they're validated.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=213)** The authorization server will return an auth code to the application and the application can present that auth code to the authorization server at the /token endpoint to get back a token.
>
> **[3:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=228)** All right, so let's try this out in Postman and see if it all works.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=233)** Let's click on Get New Access Token.
>
> **[3:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=237)** You can see that it is prompting me for my username and password.
>
> **[4:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=242)** I will allow it now the authentication is complete and I have an access token here that I can use to access the Imager API.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=255)** Since I told Postman I wanted that token to be called the Imager App Token, I can just select it from this dropdown now as my Imager App Token.
>
> **[4:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/setting-up-oauth?u=76281980&t=264)** Now, I've only just skimmed the surface of this topic but hopefully, this gives you a little bit of grounding of knowledge that will at least help you get started with using OAuth in your testing.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), api (5)
> **Code Keywords:** let (8), this, (1), this. (1)
> **Tools:** postman (5)
> **Prerequisites:** set up (2), you'll need (1), make sure you have (1), configure (1)
> **UI Navigation:** scroll down (1), click on (1), dropdown (1)
> **Versions:** 2.0 (2)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** make (1)


### 4. Hands-On API Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Testing GET calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=0)** - [Instructor] You know how to call a GET request but how do you go about testing one?
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=4)** At first glance, it seems like they'd be pretty easy to test, right?
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=7)** You just send a request to the server and check that you get back what you asked for but right there is one of the challenges already.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=13)** How do you know what you should get back?
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=16)** What if you get back something unexpected?
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=18)** Did you send the request in the wrong format or did the service or API do something wrong?
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=22)** Well, there are many heuristics that we can use to help answer these questions.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=26)** One that I want to look at is consistency.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=29)** There's a lot of different ways to look at consistency.
>
> **[0:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=32)** One way is to check if different parts of the API return the same data in the same format.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=37)** So for example, in the ToDo API that I've made, if I call the /user endpoint, you can see that we get back the username, along with some other information, like the email address, et cetera.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=50)** But if I look at the details of just one of these users, let's do user1, you can see that I only get the username and none of the other fields.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=61)** Now, I would expect, due to the consistency heuristic, that the data would be the same in both places.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=66)** And so I'd want to follow up on something like this if I noticed it in my testing.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=70)** Another heuristic I like to use is one I call the huh heuristic.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=75)** This is basically when you see something that makes you go, huh?
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=78)** Anything that's confusing or strange or unexpected.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=82)** When you have this response, it doesn't necessarily mean that there's something wrong.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=85)** You might've set something up incorrectly, for example, but it does mean you should spend a bit of time trying to figure out why you had that response.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=94)** I want to show you an example of this, but in order to do that, we need to take a quick detour to talk about query string parameters.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=100)** So if you've ever seen a URL with this question mark in it like this, you're looking at a query string parameter.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=106)** These are usually used as a way to do some kind of search or filtering on results, and they function as this key and value pair.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=114)** The first part, the part before the equals, tells you what things you're looking for, and the part after the equals tells you the value that you want it to have.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=124)** In Postman, you can type this query directly into the address bar up here, or you can enter it as a key-value pair on the params tab.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=133)** As you can see in this case, I have two query string parameters in the URL that are separated by the ampersand.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=139)** So let's try messing around with this a bit and see if we notice anything interesting.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=142)** First of all, I'll just de-select the status from here and try it with just the search.
>
> **[2:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=150)** Okay, so that's interesting.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=151)** We get back a task that has keep in it just like we have in our search, and that seems about right.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=157)** So now let's add the status query back in and try again.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=162)** And, huh, that seems unexpected.
>
> **[2:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=166)** Why would I get two tasks back when I've added something else in, an additional filter?
>
> **[2:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=173)** It seems like I should get the same number or less tasks.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=176)** So this surprising reaction would make you want to dig in a bit more to understand what might be going on.
>
> **[3:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=181)** Is it overriding the search filter?
>
> **[3:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=183)** Does the order of the queries matter?
>
> **[3:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=185)** Is there something else going on?
>
> **[3:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=187)** The huh response is a flag indicating that you should spend a bit more time doing some structured testing in this area.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=194)** I've given you a couple examples of ways that you can approach testing GET requests.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=198)** There are, of course, many other things that you can consider.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=201)** You could check, for example, how the API handles bad requests or you could try to find ways to access data that's meant to be hidden by authentication.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=210)** As with most things in testing, you're really only limited by your imagination.
>
> **[3:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-get-calls?u=76281980&t=215)** So try those GET calls, think like an explorer and you might be surprised at what you can find out about your API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), function (1), for, (1), case, (1)
> **Env Vars:** api (5), url (2)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** find (2), make (1)
> **API Endpoints:** get  (3)
> **Tools:** postman (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### Testing PUT calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=0)** - [Instructor] Put calls are used to modify objects.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=3)** In this video, let's look at some of the things that are specific to testing put calls.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=7)** With put calls, the IDs of the objects that we are modifying are an important testing consideration.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=12)** As you can see here I've got this task with ID 78 ready to modify.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=17)** If I send this request, the task is updated without issue.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=22)** But what happens if I try to specify the ID here in the body as well?
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=28)** So let's try ID and let's put in a different ID than the one that we have specified in the URL.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=36)** Let's send that and see what happens.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=40)** Okay, so this is good.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=41)** It looks like it used the ID from the URL and that's something that I always check for when testing put requests.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=49)** Another check is what happens if you give it an incomplete body.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=53)** So let's look at this with the user endpoint.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=56)** We'll first get a list of all the users and down here you can see we've got this test user and it has this email test at [test.com](https://test.com).
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=64)** So now let's try to modify this user.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=67)** So I've put the username in the URL here and we have a body to send, but let's try to modify this without sending the email field.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=77)** So I'm going to remove this field and before I send this request, let's stop and think for a minute about what you would expect to happen here.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=85)** First of all, it could give us an error saying that it needs us to specify the email field or on the other hand it might just accept the inputs that I've given it and only update these ones, so the username and password and just ignore the email address field.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=100)** Either of those results would be fine.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=101)** But let's see what happens when I send this request.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=106)** Oops, I don't think it should do that.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=109)** It has set the email address to null.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=111)** By sending an incomplete body, we've caused it to delete some data.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=115)** Now, sadly this isn't even the first time I've seen this kind of bug, so it's definitely something that's worth checking when testing put calls on an API.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=123)** Now let's look at one more example.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=124)** This one falls into the category of being more security related.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=127)** Although this course doesn't get into the details of security testing on an API, there are some basic things that we can and should check for.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=134)** For example in this case, I want to see what happens if I try to modify a user that I'm not authenticated to change.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=140)** So here on the authorization tab, I've got a token and I'm just going to copy this token and I'm going to go over to this user slash me end point.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=151)** I'll paste the token in here and I will send so this endpoint tells me what user this token is for and as you expect, it's for the test user.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=161)** So that's good, but now let's go back here and let's try to modify a different user.
>
> **[2:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=168)** Let's say user 1.
>
> **[2:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=173)** And let's try to modify the password here to something like new password and let's send this and see what happens.
>
> **[3:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=186)** So that's good.
>
> **[3:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=187)** We got a not authorized error which is good because I should not be able to change another user's profile.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=194)** As always, there's much more to learn and explore in this area.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-put-calls?u=76281980&t=198)** Keep exploring and trying out new things and building out your own set of testing ideas for put requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), delete (1), for. (1), case, (1)
> **Env Vars:** url (3), api (2)
> **URLs:** [test.com](https://test.com) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Testing DELETE calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=0)** - [Narrator] Delete calls are pretty self-explanatory.
>
> **[0:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=2)** They allow you to delete existing resources from the server.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=6)** As you can imagine, there are many things you want to carefully test when it comes to deleting things.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=11)** You don't want to delete the wrong things.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=13)** We want to make sure that we have all the right checks in place to prevent things from being deleted that should not be.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=18)** This can take the form of authentication and authorization.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=21)** In other words, making sure you can't delete other users' content for example.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=25)** Or making sure that only users with certain permission levels can delete things.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=29)** It can also take the form of data types.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=31)** Perhaps only certain things on your server can be deleted.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=34)** You may have shared resources that you don't want to allow people to delete or you might not allow deleting of an object until its child objects have been removed.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=42)** Alright, let's take a look at some examples.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=44)** For this first example, let's look at trying to delete another user's task.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=50)** So let's first create a task as user two and we'll get the list of tasks here and check and make sure that this task has indeed been created.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=64)** And then we'll also note the ID of this.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=67)** So the ID is 82 and we'll keep that in mind later when we want to try to delete it.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=72)** But first, let's get a token for user one.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=76)** So I've put in the username and password for user one and I'll send this request, get back a token and I'll copy this token and we'll go over to delete tasks here, and we'll put in 82.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=91)** That's the task we want to delete and we'll paste in the token that we got for user one.
>
> **[1:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=97)** So remember, this Task 82 was created by user two and we'll send this request and we'll get an error.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=103)** We could not delete this task.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=105)** We get back a 404 error.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=108)** You might notice, and it might seem a bit weird since we know that this task does exist, but it's actually a common practice to return a 404 when you don't have permission for a particular object.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=117)** This prevents nefarious actors from knowing if a resource exists or not.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=121)** One way to think about delete calls is to do what we just did and make sure that you can't delete things that you shouldn't.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=126)** But there's more complex testing situations to consider as well.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=130)** For example, let's think about the case where we have related data.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=133)** There's obviously a dependency in this app between the tasks and the users, right?
>
> **[2:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=138)** So what would happen if we deleted a user?
>
> **[2:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=141)** I won't actually delete this user, but think about it.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=144)** If the only user that can delete a task is the user that created it, we might be stranding those tasks in the system forever.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=152)** Now, this might be okay, but it's the kind of thing that's important to think about and test when you're looking at delete calls.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=157)** You've learned a few things about testing delete calls.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-delete-calls?u=76281980&t=160)** Now it's time to use your creativity and see what other things you can come up with.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (17), let (5), self (1), this. (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** in other words (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Break the API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=0)** - [Instructor] You've come a long way and have learned a lot about how APIs work.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=8)** So now it's time to combine it all together and try and break the API.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=13)** Part of a tester's job is to find problems with software.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=16)** And there are plenty of problems with this application, so I want you to dig around and try to find some of them.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=22)** Put on your destructive tester hat and combine it with all the things that you've learned about APIs and see if you can break this API.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=28)** So the main kind of thing I'm talking about here is having the API give you back a 500 error.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=33)** A 500 error means something went wrong and the server has crashed.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=37)** Feel free to interact with the API through the user interface and through Postman.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=41)** But don't forget that if you're going through the user interface, you might come across problems that are UI-related and might not have to do with the API itself.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=48)** Don't worry too much about those.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=50)** The goal of this exercise is to find problems with the API itself.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=54)** I'm not going to give you too many hints for this one.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=57)** But don't forget that if you're trying to break things, you're going to want to try invalid inputs and things that aren't on the happy path.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=66)** Most of the time when there are errors, the application should recover gracefully and allow you to keep testing.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=70)** But if it ever gets to a state where everything you do causes an error, you might need to restart the application.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=76)** You can do that by going to the command prompt that you started the app from and hitting the Control key along with the C key.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=83)** That will shut down the server.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=85)** You can then restart the app by calling poetry run uvicorn main:app --reload.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-break-the-api?u=76281980&t=99)** This should restart the application for you.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **CLI Commands:** find (3)
> **Code Keywords:** interface (2)
> **Tools:** postman (1), command prompt (1)
> **Best Practices:** don't forget (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Break the API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=0)** - [Presenter] It is always fun to break things.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=7)** So hopefully, you had a lot of fun trying to break the API.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=10)** I know of a couple of ways to break this API that I'll show you now, but I wish I could see some of the things that you found.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=15)** Feel free to share them in the Q and A comments for this course if you want.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=18)** I'm sure that with your creativity, some of you'll have found issues that I don't even know about.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=22)** Well, let's take a look at the era that I do know about.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=25)** I'm not going to go straight to the issue, but instead I want to show you how I might approach this challenge and maybe more naturally discover them.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=31)** So we'll start with just sending a get request to the tasks endpoint to see the list of tasks that is in this app.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=39)** And I'll just pick any random one.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=40)** So I'll go with the first one here.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=42)** So task 76, let's take a closer look at that.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=46)** We'll send that request and everything looks fine here.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=50)** So let's try doing some invalid or unexpected things to see if we can break something.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=55)** So first, maybe I'll change this to an ID that's not there and that seems to be fine.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=61)** Just a blank list.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=62)** Alright, what about if I change it to a negative number for the ID?
>
> **[1:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=68)** That seems to work okay as well.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=70)** So now, let's try something else.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=72)** Let's try putting in text for the ID and see what happens.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=77)** Okay, so this says, it's not a valid integer.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=79)** That's good feedback for us.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=81)** Seems to be pretty reasonable and maybe even that negative number could have given feedback like this as well.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=87)** But nothing too out of the ordinary here.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=88)** So, let's try something else.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=90)** Let's try deleting this task.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=93)** So its task 76 and we'll delete it.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=99)** Alright, so deleted is true, looks like everything was successful, but let's try maybe modifying that task that we just deleted.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=108)** So we've got task 76 here and we'll modify the description to update deleted task
>
> **[1:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=119)** and let's try to modify that.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=123)** Aha. Look, we've got a 500 error, so it looks like the server doesn't properly check if a task exists before trying to update it.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=134)** Now that's interesting.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=134)** At this point, I would want to take that thought and try doing some other actions on this deleted task like maybe try update the status, et cetera.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=141)** But I'll leave that as an exercise for you to try out on your own.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=144)** I always find it fun to go into Hulk tester mode.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-break-the-api?u=76281980&t=147)** Hopefully, you had fun with this as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), else. (2), delete (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (upbeat music) (1)

#### Understanding POST calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=0)** - [Presenter] Before we get into the details of testing POST calls, I want to show you how they work.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=5)** As you know, POST calls are usually used to create new resources on the server.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=9)** When doing this, we need to tell the server information about what we want to create.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=13)** This information is usually passed in through the body of the request, but there's a few different ways that we can set up the body of the request.
>
> **[0:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=19)** So let's take a look at a couple of them.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=22)** I'll use the Postman Echo API for this example.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=25)** It doesn't actually create new resources, but rather, it just echoes back what you sent, so you can get a better understanding of how things work.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=31)** And on the body tab here, you can see there's a number of different options for body types.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=35)** There's this form data, the Form URL and coded, binary and raw.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=40)** These two are very similar.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=41)** Binary is usually used to upload files.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=43)** And then this raw option gives us a couple of additional options on this dropdown here as well.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=49)** So let's look at a couple of these.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=51)** First, we'll look at this raw text option and let's just put in some text here and send it.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=61)** And you can see that this just echoes back the data to us.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=64)** But if we go over to the headers tab and look at the headers, you can see this content type header here has been set to text slash plane.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=74)** Now this is important. When data is sent to the server in the body of the request, the server doesn't necessarily know what kind of data it is.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=81)** It will need to use this content type header to figure out how to properly decode that data.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=86)** Now let's go back here and switch to JSON data and we'll put in some JSON data.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=92)** So, let's say test and text.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=98)** And we'll send this.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=102)** Once again, the server just echoes back the response.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=105)** And if we look at the headers, the content type header has now been changed to application slash JSON.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=111)** And let's look at one more example.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=112)** So we'll go back to the body tab.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=114)** We'll select this form data.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=116)** And form data is often used as the name implies to send form data from a webpage to a server.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=123)** In that case, the keys will often be the IDs of the different elements of the form, and the values will have the values that the element has.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=130)** But for this, we'll just try something.
>
> **[2:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=132)** So we'll say my_key and my_value.
>
> **[2:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=138)** Send that and we'll once again, look at the headers and see that it has now set it to multipart slash form data for us.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=149)** Now, most API tools will take care of these headers.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=151)** So you don't really need to know every detail about how they work, but it's good to be aware that they are important when you're sending body data.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=157)** For example, if we look at the documentation for the to-do list API, you can see that the slash token endpoint requires a username and password and it requires them to be passed in as x-www-form-urlencoded bodies.
>
> **[2:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=175)** So let's try that out in Postman for a second.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=178)** We'll choose the Form URL encoded option.
>
> **[3:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=183)** We'll put in a username and a value of user one.
>
> **[3:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=188)** We'll put in the password and the value is one, two, three, four, five.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=194)** And we send that, change this to POST and we send that and we get back an access token.
>
> **[3:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=203)** But what would happen if we tried to send this as JSON data instead?
>
> **[3:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=208)** What if we put in username, user1, and our password again?
>
> **[3:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=219)** And now when we send it, we are told that it's an unprocessable entity and that's because it's sending the data in the wrong format.
>
> **[3:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/understanding-post-calls?u=76281980&t=226)** So now, that you know how it works to send data and POST requests, we're going to take a closer look in the next video at how to go about testing POST requests.

> [!info]- Semantic Content
>
> **Env Vars:** post (5), json (4), api (3), url (2)
> **Code Keywords:** let (7), this, (2), switch (1), this. (1), case, (1)
> **API Endpoints:** post  (4), post
 (1)
> **Code Identifiers:** my_key (1), my_value (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** postman (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** dropdown (1)

#### Testing POST calls
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=0)** - [Instructor] POST calls give us a whole new set of testing challenges.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=4)** We're now giving the API users the ability to create things in our service.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=8)** And so we need to make sure that they cannot do so in a harmful way.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=11)** There are two main ways that people can harm our app through bad POST calls.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=15)** The first is malicious users.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=17)** We'll talk about security testing your API later in the course.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=20)** The second way though is users accidentally doing the wrong thing.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=24)** For example, what happens if they send the data in the wrong format or try to overwrite data that's already in the system?
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=29)** The same heuristics of consistency and surprise that I talked about in testing GET requests apply here.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=34)** With POST requests we also need to think carefully about the data inputs.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=38)** In some ways, testing a POST call is similar to testing input fields in a graphical user interface.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=43)** We need to think about things like the boundaries of the data, what data types the field expects, and the size of the data.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=49)** So let's look at a few of these in the to-do list API.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=53)** We can start with boundaries on the description field.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=56)** So one boundary is to just send an empty description.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=62)** That seems to work fine but what about the other side of the boundary?
>
> **[1:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=65)** What if I make this description really long, long description and then I'll just copy and paste this multiple times to make it actually long.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=78)** And that seems to work okay as well.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=80)** But if I wanted to, I could keep going and see if I could make it longer to see if there's issues.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=84)** So for some of these boundaries we could also look at the data types.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=88)** This is meant to be a string, but what happens if I try some other characters, like maybe I'll put in some numbers and symbols and see what happens.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=100)** So you can see Postman's already telling me there might be a problem with this, but let's send it and see.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=105)** So we have an invalid escape.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=106)** It looks like it can't handle that slash character, so that's interesting.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=110)** But let's try some other types of data too.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=113)** Like what if I pass in some HTML here?
>
> **[1:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=119)** Let's see if it will accept this.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=123)** Now that's interesting, it accepts this, but I wonder what does the UI do with this?
>
> **[2:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=129)** Now it's interesting, this long description is messing things up a bit, but you can see there's an empty spot here where there should be a task.
>
> **[2:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=136)** And if we edit this, you can see that this is where the JavaScript is that we injected into this.
>
> **[2:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=143)** So it seems like the app isn't sanitizing these inputs very well.
>
> **[2:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=148)** And just think about some of the things that you could potentially do with this.
>
> **[2:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=150)** You might be able to change the look of the site or maybe even inject a redirect attack.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=156)** A POST request are meant to make new objects and not to overwrite existing ones.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=160)** So you can see that I don't need to give an ID here in the body as a server automatically creates one for me.
>
> **[2:46](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=166)** But what would happen if I did specify one?
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=169)** Well, let's first go and see what ID we're at.
>
> **[2:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=172)** So it looks like we're at around ID 89.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=178)** So let's go back here and let's put in the next ID after that.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=184)** So we'll specify the ID and we'll say 90.
>
> **[3:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=190)** And let's change this to do something, send, and that seems to work okay.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=199)** But now what happens if we remove this and send this again?
>
> **[3:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=206)** Huh, that's interesting.
>
> **[3:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=209)** Why would it say that this task already exists?
>
> **[3:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=213)** Well, let's send it again and you can see that now it succeeds and it's at ID 91.
>
> **[3:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=218)** So the problem is that when I manually specified the ID it created a task with that ID.
>
> **[3:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=223)** But then when I tried to create another task without the ID the server tried to auto increment the ID from where it thought it was at but it didn't know about the task that I had put there, the ID of that task.
>
> **[3:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=234)** So it incremented to a value that I had already put there.
>
> **[3:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=237)** Now, since that ID already existed, it couldn't add the task and it told us, hey, it already exists.
>
> **[4:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=242)** So usually POST requests don't let you specify a managed ID like this, but it's one thing to watch out for when you're testing these calls, as you can see, it can cause issues.
>
> **[4:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=251)** So at this point in the course we've covered the major rest API actions.
>
> **[4:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=254)** There are of course some other options that are available but they're not often used in practice.
>
> **[4:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/testing-post-calls?u=76281980&t=258)** And if you understand how to think about testing the four that we've covered, you're well on your way to being an API testing professional.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (4), this. (3), interface (1), pass (1)
> **Env Vars:** post (6), api (5), html (1)
> **API Endpoints:** post  (6), get  (1)
> **CLI Commands:** make (5)
> **Cross-References:** later in (1), in the next (1)
> **Analogies:** for example (1), similar to (1)
> **Tools:** postman (1)
> **Warnings:** watch out (1)

#### Challenge: Access protected endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=5)** - [Instructor] Now that you know how to test the various API endpoints, it's time for another hands-on testing challenge.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=12)** The to-do application has a protected endpoint here called user/admin.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=17)** You can see on the Authorization tab that I've got a token specified.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=22)** And if I send this, it says, "The user cannot access this endpoint."
>
> **[0:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=26)** So this token is for user1.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=28)** And as a reminder, you can get this token using the /token endpoint and putting in the username and password.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=34)** Your challenge is to see if you can access the data behind the admin endpoint.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=39)** Presumably, if you want to access that data, you're going to need an admin token.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=44)** Your challenge is to see if you can get access to the information behind this endpoint.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=50)** You won't need any advanced security testing skills to solve this challenge.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=53)** You should be able to access the information using only things that you've already learned in this course.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=59)** Now, I'll give you a couple of hints to guide you on your way.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=61)** So don't forget to pay attention to the authorization headers.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=64)** And remember, that there's a list of endpoints documented at /docs, and you also might need to collect some information from a couple of other endpoints to find everything that you need to access this endpoint.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=76)** So I strongly encourage you to take a few minutes to see if you can solve this challenge on your own.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=81)** I'll show you the solution in the next video, but I'm going to keep saying this, you'll learn the most if you try it out on your own before watching the solution.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/challenge-access-protected-endpoints?u=76281980&t=89)** So try this out and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), protected (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)

#### Solution: Access protected endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=0)** - [Instructor] I hope you had some fun solving the previous challenge but in case you ran stuck on anything, let's take a look at how I went about solving it.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=12)** Obviously, this is just going to be my approach and for the sake of this video, I've compressed it down to a simple set of steps.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=17)** What you did will probably look different and that's totally fine.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=20)** In fact, it's great.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=21)** It's all part of the learning process.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=25)** Okay, so how did I go about solving this?
>
> **[0:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=27)** Well, if you remember, we're trying to access the data behind this protected endpoint.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=31)** In order to do that, we probably need to get a bearer token that has access to this.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=35)** And since it's for the admin user, we could guess that we need the bearer token for the admin user.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=40)** But how do we get it?
>
> **[0:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=41)** Well, let's just start with a quick check to the list of users to see if it's in the list and we can see that the admin user is here.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=53)** So now we could go to the get token URL and make some guesses as to the password and see if we get back any information.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=60)** But let's actually go a step further and see if we can control the user itself.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=65)** So let's first try creating a user called admin and see if we can kind of override that existing user.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=74)** So we've got the method set to POST, and I've got admin and I've set the password to 12345.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=79)** So we'll send this and it looks like that's not going to work.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=83)** It says that admin user already exists.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=86)** It's not going to update it for us.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=88)** Oh well, let's try something else.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=90)** Let's try modifying the admin user instead.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=99)** So we'll go over here and we'll set the user that we're going to modify it to admin and we'll also put the username and password in here and let's send this request and see what happens.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=113)** Okay, that's interesting.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=115)** It looks like it might have worked.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=118)** So let's go back over to the token endpoint.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=122)** Let's put in our admin user.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=125)** And we had set the password to be 12345.
>
> **[2:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=128)** So let's send this and voila, we've got a token.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=134)** So I'll copy this and we'll try this endpoint.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=140)** Use our admin token and success.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=145)** We have accessed the endpoint.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/solution-access-protected-endpoints?u=76281980&t=147)** As I said at the start of this video, your route to figuring this out probably looked different but hopefully you still had fun exploring and testing this application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), protected (1), this. (1), override (1), else. (1)
> **Env Vars:** url (1), post (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Additional API Testing Consideration

> [↑ Back to Table of Contents](#table-of-contents)

#### Using mocks, stubs, and fakes in API testing
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=0)** - [Instructor] You might have heard about terms like mocks, stubs or fakes in relation to unit testing before.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=5)** If those are scary terms to you, don't worry.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=7)** In this video, we'll dig into them and I'll help you understand what they mean and also how you can effectively use them in your API testing.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=14)** So first, let's start with some definitions.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=16)** What do we mean by these things?
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=18)** Well, just like how in a movie, an actor might have a stunt double, so in testing, we can have test doubles.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=24)** These are things that we can use to stand in for some real part of the system.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=27)** This is what we're talking about when we talk about mocks, stubs and fakes.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=31)** Mocking lets you replace a real implementation with a fake one.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=34)** This can be helpful if you're trying to check one part of an API, but you need some data from elsewhere, maybe even from a third-party service, and you don't want to or can't use that service in your testing environment.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=45)** In a case like that, you could create a mock server and you could get the application to send an API call to the mock server instead.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=51)** So let's take a quick look at how you could do this in Postman.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=55)** I've selected the mock server here on the sidebar and if you don't see it, you might need to configure your workspace to enable the mock servers.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=63)** Once you've done that, you can click on create mock server and we'll mock out the task's endpoint of the to-do list application.
>
> **[1:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=73)** I'll leave the response code as 200 and I want to test sending a empty response body, so I'm going to put a response body that's just an empty list.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=83)** Then I'll click on Next.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=85)** I'll name this server Mock ToDo and I'll select the Todo Environment that I've made previously and then create the mock server and that's all there is to it to create a mock server in Postman.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=99)** Now, I can copy this URL and I can take a look at that task's endpoint that we created, and sure enough, it gives back an empty list.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=113)** But I also want to show you that this isn't something that just sits inside of Postman.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=118)** So I put it here in the web browser and when I send this request, you can see that we also get back a blank list.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=126)** I'm sure you can see how powerful this would be for testing.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=129)** If you want to test how things work when there's no to-do list items, it could be hard to do.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=134)** Imagine that the application is running in a shared test environment and if you deleted all the to-dos, you'd delete other people's work.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=140)** In this case, by pointing to a mock server, you can get the data set up without affecting anyone else.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=145)** And this is the power of test doubles.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=147)** They let you create something fake for part of the system so you can focus on testing other parts of the system.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=153)** Of course, just as with any testing tool, we need to be careful that we're using it correctly.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=158)** By creating a test double, we are testing with something that's not the actual implementation and so we could miss things.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=163)** We need to be careful that when we use these, we're also doing some testing with real things as well.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=169)** At the end of the day, using test doubles is a powerful tool that can help you when you're testing APIs.
>
> **[2:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=175)** We need to be careful that we wield these tools correctly.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=178)** Although things like mocks and stubs and fakes can be a bit tricky, the concepts behind them are powerful tools that help you out on your API testing journey.
>
> **[3:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=186)** Don't let their complexity scare you away from using this powerful concept.
>
> **[3:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/using-mocks-stubs-and-fakes-in-api-testing?u=76281980&t=190)** Use it to level up your testing skills.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (1), case, (1), else. (1)
> **Env Vars:** api (4), url (1)
> **Tools:** postman (3)
> **Warnings:** be careful (3)
> **UI Navigation:** click on (1), select the (1)
> **Analogies:** just like (1), imagine (1)
> **Prerequisites:** configure (1), set up (1)
> **Definitions:** is a  (1)

#### API automation
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=0)** - [Instructor] We've spent a lot of time so far looking at how to test an API, but since APIs can often run more quickly and tend to lend themselves much more to automated checking, it's often beneficial to use them to run test automation.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=12)** Exploratory testing gives us the insight that we need in order to automate, but exploration and automation are usually trying to achieve different things and so we need to think about them differently.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=23)** Exploration can lay the foundations for the automated tests that we want, but exploration is about discovery, it's about finding new things, it's about understanding what additional things we might need to investigate or dig into in the system.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=33)** Automation on the other hand is more about repeating things.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=36)** Automation relies on exploration for figuring out what to automate, but it requires a different approach.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=42)** It's all about repetition.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=43)** So if we need to repeat things, what things should we repeat?
>
> **[0:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=47)** Well, there's a few things that we should consider.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=49)** One thing is things that don't change.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=51)** If we automate those things, it's more likely that failures will point to real issues and not just to some expected change in the system.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=58)** Another thing to consider is things that you would want to know about if they do change.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=62)** What things should not change in the API?
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=64)** What things might you want to be warned about if they do change?
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=67)** What things do the consumers of the API depend on not changing?
>
> **[1:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=72)** Even in API automation, there are multiple ways to approach the problem so let's think briefly about two possible approaches to automating API tests.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=79)** The first approach we could call a data-driven approach.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=83)** With this approach, we might be doing something like checking every endpoint to make sure that it's up or checking every combination of inputs that an endpoint has.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=91)** Now, this approach could lead to some potential challenges as well.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=95)** For example, if we were calling many endpoints with many different data input combinations, it could take a long time to run.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=101)** It could also get to be a lot of work to maintain if you aren't careful when you create the tests, small changes can cause a lot of tests and need to be updated.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=109)** Another approach we could take, we could call a workflow driven approach where we try to execute a series of API calls that could mimic the kind of workflow that a user might do.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=117)** In this case, we're trying it out a bit more like a customer would.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=120)** We are following a workflow that a customer might follow but this too can give us some challenges.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=126)** For example, how do we pass data from one call to the next in the workflow driven scenario?
>
> **[2:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=130)** The sequence of requests will most likely rely on data from previous requests and so we would need to be able to pass data from one request to the next.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=139)** Either of these approaches can work and maybe even a mix of them with some other approaches would make sense for your application.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=145)** As we think about automation tests, there are considerations that did not matter when we were just manually exploring the API.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=152)** When we get into this world, we need to realize that we're much closer to coding, and so we need to learn some of the ideas of code, things like how to share stuff so we don't have to repeat it, or how to properly encapsulate data so that it's easy to understand how a test works.
>
> **[2:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=165)** Not everything that you might look at when exploring an API needs to be automated.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=169)** Think carefully about why you're doing it and how to ensure that it will continue to add value far into the future.
>
> **[2:55](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=175)** If you try to automate things that computers are not very good at, it'll take a lot of time and be painful, so think carefully about what you choose to automate.
>
> **[3:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=182)** This means that overall we need just to think carefully about test automation.
>
> **[3:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=186)** Think carefully about what you're automating, why you're automating it, and what the goal of the automation is.
>
> **[3:12](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=192)** This course has been focused on figuring out what to test and how to effectively find problems.
>
> **[3:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=197)** These are valuable skills to have, but they're a bit more exploratory testing focused.
>
> **[3:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=202)** If you want to automate, make sure that you learn some of the skills that you need to do a good job with automation.
>
> **[3:27](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=207)** I've seen far too many automation initiatives fail due to people trying to automate things in the same way that they approach exploration.
>
> **[3:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/api-automation?u=76281980&t=214)** Take some time, learn this stuff, and make sure that you're automating the right things.

> [!info]- Semantic Content
>
> **Env Vars:** api (8)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** pass (2), let (1), case, (1), continue (1)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Performance testing
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=0)** - [Instructor] When you're interested in performance characteristics of a system, an API can help you get the answers that you're looking for.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=6)** They can allow you to programmatically access certain functionality of the system and yet include enough of the system to give you kind of a realistic feeling for how it will work in real-life.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=15)** Performance testing itself is actually a pretty broad term.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=18)** It can refer to things like speed testing, like looking at how fast a page responds, or it can look at load testing, how many requests per minute a server can handle or how many items a page can deal with.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=29)** It can also include things like stress testing and other things related to performance.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=33)** For the purpose of this video, we'll look at two different things that you can do for performance testing with an API.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=39)** These are just examples, and so don't limit yourself to thinking that these are the only things you can do with performance testing an API.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=45)** The first thing I want to look at is using the API to help you with load or stress testing parts of your application.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=51)** So, for example, imagine we're trying to stress test our ToDo App.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=54)** We might want to see how well can this UI handle it if we have hundreds or maybe even thousands of ToDo items.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=60)** Now, we could manually create them.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=61)** Go in here, type in a task, add. Type another one, add.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=64)** But that would be a time consuming and boring practice.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=67)** By using an API, we can just create a simple script that will create each of these ToDos for us.
>
> **[1:13](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=73)** And then when it's done, we can load the page and see how it performed.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=77)** You can create scripts like this in Postman, but I said earlier that this course is about API testing and not about any one tool.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=83)** So I'm going to show you another way to do it.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=86)** I'm going to create a really simple Python script to do this.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=90)** Now, I've loaded the todo-list app folder into Visual Studio Code, but feel free to use whatever code editor you're most comfortable with.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=96)** And at the top level here, I've got this performancetestsetup.py file.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=101)** And in this file, I'm going to put the following code.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=104)** So I'll start with importing a library, and this is the requests library, which is the most common Python library for interacting with APIs.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=113)** Then I'll paste in some code here, and what this code does is it loops 10 times.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=119)** And on each loop, it creates a new task for us.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=122)** So it calls post on this task's endpoint, and it gives it this body here.
>
> **[2:08](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=128)** So let's save this and then go over to a new command prompt and I need to make sure the app is still running in another one.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=137)** And then I'm in my todo-list-testing folder here.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=141)** So I can call my script, but I'm going to do it using poetry.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=144)** So I'll do poetry run python, and this way I know that I have all the libraries that I need installed.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=153)** And then I will call my file and I'll hit Enter.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=160)** And now if I look back in the ToDo App, I can see that it has created these ToDos for me.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=167)** So you can see how this would be a powerful tool for setting up data.
>
> **[2:51](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=171)** Another way to think of performance testing with an API is to think of it in terms of understanding how long it takes to do certain actions.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=178)** So if I send a request in Postman, you can see that it tells us the time that it took for this request to process.
>
> **[3:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=185)** If we were doing this kind of performance testing, we'd call this request a number of times and look at some stats, like maybe the average runtime to see how fast this request typically is.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=194)** Now, you could do this kind of testing in Postman or with Python or something like that, but usually you want a tool that's more specialized to it, like JMeter.
>
> **[3:23](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=203)** We won't be getting into tools like that in this course, but for now, it's good to be aware that things like this exist and that you can dig into them more if you need them in your work.
>
> **[3:31](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=211)** As I said before, there are other ways that you can do performance testing on an API.
>
> **[3:36](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=216)** So don't let these examples limit you.
>
> **[3:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/performance-testing?u=76281980&t=218)** Hopefully, they've given you some ideas for things that you can do in looking at APIs that you might be testing.

> [!info]- Semantic Content
>
> **Env Vars:** api (8)
> **CLI Commands:** python (4), make (1)
> **Tools:** postman (3), visual studio (1), command prompt (1)
> **Code Keywords:** let (2), for. (1), this. (1)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** performancetestsetup.py (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Security testing
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=0)** - [Instructor] We all know how important security is in the modern world of web development.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=4)** This is of course no less true when we're dealing with APIs.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=7)** This course is not about security testing so we won't spend a lot of time on it, but I do want to touch on it briefly so that we don't forget that it's an important consideration when it comes to designing and testing APIs.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=17)** Sometimes we can think that security's all about the auth service and making sure that people can't get your credentials or get around to authorization APIs.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=24)** This is, of course, very important, but it's just the tip of the iceberg when it comes to security testing an API.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=30)** I do want to mention something here though that's very important.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=33)** One of the most important rules of authentication and authorization is don't try to implement your own version of it.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=39)** Unless you're a big company like Google that has the resources to take the time to do it right, you'll likely make mistakes.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=45)** And this is an area you don't want to make mistakes.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=47)** Use a standard auth protocol and don't try to reinvent the wheel in this area.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=52)** However, even if you are using a good auth service, there are still attack vectors that you should be aware of.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=57)** You've probably heard of things like SQL injection or cross-site scripting and the reality is these vulnerabilities can be found through APIs as well.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=65)** And in fact, it's often at the API level that attackers explore these things.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=70)** APIs lend themselves well to automation and when you're trying to hack a site being able to try out a lot of different things with automation makes it easier to do.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=78)** So many hacking attempts actually happen through the API.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=82)** You should be thinking about ways that your API could be used by hackers, but another thing to consider is overlapping areas of responsibility.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=89)** So some things like cross site scripting can be blocked at either the API or the UI level.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=94)** This can make it unclear as to which one is going to do that blocking.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=98)** When there's uncertainty like this it's doubly important to check and make sure that someone is taking care of it.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=104)** Another area to be careful of an API testing is to check that all validation is correctly done.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=110)** Since APIs can be run programmatically, doing fuzz attacks where you just send random inputs to the API or cycle through known lists of validations that people forgot can be done quite easily.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=121)** So it's very important to check these kind of things.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=123)** If the API expects the resource to be an integer, we need to make sure that it only accepts integers, otherwise we could end up with problems.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-foundations-22763217/security-testing?u=76281980&t=131)** Security testing is a big specialty in its own right, but don't be afraid to try out a few things like this and see how your API fares.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), sql (1)
> **CLI Commands:** make (5)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** be aware (1), be careful (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [[Dave Westerveld]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/api-testing-foundations-4403636)

## Skills Covered

- API Testing

## Path Context

### In [[Getting Started with Software Testing]]
← [[JMeter- Performance and Load Testing]] | **8 of 12** | [[Postman Essential Training]] →

## Appears In

- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Postman Essential Training]] — API Testing

---

[↑ Back to top](#)