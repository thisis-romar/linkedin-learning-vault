---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: asp-dot-net-core-token-based-authentication
url: "https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication"
duration_minutes: 119
duration: 1h 59m
level: Intermediate
updated: 8/27/2021
learners: 27378
skills:
  - Tokens
  - ASP.NET Core
exercise_files: true
github: "https://github.com/LinkedInLearning/asp-net-core-token-based-authentication-2427293"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFnlnbspVQ8Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629914997184?e=2147483647&amp;v=beta&amp;t=h8l95VZ9QNX4Cc4yLNypgET229UYJUIj9pzD2hG4VDg"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]]'
next_courses:
  - '[[ASP.NET Core in .NET 6- Dependency Injection]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":6,"total":9,"prev":"Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security","next":"ASP.NET Core in .NET 6- Dependency Injection"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/tokens
  - skill/asp-net-core
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/ASP.NET%20Core-%20Token-Based%20Authentication.md)

![ASP.NET Core: Token-Based Authentication](https://media.licdn.com/dms/image/v2/C560DAQFnlnbspVQ8Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629914997184?e=2147483647&amp;v=beta&amp;t=h8l95VZ9QNX4Cc4yLNypgET229UYJUIj9pzD2hG4VDg)

# ASP.NET Core: Token-Based Authentication

> Are you a developer needing to learn about token-based authentication? This course deep dives into the difference between authentication and authorization, the difference between traditional and token-based authentication, and how to set up this new authentication mechanism in .NET Core applications. Instructor Ervis Trupja steps through everything you need to get started with authentication, then

> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication) | 1h 59m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Why use exception token-based authentication?
  - What you should know
- [**1. Getting Started with Authentication**](#1-getting-started-with-authentication) (4 videos)
  - Authentication vs. authorization
  - Cookie-based vs. token-based authentication
  - What is identity platform?
  - JSON Web Token
- [**2. Token-Based Authentication**](#2-token-based-authentication) (11 videos)
  - Setting up Entity Framework Core
  - Adding default identity tables using EF Core
  - Configuring token-based authentication
  - Adding the authentication controller
  - Registering new users using UserManager
  - Logging in users
  - Generating an access token
  - Adding the RefreshToken table
  - Generating and storing refresh tokens
  - Injecting TokenValidationParameters
  - Refreshing expired tokens
- [**3. Role-Based Authentication**](#3-role-based-authentication) (4 videos)
  - Seeding the database with roles
  - Adding role claims to tokens
  - Adding role authentication to a controller
  - Adding multiple roles to a controller
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps for learning more token-based authentication

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Why use exception token-based authentication?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=0)** - [Ervis] One of the most important features in building robust applications is to make sure that your apps are secure.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=8)** And the basis of all security is controlling access to your apps.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=14)** We'll start off by talking about the difference between the authentication and authorization and the common capabilities of the Identity framework.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=23)** Next, you'll learn how to register users to your app, generate access and refresh tokens, and also store the refresh tokens in an SQL database using the Entity Framework core.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=36)** By the end of this course, you'll learn how to add role claims to an access token and implement the role-based authentication in a Web API.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=45)** Hi, I am Ervis Trupja and I specialize in building .NET web applications.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=51)** Join me in my LinkedIn Learning course as we explore the token-based authentication in an [ASP.NET](https://ASP.NET) Web API application.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), net (2), sql (1), asp (1)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [ervis] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=0)** - [Instructor] Let us talk about a couple of things that you need to know.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=4)** During this course, we will add token based authentication to web API application.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=11)** So having a basic understanding of web APIs is recommended, but it is not required.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=18)** As a programming language I'll use C#.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=21)** So having basic knowledge of C# is required.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=25)** I'll be using the .NET core version 5.0.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=28)** So having some basic knowledge of any .NET core framework is recommended, but it is not required.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=35)** As my coding editor, I'll be using Visual Studio 2019 Community Edition, but you can use any version of Visual Studio 2019 or later.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=46)** Throughout these course, if you'd like to follow along while I'm coding, you can download the exercise files from the GitHub repository of these course.

> [!info]- Semantic Content
>
> **Env Vars:** net (2), api (1)
> **Tools:** visual studio (2), github (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Best Practices:** recommended (2)
> **Code Keywords:** let (1)
> **Versions:** version 5 (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Authentication

> [↑ Back to Table of Contents](#table-of-contents)

#### Authentication vs. authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] Authentication and authorization are two really important concepts when it comes to securing your web APIs, but also your applications in general.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=11)** Even though these two concepts sound similar to each other, they are different.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=17)** Now, per definition, authentication is the process of validating the identity of a registered user who is accessing a service or an application.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=28)** And authorization is the process of validating the authenticated user if the user has permissions to access a certain service or an application.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=39)** So basically authentication is the process of verifying if a user exists, and authorization is the process of checking if the existing user has permissions.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=52)** Now to better understand these two concepts, let us take a real world example.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=57)** Let us think of a company building.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=60)** Within this company, we can have different offices.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=64)** For example, we have the manager offices, we have the program, our offices and other offices.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=70)** And in this company, we have different employees, let us say different users alike, we have managers, we have programmers, et cetera.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=81)** And these users or employees can enter the building, so they are all authenticated to enter the building.
>
> **[1:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=90)** But depending on their role within this company, they can have access to different rooms or offices.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=99)** And this is when authorization comes into place.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=103)** So for example, the managers are authorized to access the manager office.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=109)** The programmers are authorized to access the programmer offices.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=114)** But if a programmer wants to access the manager offices, then they need to have a certain level of permission.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=124)** So authentication is to be able to access the building and authorization is to have permission or to be authorized to access certain areas within that building.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Analogies:** for example (2), similar to (1)
> **Speakers:** - [instructor] (1)

#### Cookie-based vs. token-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=0)** - [Instructor] On this course, you learn about the token-based authentication, but the traditional way of authenticating users in a web application is by using the cookie-based authentication.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=13)** But what are the key differences between the traditional cookie-based authentication and the token-based authentication?
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=22)** In the cookie-based authentication, you typically have a browser and a server.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=27)** And if you want to be authenticated, you'd send the username and the password to the server.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=33)** Let's say by using an API endpoint /authenticate, then the server is going to check if the credentials are correct.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=41)** And if the credentials are correct, then the server is going to create a session in the server memory.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=48)** Then it is going to return to the user that sessionId.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=52)** Now this sessionId gets stored in a cookie in the browser, and that is why we call this authentication type cookie-based authentication because the sessionId gets stored in a cookie.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=65)** Then next, if you want to get some data from the server, you'd pass the sessionId as part of the request as well, and then the server is going to check if the sessionId is valid and return some data.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=79)** Now, in the cookie-based authentication, we have two main problems.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=83)** The first problem is that if let's say millions of users try to access your app at the same time, then the server is going to create millions of sessions, which is going to overload your server.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=96)** The second problem is that if your cookies get stolen from the browser, the sessionIds are stolen as well.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=104)** But how does the token-based authentication resolve these two issues?
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=109)** In the token-based authentication, the same way we have a browser and a server, if you want to be authenticated, you would send the username and password, and they server would check if these credentials are valid.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=123)** If the credentials are valid, the server will not create a session, but instead it is going to generate a token.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=130)** This token is just an encrypted string, which has enough valuable information for the server to find out the identity of a user.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=141)** After the token is returned to the browser, the token will be stored in the browser, and on the next request when you want to get some data from the server, you'd use the authorization Bearer and pass the token value.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=155)** The server is going to check if the token is valid, it is going to return some data.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=161)** So far we have resolved the first problem, which was that this server would get overloaded if millions of users let's say tried to access the application at the same time, because in this case, the server does not create sessions, but instead it just generates tokens, and the tokens are returned to the user, which then gets stored in the browser or in the device or wherever you are accessing the application from.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=187)** But the second problem is still valid.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=189)** So if someone steals the token from the user, then they're able to access the application.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=195)** Now, it's important to mention that the tokens have an expiration time.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=200)** So even if your token gets stolen, it will expire after typically 5 to 10 minutes, because that is the standard token lifetime.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=210)** And the malicious users are going to lose access to the system after the token is expired, and that is why we have two types of tokens.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=219)** We have the short lived tokens, like the access token, or the token that gets returned from the server.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=226)** But we also have long lived tokens.
>
> **[3:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=229)** We also call them refresh tokens.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=232)** So once the token is expired, we use our refresh token to generate a new token, which is then returned to the user and the user will use then the new token to get the data.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=246)** On the upcoming parts, you are going to learn how to generate a token, how to generate a refresh token, how to refresh or how to generate a new access token by using the refresh token and much more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), case, (1), from. (1)
> **Code Identifiers:** sessionid (5), sessionids (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### What is identity platform?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=0)** - [Instructor] In this course we are going to use the Entity Framework Core to work with data in an SQL server database.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=8)** We are also going to use another .NET framework, which is going to help us manage identity-related functionality, for example, to create a new user account, to add roles to a user, et cetera.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=22)** The identity framework has a lot of features, but some of the key ones are that it's really useful if you are building, let's say, an MVC application, because it can generate a lot of default UI that you can use to manage your users.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=38)** But since we are going to work with a web API project, we are going to use identity to manage identity-related data.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=46)** For example, we are going to use it to manage users, to manage passwords, and to manage roles.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=53)** But you can also use this framework to manage the profile data, to manage the user claims, the tokens, the email confirmation, and much more.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=64)** To be able to use the identity framework, you will have to install this package.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=70)** And you are going to learn on the upcoming parts on how to install this package and use the identity framework to work with user data.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), net (1), mvc (1), api (1)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### JSON Web Token
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=0)** - [Instructor] The JSON Web Token, or the JWT, is the token type that we are going to use throughout this course.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=9)** And, per definition, the JWT is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=23)** In other words, a JWT, or as we're going to call it from now on, a token, is just an encrypted string which has enough information so the server is able to identify the user.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=37)** A token, or a JWT, has three parts.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=42)** It has the header, it has the payloads and the signature.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=48)** In the header part you have information about the type of the token, which in our case is going to be a JWT, and also the signing algorithm.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=58)** In the payload part you have the claims, and claims are just properties or definitions for the user.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=66)** Like, for example, the first name of the user, it can be the username, the ID, and also the role.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=72)** So, for example, to each rolls the user belongs, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=76)** The claims are of three types.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=79)** You have registered claims, you have public claims and also private claims.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=86)** The last part is the signature part, and the signature part is used to make sure that the token was not changed.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=95)** Now if you want to learn more about the JWT, you can navigate to this URL.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=102)** In there you are going to find a debugger.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=104)** And then, in here, for example, if you paste a valid token, here on the left or the right, you are going to see the decoded information of that encoded string.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=114)** So you have the header, and in the header you have the algorithm, and then you have the type of the token.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=121)** In this case it is a JWT, and that is the same token type that we are going to use in our course.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=126)** Then you have payloads, and in the payload you have the subject, you have the name, you have the issued at, and then, at the end, you have the verify signature section, where if you change the secret key you'll see that the third section is also updated, so check out this part.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=149)** You'll see that as I change the part in here, that part is also updating.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (7), json (2), url (1)
> **Code Keywords:** self (1), public (1), private (1)
> **Definitions:** is an  (1), in other words (1), is a  (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 2. Token-Based Authentication

> [↑ Back to Table of Contents](#table-of-contents)

#### Setting up Entity Framework Core
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=0)** - [Instructor] Now that you know all you need to know to get started with the token-based authentication, it is time to write some code.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=8)** And throughout this course, you'll add the token-based authentication to .NET 5 Web API.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=15)** And to work with data, we are going to use the Entity Framework Core.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=19)** So for that, on this part, you'll learn how to set up the Entity Framework Core in a Web API project.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=26)** So let us go to Visual Studio and see it in action.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=30)** The API that we are going to use throughout this course is a simple API which has just three controllers.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=37)** The HomeController has a single API endpoint of type Get.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=41)** Then in here we have the ManagementController and the StudentController.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=47)** Now, to set up the Entity Framework Core, the first thing that we need to do is that we need to create a database.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=54)** So for that, I'll just go to the Server Explorer.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=58)** And if you do not see the Server Explorer in here, you can just go to View, and then in here go to the Server Explorer.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=67)** Now, in the Data Connections, I'll just right-click and then Create New SQL Server Database, and then here I'll type my server name, and my server name is ETR then /sqlserver.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=84)** I'll just use Windows Authentication and then define a database name.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=89)** I'll name this database, let's say, school-db, or just school-api-db, and then click the OK button.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=102)** Now that the database was created, we are going to get the Connection String from this database.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=107)** So for that, I'll just right-click in here and then go to Properties, and then copy the Connection String value.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=115)** So Control + A to select the value and then Control + C to copy the value.
>
> **[2:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=122)** Now, let us go to the Solution Explorer and then here go to the appsettings.json file, and we are going to store this value in this file because in the Web API projects, this is the file where you put the Connection Strings, the API keys, et cetera.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=140)** So I'm going to create a new section in here.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=142)** That is going to be the ConnectionStrings.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=145)** And then inside the ConnectionStrings, I'll create a key.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=149)** I'll name this key DefaultConnection.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=154)** And then I'll paste the Connection String in here.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=158)** Now, let us save the changes and go to the Solution Explorer one more time.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=163)** In the Solution Explorer, so inside this project I'll create a folder.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=169)** I'm going to name this folder Data because inside this folder, I'm going to put all the data-related files.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=178)** Now, to connect the SQL Server with the models that we are going to use to work with data, we need to create a translator, and this translator needs to be able to understand both SQL Server but also C# code.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=193)** Now, inside the Data folder, we are going to add the DbContext file.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=197)** The DbContext file is also known as the translator file because it is able to understand SQL code but also C# code.
>
> **[3:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=207)** Now, we are going to create our custom DbContext file.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=211)** So for that, let us just add a C# class.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=213)** I'll just right-click, then go to Add.
>
> **[3:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=216)** We're going to add a class.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=219)** We are going to name our DbContext file AppDbContext, and then click Add.
>
> **[3:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=227)** Now, for this file to be defined as the DbContext file of our app, we need to add from the base class DbContext.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=238)** Now, if you hover on the DbContext and then Show potential fixes, we see that we do not get any meaningful suggestions.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=247)** And the reason for that is because the DbContext file belongs to the Entity Framework Core.
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=254)** So now let us install that package.
>
> **[4:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=256)** For that, go to Tools and then go to NuGet Package Manager and then Manage NuGet Packages for Solution.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=266)** Then in here go to Browse.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=268)** And in the Browse section, search for EntityFrameworkCore, so EntityFrameworkCore.
>
> **[4:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=277)** Then select the first option, which is the Microsoft.EntityFrameworkCore, select the project and click Install.
>
> **[4:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=287)** Then accept the licenses.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=290)** Now that the package was installed, you can just go back to the AppDbContext file.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=294)** And now when you hover on the DbContext, you'll see that you can use the Microsoft.EntityFrameworkCore package that we just installed.
>
> **[5:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=305)** Now, we can see that the error is gone.
>
> **[5:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=307)** Next, we are going to create the constructor, so ctor, and then double-Tab.
>
> **[5:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=312)** The constructor is created.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=315)** And the constructor will take as a parameter the DbContextOptions, and this is a generic class so we are going to pass in here as a parameter the same file that we want to use as our DbContext, so the AppDbContext.
>
> **[5:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=331)** And I'm going to name this parameter options, but we need to also pass the same value to the base class, so base and then just options.
>
> **[5:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=343)** Now, this is all you need to do in the AppDbContext file.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=347)** The last step in here is that now you need to configure the AppDbContext with the SQL Server.
>
> **[5:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=353)** So let us go to the Solution Explorer one more time and then go to the Startup.cs, which is also known as the configuration file because in here you put all the configurations.
>
> **[6:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=364)** And then here the first thing that we need to do is that we need to get the Connection String.
>
> **[6:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=368)** So for that, I'll create the ConnectionString property, so prop, then double-Tab, this will be of type string, and the name is going to be ConnectionString.
>
> **[6:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=380)** Now, inside the Startup constructor, I'll just set the value of the ConnectionString to be equal to the Configuration.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=390)** So by using the Configuration, now we can read the content from the appsettings.json file, .GetConnectionString.
>
> **[6:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=399)** And when you use the GetConnectionString method, it will go to the appsettings.json file and search for the ConnectionStrings section.
>
> **[6:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=407)** And then the parameter needs to be the Connection String name that you want to use.
>
> **[6:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=413)** So, basically, inside this method, you need to pass as a parameter the Connection String name, and in our case that is the DefaultConnection.
>
> **[7:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=424)** So now that we have the ConnectionString inside the ConfigureServices method, we need to add some code.
>
> **[7:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=432)** So just before the AddControllers, I'm going to type in here Configure DB Context with SQL.
>
> **[7:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=441)** And then in here I'll type services.AddDbContext.
>
> **[7:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=447)** Now, here we need to define our DBContext file, and that is the AppDbContext.
>
> **[7:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=453)** Let us import the namespace, and the namespace is the SchoolApp.API.Data.
>
> **[7:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=460)** And now for this DBContext, we need to define the database that we want to use.
>
> **[7:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=466)** So, basically, in here I'll just type options that go to, and then options.UseSqlServer, and we see that we still get an error in here.
>
> **[8:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=480)** So let us just copy this value, go back to the NuGet Packages, and then here after the EntityFrameworkCore, I'll just type Sql Server or just Sql, and then just install the Microsoft.EntityFrameworkCore.SqlServer, so Install.
>
> **[8:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=499)** Then accept the license.
>
> **[8:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=501)** Now, let us go back to the Startup.cs, and here we see that we get a suggestion, and the suggestion is to use the Microsoft.EntityFrameworkCore, and the parameter for the UseSqlServer is going to be the ConnectionString.
>
> **[8:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=518)** And this is all you need to do to add Entity Framework Core to Web API project.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (16), right-click (3), select the (3)
> **Env Vars:** api (9), sql (6), net (1), etr (1)
> **Code Keywords:** let (10), pass (3), class. (2), class, (1)
> **Prerequisites:** install (4), set up (2), configure (2)
> **Definitions:** is a  (2), known as (2)
> **File Paths:** appsettings.json (3)
> **Cross-References:** go back to (3)
> **Tools:** visual studio (1)

#### Adding default identity tables using EF Core
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=0)** - [Instructor] On this part, you'll learn how to add the default identity framework tables using the Entity Framework Core.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=8)** To add these tables to the database, you can just use the identity frameworks models and properties.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=15)** But with the Entity Framework Core, it is possible to inherit from one of the identity models and add custom properties, which are going to be translated as custom columns in the database.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=28)** Now, let us to go to Visual Studio and see it in action.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=32)** The first thing that we are going to do in Visual Studio is that we are going to create a custom model and inherit from the identity user base class.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=40)** Then we are going to add a custom property.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=42)** And we are going to see how this custom property creates a custom column in the SQL Server database that we created on the last part.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=52)** So for that, let us go to the Solution Explorer.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=54)** And then inside the data folder, we are going to create a new folder.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=59)** We're going to name this folder Models.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=63)** Now, inside the Models folder, we are going to create our custom model.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=67)** And models are just C-sharp classes.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=70)** So let us name this model the ApplicationUser.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=73)** And then click the Add Button.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=77)** And here, let us inherit from the base class identity because we created the application user as a custom class for the already existing identity user class, which belongs to the ASPNETCore.identity.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=92)** And here, if you do not add any properties, the columns that you are going to see in the database are going to be the properties of the identity user.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=101)** So if I just right-click and then go to Definition.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=104)** And then here, right-click on the identity user and go to Definition one more time.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=110)** These are the properties that you are going to see in the database.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=114)** So you have, for example, the phone number, you have the email, the normalized email; you have the username, the access failed count, et cetera.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=125)** But we see that we only have username.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=129)** We do not have a first name or a last name.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=133)** So let us just go to the ApplicationUser.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=136)** And in here, let us add the first name and last name properties.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=140)** So this is going to be of type string.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=143)** And it is going to be first name.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=147)** The other property is going to be the last name.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=150)** So string last name.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=153)** And let us also add another one of type string.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=158)** And this is going to be just custom.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=161)** So let us see the changes.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=163)** And the next step is that you need to go to the AppDbContext file.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=168)** And in the AppDbContext file, you need to modify the Dbcontext base class.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=173)** Now, instead of inheriting from the base class Dbcontext, you need to inherit from the identityDbcontext.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=183)** And this is going to take as parameter the class that you want to use to work with the user-related data.
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=190)** And in our case, we created a custom class, the ApplicationUser.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=195)** Otherwise, you would have to define the identity user base class.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=202)** So since we created the ApplicationUser, I'm going to define the ApplicationUser in here as well.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=208)** Now, let us import the namespaces.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=210)** So let us start with the ApplicationUser, and that is in the data.models.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=217)** Now, let us also add the namespace for the identityDbcontext.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=222)** And for that, we need to install the package, Microsoft.ASPNETCore.identity.entityframeworkcore.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=231)** So I'll just select in here find and install latest version.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=237)** And we can say that the error is gone because the package is installed.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=241)** And the last step is that you need to go to the Startup.CS.
>
> **[4:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=244)** And then here, scroll down to the configure services method.
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=248)** And just after the configure Dbcontext with SQL, we are going to first add identity, which we are going to also use in the upcoming part.
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=258)** So just add identity.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=260)** And then in here, I'll type services.AddIdentity.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=266)** And then the first parameter is going to be the ApplicationUser.
>
> **[4:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=269)** So ApplicationUser.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=272)** And then import the namespace.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=274)** And that is the data.models.
>
> **[4:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=277)** And the second parameter is going to be the base class that is responsible for the user roles.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=282)** In our case, that is the IdentityRole because we didn't create a custom class for the IdentityRole.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=290)** But if you want, you can also create a custom class.
>
> **[4:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=296)** So the namespace is going to be ASPNETCore.identity.
>
> **[5:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=300)** Then next, you need to define the class that is going to be used to work with the identity-related tables.
>
> **[5:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=307)** And for that, I'm just going to type in here .addentityframeworkstores.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=315)** And in here, we are going define the AppDbcontext file.
>
> **[5:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=321)** And then at the end, just adddefaulttokenproviders.
>
> **[5:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=327)** Now, this is all you need to do.
>
> **[5:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=329)** But now, since we added all the configurations, we are going to now see how we can create the tables in our database.
>
> **[5:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=336)** For that we are going to create the migration.
>
> **[5:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=338)** So I'll just go to the Package Manager Console.
>
> **[5:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=341)** Then here, I'll type Add-Migration IdentityTablesAdded and then press Enter.
>
> **[5:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=351)** In here, we see that we get an error.
>
> **[5:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=353)** And that's right because we need to install an additional package.
>
> **[5:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=356)** So let us just go to Tools, then NuGet Package Manager, the Manage NuGet Packages for Solution.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=365)** And then in here, I'll search for tools.
>
> **[6:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=370)** And then select the Microsoft.entityframeworkcore.tools.
>
> **[6:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=375)** And then select the Project, Install.
>
> **[6:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=380)** Then accept the license.
>
> **[6:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=382)** And now, let us go back to the Package Manager Console.
>
> **[6:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=386)** And here, I'm going to run the same command one more time.
>
> **[6:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=389)** So Add-Migration IdentityTablesAdded.
>
> **[6:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=393)** Now, we see that the command is working.
>
> **[6:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=395)** So a build has started.
>
> **[6:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=398)** The build succeeded.
>
> **[6:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=400)** Now, that command will generate a class with the same name of the migration.
>
> **[6:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=404)** So IdentityTablesAdded.
>
> **[6:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=407)** And here, we see that we have a typo, but you can ignore the typo.
>
> **[6:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=412)** And this class, inherits on the base class migration.
>
> **[6:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=416)** Inside this class, you have two methods.
>
> **[6:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=419)** So the up method and the down method, which is the method that is going to be executed if you want to remove these migration.
>
> **[7:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=430)** And we can see that it will basically just remove all the tables.
>
> **[7:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=434)** And the tables will be created in the up method.
>
> **[7:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=437)** We are going to see just the first one.
>
> **[7:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=439)** So we have, for example, in here the ASPNETroles.
>
> **[7:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=441)** And we see that in this table, we have four properties.
>
> **[7:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=444)** We have the ID, we have the name, the normalized name, We have the concurrencystamp.
>
> **[7:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=450)** And if you go for example to the next one, the ASPNETusers.
>
> **[7:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=453)** And for this table, we define that we want to use the application user custom table.
>
> **[7:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=463)** So if you go to that section.
>
> **[7:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=466)** And here, you can see that we have the first name, we have the last name, and we have the custom columns.
>
> **[7:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=475)** Now, to apply the migration in the database, you can just type in here update-database and then press Enter.
>
> **[8:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=484)** You can see that the command was executed successfully.
>
> **[8:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=488)** So you can just go now to the Server Explorer.
>
> **[8:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=490)** And you just refresh.
>
> **[8:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=493)** And then just open the database.
>
> **[8:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=494)** And then if you go inside the tables, you are going to see all the identity framework default tables.
>
> **[8:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=503)** So you have the ASPNETusers.
>
> **[8:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=505)** This table will be used to store the users.
>
> **[8:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=507)** You have the roles, the logins, the claims, the ASPNETroles, and the other one in here.
>
> **[8:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=515)** So the ASPNETuserroles is the joining table between the ASPNETusers and the ASPNETroles.
>
> **[8:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=523)** You also have the ASPNETusertokens and the ASPNETroleclaims.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), class. (4), class, (4), case, (2)
> **UI Navigation:** go to (10), right-click (2), select the (2), scroll down (1), open the (1)
> **Prerequisites:** install (4), configure (2)
> **Analogies:** for example (3)
> **Code Identifiers:** identitydbcontext (2)
> **Env Vars:** sql (2)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)

#### Configuring token-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=0)** - [Instructor] Now that we have set up the entity framework and also used the identity framework to create the default identity-related tables, it is time to create the token-based authentication.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=13)** For that, let us go to Visual Studio and see it in action.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=17)** In Visual Studio, the first thing that we are going to do is that we are going to define the JWT keys.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=24)** And we are going to use these keys to generate a strong token.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=29)** So for that, I'm going to create a new section in here, and this section is going to be named JWT.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=38)** And then inside this section, the must have property or the must have key is the secret key because without a secret key, you cannot generate a token.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=50)** So Secret.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=50)** And this is basically just a string, which is 16 chars or longer.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=56)** And it is used to generate a strong token.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=60)** So it's basically used to encrypt the token.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=63)** For that, I'll just define here this-is-just, let's say strong-key.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=71)** Now that we have the JWT secret key, let us go to the Startup.cs.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=77)** And then in the Startup.cs, after the Add Identity, we are going to first add the authentication.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=84)** So Add Authentication.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=87)** And we need to add the authentication because we need to define the authentication schemes.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=93)** So for that, I'll just type in here services.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=97)** Type AddAuthentication.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=100)** And then inside here, I'll type options.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=103)** Then go to.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=105)** And now we are going to define the default authentication scheme, the challenge scheme, and just the scheme itself.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=111)** So for that, I'll just type in here options.DefaultAuthenticationScheme is equal to JwtBearer, so BearerDefaults.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=125)** Now let us import the namespace because we see that we get an error.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=130)** And at the namespace, you'll need to install the package Microsoft.Authentication.JwtBearer.
>
> **[2:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=139)** So I'll just select this option, and then go to the find and install latest version.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=146)** So now we see that once the package is installed, the error is gone, and now we need to define the default authentication scheme.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=153)** And that is going to be just the AuthenticationScheme.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=157)** Next, let us also define the challenge scheme.
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=160)** So options.DefaultChallengeScheme, and that will be the same way, JwtBearerDefaults.AuthenticationScheme.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=173)** And the last one, options.DefaultScheme, that is going to also be JwtDefaults.AuthenticationScheme.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=188)** Now, this is all you need to do in this section.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=191)** Next, you're going to add the actual JWT bearer configuration.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=197)** So just after the AddAuthentication, you need to actually remove this semicolon.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=203)** You need to type .AddJwtBearer.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=209)** And for the JwtBearer, so I'll just put this down here, and then just type in here Add JWT Bearer.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=218)** Inside the Add JWT Bearer, you're going to actually define the mechanism that is going to be used to valid a token.
>
> **[3:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=227)** So basically inside here when you send a token to the API endpoint, inside here, you define the code that is used to check if the token is valid or not.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=238)** So I'll just type in here options.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=242)** And then inside the options, we are going to first define that this SaveToken is equal to true, so SaveToken is equal to true.
>
> **[4:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=252)** The second property is the RequireHttpsMetadata.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=257)** RequireHttpsMetadata, and if you check the description, it says that this gets or sets if HTTPS is required for the metadata address or authority.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=272)** So basically, by setting this property to false, what you do is that you allow the token-based authentication to work over HTTP as well.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=283)** Next, we are going to define the most important part, and that is the token validation parameters.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=290)** So these are all the parameters that are going to be used to validate if the token is valid.
>
> **[4:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=297)** So options.tokenValidationParameters is equal to new TokenValidationParameters.
>
> **[5:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=307)** I'm just going to remove the IdentityModel.Tokens.
>
> **[5:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=313)** And then import the namespace for the TokenValidationParameters.
>
> **[5:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=317)** So that is the IdentityModel.Tokens.
>
> **[5:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=321)** And now inside here, we are going to define all the parameters that we want to use to check for the token validation.
>
> **[5:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=329)** So the first thing that we're going to set to be true is the signing key.
>
> **[5:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=334)** So validateIssuerSigningKey.
>
> **[5:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=340)** And once you set this property to true, what you need to do next is that you need to define or you need to set which is the issuer signing key.
>
> **[5:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=351)** And now our signing key was just added in the appsettings.json file.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=355)** So basically we are going to use this key to check if the token is valid because the same key is also used to generate the token.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=365)** So basically how it works is that when you generate the token, you use this secret key, and then when you validate the token, you use the same secret key.
>
> **[6:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=374)** So in the Startup.cs, we need now to set the IssuerSigningKey.
>
> **[6:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=381)** That is going to be new SymmetricSecurityKey and then we are going to use the Encoding, so Encoding.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=390)** Let us import the namespace for the encoding.
>
> **[6:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=393)** And the namespace is system.txt, then .ASCII.GetBytes, and then we are going to use the configuration to get the secret key.
>
> **[6:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=409)** So inside the configuration, we have the JWT section, and in this section you have the secret key.
>
> **[6:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=418)** Now, if you want, you can just leave it this way but if you want to generate a stronger key, you need to also use like other data like the issuer, the audience, et cetera.
>
> **[7:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=431)** So let us just go to the appsettings.json file, and in here I'm going to also define the audience.
>
> **[7:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=437)** So audience.
>
> **[7:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=440)** And in the audience, I'll just have the audience to be user.
>
> **[7:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=444)** So that is just a data you can set.
>
> **[7:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=446)** But I'm going to also set, let's say the issuer.
>
> **[7:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=450)** And as an issuer, I'm going to set the app itself.
>
> **[7:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=453)** So just go to Solution Explorer, right click, then go to Properties.
>
> **[7:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=459)** Then you go to Debug.
>
> **[7:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=461)** Then scroll down in here.
>
> **[7:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=463)** And copy these values, so copy.
>
> **[7:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=467)** And then I'll just paste it in here.
>
> **[7:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=471)** So save the changes.
>
> **[7:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=472)** Now let us go back to the Startup.cs because we're going to also configure the audience and the issuer.
>
> **[7:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=479)** So in the Startup.cs.
>
> **[8:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=482)** Now we are going to say that we want to validate the issuer as well.
>
> **[8:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=486)** So ValidateIssuer.
>
> **[8:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=490)** That is going to be true.
>
> **[8:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=493)** And then we need to now define the ValidIssuer.
>
> **[8:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=497)** The ValidIssuer is going to come from the configuration.
>
> **[8:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=501)** And inside the configuration, we have the JWT section, and inside this section, we have the Issuer key.
>
> **[8:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=509)** So basically, it is this value.
>
> **[8:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=513)** So this is the value for this key.
>
> **[8:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=516)** Now let us also use the audience in the Startup.cs.
>
> **[8:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=523)** ValidateAudience is equal to true, and the ValidAudience is going to be the configuration.
>
> **[8:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=535)** And then inside the configuration, we are going to use the JWT, and then audience.
>
> **[9:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=543)** Now, we added everything that we need to add in the configure services but for the configure services to work, we need to also update the configure method.
>
> **[9:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=552)** So inside the configure method, just after the UseRouting, we are going to add the authentication and authorization.
>
> **[9:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=564)** For that I'll just type in here app.UseAuthentication.
>
> **[9:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=571)** And the UseAuthorization was already defined when I created the empty web API project.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (9), api (2), https (1), http (1), ascii (1)
> **Code Keywords:** let (10), type . (1)
> **UI Navigation:** go to (8), scroll down (1)
> **Prerequisites:** configure (5), install (2), set up (1), you'll need (1)
> **File Paths:** appsettings.json (2), system.txt (1)
> **Code Identifiers:** tokenvalidationparameters (1), validateissuersigningkey (1)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)

#### Adding the authentication controller
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=0)** - [Instructor] To work with our users in our web API, we are going to add a new controller.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=6)** And that is going to be the authentication controller.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=9)** In this controller, we are going to inject all the necessary services to work with user data.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=17)** For that, let us go to Visual Studio and see it in action.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=21)** In Visual Studio, I'll go to the Solution Explorer, and then right click in the Controllers folder, add a new controller.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=32)** This is going to be an API controller, so I'll just go to the API in here, and then select the first option, API Controller dash Empty.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=43)** And I click the Add button.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=45)** Then next, you need to define a controller name, and I'm going to name this controller AuthenticationController.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=54)** And then click the Add button one more time.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=57)** Now that the controller is added, I'm going to add all the necessary services in here, and then inject them in the controller constructor so we can use them in the API endpoints of this controller.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=71)** So let us start with the first one.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=72)** It's going to be a private readonly.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=75)** And we are going to use the userManager.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=80)** Let us import the namespace for the UserManager and that belongs to the AspNetCore.Identity.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=88)** And then as a parameter, we are going to pass the ApplicationUser, which is the base class for the identity user of the identity framework.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=97)** So let us import the namespace, and the namespace is the API.Data.Models.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=106)** And we are going to name it _userManager.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=111)** The userManager is just a C# class, which provides the APIs for managing users in a persistent store.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=120)** And the persistent store in our case is the SQL Server database.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=125)** So this is basically just an AspNetCore.Identity class that we can use to work with our users.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=131)** So you can create a user, you can add a password to the user, et cetera.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=136)** Now, let us define the other class we are going to use.
>
> **[2:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=139)** So private readonly.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=142)** Now, this is going to be the RoleManager, and as the name already indicates, the RoleManager will provide the APIs for managing roles in the SQL Server database.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=154)** As a parameter, we are going to pass the AspNetCore.Identity class, and that is the IdentityRole class, and we are going name this property _roleManager.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=167)** Next, I'm going to also use the AppDbContext because if you want to store some data in the database, we need the AppDbContext file.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=175)** So private readonly is going to be the AppDbContext, and then just _context.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=184)** Then at the end, we are going to inject the IConfiguration interface because if we want to get some data from the appsettings.json file, we need the IConfiguration interface.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=194)** So private readonly, and this is going to be the IConfiguration and then just _configuration.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=206)** Now, let us import the namespace for the AppDbContext, and for the AppDbContext, that is the API.Data.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=213)** And for the IConfiguration, that is the Microsoft.Extensions.Configuration.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=221)** Now, let us create the constructor because we need to inject all these classes and interfaces.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=228)** So I'll just copy the first one.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=232)** Paste it in here.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=233)** Remove the underscore.
>
> **[3:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=236)** Then next, let us also paste this second one, so copy and then just paste it in here.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=243)** I'll remove the underscore.
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=248)** Then the AppDbContext.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=250)** So Control + C, Control + V.
>
> **[4:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=253)** Remove the underscore.
>
> **[4:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=256)** And the last one is the Configuration.
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=258)** So the configuration interface.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=261)** I'll just paste it in here.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=263)** And remove the underscore.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=266)** Now let us assign all the values.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=268)** So _userManager is going to be the userManager.
>
> **[4:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=273)** The _roleManager is going to be the roleManager.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=278)** The _context is going to be the context.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=282)** And the _configuration is going to be the configuration.
>
> **[4:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=287)** Now, let us just save the changes, and this is all you need to do in this part to create the authentication controller.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), private (4), class, (3), interface (3), pass (2)
> **Env Vars:** api (7), sql (2)
> **Code Identifiers:** usermanager (3), rolemanager (1)
> **UI Navigation:** go to (3), select the (1)
> **Tools:** visual studio (2)
> **File Paths:** appsettings.json (1)
> **Speakers:** - [instructor] (1)

#### Registering new users using UserManager
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=0)** - [Instructor] Now that we have set up the authentication controller and the entity framework code, it is time to start working with actual user data.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=10)** You'll first learn how to register a user in our app.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=13)** And for that, we'll add a new API endpoint in the authentication controller.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=18)** So let's go to visual studio and see it in action.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=23)** In the authentication controller, we are going to create the new API endpoint.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=27)** So just after the constructor, I'm going to type the API type.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=31)** So the API end point type, and this is going to be of type Http post.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=38)** Now, if you want, you can also define a custom name.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=41)** So in this case, I'll just define the name of this API endpoint to be register-user.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=49)** And then you'll type public async, then task.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=54)** The return is going to be an IAction result and the name just Register.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=61)** Now, we're going to send the user data as part of a request body.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=67)** So for that, I'll just type in here FromBody, and then you are going to define the data tab.
>
> **[1:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=74)** As a data tab, you're going to create another class.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=78)** And this class is going to have only the necessary properties that we need to register a user.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=85)** So for that, I'll just go to the Solution Explorer and then here, right click on the data folder and add a new folder.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=92)** I'm going to name these folder view models.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=96)** And then inside the view models folder, I'm going to add the first view model, and that is going to be the registerVM.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=104)** Now, inside this class, we're going to define just the properties that we need.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=108)** So let us start with the, let's say the FirstName, then we will have the LastName, then next, we're going to have, let's say the EmailAddress, then we have the username.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=127)** So problem string username.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=130)** And then at the end we have the Password.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=135)** If you want, you can add some value addition decorators to these properties.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=138)** So let's say for example, if we want to make the email address or required fields Required and then import the namespace and the namespace for required is the component model.data notations.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=154)** And that let us do the same for the username and the password.
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=160)** Now, let us see changes in here and go back to the authentication controller and then define in here, the FromBody to be the RegisterVM, then import the namespace and the namespace for the RegisterVM is Data.ViewModels.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=179)** Let us also name it to be better RegisterVM.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=182)** And then inside here, we are going to write all the code.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=186)** But before we add a new user to the database, we are going to add two checks.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=192)** First of all, we're going to check if the model is valid, all this means is that for example, in the RegisterVM, we defined the email address to be required.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=203)** We're going to check if the email address actually has a value.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=208)** So let us go back to the authentication controller.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=211)** So for that, I'm just going to type in here if the modelState.IsValid and then in here is not valid.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=221)** Then we are just going to return a BadRequest, which says that "Please, provide all the required fields."
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=237)** The second check is going to be to check if the user already exists in our database.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=243)** So for that, I'll just type in your var user exists = and to check if the user exists in our database, we're going to use the user manager, so await_userManager.FindByEmailAsync.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=264)** And then passes a bar meter the registeredVM.EmailAddress.
>
> **[4:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=270)** Now, if the user exists is different from now.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=274)** So if the user is already in our database, we are going to return another BadRequest, which says that the User, and then I'll just add in here the dollar sign, then insight curly brackets the registeredVM.EmailAddress already exists.
>
> **[4:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=299)** And then next, we are going to construct the epic mission user object, which I go into use to add the user to the database.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=309)** So for that, I'll just type in your ApplicationUser, and this is going to be our newUser = new ApplicationUser.
>
> **[5:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=322)** And then you are going to define for this user, the first name to be the registerVM .FirstName.
>
> **[5:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=328)** Then we have the LastName and this is going to be registerVM.LastName.
>
> **[5:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=335)** And then we have the email address or Email is going to be the registeredVM.Email.
>
> **[5:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=344)** Then we have the Username = registerVM.Username.
>
> **[5:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=349)** And the last property that we're going to define in here is the security stamps.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=355)** So SecurityStamp =Guid.NewGuid.ToString.
>
> **[6:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=366)** So now that we have the new user, we are going to use again, user manager to create this user.
>
> **[6:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=373)** For that I'll just type var results = await_userManager.CreateAsync
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=384)** and this will take two parameters.
>
> **[6:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=387)** The first parameter is going to be the new user.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=390)** And then to this user, we are going to assign the password.
>
> **[6:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=394)** So for that, I'll just use the registerVM.Password.
>
> **[6:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=400)** And then we are going to check if the result is a success, or if the result.Succeeded, we are just going to return_Ok and then User Created.
>
> **[6:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=418)** Otherwise we are just go to return BadRequest, which says that the "User could not be Created."
>
> **[7:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=429)** Now, these is all you need to do.
>
> **[7:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=431)** I'll just now start the app so we can test these API endpoints.
>
> **[7:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=436)** So in here now you can see the authentication section and in the authentication section, you have a single API endpoint, the registerUser and the registerUser is off type Post.
>
> **[7:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=449)** So I'll just click in here and then try it out, then scroll down in here and provide a first name.
>
> **[7:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=454)** So I'll just provide my first name then a last name.
>
> **[7:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=460)** Then the email address, I'll just test@[gmail.com](https://gmail.com).
>
> **[7:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=466)** The username is going to be a trupia and the password is going to be let us say coding@2021, and then I'm going to click the, Create the execute button.
>
> **[7:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=479)** So now that the request was signed, if you scroll down in here, you can see that you have a response code of 200, which means a success and the response body is userCreated.
>
> **[8:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=492)** Now, if you try to execute the same request with the same data one more time, so execute, and then scroll down.
>
> **[8:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=501)** You'll see that you get a 400 and the response body is that user test@[gmail.com](https://gmail.com) already exists.
>
> **[8:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=511)** I'm going to close the browser and go to visual studio.
>
> **[8:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=514)** In visual studio, let us just go to the server explorer and in the server explorer, just right click on the AspNet Users Table, and then Show Table Data.
>
> **[8:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=525)** In a table data, you can see that now we have a single role, and that is the user that we just added because it has the first name set to the Alvis, the last name Trupia and all the properties that we set in the request.
>
> **[8:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=539)** And this is how you can add a new user in the database using the user magic class of the identity framework.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), var (2), type. (1), type, (1), case, (1)
> **Code Identifiers:** registervm (5), registeredvm (3), registeruser (2), modelstate (1), newuser (1)
> **UI Navigation:** go to (5), scroll down (3), click on (2)
> **Env Vars:** api (7)
> **Tools:** visual studio (3)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)

#### Logging in users
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=0)** - On the last bar, you'll learn how to register user, using the userManager.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=6)** On this part, you'll learn how to sign in a user using the userManager, but you can also use the sign-in manager which is another class from the identity framework.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=17)** So for that, let us go to visual studio and see it in action.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=22)** In visual studio, we are going to create another API end point software that just after the registered user, I'm going to create another HTTP post.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=33)** And the name for this one is going to be login-user.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=39)** Then I'll type in your public async.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=41)** The return type is going to be of type task<IActionResult> and then login().
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=49)** The same way the user data will be passed from the request body.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=54)** So for that, the same way we are going to have, in your front body, and we are going to create a new view model.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=61)** So for that, I'll just go to the Solution Explorer and then just click in the register.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=67)** VM control C control V I'll change the name from register VM to loginVM.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=75)** So, login VM.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=78)** Then open the loginVM change the class in here to be loginVM.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=84)** I'll remove the first name, the last name, and then just the, the email address and the password also remove the username.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=94)** And both these fields are required.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=98)** So let us now, go back to the authentication controller and in here now I'll type loginVM, and then loginVM.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=109)** The first thing that we need to check is it we need to check if the loginVM is valid.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=114)** So for that, I'll just type in your, if not the ModelState.IsValid, and then I'm just going to return a BadRequest and the bad request will be please provide all required fields.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=133)** And then after this check, we are going to check if the user exists in the database.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=138)** So for that var userExists is equal to, and then we are going to use the userManager.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=146)** So, _userManager.FindByEmailAsync and then passes a bar meter, the logVM.Email Address.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=159)** Now, if the user exists or if the userExists is different from null, so is different from null.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=170)** And also the await _userManager.CheckPasswordAsync
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=180)** and I knew you need to pass two power meters.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=182)** The user exists, and the loginVM.password.
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=190)** So, if the user exists in the database and the password is also correct, then we are just going to return an Ok user logged in or signed in.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=204)** Otherwise, they're just going to return unauthorized.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=210)** So, this is a way to login users or basically to check if the user credentials exist in our database, because in the upcoming parts, if the user exists, we are just going to generate a token, and then return that token to the user. But for now, we are just going to check if the user exists and then if the password is correct and then just return an okay user signed in.
>
> **[3:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=236)** Now, let us see all the changes and run the application.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=241)** So now, we can see that we have another API end point, the login user, and then click try it out.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=247)** Scroll down in here. We need to provide the email address.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=251)** So that is test@[gmail.com](https://gmail.com) and the password from the last user was coding at 2021 and then click the execute button.
>
> **[4:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=267)** If you'll scroll down in here, you'll see that the response called is 200, which means a success and the Response Body user signed 10.
>
> **[4:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=276)** Now let us scroll up in here and then change the password to be 2022, and then click execute.
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=284)** If you scroll down in here, you'll see that now we have a 401 error and the response body has a title of unauthorized.

> [!info]- Semantic Content
>
> **Code Identifiers:** loginvm (7), usermanager (3), userexists (2), logvm (1)
> **Code Keywords:** let (4), public (1), async (1), var (1), await (1)
> **UI Navigation:** scroll down (3), go to (2), open the (1), scroll up (1)
> **Env Vars:** api (2), http (1)
> **Tools:** visual studio (2)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Generating an access token
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=0)** - [Instructor] And now it is time to generate the access token.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=4)** The token or the access token, as we have already mentioned is an encrypted string, which stores valuable information about the user.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=15)** In our case, after the user has already been signed in, we are going to generate a token, which now we are going to return to the users and the users can use that token to access the API endpoints.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=31)** So let us now go to visual studio and see reaction.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=35)** In the login user API endpoints after the user has already been identified, we are going to generate a token.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=43)** So for that in here, I'll just type var tokenValue is equal to, this is going to be on async method, so await and then GenerateJwTokenAsync.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=59)** It will take a single parameter, and that bar meter is going to be the userExists.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=65)** And the userExists if you hover over the mouse, you'll see that it is of type ApplicationUser.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=73)** Now this method does not exist.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=75)** So I'll just create this method.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=77)** I'll click in here and then generate this method.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=81)** Not let us just scroll down in here and then in year we are going to return.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=88)** So this is going to be a private async, then Task.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=94)** The response is going to be a new view model.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=98)** So let us just go to the solution explorer, and in the view models, we are going to add a new class.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=105)** The class name is going to be AuthResultVM.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=111)** The AuthResultVM for now is going to have two properties.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=114)** The first property is going to be the token itself, and the second property is going to be the expiration time.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=121)** So prop the type is going to be DateTime, and the name is going to be, ExpiresAt.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=130)** Now let us see the changes in here and go back to the authentication controller.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=134)** Now near change the task return type to be AuthResultVM, and now let us type some code.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=143)** The first one I think that we need to define is going to be the authentication claims and claims are just properties related to the user software that I'll just type in here var authClaims = new List of Claims.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=158)** So list of claim, then let's import the namespace for the claim, and that is part of the system.security.claims.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=167)** And then you are going to define some different claims.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=169)** So for that new claim, and that is going to be from claim types.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=175)** So ClaimTypes.Name.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=180)** And the ClaimType.Name is going to be the userExists.Username.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=187)** Let us actually change the user exists to be just user and I'm going to paste some other claims in here.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=195)** So we have the name identifier, and I've said the name identified to be the ID.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=200)** Let us change the userExists in here to be just user.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=202)** Then we have some registerClaims and from the registerClaims, we have the Email registeredclaim that is said to be the user.Email.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=212)** We have the subject and have just said the subject to be the email, we had the GTI and for the GTI I have just created a NewGuid.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=224)** Next, we need to get the secret key from the app settings.json file.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=230)** So I'll just go to the solution explorer because we have already typed that code and then go to the startup.cs, scroll down in here to the secret part, and then just copy these parts, so Ctrl + C, then go back to the authentication controller and I'll type in here var authSigningKey is equal to, and I'll let us import this symmetric security key, then import the Encoding and then replace the configuration with the _configuration.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=272)** Then next, we are going to define the actual token.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=275)** So for that var token = new JwTSecurityToken.
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=284)** And then in here, we are going to define the issuer.
>
> **[4:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=288)** The issuer the same way is going to come from the configuration.
>
> **[4:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=292)** So in the upside is the JSON file.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=294)** We have the Jwt section and in this section, we have the IssuerKey, then after the Issuer, we are going to define the audience.
>
> **[5:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=304)** So audience and the audience is going to be _configuration.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=309)** So the same way configuration, and then just copy this part paste in here.
>
> **[5:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=316)** This is going to be the audience.
>
> **[5:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=320)** Then next, we're going to set the expire.
>
> **[5:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=323)** So the expiration time expires.
>
> **[5:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=326)** And the expiration time for this token is going to DateTime.UtcNow.Add minutes
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=339)** and we are going to add one minute.
>
> **[5:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=341)** So it will expire after one minute and the typical expiration time for the token is five to 10 minutes.
>
> **[5:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=350)** Then next we are going to add the claims and the claims is going to be the authClaims.
>
> **[5:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=356)** And the last priority is going to be the signing credentials.
>
> **[6:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=361)** And the signing credentials is going to be new signing credentials.
>
> **[6:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=367)** The first bar meter is going to be the authSigningKey, and the second bar meter, the Security algorithm, so SecurityAlgorithms.Hmacsha and then 256.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=384)** Now by using the token, we can generate the Jwt Token.
>
> **[6:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=389)** So for that var Jwt Token = new Jwt
>
> **[6:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=398)** and then security token handler, how we are going to use the WriteToken method, which takes as a bar meter, the security token that we just created, so token.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=410)** Now we have the Jwt, so let us just construct a response, for that I'm going to type in here var response is equal to, and the response is going to be a new AuthResultVM.
>
> **[7:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=428)** Then in the AuthResultVM, we have the token and the token is going to be the Jwt token.
>
> **[7:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=435)** And we have the ExpiresAt, and to get the ExpiresAt, you can just choose the token.validTo property.
>
> **[7:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=445)** And then at the end, you just need to return the response.
>
> **[7:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=451)** Now that we have constructed the token, then I'll just scroll up in here.
>
> **[7:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=455)** And then instead of returning the Ok "user signed in," I'm going to return the tokenvalue.
>
> **[7:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=462)** Now to test this functionality, let us just go to annual the controller.
>
> **[7:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=466)** So solution explorer, then let's say the home controller, and then in the home controller, I'm going to add the authorize attributes or Authorize.
>
> **[7:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=477)** What this means is that if you want to access this API endpoint or basically any API endpoints within this controller, you need to be authenticated.
>
> **[8:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=487)** So I'll just start the app and then to test the API enpoints, I'll use the postman.
>
> **[8:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=494)** Now, in postman, I'm going to create a new request and that is going to be an Http get to the home controller.
>
> **[8:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=503)** And then if you click Send in here, you'll see that you get the 401 unauthorized.
>
> **[8:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=509)** So let us go and sign in the user.
>
> **[8:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=513)** This' going to be a post, an antibody when you go to the row and then change the text in here to be JSON.
>
> **[8:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=522)** Then inside here, I'm going to define the email address to be, let's say, test@[gmail.com](https://gmail.com) and the best word is going to be Coding@2021.
>
> **[9:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=541)** And here, if I change the API endpoint to be api/authentication/login-user, and then click, the Send button is a response now we get an expires at an a talk on value.
>
> **[9:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=558)** So I'll just copy this token value Ctrl + C and then go to the home controller API endpoint and go to the authorization changing you're at the type to be Bearer token, and then paste the token that I just copied in here, and then click the Send button one more time.
>
> **[9:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=579)** Now you can see that the user was authenticated using the token value.
>
> **[9:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=584)** Now, if you'll go to the [jwt.io](https://jwt.io) and then you hear go to debugger and then paste your token in here, on the right you're going to see that the name is said to be trupia, the name identifier just the Guid pops the email is tests@[gmail.com](https://gmail.com).
>
> **[10:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=605)** You have the issuer, the value that you put in the app site is that JSON file and the audience is also coming from the F settings.json file which is the value user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), var (6), async (2), case, (1), await (1)
> **UI Navigation:** go to (10), scroll down (2), scroll up (1)
> **Code Identifiers:** userexists (4), authclaims (2), registerclaims (2), authsigningkey (2), tokenvalue (1)
> **Env Vars:** api (7), json (3), gti (2)
> **URLs:** [gmail.com](https://gmail.com) (2), [jwt.io](https://jwt.io) (1)
> **Tools:** postman (2), visual studio (1)
> **File Paths:** settings.json (2)
> **Cross-References:** go back to (2)

#### Adding the RefreshToken table
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=0)** - [Instructor] So far, you have learned how to generate an access token, but access tokens, or just tokens, are short-lived because they are valid for typically five to 10 minutes.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=14)** Once a token is expired, you need to use a refresh token to generate a new token.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=21)** The refresh tokens are long-lived tokens, and they typically are valid for up to six months.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=29)** So it makes sense to store these tokens in the database, but to do so, we need to first create a table and we are going to create a table named Refresh Tokens.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=42)** So let us go to Visual Studio and see it in action.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=47)** To create a new a new table, we are going to add a new model.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=50)** So for that, let us go to the Solution Explorer that inside the models, I'll just add a new class.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=56)** So, add a class.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=58)** I'm going to name this class Refresh Token and then click the add button.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=65)** Now the first property is going to be the identifier for the refresh token and is going to be of type integer.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=73)** And the name is going to be ID.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=76)** Now to make sure that this property is set as the identifier for the refresh tokens table, you can use the key data notation.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=87)** So let us import the namespace and the namespace is the component model.datanotations, and the next let us define all the properties.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=97)** The first property is going to be the token.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=99)** So the token itself, the refresh token, so string, and then the value token.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=105)** The next we're going to create the JWT ID.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=108)** So prop, string, and then JWT.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=114)** ID.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=115)** The next, we're going to set a bool property.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=119)** The name is going to be isRevoked, because if your refresh token gets stolen, then you can just revoke this token from the database.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=128)** The next, this will have a date time and a date expire.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=133)** So prop, date, time, and this is going to be date added.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=141)** And the other date time is going to be the date expire.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=148)** Now the refresh tokens belong to different users.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=152)** So for that we are going to add a relationship between the refresh token and the users.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=159)** In here, I'll just type the foreign keys of prop, string, and that is going to be the user ID.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=167)** And then down here, prop is going to be the application user, because this is the custom class that we created to work with the user related data.
>
> **[2:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=177)** And the name of this property is going to be user.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=181)** Now the entity framework core is smart enough to know that the user ID is related to the user in here.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=187)** But if you want, you can use the foreignkey data (indistinct).
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=194)** Foreign key, let us import the namespace, and that is the component model.datanotation.schema, and then name of and pass the parameter, the user ID.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=210)** Now we added the model.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=211)** Next, we need to go to the Solution Explorer.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=213)** And then in here go to the appDBContext file.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=217)** And then just after the constructor, we are going to define now the table name.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=221)** So prop and the data type is going to be DB set.
>
> **[3:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=227)** The parameter is going to be the refresh token.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=232)** And that in here, we are going to define the refresh token's name, which is also going to be used by the entity framework to create the table with the same name in our database.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=246)** So now everything is set up.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=247)** Let us go to the package manager console.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=250)** In here, I'll add a new migration.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=251)** So Add-migration and then refreshTokensTableadded
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=260)** and then press enter.
>
> **[4:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=262)** So we see that a new file named Refresh Tokens Table Added was created.
>
> **[4:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=267)** And inside here, we have the definition for creating a table named refresh tokens.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=274)** To apply this change in the database, just type in your update-database and press enter.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=283)** Now, if you go to the Server Explorer and then you're just refresh the tables, you'll see that you have the refresh tokens table.
>
> **[4:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=293)** And then if you click the show table data, that is currently empty because we didn't add any refresh tokens.
>
> **[5:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=301)** And that is what you are going to learn in the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (2), pass (1)
> **UI Navigation:** go to (6)
> **Code Identifiers:** isrevoked (1), appdbcontext (1), refreshtokenstableadded (1)
> **Env Vars:** jwt (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Prerequisites:** set up (1)

#### Generating and storing refresh tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=0)** - [Instructor] So now that you've created the refresh token stable, it is time to generate a refresh token and also store that token in the SQL database.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=12)** So, let's go to Visual Studio and see connection.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=16)** In Visual Studio, you need to go to the authentication controller and then you scroll down to the login user.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=23)** Inside the login user, we have the generateJWTTokenAsync.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=29)** Let's scroll down in here as well.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=32)** So after the token is created and you'll also generate the jwtToken using the right token method, we are going to create and store the refresh token.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=45)** So for that, in here, I'll just type var refreshToken is equal to new RefreshToken.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=55)** And then inside here, we are going to define all the properties.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=58)** The first property is going to be the JwtId is equal to the token.Id.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=66)** The second property is going to be the IsRevoked and I'm going to set the IsRevoked to false.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=73)** Then we have the UserId and the UserId is going to be the user.id.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=80)** Then, next, we have the DateAdded and the DateAdded is going to be DateTime.UtcNow, and the DateExpire is going to be the DateTime.UtcNow and it is going to expire after six months of AddMonths and then six.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=103)** Then, in here, we are going to have the token value.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=106)** So token is equal to, and the token is going to be just a really complex or secure string.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=114)** In our case, I'll just use two guids, so Guid.NewGuid, then .ToString, and to this guid, I'm going to add an additional guid, just so I can make it even stronger.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=128)** So dash then a plus in here, then guid.NewGuid and then .ToString.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=138)** Now, we have everything set up for the RefreshToken.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=142)** Next, we need to add the RefreshToken to the database on await _context.RefreshTokens.AddAsync,
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=154)** then paste the parameter of the refreshToken.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=158)** And then next, just await _context.SaveChangesAsync.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=165)** Then, at the end in the response, we need to also include the refresh token, but for that, we need to add an additional property.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=175)** So we have the token, we're going to also add the RefreshToken.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=181)** Save the changes.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=183)** And then in here, the RefreshToken is going to be the refreshToken.Token.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=191)** So now, let us save the changes around the app.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=194)** Then, in Postman, I'll just go to the post request, and then just login the user.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=200)** So the user that I already have in our database, so I click the send button.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=206)** And now the response you can see that we have the token.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=209)** We have the refreshToken and the expiresAt.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=213)** Now, let us go to Visual Studio.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=215)** In here, I'll stop Visual Studio, then go to the server explorer, then just refresh this table.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=224)** Then, right click and then show table data.
>
> **[3:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=229)** And now, in here, you can see that we have a RefreshToken.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=233)** This is the token value, this is the jwtID.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=238)** Then you have the DateAdded, the DateExpire, the UserId, and IsRevoked is set to false.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), await (2), var (1), case, (1)
> **Code Identifiers:** refreshtoken (4), generatejwttokenasync (1), jwttoken (1), expiresat (1), jwtid (1)
> **UI Navigation:** go to (5), scroll down (2)
> **Tools:** visual studio (4), postman (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Injecting TokenValidationParameters
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=0)** - [Instructor] If a token is expired, it's really important to be able to generate a new access token using a refresh token.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=9)** But before we write the actual code of refreshing tokens, we are going to first inject the token validation parameters as we are going to need it in the next part.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=20)** So let's go to Visual Studio.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=23)** In the Startup.cs, scroll down to the ConfigureServices method.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=29)** And then from here, you need to get these parts.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=33)** So you need to get the new TokenValidationParameters.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=38)** So I'm just going to select this part and then Ctrl+X to cut this value.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=45)** And then just before the Identity, I'm going to type in here var tokenValidationParameters = and then paste the token validation parameters.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=60)** Now, in here I'm going to also set the ValidateLifetime = true, and also the ClockSkew = TimeSpan.Zero.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=76)** The reason why we need to set the ClockSkew to TimeSpan.zero is because we have set the expiration time to be one minute.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=85)** And when you have a one minute expiration time, you need to also define the ClockSkew because by default, the expiration time is going to be 10 minutes.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=95)** So let us see the changes in here.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=98)** And then just after this definition, I'm going to type services.addSingleton, and then this is the parameter, the token validation parameters.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=113)** Now the TokenValidationParameters needs to also be put inside the Add JWT Bearear.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=121)** So tokenValidationParameters.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=124)** And now this is all you need to do in the Startup.cs Next, let us go to the AuthenticationController.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=131)** And then, in here, scroll down just after the configuration, I'm going to type in here private readonly, and this is going to be the TokenValidationParameters underscore the TokenValidationParameters Now let us inject the TokenValidationParameters in the constructor, so Ctrl+C Then just paste it in here, remove the underscore so they are different.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=162)** And then just assign the value to the TokenValidationParameters = TokenValidationParameters And this is all you need to do to inject the TokenValidationParameters which you are going to use in the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), var (1), default, (1), private (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Code Identifiers:** tokenvalidationparameters (2), addsingleton (1)
> **Cross-References:** in the next (2)
> **Env Vars:** jwt (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Refreshing expired tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=0)** - [Instructor] On this part, you'll learn how to generate a new access token using a refresh token.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=7)** For that, let's go to Visual Studio.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=10)** In Visual Studio, in the AuthenticationController, we are going to create a new API endpoint.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=16)** So I'm just going to copy the login-user, then just paste it down here.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=23)** Replace the login-user with refresh-token, then change the Login with RefreshToken.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=34)** We're going to also create a new view model.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=37)** So let us just go to the Solution Explorer.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=39)** Then inside the ViewModels, right-click, then go to Add.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=44)** We are going to add a new class.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=46)** We are going to name this class TokenRequestVM, and I click the Add button.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=54)** Now, inside here we are going to have two properties.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=57)** The first property is going to be of type string, and it's going to be the Token, and the second property is going to be the RefreshToken, so RefreshToken.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=70)** Now, both fields are going to be required.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=75)** So let us import the namespace for Required, and that is the date annotations, and let's add the same decorator to the RefreshToken.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=86)** Now, let us go back to the AuthenticationController and changing here the LoginVM to be the TokenRequestVM.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=97)** So this is going to be the tokenRequestVM.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=102)** We are going to first check if the model state is valid.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=105)** And if it is valid, then we are going to verify and generate a token.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=111)** So I'm just going to remove the rest of the code.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=116)** And then here I'll just type var result is equal to await VerifyAndGenerateTokenAsync, and this is going to take as a parameter the tokenRequestVM.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=133)** Now, let us create this method, so let us just generate this method.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=138)** So we have the method in here, and the response is going to be async, then we have Task AuthResultVM.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=149)** Now, the first thing that we're going to do in here is that we are going to create a JWT security token handler.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=155)** So var jwtTokenHandler is equal to the Security Token Handler.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=162)** And then inside a try-catch block, we are going to write the actual code.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=167)** But before we write any code in here, we are going to first get the token from the database and also the application user.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=174)** So for that, I'll just type in here var storedToken is equal to await, then _context.RefreshTokens .FirstDefaultAsync.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=191)** Let us import the namespace for this method.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=195)** That is the Entity Framework Core.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=197)** And then in here I'll type x that goes to x.Token is equal to the tokenRequestVM.RefreshToken.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=212)** So now that we have this storedToken or the token in the database, in the same row we also have the user ID, so now we are able to get the dbUser.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=221)** So dbUser is equal to await, then _userManager.FindByIdAsync method and pass as a parameter the storedToken.UserId.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=241)** Now, inside the try block, we are going to check if the token is valid.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=246)** So for that, I'll just type in here var tokenCheckResult is equal to, and in here I'm going to use the jwtTokenHandler.ValidateToken method which takes three parameters.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=263)** The first parameter is going to be the token itself that we want to validate, so tokenRequestVM.Token.
>
> **[4:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=271)** The second parameter is going to be the _tokenValidationParameters that we injected in the last part.
>
> **[4:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=279)** And the third parameter is going to be the actual result from this check.
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=285)** So for that, I'll just type in out var validatedToken.
>
> **[4:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=291)** Now, if the token is not valid, an exception is going to be thrown.
>
> **[4:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=297)** And if an exception is thrown, the exception type is going to be the Token expire, so SecurityTokenExpiredException.
>
> **[5:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=306)** And if the token is expired, what you need to do next is that you can just check if the storedToken actually is still valid.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=315)** So if the storedToken .DateExpire is greater than or equal to the DateTime.UtcNow, so if the storedToken or the refreshToken is still valid, then we are just going to generate a new token.
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=339)** So, basically, we are just going to call the GenerateJWTTokenAsync, so in here.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=347)** And then this will take as a first parameter the user or the dbUser, and the second parameter is going to be null.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=355)** Now, let us modify the GenerateJWTTokenAsync because now we have a second parameter, and the second parameter is going to be the RefreshToken, so rToken.
>
> **[6:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=368)** And if the refreshToken is null, so let us scroll down in here, and I'll just type in here before the refreshToken, if the refreshToken, so rToken, is different from null, what this means is that we have the refreshToken, it is valid, but we just want to generate a new token, new access token, that in that case I'm going to just construct a response in here, so var response is equal to, and actually we have this part, so var response, up here.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=410)** And the RefreshToken is going to be the rToken.Token.
>
> **[6:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=418)** And in here we have the rTokenResponse, or you can name this one anything you want, and then just return the rTokenResponse.
>
> **[7:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=430)** But if the RefreshToken is not valid, so in here, so else, then we are going to generate a new token async, but now this takes two parameters, the dbUser, and the second parameter is going to be null.
>
> **[7:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=449)** So if it is null, a new RefreshToken will also be generated.
>
> **[7:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=454)** But if it's not null, so if the storedToken is still valid, then we're not going to update the storedToken.
>
> **[7:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=462)** In here just add await, and then in here await, and now everything should work as expected.
>
> **[7:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=472)** And here don't forget the semicolon, save the changes, and now if you want, and now let us just start the app.
>
> **[8:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=481)** We see that we have an error.
>
> **[8:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=483)** And now let us just go to the errors that we have in here.
>
> **[8:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=487)** Then in here just add return await, then semicolon at the end, and in here the same way, return await, then we have the semicolon.
>
> **[8:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=501)** In here the same way, if you want to generate a new token, even though the token has not expired yet, then in that case, you can just the same method.
>
> **[8:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=510)** So just copy and paste it in here.
>
> **[8:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=512)** So we'll basically just get the existing access token or the storedToken, and not update.
>
> **[8:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=520)** The reason why it doesn't update is because we just added this condition in here.
>
> **[8:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=524)** So if the token is different from null, then we are not generating a new refreshToken.
>
> **[8:55](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=535)** Now, let us save the changes and just scroll up in here.
>
> **[9:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=540)** We see that we get an error.
>
> **[9:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=542)** And the reason for that is because we have not returned a response yet.
>
> **[9:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=547)** So just return Ok, and then pass as parameter the result, and then save the changes.
>
> **[9:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=556)** We see that we still have an error.
>
> **[9:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=558)** So I'll just go here, click, and now the reason for this error is because we updated this method.
>
> **[9:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=567)** So now let us update the code in here.
>
> **[9:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=570)** This is going to be null.
>
> **[9:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=572)** And since it is null, it is going to generate an access token and a refresh token.
>
> **[9:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=579)** Now, let us start this project and then go to Postman.
>
> **[9:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=585)** In here I'm just going to log in with my existing user.
>
> **[9:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=590)** So if I try to now, for example, just go and access the HomeController, if I click Send, you can see that I get the 401 Unauthorized error.
>
> **[10:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=601)** Now, let us go to the POST, then click Send.
>
> **[10:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=604)** This is the new token, so Control + C, then just go to Authorization and then just paste it in here and click Send.
>
> **[10:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=616)** Now, you can see that we were able to be authenticated because we have now 200 and a Welcome to HomeController.
>
> **[10:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=624)** Let us go to the POST request and actually create a new request.
>
> **[10:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=628)** So I'll just copy this part, creates a new request, this is going to be a POST, then just paste it in here.
>
> **[10:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=637)** Now, this is going to be refresh-token.
>
> **[10:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=641)** Then go to the Body part, then go to Role, and change the Text to be JSON.
>
> **[10:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=650)** Then I'll just go to the other POST request and then just copy this whole section, Control + C, and then just paste it in here, and then just remove the expiresAt.
>
> **[11:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=662)** And now I'll actually wait for the token to expire, and I've set the expire time to be one minute.
>
> **[11:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=669)** So after one minute, these requests should not be valid.
>
> **[11:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=675)** And now when you click the Send button, you see that you get the 401 Unauthorized.
>
> **[11:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=681)** Now, let me go to the refresh-token API endpoint and then just click the Send button.
>
> **[11:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=688)** You see that the request just generated a new token, but the refreshToken is still the same.
>
> **[11:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=696)** And the reason for that is because it has not expired yet, because the expiry time was set to be six months.
>
> **[11:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=704)** So let us copy the new token value, so this value, Ctrl + C, and go to the GET request, then just replace the token.
>
> **[11:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=713)** So, as you can see, the old one is expired.
>
> **[11:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=717)** Just replace the old one with the new one, and then click Send, and now you can see that you get a 200 response.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), var (7), await (7), async (2), pass (2)
> **Code Identifiers:** storedtoken (9), refreshtoken (7), tokenrequestvm (4), dbuser (4), rtoken (3)
> **UI Navigation:** go to (13), right-click (1), scroll down (1), scroll up (1)
> **Env Vars:** post (4), api (2), jwt (1), json (1)
> **API Endpoints:** post  (2), get  (1)
> **Tools:** visual studio (2), postman (1)
> **Cross-References:** go back to (1), in the last (1)
> **Analogies:** for example (1)


### 3. Role-Based Authentication

> [↑ Back to Table of Contents](#table-of-contents)

#### Seeding the database with roles
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=0)** - [Instructor] On this chapter, we are going to talk about the role-based authentication or, as we call it differently, the authorization.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=9)** To get started with this chapter, we are going to first seed the database.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=15)** So we are going to add some default roles to the database that we are going to use in the upcoming parts.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=22)** For that, let us go to Visual Studio and see it in action.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=26)** In Visual Studio, the first thing that we are going to do is that we're going to create a new file, so a new class.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=32)** And inside this class, we are going to create a method which is going to add the roles in our database.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=40)** So since this is a data-related file inside the Data folder, I'll just right-click and then go to Add, then here go to Class.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=49)** The class name is going to be AppDbInitializer, and then click the Add button.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=61)** Inside this class, I'll just type public static, this is going to be a static method, async Task.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=69)** The name is going to be SeedRolesToDb.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=76)** And the parameter is going to be the IApplicationBuilder interface, IApplicationBuilder, and then I'll just name it applicationBuilder.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=88)** Now, let us import the namespace for the IApplicationBuilder, and that is part of the Microsoft.AspNetCore.Builder.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=97)** Then inside here I'm going to create a reference to the role manager.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=102)** So for that, we need to first create a scope for the application services.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=108)** So using, and then in here var serviceScope is equal to, and then applicationBuilder.ApplicationServices.CreateScope.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=126)** Now, let us import the namespace for the CreateScope, and that is the Microsoft.Extensions.DependencyInjection.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=135)** And then inside here, we are going to create a reference to the role manager, so var roleManager is equal to, and this is going to be serviceScope.ServiceProvider.GetRequiredService.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=150)** And the service that we are going to get is the RoleManager, and we are going to pass the parameter in here the IdentityRole which is the base class for the role-related stuff in the Identity Framework.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=167)** Now, let us import the namespace for the RoleManager.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=171)** That is the AspNetCore.Identity, and that also includes the IdentityRole.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=178)** Now, down here we are going to first check if the role exists in our database.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=183)** And if it doesn't exist, then we are going to add the role to the database.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=188)** The roles that we are going to add, if we go to the Solution Explorer and then go to Controllers, we see that we have the HomeController, the ManagementController, and the StudentController.
>
> **[3:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=199)** Now, we are going to add just two roles, the Management role and the Student role.
>
> **[3:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=205)** So in here I'll just type if does not and then awaits roleManager.RoleExistsAsync, and we are going to check for the Manager role, so Manager.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=223)** So if it doesn't exist, then we are just going to add this role, so await roleManager.CreateAsync, and it will take as a parameter the IdentityRole object, so new IdentityRole, and the role is going to be Manager.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=246)** Now, if you want, you can just create some static properties and then you can use the static properties in here.
>
> **[4:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=253)** So let us just go to the Solution Explorer.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=257)** And then in the Data folder, I'll just add a new folder.
>
> **[4:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=262)** I'll name this folder Helpers.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=264)** And then inside here, I'll just create a new class.
>
> **[4:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=269)** I'm going to name this class UserRoles, and then click Add.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=275)** This is going to be a static class.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=278)** And inside it, we'll have two roles, so public const string, and then the first role is going to be Manager is equal to Manager, and the second role is going to be Student, so the value is going to be Student.
>
> **[4:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=299)** Now, let us go back to the AppDbInitializer and then in here replace the Manager with the UserRoles.
>
> **[5:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=311)** And then let us import the namespace, so UserRoles.Manager, and then just replace the other Manager down here.
>
> **[5:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=323)** And we are going to do the same for the Student role, so I'll just copy this part and then just paste it down here, change the UserRoles in here to Student and down here to Student as well.
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=339)** So we created this SeedRolesToDb method.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=342)** Now, let us just go to the Startup.cs because we need to call this method from the Startup.cs.
>
> **[5:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=352)** Then here scroll down to the Configure method.
>
> **[5:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=358)** And then after the app.UseEndpoints, we're going to seed the database.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=365)** So for that, now I'll just type in here AppDbInitializer.SeedRolesToDb, and this will take as a parameter the ApplicationBuilder.
>
> **[6:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=378)** Now, if you want, you can just wait on this method, and the error is gone.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=384)** Now, let us just run the application and see if the roles are stored in the database.
>
> **[6:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=391)** So the app started successfully.
>
> **[6:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=393)** I'll just close the browser so the app is stopped and then go to the Server Explorer.
>
> **[6:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=401)** And then in the Server Explorer, I'll just refresh the school-api-db, and then here go to Tables, and then just right-click in the AspNetRoles, and then Show Table Data.
>
> **[6:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=416)** And here you can see that the roles that we just create were stored in our database so now we can use them in the API endpoints.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (5), class. (4), class, (2), public (2)
> **UI Navigation:** go to (9), right-click (2), scroll down (1)
> **Code Identifiers:** rolemanager (3), applicationbuilder (2), servicescope (2)
> **Tools:** visual studio (2)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### Adding role claims to tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=0)** - On this part, you'll learn how to modify the token value so it also includes the user role.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=7)** For that, let us go to Visual Studio.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=10)** In Visual Studio, the first thing that we're going to update is going to be the register VM.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=15)** So for that go to data, then in here, view models, and then register VM.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=23)** And here after the password, we want to also include the user role.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=28)** So I'll just type in here role and I'll let us just go to the authentication controller.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=38)** And then inside the register user, after the user has been created, we are just going to add in here the user role.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=47)** So if the result is success, then you are going to add user role, and then we are going to return, okay.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=62)** To add the user role, we need to first check if the role is a valid role.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=67)** So switch, we are going to switch on registered VM.role.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=73)** And then you are going to check if the case is the user roles and then import the namespace for the user role.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=82)** So if the case is user roles.manager, then we are going to add this user to the role manager.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=93)** So await then underscore user manager.addtoroleasync.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=101)** And we are going to add to this role, the new user.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=104)** So new user will be added to the role userroles.manager.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=113)** Then break.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=116)** Now, let us also check for the student role because we also have the student role, so I'll just copy this section and paste it down here.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=124)** Change the userroles.manager to userroles.student.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=130)** And we're going to add this user to the student's role.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=135)** Otherwise, we are just going to default, break and we are not going to add the user to any role.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=142)** Now I'll just put a break point in here and then just start the application.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=148)** So now that we modified the register user API end point, let us also go and modify the generate JWT token method.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=158)** So let us just scroll down in here.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=164)** And we come to this method, the generate JWT token async.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=168)** And in here we have the auth claims section.
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=172)** And a role is also a claim so it basically defines, or it describes who the user is.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=179)** So for that, just after the existing auth claims, we are going to also add the user role claims.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=187)** So add user role claims.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=191)** But to be able to add the user role claims, we need to first get all the roles for the user.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=196)** So for that, I'll just type in here VAR, user roles is equal to await and underscore usermanager.getrolesasync and then pass as a parameter, the user.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=213)** Now for each user role, so for each VAR user role in user roles, we are going to add a claim, so authclaims.add, and we are going to add a new claim and the claim is going to be of type claimtypes.roles.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=232)** So claimtypes.role.
>
> **[3:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=234)** And the value for this claim is going to be the user role.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=239)** Now, in our case, in the register method, we have just assumed that the user belongs to a single role, but this implementation also supports cases when a user has multiple roles.
>
> **[4:12](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=252)** Now let us just save all the changes around the app.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=257)** Then you'll just go to the register user.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=261)** Then you try it out.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=263)** Just going to type in here students then last name.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=268)** Student's email address is going to be student@[student.com](https://student.com).
>
> **[4:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=277)** The username is going to be students.
>
> **[4:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=279)** The password is going to be coding@2021, and the role is going to be student.
>
> **[4:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=287)** Now I'll just click execute in here.
>
> **[4:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=291)** And if you scroll down in here, you're going to see that the user was created.
>
> **[4:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=296)** So now let us just go and sign in.
>
> **[4:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=299)** So now let us go and sign in using this account.
>
> **[5:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=303)** I'll scroll down in here and go to the login user and try it out.
>
> **[5:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=308)** The email address is the student@[student.com](https://student.com) and the password is coding@2021 and then click the execute button.
>
> **[5:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=318)** If you scroll down in here, you get the token, you get the refresh token and the expiresAT.
>
> **[5:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=324)** Now let us copy the token, control C and then just go to [jwt.io](https://jwt.io).
>
> **[5:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=330)** Then you go to debugger, replace the token with your token and if you scroll down in here, you can see the name is students.
>
> **[5:40](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=340)** And then in here you have the email, you have the subject, the JTI, but also the role and the role is now set to be student.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (2), await (2), var (2), return, (1)
> **UI Navigation:** go to (7), scroll down (5)
> **Env Vars:** jwt (2), var (2), api (1), jti (1)
> **URLs:** [student.com](https://student.com) (2), [jwt.io](https://jwt.io) (1)
> **Tools:** visual studio (2)
> **Code Identifiers:** expiresat (1)
> **Definitions:** is a  (1)
> **Speakers:** - on (1)

#### Adding role authentication to a controller
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=0)** - [Instructor] So far, we have just added the authorized attribute in the home controller, which required all the users to be authenticated.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=9)** And anyone, regardless of their role, could access that controller.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=14)** On this part, you'll learn how to add roles to the authorized attribute, so only the defined roles can access the controller.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=23)** So, for example, the student controller is going to be accessed just by the students and the manager controller just by the users with the manager role.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=34)** For that, let us go to Visual Studio.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=37)** In Visual Studio, I'll go to the Solution Explorer, and then you're going to go to the Controllers.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=42)** And in Controllers, I'll open the management controller and the student controller.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=48)** I the student controller I'll add the authorized attributes, so authorize then import the namespace, which is the AspNetCore.Authorization and then here, define the role.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=61)** So roles is equal to the user roles dot, and then we are going to use the student role, but let us first import the API.Data.Helpers namespace, then dot student.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=80)** So this way we have defined the student controller to be accessed just by the users, that have the student role.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=88)** So let us copy this line and then just go to the management controller, and then I'll paste that line in here.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=97)** Important namespace for the authorize, and then is the AspNetCore.Authorization and UserRoles.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=104)** So UserRoles, and that is the data.helpers.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=109)** Now, let us change the role in here to be manager and save the changes.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=117)** Now, I'll just run Visual Studio and check if everything is working as expected.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=123)** To test these controllers, I'm going to use Postman because we need to pass as a bimeter, the token value as well.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=131)** So let us first create a new user.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=134)** So register user, then go to the body and in the body, we're going to have the first name.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=146)** Let's say, the first name is going to be manager.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=150)** The last name, then we have the email address, we have the password and we're going to also have the role set to manager.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=164)** So here the email address is going to be manager@[manager.com](https://manager.com) and the password coding at 2021.
>
> **[2:56](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=176)** So I'll just click send and then you will see that we get a 400 bad request and the reason for that is because if you check the errors in here, the username is also required.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=189)** So let us add the username up here.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=191)** The username is also going to be manager and then click the send button one more time.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=201)** So we see that the user was created.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=203)** Now let us change the register user in here to be log in user and then remove the username, the first name and last name, but also the role and then click the send button.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=219)** Now you'll we see that the token is generated, so let us copy the token.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=224)** So control C, let us go to the first gets and then just go to the authorization, and this is the home controller, which just requires the users to be authenticated, it doesn't check for any roles.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=239)** And then let us just click send.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=241)** We see that we are authenticated and we get the welcome to home controller, but if I go to the student controller, because I'm logged in with the manager role, this is going to fail, but we get a 403 Forbidden.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=257)** Which means that we were able to be authenticated, but we were not authorized because the role was a different role.
>
> **[4:25](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=265)** Now let us change the controller to be management and then click the send button.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=272)** And now you can see that we get the 401, but the reason for that in these cases because the token has expired.
>
> **[4:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=279)** So then I'll just go and sign in one more time.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=282)** The token was expired because the lifetime will set to be one minutes, so control C, let us go back, paste it in here and then click send.
>
> **[4:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=293)** And now we can see that we are authenticated and authorized successfully.
>
> **[4:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=298)** Now, if you want, we can do the same for the student role, so let us just go to the post request in here.
>
> **[5:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=303)** And then in the body, I'm going to use the students@[students.com](https://students.com) and then click send, let us copy these token value, control C.
>
> **[5:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=318)** And here, try to access the management controller.
>
> **[5:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=321)** So I'll just replace a token and then click send.
>
> **[5:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=324)** We get a 403 Forbidden, but if I go and try to access the student controller and I click send, everything will work as expected because in here we see that we get the 200, OK status code, and the message is welcome to student controller.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), pass (1)
> **UI Navigation:** go to (8), open the (1)
> **Tools:** visual studio (3), postman (1)
> **URLs:** [manager.com](https://manager.com) (1), [students.com](https://students.com) (1)
> **Env Vars:** api (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding multiple roles to a controller
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=0)** - [Instructor] On the last part, you added the role-based authentication in your controller.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=5)** You updated the Student controller so it's accessible just by the Student role and the management controller just by the Manager role.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=14)** But in the identity framework, it's also possible to add multiple roles in the same controller.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=22)** You can have different roles which access all the API endpoints, or you can have different roles accessing different API endpoints within the same controller.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=34)** Let us go to Visual Studio and see it in action.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=38)** In Visual Studio, we are going to modify the HomeController and in the authorize attribute, we are going to add the Student and the Manager roles.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=47)** So for that in here I'll just type roles and the roles need to be a format string and then separated by a comma.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=57)** So the first role is going to be user roles and then let us just import the space, then in here, .Student.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=68)** Now let us join these two roles with a comma and then in here type, UserRoles.Manager.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=79)** Now down here, I'll just create another API endpoint.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=83)** So we have an httpGet.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=86)** Let us create another httpGet.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=89)** So the first one, the first httpGet is going to be let us say, Student, and the second one is going to be, let us say, Manager.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=102)** So the first one will be accessible by the Student role and the second one by the Manager role.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=108)** So GetStudent, GetManager.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=113)** Here let us change the text in your HomeController, Student, and the other one HomeController Manager.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=123)** Now with the current configuration, so we have just defined the roles in the controller level, in this case, all the API endpoints are going to be accessed by the Student role and the Manager role.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=134)** So let us start the application and test what we have just written.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=140)** In here, let us first login as a Student.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=144)** So let us go to the body and then we have in here student@[student.com](https://student.com).
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=149)** Click Send.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=152)** I'll copy the token and then go to the first request, changing here from Student to home and then slash Student.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=162)** And the just go to the authorization.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=165)** Replace the old token with the new one and click Send.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=170)** And you can see that we are able to access the Student API endpoint.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=174)** Now let us just go to the Login User and change the Student to be Manager, so manager@[manager.com](https://manager.com), and then click Send.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=187)** Let's copy the token value, go back to the httpGet, replace the old token with the new one and then click Send.
>
> **[3:19](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=199)** You can see that we are able to access the Student API endpoint, but also the Manager, you see the Manager is also accessible.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=210)** Now let us go back to Visual Studio and then here, I'll just stop Visual Studio, I'll copy the authorized line and then just paste it in here in the Student.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=222)** I'll let the role in here, just the Student role then paste the same line in the Manager.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=230)** So I'll just copy this one, paste it in here, change the role to be Manager, then save the changes.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=239)** Now let us run the app one more time.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=247)** So we can see that the app ran successfully, so let us go to Postman, and then in here, go to the http POST request for authenticating a user.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=257)** And I'm going to be authenticated as a Manager, so I have in here the email address and the password and then click the Send button.
>
> **[4:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=267)** So you can see that a token was generated.
>
> **[4:29](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=269)** I'll just copy this token, Control-C, and then go to the first request, which is the httpGet to get the Student API endpoint from the HomeController.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=283)** So just paste the token in here, but now we know that the token that we paste in here is a Manager token, and I click the Send button.
>
> **[4:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=292)** Now you'll see that you get the 403 Forbidden error, which means that the user was authenticated but was not authorized.
>
> **[5:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=300)** And that's right because we just defined that the Student API endpoint will be accessible just from the Student roles.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=309)** And here on the HomeController, then I'll just change the Student to be Manager, and then use the same token and click the Send button.
>
> **[5:18](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=318)** And you are going to see that we have the 20O OK status code.
>
> **[5:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=323)** So in here we have the message, Welcome to HomeController Manager.
>
> **[5:27](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=327)** So let us go to the POST request one more time and then here change the login user from Manager to just Student.
>
> **[5:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=335)** So student@[student.com](https://student.com) and then click the Send button.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=342)** Let us copy this token, so Control-C and then go back to the Get request.
>
> **[5:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=349)** And here now if you replace the token with the Student token and try to access the Manager API endpoint, you will get a 403 Error.
>
> **[5:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=358)** But if you try to access the Student API endpoint with a Student token, then you are going to see that you get a 200 status code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), type, (1), case, (1)
> **Env Vars:** api (10), post (2)
> **UI Navigation:** go to (9)
> **Code Identifiers:** httpget (5)
> **Tools:** visual studio (4), postman (1)
> **URLs:** [student.com](https://student.com) (2), [manager.com](https://manager.com) (1)
> **Cross-References:** go back to (3)
> **API Endpoints:** post  (2)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps for learning more token-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=0)** - [Instructor] Thank you for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=3)** During this course, we learned about the token based authentication.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=7)** You first learned about the difference between authentication and authorization, the JWT and the identity framework.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=17)** Then next you learned about authenticating users in a web API.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=21)** We at first learned how to register a user, how to generate an access and a refresh token, and also how to generate a new access token using a refresh token.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=33)** By the end of this course, we also talked about authorization.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=37)** You learned how to set a role as a claim in a user's access token.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=42)** You also learned how to add multiple roles within a single controller.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=47)** Well this is what you have learned so far, but what should you learn next?
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=52)** When we generated a new access token using a refresh token, we just checked for the expiration time.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=60)** Now you could add another check for the IsRevoked property.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=65)** You have also learned how to generate and store in the database a refresh token.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=71)** Now you could try to invalidate a refresh token by setting for example, the expiry time to a date in the past or just setting the IsRevoked property to true.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=82)** In any case, if you need help to resolve your challenges or have a question about this course, feel free to get in touch with me via Twitter or LinkedIn.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=94)** And if you want to learn more about the .net technologies, you can check out my other courses here at LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (1), api (1)
> **Code Keywords:** case, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ervis Trupja]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/asp-net-core-token-based-authentication-2427293)

## Skills Covered

- Tokens
- ASP.NET Core

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] | **6 of 9** | [[ASP.NET Core in .NET 6- Dependency Injection]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core
- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core
- [[ASP.NET Core in .NET 6- Dependency Injection]] — ASP.NET Core
- [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] — ASP.NET Core
- [[Building Angular and ASP.NET Core Applications]] — ASP.NET Core

---

[↑ Back to top](#)